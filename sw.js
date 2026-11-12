const CACHE_NAME = 'sintonia-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Funcionamento online padrão (pass-through)
  return;
});
