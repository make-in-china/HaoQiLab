!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"),require("react-dom"),require("Antd"));else if("function"===typeof define&&define.amd)define(["react","react-dom","Antd"],e);else{var r="object"===typeof exports?e(require("react"),require("react-dom"),require("Antd")):e(t.React,t.ReactDOM,t.Antd);for(var n in r)("object"===typeof exports?exports:t)[n]=r[n]}}(this,function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=545)}({0:function(t,e,r){"use strict";var n,a=r(1),o=(r.n(a),r(10)),i=r(8),s=(r.n(i),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),l=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};!function(t){function e(t){return"[object String]"===Object.prototype.toString.call(t)}function r(t,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(p&&h.push({type:t,props:l({},r,{children:n})}),r){var s=r.EClass;if(void 0!==s){var c=f;if(e(s)){if(""!==s.trim()){var u=c.parse(s);void 0===r.className?r.className=u.join(" "):r.className+=" "+u.join(" "),delete r.EClass}}else if("setClass"in s){var y=void 0;"ref"in r&&(y=r.ref),r.ref=function(t){s.instance=t,y&&y(t)};var m;if(s.onChange=function(t){var e=s.instance,r=void 0;if(e){r=c.parse(t);var n=e.classList;if(m)for(var a=0;a<m.length;a++)n.contains(m[a])&&n.remove(m[a]);for(var a=0;a<r.length;a++)n.contains(r[a])||n.add(r[a])}m=r},""!==s.fixedClass.trim()){var v=c.parse(s.fixedClass);void 0===r.className?r.className=v.join(" "):r.className+=" "+v.join(" ")}""!==s.defaultClass.trim()&&(m=c.parse(s.defaultClass),void 0===r.className?r.className=m.join(" "):r.className+=" "+m.join(" ")),delete r.EClass}}for(var g in o.b.cssClassSelectorMap){var b=r["EClass-"+g];if(b){var u=f.parse(b,g);void 0===r.className?r.className=u.join(" "):r.className+=" "+u.join(" "),delete r["EClass-"+g]}}}return d.apply(a,arguments)}function n(t){var e=null;return i.render(a.createElement("div",{ref:function(t){e=t.style.cssText},style:t}),document.createElement("div")),function(){return e||""}}function c(t,e,r,n){return void 0===e&&(e=!0),void 0===r&&(r=!1),void 0===n&&(n=!1),function(a){var i=a.prototype.render;return a.prototype.render=function(){var t=f;f=this.cssClass;var e=i.call(this);return f=t,e},function(i){var s=new a(i);return s.cssClass=new o.b.CSSClass(void 0,e,r,n,t),s}}}function u(t){p=!0,h=[];var e=t();return p=!1,{source:h.pop(),result:e}}var f=o.a.instance,p=!1,h=[],d=a.createElement;Object.defineProperty(a,"createElement",{value:r}),t.calcStyle=n;var y=function(){function t(t,e){this.fixedClass=t,this.defaultClass=e}return t.prototype.setClass=function(t){this.onChange&&this.onChange(t)},t}();t.AsyncEClass=y,t.eclass=c,t.hookCreateElement=u;var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.renderReactNode=function(t){if(this.cssClass){var e=f;f=this.cssClass;var r=t();return f=e,r}return t()},e}(a.Component);t.Component=m}(n||(n={})),e.a=l({},a,n),void 0===a&&alert("\u672a\u5bfc\u5165React")},1:function(e,r){e.exports=t},10:function(t,e,r){"use strict";function n(t,e){return t.substr(t.length-e,e)}function a(t){var e=Number("0x"+t);return{R:(16711680&e)/65536,G:(65280&e)/256,B:255&e}}function o(t,e,r,n){var a=r/n;return{R:(e.R-t.R)*a+t.R&255,G:(e.G-t.G)*a+t.G&255,B:(e.B-t.B)*a+t.B&255}}function i(t){return"#"+(n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2))}function s(t){return n("0"+Math.floor(256*t.A).toString(16),2)+n("0"+t.R.toString(16),2)+n("0"+t.G.toString(16),2)+n("0"+t.B.toString(16),2)}function l(t,e,r,n){return i(o(a(t),a(e),r,n))}e.e=o,e.f=i,e.d=s,e.c=l,r.d(e,"b",function(){return c}),r.d(e,"a",function(){return f});var c,u=/^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;!function(t){function e(t){return"[object Function]"===Object.prototype.toString.call(t)}function r(t){return"[object String]"===Object.prototype.toString.call(t)}function n(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function a(t){return"[object Array]"===Object.prototype.toString.call(t)}function o(){return Object.create(null)}t.cssClassSelectorMap={bf:1,af:2,ac:4,hv:8,tg:16,chd:32,bfac:5,afac:6,bfhv:9,afhv:10,bftg:17,aftg:18,chdbf:33,chdaf:34,chdac:36,chdhv:40,chdtg:48,chdbfac:37,chdafac:38,chdbfhv:41,chdafhv:42,chdbftg:49,chdaftg:50};var i=function(){function i(t,e,r,n,a){void 0===e&&(e=!1),void 0===r&&(r=!1),void 0===n&&(n=!1),this.isPrivate=e,this.isNoExtendsGlobal=r,this.isGlobalName=n,this.rule={},this.list=o(),this.classMap=o(),this.key=n?"":"V"+f.newID,t||(t=document.createElement("style"),t.type="text/css",e&&t.setAttribute("Private",""),r&&t.setAttribute("NoExtendsGlobal",""),t.setAttribute("key",this.key),e&&f.global.length>0?document.head.insertBefore(t,f.global[0].styleElement):document.head.appendChild(t)),this.styleElement=t,f.all.push(this),e?f.private.push(this):f.global.push(this),a&&this.registerClassRule(a)}return i.reMountAllStyle=function(){for(var t=0,e=this.global;t<e.length;t++){var r=e[t];document.head.appendChild(r.styleElement)}for(var n=0,a=this.private;n<a.length;n++){var r=a[n];r.isPrivate&&f.global.length>0?document.head.insertBefore(r.styleElement,f.global[0].styleElement):document.head.appendChild(r.styleElement)}},i.prototype.extendsClassRule=function(t){var e=this.rule,r=e.__proto__;t.__proto__=r,e.__proto__=t},i.prototype.getStyleByName=function(t){if(t in this.classMap){t=this.getNameByInfo(this.parseInfo(t),!1);var e=this.list[t],r="";if(a(e))for(var n=0,o=e;n<o.length;n++){var i=o[n];r+=i.textNode.data+"\n"}else r=e.textNode.data;return r}return null},i.prototype.registerClassRule=function(t,e){if(n(t))for(var r in t)this.registerOneRule(r,t[r]);else{if(void 0===e)throw new Error("\u672a\u63d0\u4f9brule\u53c2\u6570\uff01");this.registerOneRule(t,e)}},i.prototype.getNameByInfo=function(t,e){void 0===e&&(e=!0);var r=t.name;return e&&t.selector&&(r+="-"+t.selector),t.index&&(r+="-"+t.index),t.moreInfo&&(r+="-"+t.moreInfo),r},i.prototype.registerClass=function(t,e){var r=this.parseInfo(t);if(!r)return void console.warn(new Error("can' t register class '"+t+"',because unknown."));if(e&&(r.selector=e,t=this.getNameByInfo(r),r.input=t),t in this.classMap)return this.key+t;return this.getNameByInfo(r,!1)in this.list?this.addSelector(r):this.create(r)},i.prototype.updateRule=function(t){for(var e in t){var r=t[e];this.getRule(e).map[e]=r,this.updateClass(e)}},i.prototype.updateClass=function(t){var e=this.parseInfo(t);if(!e)return void console.warn(new Error("can' t update class '"+t+"',because unknown."));return this.getNameByInfo(e,!1)in this.list?this.updateSelector(e):this.create(e)},i.prototype.parse=function(t,e){for(var r=t.split(/\s+/),n=[],a=0,o=r;a<o.length;a++){var i=o[a];if(""!==i){var s=this.registerClass(i,e);s?n.push(s):console.warn("cssClass:"+i+" can't be parse!")}}return n},i.prototype.clear=function(){this.styleElement.innerHTML="",this.list=o(),this.classMap=o()},i.prototype.updateAllSelector=function(){var t=o();for(var e in this.classMap)t[e]=this.classMap[e];this.clear();for(var e in t)this.registerClass(e)},i.prototype.updateSelector=function(t){var e=this.getNameByInfo(t,!1);if(e in this.list){var r=this.list[e];if(delete this.list[e],a(r))for(var n=0,o=r;n<o.length;n++){var i=o[n];i.textNode.remove()}else r.textNode.remove()}return this.create(t)},i.prototype.getCSSClassDataByName=function(t){var e=this.parseInfo(t);return e?this.list[this.getNameByInfo(e,!1)]:null},i.prototype.addSelector=function(t){var e=this.list[this.getNameByInfo(t,!1)];if(a(e))for(var r=0,n=e;r<n.length;r++){var o=n[r];this.doAddSelector(o,t)}else this.doAddSelector(e,t);return this.key+t.input},i.prototype.makeStyleString=function(t){t.textNode.data=t.selectors.join(",")+"{"+t.rule+"}"},i.prototype.getRuleString=function(t,e,n){return a(t)?this.getRuleStringByArray(t,e,n):r(t)?t:t.call(e,n.index,n.moreInfo)},i.prototype.getRuleStringByArray=function(t,e,n){for(var o="/* "+t.length+" in 1 */",i=0,s=t;i<s.length;i++){var l=s[i];if(r(l)){var c=this.parseInfo(l);if(c){var u=this.getRule(c.name),p=u.rule,h=u.map;p&&(o+="\n  /*from "+c.input+"*/\n  "+this.getRuleString(p,h,c))}else o+="\n  /*from "+l+"*/\n\n",f.missingClass[l]=null}else a(l)&&(o+=this.getRuleStringByArray(l,e,n))}return o},i.prototype.create=function(t){var n=this.getRule(t.name),o=n.rule,i=n.map,s=n.cssClass;return o?a(o)?this.list[this.getNameByInfo(t,!1)]=this.createByArray(s.styleElement,i,o,t):r(o)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(s.styleElement,o,t):e(o)?this.list[this.getNameByInfo(t,!1)]=this.doCreate(s.styleElement,this.getRuleString(o,i,t),t):this.list[this.getNameByInfo(t,!1)]=this.createByObject(s.styleElement,i,o,t):this.list[this.getNameByInfo(t,!1)]=this.doCreate(s.styleElement,"",t),this.classMap[t.input]=null,this.key+t.input},i.prototype.replace=function(t,e,r){t&&e&&r&&(e=this.key+e,r=this.key+r,t.className=t.className.replace(e,r))},i.prototype.removeArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var a=this.key+e[n];r.contains(a)&&r.remove(a)}},i.prototype.remove=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.removeArray(t,e)},i.prototype.addArray=function(t,e){if(t)for(var r=t.classList,n=0;n<e.length;n++){var a=this.registerClass(e[n]);a&&!r.contains(a)&&r.add(a)}},i.prototype.add=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.addArray(t,e)},i.prototype.getRule=function(t){var e=this.rule[t],r=this.rule,n=this;if(!e&&!this.isNoExtendsGlobal)for(var a=0,o=f.global;a<o.length;a++){var i=o[a];if(i!==this&&(e=i.rule[t],r=i.rule,n=i,e))break}return{map:r,rule:e,cssClass:n}},i.prototype.registerOneRule=function(t,e){this.rule[t]=e},i.prototype.parseInfo=function(t){var e=t.match(u);if(!e)return null;var r=void 0!==e[6]?Number(e[6]):void 0;return{input:t,name:e[2],selector:e[4],index:r,moreInfo:e[8]}},i.prototype.getSelectorSuffix=function(e){if(!(e in t.cssClassSelectorMap)){var r="."+this.key;return e.split(",").map(function(t){return t.replace(i.regExp.keyName,r)})}var n=t.cssClassSelectorMap[e],a="";return 32&n&&(a+=">*"),4&n&&(a+=":active"),8&n&&(a+=":hover"),16&n&&(a+=":target"),1&n&&(a+="::before"),2&n&&(a+="::after"),a},i.prototype.getClassNameBySuffix=function(t,e){return a(e)?t.input+e.join("\n,."+this.key+t.input):t.input+e},i.prototype.getClassNameByInfo=function(t){return t.selector?this.getClassNameBySuffix(t,this.getSelectorSuffix(t.selector)):t.input},i.prototype.doAddSelector=function(t,e){var r=this.getClassNameByInfo(e);r in t.selectorsMap||(t.selectors.push("."+this.key+r),t.selectorsMap[r]=null,this.classMap[e.input]=null,this.makeStyleString(t))},i.prototype.createByArrayItemNoObject=function(t,n,o,i){var s;return a(n)?s=this.getRuleStringByArray(n,t,o):r(n)?s=n:e(n)&&(s=n.call(t,o.index,o.moreInfo)),s},i.prototype.createByArrayItem=function(t,n,o,i,s){if(a(o))return this.getRuleStringByArray(o,n,i);if(r(o))return o;if(e(o))return o.call(n,i.index,i.moreInfo);for(var l in o){var c=void 0,u=o[l];if(a(u)){c="";for(var f=0,p=u;f<p.length;f++){var h=p[f];c+=this.createByArrayItemNoObject(n,h,i,s)}}else c=r(u)?u:e(u)?u.call(n,i.index,i.moreInfo):"";s.push(this.doCreate(t,c,i,this.getClassNameBySuffix(i,this.getSelectorSuffix(l))))}return""},i.prototype.createByArray=function(t,e,r,n){for(var a="",o=[],i=0,s=r;i<s.length;i++){var l=s[i];a+=this.createByArrayItem(t,e,l,n,o)}return o.push(this.doCreate(t,a,n)),o},i.prototype.doCreate=function(t,e,r,n){void 0===n&&(n=this.getClassNameByInfo(r));var a=document.createTextNode(""),o={textNode:a,selectors:["."+this.key+n],selectorsMap:(i={},i[n]=null,i),rule:e};return this.makeStyleString(o),t.appendChild(a),o;var i},i.prototype.createByObject=function(t,e,r,n){var a,o=[];for(a in r){var i=r[a];o.push(this.doCreate(t,this.getRuleString(i,e,n),n,this.getClassNameBySuffix(n,this.getSelectorSuffix(a))))}return o},Object.defineProperty(i,"newID",{get:function(){return f.cssIDIndex++},enumerable:!0,configurable:!0}),Object.defineProperty(i,"instance",{get:function(){var t=f.priInstance;return null===t&&(t=f.priInstance=new i(void 0,!1,!1,!0)),t},enumerable:!0,configurable:!0}),i.regExp={keyName:/\.&/g},i.global=[],i.private=[],i.all=[],i.missingClass={},i.cssIDIndex=0,i.priInstance=null,i}();t.CSSClass=i}(c=c||(c={})),void 0===window.CSSClass&&(window.CSSClass=c.CSSClass);var f=window.CSSClass},11:function(t,e,r){"use strict";var n=r(15);r.n(n);e.a=n,void 0===n?alert("\u672a\u5bfc\u5165\u4efb\u4f55Antd\u7ec4\u4ef6"):void 0===n.Affix?alert("\u672a\u5bfc\u5165Antd.Base"):void 0===n.Switch&&alert("\u672a\u5bfc\u5165Antd.Ex\uff0c\u8bf7\u5728Page/Pages.json\u91cc\u914d\u7f6e\u7b2c4\u4e2a\u53c2\u6570\u4e3atrue\uff0c\u7136\u540e\u91cd\u542f\u6216\u91cd\u65b0\u6784\u5efa")},15:function(t,e){t.exports=r},19:function(t,e,r){"use strict";function n(t,e,r){var n=window,a=n.Page||(n.Page={}),o=a[e]||(a[e]={});(o.Content||(o.Content={}))[t]=r}e.a=n},271:function(t,e,r){"use strict";var n=r(0),a=r(272),o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return n.a.createElement(a.a,{datasource:this.props.datasource,columns:[{key:"property",title:"\u6210\u5458",dataIndex:"property"},{key:"description",title:"\u8bf4\u660e",dataIndex:"description"},{key:"type",title:"\u7c7b\u578b",dataIndex:"type"},{key:"default",title:"\u9ed8\u8ba4\u503c",dataIndex:"default"}]})},e}(n.a.Component);e.a=i},272:function(t,e,r){"use strict";var n=r(0),a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=function(t){function e(e){var r=t.call(this,e)||this;return r.keyMap={},r.props.columns.map(function(t,e){r.keyMap[t.key]=e}),r}return a(e,t),e.prototype.render=function(){var t=this;return n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,this.props.columns.map(function(t){return n.a.createElement("th",null,t.title)}))),n.a.createElement("tbody",null,this.props.datasource.map(function(e){return n.a.createElement("tr",null,function(){var r=Object.keys(e),a=new Array(r.length-1);return r.forEach(function(r,o){"key"!==r&&(a[t.keyMap[r]]=n.a.createElement("td",{dangerouslySetInnerHTML:{__html:e[r]}}))}),a}())})))},e}(n.a.Component);e.a=o},545:function(t,e,r){t.exports=r(546)},546:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),a=r(11),o=r(271),i=r(19),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.container=null,e}return s(e,t),e.prototype.render=function(){var t=this;return[n.a.createElement("section",{className:"markdown"},n.a.createElement("h1",null,"Affix",n.a.createElement("span",{className:"subtitle"},"\u56fa\u9489")),n.a.createElement("section",{className:"markdown"},n.a.createElement("p",null,"\u5c06\u9875\u9762\u5143\u7d20\u9489\u5728\u53ef\u89c6\u8303\u56f4\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528","data-scrollama-index":"0"},n.a.createElement("span",null,"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("a",{href:"#\u4f55\u65f6\u4f7f\u7528",className:"anchor"},"#")),n.a.createElement("p",null,"\u5f53\u5185\u5bb9\u533a\u57df\u6bd4\u8f83\u957f\uff0c\u9700\u8981\u6eda\u52a8\u9875\u9762\u65f6\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u5bf9\u5e94\u7684\u64cd\u4f5c\u6216\u8005\u5bfc\u822a\u9700\u8981\u5728\u6eda\u52a8\u8303\u56f4\u5185\u59cb\u7ec8\u5c55\u73b0\u3002\u5e38\u7528\u4e8e\u4fa7\u8fb9\u83dc\u5355\u548c\u6309\u94ae\u7ec4\u5408\u3002"),n.a.createElement("p",null,"\u9875\u9762\u53ef\u89c6\u8303\u56f4\u8fc7\u5c0f\u65f6\uff0c\u614e\u7528\u6b64\u529f\u80fd\u4ee5\u514d\u906e\u6321\u9875\u9762\u5185\u5bb9\u3002")),n.a.createElement("h2",{"data-scrollama-index":"1"},n.a.createElement("span",null,"\u4ee3\u7801\u6f14\u793a"),n.a.createElement("i",{className:"anticon anticon-appstore code-box-expand-trigger",title:"\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"}))),n.a.createElement("div",{style:{height:"200px",overflowY:"scroll"},ref:function(e){t.container=e}},n.a.createElement("div",{style:{paddingTop:"60px",height:"400px"}},n.a.createElement(a.a.Affix,null,n.a.createElement(a.a.Button,{type:"primary"},"Affix top")),n.a.createElement("br",null),n.a.createElement(a.a.Affix,{offsetBottom:0},n.a.createElement(a.a.Button,{type:"primary"},"Affix bottom")),n.a.createElement("br",null),n.a.createElement(a.a.Affix,{offsetTop:120,onChange:function(t){return console.log(t)}},n.a.createElement(a.a.Button,null,"120px to affix top")),n.a.createElement("br",null),n.a.createElement(a.a.Affix,{target:function(){return t.container}},n.a.createElement(a.a.Button,{type:"primary"},"Fixed at the top of container")))),n.a.createElement("section",{className:"markdown api-container"},n.a.createElement("h2",{id:"API","data-scrollama-index":"5"},n.a.createElement("span",null,"API"),n.a.createElement("a",{href:"#API",className:"anchor"},"#")),n.a.createElement(o.a,{datasource:[{property:"offsetBottom",default:"",type:"number",description:"\u8ddd\u79bb\u7a97\u53e3\u5e95\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1"},{property:"offsetTop",default:"",type:"number",description:"\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1"},{property:"target",default:"() => window",type:"() => HTMLElement",description:"\u8bbe\u7f6e<code>Affix</code>\u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u503c\u4e3a\u4e00\u4e2a\u8fd4\u56de\u5bf9\u5e94 DOM \u5143\u7d20\u7684\u51fd\u6570"},{property:"onChange",default:"",type:"Function(affixed)",description:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"}]}))]},e}(n.a.Component);e.default=l,Object(i.a)("Affix","Document",l)},8:function(t,r){t.exports=e}})});
//# sourceMappingURL=Affix.js.map