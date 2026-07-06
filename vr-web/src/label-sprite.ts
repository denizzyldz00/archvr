/**
 * Bilgi etiketi sprite'ı: metni canvas'a çizip her zaman kameraya bakan
 * bir Sprite olarak döner (billboard). Önizleme ve VR aynı görsel dili kullanır.
 */
import * as THREE from "three";

/** Etiket panosunun zeminden yüksekliği (göz hizasının biraz üstü) */
export const LABEL_HEIGHT_M = 1.9;
/** Canvas pikseli → dünya metresi ölçeği (130px başlık ≈ 0.35 m) */
const LABEL_PIXEL_TO_METER = 0.0027;
const TITLE_FONT = "bold 64px 'Segoe UI', sans-serif";
const SUBTEXT_FONT = "44px 'Segoe UI', sans-serif";
const PADDING_PX = 28;
const BG_COLOR = "rgba(12, 16, 24, 0.78)";
const TITLE_COLOR = "#ffffff";
const SUBTEXT_COLOR = "#9fb6d9";
const CORNER_RADIUS_PX = 22;

export function createLabelSprite(text: string, subtext?: string): THREE.Sprite {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (ctx === null) throw new Error("Canvas 2D bağlamı alınamadı.");

  // Metin genişliğini ölçüp canvas'ı ona göre boyutla
  ctx.font = TITLE_FONT;
  const titleWidth = ctx.measureText(text).width;
  ctx.font = SUBTEXT_FONT;
  const subtextWidth = subtext !== undefined ? ctx.measureText(subtext).width : 0;
  const width = Math.ceil(Math.max(titleWidth, subtextWidth)) + PADDING_PX * 2;
  const height = subtext !== undefined ? 190 : 128;
  canvas.width = width;
  canvas.height = height;

  // Yuvarlak köşeli yarı saydam zemin
  ctx.fillStyle = BG_COLOR;
  ctx.beginPath();
  ctx.roundRect(0, 0, width, height, CORNER_RADIUS_PX);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.fillStyle = TITLE_COLOR;
  ctx.font = TITLE_FONT;
  ctx.fillText(text, width / 2, 84);
  if (subtext !== undefined) {
    ctx.fillStyle = SUBTEXT_COLOR;
    ctx.font = SUBTEXT_FONT;
    ctx.fillText(subtext, width / 2, 152);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true })
  );
  sprite.scale.set(width * LABEL_PIXEL_TO_METER, height * LABEL_PIXEL_TO_METER, 1);
  return sprite;
}
