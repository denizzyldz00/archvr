/**
 * Service worker — PWA çevrimdışı kabuk.
 *
 * Strateji: çalışma anı önbelleği (runtime cache). Site bir kez çevrimiçi
 * açıldığında dokunulan her dosya (HTML, JS, model, ikon) önbelleğe alınır;
 * sonraki açılışlarda önce önbellekten sunulur (cache-first), yoksa ağa gidilir.
 * Model verisi zaten IndexedDB'de olduğundan gözlük tamamen çevrimdışı çalışır.
 */
const CACHE_NAME = "archvr-v1";

self.addEventListener("install", (event) => {
  // Kabuğun çekirdeğini baştan önbelleğe al
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
  // Yalnızca aynı kaynaktan GET istekleri önbelleklenir
  if (request.method !== "GET" || !request.url.startsWith(self.location.origin)) return;

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
