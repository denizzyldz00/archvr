/**
 * Örnek .archvr.glb üretici (Node'da çalışır, tek seferlik araç).
 *
 * Küçük bir 1+1 daire (8m x 6m) kurar: zemin, tavan, duvarlar (kapı boşluklu
 * iç duvar) ve kutulardan mobilyalar. Three.js GLTFExporter ile GLB'ye çıkarır,
 * @archvr/shared ile ArchVR metadata'sını (spawn noktası vb.) gömer.
 *
 * Çalıştır: npm run generate:sample  (vr-web klasöründe)
 * Çıktı:   vr-web/public/models/ornek-daire.archvr.glb
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { createMetadata, writeArchvrMetadata, readArchvrMetadata } from "@archvr/shared";

// GLTFExporter tarayıcı API'si FileReader'ı kullanır; Node'da yoksa küçük bir shim kur
if (typeof globalThis.FileReader === "undefined") {
  globalThis.FileReader = class {
    onloadend = null;
    result = null;
    readAsArrayBuffer(blob) {
      blob.arrayBuffer().then((buf) => {
        this.result = buf;
        this.onloadend?.();
      });
    }
    readAsDataURL(blob) {
      blob.arrayBuffer().then((buf) => {
        this.result = `data:${blob.type || "application/octet-stream"};base64,${Buffer.from(buf).toString("base64")}`;
        this.onloadend?.();
      });
    }
  };
}

// ---- Daire ölçüleri (metre) ----
const APARTMENT_WIDTH = 8; // x ekseni
const APARTMENT_DEPTH = 6; // z ekseni
const WALL_HEIGHT = 2.6;
const WALL_THICKNESS = 0.1;
const DOOR_HEIGHT = 2.05;
const DOOR_WIDTH = 0.9;

/** Renkli kutu mesh'i üret (tüm geometri kutulardan — örnek model için yeterli) */
function box(name, width, height, depth, x, y, z, color) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0 })
  );
  mesh.name = name;
  mesh.position.set(x, y, z);
  return mesh;
}

function buildApartment() {
  const root = new THREE.Group();
  root.name = "OrnekDaire";

  const halfW = APARTMENT_WIDTH / 2; // 4
  const halfD = APARTMENT_DEPTH / 2; // 3
  const wallY = WALL_HEIGHT / 2;

  // Zemin ve tavan (duvar kalınlığı kadar taşmalı ki köşede boşluk kalmasın)
  root.add(box("Zemin", APARTMENT_WIDTH + 0.2, 0.1, APARTMENT_DEPTH + 0.2, 0, -0.05, 0, 0xb8a98c));
  root.add(box("Tavan", APARTMENT_WIDTH + 0.2, 0.1, APARTMENT_DEPTH + 0.2, 0, WALL_HEIGHT + 0.05, 0, 0xf2efe9));

  // Dış duvarlar
  const wallColor = 0xe8e2d6;
  root.add(box("KuzeyDuvar", APARTMENT_WIDTH + 0.2, WALL_HEIGHT, WALL_THICKNESS, 0, wallY, -halfD - 0.05, wallColor));

  // Güney duvarı: ortasında pencereli (x: -1..1, y: 0.9..2.1) — cam pişirme
  // hattını test eder ve içeriye gün ışığı sokar
  const windowLeft = -1;
  const windowRight = 1;
  const sillHeight = 0.9;
  const windowTop = 2.1;
  const southZ = halfD + 0.05;
  const sideWidth = halfW + 0.1 - windowRight; // 3.1
  root.add(box("GuneyDuvarSol", sideWidth, WALL_HEIGHT, WALL_THICKNESS, -(windowRight + sideWidth / 2), wallY, southZ, wallColor));
  root.add(box("GuneyDuvarSag", sideWidth, WALL_HEIGHT, WALL_THICKNESS, windowRight + sideWidth / 2, wallY, southZ, wallColor));
  root.add(box("PencereAlti", windowRight - windowLeft, sillHeight, WALL_THICKNESS, 0, sillHeight / 2, southZ, wallColor));
  root.add(box("PencereUstu", windowRight - windowLeft, WALL_HEIGHT - windowTop, WALL_THICKNESS, 0, (WALL_HEIGHT + windowTop) / 2, southZ, wallColor));

  // Pencere camı: yarı saydam malzeme (bake bunu "cam" olarak tanıyıp korumalı)
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(windowRight - windowLeft, windowTop - sillHeight, 0.02),
    new THREE.MeshStandardMaterial({
      color: 0xbfdcE8,
      roughness: 0.05,
      metalness: 0,
      transparent: true,
      opacity: 0.3,
    })
  );
  glass.name = "PencereCami";
  glass.position.set(0, (sillHeight + windowTop) / 2, southZ);
  root.add(glass);
  root.add(box("BatiDuvar", WALL_THICKNESS, WALL_HEIGHT, APARTMENT_DEPTH, -halfW - 0.05, wallY, 0, wallColor));
  root.add(box("DoguDuvar", WALL_THICKNESS, WALL_HEIGHT, APARTMENT_DEPTH, halfW + 0.05, wallY, 0, wallColor));

  // İç duvar: x = 1 hattında, salonu (batı) yatak odasından (doğu) ayırır.
  // Kapı boşluğu: z = 1.05 .. 1.95 (0.9m genişlik)
  const innerX = 1;
  const doorZStart = 1.05;
  const doorZEnd = doorZStart + DOOR_WIDTH; // 1.95
  const innerColor = 0xded6c4;

  // Parça A: z = -3 .. 1.05
  const segALength = doorZStart - -halfD; // 4.05
  root.add(box("IcDuvarA", WALL_THICKNESS, WALL_HEIGHT, segALength, innerX, wallY, (-halfD + doorZStart) / 2, innerColor));
  // Parça B: z = 1.95 .. 3
  const segBLength = halfD - doorZEnd; // 1.05
  root.add(box("IcDuvarB", WALL_THICKNESS, WALL_HEIGHT, segBLength, innerX, wallY, (doorZEnd + halfD) / 2, innerColor));
  // Kapı üstü lento: y = 2.05 .. 2.6
  const lintelHeight = WALL_HEIGHT - DOOR_HEIGHT; // 0.55
  root.add(box("KapiLento", WALL_THICKNESS, lintelHeight, DOOR_WIDTH, innerX, DOOR_HEIGHT + lintelHeight / 2, (doorZStart + doorZEnd) / 2, innerColor));

  // Salon mobilyaları (x: -4 .. 1)
  root.add(box("Koltuk", 0.9, 0.8, 2.0, -3.4, 0.4, -1.2, 0x8a4b4b));
  root.add(box("Sehpa", 0.9, 0.4, 0.6, -2.3, 0.2, -1.2, 0x6b4f2e));
  root.add(box("MutfakTezgahi", 2.4, 0.9, 0.6, -0.7, 0.45, -2.6, 0x4f6b6b));
  root.add(box("YemekMasasi", 1.2, 0.75, 0.8, -0.5, 0.375, 1.8, 0x7a5c3a));

  // Yatak odası mobilyaları (x: 1 .. 4)
  root.add(box("Yatak", 2.0, 0.5, 1.6, 2.9, 0.25, -1.9, 0x4b5c8a));
  root.add(box("Gardirop", 0.6, 2.0, 1.8, 3.6, 1.0, 2.0, 0x5c4a3a));

  return root;
}

/** Sahnedeki toplam üçgen ve nesne sayısını hesapla */
function computeStats(root) {
  let triangleCount = 0;
  let objectCount = 0;
  root.traverse((child) => {
    if (child.isMesh) {
      objectCount += 1;
      const index = child.geometry.getIndex();
      triangleCount += (index !== null ? index.count : child.geometry.getAttribute("position").count) / 3;
    }
  });
  return { triangleCount, objectCount };
}

// ---- Üretim ----
const scene = buildApartment();
const stats = computeStats(scene);

const exporter = new GLTFExporter();
const glbBuffer = await exporter.parseAsync(scene, { binary: true });

const metadata = createMetadata({
  projectName: "Örnek Daire (1+1)",
  generator: "ArchVR Örnek Üretici 0.1.0",
  // Salonun ortasında, yatak odası kapısına dönük başla (-90° = +X yönüne bakış)
  spawn: { position: [-1.5, 0, 0.5], yawDegrees: -90 },
  stats,
});
const packaged = writeArchvrMetadata(new Uint8Array(glbBuffer), metadata);

// Doğrulama: yazdığımızı geri okuyabiliyor muyuz?
const check = readArchvrMetadata(packaged);
if (check === null || check.projectName !== metadata.projectName) {
  throw new Error("Doğrulama başarısız: metadata geri okunamadı!");
}

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "models");
await mkdir(outDir, { recursive: true });
const outPath = path.join(outDir, "ornek-daire.archvr.glb");
await writeFile(outPath, packaged);

console.log(`✅ Üretildi: ${outPath}`);
console.log(`   Boyut: ${(packaged.byteLength / 1024).toFixed(1)} KB`);
console.log(`   Üçgen: ${stats.triangleCount}, Nesne: ${stats.objectCount}`);
console.log(`   Spawn: [${metadata.spawn.position.join(", ")}], yaw ${metadata.spawn.yawDegrees}°`);
