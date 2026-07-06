/**
 * .archvr.glb paket yükleyici.
 * Gömülü ArchVR metadata'sını okur, glb'yi Three.js'e yükler.
 * - meshopt sıkıştırmalı paketleri açar (EXT_meshopt_compression)
 * - "baked" paketlerde materyalleri ışıksız (MeshBasicMaterial) hale getirir:
 *   ışık zaten dokulara pişmiştir, gerçek zamanlı ışık hem yanlış hem pahalı olur
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "meshoptimizer";
import { readArchvrMetadata, type ArchvrMetadata } from "@archvr/shared";

export interface LoadedPackage {
  scene: THREE.Group;
  metadata: ArchvrMetadata | null;
}

/** Pişmiş paket: Standard materyalleri unlit'e çevir (map'i koruyarak) */
function convertToUnlit(root: THREE.Group, nightBaked: boolean): void {
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const converted = materials.map((material) => {
      const standard = material as THREE.MeshStandardMaterial;
      const basic = new THREE.MeshBasicMaterial({
        map: standard.map ?? null,
        color: standard.map !== null ? 0xffffff : (standard.color ?? new THREE.Color(0xffffff)),
      });
      basic.name = material.name;
      // Gece lightmap seti emissive dokusunda taşınır: iki dokuyu da sakla,
      // gündüz↔gece geçişi map'i takas eder (bkz. App.setNightMode)
      if (nightBaked && standard.emissiveMap !== null && standard.map !== null) {
        basic.userData.dayMap = standard.map;
        basic.userData.nightMap = standard.emissiveMap;
      }
      // Görünürlük bayraklarını KORU: mimari modellerde ince duvar/çatı gibi
      // yüzeyler çift taraflıdır; bunu düşürmek "kaybolan yapı" hatası yaratır.
      basic.side = standard.side;
      basic.transparent = standard.transparent;
      basic.opacity = standard.opacity;
      basic.alphaTest = standard.alphaTest;
      basic.alphaMap = standard.alphaMap ?? null;
      // "Transmission" tabanlı cam (KHR_materials_transmission) opak görünürdü;
      // unlit dünyada karşılığı yarı saydamlık
      const physical = standard as THREE.MeshPhysicalMaterial;
      if (typeof physical.transmission === "number" && physical.transmission > 0) {
        basic.transparent = true;
        basic.opacity = Math.min(basic.opacity, 0.35);
      }
      return basic;
    });
    mesh.material = Array.isArray(mesh.material) ? converted : converted[0];
  });
}

/** ArrayBuffer'dan paket yükle (IndexedDB veya dosya seçiminden) */
export async function loadArchvrPackageFromBuffer(buffer: ArrayBuffer): Promise<LoadedPackage> {
  // Metadata'yı düşük seviyede oku (GlbError fırlatabilir — çağıran yakalar)
  const metadata = readArchvrMetadata(buffer);

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.parseAsync(buffer, "");

  if (metadata?.lighting === "baked") {
    convertToUnlit(gltf.scene, metadata.nightBaked === true);
  }
  return { scene: gltf.scene, metadata };
}

/** URL'den paket yükle (örnek daire için) */
export async function loadArchvrPackage(url: string): Promise<LoadedPackage> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Model indirilemedi (HTTP ${response.status}). Sayfayı yenileyip tekrar deneyin.`);
  }
  return loadArchvrPackageFromBuffer(await response.arrayBuffer());
}
