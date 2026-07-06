/**
 * Basit yatay çarpışma sistemi.
 *
 * Kısa kavram: Fizik motoru kullanmıyoruz; joystick hareketinde gövde
 * merkezinden hareket yönüne kısa bir ışın (raycast) atıp duvara çarpıyor
 * muyuz diye bakıyoruz. Eksenleri (X ve Z) ayrı ayrı denediğimiz için
 * kullanıcı duvara çapraz yürüyünce durmaz, duvar boyunca "kayar" —
 * oyunlardaki standart his.
 *
 * Not: Fiziksel yürümeyi (gerçek adımları) engelleyemeyiz; kullanıcı
 * gerçek odada yürüyüp sanal duvardan geçebilir. Bu sistem yalnızca
 * joystick hareketini sınırlar.
 */
import * as THREE from "three";
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from "three-mesh-bvh";

/**
 * BVH hızlandırması: three'nin standart ışın testi her üçgeni tek tek dener —
 * 1M+ üçgenlik sahnede her karede atılan çarpışma/zemin ışınları FPS'i düşürür.
 * BVH (sınır kutusu ağacı) bu aramayı logaritmik yapar: milyonluk sahnede bile
 * ışın testi mikrosaniyeler sürer. Aşağıdaki üç satır three'ye bu yeteneği ekler.
 */
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

/** Gövde yarıçapı: kullanıcının duvara bu mesafeden fazla yaklaşmasına izin verme (m) */
const BODY_RADIUS = 0.3;
/**
 * Işın atılan yükseklikler (BULUNDUĞUN ZEMİNDEN itibaren, m).
 * Alt ışın 0.55'te: standart merdiven basamağı (~0.17) ve eşikler bunun
 * altından geçer (zemin takibi seni üstüne çıkarır), yarım duvar/mobilya
 * gövdesi ise yine engellenir. Üst ışın duvar gövdesi için.
 */
const PROBE_OFFSETS = [0.55, 1.2];
/** Zemin arama ışınının menzili (m) — kafa hizasından aşağı */
const FLOOR_PROBE_RANGE = 10;

export class CollisionWorld {
  private readonly raycaster = new THREE.Raycaster();
  private colliders: THREE.Object3D[] = [];

  // Her karede yeni nesne üretmemek için tekrar kullanılan geçici vektörler
  private readonly tmpStep = new THREE.Vector3();
  private readonly tmpFrom = new THREE.Vector3();
  private readonly tmpDir = new THREE.Vector3();
  private readonly tmpAfterX = new THREE.Vector3();

  constructor() {
    // Yalnızca en yakın çarpma noktası gerekiyor; BVH bu modda çok daha hızlı
    this.raycaster.firstHitOnly = true;
  }

  /** Çarpışılacak nesneleri ayarla ve her geometri için BVH ağacını kur */
  setColliders(objects: THREE.Object3D[]): void {
    this.colliders = objects;
    for (const object of objects) {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) continue;
      try {
        if (mesh.geometry.boundsTree === undefined) mesh.geometry.computeBoundsTree();
      } catch {
        // BVH kurulamazsa yavaş yol devam eder (çökme yerine performans kaybı)
      }
    }
  }

  /**
   * İstenen XZ hareketini duvarlara göre kırpar.
   * @param bodyCenter Kullanıcının gövde merkezi (dünya koordinatı, XZ önemli)
   * @param floorY Kullanıcının şu an bastığı zeminin yüksekliği (ışınlar buna göre)
   * @param delta İstenen hareket (yalnızca x/z kullanılır)
   * @param out Sonucun yazılacağı vektör (izin verilen hareket)
   */
  resolveMove(
    bodyCenter: THREE.Vector3,
    floorY: number,
    delta: THREE.Vector3,
    out: THREE.Vector3
  ): THREE.Vector3 {
    out.set(0, 0, 0);
    if (this.colliders.length === 0) {
      // Henüz model yüklenmediyse serbest hareket
      return out.set(delta.x, 0, delta.z);
    }

    // X eksenini dene
    this.tmpStep.set(delta.x, 0, 0);
    if (this.isStepFree(bodyCenter, floorY, this.tmpStep)) out.x = delta.x;

    // Z eksenini, X sonucu uygulanmış konumdan dene (köşelerde sıkışmayı azaltır)
    this.tmpAfterX.set(bodyCenter.x + out.x, bodyCenter.y, bodyCenter.z);
    this.tmpStep.set(0, 0, delta.z);
    if (this.isStepFree(this.tmpAfterX, floorY, this.tmpStep)) out.z = delta.z;

    return out;
  }

  /**
   * Verilen noktanın altındaki zemin yüksekliğini bul (merdiven/rampa takibi için).
   * Kafa hizasından aşağı ışın atılır; zemin yoksa null.
   */
  findFloorHeight(from: THREE.Vector3): number | null {
    if (this.colliders.length === 0) return null;
    this.tmpDir.set(0, -1, 0);
    this.raycaster.set(from, this.tmpDir);
    this.raycaster.far = FLOOR_PROBE_RANGE;
    const hits = this.raycaster.intersectObjects(this.colliders, true);
    return hits.length > 0 ? hits[0].point.y : null;
  }

  /** Verilen adım yönünde, gövde yarıçapı payıyla engel var mı? */
  private isStepFree(from: THREE.Vector3, floorY: number, step: THREE.Vector3): boolean {
    const distance = step.length();
    if (distance === 0) return true;

    this.tmpDir.copy(step).normalize();
    this.raycaster.far = distance + BODY_RADIUS;

    for (const offset of PROBE_OFFSETS) {
      this.tmpFrom.set(from.x, floorY + offset, from.z);
      this.raycaster.set(this.tmpFrom, this.tmpDir);
      const hits = this.raycaster.intersectObjects(this.colliders, true);
      if (hits.length > 0) return false;
    }
    return true;
  }
}
