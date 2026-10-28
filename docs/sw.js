// Multeam Service Worker
// A app (index.html, app.js e React): rede primeiro, com limite de 4 s; a cópia guardada só serve quando a rede falha
// (sem ligação, site em baixo, erro 404/5xx) ou demora mais do que o limite. O resto: cache primeiro, como antes.
const CACHE = 'multeam-v320';
const BUILD = CACHE.split('-v')[1];
const NET_TIMEOUT = 4000;
const REACT = [
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
];
const STATIC = ['/manifest.json', '/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // A app tem de ficar completa. Se algum destes falhar, a instalação falha e o service worker anterior continua a funcionar
    for (const u of ['/', '/index.html', '/app.js?v=' + BUILD]) {
      const r = await fetch(new Request(u, { cache: 'reload' }));
      if (!r.ok || r.redirected) throw new Error('precache ' + u + ' ' + r.status);
      await c.put(u, r);
    }
    await c.addAll(STATIC).catch(()=>{});
    // React: melhor esforço, com limite de tempo (não impede a instalação)
    await Promise.all(REACT.map(async u => {
      try {
        const ctl = new AbortController();
        const t = setTimeout(() => ctl.abort(), 8000);
        const r = await fetch(new Request(u, { mode: 'cors', cache: 'reload' }), { signal: ctl.signal });
        clearTimeout(t);
        if (r.ok) await c.put(u, r);
      } catch (err) {}
    }));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

const esperar = ms => new Promise(r => setTimeout(r, ms));
// Depois de um pedido da app falhar ou passar o limite, os seguintes esperam só 1 s durante 30 s (o arranque não demora 4 s por ficheiro)
let redeLentaAte = 0;

// Pedidos da app: a página (só "/" em navegação e /index.html), o app.js e o React do unpkg
function eDaApp(req) {
  const u = new URL(req.url);
  if (u.origin === self.location.origin) {
    if (u.pathname === '/app.js' || u.pathname === '/index.html') return true;
    return req.mode === 'navigate' && u.pathname === '/';
  }
  return REACT.includes(req.url);
}

// Chave da cópia: a página guarda-se sempre em "/" (o ?convite= etc. não cria cópias novas)
function chaveDaCopia(req) {
  const u = new URL(req.url);
  if (u.origin === self.location.origin && u.pathname === '/index.html') return '/index.html';
  if (u.origin === self.location.origin && u.pathname === '/') return '/';
  return req.url;
}

async function copiaGuardada(req) {
  const c = await caches.open(CACHE);
  const u = new URL(req.url);
  if (u.origin === self.location.origin && u.pathname === '/app.js') {
    // último recurso: o app.js de outra versão, se o desta não estiver guardado
    return (await c.match(req)) || (await c.match(req, { ignoreSearch: true }));
  }
  if (u.origin === self.location.origin) return (await c.match('/')) || (await c.match('/index.html'));
  return c.match(req);
}

async function redePrimeiro(e) {
  const req = e.request;
  const rede = fetch(req, { cache: 'no-store' }).then(res => {
    if (res.ok) {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(chaveDaCopia(req), copia)).catch(()=>{});
    }
    return res;
  });
  const limite = Date.now() < redeLentaAte ? 1000 : NET_TIMEOUT;
  const primeiro = await Promise.race([rede.catch(() => 'falhou'), esperar(limite).then(() => 'tempo')]);
  if (primeiro !== 'falhou' && primeiro !== 'tempo' && primeiro.ok) return primeiro;
  redeLentaAte = Date.now() + 30000;
  // Sem ligação, erro HTTP (ex.: o GitHub devolve 404 quando o Pages está desligado) ou mais de 4 s: usa a cópia guardada
  const guardada = await copiaGuardada(req);
  if (guardada) { e.waitUntil(rede.catch(()=>{})); return guardada; }
  // Sem cópia guardada: o que a rede der, como antes
  return primeiro === 'falhou' || primeiro === 'tempo' ? rede : primeiro;
}

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Vídeos (.mp4): o browser trata dos pedidos por partes (Range); não passam pela cache
  if (url.includes('.mp4')) return;
  if (eDaApp(e.request)) { e.respondWith(redePrimeiro(e)); return; }
  // Outros endereços com app.js, index.html ou o domínio na raiz (ex.: /sobre/index.html): como antes, sempre à rede
  if (url.includes('app.js') || url.includes('index.html') || url.endsWith('multeam.ch') || url.endsWith('multeam.ch/')) {
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
    })).catch(() => Response.error())
  );
});

// Push notifications
self.addEventListener('push', e => {
  let title = 'Multeam';
  let body = 'Nova notificação — abre o app para ver';
  if (e.data) {
    try { const d = e.data.json(); title = d.title || title; body = d.body || body; } catch {}
  }
  e.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: '/apple-touch-icon.png',
      badge: '/apple-touch-icon.png',
      tag: 'multeam',
      vibrate: [200, 100, 200],
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil(clients.matchAll({ type: 'window' }).then(list => {
    for (const c of list) { if (c.url.includes('multeam') && 'focus' in c) return c.focus(); }
    return clients.openWindow(url);
  }));
});
