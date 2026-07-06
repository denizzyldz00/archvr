/**
 * Konfor vinyeti (tünel görüş).
 *
 * Kısa kavram: VR'da joystick ile kayarken gözler "hareket var" derken iç
 * kulak "hareket yok" der; bu çelişki mide bulandırır (vection). Çevresel
 * görüşü hareket sırasında karartmak bu hissi büyük ölçüde azaltır —
 * ticari VR oyunlarının standart konfor tekniği.
 *
 * Uygulama: Kameraya yapışık, derinlik testi kapalı bir düzlem üzerinde
 * kenarlardan merkeze doğru siyahlaşan bir shader. Hız arttıkça tünel daralır.
 */
import * as THREE from "three";

/** Düzlemin kameradan uzaklığı (m) — yakın kırpma düzleminin hemen ötesi */
const PLANE_DISTANCE = 0.4;
/** Düzlem boyutu (m) — geniş FOV'da kenarları da kapatacak kadar büyük */
const PLANE_SIZE = 4;
/** Efektin tepki hızı (1/sn) — ani açılıp kapanmasın, yumuşak geçsin */
const FADE_RATE = 6;
/** Tam hızda tünelin yarıçapı (uv biriminde, küçük = dar tünel) */
const MIN_APERTURE = 0.35;
/** Dururken tünel yarıçapı (görüş alanının tamamen dışında) */
const MAX_APERTURE = 1.0;
/** Kenar yumuşaklığı */
const EDGE_SOFTNESS = 0.25;

export class ComfortVignette {
  /** Kullanıcı ayarı: 0 = kapalı, 1 = tam şiddet (v1'de sabit 1) */
  intensitySetting = 1;

  private readonly mesh: THREE.Mesh;
  private readonly uniforms = {
    uAperture: { value: MAX_APERTURE },
  };
  private currentLevel = 0; // 0..1 arası yumuşatılmış hareket seviyesi

  constructor(camera: THREE.Camera) {
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        uniform float uAperture;
        void main() {
          // Merkezden uzaklık (0 = merkez, ~0.7 = köşe)
          float dist = length(vUv - vec2(0.5));
          float alpha = smoothstep(uAperture, uAperture + ${EDGE_SOFTNESS.toFixed(2)}, dist);
          gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
        }
      `,
    });

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE), material);
    this.mesh.position.set(0, 0, -PLANE_DISTANCE);
    this.mesh.renderOrder = 9999; // her şeyin üstüne çiz
    this.mesh.frustumCulled = false;
    camera.add(this.mesh);
  }

  /** Her karede çağır: speedRatio = anlık hız / maks hız (0..1) */
  update(speedRatio: number, deltaTime: number): void {
    const target = THREE.MathUtils.clamp(speedRatio, 0, 1) * this.intensitySetting;
    // Üstel yumuşatma: hedefe doğru kayarak yaklaş
    const blend = 1 - Math.exp(-FADE_RATE * deltaTime);
    this.currentLevel += (target - this.currentLevel) * blend;

    this.uniforms.uAperture.value = THREE.MathUtils.lerp(
      MAX_APERTURE,
      MIN_APERTURE,
      this.currentLevel
    );
    this.mesh.visible = this.currentLevel > 0.01;
  }
}
