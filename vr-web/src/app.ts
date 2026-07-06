/**
 * ArchVR Gezinti — ana uygulama.
 * Sahne/renderer kurulumu, paket yükleme, XR oturumu ve ana döngü.
 */
import * as THREE from "three";
import { CollisionWorld } from "./collision.js";
import { Locomotion } from "./locomotion.js";
import { ComfortVignette } from "./vignette.js";
import { DesktopControls } from "./desktop-controls.js";
import { loadArchvrPackage, loadArchvrPackageFromBuffer } from "./model-loader.js";
import type { ArchvrMetadata } from "@archvr/shared";

/** Arka plan rengi (gökyüzü yerine nötr açık ton) */
const CLEAR_COLOR = 0xdfe8f0;
/** Hemisphere ışık şiddeti — sahnedeki TEK ışık (gerçek zamanlı gölge yok) */
const LIGHT_INTENSITY = 3.0;
/** Kamera yakın/uzak kırpma düzlemleri (m) */
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 200;
/**
 * Zemin takibi (merdiven/rampa): kafanın altındaki zemin yüksekliği ölçülür,
 * rig o yüksekliğe yumuşakça çekilir. Böylece merdivende yürüyünce yükselirsin.
 */
const GROUND_FOLLOW_RATE = 8; // yaklaşma hızı (1/sn)
const MAX_STEP_UP = 0.45; // tek seferde çıkılabilir eşik (m) — basamak evet, masa hayır
const MAX_STEP_DOWN = 3; // takip edilecek en büyük düşüş (kat boşluğuna düşmeyi önler)

export class App {
  readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera: THREE.PerspectiveCamera;
  /** Rig: joystick/snap turn bunu oynatır, WebXR kamerayı bunun içinde oynatır */
  private readonly player = new THREE.Group();
  private readonly clock = new THREE.Clock();

  private readonly collision = new CollisionWorld();
  private readonly locomotion: Locomotion;
  private readonly vignette: ComfortVignette;
  private readonly desktopControls: DesktopControls;

  private metadata: ArchvrMetadata | null = null;
  private currentModel: THREE.Group | null = null;
  private readonly ambientLight: THREE.HemisphereLight;
  private readonly headPosition = new THREE.Vector3();

  constructor(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(CLEAR_COLOR);
    // 'local-floor': zemin hizalı, roomscale referans uzayı — kullanıcının
    // gerçek boyu ve odadaki gerçek konumu doğrudan kameraya işlenir
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType("local-floor");
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      CAMERA_NEAR,
      CAMERA_FAR
    );
    this.camera.rotation.order = "YXZ"; // masaüstü bakışında yalpalamayı önler
    this.player.add(this.camera);
    this.scene.add(this.player);

    // Tek ışık: yarıküre (gökyüzü + zemin rengi). Gölge YOK — Quest bütçesi için.
    // Pişmiş (baked) paketlerde bu da kapatılır: ışık dokuların içindedir.
    this.ambientLight = new THREE.HemisphereLight(0xffffff, 0x777466, LIGHT_INTENSITY);
    this.scene.add(this.ambientLight);

    this.locomotion = new Locomotion(this.player, this.camera, this.collision);
    this.vignette = new ComfortVignette(this.camera);
    this.desktopControls = new DesktopControls(
      this.player,
      this.camera,
      this.collision,
      this.renderer.domElement
    );

    window.addEventListener("resize", () => this.onResize());

    // VR oturumu girip çıkarken masaüstü kontrollerini aç/kapat
    this.renderer.xr.addEventListener("sessionstart", () => {
      this.desktopControls.enabled = false;
    });
    this.renderer.xr.addEventListener("sessionend", () => {
      this.desktopControls.enabled = true;
    });
  }

  /** Paketi URL'den yükle, sahneye ekle, spawn noktasına yerleş */
  async loadPackage(url: string): Promise<ArchvrMetadata | null> {
    const loaded = await loadArchvrPackage(url);
    return this.installPackage(loaded.scene, loaded.metadata);
  }

  /** Paketi bellekteki veriden yükle (IndexedDB / dosya seçimi) */
  async loadPackageFromBuffer(buffer: ArrayBuffer): Promise<ArchvrMetadata | null> {
    const loaded = await loadArchvrPackageFromBuffer(buffer);
    return this.installPackage(loaded.scene, loaded.metadata);
  }

  private installPackage(model: THREE.Group, metadata: ArchvrMetadata | null): ArchvrMetadata | null {
    // Önceki modeli kaldır (proje değiştirme)
    if (this.currentModel !== null) this.scene.remove(this.currentModel);
    this.currentModel = model;
    this.scene.add(model);

    // Pişmiş paketlerde sahne ışığı kapalı: unlit materyaller zaten aydınlık
    this.ambientLight.visible = metadata?.lighting !== "baked";

    // Modelin tüm mesh'leri çarpışma listesine girer
    const colliders: THREE.Object3D[] = [];
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) colliders.push(child);
    });
    this.collision.setColliders(colliders);

    this.metadata = metadata;
    this.applySpawn();
    return metadata;
  }

  /** Rig'i metadata'daki başlangıç noktasına taşı (metadata yoksa orijin) */
  applySpawn(): void {
    if (this.metadata !== null) {
      const { position, yawDegrees } = this.metadata.spawn;
      this.player.position.set(position[0], position[1], position[2]);
      this.player.rotation.set(0, THREE.MathUtils.degToRad(yawDegrees), 0);
    } else {
      this.player.position.set(0, 0, 0);
      this.player.rotation.set(0, 0, 0);
    }
  }

  /** Ana döngüyü başlat (WebXR uyumu için requestAnimationFrame değil setAnimationLoop) */
  start(): void {
    this.renderer.setAnimationLoop(() => {
      const deltaTime = this.clock.getDelta();
      const session = this.renderer.xr.getSession();

      this.locomotion.update(session, deltaTime);
      this.desktopControls.update(deltaTime);
      this.updateGroundFollow(deltaTime);
      this.vignette.update(this.locomotion.currentSpeedRatio, deltaTime);

      this.renderer.render(this.scene, this.camera);
    });
  }

  /** Kafanın altındaki zemine yumuşak oturma: merdiven çıkma/inme bununla çalışır */
  private updateGroundFollow(deltaTime: number): void {
    this.camera.getWorldPosition(this.headPosition);
    const floorY = this.collision.findFloorHeight(this.headPosition);
    if (floorY === null) return;

    const heightDelta = floorY - this.player.position.y;
    // Masa/mobilya üstüne "ışınlanma" ve kat boşluğuna düşme durumlarını ele
    if (heightDelta > MAX_STEP_UP || heightDelta < -MAX_STEP_DOWN) return;

    const blend = Math.min(1, GROUND_FOLLOW_RATE * deltaTime);
    this.player.position.y += heightDelta * blend;
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
