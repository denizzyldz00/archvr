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
import { createLabelSprite, LABEL_HEIGHT_M } from "./label-sprite.js";
import type { ArchvrMetadata } from "@archvr/shared";

/** Arka plan rengi (gökyüzü yerine nötr açık ton) */
const CLEAR_COLOR = 0xdfe8f0;
/** Gece modunda arka plan (koyu gece göğü) */
const NIGHT_CLEAR_COLOR = 0x0a0e18;
/** Gündüz/gece geçiş düğmesi: xr-standard eşlemede B/Y (üst düğme) */
const NIGHT_TOGGLE_BUTTON_INDEX = 5;
/** Hemisphere ışık şiddeti — sahnedeki TEK ışık (gerçek zamanlı gölge yok) */
const LIGHT_INTENSITY = 3.0;
/**
 * VR framebuffer ölçeği: 1.0 = gözlüğün önerdiği çözünürlük. 1.2 belirgin
 * keskinlik kazandırır; unlit (pişmiş) sahnelerde Quest 3'te karşılanabilir.
 * Saha testinde takılma görülürse önce bunu 1.0'a indir.
 */
const XR_FRAMEBUFFER_SCALE = 1.2;
/**
 * Sabit foveation (0-1): 1 = kenarlar en bulanık ama en hızlı (three varsayılanı).
 * 0.7, görüş alanı kenarlarındaki bulanıklığı azaltır; maliyeti düşüktür.
 */
const XR_FOVEATION = 0.7;
/**
 * Pişmiş dokularda anizotropik filtreleme: zemine/duvara eğik bakışta dokunun
 * bulanıklaşmasını giderir (lightmap'li mimari sahnede en görünür netlik kazancı).
 * 4, Quest GPU'sunda güvenli; masaüstünde de yeterli.
 */
const TEXTURE_ANISOTROPY = 4;
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
  /** Bilgi etiketleri (oda adı/m²) — metadata.labels'tan kurulur */
  private readonly labelsGroup = new THREE.Group();
  /** Gece modu açık mı (yalnız nightBaked paketlerde kullanılabilir) */
  private nightMode = false;
  /** Kontrolcü düğmesi debounce: basılıyken tek geçiş */
  private nightButtonHeld = false;
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
    // Keskinlik ayarları: oturum başlamadan önce verilmelidir
    this.renderer.xr.setFramebufferScaleFactor(XR_FRAMEBUFFER_SCALE);
    this.renderer.xr.setFoveation(XR_FOVEATION);
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
    this.scene.add(this.labelsGroup);

    this.locomotion = new Locomotion(this.player, this.camera, this.collision);
    this.vignette = new ComfortVignette(this.camera);
    this.desktopControls = new DesktopControls(
      this.player,
      this.camera,
      this.collision,
      this.renderer.domElement
    );

    window.addEventListener("resize", () => this.onResize());
    // Masaüstü testte gündüz/gece: N tuşu
    window.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "n") this.toggleNight();
    });

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

    // Modelin tüm mesh'leri çarpışma listesine girer; dokulara da
    // anizotropik filtreleme uygulanır (eğik bakışta netlik)
    const colliders: THREE.Object3D[] = [];
    model.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      colliders.push(mesh);
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const material of materials) {
        const basic = material as THREE.MeshBasicMaterial;
        if (basic.map !== null && basic.map !== undefined) {
          basic.map.anisotropy = TEXTURE_ANISOTROPY;
        }
        const nightMap = basic.userData.nightMap as THREE.Texture | undefined;
        if (nightMap !== undefined) nightMap.anisotropy = TEXTURE_ANISOTROPY;
      }
    });
    this.collision.setColliders(colliders);

    // Bilgi etiketleri: eskileri temizle, metadata'dakileri kur
    for (const child of this.labelsGroup.children) {
      const sprite = child as THREE.Sprite;
      sprite.material.map?.dispose();
      sprite.material.dispose();
    }
    this.labelsGroup.clear();
    for (const label of metadata?.labels ?? []) {
      const sprite = createLabelSprite(label.text, label.subtext);
      sprite.position.set(
        label.position[0],
        label.position[1] + LABEL_HEIGHT_M,
        label.position[2]
      );
      this.labelsGroup.add(sprite);
    }

    this.metadata = metadata;
    this.nightMode = false;
    this.renderer.setClearColor(CLEAR_COLOR);
    this.applySpawn();
    return metadata;
  }

  /** Bu pakette gece lightmap seti var mı? */
  get nightAvailable(): boolean {
    return this.metadata?.nightBaked === true;
  }

  /** Gündüz ↔ gece geçişi: pişmiş dokular takas edilir (VR'da B/Y, masaüstünde N) */
  toggleNight(): void {
    if (!this.nightAvailable || this.currentModel === null) return;
    this.nightMode = !this.nightMode;
    this.renderer.setClearColor(this.nightMode ? NIGHT_CLEAR_COLOR : CLEAR_COLOR);
    this.currentModel.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const material of materials) {
        const basic = material as THREE.MeshBasicMaterial;
        const dayMap = basic.userData.dayMap as THREE.Texture | undefined;
        const nightMap = basic.userData.nightMap as THREE.Texture | undefined;
        if (dayMap !== undefined && nightMap !== undefined) {
          basic.map = this.nightMode ? nightMap : dayMap;
          basic.needsUpdate = true;
        }
      }
    });
  }

  /** Kontrolcülerde B/Y düğmesini yokla (basılı tutmada tek geçiş) */
  private pollNightToggle(session: XRSession | null): void {
    if (session === null || !this.nightAvailable) return;
    let pressed = false;
    for (const source of session.inputSources) {
      const button = source.gamepad?.buttons[NIGHT_TOGGLE_BUTTON_INDEX];
      if (button?.pressed === true) pressed = true;
    }
    if (pressed && !this.nightButtonHeld) this.toggleNight();
    this.nightButtonHeld = pressed;
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
      this.pollNightToggle(session);
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
