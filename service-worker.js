const CACHE_NAME = "ecoESIM-v4";
const urlsToCache = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)));
});

self.addEventListener("fetch", e => {
  // Laisse passer les requêtes Typebot sans les bloquer
  if (e.request.url.startsWith("https://typebot.io")) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

