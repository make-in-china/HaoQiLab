!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"),require("react-dom"),require("Antd"));else if("function"===typeof define&&define.amd)define(["react","react-dom","Antd"],e);else{var r="object"===typeof exports?e(require("react"),require("react-dom"),require("Antd")):e(t.React,t.ReactDOM,t.Antd);for(var n in r)("object"===typeof exports?exports:t)[n]=r[n]}}(this,function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=568)}({0:function(t,e,r){"use strict";var n,o=r(1),a=(r.n(o),r(12)),s=r(14),i=r(13),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};!function(t){function e(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(u&&f.push({type:t,props:l({},e,{children:r})}),e){var c=e.EClass;if(void 0!==c){var h=s;if(Object(i.d)(c)){if(""!==c.trim()){var d=h.parse(c);void 0===e.className?e.className=d.join(" "):e.className+=" "+d.join(" "),delete e.EClass}}else if("setClass"in c){var y=void 0;"ref"in e&&(y=e.ref),e.ref=function(t){c.instance=t,y&&y(t)};var v;if(c.onChange=function(t){var e=c.instance,r=void 0;if(e){r=h.parse(t);var n=e.classList;if(v)for(var o=0;o<v.length;o++)n.contains(v[o])&&n.remove(v[o]);for(var o=0;o<r.length;o++)n.contains(r[o])||n.add(r[o])}v=r},""!==c.fixedClass.trim()){var g=h.parse(c.fixedClass);void 0===e.className?e.className=g.join(" "):e.className+=" "+g.join(" ")}""!==c.defaultClass.trim()&&(v=h.parse(c.defaultClass),void 0===e.className?e.className=v.join(" "):e.className+=" "+v.join(" ")),delete e.EClass}}for(var m in a.b.cssClassSelectorMap){var b=e["EClass-"+m];if(b){var d=s.parse(b,m);void 0===e.className?e.className=d.join(" "):e.className+=" "+d.join(" "),delete e["EClass-"+m]}}}return p.apply(o,arguments)}function r(t,e,r,n){return void 0===e&&(e=!0),void 0===r&&(r=!1),void 0===n&&(n=!1),function(o){var i=o.prototype.render;return o.prototype.render=function(){var t=s;s=this.cssClass;var e=i.call(this);return s=t,e},function(s){var i=new o(s);return i.cssClass=new a.b.CSSClass(void 0,e,r,n,t),i}}}function n(t){u=!0,f=[];var e=t();return u=!1,{source:f.pop(),result:e}}var s=a.a.instance,u=!1,f=[],p=o.createElement;Object.defineProperty(o,"createElement",{value:e});var h=function(){function t(t,e){this.fixedClass=t,this.defaultClass=e}return t.prototype.setClass=function(t){this.onChange&&this.onChange(t)},t}();t.AsyncEClass=h,t.eclass=r,t.hookCreateElement=n;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.renderReactNode=function(t){if(this.cssClass){var e=s;s=this.cssClass;var r=t();return s=e,r}return t()},e}(o.Component);t.Component=d}(n||(n={})),e.a=l({},o,n,{calcStyle:s.a}),void 0===o&&alert("\u672a\u5bfc\u5165React")},1:function(e,r){e.exports=t},12:function(t,e,r){"use strict";function n(t,e){return t.substr(t.length-e,e)}function o(t){var e=Number("0x"+t);return{R:(16711680&e)/65536,G:(65280&e)/256,B:255&e}}function a(t,e,r,n){var o=r/n;return{R:Math.floor((e.R-t.R)*o+.5)+t.R&255,G:Math.floor((e.G-t.G)*o+.5)+t.G&255,B:Math.floor((e.B-t.B)*o+.5)+t.B&255}}function s(t){return"#"+(n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2))}function i(t){return n("0"+Math.round(255*t.A).toString(16),2)+n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2)}function c(t){switch(t.length){case 3:return"#"+t[0]+t[0]+t[1]+t[1]+t[2]+t[2];case 6:return"#"+t;case 8:var e=parseInt(t.substr(0,2),16)/255;return"rgba("+parseInt(t.substr(2,2),16)+","+parseInt(t.substr(4,2),16)+","+parseInt(t.substr(6,2),16)+","+e+")";default:return null}}function l(t,e,r,n){return s(a(o(t),o(e),r,n))}e.e=o,e.g=s,e.f=i,e.d=c,e.c=l,r.d(e,"b",function(){return u}),r.d(e,"a",function(){return h});var u,f=r(13),p=/^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;!function(t){function e(){return Object.create(null)}t.cssClassSelectorMap={bf:1,af:2,ac:4,hv:8,tg:16,chd:32,bfac:5,afac:6,bfhv:9,afhv:10,bftg:17,aftg:18,chdbf:33,chdaf:34,chdac:36,chdhv:40,chdtg:48,chdbfac:37,chdafac:38,chdbfhv:41,chdafhv:42,chdbftg:49,chdaftg:50};var r=function(){function r(t,r,n,o,a){void 0===r&&(r=!1),void 0===n&&(n=!1),void 0===o&&(o=!1),this.isPrivate=r,this.isNoExtendsGlobal=n,this.isGlobalName=o,this.rule={},this.list=e(),this.classMap=e(),this.key=o?"":"V"+h.newID,t||(t=document.createElement("style"),t.type="text/css",r&&t.setAttribute("Private",""),n&&t.setAttribute("NoExtendsGlobal",""),t.setAttribute("key",this.key),r&&h.global.length>0?document.head.insertBefore(t,h.global[0].styleElement):document.head.appendChild(t)),this.styleElement=t,h.all.push(this),r?h.private.push(this):h.global.push(this),a&&this.registerClassRule(a)}return r.reMountAllStyle=function(){for(var t=0,e=this.global;t<e.length;t++){var r=e[t];document.head.appendChild(r.styleElement)}for(var n=0,o=this.private;n<o.length;n++){var r=o[n];r.isPrivate&&h.global.length>0?document.head.insertBefore(r.styleElement,h.global[0].styleElement):document.head.appendChild(r.styleElement)}},r.prototype.extendsClassRule=function(t){var e=this.rule,r=e.__proto__;t.__proto__=r,e.__proto__=t},r.prototype.getStyleByName=function(t){if(t in this.classMap){t=this.getNameByInfo(this.parseInfo(t),!1);var e=this.list[t],r="";if(Object(f.a)(e))for(var n=0,o=e;n<o.length;n++){var a=o[n];r+=a.textNode.data+"\n"}else r=e.textNode.data;return r}return null},r.prototype.registerClassRule=function(t,e){if(Object(f.c)(t))for(var r in t)this.registerClassRuleItem(r,t[r]);else{if(void 0===e)throw new Error("\u672a\u63d0\u4f9brule\u53c2\u6570\uff01");this.registerClassRuleItem(t,e)}},r.prototype.getNameByInfo=function(t,e){void 0===e&&(e=!0);var r=t.name;return e&&t.selector&&(r+="-"+t.selector),t.index&&(r+="-"+t.index),t.moreInfo&&(r+="-"+t.moreInfo),r},r.prototype.registerClass=function(t,e){var r=this.parseInfo(t);if(!r)return void console.warn(new Error("can' t register class '"+t+"',because unknown."));if(e&&(r.selector=e,t=this.getNameByInfo(r),r.input=t),t in this.classMap)return this.key+t;return this.getNameByInfo(r,!1)in this.list?this.addSelector(r):this.create(r)},r.prototype.updateRule=function(t){for(var e in t){var r=t[e];this.getRule(e).map[e]=r,this.updateClass(e)}},r.prototype.updateClass=function(t){var e=this.parseInfo(t);if(!e)return void console.warn(new Error("can' t update class '"+t+"',because unknown."));return this.getNameByInfo(e,!1)in this.list?this.updateSelector(e):this.create(e)},r.prototype.parseToElement=function(t,e,r){this.parse(e,r).forEach(function(e){t.classList.add(e)})},r.prototype.parse=function(t,e){for(var r=t.split(/\s+/),n=[],o=0,a=r;o<a.length;o++){var s=a[o];if(""!==s){var i=this.registerClass(s,e);i?n.push(i):console.warn("cssClass:"+s+" can't be parse!")}}return n},r.prototype.clear=function(){this.styleElement.innerHTML="",this.list=e(),this.classMap=e()},r.prototype.updateAllSelector=function(){var t=e();for(var r in this.classMap)t[r]=this.classMap[r];this.clear();for(var r in t)this.registerClass(r)},r.prototype.updateSelector=function(t){var e=this.getNameByInfo(t,!1);if(e in this.list){var r=this.list[e];if(delete this.list[e],Object(f.a)(r))for(var n=0,o=r;n<o.length;n++){var a=o[n];a.textNode.remove()}else r.textNode.remove()}return this.create(t)},r.prototype.getCSSClassDataByName=function(t){var e=this.parseInfo(t);return e?this.list[this.getNameByInfo(e,!1)]:null},r.prototype.addSelector=function(t){var e=this.list[this.getNameByInfo(t,!1)];if(Object(f.a)(e))for(var r=0,n=e;r<n.length;r++){var o=n[r];this.doAddSelector(o,t)}else this.doAddSelector(e,t);return this.key+t.input},r.prototype.makeStyleString=function(t){t.textNode.data=t.selectors.join(",")+"{"+t.rule+"}"},r.prototype.getRuleString=function(t,e,r){return Object(f.a)(t)?this.getRuleStringByArray(t,e,r):Object(f.d)(t)?t:t.call(e,r.index,r.moreInfo)},r.prototype.getRuleStringByArray=function(t,e,r){for(var n="/* "+t.length+" in 1 */",o=0,a=t;o<a.length;o++){var s=a[o];if(Object(f.d)(s)){var i=this.parseInfo(s);if(i){var c=this.getRule(i.name),l=c.rule,u=c.map;l&&(n+="\n  /*from "+i.input+"*/\n  "+this.getRuleString(l,u,i))}else n+="\n  /*from "+s+"*/\n\n",h.missingClass[s]=null}else Object(f.a)(s)&&(n+=this.getRuleStringByArray(s,e,r))}return n},r.prototype.create=function(t){var e=this.getRule(t.name),r=e.rule,n=e.map,o=e.cssClass;return r?Object(f.a)(r)?this.list[this.getNameByInfo(t,!1)]=this.createByArray(o.styleElement,n,r,t):Object(f.d)(r)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(o.styleElement,r,t):Object(f.b)(r)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(o.styleElement,this.getRuleString(r,n,t),t):this.list[this.getNameByInfo(t,!1)]=this.createByObject(o.styleElement,n,r,t):this.list[this.getNameByInfo(t,!1)]=this.doCreate(o.styleElement,"",t),this.classMap[t.input]=null,this.key+t.input},r.prototype.replace=function(t,e,r){t&&e&&r&&(e=this.key+e,r=this.key+r,t.className=t.className.replace(e,r))},r.prototype.removeArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var o=this.key+e[n];r.contains(o)&&r.remove(o)}},r.prototype.remove=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.removeArray(t,e)},r.prototype.addArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var o=this.registerClass(e[n]);o&&!r.contains(o)&&r.add(o)}},r.prototype.add=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.addArray(t,e)},r.prototype.getRule=function(t){var e=this.rule[t],r=this.rule,n=this;if(!e&&!this.isNoExtendsGlobal)for(var o=0,a=h.global;o<a.length;o++){var s=a[o];if(s!==this&&(e=s.rule[t],r=s.rule,n=s,e))break}return{map:r,rule:e,cssClass:n}},r.prototype.registerClassRuleItem=function(t,e){this.rule[t]=e},r.prototype.parseInfo=function(t){var e=t.match(p);if(!e)return null;var r=void 0!==e[6]?Number(e[6]):void 0;return{input:t,name:e[2],selector:e[4],index:r,moreInfo:e[8]}},r.prototype.getSelectorSuffix=function(e){if(!(e in t.cssClassSelectorMap)){var n="."+this.key;return e.split(",").map(function(t){return t.replace(r.regExp.keyName,n)})}var o=t.cssClassSelectorMap[e],a="";return 32&o&&(a+=">*"),4&o&&(a+=":active"),8&o&&(a+=":hover"),16&o&&(a+=":target"),1&o&&(a+="::before"),2&o&&(a+="::after"),a},r.prototype.getClassNameBySuffix=function(t,e){return Object(f.a)(e)?t.input+e.join("\n,."+this.key+t.input):t.input+e},r.prototype.getClassNameByInfo=function(t){return t.selector?this.getClassNameBySuffix(t,this.getSelectorSuffix(t.selector)):t.input},r.prototype.doAddSelector=function(t,e){var r=this.getClassNameByInfo(e);r in t.selectorsMap||(t.selectors.push("."+this.key+r),t.selectorsMap[r]=null,this.classMap[e.input]=null,this.makeStyleString(t))},r.prototype.createByArrayItemNoObject=function(t,e,r,n){var o;return Object(f.a)(e)?o=this.getRuleStringByArray(e,t,r):Object(f.d)(e)?o=e:Object(f.b)(e)&&(o=e.call(t,r.index,r.moreInfo)),o},r.prototype.createByArrayItem=function(t,e,r,n,o){if(Object(f.a)(r))return this.getRuleStringByArray(r,e,n);if(Object(f.d)(r))return r;if(Object(f.b)(r))return r.call(e,n.index,n.moreInfo);for(var a in r){var s=void 0,i=r[a];if(Object(f.a)(i)){s="";for(var c=0,l=i;c<l.length;c++){var u=l[c];s+=this.createByArrayItemNoObject(e,u,n,o)}}else s=Object(f.d)(i)?i:Object(f.b)(i)?i.call(e,n.index,n.moreInfo):"";o.push(this.doCreate(t,s,n,this.getClassNameBySuffix(n,this.getSelectorSuffix(a))))}return""},r.prototype.createByArray=function(t,e,r,n){for(var o="",a=[],s=0,i=r;s<i.length;s++){var c=i[s];o+=this.createByArrayItem(t,e,c,n,a)}return a.push(this.doCreate(t,o,n)),a},r.prototype.doCreate=function(t,e,r,n){void 0===n&&(n=this.getClassNameByInfo(r));var o=document.createTextNode(""),a={textNode:o,selectors:["."+this.key+n],selectorsMap:(s={},s[n]=null,s),rule:e};return this.makeStyleString(a),t.appendChild(o),a;var s},r.prototype.createByObject=function(t,e,r,n){var o,a=[];for(o in r){var s=r[o];a.push(this.doCreate(t,this.getRuleString(s,e,n),n,this.getClassNameBySuffix(n,this.getSelectorSuffix(o))))}return a},Object.defineProperty(r,"newID",{get:function(){return h.cssIDIndex++},enumerable:!0,configurable:!0}),Object.defineProperty(r,"instance",{get:function(){var t=h.priInstance;return null===t&&(t=h.priInstance=new r(void 0,!1,!1,!0)),t},enumerable:!0,configurable:!0}),r.regExp={keyName:/\.&/g},r.global=[],r.private=[],r.all=[],r.missingClass={},r.cssIDIndex=0,r.priInstance=null,r}();t.CSSClass=r}(u=u||(u={})),void 0===window.CSSClass&&(window.CSSClass=u.CSSClass);var h=window.CSSClass},13:function(t,e,r){"use strict";function n(t){return"[object String]"===Object.prototype.toString.call(t)}function o(t){return"[object Function]"===Object.prototype.toString.call(t)}function a(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function s(t){return"[object Array]"===Object.prototype.toString.call(t)}e.d=n,e.b=o,e.c=a,e.a=s},14:function(t,e,r){"use strict";function n(t){var e=null;return o.render(a.createElement("div",{ref:function(t){e=t.style.cssText},style:t}),document.createElement("div")),function(){return e||""}}e.a=n;var o=r(7),a=(r.n(o),r(1));r.n(a)},16:function(t,e){t.exports=r},17:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(16),o=(r.n(n),n);e.b={Affix:n.Affix,BackTop:n.BackTop,Breadcrumb:n.Breadcrumb,Dropdown:n.Dropdown,Icon:n.Icon,Layout:n.Layout,Menu:n.Menu,Spin:n.Spin,Tabs:n.Tabs,Button:n.Button,Tooltip:n.Tooltip,Checkbox:n.Checkbox,InputNumber:n.InputNumber,Switch:n.Switch},void 0===o?alert("\u672a\u5bfc\u5165\u4efb\u4f55Antd\u7ec4\u4ef6"):void 0===o.Affix&&alert("\u672a\u5bfc\u5165Antd.Base")},22:function(t,e,r){"use strict";function n(t,e,r){var n=window,o=n.Page||(n.Page={}),a=o[e]||(o[e]={});(a.Content||(a.Content={}))[t]=r}e.a=n},568:function(t,e,r){t.exports=r(569)},569:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(17),a=r(22),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=o.b.Layout,c=i.Header,l=i.Footer,u=i.Sider,f=i.Content,p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return[n.a.createElement(o.b.Layout,null,n.a.createElement(u,null,"Sider"),n.a.createElement(o.b.Layout,null,n.a.createElement(c,null,"Header"),n.a.createElement(f,null,"Content"),n.a.createElement(l,null,"Footer")))]},e}(n.a.Component);e.default=p,Object(a.a)("Layout","Document",p)},7:function(t,r){t.exports=e}})});
//# sourceMappingURL=Layout.js.map