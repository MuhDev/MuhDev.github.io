'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "531170b24981d5e2b548dca7adcfdcd2",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/1670091444307.jpg": "0464e7edc27577ba2e59e7b185c250b7",
"assets/assets/images/Animation%2520Login%2520Form.png": "4b59d05040f2001dc9e8f8b649fff697",
"assets/assets/images/BackGroundImage.png": "05b891f455a8d623bc18d95aa15e0050",
"assets/assets/images/CoffeApp.png": "91ef0f4f75be048935ceea29f999f373",
"assets/assets/images/Logo.png": "d1b3dc0b60225a8e0a290bbeb007b130",
"assets/assets/images/myPic.png": "8e2725d874272c33a425e132c729b70d",
"assets/assets/images/offersapp.png": "6027a8bee25944573469656fcd3a816d",
"assets/assets/images/TravelApp.png": "4724028e54df761ad00f760e7ef89bfd",
"assets/assets/images/WebSiteChallange.png": "cfba2ad58bd8ed8129c2a3f91cf0e5e7",
"assets/assets/images/WebSiteChallange2.png": "e7a02aedc5517b1edec192e588720372",
"assets/assets/images/WorldCupApp.png": "f1fb7ed87a800df0b9f5ea108962d5c6",
"assets/assets/svg/ArabicTrans.svg": "f6271522c0c3d6e94a93256c631807e4",
"assets/assets/svg/Artboard%25201.svg": "a40faa8d0b600705cf5244fd04156438",
"assets/assets/svg/BritghnessModeActive.svg": "03d68b4ad59d89a77e9b380f4476601e",
"assets/assets/svg/cleaning-brush-and-machine-outline-svgrepo-com.svg": "d2ab23faf61ad2b3837cc0d7f34e8eae",
"assets/assets/svg/cloud-networking-svgrepo-com.svg": "171257309a7c90052c0d2bb9a39861ef",
"assets/assets/svg/DarkModeActive.svg": "0f3e251444de143bea75f6f85bd6a60a",
"assets/assets/svg/email.svg": "2cb7b905d7505a90926cea4df1df8578",
"assets/assets/svg/emailSvg.svg": "9478f1f59bf238263a0951463e273b20",
"assets/assets/svg/EnglishTrans.svg": "8d6d0fd671f92e11c9aeb38f55b171e5",
"assets/assets/svg/file-json-svgrepo-com.svg": "c22e1345b540562c99981a205cfb3825",
"assets/assets/svg/folder-svgrepo-com.svg": "eb814c2593287cef94f932fccb7dc56a",
"assets/assets/svg/github-svgrepo-com.svg": "a6d8c48cdc66316c579ced5a55cb88ac",
"assets/assets/svg/instagram-svgrepo-com.svg": "35abdb5dd3fb64e96543838cf806ea3b",
"assets/assets/svg/linkedin-svgrepo-com.svg": "781d1a07975d41923fb8ff843999e99e",
"assets/assets/svg/Mobile%2520Develpment.svg": "55a11efbe30e18f39f6eee24a94530d9",
"assets/assets/svg/mypic.svg": "c528f3c48810216ee47a2431471c6642",
"assets/assets/svg/programming-code-signs-svgrepo-com.svg": "226624c53bcbddfa5f2c560964b268cb",
"assets/assets/svg/succeed-svgrepo-com.svg": "912bb5e2c3b8c8079ffe46a2e8e53082",
"assets/assets/svg/twitter-svgrepo-com.svg": "a61ba854691eac43f8124650416df72f",
"assets/assets/svg/users-svgrepo-com.svg": "5d350fd4912ee39ead573336e3e07172",
"assets/assets/svg/whatsApp.svg": "bfa81e74e59edc0bf0f5f4f5e1fb4a46",
"assets/FontManifest.json": "99b0cda0eaed6dde4302bf868d2f0f35",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8449130e65640cb0f1b594879e36c50d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "8bb0ddcaf1bd3c205ffe923d79314a27",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "b564efdd91d7fd55657c8d408ad4619d",
"icons/Icon-512.png": "115a56fe6d69b8435cea2353805ae4ed",
"icons/Icon-maskable-192.png": "b564efdd91d7fd55657c8d408ad4619d",
"icons/Icon-maskable-512.png": "115a56fe6d69b8435cea2353805ae4ed",
"index.html": "328aff9c578b18136a36505f172ade0c",
"/": "328aff9c578b18136a36505f172ade0c",
"main.dart.js": "2398a2e61114064edad585702f69000d",
"main.dart.js_1.part.js": "1f0f5c189f677477948904118ac4c493",
"main.dart.js_2.part.js": "8c4ff6757d53a5d8dd309cfb6c7f2203",
"main.dart.js_3.part.js": "848d7a4969e5be8302522264d5c98223",
"manifest.json": "1af20a95c0d633cc07be65c623d20ea1",
"version.json": "3c26f85907045e138fda40d62f6d1c7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
