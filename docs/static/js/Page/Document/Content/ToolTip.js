!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"),require("react-dom"),require("Antd"));else if("function"===typeof define&&define.amd)define(["react","react-dom","Antd"],e);else{var r="object"===typeof exports?e(require("react"),require("react-dom"),require("Antd")):e(t.React,t.ReactDOM,t.Antd);for(var n in r)("object"===typeof exports?exports:t)[n]=r[n]}}(this,function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=588)}({0:function(t,e,r){"use strict";var n,a=r(1),o=(r.n(a),r(12)),i=r(14),s=r(13),l=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),c=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};!function(t){function e(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(u&&f.push({type:t,props:c({},e,{children:r})}),e){var l=e.EClass;if(void 0!==l){var h=i;if(Object(s.d)(l)){if(""!==l.trim()){var d=h.parse(l);void 0===e.className?e.className=d.join(" "):e.className+=" "+d.join(" "),delete e.EClass}}else if("setClass"in l){var m=void 0;"ref"in e&&(m=e.ref),e.ref=function(t){l.instance=t,m&&m(t)};var v;if(l.onChange=function(t){var e=l.instance,r=void 0;if(e){r=h.parse(t);var n=e.classList;if(v)for(var a=0;a<v.length;a++)n.contains(v[a])&&n.remove(v[a]);for(var a=0;a<r.length;a++)n.contains(r[a])||n.add(r[a])}v=r},""!==l.fixedClass.trim()){var y=h.parse(l.fixedClass);void 0===e.className?e.className=y.join(" "):e.className+=" "+y.join(" ")}""!==l.defaultClass.trim()&&(v=h.parse(l.defaultClass),void 0===e.className?e.className=v.join(" "):e.className+=" "+v.join(" ")),delete e.EClass}}for(var g in o.b.cssClassSelectorMap){var b=e["EClass-"+g];if(b){var d=i.parse(b,g);void 0===e.className?e.className=d.join(" "):e.className+=" "+d.join(" "),delete e["EClass-"+g]}}}return p.apply(a,arguments)}function r(t,e,r,n){return void 0===e&&(e=!0),void 0===r&&(r=!1),void 0===n&&(n=!1),function(a){var s=a.prototype.render;return a.prototype.render=function(){var t=i;i=this.cssClass;var e=s.call(this);return i=t,e},function(i){var s=new a(i);return s.cssClass=new o.b.CSSClass(void 0,e,r,n,t),s}}}function n(t){u=!0,f=[];var e=t();return u=!1,{source:f.pop(),result:e}}var i=o.a.instance,u=!1,f=[],p=a.createElement;Object.defineProperty(a,"createElement",{value:e});var h=function(){function t(t,e){this.fixedClass=t,this.defaultClass=e}return t.prototype.setClass=function(t){this.onChange&&this.onChange(t)},t}();t.AsyncEClass=h,t.eclass=r,t.hookCreateElement=n;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.renderReactNode=function(t){if(this.cssClass){var e=i;i=this.cssClass;var r=t();return i=e,r}return t()},e}(a.Component);t.Component=d}(n||(n={})),e.a=c({},a,n,{calcStyle:i.a}),void 0===a&&alert("\u672a\u5bfc\u5165React")},1:function(e,r){e.exports=t},12:function(t,e,r){"use strict";function n(t,e){return t.substr(t.length-e,e)}function a(t){var e=Number("0x"+t);return{R:(16711680&e)/65536,G:(65280&e)/256,B:255&e}}function o(t,e,r,n){var a=r/n;return{R:Math.floor((e.R-t.R)*a+.5)+t.R&255,G:Math.floor((e.G-t.G)*a+.5)+t.G&255,B:Math.floor((e.B-t.B)*a+.5)+t.B&255}}function i(t){return"#"+(n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2))}function s(t){return n("0"+Math.round(255*t.A).toString(16),2)+n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2)}function l(t){return"rgba("+t.R+","+t.G+","+t.B+","+t.A+")"}function c(t){switch(t.length){case 3:return"#"+t[0]+t[0]+t[1]+t[1]+t[2]+t[2];case 6:return"#"+t;case 8:var e=parseInt(t.substr(0,2),16)/255;return"rgba("+parseInt(t.substr(2,2),16)+","+parseInt(t.substr(4,2),16)+","+parseInt(t.substr(6,2),16)+","+e+")";default:return null}}function u(t){switch(t.length){case 8:var e=parseInt(t.substr(0,2),16)/255;return{R:parseInt(t.substr(2,2),16),G:parseInt(t.substr(4,2),16),B:parseInt(t.substr(6,2),16),A:e};default:return null}}function f(t,e,r,n){return i(o(a(t),a(e),r,n))}e.e=a,e.i=i,e.f=s,e.h=l,e.d=c,e.g=u,e.c=f,r.d(e,"b",function(){return p}),r.d(e,"a",function(){return m});var p,h=r(13),d=/^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;!function(t){function e(){return Object.create(null)}t.cssClassSelectorMap={bf:1,af:2,ac:4,hv:8,tg:16,chd:32,bfac:5,afac:6,bfhv:9,afhv:10,bftg:17,aftg:18,chdbf:33,chdaf:34,chdac:36,chdhv:40,chdtg:48,chdbfac:37,chdafac:38,chdbfhv:41,chdafhv:42,chdbftg:49,chdaftg:50};var r=function(){function r(t,r,n,a,o){void 0===r&&(r=!1),void 0===n&&(n=!1),void 0===a&&(a=!1),this.isPrivate=r,this.isNoExtendsGlobal=n,this.isGlobalName=a,this.rule={},this.list=e(),this.classMap=e(),this.key=a?"":"V"+m.newID,t||(t=document.createElement("style"),t.type="text/css",r&&t.setAttribute("Private",""),n&&t.setAttribute("NoExtendsGlobal",""),t.setAttribute("key",this.key),r&&m.global.length>0?document.head.insertBefore(t,m.global[0].styleElement):document.head.appendChild(t)),this.styleElement=t,m.all.push(this),r?m.private.push(this):m.global.push(this),o&&this.registerClassRule(o)}return r.reMountAllStyle=function(){for(var t=0,e=this.global;t<e.length;t++){var r=e[t];document.head.appendChild(r.styleElement)}for(var n=0,a=this.private;n<a.length;n++){var r=a[n];r.isPrivate&&m.global.length>0?document.head.insertBefore(r.styleElement,m.global[0].styleElement):document.head.appendChild(r.styleElement)}},r.prototype.extendsClassRule=function(t){var e=this.rule,r=e.__proto__;t.__proto__=r,e.__proto__=t},r.prototype.getStyleByName=function(t){if(t in this.classMap){t=this.getNameByInfo(this.parseInfo(t),!1);var e=this.list[t],r="";if(Object(h.a)(e))for(var n=0,a=e;n<a.length;n++){var o=a[n];r+=o.textNode.data+"\n"}else r=e.textNode.data;return r}return null},r.prototype.registerClassRule=function(t,e){if(Object(h.c)(t))for(var r in t)this.registerClassRuleItem(r,t[r]);else{if(void 0===e)throw new Error("\u672a\u63d0\u4f9brule\u53c2\u6570\uff01");this.registerClassRuleItem(t,e)}},r.prototype.getNameByInfo=function(t,e){void 0===e&&(e=!0);var r=t.name;return e&&t.selector&&(r+="-"+t.selector),t.index&&(r+="-"+t.index),t.moreInfo&&(r+="-"+t.moreInfo),r},r.prototype.registerClass=function(t,e){var r=this.parseInfo(t);if(!r)return void console.warn(new Error("can' t register class '"+t+"',because unknown."));if(e&&(r.selector=e,t=this.getNameByInfo(r),r.input=t),t in this.classMap)return this.key+t;return this.getNameByInfo(r,!1)in this.list?this.addSelector(r):this.create(r)},r.prototype.updateRule=function(t){for(var e in t){var r=t[e];this.getRule(e).map[e]=r,this.updateClass(e)}},r.prototype.updateClass=function(t){var e=this.parseInfo(t);if(!e)return void console.warn(new Error("can' t update class '"+t+"',because unknown."));return this.getNameByInfo(e,!1)in this.list?this.updateSelector(e):this.create(e)},r.prototype.parseToElement=function(t,e,r){this.parse(e,r).forEach(function(e){t.classList.add(e)})},r.prototype.parse=function(t,e){for(var r=t.split(/\s+/),n=[],a=0,o=r;a<o.length;a++){var i=o[a];if(""!==i){var s=this.registerClass(i,e);s?n.push(s):console.warn("cssClass:"+i+" can't be parse!")}}return n},r.prototype.clear=function(){this.styleElement.innerHTML="",this.list=e(),this.classMap=e()},r.prototype.updateAllSelector=function(){var t=e();for(var r in this.classMap)t[r]=this.classMap[r];this.clear();for(var r in t)this.registerClass(r)},r.prototype.updateSelector=function(t){var e=this.getNameByInfo(t,!1);if(e in this.list){var r=this.list[e];if(delete this.list[e],Object(h.a)(r))for(var n=0,a=r;n<a.length;n++){var o=a[n];o.textNode.remove()}else r.textNode.remove()}return this.create(t)},r.prototype.getCSSClassDataByName=function(t){var e=this.parseInfo(t);return e?this.list[this.getNameByInfo(e,!1)]:null},r.prototype.addSelector=function(t){var e=this.list[this.getNameByInfo(t,!1)];if(Object(h.a)(e))for(var r=0,n=e;r<n.length;r++){var a=n[r];this.doAddSelector(a,t)}else this.doAddSelector(e,t);return this.key+t.input},r.prototype.makeStyleString=function(t){t.textNode.data=t.selectors.join(",")+"{"+t.rule+"}"},r.prototype.getRuleString=function(t,e,r){return Object(h.a)(t)?this.getRuleStringByArray(t,e,r):Object(h.d)(t)?t:t.call(e,r.index,r.moreInfo)},r.prototype.getRuleStringByArray=function(t,e,r){for(var n="/* "+t.length+" in 1 */",a=0,o=t;a<o.length;a++){var i=o[a];if(Object(h.d)(i)){var s=this.parseInfo(i);if(s){var l=this.getRule(s.name),c=l.rule,u=l.map;c&&(n+="\n  /*from "+s.input+"*/\n  "+this.getRuleString(c,u,s))}else n+="\n  /*from "+i+"*/\n\n",m.missingClass[i]=null}else Object(h.a)(i)&&(n+=this.getRuleStringByArray(i,e,r))}return n},r.prototype.create=function(t){var e=this.getRule(t.name),r=e.rule,n=e.map,a=e.cssClass;return r?Object(h.a)(r)?this.list[this.getNameByInfo(t,!1)]=this.createByArray(a.styleElement,n,r,t):Object(h.d)(r)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(a.styleElement,r,t):Object(h.b)(r)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(a.styleElement,this.getRuleString(r,n,t),t):this.list[this.getNameByInfo(t,!1)]=this.createByObject(a.styleElement,n,r,t):this.list[this.getNameByInfo(t,!1)]=this.doCreate(a.styleElement,"",t),this.classMap[t.input]=null,this.key+t.input},r.prototype.replace=function(t,e,r){t&&e&&r&&(e=this.key+e,r=this.key+r,t.className=t.className.replace(e,r))},r.prototype.removeArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var a=this.key+e[n];r.contains(a)&&r.remove(a)}},r.prototype.remove=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.removeArray(t,e)},r.prototype.addArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var a=this.registerClass(e[n]);a&&!r.contains(a)&&r.add(a)}},r.prototype.add=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.addArray(t,e)},r.prototype.getRule=function(t){var e=this.rule[t],r=this.rule,n=this;if(!e&&!this.isNoExtendsGlobal)for(var a=0,o=m.global;a<o.length;a++){var i=o[a];if(i!==this&&(e=i.rule[t],r=i.rule,n=i,e))break}return{map:r,rule:e,cssClass:n}},r.prototype.registerClassRuleItem=function(t,e){this.rule[t]=e},r.prototype.parseInfo=function(t){var e=t.match(d);if(!e)return null;var r=void 0!==e[6]?Number(e[6]):void 0;return{input:t,name:e[2],selector:e[4],index:r,moreInfo:e[8]}},r.prototype.getSelectorSuffix=function(e){if(!(e in t.cssClassSelectorMap)){var n="."+this.key;return e.split(",").map(function(t){return t.replace(r.regExp.keyName,n)})}var a=t.cssClassSelectorMap[e],o="";return 32&a&&(o+=">*"),4&a&&(o+=":active"),8&a&&(o+=":hover"),16&a&&(o+=":target"),1&a&&(o+="::before"),2&a&&(o+="::after"),o},r.prototype.getClassNameBySuffix=function(t,e){return Object(h.a)(e)?t.input+e.join("\n,."+this.key+t.input):t.input+e},r.prototype.getClassNameByInfo=function(t){return t.selector?this.getClassNameBySuffix(t,this.getSelectorSuffix(t.selector)):t.input},r.prototype.doAddSelector=function(t,e){var r=this.getClassNameByInfo(e);r in t.selectorsMap||(t.selectors.push("."+this.key+r),t.selectorsMap[r]=null,this.classMap[e.input]=null,this.makeStyleString(t))},r.prototype.createByArrayItemNoObject=function(t,e,r,n){var a;return Object(h.a)(e)?a=this.getRuleStringByArray(e,t,r):Object(h.d)(e)?a=e:Object(h.b)(e)&&(a=e.call(t,r.index,r.moreInfo)),a},r.prototype.createByArrayItem=function(t,e,r,n,a){if(Object(h.a)(r))return this.getRuleStringByArray(r,e,n);if(Object(h.d)(r))return r;if(Object(h.b)(r))return r.call(e,n.index,n.moreInfo);for(var o in r){var i=void 0,s=r[o];if(Object(h.a)(s)){i="";for(var l=0,c=s;l<c.length;l++){var u=c[l];i+=this.createByArrayItemNoObject(e,u,n,a)}}else i=Object(h.d)(s)?s:Object(h.b)(s)?s.call(e,n.index,n.moreInfo):"";a.push(this.doCreate(t,i,n,this.getClassNameBySuffix(n,this.getSelectorSuffix(o))))}return""},r.prototype.createByArray=function(t,e,r,n){for(var a="",o=[],i=0,s=r;i<s.length;i++){var l=s[i];a+=this.createByArrayItem(t,e,l,n,o)}return o.push(this.doCreate(t,a,n)),o},r.prototype.doCreate=function(t,e,r,n){void 0===n&&(n=this.getClassNameByInfo(r));var a=document.createTextNode(""),o={textNode:a,selectors:["."+this.key+n],selectorsMap:(i={},i[n]=null,i),rule:e};return this.makeStyleString(o),t.appendChild(a),o;var i},r.prototype.createByObject=function(t,e,r,n){var a,o=[];for(a in r){var i=r[a];o.push(this.doCreate(t,this.getRuleString(i,e,n),n,this.getClassNameBySuffix(n,this.getSelectorSuffix(a))))}return o},Object.defineProperty(r,"newID",{get:function(){return m.cssIDIndex++},enumerable:!0,configurable:!0}),Object.defineProperty(r,"instance",{get:function(){var t=m.priInstance;return null===t&&(t=m.priInstance=new r(void 0,!1,!1,!0)),t},enumerable:!0,configurable:!0}),r.regExp={keyName:/\.&/g},r.global=[],r.private=[],r.all=[],r.missingClass={},r.cssIDIndex=0,r.priInstance=null,r}();t.CSSClass=r}(p=p||(p={})),void 0===window.CSSClass&&(window.CSSClass=p.CSSClass);var m=window.CSSClass},13:function(t,e,r){"use strict";function n(t){return"[object String]"===Object.prototype.toString.call(t)}function a(t){return"[object Function]"===Object.prototype.toString.call(t)}function o(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function i(t){return"[object Array]"===Object.prototype.toString.call(t)}e.d=n,e.b=a,e.c=o,e.a=i},14:function(t,e,r){"use strict";function n(t){var e=null;return a.render(o.createElement("div",{ref:function(t){e=t.style.cssText},style:t}),document.createElement("div")),function(){return e||""}}e.a=n;var a=r(7),o=(r.n(a),r(1));r.n(o)},16:function(t,e){t.exports=r},19:function(t,e,r){"use strict";var n=r(16),a=(r.n(n),n);e.a=n,void 0===a?alert("\u672a\u5bfc\u5165\u4efb\u4f55Antd\u7ec4\u4ef6"):void 0===a.Affix?alert("\u672a\u5bfc\u5165Antd.Base"):void 0===a.Switch&&alert("\u672a\u5bfc\u5165Antd.Ex\uff0c\u8bf7\u5728Page/Pages.json\u91cc\u914d\u7f6e\u7b2c4\u4e2a\u53c2\u6570\u4e3atrue\uff0c\u7136\u540e\u91cd\u542f\u6216\u91cd\u65b0\u6784\u5efa")},20:function(t,e,r){"use strict";function n(t,e,r){var n=window,a=n.Page||(n.Page={}),o=a[e]||(a[e]={});(o.Content||(o.Content={}))[t]=r}e.a=n},588:function(t,e,r){t.exports=r(589)},589:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),a=r(19),o=r(20),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),s=this&&this.__decorate||function(t,e,r,n){var a,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,r,i):a(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i},l=n.a.createElement("span",null,"prompt text"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return n.a.createElement("div",{EClass:"that",className:"tooltip-demo-placement"},n.a.createElement("div",{style:{marginLeft:60}},n.a.createElement(a.a.Tooltip,{placement:"topLeft",title:l},n.a.createElement("a",{href:"#"},"TL")),n.a.createElement(a.a.Tooltip,{placement:"top",title:l},n.a.createElement("a",{href:"#"},"Top")),n.a.createElement(a.a.Tooltip,{placement:"topRight",title:l},n.a.createElement("a",{href:"#"},"TR"))),n.a.createElement("div",{style:{width:60,float:"left"}},n.a.createElement(a.a.Tooltip,{placement:"leftTop",title:l},n.a.createElement("a",{href:"#"},"LT")),n.a.createElement(a.a.Tooltip,{placement:"left",title:l},n.a.createElement("a",{href:"#"},"Left")),n.a.createElement(a.a.Tooltip,{placement:"leftBottom",title:l},n.a.createElement("a",{href:"#"},"LB"))),n.a.createElement("div",{style:{width:60,marginLeft:270}},n.a.createElement(a.a.Tooltip,{placement:"rightTop",title:l},n.a.createElement("a",{href:"#"},"RT")),n.a.createElement(a.a.Tooltip,{placement:"right",title:l},n.a.createElement("a",{href:"#"},"Right")),n.a.createElement(a.a.Tooltip,{placement:"rightBottom",title:l},n.a.createElement("a",{href:"#"},"RB"))),n.a.createElement("div",{style:{marginLeft:60,clear:"both"}},n.a.createElement(a.a.Tooltip,{placement:"bottomLeft",title:l},n.a.createElement("a",{href:"#"},"BL")),n.a.createElement(a.a.Tooltip,{placement:"bottom",title:l},n.a.createElement("a",{href:"#"},"Bottom")),n.a.createElement(a.a.Tooltip,{placement:"bottomRight",title:l},n.a.createElement("a",{href:"#"},"BR"))))},e=s([n.a.eclass({that:[{".tooltip-demo-placement a":"display: inline-block;line-height: 32px;height: 32px;width: 60px;font-size: 14px;text-align: center;background: #f5f5f5;margin-right: 1em;margin-bottom: 1em;border-radius: 6px;",".tooltip-demo-placement button":"display: inline-block;line-height: 32px;height: 32px;width: 60px;font-size: 14px;text-align: center;background: #f5f5f5;margin-right: 1em;margin-bottom: 1em;border-radius: 6px;"}]})],e)}(n.a.Component);e.default=c,Object(o.a)("ToolTip","Document",c)},7:function(t,r){t.exports=e}})});
//# sourceMappingURL=ToolTip.js.map