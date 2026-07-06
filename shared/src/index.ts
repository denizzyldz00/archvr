/**
 * @archvr/shared — desktop ve vr-web'in ortak kullandığı kodlar.
 * Şu an: .archvr.glb paket formatı tanımı ve GLB metadata yardımcıları.
 */

export {
  ARCHVR_EXTRAS_KEY,
  ARCHVR_FORMAT_VERSION,
  ARCHVR_SUPPORTED_MAJOR,
  parseMajorVersion,
  validateMetadata,
  createMetadata,
  type ArchvrMetadata,
  type SpawnPoint,
  type PackageStats,
  type InfoLabel,
  type ValidationResult,
} from "./format.js";

export {
  GlbError,
  parseGlb,
  buildGlb,
  readArchvrMetadata,
  writeArchvrMetadata,
  type ParsedGlb,
} from "./glb.js";
