/**
 * Service worker — PWA çevrimdışı kabuk.
 *
 * Strateji:
 * - Sayfa gezinmeleri (index.html): ÖNCE AĞ, çevrimdışıysa önbellek.
 *   Böylece site güncellemeleri hemen görünür; internet yokken eski kabuk açılır.
 * - Diğer dosyalar (JS/ikon/model): önce önbellek (dosya adları içerik damgalı,
 *   değişince adı da değişir — bayat kalma riski yok).
 */
const CACHE_NAME = "archvr-v2";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(["./", "./manifest.webmanifest"]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Eski sürüm önbelleklerini temizle
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // Yalnızca aynı kaynaktan GET istekleri
  if (request.method !== "GET" || !request.url.startsWith(self.location.origin)) return;

  // Sayfa gezinmesi: ağ öncelikli (güncelleme gelsin), çevrimdışıysa önbellek
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) ?? (await caches.match("./")))
    );
    return;
  }

  // Statik varlıklar: önbellek öncelikli
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ??
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
    )
  );
});
