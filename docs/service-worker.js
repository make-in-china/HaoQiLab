"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/HaoQiLab/static/css/Page/Document/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Donations/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/History/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Index/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Me/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/Play/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ProductCenter/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactEx/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Page/ReactJQuery/Index.prod.491e669b.css","6783152bad5b9bdbf1522110d8c958f4"],["/HaoQiLab/static/css/Template/Default/App.f1778c2a.css","1c6e0e62997e26a637e06a956117defd"],["/HaoQiLab/static/js/Lib/Antd.Base.js","9de0b81716c09863024f67e809ab0755"],["/HaoQiLab/static/js/Lib/Antd.Ex.js","e98eb97ae6dd32797c3d34e0a771a7d0"],["/HaoQiLab/static/js/Lib/Mobx.js","47bdf1556b5bcd9e5727c13d5c09adb3"],["/HaoQiLab/static/js/Page/Document/Content/Affix.js","b68478761aea0ccdb5d8b91a14e1e4eb"],["/HaoQiLab/static/js/Page/Document/Content/BackTop.js","ab67261f23c040edd32de4609a51b3fa"],["/HaoQiLab/static/js/Page/Document/Content/Breadcrumb.js","150f3106028407b52dc4e61e8b700f6c"],["/HaoQiLab/static/js/Page/Document/Content/Button.js","713373848223a5532737e264579fb6fc"],["/HaoQiLab/static/js/Page/Document/Content/Dropdown.js","aa81a5984c9224ec289264cc01cca2fe"],["/HaoQiLab/static/js/Page/Document/Content/Grid.js","40b684f6d2dc5b8d51739c22084448ce"],["/HaoQiLab/static/js/Page/Document/Content/Layout.js","b515d36784c4cd973345a27711f620bf"],["/HaoQiLab/static/js/Page/Document/Content/Menu.js","1d15db903b6ae5037f95760f70c6338e"],["/HaoQiLab/static/js/Page/Document/Content/Pagination.js","47471d3ed7a8a31db4ad6828d9d33e11"],["/HaoQiLab/static/js/Page/Document/Content/Popconfirm.js","33b905449c41c203cc2cda9a8d546641"],["/HaoQiLab/static/js/Page/Document/Content/Spin.js","c9511385804edbcc36eb6d75534bc2b7"],["/HaoQiLab/static/js/Page/Document/Content/Table.js","7c957b36c4364ff8b6e53ca70885749f"],["/HaoQiLab/static/js/Page/Document/Content/ToolTip.js","e861b2080d8e6d5465269eb80628035c"],["/HaoQiLab/static/js/Page/Document/Index.prod.js","106faf6c363f095ba7f0c3ccc3c774f4"],["/HaoQiLab/static/js/Page/Donations/Index.prod.js","2a7e555da130e609d369a7192c7a7a31"],["/HaoQiLab/static/js/Page/History/Index.prod.js","eed9764a75f18510d36c63d5652478f9"],["/HaoQiLab/static/js/Page/Index/Index.prod.js","746f2bb0ff05518cbfe4141cdaf9822e"],["/HaoQiLab/static/js/Page/Me/Index.prod.js","51ed65ab5676d861cd1565a277317822"],["/HaoQiLab/static/js/Page/Play/Index.prod.js","4adf8d35af896068a6a0aff780f4e69c"],["/HaoQiLab/static/js/Page/ProductCenter/Index.prod.js","91bc64902e7c1dffb4c0ade8ddc49ff0"],["/HaoQiLab/static/js/Page/ReactEx/Content/EClass.js","13ef61a248383958c814cc57dda9d8d3"],["/HaoQiLab/static/js/Page/ReactEx/Index.prod.js","672dcbef962f8feecb1b7635046402bb"],["/HaoQiLab/static/js/Page/ReactJQuery/Index.prod.js","4989880026e9eeb16cca46ddb3d2b0d8"],["/HaoQiLab/static/js/Template/Default/App.js","0301f66c6e5f030dc20dc601c8d665d2"],["/HaoQiLab/static/media/logo.8046304b.png","8046304b8eccf1e7e4268674f3ff8ab2"],["/default.html","f349e3f700a4884ca4722eef111001b7"],["/document.html","b5749ccb4dd08a2ab81f84da51167ee4"],["/donations.html","ce722bdbbbe51b30498ca5a6d69ccbca"],["/history.html","6a5363cb9d5c0b84341808b0986ede8a"],["/index.html","53ec07e6b942466e6715148ec5c3962a"],["/me.html","a0fa7fcff3032e04985031d866723a68"],["/play.html","25b4056d07fba737e7db3042196a7005"],["/productCenter.html","8ba5ae5f1401c01b10bfd527065fcbb0"],["/reactJQuery.html","40a23b16737415ee9a54ef970b511c2b"],["/reactex.html","325dc44daac13a32ee4152c8c11e649e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});