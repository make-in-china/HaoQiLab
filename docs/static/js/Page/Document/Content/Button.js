!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"),require("react-dom"),require("Antd"),require("Mobx"));else if("function"===typeof define&&define.amd)define(["react","react-dom","Antd","Mobx"],t);else{var n="object"===typeof exports?t(require("react"),require("react-dom"),require("Antd"),require("Mobx")):t(e.React,e.ReactDOM,e.Antd,e.Mobx);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=559)}({0:function(e,t,n){"use strict";var r,a=n(1),o=(n.n(a),n(12)),i=n(14),s=n(13),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};!function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(u&&p.push({type:e,props:c({},t,{children:n})}),t){var l=t.EClass;if(void 0!==l){var d=i;if(Object(s.d)(l)){if(""!==l.trim()){var h=d.parse(l);void 0===t.className?t.className=h.join(" "):t.className+=" "+h.join(" "),delete t.EClass}}else if("setClass"in l){var m=void 0;"ref"in t&&(m=t.ref),t.ref=function(e){l.instance=e,m&&m(e)};var y;if(l.onChange=function(e){var t=l.instance,n=void 0;if(t){n=d.parse(e);var r=t.classList;if(y)for(var a=0;a<y.length;a++)r.contains(y[a])&&r.remove(y[a]);for(var a=0;a<n.length;a++)r.contains(n[a])||r.add(n[a])}y=n},""!==l.fixedClass.trim()){var v=d.parse(l.fixedClass);void 0===t.className?t.className=v.join(" "):t.className+=" "+v.join(" ")}""!==l.defaultClass.trim()&&(y=d.parse(l.defaultClass),void 0===t.className?t.className=y.join(" "):t.className+=" "+y.join(" ")),delete t.EClass}}for(var g in o.b.cssClassSelectorMap){var b=t["EClass-"+g];if(b){var h=i.parse(b,g);void 0===t.className?t.className=h.join(" "):t.className+=" "+h.join(" "),delete t["EClass-"+g]}}}return f.apply(a,arguments)}function n(e,t,n,r){return void 0===t&&(t=!0),void 0===n&&(n=!1),void 0===r&&(r=!1),function(a){var s=a.prototype.render;return a.prototype.render=function(){var e=i;i=this.cssClass;var t=s.call(this);return i=e,t},function(i){var s=new a(i);return s.cssClass=new o.b.CSSClass(void 0,t,n,r,e),s}}}function r(e){u=!0,p=[];var t=e();return u=!1,{source:p.pop(),result:t}}var i=o.a.instance,u=!1,p=[],f=a.createElement;Object.defineProperty(a,"createElement",{value:t});var d=function(){function e(e,t){this.fixedClass=e,this.defaultClass=t}return e.prototype.setClass=function(e){this.onChange&&this.onChange(e)},e}();e.AsyncEClass=d,e.eclass=n,e.hookCreateElement=r;var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.renderReactNode=function(e){if(this.cssClass){var t=i;i=this.cssClass;var n=e();return i=t,n}return e()},t}(a.Component);e.Component=h}(r||(r={})),t.a=c({},a,r,{calcStyle:i.a}),void 0===a&&alert("\u672a\u5bfc\u5165React")},1:function(t,n){t.exports=e},12:function(e,t,n){"use strict";function r(e,t){return e.substr(e.length-t,t)}function a(e){var t=Number("0x"+e);return{R:(16711680&t)/65536,G:(65280&t)/256,B:255&t}}function o(e,t,n,r){var a=n/r;return{R:Math.floor((t.R-e.R)*a+.5)+e.R&255,G:Math.floor((t.G-e.G)*a+.5)+e.G&255,B:Math.floor((t.B-e.B)*a+.5)+e.B&255}}function i(e){return"#"+(r("0"+e.R.toString(16),2)+r("0"+e.G.toString(16),2)+r("0"+e.B.toString(16),2))}function s(e){return r("0"+Math.round(255*e.A).toString(16),2)+r("0"+e.R.toString(16),2)+r("0"+e.G.toString(16),2)+r("0"+e.B.toString(16),2)}function l(e){switch(e.length){case 3:return"#"+e[0]+e[0]+e[1]+e[1]+e[2]+e[2];case 6:return"#"+e;case 8:var t=parseInt(e.substr(0,2),16)/255;return"rgba("+parseInt(e.substr(2,2),16)+","+parseInt(e.substr(4,2),16)+","+parseInt(e.substr(6,2),16)+","+t+")";default:return null}}function c(e,t,n,r){return i(o(a(e),a(t),n,r))}t.e=a,t.g=i,t.f=s,t.d=l,t.c=c,n.d(t,"b",function(){return u}),n.d(t,"a",function(){return d});var u,p=n(13),f=/^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;!function(e){function t(){return Object.create(null)}e.cssClassSelectorMap={bf:1,af:2,ac:4,hv:8,tg:16,chd:32,bfac:5,afac:6,bfhv:9,afhv:10,bftg:17,aftg:18,chdbf:33,chdaf:34,chdac:36,chdhv:40,chdtg:48,chdbfac:37,chdafac:38,chdbfhv:41,chdafhv:42,chdbftg:49,chdaftg:50};var n=function(){function n(e,n,r,a,o){void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===a&&(a=!1),this.isPrivate=n,this.isNoExtendsGlobal=r,this.isGlobalName=a,this.rule={},this.list=t(),this.classMap=t(),this.key=a?"":"V"+d.newID,e||(e=document.createElement("style"),e.type="text/css",n&&e.setAttribute("Private",""),r&&e.setAttribute("NoExtendsGlobal",""),e.setAttribute("key",this.key),n&&d.global.length>0?document.head.insertBefore(e,d.global[0].styleElement):document.head.appendChild(e)),this.styleElement=e,d.all.push(this),n?d.private.push(this):d.global.push(this),o&&this.registerClassRule(o)}return n.reMountAllStyle=function(){for(var e=0,t=this.global;e<t.length;e++){var n=t[e];document.head.appendChild(n.styleElement)}for(var r=0,a=this.private;r<a.length;r++){var n=a[r];n.isPrivate&&d.global.length>0?document.head.insertBefore(n.styleElement,d.global[0].styleElement):document.head.appendChild(n.styleElement)}},n.prototype.extendsClassRule=function(e){var t=this.rule,n=t.__proto__;e.__proto__=n,t.__proto__=e},n.prototype.getStyleByName=function(e){if(e in this.classMap){e=this.getNameByInfo(this.parseInfo(e),!1);var t=this.list[e],n="";if(Object(p.a)(t))for(var r=0,a=t;r<a.length;r++){var o=a[r];n+=o.textNode.data+"\n"}else n=t.textNode.data;return n}return null},n.prototype.registerClassRule=function(e,t){if(Object(p.c)(e))for(var n in e)this.registerClassRuleItem(n,e[n]);else{if(void 0===t)throw new Error("\u672a\u63d0\u4f9brule\u53c2\u6570\uff01");this.registerClassRuleItem(e,t)}},n.prototype.getNameByInfo=function(e,t){void 0===t&&(t=!0);var n=e.name;return t&&e.selector&&(n+="-"+e.selector),e.index&&(n+="-"+e.index),e.moreInfo&&(n+="-"+e.moreInfo),n},n.prototype.registerClass=function(e,t){var n=this.parseInfo(e);if(!n)return void console.warn(new Error("can' t register class '"+e+"',because unknown."));if(t&&(n.selector=t,e=this.getNameByInfo(n),n.input=e),e in this.classMap)return this.key+e;return this.getNameByInfo(n,!1)in this.list?this.addSelector(n):this.create(n)},n.prototype.updateRule=function(e){for(var t in e){var n=e[t];this.getRule(t).map[t]=n,this.updateClass(t)}},n.prototype.updateClass=function(e){var t=this.parseInfo(e);if(!t)return void console.warn(new Error("can' t update class '"+e+"',because unknown."));return this.getNameByInfo(t,!1)in this.list?this.updateSelector(t):this.create(t)},n.prototype.parseToElement=function(e,t,n){this.parse(t,n).forEach(function(t){e.classList.add(t)})},n.prototype.parse=function(e,t){for(var n=e.split(/\s+/),r=[],a=0,o=n;a<o.length;a++){var i=o[a];if(""!==i){var s=this.registerClass(i,t);s?r.push(s):console.warn("cssClass:"+i+" can't be parse!")}}return r},n.prototype.clear=function(){this.styleElement.innerHTML="",this.list=t(),this.classMap=t()},n.prototype.updateAllSelector=function(){var e=t();for(var n in this.classMap)e[n]=this.classMap[n];this.clear();for(var n in e)this.registerClass(n)},n.prototype.updateSelector=function(e){var t=this.getNameByInfo(e,!1);if(t in this.list){var n=this.list[t];if(delete this.list[t],Object(p.a)(n))for(var r=0,a=n;r<a.length;r++){var o=a[r];o.textNode.remove()}else n.textNode.remove()}return this.create(e)},n.prototype.getCSSClassDataByName=function(e){var t=this.parseInfo(e);return t?this.list[this.getNameByInfo(t,!1)]:null},n.prototype.addSelector=function(e){var t=this.list[this.getNameByInfo(e,!1)];if(Object(p.a)(t))for(var n=0,r=t;n<r.length;n++){var a=r[n];this.doAddSelector(a,e)}else this.doAddSelector(t,e);return this.key+e.input},n.prototype.makeStyleString=function(e){e.textNode.data=e.selectors.join(",")+"{"+e.rule+"}"},n.prototype.getRuleString=function(e,t,n){return Object(p.a)(e)?this.getRuleStringByArray(e,t,n):Object(p.d)(e)?e:e.call(t,n.index,n.moreInfo)},n.prototype.getRuleStringByArray=function(e,t,n){for(var r="/* "+e.length+" in 1 */",a=0,o=e;a<o.length;a++){var i=o[a];if(Object(p.d)(i)){var s=this.parseInfo(i);if(s){var l=this.getRule(s.name),c=l.rule,u=l.map;c&&(r+="\n  /*from "+s.input+"*/\n  "+this.getRuleString(c,u,s))}else r+="\n  /*from "+i+"*/\n\n",d.missingClass[i]=null}else Object(p.a)(i)&&(r+=this.getRuleStringByArray(i,t,n))}return r},n.prototype.create=function(e){var t=this.getRule(e.name),n=t.rule,r=t.map,a=t.cssClass;return n?Object(p.a)(n)?this.list[this.getNameByInfo(e,!1)]=this.createByArray(a.styleElement,r,n,e):Object(p.d)(n)?this.list[this.getNameByInfo(e,!1)]=this.doCreate(a.styleElement,n,e):Object(p.b)(n)?this.list[this.getNameByInfo(e,!1)]=this.doCreate(a.styleElement,this.getRuleString(n,r,e),e):this.list[this.getNameByInfo(e,!1)]=this.createByObject(a.styleElement,r,n,e):this.list[this.getNameByInfo(e,!1)]=this.doCreate(a.styleElement,"",e),this.classMap[e.input]=null,this.key+e.input},n.prototype.replace=function(e,t,n){e&&t&&n&&(t=this.key+t,n=this.key+n,e.className=e.className.replace(t,n))},n.prototype.removeArray=function(e,t){if(e)for(var n=e.classList,r=0;r<t.length;r++){var a=this.key+t[r];n.contains(a)&&n.remove(a)}},n.prototype.remove=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.removeArray(e,t)},n.prototype.addArray=function(e,t){if(e)for(var n=e.classList,r=0;r<t.length;r++){var a=this.registerClass(t[r]);a&&!n.contains(a)&&n.add(a)}},n.prototype.add=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.addArray(e,t)},n.prototype.getRule=function(e){var t=this.rule[e],n=this.rule,r=this;if(!t&&!this.isNoExtendsGlobal)for(var a=0,o=d.global;a<o.length;a++){var i=o[a];if(i!==this&&(t=i.rule[e],n=i.rule,r=i,t))break}return{map:n,rule:t,cssClass:r}},n.prototype.registerClassRuleItem=function(e,t){this.rule[e]=t},n.prototype.parseInfo=function(e){var t=e.match(f);if(!t)return null;var n=void 0!==t[6]?Number(t[6]):void 0;return{input:e,name:t[2],selector:t[4],index:n,moreInfo:t[8]}},n.prototype.getSelectorSuffix=function(t){if(!(t in e.cssClassSelectorMap)){var r="."+this.key;return t.split(",").map(function(e){return e.replace(n.regExp.keyName,r)})}var a=e.cssClassSelectorMap[t],o="";return 32&a&&(o+=">*"),4&a&&(o+=":active"),8&a&&(o+=":hover"),16&a&&(o+=":target"),1&a&&(o+="::before"),2&a&&(o+="::after"),o},n.prototype.getClassNameBySuffix=function(e,t){return Object(p.a)(t)?e.input+t.join("\n,."+this.key+e.input):e.input+t},n.prototype.getClassNameByInfo=function(e){return e.selector?this.getClassNameBySuffix(e,this.getSelectorSuffix(e.selector)):e.input},n.prototype.doAddSelector=function(e,t){var n=this.getClassNameByInfo(t);n in e.selectorsMap||(e.selectors.push("."+this.key+n),e.selectorsMap[n]=null,this.classMap[t.input]=null,this.makeStyleString(e))},n.prototype.createByArrayItemNoObject=function(e,t,n,r){var a;return Object(p.a)(t)?a=this.getRuleStringByArray(t,e,n):Object(p.d)(t)?a=t:Object(p.b)(t)&&(a=t.call(e,n.index,n.moreInfo)),a},n.prototype.createByArrayItem=function(e,t,n,r,a){if(Object(p.a)(n))return this.getRuleStringByArray(n,t,r);if(Object(p.d)(n))return n;if(Object(p.b)(n))return n.call(t,r.index,r.moreInfo);for(var o in n){var i=void 0,s=n[o];if(Object(p.a)(s)){i="";for(var l=0,c=s;l<c.length;l++){var u=c[l];i+=this.createByArrayItemNoObject(t,u,r,a)}}else i=Object(p.d)(s)?s:Object(p.b)(s)?s.call(t,r.index,r.moreInfo):"";a.push(this.doCreate(e,i,r,this.getClassNameBySuffix(r,this.getSelectorSuffix(o))))}return""},n.prototype.createByArray=function(e,t,n,r){for(var a="",o=[],i=0,s=n;i<s.length;i++){var l=s[i];a+=this.createByArrayItem(e,t,l,r,o)}return o.push(this.doCreate(e,a,r)),o},n.prototype.doCreate=function(e,t,n,r){void 0===r&&(r=this.getClassNameByInfo(n));var a=document.createTextNode(""),o={textNode:a,selectors:["."+this.key+r],selectorsMap:(i={},i[r]=null,i),rule:t};return this.makeStyleString(o),e.appendChild(a),o;var i},n.prototype.createByObject=function(e,t,n,r){var a,o=[];for(a in n){var i=n[a];o.push(this.doCreate(e,this.getRuleString(i,t,r),r,this.getClassNameBySuffix(r,this.getSelectorSuffix(a))))}return o},Object.defineProperty(n,"newID",{get:function(){return d.cssIDIndex++},enumerable:!0,configurable:!0}),Object.defineProperty(n,"instance",{get:function(){var e=d.priInstance;return null===e&&(e=d.priInstance=new n(void 0,!1,!1,!0)),e},enumerable:!0,configurable:!0}),n.regExp={keyName:/\.&/g},n.global=[],n.private=[],n.all=[],n.missingClass={},n.cssIDIndex=0,n.priInstance=null,n}();e.CSSClass=n}(u=u||(u={})),void 0===window.CSSClass&&(window.CSSClass=u.CSSClass);var d=window.CSSClass},13:function(e,t,n){"use strict";function r(e){return"[object String]"===Object.prototype.toString.call(e)}function a(e){return"[object Function]"===Object.prototype.toString.call(e)}function o(e){var t=typeof e;return"function"===t||"object"===t&&!!e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)}t.d=r,t.b=a,t.c=o,t.a=i},14:function(e,t,n){"use strict";function r(e){var t=null;return a.render(o.createElement("div",{ref:function(e){t=e.style.cssText},style:e}),document.createElement("div")),function(){return t||""}}t.a=r;var a=n(7),o=(n.n(a),n(1));n.n(o)},16:function(e,t){e.exports=n},18:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(16),a=(n.n(r),r);t.b=r,void 0===a?alert("\u672a\u5bfc\u5165\u4efb\u4f55Antd\u7ec4\u4ef6"):void 0===a.Affix?alert("\u672a\u5bfc\u5165Antd.Base"):void 0===a.Switch&&alert("\u672a\u5bfc\u5165Antd.Ex\uff0c\u8bf7\u5728Page/Pages.json\u91cc\u914d\u7f6e\u7b2c4\u4e2a\u53c2\u6570\u4e3atrue\uff0c\u7136\u540e\u91cd\u542f\u6216\u91cd\u65b0\u6784\u5efa")},22:function(e,t,n){"use strict";function r(e,t,n){var r=window,a=r.Page||(r.Page={}),o=a[t]||(a[t]={});(o.Content||(o.Content={}))[e]=n}t.a=r},275:function(e,t,n){"use strict";var r=n(0),a=n(276),o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return r.a.createElement(a.a,{datasource:this.props.datasource,columns:[{key:"property",title:"\u6210\u5458",dataIndex:"property"},{key:"description",title:"\u8bf4\u660e",dataIndex:"description"},{key:"type",title:"\u7c7b\u578b",dataIndex:"type"},{key:"default",title:"\u9ed8\u8ba4\u503c",dataIndex:"default"}]})},t}(r.a.Component);t.a=i},276:function(e,t,n){"use strict";var r=n(0),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(t){var n=e.call(this,t)||this;return n.keyMap={},n.props.columns.map(function(e,t){n.keyMap[e.key]=t}),n}return a(t,e),t.prototype.render=function(){var e=this;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(e){return r.a.createElement("th",null,e.title)}))),r.a.createElement("tbody",null,this.props.datasource.map(function(t){return r.a.createElement("tr",null,function(){var n=Object.keys(t),a=new Array(n.length-1);return n.forEach(function(n,o){"key"!==n&&(a[e.keyMap[n]]=r.a.createElement("td",{dangerouslySetInnerHTML:{__html:t[n]}}))}),a}())})))},t}(r.a.Component);t.a=o},28:function(e,t){e.exports=r},559:function(e,t,n){e.exports=n(560)},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(275),o=n(561),i=n(22),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return[r.a.createElement("style",{key:"xx"},'[class="code-box-demo"] .ant-btn {\n                    margin-right: 8px;\n                    margin-bottom: 12px;\n                    }\n                    [class="code-box-demo"] .ant-btn-group > .ant-btn {\n                    margin-right: 0;\n                    }'),r.a.createElement("section",{className:"markdown"},r.a.createElement("h1",null,"Button",r.a.createElement("span",{className:"subtitle"},"\u6309\u94ae")),r.a.createElement("section",{className:"markdown"},r.a.createElement("p",null,"\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c\u3002"),r.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528","data-scrollama-index":"0"},r.a.createElement("span",null,"\u4f55\u65f6\u4f7f\u7528"),r.a.createElement("a",{href:"#\u4f55\u65f6\u4f7f\u7528",className:"anchor"},"#")),r.a.createElement("p",null,"\u6807\u8bb0\u4e86\u4e00\u4e2a\uff08\u6216\u5c01\u88c5\u4e00\u7ec4\uff09\u64cd\u4f5c\u547d\u4ee4\uff0c\u54cd\u5e94\u7528\u6237\u70b9\u51fb\u884c\u4e3a\uff0c\u89e6\u53d1\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91\u3002")),r.a.createElement("h2",{"data-scrollama-index":"1"},r.a.createElement("span",null,"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("i",{className:"anticon anticon-appstore code-box-expand-trigger",title:"\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"})),r.a.createElement(o.a,null)),r.a.createElement("section",{className:"markdown api-container ant-col-20"},r.a.createElement("h2",{id:"API","data-scrollama-index":"10"},r.a.createElement("span",null,"API"),r.a.createElement("a",{href:"#API",className:"anchor"},"#")),r.a.createElement("p",null,"\u901a\u8fc7\u8bbe\u7f6e Button \u7684\u5c5e\u6027\u6765\u4ea7\u751f\u4e0d\u540c\u7684\u6309\u94ae\u6837\u5f0f\uff0c\u63a8\u8350\u987a\u5e8f\u4e3a\uff1a",r.a.createElement("code",null,"type"),"-",">",r.a.createElement("code",null,"shape"),"-",">",r.a.createElement("code",null,"size"),"-",">",r.a.createElement("code",null,"loading"),"-",">",r.a.createElement("code",null,"disabled")),r.a.createElement("p",null,"\u6309\u94ae\u7684\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a"),r.a.createElement(a.a,{datasource:[{property:"ghost",default:"false",type:"boolean",description:"\u5e7d\u7075\u5c5e\u6027\uff0c\u4f7f\u6309\u94ae\u80cc\u666f\u900f\u660e\uff0c\u7248\u672c 2.7 \u4e2d\u589e\u52a0"},{property:"htmlType",default:"button",type:"string",description:'\u8bbe\u7f6e <code>button</code> \u539f\u751f\u7684 <code>type</code> \u503c\uff0c\u53ef\u9009\u503c\u8bf7\u53c2\u8003 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTML \u6807\u51c6</a>'},{property:"icon",default:"-",type:"string",description:"\u8bbe\u7f6e\u6309\u94ae\u7684\u56fe\u6807\u7c7b\u578b"},{property:"loading",default:"false",type:"boolean | { delay: number }",description:"\u8bbe\u7f6e\u6309\u94ae\u8f7d\u5165\u72b6\u6001"},{property:"shape",default:"-",type:"string",description:"\u8bbe\u7f6e\u6309\u94ae\u5f62\u72b6\uff0c\u53ef\u9009\u503c\u4e3a <code>circle</code> \u6216\u8005\u4e0d\u8bbe"},{property:"size",default:"default",type:"string",description:"\u8bbe\u7f6e\u6309\u94ae\u5927\u5c0f\uff0c\u53ef\u9009\u503c\u4e3a <code>small</code> <code>large</code> \u6216\u8005\u4e0d\u8bbe"},{property:"type",default:"-",type:"string",description:"\u8bbe\u7f6e\u6309\u94ae\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a <code>primary</code> <code>dashed</code> <code>danger</code>(\u7248\u672c 2.7 \u4e2d\u589e\u52a0) \u6216\u8005\u4e0d\u8bbe"},{property:"onClick",default:"-",type:"function",description:"<code>click</code> \u4e8b\u4ef6\u7684 handler"},{property:"href",default:"-",type:"string",description:"\u70b9\u51fb\u8df3\u8f6c\u7684\u5730\u5740\uff0c\u6307\u5b9a\u6b64\u5c5e\u6027 button \u7684\u884c\u4e3a\u548c a \u94fe\u63a5\u4e00\u81f4"},{property:"target",default:"-",type:"string",description:"\u76f8\u5f53\u4e8e a \u94fe\u63a5\u7684 target \u5c5e\u6027\uff0chref \u5b58\u5728\u65f6\u751f\u6548"}]}),r.a.createElement("p",null,r.a.createElement("code",null,"<Button>Hello world!</Button>"),"\u6700\u7ec8\u4f1a\u88ab\u6e32\u67d3\u4e3a",r.a.createElement("code",null,"<button><span>Hello world!</span></button>"),"\uff0c\u5e76\u4e14\u9664\u4e86\u4e0a\u8868\u4e2d\u7684\u5c5e\u6027\uff0c\u5176\u5b83\u5c5e\u6027\u90fd\u4f1a\u76f4\u63a5\u4f20\u5230",r.a.createElement("code",null,"<button></button>"),"\u3002"),r.a.createElement("p",null,r.a.createElement("code",null,'<Button href="http://example.com">Hello world!</Button>'),"\u5219\u4f1a\u6e32\u67d3\u4e3a",r.a.createElement("code",null,'<a href="http://example.com"><span>Hello world!</span></a>'),"\u3002"))]},t}(r.a.Component);t.default=l,Object(i.a)("Button","Document",l)},561:function(e,t,n){"use strict";var r=n(0),a=n(18),o=n(562),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{examples:[{title:"\u6309\u94ae\u7c7b\u578b",view:r.a.createElement("div",null,r.a.createElement(a.b.Button,{type:"primary"},"Primary"),r.a.createElement(a.b.Button,null,"Default"),r.a.createElement(a.b.Button,{type:"dashed"},"Dashed"),r.a.createElement(a.b.Button,{type:"danger"},"Danger")),description:r.a.createElement("div",null,r.a.createElement("p",null,"\u6309\u94ae\u6709\u56db\u79cd\u7c7b\u578b\uff1a\u4e3b\u6309\u94ae\u3001\u6b21\u6309\u94ae\u3001\u865a\u7ebf\u6309\u94ae\u3001\u5371\u9669\u6309\u94ae\u3002\u4e3b\u6309\u94ae\u5728\u540c\u4e00\u4e2a\u64cd\u4f5c\u533a\u57df\u6700\u591a\u51fa\u73b0\u4e00\u6b21\u3002"),r.a.createElement("blockquote",null,r.a.createElement("p",null,r.a.createElement("code",null,"danger")," \u5728 ",r.a.createElement("code",null,"antd@2.7")," \u540e\u652f\u6301\u3002")))},{title:"\u56fe\u6807\u6309\u94ae",view:r.a.createElement("div",null,r.a.createElement(a.b.Button,{type:"primary",shape:"circle",icon:"search"}),r.a.createElement(a.b.Button,{type:"primary",icon:"search"},"Search"),r.a.createElement(a.b.Button,{shape:"circle",icon:"search"}),r.a.createElement(a.b.Button,{icon:"search"},"Search"),r.a.createElement("br",null),r.a.createElement(a.b.Button,{shape:"circle",icon:"search"}),r.a.createElement(a.b.Button,{icon:"search"},"Search"),r.a.createElement(a.b.Button,{type:"dashed",shape:"circle",icon:"search"}),r.a.createElement(a.b.Button,{type:"dashed",icon:"search"},"Search")),description:r.a.createElement("div",null,r.a.createElement("p",null,"\u5f53\u9700\u8981\u5728 ",r.a.createElement("code",null,"Button")," \u5185\u5d4c\u5165 ",r.a.createElement("code",null,"Icon")," \u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",r.a.createElement("code",null,"icon")," \u5c5e\u6027\uff0c\u6216\u8005\u76f4\u63a5\u5728 ",r.a.createElement("code",null,"Button")," \u5185\u4f7f\u7528 ",r.a.createElement("code",null,"Icon")," \u7ec4\u4ef6\u3002"),r.a.createElement("p",null,"\u5982\u679c\u60f3\u63a7\u5236 ",r.a.createElement("code",null,"Icon")," \u5177\u4f53\u7684\u4f4d\u7f6e\uff0c\u53ea\u80fd\u76f4\u63a5\u4f7f\u7528 ",r.a.createElement("code",null,"Icon")," \u7ec4\u4ef6\uff0c\u800c\u975e ",r.a.createElement("code",null,"icon")," \u5c5e\u6027\u3002"))},{title:"3",view:r.a.createElement("div",{style:{height:300}}),description:r.a.createElement("div",null)},{title:"4",view:r.a.createElement("div",null),description:r.a.createElement("div",null)},{title:"5",view:r.a.createElement("div",null),description:r.a.createElement("div",null)},{title:"6",view:r.a.createElement("div",null),description:r.a.createElement("div",null)}]})},t}(r.a.Component);t.a=s},562:function(e,t,n){"use strict";var r=n(0),a=n(9),o=n(18),i=n(563),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__decorate||function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},c=o.b.Anchor.Link,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.elemLeft=null,t.elemRight=null,t.examplesLeft=[],t.examplesRight=[],t.index=-1,t.renderCount=0,t.onRef=function(e){if(null!==e&&++t.index!==t.props.examples.length){var n,a=t.props.examples[t.index];n=t.elemLeft.scrollHeight<=t.elemRight.scrollHeight?t.examplesLeft:t.examplesRight,n.push(r.a.createElement(i.a,{index:t.index,onRef:t.onRef,view:a.view,title:a.title,description:a.description})),t.renderCount++}},t.onRefLeft=function(e){null!==e&&(t.elemLeft=e)},t.onRefRight=function(e){if(null!==e){t.elemRight=e,t.index++;var n=t.props.examples[t.index];t.examplesLeft.push(r.a.createElement(i.a,{index:t.index,onRef:t.onRef,view:n.view,title:n.title,description:n.description})),t.renderCount++}},t}return s(t,e),t.prototype.render=function(){this.renderCount;try{return[r.a.createElement("div",{className:"ant-row ant-col-21",style:{marginLeft:"-8px",marginRight:"-8px"}},r.a.createElement("div",{ref:this.onRefLeft,className:"ant-col-12 code-boxes-col-2-1",style:{paddingLeft:"8px",paddingRight:"8px"}},this.examplesLeft),r.a.createElement("div",{ref:this.onRefRight,className:"ant-col-12 code-boxes-col-2-1",style:{paddingLeft:"8px",paddingRight:"8px"}},this.examplesRight)),r.a.createElement("div",{className:"ant-col-3",style:{paddingLeft:10,marginTop:-250}},r.a.createElement(o.b.Anchor,null,this.props.examples.map(function(e,t){return r.a.createElement(c,{href:"#Anchor"+t,title:e.title})})))]}catch(e){return null}},l([a.a],t.prototype,"renderCount",void 0),t=l([a.b],t)}(r.a.Component);t.a=u},563:function(e,t,n){"use strict";var r=n(0),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return r.a.createElement("section",{id:"Anchor"+this.props.index,key:this.props.index,ref:this.props.onRef,className:"code-box","data-scrollama-index":"2"},r.a.createElement("section",{className:"code-box-demo"},this.props.view),r.a.createElement("section",{className:"code-box-meta markdown"},r.a.createElement("div",{className:"code-box-title"},r.a.createElement("a",{href:"#Anchor"+this.props.index},this.props.title)),this.props.description,r.a.createElement("span",{className:"code-expand-icon"},r.a.createElement("img",{alt:"expand code",src:"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",className:"code-expand-icon-show"}),r.a.createElement("img",{alt:"expand code",src:"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",className:"code-expand-icon-hide"}))))},t}(r.a.Component);t.a=o},7:function(e,n){e.exports=t},9:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n(28),a=n.n(r),o=a.a.observer,i=a.a.observable}})});
//# sourceMappingURL=Button.js.map