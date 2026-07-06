import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages alt dizinde (username.github.io/archvr) çalışacağı için
  // mutlak yerine göreli yollar kullanıyoruz
  base: "./",
  build: {
    // Quest tarayıcısı güncel Chromium'dur, eski tarayıcı desteği gereksiz
    target: "es2020",
  },
});
