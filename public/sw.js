const CACHE='powerfit-studio-v22';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.add('./')).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return r}).catch(()=>caches.match('./')))});
