"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/HaoQiLab/static/css/Page/Document/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Donations/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/History/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Index/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Me/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Play/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ProductCenter/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactEx/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Template/Default/App.f1778c2a.css","1c6e0e62997e26a637e06a956117defd"],["/HaoQiLab/static/js/Lib/Antd.Base.js","b2ee1f14ca3550c40873e91676771dde"],["/HaoQiLab/static/js/Lib/Antd.Ex.js","9a797ec845c43637d30e4cc2b49265a1"],["/HaoQiLab/static/js/Lib/Mobx.js","fdd47207e894f05ecdceb173b5ba1037"],["/HaoQiLab/static/js/Page/Document/Content/Affix.js","a031fe02b2fc0ad89fa250cdc4780bc5"],["/HaoQiLab/static/js/Page/Document/Content/BackTop.js","5927a37f6dbc12440bdd34ea3b3c09b0"],["/HaoQiLab/static/js/Page/Document/Content/Breadcrumb.js","d7034300a77b552e6b25cc245e58a8a9"],["/HaoQiLab/static/js/Page/Document/Content/Button.js","54ad069e3830f8b92adce7f287e63d0e"],["/HaoQiLab/static/js/Page/Document/Content/Dropdown.js","68aca14c416302e19b7a9efcaad7a7fb"],["/HaoQiLab/static/js/Page/Document/Content/Grid.js","28d863809a79259f483af1f5ebd8697e"],["/HaoQiLab/static/js/Page/Document/Content/Layout.js","4389944ff4aba722811575a0e539432f"],["/HaoQiLab/static/js/Page/Document/Content/Menu.js","5537f43ef588c989b2e53a2918851664"],["/HaoQiLab/static/js/Page/Document/Content/Pagination.js","e05d2d3bb9d702bc8b124a1a56ea30c0"],["/HaoQiLab/static/js/Page/Document/Content/Popconfirm.js","34632f94355222383a691177e7eabffc"],["/HaoQiLab/static/js/Page/Document/Content/Spin.js","64489a5dc0eb09b2d73b6aa06667e5e1"],["/HaoQiLab/static/js/Page/Document/Content/Table.js","d273a1ea109a62e031ea138b51f70ac0"],["/HaoQiLab/static/js/Page/Document/Content/ToolTip.js","f421339f82bfb3a21948f3f2d4914ccc"],["/HaoQiLab/static/js/Page/Document/Index.prod.js","16b97d65077f1ecee9dd9200b2971642"],["/HaoQiLab/static/js/Page/Donations/Index.prod.js","447e603c86d2cad7bd5a3db5827def97"],["/HaoQiLab/static/js/Page/History/Index.prod.js","5c4d5b81287edddd5cfb1c1878086a40"],["/HaoQiLab/static/js/Page/Index/Index.prod.js","3ff7f047f6c1f6889ece3bab0a554c2b"],["/HaoQiLab/static/js/Page/Me/Index.prod.js","523f4d8f24f639b5d5ec21b36cee7b10"],["/HaoQiLab/static/js/Page/Play/Index.prod.js","1581f533c6ec1b9a161b4bc6093b2116"],["/HaoQiLab/static/js/Page/ProductCenter/Index.prod.js","ade278f66f1768990623269e0333d239"],["/HaoQiLab/static/js/Page/ReactEx/Content/EClass.js","2d853a65640b7b4c4d1ff52128dc8866"],["/HaoQiLab/static/js/Page/ReactEx/Index.prod.js","5c4888f5381ac1b75cce4118871f2aa2"],["/HaoQiLab/static/js/Template/Default/App.js","b192416ca8b37a0b8139b63fa23e7b26"],["/HaoQiLab/static/media/logo.8046304b.png","8046304b8eccf1e7e4268674f3ff8ab2"],["/default.html","9864ad0960235f112720b697176e6d17"],["/document.html","3d2577e40190b949dd2c04c8611ad7b7"],["/donations.html","574cc6ceed695818aec48d7606518fba"],["/history.html","8c163a1e35e5af2064ecdcb91c692848"],["/index.html","ec4a984523dc8c12bf2b5a789918860a"],["/me.html","69fb2c950f4478c22fb896e2c4169de6"],["/play.html","6687cc03afcf73785d3ada50073d6992"],["/productCenter.html","9fc618ec716950a675e7314701c69684"],["/reactex.html","2f50427b1d7de0d6e399a8fbf4a87cea"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});