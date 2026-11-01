const C='atvykau-v3';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','config.js'])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!=C)await caches.delete(k);await clients.claim()})()));
self.addEventListener('fetch',e=>{if(e.request.method!='GET'||e.request.headers.has('range')||/\.mp4/.test(e.request.url)||new URL(e.request.url).origin!=location.origin)return;
 e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
self.addEventListener('push',e=>{
 let d={};try{d=e.data?e.data.json():{}}catch{d={title:'Atvykau',body:e.data?e.data.text():''}}
 e.waitUntil(self.registration.showNotification(d.title||'Atvykau',{body:d.body||'',tag:d.tag||'atvykau',icon:'icon-192.png',badge:'icon-192.png',data:{url:d.url||'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
 e.waitUntil((async()=>{const l=await clients.matchAll({type:'window',includeUncontrolled:true});for(const c of l){if('focus' in c)return c.focus()}return clients.openWindow((e.notification.data&&e.notification.data.url)||'./')})())});
