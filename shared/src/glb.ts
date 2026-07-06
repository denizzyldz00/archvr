/**
 * GLB (binary glTF 2.0) düşük seviye okuma/yazma yardımcıları.
 *
 * Kısa kavram: GLB, glTF'in tek dosyalık ikili halidir. Yapısı:
 *   [12 byte başlık: magic "glTF" + sürüm(2) + toplam uzunluk]
 *   [JSON chunk: uzunluk + tip "JSON" + glTF JSON metni (4 byte'a boşlukla hizalı)]
 *   [BIN chunk (opsiyonel): uzunluk + tip "BIN\0" + geometri/texture verisi (4 byte'a sıfırla hizalı)]
 *
 * Biz metadata'yı JSON chunk'ındaki kök `extras.archvr` alanına yazarız;
 * BIN chunk'a hiç dokunmayız. Bu dosya hem Node hem tarayıcıda çalışsın diye
 * yalnızca standart API'ler (DataView, TextEncoder/TextDecoder) kullanılır.
 */

import {
  ARCHVR_EXTRAS_KEY,
  type ArchvrMetadata,
  validateMetadata,
} from "./format.js";

// GLB sabitleri (glTF 2.0 spesifikasyonundan)
const GLB_MAGIC = 0x46546c67; // ASCII "glTF" (little-endian okunuşu)
const GLB_VERSION = 2;
const GLB_HEADER_BYTES = 12;
const CHUNK_HEADER_BYTES = 8;
const CHUNK_TYPE_JSON = 0x4e4f534a; // ASCII "JSON"
const CHUNK_TYPE_BIN = 0x004e4942; // ASCII "BIN\0"
const PAD_ALIGNMENT = 4;
const JSON_PAD_CHAR = 0x20; // boşluk
const BIN_PAD_CHAR = 0x00;

/** Ayrıştırılmış GLB: glTF JSON'u + (varsa) ikili chunk */
export interface ParsedGlb {
  /** glTF JSON kökü (asset, scenes, meshes, extras, ...) */
  json: Record<string, unknown>;
  /** BIN chunk verisi; dosyada yoksa null */
  bin: Uint8Array | null;
}

/** GLB okuma/yazma hataları için özel hata sınıfı (mesajlar Türkçe, kullanıcıya gösterilebilir) */
export class GlbError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GlbError";
  }
}

/** Girdiyi Uint8Array'e normalize eder (Node Buffer da Uint8Array'dir) */
function toBytes(data: ArrayBuffer | Uint8Array): Uint8Array {
  return data instanceof Uint8Array ? data : new Uint8Array(data);
}

/** GLB dosyasını başlık + chunk'larına ayırır */
export function parseGlb(data: ArrayBuffer | Uint8Array): ParsedGlb {
  const bytes = toBytes(data);
  if (bytes.byteLength < GLB_HEADER_BYTES) {
    throw new GlbError("Dosya çok küçük, geçerli bir GLB değil.");
  }

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  if (view.getUint32(0, true) !== GLB_MAGIC) {
    throw new GlbError("Bu bir GLB dosyası değil (dosya imzası uyuşmuyor). .glb uzantılı, binary glTF dosyası seçin.");
  }
  const version = view.getUint32(4, true);
  if (version !== GLB_VERSION) {
    throw new GlbError(`Desteklenmeyen GLB sürümü: ${version}. glTF 2.0 (GLB v2) dosyası gerekli.`);
  }
  const totalLength = view.getUint32(8, true);
  if (totalLength > bytes.byteLength) {
    throw new GlbError("GLB dosyası eksik görünüyor (beklenen uzunluk dosyadan büyük). Dosya kopyalanırken bozulmuş olabilir, yeniden aktarın.");
  }

  let json: Record<string, unknown> | null = null;
  let bin: Uint8Array | null = null;

  // Chunk'ları sırayla gez
  let offset = GLB_HEADER_BYTES;
  while (offset + CHUNK_HEADER_BYTES <= totalLength) {
    const chunkLength = view.getUint32(offset, true);
    const chunkType = view.getUint32(offset + 4, true);
    const chunkStart = offset + CHUNK_HEADER_BYTES;
    if (chunkStart + chunkLength > totalLength) {
      throw new GlbError("GLB chunk'ı dosya sınırını aşıyor, dosya bozuk.");
    }
    const chunkData = bytes.subarray(chunkStart, chunkStart + chunkLength);

    if (chunkType === CHUNK_TYPE_JSON && json === null) {
      try {
        json = JSON.parse(new TextDecoder().decode(chunkData)) as Record<string, unknown>;
      } catch {
        throw new GlbError("GLB içindeki JSON bölümü çözümlenemedi, dosya bozuk.");
      }
    } else if (chunkType === CHUNK_TYPE_BIN && bin === null) {
      bin = chunkData;
    }
    // Tanınmayan chunk tipleri spesifikasyon gereği atlanır

    offset = chunkStart + chunkLength;
    // Chunk uzunlukları zaten 4'e hizalı olmalı; değilse bir sonraki hizaya atla
    const misalignment = offset % PAD_ALIGNMENT;
    if (misalignment !== 0) offset += PAD_ALIGNMENT - misalignment;
  }

  if (json === null) {
    throw new GlbError("GLB dosyasında JSON bölümü bulunamadı, dosya bozuk.");
  }
  return { json, bin };
}

/** Veriyi 4 byte hizasına getirmek için gereken dolgu miktarı */
function paddingFor(length: number): number {
  const misalignment = length % PAD_ALIGNMENT;
  return misalignment === 0 ? 0 : PAD_ALIGNMENT - misalignment;
}

/** JSON + BIN chunk'larından geçerli bir GLB dosyası üretir */
export function buildGlb(json: Record<string, unknown>, bin: Uint8Array | null): Uint8Array {
  const jsonBytes = new TextEncoder().encode(JSON.stringify(json));
  const jsonPad = paddingFor(jsonBytes.byteLength);
  const jsonChunkLength = jsonBytes.byteLength + jsonPad;

  const binPad = bin === null ? 0 : paddingFor(bin.byteLength);
  const binChunkLength = bin === null ? 0 : bin.byteLength + binPad;

  const totalLength =
    GLB_HEADER_BYTES +
    CHUNK_HEADER_BYTES + jsonChunkLength +
    (bin === null ? 0 : CHUNK_HEADER_BYTES + binChunkLength);

  const out = new Uint8Array(totalLength);
  const view = new DataView(out.buffer);

  // Başlık
  view.setUint32(0, GLB_MAGIC, true);
  view.setUint32(4, GLB_VERSION, true);
  view.setUint32(8, totalLength, true);

  // JSON chunk
  let offset = GLB_HEADER_BYTES;
  view.setUint32(offset, jsonChunkLength, true);
  view.setUint32(offset + 4, CHUNK_TYPE_JSON, true);
  out.set(jsonBytes, offset + CHUNK_HEADER_BYTES);
  out.fill(JSON_PAD_CHAR, offset + CHUNK_HEADER_BYTES + jsonBytes.byteLength, offset + CHUNK_HEADER_BYTES + jsonChunkLength);
  offset += CHUNK_HEADER_BYTES + jsonChunkLength;

  // BIN chunk (varsa)
  if (bin !== null) {
    view.setUint32(offset, binChunkLength, true);
    view.setUint32(offset + 4, CHUNK_TYPE_BIN, true);
    out.set(bin, offset + CHUNK_HEADER_BYTES);
    out.fill(BIN_PAD_CHAR, offset + CHUNK_HEADER_BYTES + bin.byteLength, offset + CHUNK_HEADER_BYTES + binChunkLength);
  }

  return out;
}

/**
 * GLB'den ArchVR metadata'sını okur.
 * Metadata yoksa null döner; varsa ama geçersizse GlbError fırlatır.
 */
export function readArchvrMetadata(data: ArrayBuffer | Uint8Array): ArchvrMetadata | null {
  const { json } = parseGlb(data);
  const extras = json.extras as Record<string, unknown> | undefined;
  const raw = extras?.[ARCHVR_EXTRAS_KEY];
  if (raw === undefined) return null;

  const result = validateMetadata(raw);
  if (!result.valid) {
    throw new GlbError(result.errors.join(" "));
  }
  return raw as unknown as ArchvrMetadata;
}

/**
 * GLB'ye ArchVR metadata'sını gömer (varsa üzerine yazar) ve yeni dosyayı döner.
 * Geometri/texture verisine (BIN chunk) dokunulmaz.
 */
export function writeArchvrMetadata(
  data: ArrayBuffer | Uint8Array,
  metadata: ArchvrMetadata
): Uint8Array {
  const result = validateMetadata(metadata);
  if (!result.valid) {
    throw new GlbError(`Metadata geçersiz: ${result.errors.join(" ")}`);
  }

  const { json, bin } = parseGlb(data);
  const extras = (json.extras ?? {}) as Record<string, unknown>;
  extras[ARCHVR_EXTRAS_KEY] = metadata;
  json.extras = extras;
  return buildGlb(json, bin);
}
