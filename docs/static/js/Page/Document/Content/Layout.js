!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"),require("react-dom"),require("Antd"));else if("function"===typeof define&&define.amd)define(["react","react-dom","Antd"],e);else{var r="object"===typeof exports?e(require("react"),require("react-dom"),require("Antd")):e(t.React,t.ReactDOM,t.Antd);for(var n in r)("object"===typeof exports?exports:t)[n]=r[n]}}(this,function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=585)}({0:function(t,e,r){"use strict";var n,o=r(1),s=(r.n(o),r(11)),a=r(14),i=r(12),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};!function(t){function e(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(u){var c=void 0;if(r.length>0){c=[];for(var p=0;p<r.length;p++)Object(i.d)(r[p])?c.push(r[p]):c.push(f[f.length-r.length+p])}f.push({type:t,props:l({},e,{children:c})})}if(e){var h=e.EClass;if(void 0!==h){var d=a;if(Object(i.d)(h)){if(""!==h.trim()){var v=d.parse(h);void 0===e.className?e.className=v.join(" "):e.className+=" "+v.join(" "),delete e.EClass}}else if("setClass"in h){var y=void 0;"ref"in e&&(y=e.ref),e.ref=function(t){h.instance=t,y&&y(t)};var g;if(h.onChange=function(t){var e=h.instance,r=void 0;if(e){r=d.parse(t);var n=e.classList;if(g)for(var o=0;o<g.length;o++)n.contains(g[o])&&n.remove(g[o]);for(var o=0;o<r.length;o++)n.contains(r[o])||n.add(r[o])}g=r},""!==h.fixedClass.trim()){var b=d.parse(h.fixedClass);void 0===e.className?e.className=b.join(" "):e.className+=" "+b.join(" ")}""!==h.defaultClass.trim()&&(g=d.parse(h.defaultClass),void 0===e.className?e.className=g.join(" "):e.className+=" "+g.join(" ")),delete e.EClass}}for(var m in s.b.cssClassSelectorMap){var C=e["EClass-"+m];if(C){var v=a.parse(C,m);void 0===e.className?e.className=v.join(" "):e.className+=" "+v.join(" "),delete e["EClass-"+m]}}}return o.createElement.apply(o,arguments)}function r(t,e,r,n){return void 0===e&&(e=!0),void 0===r&&(r=!1),void 0===n&&(n=!1),function(o){var i=o.prototype.render;o.cssClass=new s.b.CSSClass(void 0,e,r,n,t),o.prototype.render=function(){var t=a;a=this.cssClass;var e=i.call(this);return a=t,e}}}function n(t){u=!0,f=[];var e=t();return u=!1,{source:f.pop(),result:e}}var a=s.a.instance,u=!1,f=[];t.createElement=e;var p=function(){function t(t,e){this.fixedClass=t,this.defaultClass=e}return t.prototype.setClass=function(t){this.onChange&&this.onChange(t)},t}();t.AsyncEClass=p,t.eclass=r,t.hookCreateElement=n;var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),Object.defineProperty(e.prototype,"cssClass",{get:function(){if(this.instanceCssClass)return this.instanceCssClass;var t=this.constructor.cssClass;return t||s.b.CSSClass.instance},set:function(t){this.instanceCssClass=t},enumerable:!0,configurable:!0}),e.prototype.renderReactNode=function(t){if(this.cssClass){var e=a;a=this.cssClass;var r=t();return a=e,r}return t()},e}(o.Component);t.Component=h}(n||(n={})),e.a=l({},o,n,{calcStyle:a.a}),void 0===o&&alert("\u672a\u5bfc\u5165React")},1:function(e,r){e.exports=t},11:function(t,e,r){"use strict";function n(t,e){return t.substr(t.length-e,e)}function o(t){var e=Number("0x"+t);return{R:(16711680&e)/65536,G:(65280&e)/256,B:255&e}}function s(t,e,r,n){var o=r/n;return{R:Math.floor((e.R-t.R)*o+.5)+t.R&255,G:Math.floor((e.G-t.G)*o+.5)+t.G&255,B:Math.floor((e.B-t.B)*o+.5)+t.B&255}}function a(t){return"#"+(n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2))}function i(t){return n("0"+Math.round(255*t.A).toString(16),2)+n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2)}function c(t){return"rgba("+t.R+","+t.G+","+t.B+","+t.A+")"}function l(t){switch(t.length){case 3:return"#"+t[0]+t[0]+t[1]+t[1]+t[2]+t[2];case 6:return"#"+t;case 8:var e=parseInt(t.substr(0,2),16)/255;return"rgba("+parseInt(t.substr(2,2),16)+","+parseInt(t.substr(4,2),16)+","+parseInt(t.substr(6,2),16)+","+e+")";default:return null}}function u(t){switch(t.length){case 8:var e=parseInt(t.substr(0,2),16)/255;return{R:parseInt(t.substr(2,2),16),G:parseInt(t.substr(4,2),16),B:parseInt(t.substr(6,2),16),A:e};default:return null}}function f(t,e,r,n){return a(s(o(t),o(e),r,n))}e.e=o,e.i=a,e.f=i,e.h=c,e.d=l,e.g=u,e.c=f,r.d(e,"b",function(){return p}),r.d(e,"a",function(){return v});var p,h=r(12),d=/^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;!function(t){function e(){return Object.create(null)}t.cssClassSelectorMap={bf:1,af:2,ac:4,hv:8,tg:16,chd:32,bfac:5,afac:6,bfhv:9,afhv:10,bftg:17,aftg:18,chdbf:33,chdaf:34,chdac:36,chdhv:40,chdtg:48,chdbfac:37,chdafac:38,chdbfhv:41,chdafhv:42,chdbftg:49,chdaftg:50};var r=function(){function r(t,r,n,o,s){if(void 0===r&&(r=!1),void 0===n&&(n=!1),void 0===o&&(o=!1),this.isPrivate=r,this.isNoExtendsGlobal=n,this.isGlobalName=o,this.rule={},this.list=e(),this.classMap=e(),this.key=o?"":"V"+v.newID,t)this.styleElement=t;else{var a=document.createElement("style");a.type="text/css",r&&a.setAttribute("Private",""),n&&a.setAttribute("NoExtendsGlobal",""),a.setAttribute("key",this.key),r&&v.global.length>0?document.head.insertBefore(a,v.global[0].styleElement):document.head.appendChild(a),this.styleElement=a}v.all.push(this),r?v.private.push(this):v.global.push(this),s&&this.registerClassRule(s)}return r.reMountAllStyle=function(){for(var t=0,e=this.global;t<e.length;t++){var r=e[t];document.head.appendChild(r.styleElement)}for(var n=0,o=this.private;n<o.length;n++){var r=o[n];r.isPrivate&&v.global.length>0?document.head.insertBefore(r.styleElement,v.global[0].styleElement):document.head.appendChild(r.styleElement)}},r.prototype.clone=function(){return new r(void 0,this.isPrivate,this.isNoExtendsGlobal,this.isGlobalName,this.rule)},r.prototype.extendsClassRule=function(t){var e=this.rule,r=e.__proto__;t.__proto__=r,e.__proto__=t},r.prototype.getStyleByName=function(t){if(t in this.classMap){t=this.getNameByInfo(this.parseInfo(t),!1);var e=this.list[t],r="";if(Object(h.a)(e))for(var n=0,o=e;n<o.length;n++){var s=o[n];r+=s.textNode.data+"\n"}else r=e.textNode.data;return r}return null},r.prototype.registerClassRule=function(t,e){if(Object(h.c)(t))for(var r in t)this.registerClassRuleItem(r,t[r]);else{if(void 0===e)throw new Error("\u672a\u63d0\u4f9brule\u53c2\u6570\uff01");this.registerClassRuleItem(t,e)}},r.prototype.getNameByClass=function(t){var e=this.parseInfo(t);return e?e.name:""},r.prototype.getNameByInfo=function(t,e){void 0===e&&(e=!0);var r=t.name;return e&&t.selector&&(r+="-"+t.selector),t.index&&(r+="-"+t.index),t.moreInfo&&(r+="-"+t.moreInfo),r},r.prototype.registerClass=function(t,e){var r=this.parseInfo(t);if(!r)return void console.warn(new Error("can' t register class '"+t+"',because unknown."));if(e&&(r.selector=e,t=this.getNameByInfo(r),r.input=t),t in this.classMap)return this.key+t;return this.getNameByInfo(r,!1)in this.list?this.addSelector(r):this.create(r)},r.prototype.updateRule=function(t){for(var e in t){var r=t[e];this.getRule(e).map[e]=r,this.updateClass(e)}},r.prototype.updateClass=function(t){var e=this.parseInfo(t);if(!e)return void console.warn(new Error("can' t update class '"+t+"',because unknown."));return this.getNameByInfo(e,!1)in this.list?this.updateSelector(e):this.create(e)},r.prototype.parseToElement=function(t,e,r){this.parse(e,r).forEach(function(e){t.classList.add(e)})},r.prototype.parse=function(t,e){for(var r=t.split(/\s+/),n=[],o=0,s=r;o<s.length;o++){var a=s[o];if(""!==a){var i=this.registerClass(a,e);if(i)n.push(i);else{var c=this.parseInfo(a);c?(n.push(this.key+c.name),console.warn("rule:"+a+" isMissing!")):console.error("rule:"+a+" isWrong!")}}}return n},r.prototype.clear=function(){this.styleElement.innerHTML="",this.list=e(),this.classMap=e()},r.prototype.updateAllSelector=function(){var t=e();for(var r in this.classMap)t[r]=this.classMap[r];this.clear();for(var r in t)this.registerClass(r)},r.prototype.updateSelector=function(t){var e=this.getNameByInfo(t,!1);if(e in this.list){var r=this.list[e];if(delete this.list[e],Object(h.a)(r))for(var n=0,o=r;n<o.length;n++){var s=o[n];s.textNode.remove()}else r.textNode.remove()}return this.create(t)},r.prototype.getCSSClassDataByName=function(t){var e=this.parseInfo(t);return e?this.list[this.getNameByInfo(e,!1)]:null},r.prototype.addSelector=function(t){var e=this.list[this.getNameByInfo(t,!1)];if(Object(h.a)(e))for(var r=0,n=e;r<n.length;r++){var o=n[r];this.doAddSelector(o,t)}else this.doAddSelector(e,t);return this.key+t.input},r.prototype.makeStyleString=function(t){t.textNode.data=t.selectors.join(",")+"{"+t.rule+"}"},r.prototype.getRuleString=function(t,e,r){return Object(h.a)(t)?this.getRuleStringByArray(t,e,r):Object(h.d)(t)?t:t.call(e,r.index,r.moreInfo)},r.prototype.getRuleStringByArray=function(t,e,r){for(var n="/* "+t.length+" in 1 */",o=0,s=t;o<s.length;o++){var a=s[o];if(Object(h.d)(a)){var i=this.parseInfo(a);if(i){var c=this.getRule(i.name);if(null===c){console.warn("classRule '"+i.name+"' can't be found.");break}var l=c.rule,u=c.map;l&&(n+="\n  /*from "+i.input+"*/\n  "+this.getRuleString(l,u,i))}else n+="\n  /*from "+a+"*/\n\n",v.missingClass[a]=null}else Object(h.a)(a)&&(n+=this.getRuleStringByArray(a,e,r))}return n},r.prototype.create=function(t){var e=this.getRule(t.name);if(null===e)return void(this.list[this.getNameByInfo(t,!1)]=this.doCreate(this.styleElement,"",t));var r=e.rule,n=e.map,o=e.cssClass;return Object(h.a)(r)?this.list[this.getNameByInfo(t,!1)]=this.createByArray(o.styleElement,n,r,t):Object(h.d)(r)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(o.styleElement,r,t):Object(h.b)(r)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(o.styleElement,this.getRuleString(r,n,t),t):this.list[this.getNameByInfo(t,!1)]=this.createByObject(o.styleElement,n,r,t),this.classMap[t.input]=null,this.key+t.input},r.prototype.replace=function(t,e,r){t&&e&&r&&(e=this.key+e,r=this.key+r,t.className=t.className.replace(e,r))},r.prototype.removeArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var o=this.key+e[n];r.contains(o)&&r.remove(o)}},r.prototype.remove=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.removeArray(t,e)},r.prototype.addArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var o=this.registerClass(e[n]);o&&!r.contains(o)&&r.add(o)}},r.prototype.add=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.addArray(t,e)},r.prototype.getRule=function(t){var e=this.rule[t],r=this.rule,n=this;if(!e&&!this.isNoExtendsGlobal)for(var o=0,s=v.global;o<s.length;o++){var a=s[o];if(a!==this&&(e=a.rule[t],r=a.rule,n=a,e))break}return void 0!==e?{map:r,rule:e,cssClass:n}:null},r.prototype.registerClassRuleItem=function(t,e){this.rule[t]=e},r.prototype.parseInfo=function(t){var e=t.match(d);if(!e)return null;var r=void 0!==e[6]?Number(e[6]):void 0;return{input:t,name:e[2],selector:e[4],index:r,moreInfo:e[8]}},r.prototype.getSelectorSuffix=function(e){if(!(e in t.cssClassSelectorMap)){var n="."+this.key;return e.split(",").map(function(t){return t.replace(r.regExp.keyName,n)})}var o=t.cssClassSelectorMap[e],s="";return 32&o&&(s+=">*"),4&o&&(s+=":active"),8&o&&(s+=":hover"),16&o&&(s+=":target"),1&o&&(s+="::before"),2&o&&(s+="::after"),s},r.prototype.getClassNameBySuffix=function(t,e){return Object(h.a)(e)?t.input+e.join("\n,."+this.key+t.input):t.input+e},r.prototype.getClassNameByInfo=function(t){return t.selector?this.getClassNameBySuffix(t,this.getSelectorSuffix(t.selector)):t.input},r.prototype.doAddSelector=function(t,e){var r=this.getClassNameByInfo(e);r in t.selectorsMap||(t.selectors.push("."+this.key+r),t.selectorsMap[r]=null,this.classMap[e.input]=null,this.makeStyleString(t))},r.prototype.createByArrayItemNoObject=function(t,e,r,n){var o;return Object(h.a)(e)?o=this.getRuleStringByArray(e,t,r):Object(h.d)(e)?o=e:Object(h.b)(e)&&(o=e.call(t,r.index,r.moreInfo)),o},r.prototype.createByArrayItem=function(t,e,r,n,o){if(Object(h.a)(r))return this.getRuleStringByArray(r,e,n);if(Object(h.d)(r))return r;if(Object(h.b)(r))return r.call(e,n.index,n.moreInfo);for(var s in r){var a=void 0,i=r[s];if(Object(h.a)(i)){a="";for(var c=0,l=i;c<l.length;c++){var u=l[c];a+=this.createByArrayItemNoObject(e,u,n,o)}}else a=Object(h.d)(i)?i:Object(h.b)(i)?i.call(e,n.index,n.moreInfo):"";o.push(this.doCreate(t,a,n,this.getClassNameBySuffix(n,this.getSelectorSuffix(s))))}return""},r.prototype.createByArray=function(t,e,r,n){for(var o="",s=[],a=0,i=r;a<i.length;a++){var c=i[a];o+=this.createByArrayItem(t,e,c,n,s)}return s.push(this.doCreate(t,o,n)),s},r.prototype.doCreate=function(t,e,r,n){void 0===n&&(n=this.getClassNameByInfo(r));var o=document.createTextNode(""),s={textNode:o,selectors:["."+this.key+n],selectorsMap:(a={},a[n]=null,a),rule:e};return this.makeStyleString(s),t.appendChild(o),s;var a},r.prototype.createByObject=function(t,e,r,n){var o,s=[];for(o in r){var a=r[o];s.push(this.doCreate(t,this.getRuleString(a,e,n),n,this.getClassNameBySuffix(n,this.getSelectorSuffix(o))))}return s},Object.defineProperty(r,"newID",{get:function(){return v.cssIDIndex++},enumerable:!0,configurable:!0}),Object.defineProperty(r,"instance",{get:function(){var t=v.priInstance;return null===t&&(t=v.priInstance=new r(void 0,!1,!1,!0)),t},enumerable:!0,configurable:!0}),r.regExp={keyName:/\.&/g},r.global=[],r.private=[],r.all=[],r.missingClass={},r.cssIDIndex=0,r.priInstance=null,r}();t.CSSClass=r}(p=p||(p={})),void 0===window.CSSClass&&(window.CSSClass=p.CSSClass);var v=window.CSSClass},12:function(t,e,r){"use strict";function n(t){return"[object String]"===Object.prototype.toString.call(t)}function o(t){return"[object Function]"===Object.prototype.toString.call(t)}function s(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function a(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t){switch(Object.prototype.toString.call(t)){case"[object String]":case"[object Number]":case"[object Boolean]":return!0;default:return!1}}e.d=n,e.b=o,e.c=s,e.a=a,e.e=i},14:function(t,e,r){"use strict";function n(t){var e=null;return o.render(s.createElement("div",{ref:function(t){e=t.style.cssText},style:t}),document.createElement("div")),function(){return e||""}}e.a=n;var o=r(7),s=(r.n(o),r(1));r.n(s)},16:function(t,e){t.exports=r},17:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(16),o=(r.n(n),n);e.b={Affix:n.Affix,BackTop:n.BackTop,Breadcrumb:n.Breadcrumb,Dropdown:n.Dropdown,Icon:n.Icon,Layout:n.Layout,Menu:n.Menu,Spin:n.Spin,Tabs:n.Tabs,Button:n.Button,Tooltip:n.Tooltip,Checkbox:n.Checkbox,InputNumber:n.InputNumber,Switch:n.Switch,Slider:n.Slider,Modal:n.Modal,notification:n.notification},void 0===o?alert("\u672a\u5bfc\u5165\u4efb\u4f55Antd\u7ec4\u4ef6"):void 0===o.Affix&&alert("\u672a\u5bfc\u5165Antd.Base")},20:function(t,e,r){"use strict";function n(t,e,r){var n=window,o=n.Page||(n.Page={}),s=o[e]||(o[e]={});(s.Content||(s.Content={}))[t]=r}e.a=n},24:function(t,e,r){"use strict";function n(t){return function(e){Object(o.a)(t,s,e)}}r.d(e,"a",function(){return s}),e.b=n;var o=r(20),s="Document"},585:function(t,e,r){t.exports=r(586)},586:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(17),s=r(24),a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,r,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(a=(s<3?o(a):s>3?o(e,r,a):o(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a},c=o.b.Layout,l=c.Header,u=c.Footer,f=c.Sider,p=c.Content,h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return[n.a.createElement(o.b.Layout,null,n.a.createElement(f,null,"Sider"),n.a.createElement(o.b.Layout,null,n.a.createElement(l,null,"Header"),n.a.createElement(p,null,"Content"),n.a.createElement(u,null,"Footer")))]},e=i([Object(s.b)("Layout")],e)}(n.a.Component);e.default=h},7:function(t,r){t.exports=e}})});
//# sourceMappingURL=Layout.js.map