"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/HaoQiLab/static/css/Page/Document/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Donations/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/History/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Index/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Me/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Play/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ProductCenter/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactEx/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactJQuery/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Template/Default/App.f1778c2a.css","1c6e0e62997e26a637e06a956117defd"],["/HaoQiLab/static/js/Lib/Antd.Base.js","660c33e6f095d8f10fac4edd376b8c87"],["/HaoQiLab/static/js/Lib/Antd.Ex.js","a8ad09221d9830796b3e201879836536"],["/HaoQiLab/static/js/Lib/Mobx.js","b227ec891c52ea3ac952e23efc354dab"],["/HaoQiLab/static/js/Page/Document/Content/Affix.js","8e491b1a311ddd107e765b5fdab1b943"],["/HaoQiLab/static/js/Page/Document/Content/BackTop.js","94cd049829b3751d753d67cb1b5225b9"],["/HaoQiLab/static/js/Page/Document/Content/Breadcrumb.js","3304ed48bda2d537b4fa8486d54bdcfd"],["/HaoQiLab/static/js/Page/Document/Content/Button.js","a45223dafc9355a2c66515ff91e7037e"],["/HaoQiLab/static/js/Page/Document/Content/Dropdown.js","486ee89524b623d12f3e394852720209"],["/HaoQiLab/static/js/Page/Document/Content/Grid.js","3e2e5695885885f30c6b547bad108872"],["/HaoQiLab/static/js/Page/Document/Content/Layout.js","f81721e029c409931349d5fd6428e161"],["/HaoQiLab/static/js/Page/Document/Content/Menu.js","125ddaab59c49b22126c67a3780afe7e"],["/HaoQiLab/static/js/Page/Document/Content/Pagination.js","7baec98a74409316ccc5963f7ef4d988"],["/HaoQiLab/static/js/Page/Document/Content/Popconfirm.js","b74950355da984c1f4a5de696431caed"],["/HaoQiLab/static/js/Page/Document/Content/Spin.js","8b61185257a06210df5591afb2a23c07"],["/HaoQiLab/static/js/Page/Document/Content/Table.js","60c0638a15fbcce379b406e4803bfd43"],["/HaoQiLab/static/js/Page/Document/Content/ToolTip.js","9453bc5db001d31466479447c06b9359"],["/HaoQiLab/static/js/Page/Document/Index.prod.js","c77f120503aae377c37300a6ef053d87"],["/HaoQiLab/static/js/Page/Donations/Index.prod.js","91e9c2fa0d1c445c76e816022d301c94"],["/HaoQiLab/static/js/Page/History/Index.prod.js","848c549eeb063a9fa197524be8ac9481"],["/HaoQiLab/static/js/Page/Index/Index.prod.js","b0f8933f1a46dae89edbb33d204a131a"],["/HaoQiLab/static/js/Page/Me/Index.prod.js","15295cc6b61e7b0ebfca7b71c7a19131"],["/HaoQiLab/static/js/Page/Play/Index.prod.js","ad35a8d38638004c9e994b6c4cb63b12"],["/HaoQiLab/static/js/Page/ProductCenter/Index.prod.js","fba582a060c0b06ac0143a6625df1472"],["/HaoQiLab/static/js/Page/ReactEx/Content/EClass.js","9af4acc0a9c49f321f4c118503ec43cf"],["/HaoQiLab/static/js/Page/ReactEx/Index.prod.js","85f10cec9ed9fe97ec692850f43671e1"],["/HaoQiLab/static/js/Page/ReactJQuery/Index.prod.js","33bf990989a9e0cc4f52d0d44325e568"],["/HaoQiLab/static/js/Template/Default/App.js","9237adaf6f7124529cdbaa76ca4d6ca4"],["/HaoQiLab/static/media/logo.8046304b.png","8046304b8eccf1e7e4268674f3ff8ab2"],["/default.html","011e02e1951041c6635c04b0444aa292"],["/document.html","9dc7ac2a648b6d06097c51dfeb1b4d56"],["/donations.html","83b91743b6678dd1194bf5abf8827d4c"],["/history.html","dcfef2e4d210aca4aad5e408379a71dd"],["/index.html","7866afe631ec8dc967f082545603f6dc"],["/me.html","bb40895d0e641f50560f6b0a1574fe6c"],["/play.html","b3190193951c65007dcb875a8ef16812"],["/productCenter.html","f6d26ecb3e12ba4c0a286e565c749b98"],["/reactJQuery.html","d259b593e7f7a08d6d9d9e6401d446fe"],["/reactex.html","7a3b0a9c9bb6a36e4f1a622c4464d434"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});