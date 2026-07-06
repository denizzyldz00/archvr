// PWA ikonlarını üretir (sharp desktop workspace'inden gelir)
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#141820"/>
  <path d="M256 96 L432 240 L400 240 L400 416 L112 416 L112 240 L80 240 Z" fill="#4c7dff"/>
  <rect x="216" y="296" width="80" height="120" fill="#141820"/>
  <text x="256" y="490" font-size="72" text-anchor="middle" fill="#9db8ff" font-family="Arial, sans-serif" font-weight="bold">ArchVR</text>
</svg>`);

await Promise.all([
  sharp(svg).resize(192, 192).png().toFile(path.join(outDir, "icon-192.png")),
  sharp(svg).resize(512, 512).png().toFile(path.join(outDir, "icon-512.png")),
]);
console.log("ikonlar üretildi →", outDir);
