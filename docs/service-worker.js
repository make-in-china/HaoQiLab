"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/HaoQiLab/static/css/Page/Document/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Donations/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/History/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Index/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Me/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Play/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ProductCenter/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactEx/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Template/Default/App.f1778c2a.css","1c6e0e62997e26a637e06a956117defd"],["/HaoQiLab/static/js/Lib/Antd.Base.js","b2ee1f14ca3550c40873e91676771dde"],["/HaoQiLab/static/js/Lib/Antd.Ex.js","9a797ec845c43637d30e4cc2b49265a1"],["/HaoQiLab/static/js/Lib/Mobx.js","fdd47207e894f05ecdceb173b5ba1037"],["/HaoQiLab/static/js/Page/Document/Content/Affix.js","fba7a26bfff464be0032ab1380691e7d"],["/HaoQiLab/static/js/Page/Document/Content/BackTop.js","0bb86cb5683cdfd1817ef50dc6e96998"],["/HaoQiLab/static/js/Page/Document/Content/Breadcrumb.js","f36245ab07d3cc2b1e9fb05fa8c7de5d"],["/HaoQiLab/static/js/Page/Document/Content/Button.js","21b4501814035fba22692a49ceda16e4"],["/HaoQiLab/static/js/Page/Document/Content/Dropdown.js","5d7090a9f62d0e8011360677c29db207"],["/HaoQiLab/static/js/Page/Document/Content/Grid.js","b9c5f9050cb3ecf65b72de06135a5f59"],["/HaoQiLab/static/js/Page/Document/Content/Layout.js","afbd249f1ac10f2507569063b2d32bbc"],["/HaoQiLab/static/js/Page/Document/Content/Menu.js","948885608145bb19ce28a6cc6f427269"],["/HaoQiLab/static/js/Page/Document/Content/Pagination.js","e2317072ed9a9ed0739589ad1657efeb"],["/HaoQiLab/static/js/Page/Document/Content/Popconfirm.js","1cf933683c47a92e23fde675aa4237ba"],["/HaoQiLab/static/js/Page/Document/Content/Spin.js","3865eb914c744b0746ddfc0996fdfd0d"],["/HaoQiLab/static/js/Page/Document/Content/Table.js","494efbc4117b6f81e4dbb03ce29e3713"],["/HaoQiLab/static/js/Page/Document/Content/ToolTip.js","6528219dbc90902d3be6911c2de48237"],["/HaoQiLab/static/js/Page/Document/Index.prod.js","ad26b869f19f7dc98364a136988f7307"],["/HaoQiLab/static/js/Page/Donations/Index.prod.js","8cc18035bd08087ab4887db0f0c4c8b9"],["/HaoQiLab/static/js/Page/History/Index.prod.js","a6e11e60714fe43d4c585ada71dd305c"],["/HaoQiLab/static/js/Page/Index/Index.prod.js","ad6a2cf69c600e06b885aa1e1a7e8150"],["/HaoQiLab/static/js/Page/Me/Index.prod.js","6123a57b2e1232034e80c2d8cd6241e9"],["/HaoQiLab/static/js/Page/Play/Index.prod.js","6ba242221ceabb60e2d701dc9b7920d7"],["/HaoQiLab/static/js/Page/ProductCenter/Index.prod.js","220011380900a9575125913039df5b0f"],["/HaoQiLab/static/js/Page/ReactEx/Content/EClass.js","ca85667f90ee4b7fa519cb7377f2674b"],["/HaoQiLab/static/js/Page/ReactEx/Index.prod.js","587388aacdf63d1b0ece70f6041f387c"],["/HaoQiLab/static/js/Template/Default/App.js","7190f338bcafa8da31de8b1bc50bb184"],["/HaoQiLab/static/media/logo.8046304b.png","8046304b8eccf1e7e4268674f3ff8ab2"],["/default.html","dfa53d4afec9020ea63b089e7415942d"],["/document.html","1ec60c647ed39c49f01431c7c125faab"],["/donations.html","d074c078b50363db2a4bc815078236b6"],["/history.html","2760f74cddc76f7beb47f3764a1d008b"],["/index.html","c54cb1883cb13ff007a1c6eeff1639a9"],["/me.html","5420580f85c6fe9f065ce0133a9bf91d"],["/play.html","8ec9f9c24689ff6d9ad8878dd7adb0da"],["/productCenter.html","f82b82c4f159a51561446c0221ab7048"],["/reactex.html","a73451cd16654de27fdd3dfa8856be33"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});