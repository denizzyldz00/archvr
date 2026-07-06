/**
 * .archvr.glb paket formatı tanımı.
 *
 * Bir .archvr.glb dosyası, standart bir GLB (binary glTF 2.0) dosyasıdır;
 * tek farkı, glTF JSON'unun kök `extras.archvr` alanına gömülü ArchVR
 * metadata'sı taşımasıdır. Bu sayede dosya HERHANGİ bir glTF görüntüleyicide
 * (ör. Blender, three.js editor) sorunsuz açılır — metadata'yı tanımayan
 * araçlar `extras`'ı görmezden gelir. Formatı bozmadan genişletmenin yolu:
 * yeni alanları opsiyonel ekle, mevcut alanların anlamını değiştirme,
 * kırıcı değişiklikte formatVersion'ın major'ını artır.
 */

/** Metadata'nın glTF JSON kökünde saklandığı alan adı: extras[ARCHVR_EXTRAS_KEY] */
export const ARCHVR_EXTRAS_KEY = "archvr";

/**
 * Format sürümü, "major.minor" biçiminde.
 * - minor artışı: geriye uyumlu ekleme (okuyucu bilmediği alanları yok sayar)
 * - major artışı: kırıcı değişiklik (okuyucu dosyayı reddetmeli)
 */
export const ARCHVR_FORMAT_VERSION = "1.0";

/** Bu kütüphanenin okuyabildiği en yüksek major sürüm */
export const ARCHVR_SUPPORTED_MAJOR = 1;

/** Kullanıcının VR'da başlayacağı nokta (metre cinsinden, glTF sağ-el koordinatları, +Y yukarı) */
export interface SpawnPoint {
  /** Zemin üzerindeki konum [x, y, z]. y = zemin yüksekliği (göz yüksekliği DEĞİL; roomscale'de gerçek boy kullanılır) */
  position: [number, number, number];
  /** Başlangıçta bakılan yön: +Z ekseninden saat yönünde derece (0 = -Z yönüne bakış, glTF'in "ileri"si) */
  yawDegrees: number;
}

/** Desktop uygulamasının hazırlık sırasında çıkardığı istatistikler (bilgi amaçlı, opsiyonel) */
export interface PackageStats {
  /** Sahnedeki toplam üçgen sayısı */
  triangleCount?: number;
  /** Sahnedeki nesne (mesh) sayısı */
  objectCount?: number;
  /** Tüm texture'ların toplam boyutu (byte) */
  textureBytes?: number;
}

/** .archvr.glb içine gömülen metadata'nın tamamı */
export interface ArchvrMetadata {
  /** Format sürümü, ör. "1.0" — zorunlu */
  formatVersion: string;
  /** Mimarın verdiği proje adı, VR giriş ekranında gösterilir — zorunlu */
  projectName: string;
  /** Paketin oluşturulma zamanı, ISO 8601 (ör. "2026-07-03T14:00:00Z") — zorunlu */
  createdAt: string;
  /** Paketi üreten uygulama, ör. "ArchVR Desktop 0.1.0" — zorunlu */
  generator: string;
  /** VR başlangıç noktası — zorunlu (yoksa görüntüleyici sahne merkezini kullanamaz, kullanıcı duvar içinde doğabilir) */
  spawn: SpawnPoint;
  /** Hazırlık istatistikleri — opsiyonel */
  stats?: PackageStats;
  /**
   * Işıklandırma durumu — opsiyonel (v1.0'a geriye uyumlu ekleme):
   * "baked" = ışık dokulara pişmiş, görüntüleyici sahne ışığı eklemez (unlit çizer)
   * "unbaked" / yok = görüntüleyici basit ortam ışığı ekler
   */
  lighting?: "baked" | "unbaked";
}

/** Doğrulama sonucu: geçerliyse errors boş döner */
export interface ValidationResult {
  valid: boolean;
  /** Türkçe, eyleme dönük hata mesajları (mimarın karşısına çıkabilir) */
  errors: string[];
}

/** formatVersion string'inden major sürümü çıkarır; bozuksa null döner */
export function parseMajorVersion(formatVersion: string): number | null {
  const match = /^(\d+)\.(\d+)$/.exec(formatVersion);
  if (match === null) return null;
  return Number(match[1]);
}

/** Sayı üçlüsü mü kontrolü (spawn.position için) */
function isVector3(value: unknown): value is [number, number, number] {
  return (
    Array.isArray(value) &&
    value.length === 3 &&
    value.every((n) => typeof n === "number" && Number.isFinite(n))
  );
}

/**
 * Bilinmeyen bir nesnenin geçerli ArchvrMetadata olup olmadığını doğrular.
 * Hem desktop (yazarken) hem vr-web (okurken) aynı kuralları kullanır.
 */
export function validateMetadata(value: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof value !== "object" || value === null) {
    return { valid: false, errors: ["Metadata bulunamadı: bu dosya bir ArchVR paketi değil. Dosyayı ArchVR Hazırlayıcı ile yeniden oluşturun."] };
  }

  const meta = value as Record<string, unknown>;

  if (typeof meta.formatVersion !== "string") {
    errors.push("Format sürümü eksik. Dosyayı ArchVR Hazırlayıcı ile yeniden oluşturun.");
  } else {
    const major = parseMajorVersion(meta.formatVersion);
    if (major === null) {
      errors.push(`Format sürümü bozuk: "${meta.formatVersion}". Dosyayı ArchVR Hazırlayıcı ile yeniden oluşturun.`);
    } else if (major > ARCHVR_SUPPORTED_MAJOR) {
      errors.push(`Bu dosya daha yeni bir ArchVR sürümüyle oluşturulmuş (format ${meta.formatVersion}). Uygulamayı güncelleyin.`);
    }
  }

  if (typeof meta.projectName !== "string" || meta.projectName.trim().length === 0) {
    errors.push("Proje adı eksik. Paketlemeden önce bir proje adı girin.");
  }

  if (typeof meta.createdAt !== "string" || Number.isNaN(Date.parse(meta.createdAt))) {
    errors.push("Oluşturulma tarihi eksik veya bozuk.");
  }

  if (typeof meta.generator !== "string" || meta.generator.trim().length === 0) {
    errors.push("Üretici bilgisi (generator) eksik.");
  }

  const spawn = meta.spawn as Record<string, unknown> | undefined;
  if (typeof spawn !== "object" || spawn === null) {
    errors.push("Başlangıç noktası (spawn) eksik. Paketlemeden önce başlangıç noktasını işaretleyin.");
  } else {
    if (!isVector3(spawn.position)) {
      errors.push("Başlangıç noktasının konumu (spawn.position) [x, y, z] biçiminde üç sayı olmalı.");
    }
    if (typeof spawn.yawDegrees !== "number" || !Number.isFinite(spawn.yawDegrees)) {
      errors.push("Başlangıç bakış yönü (spawn.yawDegrees) bir sayı olmalı.");
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Yeni bir metadata nesnesi için makul varsayılanları doldurur.
 * Desktop uygulaması paketleme sırasında bunu çağırıp üzerine yazar.
 */
export function createMetadata(input: {
  projectName: string;
  generator: string;
  spawn: SpawnPoint;
  stats?: PackageStats;
  lighting?: "baked" | "unbaked";
}): ArchvrMetadata {
  return {
    formatVersion: ARCHVR_FORMAT_VERSION,
    projectName: input.projectName,
    createdAt: new Date().toISOString(),
    generator: input.generator,
    spawn: input.spawn,
    ...(input.stats !== undefined ? { stats: input.stats } : {}),
    ...(input.lighting !== undefined ? { lighting: input.lighting } : {}),
  };
}
