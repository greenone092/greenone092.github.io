var urlsToCache = [];


  urlsToCache.push("");

  urlsToCache.push("");



  
    urlsToCache.push("/");
  

  
    urlsToCache.push("/");
  

  
    urlsToCache.push("/404.html");
  

  
    urlsToCache.push("/404.html");
  

  
    urlsToCache.push("/about");
  

  
    urlsToCache.push("/about");
  

  
    urlsToCache.push("/grad");
  

  
    urlsToCache.push("/grad");
  

  

  
    urlsToCache.push("/");
  

  

  
    urlsToCache.push("/assets/css/style.css");
  


var CACHE_NAME = 'toby-lam-s-blog-cache-v1';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(urlsToCache);
  }).catch(function(err) {
    console.log('cache add err', err);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// strategies from the offline cookbook by jake archibald
// https://jakearchibald.com/2014/offline-cookbook/#serving-suggestions-responding-to-requests



  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    );
  });

