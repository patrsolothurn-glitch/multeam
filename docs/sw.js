// Multeam Service Worker - network first for app.js + index.html
const CACHE = 'multeam-v99';
const STATIC = ['/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Always fetch app.js and index.html fresh (change every deploy)
  if (url.includes('app.js') || url.includes('index.html') || url.endsWith('/multeam') || url.endsWith('/multeam/')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  // Don't cache Supabase API calls
  if (url.includes('supabase.co')) return;
  // Cache-first for static assets
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
      return res;
    })).catch(() => caches.match('/index.html'))
  );
});

// Push notifications
self.addEventListener('push', e => {
  if (!e.data) return;
  let data = {};
  try { data = e.data.json(); } catch { data = { title: 'Multeam', body: e.data.text() }; }
  e.waitUntil(
    self.registration.showNotification(data.title || 'Multeam', {
      body: data.body || '',
      icon: '/multeam/apple-touch-icon.png',
      badge: '/multeam/apple-touch-icon.png',
      tag: data.tag || 'multeam',
      data: data.url ? { url: data.url } : {},
      vibrate: [200, 100, 200],
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/multeam/';
  e.waitUntil(clients.matchAll({ type: 'window' }).then(list => {
    for (const c of list) { if (c.url.includes('multeam') && 'focus' in c) return c.focus(); }
    return clients.openWindow(url);
  }));
});
