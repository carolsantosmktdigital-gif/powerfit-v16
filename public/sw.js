const CACHE='powerfit-studio-v28';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.add('./')).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return r}).catch(()=>caches.match('./')))});

self.addEventListener("message",event=>{if(event.data?.type==="CLEAR_OLD_CACHES"){event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));}});
