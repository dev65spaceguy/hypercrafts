self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('game-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'game.js',
        'manifest.json',
        'icon192.png',
        'icon512.png'
      ]);
    })
  );
  console.log('✅ Service Worker installed');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

