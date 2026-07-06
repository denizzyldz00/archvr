// @archvr/shared testleri — Node'un yerleşik test koşucusuyla çalışır (node --test)
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  ARCHVR_FORMAT_VERSION,
  createMetadata,
  validateMetadata,
  parseGlb,
  buildGlb,
  readArchvrMetadata,
  writeArchvrMetadata,
  GlbError,
} from "../dist/index.js";

// Testlerde kullanılacak en küçük geçerli glTF JSON'u
function minimalGltfJson() {
  return { asset: { version: "2.0" } };
}

function sampleMetadata() {
  return createMetadata({
    projectName: "Örnek Villa",
    generator: "ArchVR Desktop 0.1.0",
    spawn: { position: [1.5, 0, -2], yawDegrees: 90 },
    stats: { triangleCount: 350000, objectCount: 42 },
  });
}

test("buildGlb + parseGlb gidiş-dönüş (BIN chunk'lı)", () => {
  const bin = new Uint8Array([1, 2, 3, 4, 5]); // 5 byte → dolgu gerektirir
  const glb = buildGlb(minimalGltfJson(), bin);

  // Toplam uzunluk 4'ün katı olmalı (GLB spesifikasyonu)
  assert.equal(glb.byteLength % 4, 0);

  const parsed = parseGlb(glb);
  assert.deepEqual(parsed.json, minimalGltfJson());
  // BIN chunk dolgusuz veriyle başlamalı (dolgu byte'ları sonda)
  assert.deepEqual(Array.from(parsed.bin.subarray(0, 5)), [1, 2, 3, 4, 5]);
});

test("metadata yaz + geri oku, birebir aynı döner", () => {
  const meta = sampleMetadata();
  const glb = buildGlb(minimalGltfJson(), new Uint8Array([9, 9, 9, 9]));

  const withMeta = writeArchvrMetadata(glb, meta);
  const readBack = readArchvrMetadata(withMeta);

  assert.deepEqual(readBack, meta);
  // Geometri verisi (BIN) değişmemiş olmalı
  const parsed = parseGlb(withMeta);
  assert.deepEqual(Array.from(parsed.bin.subarray(0, 4)), [9, 9, 9, 9]);
});

test("metadata'sız GLB'de readArchvrMetadata null döner", () => {
  const glb = buildGlb(minimalGltfJson(), null);
  assert.equal(readArchvrMetadata(glb), null);
});

test("mevcut metadata üzerine yazılabilir", () => {
  const glb = buildGlb(minimalGltfJson(), null);
  const first = writeArchvrMetadata(glb, sampleMetadata());
  const updated = { ...sampleMetadata(), projectName: "Yeni Ad" };
  const second = writeArchvrMetadata(first, updated);
  assert.equal(readArchvrMetadata(second).projectName, "Yeni Ad");
});

test("GLB olmayan veri anlaşılır hata fırlatır", () => {
  const notGlb = new TextEncoder().encode("bu bir glb degil, duz metin");
  assert.throws(() => parseGlb(notGlb), GlbError);
});

test("geçersiz metadata yazılmaya çalışılınca reddedilir", () => {
  const glb = buildGlb(minimalGltfJson(), null);
  const broken = { ...sampleMetadata(), spawn: undefined };
  assert.throws(() => writeArchvrMetadata(glb, broken), GlbError);
});

test("validateMetadata: gelecekteki major sürüm reddedilir, minor kabul edilir", () => {
  const future = { ...sampleMetadata(), formatVersion: "2.0" };
  assert.equal(validateMetadata(future).valid, false);

  const newerMinor = { ...sampleMetadata(), formatVersion: "1.7" };
  assert.equal(validateMetadata(newerMinor).valid, true);
});

test("createMetadata güncel format sürümünü basar", () => {
  assert.equal(sampleMetadata().formatVersion, ARCHVR_FORMAT_VERSION);
});
