/**
 * Hibrit hareket sistemi (VR içi).
 *
 * Birincil hareket = kullanıcının GERÇEK adımları. Bu kodda görünmez:
 * WebXR 'local-floor' referans uzayı, kafanın odadaki konumunu doğrudan
 * kameraya işler; biz hiçbir şey yapmayız (roomscale, 6DoF).
 *
 * Bu modül İKİNCİL hareketi yönetir — fiziksel alan bitince:
 * - Sol joystick: yavaş kayarak ilerleme (maks yürüme hızı), kafa yönüne göre
 * - Sağ joystick: sürekli dönüş (smooth turn) — çubuk ne kadar yatarsa o kadar
 *   hızlı döner. Sürekli dönüş vection (bkz. vignette.ts) riski taşıdığından
 *   dönüş sırasında konfor vinyeti de devreye girer.
 *
 * Kısa kavram: "Rig/player" tekniği — kamerayı bir Group içine koyarız.
 * WebXR kamerayı odadaki gerçek konuma göre oynatır; joystick/dönüş ise
 * bu Group'u (sanal dünyadaki "oda kaydırması") hareket ettirir. İkisi toplanır.
 */
import * as THREE from "three";
import type { CollisionWorld } from "./collision.js";

/** Maksimum joystick hızı (m/s) — normal yürüme temposu, konfor sınırı */
const MAX_SPEED = 1.4;
/** Sürekli dönüşte TAM sapmadaki açısal hız (derece/sn) — konfor üst sınırı */
const MAX_TURN_SPEED_DEG = 90;
/**
 * Dönüş tepki eğrisi üssü: sapma bu üsle hıza çevrilir (2 = kare).
 * Merkez yakınında hassas ince ayar, uçta hızlı dönüş sağlar; 1 = doğrusal.
 */
const TURN_RESPONSE_EXPONENT = 2;
/** Joystick ölü bölgesi: bunun altındaki sapmalar yok sayılır (sürüklenmeyi önler) */
const STICK_DEADZONE = 0.15;
/** xr-standard gamepad eşlemesinde thumbstick eksen indeksleri */
const THUMBSTICK_AXIS_X = 2;
const THUMBSTICK_AXIS_Y = 3;

const UP = new THREE.Vector3(0, 1, 0);

export class Locomotion {
  /** Joystick ile kayma açık mı? (ayarlar menüsünden kapatılabilir — v1'de hep açık) */
  smoothMoveEnabled = true;
  /** Vignette efekti için: anlık kayma hızı oranı 0..1 */
  currentSpeedRatio = 0;
  /** Vignette efekti için: anlık dönüş hızı oranı 0..1 */
  currentTurnRatio = 0;

  // Geçici vektörler (her karede ayırma yapmamak için)
  private readonly forward = new THREE.Vector3();
  private readonly right = new THREE.Vector3();
  private readonly desiredDelta = new THREE.Vector3();
  private readonly allowedDelta = new THREE.Vector3();
  private readonly headPos = new THREE.Vector3();
  private readonly headBefore = new THREE.Vector3();
  private readonly headAfter = new THREE.Vector3();

  constructor(
    private readonly player: THREE.Group,
    private readonly camera: THREE.Camera,
    private readonly collision: CollisionWorld
  ) {}

  /** Her karede XR oturumundaki kontrolcü girdilerini işle */
  update(session: XRSession | null, deltaTime: number): void {
    this.currentSpeedRatio = 0;
    this.currentTurnRatio = 0;
    if (session === null) return;

    for (const source of session.inputSources) {
      const gamepad = source.gamepad;
      if (!gamepad || gamepad.axes.length <= THUMBSTICK_AXIS_Y) continue;

      if (source.handedness === "left") {
        this.handleSmoothMove(gamepad, deltaTime);
      } else if (source.handedness === "right") {
        this.handleSmoothTurn(gamepad, deltaTime);
      }
    }
  }

  /** Sol çubuk: kafa yönüne göre yürüme hızında kayma, duvar çarpışmalı */
  private handleSmoothMove(gamepad: Gamepad, deltaTime: number): void {
    if (!this.smoothMoveEnabled) return;

    const stickX = gamepad.axes[THUMBSTICK_AXIS_X];
    const stickY = gamepad.axes[THUMBSTICK_AXIS_Y];
    const magnitude = Math.hypot(stickX, stickY);
    if (magnitude < STICK_DEADZONE) return;

    // Kafanın baktığı yönün yere izdüşümü = "ileri"
    this.camera.getWorldDirection(this.forward);
    this.forward.y = 0;
    if (this.forward.lengthSq() === 0) return; // tam yukarı/aşağı bakılıyorsa atla
    this.forward.normalize();
    this.right.crossVectors(this.forward, UP); // ileri × yukarı = sağ

    // Çubuk yukarı = ileri (eksen -1), sağa = sağa
    const speed = Math.min(magnitude, 1) * MAX_SPEED;
    this.desiredDelta
      .set(0, 0, 0)
      .addScaledVector(this.forward, -stickY)
      .addScaledVector(this.right, stickX)
      .normalize()
      .multiplyScalar(speed * deltaTime);

    // Çarpışma: gövde merkezi = kafanın dünya konumu (XZ);
    // zemin referansı = rig'in bulunduğu yükseklik (merdivende yükselir)
    this.camera.getWorldPosition(this.headPos);
    this.collision.resolveMove(
      this.headPos,
      this.player.position.y,
      this.desiredDelta,
      this.allowedDelta
    );
    this.player.position.add(this.allowedDelta);

    this.currentSpeedRatio = speed / MAX_SPEED;
  }

  /**
   * Sağ çubuk: sapmayla orantılı sürekli dönüş, kafa konumu sabit pivot.
   * Hafif itiş = yavaş ince ayar, tam itiş = MAX_TURN_SPEED_DEG/sn.
   */
  private handleSmoothTurn(gamepad: Gamepad, deltaTime: number): void {
    const stickX = gamepad.axes[THUMBSTICK_AXIS_X];
    const magnitude = Math.abs(stickX);
    if (magnitude < STICK_DEADZONE) return;

    // Ölü bölge sonrasını 0..1'e normalle, tepki eğrisinden geçir
    const normalized =
      (Math.min(magnitude, 1) - STICK_DEADZONE) / (1 - STICK_DEADZONE);
    const speedRatio = Math.pow(normalized, TURN_RESPONSE_EXPONENT);

    // Sağa itince saat yönünde (negatif Y dönüşü)
    const angle =
      -Math.sign(stickX) *
      speedRatio *
      THREE.MathUtils.degToRad(MAX_TURN_SPEED_DEG) *
      deltaTime;

    // Rig'i kendi ekseninde döndürünce kafa yer değiştirir;
    // dönüş öncesi/sonrası kafa konum farkını geri ekleyerek kafayı sabit tutarız
    this.camera.getWorldPosition(this.headBefore);
    this.player.rotateY(angle);
    this.player.updateMatrixWorld(true);
    this.camera.getWorldPosition(this.headAfter);
    this.player.position.add(this.headBefore.sub(this.headAfter));

    this.currentTurnRatio = speedRatio;
  }
}
