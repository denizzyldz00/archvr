/**
 * Masaüstü önizleme kontrolleri (VR gözlük olmadan hızlı test için).
 * Tarayıcıda: fare ile bak (pointer lock), WASD ile yürü.
 * VR oturumu aktifken devre dışıdır; Quest'te hiç kullanılmaz.
 */
import * as THREE from "three";
import type { CollisionWorld } from "./collision.js";

/** Masaüstü yürüme hızı (m/s) — VR ile aynı, davranış tutarlı olsun */
const WALK_SPEED = 1.4;
/** Fare hassasiyeti (radyan / piksel) */
const MOUSE_SENSITIVITY = 0.002;
/** Göz yüksekliği (m) — VR'da gerçek boydan gelir, masaüstünde sabit */
const EYE_HEIGHT = 1.6;
/** Yukarı/aşağı bakış sınırı (radyan) */
const PITCH_LIMIT = Math.PI / 2 - 0.05;

export class DesktopControls {
  enabled = true;

  private readonly pressedKeys = new Set<string>();
  private pitch = 0;

  private readonly forward = new THREE.Vector3();
  private readonly right = new THREE.Vector3();
  private readonly desiredDelta = new THREE.Vector3();
  private readonly allowedDelta = new THREE.Vector3();
  private readonly bodyCenter = new THREE.Vector3();

  constructor(
    private readonly player: THREE.Group,
    private readonly camera: THREE.PerspectiveCamera,
    private readonly collision: CollisionWorld,
    canvas: HTMLCanvasElement
  ) {
    // Masaüstünde kamerayı göz yüksekliğine koy (VR bunu gerçek boyla ezer)
    camera.position.y = EYE_HEIGHT;

    canvas.addEventListener("click", () => {
      if (this.enabled && document.pointerLockElement !== canvas) {
        canvas.requestPointerLock();
      }
    });

    document.addEventListener("mousemove", (event) => {
      if (!this.enabled || document.pointerLockElement !== canvas) return;
      // Sağa-sola bakış rig'i döndürür (VR'daki joystick dönüşünün karşılığı),
      // yukarı-aşağı bakış yalnızca kamerayı eğer
      this.player.rotation.y -= event.movementX * MOUSE_SENSITIVITY;
      this.pitch = THREE.MathUtils.clamp(
        this.pitch - event.movementY * MOUSE_SENSITIVITY,
        -PITCH_LIMIT,
        PITCH_LIMIT
      );
      this.camera.rotation.x = this.pitch;
    });

    document.addEventListener("keydown", (event) => this.pressedKeys.add(event.code));
    document.addEventListener("keyup", (event) => this.pressedKeys.delete(event.code));
    window.addEventListener("blur", () => this.pressedKeys.clear());
  }

  update(deltaTime: number): void {
    if (!this.enabled) return;

    const moveForward =
      (this.pressedKeys.has("KeyW") ? 1 : 0) - (this.pressedKeys.has("KeyS") ? 1 : 0);
    const moveRight =
      (this.pressedKeys.has("KeyD") ? 1 : 0) - (this.pressedKeys.has("KeyA") ? 1 : 0);
    if (moveForward === 0 && moveRight === 0) return;

    // Bakış yönünün yere izdüşümüne göre hareket
    this.camera.getWorldDirection(this.forward);
    this.forward.y = 0;
    this.forward.normalize();
    this.right.crossVectors(this.forward, new THREE.Vector3(0, 1, 0));

    this.desiredDelta
      .set(0, 0, 0)
      .addScaledVector(this.forward, moveForward)
      .addScaledVector(this.right, moveRight)
      .normalize()
      .multiplyScalar(WALK_SPEED * deltaTime);

    this.camera.getWorldPosition(this.bodyCenter);
    this.collision.resolveMove(
      this.bodyCenter,
      this.player.position.y,
      this.desiredDelta,
      this.allowedDelta
    );
    this.player.position.add(this.allowedDelta);
  }
}
