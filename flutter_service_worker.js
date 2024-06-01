'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/Animation%20-%201702745357149.json": "f280d7c78878eefd904bfb1e2ca850bd",
"assets/AssetManifest.json": "92ef018335126b0b738a26c168103a67",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/1670091444307.jpg": "0464e7edc27577ba2e59e7b185c250b7",
"assets/assets/images/BackGroundImage.png": "d5c4a3254a74fea537db01543bdb2c41",
"assets/assets/images/Logo.png": "d1b3dc0b60225a8e0a290bbeb007b130",
"assets/assets/svg/app%2520store.svg": "ab514928709040a4cf901680f549ecf3",
"assets/assets/svg/ArabicTrans%2520copy.svg": "d48718c265cc05497d1dae01aa30a395",
"assets/assets/svg/ArabicTrans.svg": "f6271522c0c3d6e94a93256c631807e4",
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
"assets/assets/svg/google%2520play.svg": "3272211d3d9aadd541d6b745a356fbaf",
"assets/assets/svg/instagram-svgrepo-com.svg": "35abdb5dd3fb64e96543838cf806ea3b",
"assets/assets/svg/linkedin-svgrepo-com.svg": "781d1a07975d41923fb8ff843999e99e",
"assets/assets/svg/Mobile%2520Develpment.svg": "55a11efbe30e18f39f6eee24a94530d9",
"assets/assets/svg/programming-code-signs-svgrepo-com.svg": "226624c53bcbddfa5f2c560964b268cb",
"assets/assets/svg/succeed-svgrepo-com.svg": "912bb5e2c3b8c8079ffe46a2e8e53082",
"assets/assets/svg/twitter-svgrepo-com.svg": "a61ba854691eac43f8124650416df72f",
"assets/assets/svg/uptodown.svg": "9892a7ac7223b6b3c2fdce07eb9b4c72",
"assets/assets/svg/users-svgrepo-com.svg": "5d350fd4912ee39ead573336e3e07172",
"assets/assets/svg/whatsApp.svg": "bfa81e74e59edc0bf0f5f4f5e1fb4a46",
"assets/FontManifest.json": "32765036925fab5389d06b2c17dd6b0e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a82a6df5073291ea83a662b7fdd9919b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "8bb0ddcaf1bd3c205ffe923d79314a27",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "b564efdd91d7fd55657c8d408ad4619d",
"icons/Icon-512.png": "115a56fe6d69b8435cea2353805ae4ed",
"icons/Icon-maskable-192.png": "b564efdd91d7fd55657c8d408ad4619d",
"icons/Icon-maskable-512.png": "115a56fe6d69b8435cea2353805ae4ed",
"index.html": "796d20f0328463614895d1360a6dde54",
"/": "796d20f0328463614895d1360a6dde54",
"main.dart.js": "3da2d2b1b1de4e19e88feef3be08ba50",
"main.dart.js_1.part.js": "3bd42fc200a17653a3ce41365596dcb1",
"main.dart.js_2.part.js": "5c6c4d7f8fd1ae42de73e52feed89eb0",
"main.dart.js_3.part.js": "9e9734bdac7c51835f1908387cea9815",
"manifest.json": "8b0f8690fd771fb4126bb4f2f2f4d6f3",
"version.json": "3c26f85907045e138fda40d62f6d1c7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
