!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"),require("react-dom"),require("Antd"));else if("function"===typeof define&&define.amd)define(["react","react-dom","Antd"],e);else{var r="object"===typeof exports?e(require("react"),require("react-dom"),require("Antd")):e(t.React,t.ReactDOM,t.Antd);for(var n in r)("object"===typeof exports?exports:t)[n]=r[n]}}(this,function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=541)}({0:function(t,e,r){"use strict";var n,o=r(1),s=(r.n(o),r(12)),a=r(7),i=(r.n(a),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),l=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};!function(t){function e(t){return"[object String]"===Object.prototype.toString.call(t)}function r(t,r){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];if(h&&d.push({type:t,props:l({},r,{children:n})}),r){var i=r.EClass;if(void 0!==i){var c=p;if(e(i)){if(""!==i.trim()){var u=c.parse(i);void 0===r.className?r.className=u.join(" "):r.className+=" "+u.join(" "),delete r.EClass}}else if("setClass"in i){var f=void 0;"ref"in r&&(f=r.ref),r.ref=function(t){i.instance=t,f&&f(t)};var v;if(i.onChange=function(t){var e=i.instance,r=void 0;if(e){r=c.parse(t);var n=e.classList;if(v)for(var o=0;o<v.length;o++)n.contains(v[o])&&n.remove(v[o]);for(var o=0;o<r.length;o++)n.contains(r[o])||n.add(r[o])}v=r},""!==i.fixedClass.trim()){var m=c.parse(i.fixedClass);void 0===r.className?r.className=m.join(" "):r.className+=" "+m.join(" ")}""!==i.defaultClass.trim()&&(v=c.parse(i.defaultClass),void 0===r.className?r.className=v.join(" "):r.className+=" "+v.join(" ")),delete r.EClass}}for(var g in s.b.cssClassSelectorMap){var b=r["EClass-"+g];if(b){var u=p.parse(b,g);void 0===r.className?r.className=u.join(" "):r.className+=" "+u.join(" "),delete r["EClass-"+g]}}}return y.apply(o,arguments)}function n(t){var e=null;return a.render(o.createElement("div",{ref:function(t){e=t.style.cssText},style:t}),document.createElement("div")),function(){return e||""}}function c(t,e){void 0===e&&(e=!1);var r=new s.b.CSSClass(void 0,!0,e,!0,t);return function(e){for(var n in t)r.registerClass(n)}}function u(t,e,r,n){void 0===e&&(e=!0),void 0===r&&(r=!1),void 0===n&&(n=!1);var o=new s.b.CSSClass(void 0,e,r,n,t);return function(t){var e=t.prototype.render;t.cssClass=o,t.prototype.render=function(){var t=p;p=o;var r=e.call(this);return p=t,r}}}function f(t){h=!0,d=[];var e=t();return h=!1,{source:d.pop(),result:e}}var p=s.a.instance,h=!1,d=[],y=o.createElement;Object.defineProperty(o,"createElement",{value:r}),t.calcStyle=n,t.estyle=c;var v=function(){function t(t,e){this.fixedClass=t,this.defaultClass=e}return t.prototype.setClass=function(t){this.onChange&&this.onChange(t)},t}();t.AsyncEClass=v,t.eclass=u,t.hookCreateElement=f;var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.renderReactNode=function(t){if(this.cssClass){var e=p;p=this.cssClass;var r=t();return p=e,r}return t()},e}(o.Component);t.Component=m}(n||(n={})),e.a=l({},o,n),void 0===o&&alert("\u672a\u5bfc\u5165React")},1:function(e,r){e.exports=t},12:function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"a",function(){return o});var n;!function(t){function e(t){return"[object Function]"===Object.prototype.toString.call(t)}function r(t){return"[object String]"===Object.prototype.toString.call(t)}function n(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function s(t){return"[object Array]"===Object.prototype.toString.call(t)}function a(){return Object.create(null)}t.cssClassSelectorMap={bf:1,af:2,ac:4,hv:8,chd:16,bfac:5,afac:6,bfhv:9,afhv:10,chdbf:17,chdaf:18,chdac:20,chdhv:24,chdbfac:21,chdafac:22,chdbfhv:25,chdafhv:26};var i=/^(([\w_]+)(-(bf|af|ac|hv|chd|bfac|afac|bfhv|afhv|chdbf|chdaf|chdac|chdhv|chdbfac|chdbfhv|chdafhv))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/,l=function(){function l(t,e,r,n,s){void 0===e&&(e=!1),void 0===r&&(r=!1),void 0===n&&(n=!1),this.isPrivate=e,this.isNoExtendsGlobal=r,this.isGlobalName=n,this.rule={},this.list=a(),this.classMap=a(),this.key=n?"":"V"+o.newID,t||(t=document.createElement("style"),t.type="text/css",e&&t.setAttribute("Private",""),r&&t.setAttribute("NoExtendsGlobal",""),t.setAttribute("key",this.key),e&&o.global.length>0?document.head.insertBefore(t,o.global[0].styleElement):document.head.appendChild(t)),this.styleElement=t,o.all.push(this),e?o.private.push(this):o.global.push(this),s&&this.registerClassRule(s)}return l.reMountAllStyle=function(){for(var t=0,e=this.global;t<e.length;t++){var r=e[t];document.head.appendChild(r.styleElement)}for(var n=0,s=this.private;n<s.length;n++){var r=s[n];r.isPrivate&&o.global.length>0?document.head.insertBefore(r.styleElement,o.global[0].styleElement):document.head.appendChild(r.styleElement)}},l.prototype.extendsClassRule=function(t){var e=this.rule,r=e.__proto__;t.__proto__=r,e.__proto__=t},l.prototype.getStyleByName=function(t){if(t in this.classMap){t=this.getNameByInfo(this.parseInfo(t),!1);var e=this.list[t],r="";if(s(e))for(var n=0,o=e;n<o.length;n++){var a=o[n];r+=a.textNode.data+"\n"}else r=e.textNode.data;return r}return null},l.prototype.registerClassRule=function(t,e){if(n(t))for(var r in t)this.registerOneRule(r,t[r]);else{if(void 0===e)throw new Error("\u672a\u63d0\u4f9brule\u53c2\u6570\uff01");this.registerOneRule(t,e)}},l.prototype.getNameByInfo=function(t,e){void 0===e&&(e=!0);var r=t.name;return e&&t.selector&&(r+="-"+t.selector),t.index&&(r+="-"+t.index),t.moreInfo&&(r+="-"+t.moreInfo),r},l.prototype.registerClass=function(t,e){var r=this.parseInfo(t);if(!r)return void console.warn(new Error("can' t register class '"+t+"',because unknown."));if(e&&(r.selector=e,t=this.getNameByInfo(r),r.input=t),t in this.classMap)return this.key+t;return this.getNameByInfo(r,!1)in this.list?this.addSelector(r):this.create(r)},l.prototype.updateClass=function(t){var e=this.parseInfo(t);if(!e)return void console.warn(new Error("can' t update class '"+t+"',because unknown."));return this.getNameByInfo(e,!1)in this.list?this.updateSelector(e):this.create(e)},l.prototype.parse=function(t,e){for(var r=t.split(/\s+/),n=[],o=0,s=r;o<s.length;o++){var a=s[o];if(""!==a){var i=this.registerClass(a,e);i?n.push(i):console.warn("cssClass:"+a+" can't be parse!")}}return n},l.prototype.clear=function(){this.styleElement.innerHTML="",this.list=a(),this.classMap=a()},l.prototype.updateAllSelector=function(){var t=a();for(var e in this.classMap)t[e]=this.classMap[e];this.clear();for(var e in t)this.registerClass(e)},l.prototype.updateSelector=function(t){return this.addSelector(t,!0)},l.prototype.addSelector=function(t,e){void 0===e&&(e=!1);var r=this.list[this.getNameByInfo(t,!1)];if(s(r))for(var n=0,o=r;n<o.length;n++){var a=o[n];this.doAddSelector(a,t)}else this.doAddSelector(r,t);return this.key+t.input},l.prototype.makeStyleString=function(t){t.textNode.data=t.selectors.join(",")+"{"+t.rule+"}"},l.prototype.getRule=function(t){var e=this.rule[t],r=this.rule,n=this;if(!e&&!this.isNoExtendsGlobal)for(var s=0,a=o.global;s<a.length;s++){var i=a[s];if(i!==this&&(e=i.rule[t],r=i.rule,n=i,e))break}return{map:r,rule:e,cssClass:n}},l.prototype.getRuleString=function(t,e,n){return s(t)?this.getRuleStringByArray(t,e,n):r(t)?t:t.call(e,n.index,n.moreInfo)},l.prototype.getRuleStringByArray=function(t,e,n){for(var a="/* "+t.length+" in 1 */",i=0,l=t;i<l.length;i++){var c=l[i];if(r(c)){var u=this.parseInfo(c);if(u){var f=this.getRule(u.name),p=f.rule,h=f.map;p&&(a+="\n  /*"+u.input+"*/\n  "+this.getRuleString(p,h,u))}else a+="\n  /*"+c+"*/\n\n",o.missingClass[c]=null}else s(c)&&(a+=this.getRuleStringByArray(c,e,n))}return a},l.prototype.create=function(t){var n=this.getRule(t.name),o=n.rule,a=n.map,i=n.cssClass;return o?s(o)?this.list[this.getNameByInfo(t,!1)]=this.createByArray(i.styleElement,a,o,t):r(o)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(i.styleElement,o,t):e(o)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(i.styleElement,this.getRuleString(o,a,t),t):this.list[this.getNameByInfo(t,!1)]=this.createByObject(i.styleElement,a,o,t):this.list[this.getNameByInfo(t,!1)]=this.doCreate(i.styleElement,"",t),this.classMap[t.input]=null,this.key+t.input},l.prototype.replace=function(t,e,r){t&&e&&r&&(e=this.key+e,r=this.key+r,t.className=t.className.replace(e,r))},l.prototype.removeArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var o=this.key+e[n];r.contains(o)&&r.remove(o)}},l.prototype.remove=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.removeArray(t,e)},l.prototype.addArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var o=this.registerClass(e[n]);o&&!r.contains(o)&&r.add(o)}},l.prototype.add=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.addArray(t,e)},l.prototype.registerOneRule=function(t,e){this.rule[t]=e},l.prototype.parseInfo=function(t){var e=t.match(i);if(!e)return null;var r=void 0!==e[6]?Number(e[6]):void 0;return{input:t,name:e[2],selector:e[4],index:r,moreInfo:e[8]}},l.prototype.getSelectorSuffix=function(e){if(!(e in t.cssClassSelectorMap)){return e.split(",")}var r=t.cssClassSelectorMap[e],n="";return 16&r&&(n+=">*"),4&r&&(n+=":active"),8&r&&(n+=":hover"),1&r&&(n+="::before"),2&r&&(n+="::after"),n},l.prototype.getClassNameBySuffix=function(t,e){return s(e)?t.input+e.join("\n,."+this.key+t.input):t.input+e},l.prototype.getClassNameByInfo=function(t){return t.selector?this.getClassNameBySuffix(t,this.getSelectorSuffix(t.selector)):t.input},l.prototype.doAddSelector=function(t,e,r){void 0===r&&(r=!1);var n=this.getClassNameByInfo(e);n in t.selectorsMap||(t.selectors.push("."+this.key+n),t.selectorsMap[n]=null,this.classMap[e.input]=null,this.makeStyleString(t))},l.prototype.createByArrayItemNoObject=function(t,n,o,a){var i;return s(n)?i=this.getRuleStringByArray(n,t,o):r(n)?i=n:e(n)&&(i=n.call(t,o.index,o.moreInfo)),i},l.prototype.createByArrayItem=function(t,n,o,a,i){if(s(o))return this.getRuleStringByArray(o,n,a);if(r(o))return o;if(e(o))return o.call(n,a.index,a.moreInfo);for(var l in o){var c=void 0,u=o[l];if(s(u)){c="";for(var f=0,p=u;f<p.length;f++){var h=p[f];c+=this.createByArrayItemNoObject(n,h,a,i)}}else c=r(u)?u:e(u)?u.call(n,a.index,a.moreInfo):"";i.push(this.doCreate(t,c,a,this.getClassNameBySuffix(a,this.getSelectorSuffix(l))))}return""},l.prototype.createByArray=function(t,e,r,n){for(var o="",s=[],a=0,i=r;a<i.length;a++){var l=i[a];o+=this.createByArrayItem(t,e,l,n,s)}return s.push(this.doCreate(t,o,n)),s},l.prototype.doCreate=function(t,e,r,n){void 0===n&&(n=this.getClassNameByInfo(r));var o=document.createTextNode(""),s={textNode:o,selectors:["."+this.key+n],selectorsMap:(a={},a[n]=null,a),rule:e};return this.makeStyleString(s),t.appendChild(o),s;var a},l.prototype.createByObject=function(t,e,r,n){var o,s=[];for(o in r){var a=r[o];s.push(this.doCreate(t,this.getRuleString(a,e,n),n,this.getClassNameBySuffix(n,this.getSelectorSuffix(o))))}return s},Object.defineProperty(l,"newID",{get:function(){return o.cssIDIndex++},enumerable:!0,configurable:!0}),Object.defineProperty(l,"instance",{get:function(){var t=o.priInstance;return null===t&&(t=o.priInstance=new l(void 0,!1,!1,!0)),t},enumerable:!0,configurable:!0}),l.global=[],l.private=[],l.all=[],l.missingClass={},l.cssIDIndex=0,l.priInstance=null,l}();t.CSSClass=l}(n=n||(n={})),void 0===window.CSSClass&&(window.CSSClass=n.CSSClass);var o=window.CSSClass},13:function(t,e){t.exports=r},15:function(t,e,r){"use strict";var n=r(13);r.n(n);e.a={Affix:n.Affix,BackTop:n.BackTop,Breadcrumb:n.Breadcrumb,Dropdown:n.Dropdown,Icon:n.Icon,Layout:n.Layout,Menu:n.Menu,Spin:n.Spin,Tabs:n.Tabs},void 0===n?alert("\u672a\u5bfc\u5165\u4efb\u4f55Antd\u7ec4\u4ef6"):void 0===n.Affix&&alert("\u672a\u5bfc\u5165Antd.Base")},17:function(t,e,r){"use strict";function n(t,e,r){var n=window,o=n.Page||(n.Page={}),s=o[e]||(o[e]={});(s.Content||(s.Content={}))[t]=r}e.a=n},541:function(t,e,r){t.exports=r(542)},542:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(15),s=r(17),a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=o.a.Layout,l=i.Header,c=i.Footer,u=i.Sider,f=i.Content,p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return[n.a.createElement(o.a.Layout,null,n.a.createElement(u,null,"Sider"),n.a.createElement(o.a.Layout,null,n.a.createElement(l,null,"Header"),n.a.createElement(f,null,"Content"),n.a.createElement(c,null,"Footer")))]},e}(n.a.Component);e.default=p,Object(s.a)("Layout","Document",p)},7:function(t,r){t.exports=e}})});
//# sourceMappingURL=Layout.js.map