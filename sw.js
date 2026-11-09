// Cambia VERSION a ogni aggiornamento del sito: i telefoni scaricheranno la nuova versione.
const VERSION = 'nz-2026-11-09c';
const FILES = ['./', 'index.html', 'd3.min.js', 'manifest.webmanifest',
  'fonts/overpass-400.woff2', 'fonts/overpass-600.woff2', 'fonts/overpass-800.woff2',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Rete prima per la pagina (così gli aggiornamenti arrivano subito), cache se offline.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put('index.html', c)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r;
  })));
});
