"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/HaoQiLab/static/css/Page/Document/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Donations/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/History/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Index/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Me/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Play/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ProductCenter/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactEx/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Template/Default/App.f1778c2a.css","1c6e0e62997e26a637e06a956117defd"],["/HaoQiLab/static/js/Lib/Antd.Base.js","7603e4b3562bc6a41aaa9c9331156ade"],["/HaoQiLab/static/js/Lib/Antd.Ex.js","43387a167a83888a3c3eb3d8d1e0e427"],["/HaoQiLab/static/js/Lib/Mobx.js","79b3ed799a7a861cd4682e74b92369a6"],["/HaoQiLab/static/js/Page/Document/Content/Affix.js","34c7ef214f25d5782ecbff476438b406"],["/HaoQiLab/static/js/Page/Document/Content/BackTop.js","4acd52feef6a9db5dd0918af1711a9ce"],["/HaoQiLab/static/js/Page/Document/Content/Breadcrumb.js","1df4a5c63d241cafbe1410a521eb4320"],["/HaoQiLab/static/js/Page/Document/Content/Button.js","2e32956f0dd59c6bb09faba7d2f4de2d"],["/HaoQiLab/static/js/Page/Document/Content/Dropdown.js","9a724f6d35ae9197d1535d630779538a"],["/HaoQiLab/static/js/Page/Document/Content/Grid.js","aa647621507207b0a5b445d8221adf8e"],["/HaoQiLab/static/js/Page/Document/Content/Layout.js","d02eabda615fc2947f72e5f2cd7cb7a9"],["/HaoQiLab/static/js/Page/Document/Content/Menu.js","253f4406061cf86dd76b96b37e607c30"],["/HaoQiLab/static/js/Page/Document/Content/Pagination.js","9d6d82deab27fc9b6791a1e0ea8828d6"],["/HaoQiLab/static/js/Page/Document/Content/Popconfirm.js","ccc9e4a61041c3e138a48c5ab5931c2b"],["/HaoQiLab/static/js/Page/Document/Content/Spin.js","a41eb6dea7c19d6a8ac4c064ec0a8b6e"],["/HaoQiLab/static/js/Page/Document/Content/Table.js","79d130d4f6297b73591b2f23cd94e083"],["/HaoQiLab/static/js/Page/Document/Content/ToolTip.js","fe80cd9f60e79b5d59645f5137996798"],["/HaoQiLab/static/js/Page/Document/Index.prod.js","325d5abe08664c43a2a36cb13c252861"],["/HaoQiLab/static/js/Page/Donations/Index.prod.js","5f5a2c1182c5afc9fd2fe39f63e513a5"],["/HaoQiLab/static/js/Page/History/Index.prod.js","f5d98845b26357909fc263c5cdd645d6"],["/HaoQiLab/static/js/Page/Index/Index.prod.js","0c56753943a0cd14ccb7a0c528262303"],["/HaoQiLab/static/js/Page/Me/Index.prod.js","05e5c5d105dc914de7aa011d9f6618c0"],["/HaoQiLab/static/js/Page/Play/Index.prod.js","af335714d782b2a1465455d8cf01554a"],["/HaoQiLab/static/js/Page/ProductCenter/Index.prod.js","083be7027efcca8526ca91fca3f2e93d"],["/HaoQiLab/static/js/Page/ReactEx/Content/EClass.js","4eecbcb8a2ee0483f4ca160415bd3bcc"],["/HaoQiLab/static/js/Page/ReactEx/Index.prod.js","123a2140085b0b074af023e83750c62a"],["/HaoQiLab/static/js/Template/Default/App.js","346e1ea0da7536d2ba7b245219e45a4a"],["/HaoQiLab/static/media/logo.8046304b.png","8046304b8eccf1e7e4268674f3ff8ab2"],["/default.html","999296307062f7f4fd37619fc1925ddf"],["/document.html","3895020837427d3a2b6f4de3230be325"],["/donations.html","2e4842db18b3c4f38320cf17aea5f68e"],["/history.html","f2e1ddbc28dbdd337a00962ee34e45da"],["/index.html","c54cb1883cb13ff007a1c6eeff1639a9"],["/me.html","089391830d00112b89dd2873c53f8674"],["/play.html","41d99d642aed229aca38f329c2ca6d4b"],["/productCenter.html","b0f2abb50a92f6494742d3a9dbdfe560"],["/reactex.html","066df405504a44114a2ba0679ad95928"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});