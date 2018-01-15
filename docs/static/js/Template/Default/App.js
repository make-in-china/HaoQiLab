(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("Antd"), require("Mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "Antd", "Mobx"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("Antd"), require("Mobx")) : factory(root["React"], root["ReactDOM"], root["Antd"], root["Mobx"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_36__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 528);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CSS_CSSClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_CSS_CalcStyle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_Lib_is__ = __webpack_require__(12);




var ReactEx;
(function (ReactEx) {
    let renderCSSClass = __WEBPACK_IMPORTED_MODULE_1__CSS_CSSClass__["a" /* CSS */].instance;
    let isHookCreateElement = false;
    let createElementReactNodes = [];
    const _ReactcreateElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"];
    // function isObject(a: any): a is string {
    //     return '[object Object]' === Object.prototype.toString.call(a);
    // }
    function createElement(type, props, ...children) {
        if (isHookCreateElement) {
            createElementReactNodes.push({
                type: type,
                props: Object.assign({}, props, { children }),
            });
        }
        if (props) {
            const eClass = props.EClass;
            if (eClass !== undefined) {
                const css = renderCSSClass;
                if (Object(__WEBPACK_IMPORTED_MODULE_3_src_Lib_is__["d" /* isString */])(eClass)) {
                    if (eClass.trim() !== '') {
                        const clses = css.parse(eClass);
                        if (props.className === undefined) {
                            props.className = clses.join(' ');
                        }
                        else {
                            props.className += ' ' + clses.join(' ');
                        }
                        delete props.EClass;
                    }
                }
                else if ('setClass' in eClass) {
                    // 加ref
                    let oldRef = undefined;
                    if ('ref' in props) {
                        oldRef = props.ref;
                    }
                    props.ref = function (instance) {
                        // 在ref里设置instance
                        eClass.instance = instance;
                        if (oldRef) {
                            oldRef(instance);
                        }
                    };
                    let oldList;
                    eClass.onChange = function (newEClass) {
                        const elem = eClass.instance;
                        let clsList = undefined;
                        if (elem) {
                            clsList = css.parse(newEClass);
                            const lst = elem.classList;
                            if (oldList) {
                                for (let i = 0; i < oldList.length; i++) {
                                    if (lst.contains(oldList[i])) {
                                        lst.remove(oldList[i]);
                                    }
                                }
                            }
                            for (let i = 0; i < clsList.length; i++) {
                                if (!lst.contains(clsList[i])) {
                                    lst.add(clsList[i]);
                                }
                            }
                        }
                        oldList = clsList;
                    };
                    if (eClass.fixedClass.trim() !== '') {
                        const fixedClsList = css.parse(eClass.fixedClass);
                        if (props.className === undefined) {
                            props.className = fixedClsList.join(' ');
                        }
                        else {
                            props.className += ' ' + fixedClsList.join(' ');
                        }
                    }
                    if (eClass.defaultClass.trim() !== '') {
                        oldList = css.parse(eClass.defaultClass);
                        if (props.className === undefined) {
                            props.className = oldList.join(' ');
                        }
                        else {
                            props.className += ' ' + oldList.join(' ');
                        }
                    }
                    delete props.EClass;
                }
            }
            for (const v in __WEBPACK_IMPORTED_MODULE_1__CSS_CSSClass__["b" /* cssClassNS */].cssClassSelectorMap) {
                const vEClass = props['EClass-' + v];
                if (vEClass) {
                    const clses = renderCSSClass.parse(vEClass, v);
                    if (props.className === undefined) {
                        props.className = clses.join(' ');
                    }
                    else {
                        props.className += ' ' + clses.join(' ');
                    }
                    delete props['EClass-' + v];
                }
            }
        }
        return _ReactcreateElement.apply(__WEBPACK_IMPORTED_MODULE_0_react__, arguments);
    }
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react__, 'createElement', { value: createElement });
    // /* 注册私有eclass并立即写入到style */
    // export function estyle(
    //     rule: Record<string, CSSRuleEx>,
    //     isNoExtendsGlobal: boolean = false/* false 不从全局继承rule ;true 继承*/) {
    //     const cssClass = new cssClassNS.CSSClass(undefined, true, isNoExtendsGlobal, true, rule);
    //     return function (ctor: any) {
    //         for (const key in rule) {
    //             cssClass.registerClass(key);
    //         }
    //     };
    // }
    class AsyncEClass {
        constructor(fixedClass, defaultClass) {
            this.fixedClass = fixedClass;
            this.defaultClass = defaultClass;
        }
        setClass(newClass) {
            if (this.onChange) {
                this.onChange(newClass);
            }
        }
    }
    ReactEx.AsyncEClass = AsyncEClass;
    /**
     * 注册eclass
     * @param rule
     * @param isPrivate
     * @param isExtendsGlobal
     * @param isGlobalName
     */
    function eclass(rule, isPrivate = true /* true 不允许被继承 ; false 允许*/, isExtendsGlobal = false /* false 不从全局继承rule ;true 继承*/, isGlobalName = false /* false 不加名字前缀 ; true 加*/) {
        return function (ctor) {
            const render = ctor.prototype.render;
            ctor.cssClass = new __WEBPACK_IMPORTED_MODULE_1__CSS_CSSClass__["b" /* cssClassNS */].CSSClass(undefined, isPrivate, isExtendsGlobal, isGlobalName, rule);
            ctor.prototype.render = function () {
                const oldcssClass = renderCSSClass;
                renderCSSClass = this.cssClass;
                const result = render.call(this);
                renderCSSClass = oldcssClass;
                return result;
            };
            // return {
            //     [ctor.name](props: any) {
            //         debugger;
            //         const ret = new (ctor as any)(props);
            //         ret.cssClass = new cssClassNS.CSSClass(undefined, isPrivate, isExtendsGlobal, isGlobalName, rule);
            //         return ret;
            //     }
            // }[ctor.name] as T;
        };
    }
    ReactEx.eclass = eclass;
    function hookCreateElement(cb) {
        isHookCreateElement = true;
        createElementReactNodes = [];
        const reactNode = cb();
        isHookCreateElement = false;
        return {
            source: createElementReactNodes.pop(),
            result: reactNode
        };
    }
    ReactEx.hookCreateElement = hookCreateElement;
    // region 待测
    /* function isArray(a: any): a is Array<any> {
        const type = Object.prototype.toString.call(a);
        return '[object Array]' === type || ('[object Object]' === type && a.length !== undefined);
    }
    function isStringNumberBoolean(a: any): a is boolean | number | string {
        switch (Object.prototype.toString.call(a)) {
            case '[object String]':
                return true;
            case '[object Number]':
                return true;
            case '[object Boolean]':
                return true;
            default:
                return false;
        }
    }
    export function cloneReactNode(chd: React.ReactNode): React.ReactNode {

        if (chd) {
            if (isArray(chd)) {
                const clone: React.ReactNode[] = [];
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    clone.push(cloneReactNode(itm));
                }
                return clone;
            } else if (isStringNumberBoolean(chd)) {
                return chd;
            } else {
                const node: any = chd;
                if (node.props && node.props.children) {

                    let props = node.props;
                    return {
                        ...node, ...{ props: { ...props, ...{ chilren: cloneReactNode(node.props.children) } } }
                    };
                } else {
                    return { ...node };
                }
            }
        }
        return chd;
    } */
    // endregion
    class Component extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
        get cssClass() {
            if (this.instanceCssClass) {
                return this.instanceCssClass;
            }
            const cssClass = this.constructor.cssClass;
            if (cssClass) {
                return cssClass;
            }
            return __WEBPACK_IMPORTED_MODULE_1__CSS_CSSClass__["b" /* cssClassNS */].CSSClass.instance;
        }
        set cssClass(v) {
            this.instanceCssClass = v;
        }
        renderReactNode(fn) {
            if (this.cssClass) {
                const oldcssClass = renderCSSClass;
                renderCSSClass = this.cssClass;
                const result = fn();
                renderCSSClass = oldcssClass;
                return result;
            }
            else {
                return fn();
            }
        }
    }
    ReactEx.Component = Component;
})(ReactEx || (ReactEx = {}));
/* harmony default export */ __webpack_exports__["a"] = (Object.assign({}, __WEBPACK_IMPORTED_MODULE_0_react__, ReactEx, { calcStyle: __WEBPACK_IMPORTED_MODULE_2_src_CSS_CalcStyle__["a" /* calcStyle */] }));
if (__WEBPACK_IMPORTED_MODULE_0_react__ === undefined) {
    alert('未导入React');
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isString;
/* harmony export (immutable) */ __webpack_exports__["b"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["c"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["e"] = isStringNumberBoolean;
function isString(v) {
    return Object.prototype.toString.call(v) === '[object String]';
}
function isFunction(v) {
    return '[object Function]' === Object.prototype.toString.call(v);
}
function isObject(v) {
    let type = typeof v;
    return type === 'function' || type === 'object' && !!v;
}
function isArray(v) {
    return '[object Array]' === Object.prototype.toString.call(v);
}
function isStringNumberBoolean(a) {
    switch (Object.prototype.toString.call(a)) {
        case '[object String]':
            return true;
        case '[object Number]':
            return true;
        case '[object Boolean]':
            return true;
        default:
            return false;
    }
}


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getRGBA */
/* harmony export (immutable) */ __webpack_exports__["e"] = getRGB;
/* unused harmony export getRGBByArea */
/* unused harmony export getRGBAByArea */
/* unused harmony export getRGBAColorByArea */
/* harmony export (immutable) */ __webpack_exports__["i"] = getRGBString;
/* harmony export (immutable) */ __webpack_exports__["f"] = getRGBA2String;
/* harmony export (immutable) */ __webpack_exports__["h"] = getRGBACSSString;
/* harmony export (immutable) */ __webpack_exports__["d"] = getColorByMoreInfo;
/* harmony export (immutable) */ __webpack_exports__["g"] = getRGBAByMoreInfo;
/* harmony export (immutable) */ __webpack_exports__["c"] = getColorByArea;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClassNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_Lib_is__ = __webpack_require__(12);

// const classNameRuleRE = /^(([\w_]+)(-(bf|af|ac|hv|chd|bfac|afac|bfhv|afhv|chdbf|chdaf|chdac|chdhv|chdbfac|chdbfhv|chdafhv))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;
const classNameRuleRE = /^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;
function rightString(str, count) {
    return str.substr(str.length - count, count);
}
function getRGBA(color) {
    const colorInt = Number('0x' + color);
    const colorAlphaInt = (0xFF000000 & colorInt) / 0xFF000000;
    const colorRedInt = (0xFF0000 & colorInt) / 0x10000;
    const colorGreenInt = (0xFF00 & colorInt) / 0x100;
    const colorBlueInt = 0xFF & colorInt;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt, A: colorAlphaInt };
}
function getRGB(color) {
    const colorInt = Number('0x' + color);
    const colorRedInt = (0xFF0000 & colorInt) / 0x10000;
    const colorGreenInt = (0xFF00 & colorInt) / 0x100;
    const colorBlueInt = 0xFF & colorInt;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt };
}
function getRGBByArea(color1, color2, index, max) {
    const persent = index / max;
    let colorRedInt = (Math.floor((color2.R - color1.R) * persent + 0.5) + color1.R) & 0xFF;
    let colorGreenInt = (Math.floor((color2.G - color1.G) * persent + 0.5) + color1.G) & 0xFF;
    let colorBlueInt = (Math.floor((color2.B - color1.B) * persent + 0.5) + color1.B) & 0xFF;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt };
}
function getRGBAByArea(color1, color2, index, max) {
    const persent = index / max;
    let colorRedInt = (Math.floor((color2.R - color1.R) * persent + 0.5) + color1.R) & 0xFF;
    let colorGreenInt = (Math.floor((color2.G - color1.G) * persent + 0.5) + color1.G) & 0xFF;
    let colorBlueInt = (Math.floor((color2.B - color1.B) * persent + 0.5) + color1.B) & 0xFF;
    let colorAlphaInt = ((Math.floor((color2.A - color1.A) * persent + 0.5) + color1.A) & 0xFF) / 255;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt, A: colorAlphaInt };
}
function getRGBAColorByArea(color1, color2, index, max) {
    const color1RGBA = getRGBA(color1);
    const color2RGBA = getRGBA(color2);
    const color3RGBA = getRGBAByArea(color1RGBA, color2RGBA, index, max);
    return `rgba(${color3RGBA.R},${color3RGBA.G},${color3RGBA.B},${color3RGBA.A})`;
}
function getRGBString(color) {
    const ret = rightString('0' + color.R.toString(16), 2) +
        rightString('0' + color.G.toString(16), 2) +
        rightString('0' + color.B.toString(16), 2);
    return '#' + ret;
}
function getRGBA2String(color) {
    return rightString('0' + Math.round(color.A * 255).toString(16), 2) +
        rightString('0' + color.R.toString(16), 2) +
        rightString('0' + color.G.toString(16), 2) +
        rightString('0' + color.B.toString(16), 2);
}
function getRGBACSSString(color) {
    return `rgba(${color.R},${color.G},${color.B},${color.A})`;
}
function getColorByMoreInfo(moreInfo) {
    switch (moreInfo.length) {
        case 3:
            return '#' + moreInfo[0] + moreInfo[0] + moreInfo[1] + moreInfo[1] + moreInfo[2] + moreInfo[2];
        case 6:
            return '#' + moreInfo;
        case 8:
            let alpha = parseInt(moreInfo.substr(0, 2), 16) / 255;
            let red = parseInt(moreInfo.substr(2, 2), 16);
            let green = parseInt(moreInfo.substr(4, 2), 16);
            let blue = parseInt(moreInfo.substr(6, 2), 16);
            return `rgba(${red},${green},${blue},${alpha})`;
        default:
            return null;
    }
}
function getRGBAByMoreInfo(moreInfo) {
    switch (moreInfo.length) {
        case 8:
            let A = parseInt(moreInfo.substr(0, 2), 16) / 255;
            let R = parseInt(moreInfo.substr(2, 2), 16);
            let G = parseInt(moreInfo.substr(4, 2), 16);
            let B = parseInt(moreInfo.substr(6, 2), 16);
            return { R, G, B, A };
        default:
            return null;
    }
}
function getColorByArea(color1, color2, index, max) {
    const color1RGB = getRGB(color1);
    const color2RGB = getRGB(color2);
    const color3RGB = getRGBByArea(color1RGB, color2RGB, index, max);
    return getRGBString(color3RGB);
}
var cssClassNS;
(function (cssClassNS) {
    function createDictionaryObject() {
        return Object.create(null);
    }
    cssClassNS.cssClassSelectorMap = {
        bf: 1 /* Before */,
        af: 2 /* After */,
        ac: 4 /* Active */,
        hv: 8 /* Hover */,
        tg: 16 /* Target */,
        chd: 32 /* Child */,
        bfac: 1 /* Before */ + 4 /* Active */,
        afac: 2 /* After */ + 4 /* Active */,
        bfhv: 1 /* Before */ + 8 /* Hover */,
        afhv: 2 /* After */ + 8 /* Hover */,
        bftg: 1 /* Before */ + 16 /* Target */,
        aftg: 2 /* After */ + 16 /* Target */,
        chdbf: 1 /* Before */ + 32 /* Child */,
        chdaf: 2 /* After */ + 32 /* Child */,
        chdac: 4 /* Active */ + 32 /* Child */,
        chdhv: 8 /* Hover */ + 32 /* Child */,
        chdtg: 16 /* Target */ + 32 /* Child */,
        chdbfac: 1 /* Before */ + 4 /* Active */ + 32 /* Child */,
        chdafac: 2 /* After */ + 4 /* Active */ + 32 /* Child */,
        chdbfhv: 1 /* Before */ + 8 /* Hover */ + 32 /* Child */,
        chdafhv: 2 /* After */ + 8 /* Hover */ + 32 /* Child */,
        chdbftg: 1 /* Before */ + 16 /* Target */ + 32 /* Child */,
        chdaftg: 2 /* After */ + 16 /* Target */ + 32 /* Child */
    };
    class CSSClass {
        constructor(styleElement, isPrivate = false /* 不允许被继承 */, isNoExtendsGlobal = false /* 不从全局继承rule */, isGlobalName = false /* 不加名字前缀 */, rule) {
            this.isPrivate = isPrivate; /* 不允许被继承 */
            this.isNoExtendsGlobal = isNoExtendsGlobal; /* 不从全局继承rule */
            this.isGlobalName = isGlobalName; /* 不加名字前缀 */
            this.rule = {}; // = createDictionaryObject<CSSRuleEx>()
            /* class结果列表 */
            this.list = createDictionaryObject();
            /* 类名映射表 */
            this.classMap = createDictionaryObject();
            if (!isGlobalName) {
                this.key = 'V' + CSS.newID;
            }
            else {
                this.key = '';
            }
            if (!styleElement) {
                let styleElem = document.createElement('style');
                styleElem.type = 'text/css';
                if (isPrivate) {
                    styleElem.setAttribute('Private', '');
                }
                if (isNoExtendsGlobal) {
                    styleElem.setAttribute('NoExtendsGlobal', '');
                }
                styleElem.setAttribute('key', this.key);
                // setTimeout(function(){
                if (isPrivate && CSS.global.length > 0) {
                    document.head.insertBefore(styleElem, CSS.global[0].styleElement);
                }
                else {
                    // document.head.insertBefore2(style!,$t.turtleScriptElement!);
                    document.head.appendChild(styleElem);
                }
                this.styleElement = styleElem;
                // },100);
            }
            else {
                this.styleElement = styleElement;
            }
            CSS.all.push(this);
            if (!isPrivate) {
                CSS.global.push(this);
            }
            else {
                CSS.private.push(this);
            }
            if (rule) {
                this.registerClassRule(rule);
            }
        }
        static reMountAllStyle() {
            for (const item of this.global) {
                document.head.appendChild(item.styleElement);
            }
            for (const item of this.private) {
                if (item.isPrivate && CSS.global.length > 0) {
                    document.head.insertBefore(item.styleElement, CSS.global[0].styleElement);
                }
                else {
                    // document.head.insertBefore2(style!,$t.turtleScriptElement!);
                    document.head.appendChild(item.styleElement);
                }
            }
        }
        clone() {
            // 新key,新styleElement,新rule
            return new CSSClass(undefined, this.isPrivate, this.isNoExtendsGlobal, this.isGlobalName, this.rule);
        }
        extendsClassRule(rule) {
            const thisRule = this.rule;
            const __proto__ = thisRule.__proto__;
            rule.__proto__ = __proto__;
            thisRule.__proto__ = rule;
        }
        getStyleByName(name) {
            if (name in this.classMap) {
                name = this.getNameByInfo(this.parseInfo(name), false);
                const cssClass = this.list[name];
                let str = '';
                if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(cssClass)) {
                    for (const item of cssClass) {
                        str += item.textNode.data + '\n';
                    }
                }
                else {
                    str = cssClass.textNode.data;
                }
                return str;
            }
            return null;
        }
        registerClassRule(nameOrRuleObject, rule) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["c" /* isObject */])(nameOrRuleObject)) {
                for (const key in nameOrRuleObject) {
                    this.registerClassRuleItem(key, nameOrRuleObject[key]);
                }
            }
            else if (rule !== undefined) {
                this.registerClassRuleItem(nameOrRuleObject, rule);
            }
            else {
                throw new Error('未提供rule参数！');
            }
        }
        getNameByInfo(info, hasSelector = true) {
            let name = info.name;
            if (hasSelector && info.selector) {
                name += '-' + info.selector;
            }
            if (info.index) {
                name += '-' + info.index;
            }
            if (info.moreInfo) {
                name += '-' + info.moreInfo;
            }
            return name;
        }
        /**
         * 注册eclass样式到style并返回class名字
         * @param name
         */
        registerClass(name, selector) {
            const info = this.parseInfo(name);
            if (!info) {
                console.warn(new Error('can\' t register class \'' + name + '\',because unknown.'));
                return;
            }
            if (selector) {
                info.selector = selector;
                name = this.getNameByInfo(info);
                info.input = name;
            }
            if (name in this.classMap) {
                return this.key + name;
            }
            let className;
            if (this.getNameByInfo(info, false) in this.list) {
                // 如果已经加了，检查selector
                className = this.addSelector(info);
            }
            else {
                // 创建一个
                className = this.create(info);
            }
            return className;
        }
        updateRule(ruleList) {
            for (const key in ruleList) {
                const rule = ruleList[key];
                const oldRule = this.getRule(key);
                oldRule.map[key] = rule;
                this.updateClass(key);
            }
        }
        updateClass(name) {
            const info = this.parseInfo(name);
            if (!info) {
                console.warn(new Error('can\' t update class \'' + name + '\',because unknown.'));
                return;
            }
            let className;
            if (this.getNameByInfo(info, false) in this.list) {
                // 如果已经加了，update
                className = this.updateSelector(info);
            }
            else {
                // 创建一个
                className = this.create(info);
            }
            return className;
        }
        parseToElement(elem, clses, selector) {
            const clsList = this.parse(clses, selector);
            clsList.forEach(cls => { elem.classList.add(cls); });
        }
        /**
         * 解析出class数组，解析出的新class会立即注册到style
         * @param clses eclass like pdip-1,mdip-1
         */
        parse(clses, selector) {
            const clsList = clses.split(/\s+/);
            const clsNames = [];
            for (let cls of clsList) {
                if (cls !== '') {
                    const className = this.registerClass(cls, selector);
                    if (className) {
                        clsNames.push(className);
                    }
                    else {
                        console.warn('cssClass:' + cls + ' can\'t be parse!');
                    }
                }
            }
            return clsNames;
        }
        clear() {
            this.styleElement.innerHTML = '';
            this.list = createDictionaryObject();
            this.classMap = createDictionaryObject();
        }
        /**
         * 更新全部内容
         * @param info
         */
        updateAllSelector() {
            // 获取旧的所有class
            const oldMap = createDictionaryObject();
            for (const key in this.classMap) {
                oldMap[key] = this.classMap[key];
            }
            // 重置自身
            this.clear();
            // create
            for (const key in oldMap) {
                this.registerClass(key);
            }
        }
        /**
         * 更新内容
         * @param info
         */
        updateSelector(info) {
            const name = this.getNameByInfo(info, false);
            if (name in this.list) {
                const item = this.list[name];
                delete this.list[name];
                if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(item)) {
                    for (const innerItem of item) {
                        innerItem.textNode.remove();
                    }
                }
                else {
                    item.textNode.remove();
                }
            }
            return this.create(info);
        }
        getCSSClassDataByName(name) {
            const info = this.parseInfo(name);
            if (!info) {
                return null;
            }
            return this.list[this.getNameByInfo(info, false)];
        }
        /**
         * 添加更多选择器
         * @param info
         */
        addSelector(info) {
            const item = this.list[this.getNameByInfo(info, false)];
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(item)) {
                for (const innerItem of item) {
                    this.doAddSelector(innerItem, info);
                }
            }
            else {
                this.doAddSelector(item, info);
            }
            return this.key + info.input;
        }
        /**
         * 设置样式内容:seletor{ ...  }
         */
        makeStyleString(item) {
            item.textNode.data = `${item.selectors.join(',')}{${item.rule}}`;
        }
        getRuleString(rule, ruleMap, info) {
            let strRule;
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(rule)) {
                // 合并
                strRule = this.getRuleStringByArray(rule, ruleMap, info);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["d" /* isString */])(rule)) {
                strRule = rule;
            }
            else {
                strRule = rule.call(ruleMap, info.index, info.moreInfo);
            }
            return strRule;
        }
        getRuleStringByArray(rules, ruleMap, info) {
            let strRule = `/* ${rules.length} in 1 */`;
            // 合并
            for (const rule of rules) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["d" /* isString */])(rule)) {
                    const subInfo = this.parseInfo(rule);
                    if (subInfo) {
                        const ruleInfo = this.getRule(subInfo.name);
                        if (ruleInfo === null) {
                            console.warn(`classRule '${subInfo.name}' can't be found.`);
                            break;
                        }
                        const subRule = ruleInfo.rule;
                        const map = ruleInfo.map;
                        if (subRule) {
                            strRule += '\n  /*from ' + subInfo.input + '*/\n  ' + this.getRuleString(subRule, map, subInfo);
                        }
                    }
                    else {
                        strRule += '\n  /*from ' + rule + '*/\n\n';
                        CSS.missingClass[rule] = null;
                    }
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(rule)) {
                    strRule += this.getRuleStringByArray(rule, ruleMap, info);
                }
            }
            return strRule;
        }
        create(info) {
            const ruleInfo = this.getRule(info.name);
            if (ruleInfo === null) {
                this.list[this.getNameByInfo(info, false)] = this.doCreate(this.styleElement, '', info);
                return;
            }
            const { rule, map, cssClass } = ruleInfo;
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(rule)) {
                this.list[this.getNameByInfo(info, false)] = this.createByArray(cssClass.styleElement, map, rule, info);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["d" /* isString */])(rule)) {
                this.list[this.getNameByInfo(info, false)] = this.doCreate(cssClass.styleElement, rule, info);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["b" /* isFunction */])(rule)) {
                this.list[this.getNameByInfo(info, false)] = this.doCreate(cssClass.styleElement, this.getRuleString(rule, map, info), info);
            }
            else {
                this.list[this.getNameByInfo(info, false)] = this.createByObject(cssClass.styleElement, map, rule, info);
            }
            this.classMap[info.input] = null;
            return this.key + info.input;
        }
        replace(elem, oldClass, newClass) {
            if (elem && oldClass && newClass) {
                oldClass = this.key + oldClass;
                newClass = this.key + newClass;
                elem.className = elem.className.replace(oldClass, newClass);
            }
        }
        removeArray(elem, clses) {
            if (!elem) {
                return;
            }
            const lst = elem.classList;
            for (let i = 0; i < clses.length; i++) {
                const clsName = this.key + clses[i];
                if (lst.contains(clsName)) {
                    lst.remove(clsName);
                }
            }
        }
        remove(elem, ...clses) {
            this.removeArray(elem, clses);
        }
        addArray(elem, clses) {
            if (!elem) {
                return;
            }
            const lst = elem.classList;
            for (let i = 0; i < clses.length; i++) {
                const clsName = this.registerClass(clses[i]);
                if (clsName && !lst.contains(clsName)) {
                    lst.add(clsName);
                }
            }
        }
        add(elem, ...clses) {
            this.addArray(elem, clses);
        }
        getRule(ruleName) {
            let rule = this.rule[ruleName];
            let map = this.rule;
            let thatCssClass = this;
            if (!rule && !this.isNoExtendsGlobal) {
                for (const cssClass of CSS.global) {
                    if (cssClass !== this) {
                        rule = cssClass.rule[ruleName];
                        map = cssClass.rule;
                        thatCssClass = cssClass;
                        if (rule) {
                            break;
                        }
                    }
                }
            }
            if (rule !== undefined) {
                return {
                    map: map,
                    rule: rule,
                    cssClass: thatCssClass
                };
            }
            else {
                return null;
            }
        }
        registerClassRuleItem(name, rule) {
            // if (name in this.rule) {
            //     console.log(name + ' be replaced by ' + JSON.stringify(rule));
            // }
            this.rule[name] = rule;
        }
        /**
         * 从eclass名字中解析出有用信息
         * @param name
         */
        parseInfo(name) {
            const match = name.match(classNameRuleRE);
            if (!match) {
                return null;
            }
            let idx = match[6] !== undefined ? Number(match[6]) : undefined;
            // if(isNaN(idx!)){
            //     idx=undefined;
            // }
            return {
                input: name,
                name: match[2],
                selector: match[4],
                index: idx,
                moreInfo: match[8]
            };
        }
        /**
         * 获取伪类等后缀
         * @param selector
         */
        getSelectorSuffix(selector) {
            if (!(selector in cssClassNS.cssClassSelectorMap)) {
                const key = '.' + this.key;
                const selectorList = selector.split(',').map(v => v.replace(CSSClass.regExp.keyName, key));
                return selectorList;
            }
            const selectorEnum = cssClassNS.cssClassSelectorMap[selector];
            let selectorSuffix = '';
            if (selectorEnum & 32 /* Child */) {
                // selectorName+='in';
                selectorSuffix += '>*';
            }
            if (selectorEnum & 4 /* Active */) {
                // selectorName+='ac';
                selectorSuffix += ':active';
            }
            if (selectorEnum & 8 /* Hover */) {
                // selectorName+='hv';
                selectorSuffix += ':hover';
            }
            if (selectorEnum & 16 /* Target */) {
                // selectorName+='tg';
                selectorSuffix += ':target';
            }
            if (selectorEnum & 1 /* Before */) {
                // selectorName+='bf';
                selectorSuffix += '::before';
            }
            if (selectorEnum & 2 /* After */) {
                // selectorName+='af';
                selectorSuffix += '::after';
            }
            return selectorSuffix;
        }
        getClassNameBySuffix(info, suffix) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(suffix)) {
                return info.input + suffix.join('\n,.' + this.key + info.input);
            }
            else {
                return info.input + suffix;
            }
        }
        /**
         *
         * @param info
         */
        getClassNameByInfo(info) {
            if (info.selector) {
                return this.getClassNameBySuffix(info, this.getSelectorSuffix(info.selector));
            }
            return info.input;
        }
        /**
         * 添加更多选择器或更新内容
         * @param info
         */
        doAddSelector(item, info) {
            const className = this.getClassNameByInfo(info);
            if (!(className in item.selectorsMap)) {
                // 如果未添加此selector,先添加;
                item.selectors.push('.' + this.key + className);
                item.selectorsMap[className] = null;
                this.classMap[info.input] = null;
                this.makeStyleString(item);
            }
        }
        createByArrayItemNoObject(map, rule, info, items) {
            let strRule;
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(rule)) {
                // 寻找rule，再次解析
                strRule = this.getRuleStringByArray(rule, map, info);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["d" /* isString */])(rule)) {
                // 直接生成一个字符串
                strRule = rule;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["b" /* isFunction */])(rule)) {
                strRule = rule.call(map, info.index, info.moreInfo);
            }
            return strRule;
        }
        createByArrayItem(styleElement, map, rule, info, items) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(rule)) {
                // 寻找rule，再次解析
                return this.getRuleStringByArray(rule, map, info);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["d" /* isString */])(rule)) {
                // 直接生成一个字符串
                return rule;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["b" /* isFunction */])(rule)) {
                return rule.call(map, info.index, info.moreInfo);
            }
            else {
                // 从对象中解析后者
                for (let key in rule) {
                    let strRule;
                    const subRule = rule[key];
                    if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["a" /* isArray */])(subRule)) {
                        strRule = '';
                        for (const subRule2 of subRule) {
                            strRule += this.createByArrayItemNoObject(map, subRule2, info, items);
                        }
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["d" /* isString */])(subRule)) {
                        // 直接生成一个字符串
                        strRule = subRule;
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_is__["b" /* isFunction */])(subRule)) {
                        strRule = subRule.call(map, info.index, info.moreInfo);
                    }
                    else {
                        strRule = '';
                    }
                    items.push(this.doCreate(styleElement, strRule, info, this.getClassNameBySuffix(info, this.getSelectorSuffix(key))));
                }
                return '';
            }
        }
        createByArray(styleElement, map, rule, info) {
            let strRule = '';
            const items = [];
            for (const subRule of rule) {
                strRule += this.createByArrayItem(styleElement, map, subRule, info, items);
            }
            items.push(this.doCreate(styleElement, strRule, info));
            return items;
            // this.doCreate(strRule,info,this.getClassNameByInfo(info));
        }
        doCreate(styleElement, rule, info, className = this.getClassNameByInfo(info)) {
            const textNode = document.createTextNode('');
            const item = {
                textNode: textNode,
                selectors: ['.' + this.key + className],
                selectorsMap: { [className]: null },
                rule: rule
            };
            this.makeStyleString(item);
            styleElement.appendChild(textNode);
            return item;
        }
        createByObject(styleElement, map, rule, info) {
            let key;
            const items = [];
            for (key in rule) {
                const subRule = rule[key];
                items.push(this.doCreate(styleElement, this.getRuleString(subRule, map, info), info, this.getClassNameBySuffix(info, this.getSelectorSuffix(key))));
            }
            return items;
        }
        static get newID() {
            return CSS.cssIDIndex++;
        }
        static get instance() {
            let instance = CSS.priInstance;
            if (instance === null) {
                instance = CSS.priInstance = new CSSClass(undefined, false, false, true);
            }
            return instance;
        }
    }
    CSSClass.regExp = {
        keyName: /\.&/g
    };
    CSSClass.global = [];
    CSSClass.private = [];
    CSSClass.all = [];
    CSSClass.missingClass = {};
    CSSClass.cssIDIndex = 0;
    CSSClass.priInstance = null;
    cssClassNS.CSSClass = CSSClass;
})(cssClassNS = cssClassNS || (cssClassNS = {}));
if (window.CSSClass === undefined) {
    window.CSSClass = cssClassNS.CSSClass;
}
var CSS = window.CSSClass;


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


function calcStyle(style) {
    let str = null;
    __WEBPACK_IMPORTED_MODULE_0_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('div', {
        // tslint:disable-next-line:typedef
        ref: function (elem) {
            str = elem.style.cssText;
        },
        style: style
    }), document.createElement('div'));
    return function () {
        return str ? str : '';
    };
}


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extras", function() { return extras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return Atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAtom", function() { return BaseAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStrict", function() { return useStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictModeEnabled", function() { return isStrictModeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asReference", function() { return asReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asFlat", function() { return asFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asStructure", function() { return asStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMap", function() { return asMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifierDescriptor", function() { return isModifierDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShallowObservable", function() { return extendShallowObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorunAsync", function() { return autorunAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expr", function() { return expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransformer", function() { return createTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whyRun", function() { return whyRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var BaseAtom = (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     */
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
var Atom = (function (_super) {
    __extends(Atom, _super);
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false; // for effective unobserving.
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
    return interceptable.interceptors && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
    // yet it is quite convenient to be able to use the response both as array directly and as iterator
    // it is suboptimal, but alas...
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = oldItems.slice(0, toIndex).concat([
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
                .values
                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            // TODO: Check `this`?, see #752?
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.dehancer = undefined;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var messages = {
    m001: "It is not allowed to assign new values to @action fields",
    m002: "`runInAction` expects a function",
    m003: "`runInAction` expects a function without arguments",
    m004: "autorun expects a function",
    m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    m012: "computed takes one or two arguments if used as function",
    m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    m014: "extendObservable expected 2 or more arguments",
    m015: "extendObservable expects an object as first argument",
    m016: "extendObservable should not be used on maps, use map.merge instead",
    m017: "all arguments of extendObservable should be objects",
    m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    m020: "modifiers can only be used for individual object properties",
    m021: "observable expects zero or one arguments",
    m022: "@observable can not be used on getters, use @computed instead",
    m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    m025: "whyRun can only be used on reactions and computed values",
    m026: "`action` can only be invoked on functions",
    m028: "It is not allowed to set `useStrict` when a derivation is running",
    m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
    m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    m033: "`observe` doesn't support the fire immediately property for observable maps.",
    m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    m035: "Cannot make the designated object observable; it is not extensible",
    m036: "It is not possible to get index atoms from arrays",
    m037: "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}

function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
function isStrictModeEnabled() {
    return globalState.strictMode;
}
function allowStateChanges(allowStateChanges, func) {
    // TODO: deprecate / refactor this function in next major
    // Currently only used by `@observer`
    // Proposed change: remove first param, rename to `forbidStateChanges`,
    // require error callback instead of the hardcoded error message now used
    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

/**
 * Constructs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */
function createClassPropertyDecorator(
    /**
     * This function is invoked once, when the property is added to a new instance.
     * When this happens is not strictly determined due to differences in TS and Babel:
     * Typescript: Usually when constructing the new instance
     * Babel, sometimes Typescript: during the first get / set
     * Both: when calling `runLazyInitializers(instance)`
     */
    onInitialize, get, set, enumerable, 
    /**
     * Can this decorator invoked with arguments? e.g. @decorator(args)
     */
    allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            // typescript (except for getter / setters)
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || (arguments.length === 5 && argLen < 3)) {
                // Typescript target is ES3, so it won't define property for us
                // or using Reflect.decorate polyfill, which will return no descriptor
                // (see https://github.com/mobxjs/mobx/issues/333)
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            // babel and typescript getter / setter props
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
                );
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, initializer_1 ? initializer_1.call(instance) : value_1, customArgs, descriptor);
            });
            return {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        /** If custom arguments are allowed, we should return a function that returns a decorator */
        return function () {
            /** Direct invocation: @decorator bla */
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            /** Indirect invocation: @decorator(args) bla */
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) {
                return classPropertyDecorator(target, key, descriptor, outerArgs, argLen);
            };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers &&
            instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = args && args.length === 1 ? args[0] : value.name || key || "<unnamed action>";
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            // TypeScript @action method() { }. Defined on proto before being decorated
            // Don't use the field decorator if we are just decorating a method
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        if (descriptor !== undefined && descriptor.get !== undefined) {
            throw new Error("[mobx] action is not expected to be used with getters");
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || "Autorun@" + getNextId();
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = "When@" + getNextId();
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || "AutorunAsync@" + getNextId();
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() {
        func(r);
    }
    r.schedule();
    return r.getDisposer();
}
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name =
        opts.name || expression.name || effect.name || "Reaction@" + getNextId();
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effect(value, r);
        if (!firstTime && changed === true)
            effect(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce an new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(derivation, scope, equals, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.equals = equals;
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            // This is an minor optimization which could be omitted to simplify the code
            // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
            // tracking as it will never be called again inside this batch.
            startBatch();
            if (shouldCompute(this))
                this.value = this.computeValue(false);
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this
                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this
                .name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var wasSuspended = this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = (this.value = this.computeValue(true));
        return (wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue));
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking
            ? "[active] the value of this computation is needed by a reaction"
            : this.isComputing
                ? "[get] The value of this computed was requested outside a reaction"
                : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === IDerivationState.NOT_TRACKING
                ? getMessage("m032")
                : " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this.isComputing && isTracking
                    ? " (... or any observable accessed during the remainder of the current run)"
                    : "") + "\n    " + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target) && target.hasOwnProperty("$mobx"))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName] && !isComputedValue(adm.values[propName])) {
        // already observable property
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
        return;
    }
    // not yet observable property
    if ("value" in descriptor) {
        // not a computed value
        if (isModifierDescriptor(descriptor.value)) {
            // x : ref(someValue)
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            // x: computed(someExpr)
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            // x: someValue
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        // get x() { return 3 } set x(v) { }
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                setPropertyValue(this, propName, v);
            }
        }));
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                return this.$mobx.values[propName].set(v);
            }
        }));
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    // intercept
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name,
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "update",
                object: instance,
                oldValue: observable.value,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: name,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

/**
 * Returns true if the provided value is reactive.
 * @param value object, function or array
 * @param property if property is specified, checks whether value.property is reactive.
 */
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}

function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}

function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!isObservableMap(target), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    // Note could be optimised if properties.length === 1
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    // @observable someProp;
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = deepEnhancer(v, undefined, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    return observable.box(v);
}
var observableFactories = {
    box: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    },
    array: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    },
    map: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    },
    object: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        // convert to observable object
        asObservableObject(res, name);
        // add properties
        extendObservable(res, props);
        return res;
    },
    shallowObject: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    },
    ref: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    },
    shallow: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    },
    deep: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    },
    struct: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    }
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
    // more suited for immutable objects
    if (deepEqual(v, oldValue))
        return oldValue;
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.dehancer = undefined;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data[key].value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            transaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data[key];
                observable$$1.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable$$1 = this._data[name];
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: name,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        transaction(function () {
            var observable$$1 = (_this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false));
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this.dehanceValue(this._data[key].get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = _this.keys();
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values might still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return (res[key] = _this.get(key)); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return typeof window !== "undefined" ? window : global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X"; // unreachable
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit
        ? " (... and " + (things.length - limit) + "more)"
        : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function getEnumerableKeys(obj) {
    var res = [];
    for (var key in obj)
        res.push(key);
    return res;
}
/**
 * Naive deepEqual. Doesn't check for prototype, non-enumerable or out-of-range properties on arrays.
 * If you have such a case, you probably should use this function but something fancier :).
 */
function deepEqual(a, b) {
    if (a === null && b === null)
        return true;
    if (a === undefined && b === undefined)
        return true;
    if (areBothNaN(a, b))
        return true;
    if (typeof a !== "object")
        return a === b;
    var aIsArray = isArrayLike(a);
    var aIsMap = isMapLike(a);
    if (aIsArray !== isArrayLike(b)) {
        return false;
    }
    else if (aIsMap !== isMapLike(b)) {
        return false;
    }
    else if (aIsArray) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length - 1; i >= 0; i--)
            if (!deepEqual(a[i], b[i]))
                return false;
        return true;
    }
    else if (aIsMap) {
        if (a.size !== b.size)
            return false;
        var equals_1 = true;
        a.forEach(function (value, key) {
            equals_1 = equals_1 && deepEqual(b.get(key), value);
        });
        return equals_1;
    }
    else if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null)
            return false;
        if (isMapLike(a) && isMapLike(b)) {
            if (a.size !== b.size)
                return false;
            // Freaking inefficient.... Create PR if you run into this :) Much appreciated!
            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
        }
        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
            return false;
        for (var prop in a) {
            if (!(prop in b))
                return false;
            if (!deepEqual(a[prop], b[prop]))
                return false;
        }
        return true;
    }
    return false;
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b));
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isMapLike(x) {
    return isES6Map(x) || isObservableMap(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function getMapLikeKeys(map$$1) {
    var keys;
    if (isPlainObject(map$$1))
        keys = Object.keys(map$$1);
    else if (Array.isArray(map$$1))
        keys = map$$1.map(function (_a) {
            var key = _a[0];
            return key;
        });
    else if (isMapLike(map$$1))
        keys = Array.from(map$$1.keys());
    else
        fail("Cannot get keys from " + map$$1);
    return keys;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.strictMode = false;
        /**
         * Used by createTransformer to detect that the global state has been reset.
         */
        this.resetId = 0;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
var shareGlobalStateCalled = false;
var runInIsolationCalled = false;
var warnedAboutMultipleInstances = false;
{
    var global_1 = getGlobal();
    if (!global_1.__mobxInstanceCount) {
        global_1.__mobxInstanceCount = 1;
    }
    else {
        global_1.__mobxInstanceCount++;
        setTimeout(function () {
            if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
                warnedAboutMultipleInstances = true;
                console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
            }
        });
    }
}
function isolateGlobalState() {
    runInIsolationCalled = true;
    getGlobal().__mobxInstanceCount--;
}
function shareGlobalState() {
    // TODO: remove in 4.0; just use peer dependencies instead.
    deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
    shareGlobalStateCalled = true;
    var global = getGlobal();
    var ownState = globalState;
    /**
     * Backward compatibility check
     */
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}

/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                observable.onBecomeUnobserved();
                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE)
            d.onBecomeStale();
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var CaughtException = (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail(getMessage("m031") + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && hasObservers$$1)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    // onInvalidate didn't trigger track right away..
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed
            ? "stopped"
            : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this._isRunning
            ? " (... or any observable accessed during the remainder of the current run)"
            : "") + "\n\t" + getMessage("m038") + "\n";
    };
    return Reaction;
}());
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}

function createComputedDecorator(equals) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(comparer.default);
var computedStructDecorator = createComputedDecorator(comparer.structural);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
};
computed.struct = computedStructDecorator;
computed.equals = createComputedDecorator;

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072 // TODO: remove in 4.0
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable = thing.$mobx.values[property];
            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

/**
 * expr can be used to create temporarily views inside views.
 * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
 *
 * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
 * instead it will only rerenders when the current todo is (de)selected.
 *
 * reactiveComponent((props) => {
 *     const todo = props.todo;
 *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
 *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
 * });
 *
 */
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
    return computed(expr, { context: scope }).get();
}

function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    // optimization: using ES6 map would be more efficient!
    // optimization: lift this function outside toJS, this makes recursion expensive
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return (res_1[key] = toJS(value, detectCycles, __alreadySeen)); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}

function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    // Memoizes: object id -> reactive view that applies transformer to the object
    var objectCache = {};
    // If the resetId changes, we will clear the object cache, see #163
    // This construction is used to avoid leaking refs to the objectCache directly
    var resetId = globalState.resetId;
    // Local transformer class specifically for this transformer
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        // Not in cache; create a reactive view
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
function getMemoizationId(object) {
    if (typeof object === "string" || typeof object === "number")
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}

function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    switch (arguments.length) {
        case 0:
            thing = globalState.trackingDerivation;
            if (!thing)
                return log(getMessage("m024"));
            break;
        case 2:
            thing = getAtom(thing, prop);
            break;
    }
    thing = getAtom(thing);
    if (isComputedValue(thing))
        return log(thing.whyRun());
    else if (isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail("InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail("Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
var extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    interceptReads: interceptReads,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    isolateGlobalState: isolateGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
var everything = {
    Reaction: Reaction,
    untracked: untracked,
    Atom: Atom,
    BaseAtom: BaseAtom,
    useStrict: useStrict,
    isStrictModeEnabled: isStrictModeEnabled,
    spy: spy,
    comparer: comparer,
    asReference: asReference,
    asFlat: asFlat,
    asStructure: asStructure,
    asMap: asMap,
    isModifierDescriptor: isModifierDescriptor,
    isObservableObject: isObservableObject,
    isBoxedObservable: isObservableValue,
    isObservableArray: isObservableArray,
    ObservableMap: ObservableMap,
    isObservableMap: isObservableMap,
    map: map,
    transaction: transaction,
    observable: observable,
    computed: computed,
    isObservable: isObservable,
    isComputed: isComputed,
    extendObservable: extendObservable,
    extendShallowObservable: extendShallowObservable,
    observe: observe,
    intercept: intercept,
    autorun: autorun,
    autorunAsync: autorunAsync,
    when: when,
    reaction: reaction,
    action: action,
    isAction: isAction,
    runInAction: runInAction,
    expr: expr,
    toJS: toJS,
    createTransformer: createTransformer,
    whyRun: whyRun,
    isArrayLike: isArrayLike,
    extras: extras
};
var warnedAboutDefaultExport = false;
var _loop_1 = function (p) {
    var val = everything[p];
    Object.defineProperty(everything, p, {
        get: function () {
            if (!warnedAboutDefaultExport) {
                warnedAboutDefaultExport = true;
                console.warn("Using default export (`import mobx from 'mobx'`) is deprecated " +
                    "and won’t work in mobx@4.0.0\n" +
                    "Use `import * as mobx from 'mobx'` instead");
            }
            return val;
        }
    });
};
for (var p in everything) {
    _loop_1(p);
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: spy, extras: extras });
}

/* harmony default export */ __webpack_exports__["default"] = (everything);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(88)))

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd__);

const Antd = __WEBPACK_IMPORTED_MODULE_0_antd__;
/* harmony export (immutable) */ __webpack_exports__["a"] = Antd;

/* harmony default export */ __webpack_exports__["b"] = ({
    Affix: __WEBPACK_IMPORTED_MODULE_0_antd__["Affix"],
    BackTop: __WEBPACK_IMPORTED_MODULE_0_antd__["BackTop"],
    Breadcrumb: __WEBPACK_IMPORTED_MODULE_0_antd__["Breadcrumb"],
    Dropdown: __WEBPACK_IMPORTED_MODULE_0_antd__["Dropdown"],
    Icon: __WEBPACK_IMPORTED_MODULE_0_antd__["Icon"],
    Layout: __WEBPACK_IMPORTED_MODULE_0_antd__["Layout"],
    Menu: __WEBPACK_IMPORTED_MODULE_0_antd__["Menu"],
    Spin: __WEBPACK_IMPORTED_MODULE_0_antd__["Spin"],
    Tabs: __WEBPACK_IMPORTED_MODULE_0_antd__["Tabs"],
    Button: __WEBPACK_IMPORTED_MODULE_0_antd__["Button"],
    Tooltip: __WEBPACK_IMPORTED_MODULE_0_antd__["Tooltip"],
    Checkbox: __WEBPACK_IMPORTED_MODULE_0_antd__["Checkbox"],
    InputNumber: __WEBPACK_IMPORTED_MODULE_0_antd__["InputNumber"],
    Switch: __WEBPACK_IMPORTED_MODULE_0_antd__["Switch"],
    Slider: __WEBPACK_IMPORTED_MODULE_0_antd__["Slider"],
    Modal: __WEBPACK_IMPORTED_MODULE_0_antd__["Modal"],
    notification: __WEBPACK_IMPORTED_MODULE_0_antd__["notification"]
});
if (Antd === undefined) {
    alert('未导入任何Antd组件');
}
else if (Antd.Affix === undefined) {
    alert('未导入Antd.Base');
}


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__G_Class__ = __webpack_require__(30);
/*
    全局
 */

const G = {
    Class: __WEBPACK_IMPORTED_MODULE_0__G_Class__["a" /* default */],
    registerClass: __WEBPACK_IMPORTED_MODULE_0__G_Class__["c" /* registerClass */]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = G;



/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_Components_PathText__ = __webpack_require__(43);


class CircularText extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_src_Components_PathText__["a" /* default */], { path: "M 0,50 a 50,50 0 1,1 0,1 z", fill: this.props.fill }, this.props.children));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CircularText;



/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_index__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Animation = class Animation extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.index = 0;
    }
    componentDidMount() {
        this.componentWillReceiveProps(this.props);
    }
    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }
    componentWillReceiveProps(props) {
        window.clearInterval(this.timerID);
        this.index = 0;
        let playCount = 0;
        let iterationCount = props.iterationCount !== undefined ? props.iterationCount : 1;
        let duration = props.duration !== undefined ? (props.duration < 100 ? 100 : props.duration) : 100;
        this.timerID = window.setInterval(() => {
            if (this.index < props.splitCount) {
                this.index++;
            }
            else {
                playCount++;
                if (iterationCount !== 0 && playCount >= iterationCount) {
                    window.clearInterval(this.timerID);
                }
                else {
                    this.index = 0;
                }
            }
        }, duration);
    }
    render() {
        return (this.props.data(this.index, this.props.splitCount));
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["a" /* observable */]
], Animation.prototype, "index", void 0);
Animation = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["b" /* observer */]
], Animation);
/* harmony default export */ __webpack_exports__["a"] = (Animation);


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EModelPanelAlign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_Lib_getPos__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ex__ = __webpack_require__(0);




var EModelPanelAlign;
(function (EModelPanelAlign) {
    EModelPanelAlign[EModelPanelAlign["Top"] = 1] = "Top";
    EModelPanelAlign[EModelPanelAlign["Left"] = 2] = "Left";
    EModelPanelAlign[EModelPanelAlign["Bottom"] = 4] = "Bottom";
    EModelPanelAlign[EModelPanelAlign["Right"] = 8] = "Right";
})(EModelPanelAlign = EModelPanelAlign || (EModelPanelAlign = {}));
class ModelPanel {
    constructor(content, nearBy, eClass, autoClose = false) {
        this.content = content;
        this.nearBy = nearBy;
        this.autoClose = autoClose;
        this.close = () => {
            document.body.removeEventListener('click', this.closeHandle);
            this.panelBox.remove();
        };
        this.closeHandle = (e) => {
            if (this.panelBox.contains(e.target)) {
                return;
            }
            this.close();
        };
        const panelBox = this.panelBox = this.contentBox = document.createElement('div');
        const cssClass = __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["b" /* cssClassNS */].CSSClass.instance;
        let eClassAll = 'fixed pdip-5 zidx-2 uof';
        if (eClassAll !== undefined) {
            eClassAll = eClassAll + ' ' + eClass;
        }
        cssClass.parse(eClassAll);
        panelBox.className = eClassAll;
    }
    open(align = EModelPanelAlign.Top + EModelPanelAlign.Right) {
        const panelBox = this.panelBox;
        let left;
        let top;
        document.body.appendChild(panelBox);
        __WEBPACK_IMPORTED_MODULE_2_react_dom__["render"]((__WEBPACK_IMPORTED_MODULE_3_react_ex__["a" /* default */].createElement("div", null, this.content)), this.contentBox);
        const nearBy = this.nearBy;
        if (nearBy !== undefined) {
            let pos;
            let dom;
            if (nearBy instanceof HTMLElement) {
                dom = nearBy;
            }
            else {
                dom = __WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"](nearBy);
            }
            pos = Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_getPos__["a" /* getOffset */])(dom);
            left = pos.x;
            top = pos.y;
            if (align & EModelPanelAlign.Bottom) {
                top = top + dom.scrollHeight;
            }
            if (align & EModelPanelAlign.Right) {
                left = left + dom.scrollWidth;
            }
            if (align & EModelPanelAlign.Left) {
                left = left - panelBox.scrollWidth;
            }
            if (align & EModelPanelAlign.Top) {
                top = top - panelBox.scrollHeight;
            }
        }
        else {
            left = (document.documentElement.clientWidth - panelBox.scrollWidth) / 2;
            top = (document.documentElement.clientHeight - panelBox.scrollHeight) / 2;
        }
        panelBox.style.left = left + 'px';
        panelBox.style.top = top + 'px';
        const pos2 = Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_getPos__["a" /* getOffset */])(panelBox);
        if (pos2.x + panelBox.scrollWidth > document.body.clientWidth - 5) {
            left = document.body.clientWidth - 5 - panelBox.scrollWidth;
            panelBox.style.left = left + 'px';
        }
        if (pos2.y + panelBox.scrollHeight > document.body.clientHeight - 5) {
            top = document.body.clientHeight - 5 - panelBox.scrollHeight;
            panelBox.style.top = top + 'px';
        }
        const pos3 = Object(__WEBPACK_IMPORTED_MODULE_0_src_Lib_getPos__["a" /* getOffset */])(panelBox);
        if (pos3.y < 5) {
            panelBox.style.top = top - pos3.y + 5 + 'px';
        }
        if (pos3.x < 5) {
            panelBox.style.left = left - pos3.x + 5 + 'px';
        }
        if (this.autoClose) {
            document.body.addEventListener('click', this.closeHandle);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ModelPanel;



/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_index__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let StringSelect = class StringSelect extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.value = this.props.defaultValue;
        this.onClick = (param) => {
            const key = param.key;
            const value = this.props.data[key];
            this.props.onChange(value);
            this.value = value;
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "inline" },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Dropdown, { overlay: (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Menu, { onClick: this.onClick }, this.props.data.map((v, i) => {
                    if (v === this.value) {
                        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Menu.Item, { key: i, disabled: true }, v === '' ? '空' : v));
                    }
                    else {
                        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Menu.Item, { key: i }, v === '' ? '空' : v));
                    }
                }))) },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", { EClass: "inline ctt minwem-6" }, this.value === '' ? '空' : this.value),
                    " ",
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Icon, { type: "down" })))));
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], StringSelect.prototype, "value", void 0);
StringSelect = __decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["b" /* observer */]
], StringSelect);
/* harmony default export */ __webpack_exports__["a"] = (StringSelect);


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = highlightStyle;
/* harmony export (immutable) */ __webpack_exports__["c"] = highlightStyleLine;
/* harmony export (immutable) */ __webpack_exports__["a"] = highlightString;
const re = /(\/\*.*?\*\/)/g;
const DoubleQuotString = '<span style="color:#060;">"</span>';
function highlightStyle(style) {
    style = highlightStyleLine(style);
    style = style.replace(/(\{|;)/g, '$1\n  ');
    style = style.replace(/\n\s*\n/g, '\n');
    style = style.replace(/(  \})/g, '$1\n');
    return style;
}
function highlightStyleLine(style) {
    style = style.replace(/((-[a-z]+?-)?[a-z]+?\-?[a-z]+?:)/g, '<span style="color:red;">$1</span>');
    style = style.replace(re, '<span style="color:green;">$1</span>');
    return style;
}
function highlightString(style) {
    style = style.replace(/"(.*?)"/g, `${DoubleQuotString}<span style="color:green;">$1</span>${DoubleQuotString}`);
    return style;
}


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = updateLocalClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = registerClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_CSS_CSSClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_CSS_CalcStyle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_Lib_NamesAndMapAndList__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Lib_Local__ = __webpack_require__(37);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




const classRuleData = {
    clr_background: {
        backgroundColor: '#f0f0f0'
    },
    clr_background2: {
        backgroundColor: '#fff'
    },
    clr_background3: {
        backgroundColor: '#fff'
    },
    clr_primary: {
        color: '#555',
    },
    frm_border: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5
    },
    frm_border2: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3
    },
    clr_shadow: {
        shadow: [1, '40000000'],
    }
};
if (window.ClassNS === undefined) {
    window.ClassNS = Object.assign({ data: classRuleData }, Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_NamesAndMapAndList__["b" /* toNamesAndMapAndList */])(classRuleData));
}
const localClassRuleData = new __WEBPACK_IMPORTED_MODULE_3__Lib_Local__["a" /* Local */]('classRuleData');
/* harmony export (immutable) */ __webpack_exports__["b"] = localClassRuleData;

function getSkinRule(css, data, name) {
    let rule;
    if (data && data[name]) {
        rule = data[name];
    }
    else {
        rule = window.ClassNS.data[name];
    }
    const { fontWeight, shadow, rotateX, rotateY, rotateZ } = rule, elseRule = __rest(rule, ["fontWeight", "shadow", "rotateX", "rotateY", "rotateZ"]);
    const arr = [];
    let elseString = '';
    if (shadow !== undefined) {
        arr.push(`shadow-${shadow[0]}-${shadow[1]}`);
    }
    if (fontWeight !== undefined) {
        elseString += 'font-weight:' + fontWeight + ';';
    }
    let transform = [];
    if (rotateX) {
        transform.push(`rotateX(${rotateX}deg)`);
    }
    if (rotateY) {
        transform.push(`rotateY(${rotateY}deg)`);
    }
    if (rotateZ) {
        transform.push(`rotateZ(${rotateZ}deg)`);
    }
    const arr2 = [Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CalcStyle__["a" /* calcStyle */])(elseRule)];
    if (arr.length > 0) {
        arr2.push(arr);
    }
    if (transform.length > 0) {
        arr2.push(`transform:${transform.join(' ')};`);
    }
    if (elseString.length > 0) {
        arr2.push(elseString);
    }
    return arr2;
}
function updateLocalClassByName(css, data, name) {
    const rule = getSkinRule(css, data, name);
    const skinRule = css.getRule(name);
    if (skinRule === null) {
        return;
    }
    skinRule.map[name] = rule;
    css.updateClass(name);
}
function updateLocalClass(name) {
    const css = __WEBPACK_IMPORTED_MODULE_0_src_CSS_CSSClass__["b" /* cssClassNS */].CSSClass.instance;
    const data = localClassRuleData.get();
    const classNS = window.ClassNS;
    if (data) {
        if (name !== undefined) {
            updateLocalClassByName(css, data, name);
        }
        else {
            for (const key in classNS.data) {
                updateLocalClassByName(css, data, key);
            }
        }
    }
}
function registerClass() {
    const css = __WEBPACK_IMPORTED_MODULE_0_src_CSS_CSSClass__["b" /* cssClassNS */].CSSClass.instance;
    const data = localClassRuleData.get();
    const classNS = window.ClassNS;
    for (const key in classNS.data) {
        const rule = getSkinRule(css, data, key);
        css.registerClassRuleItem(key, rule);
        css.registerClass(key);
    }
}
const defaultExport = window.ClassNS;
/* harmony default export */ __webpack_exports__["a"] = (defaultExport);


/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPos;
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffset;
function getPos(e, target) {
    const offset = getOffset(target);
    return { x: e.targetEvent.pageX - offset.x, y: e.targetEvent.pageY - offset.y };
}
function getOffset(target, rootTarget = document.body) {
    let x = 0;
    let y = 0;
    do {
        x += target.offsetLeft;
        y += target.offsetTop;
        target = target.offsetParent;
    } while (target && target !== rootTarget);
    return { x: x, y: y };
}


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);

class ColorBooth extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "inline", style: { background: ColorBooth.bgpic } }, this.props.children));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColorBooth;

ColorBooth.bgpic = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center';


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_index__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let RenderData = class RenderData extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.data = this.props.data;
    }
    componentDidMount() {
        this.props.onRaiseChange((data) => {
            this.data = data;
        });
    }
    render() {
        return this.data;
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["a" /* observable */]
], RenderData.prototype, "data", void 0);
RenderData = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["b" /* observer */]
], RenderData);
/* harmony default export */ __webpack_exports__["a"] = (RenderData);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = toNamesAndMapAndList;
/* unused harmony export toNames */
/* unused harmony export toMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = toList;
function toNamesAndMapAndList(data) {
    const map = {};
    const list = [];
    const names = [];
    Object.keys(data).forEach(v => {
        map[v] = v;
        list.push(data[v]);
        names.push(v);
    });
    return { map, list, names };
}
function toNames(data) {
    const names = [];
    Object.keys(data).forEach(v => {
        names.push(v);
    });
    return { names };
}
function toMap(data) {
    const map = {};
    Object.keys(data).forEach(v => {
        map[v] = v;
    });
    return { map };
}
function toList(data) {
    const list = [];
    Object.keys(data).forEach(v => {
        list.push(data[v]);
    });
    return { list: list };
}


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Local {
    constructor(key) {
        this.key = key;
    }
    get() {
        return JSON.parse(window.localStorage.getItem(this.key));
    }
    set(value) {
        window.localStorage.setItem(this.key, JSON.stringify(value));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Local;



/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: '好奇实验室'
});


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "HaoQiLab/static/media/logo.8046304b.png";

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_CircularText__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Project_Config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_Animation__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const logo = __webpack_require__(39);
let Logo = class Logo extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "logo", className: this.props.className },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: "logo" }),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", null,
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1__Components_CircularText__["a" /* default */], { fill: this.props.fill },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__Components_Animation__["a" /* default */], { iterationCount: 0, duration: 150, splitCount: __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length * 5, data: function (index, max) {
                            if (index <= __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length) {
                                // 右往左出现
                                return new Array(__WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length - index + 1).join('　') + __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.substr(0, index);
                            }
                            else if (index > __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length && index <= __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length * 5 - __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length) {
                                // 当作delay
                                return __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name;
                            }
                            else {
                                // 右往左消失
                                const count = max - index;
                                return __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.substr(__WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name.length - count, count);
                            }
                        } })))));
    }
};
Logo = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        logo: [
            'f-gray fb'.split(' '),
            {
                ' .logo': [
                    `background-image:url(${logo});background-size:100%;`,
                    'wem-6 hem-6 inline memt-2'.split(' ')
                ],
                ' span': ['vertical-align:top;', 'meml_-5 inline'.split(' ')]
            }
        ]
    })
], Logo);
/* harmony default export */ __webpack_exports__["a"] = (Logo);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PathText = class PathText extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.onRef = (instance) => {
            if (!instance) {
                return;
            }
            var xlinkNS = 'http://www.w3.org/1999/xlink';
            instance.setAttributeNS(xlinkNS, 'xlink:href', `#${this.cssClass.key}path`);
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "box" },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("svg", { viewBox: "0 0 100 100" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("path", { d: this.props.path, id: this.cssClass.key + 'path' }),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("text", { fill: this.props.fill ? this.props.fill : '#ffffff' },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("textPath", { ref: this.onRef }, this.props.children)))));
    }
};
PathText = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        box: ['wem-4 hem-4 f-gray mdipt-20'.split(' '), {
                ' svg': 'display:block;overflow:visible;',
                ' path': 'fill:none;',
                ' text': 'font-size:2em;'
            }]
    })
], PathText);
/* harmony default export */ __webpack_exports__["a"] = (PathText);


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(529);


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Content__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Footer__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App_css__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__App_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../.d.ts"/>







let App = class App extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.elemLayout = null;
        this.initLayoutDone = (instance) => {
            this.elemLayout = instance;
        };
    }
    render() {
        return [
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2_antd_min__["b" /* default */].Layout, { key: "App", ref: this.initLayoutDone, className: "layout", style: { minWidth: 600 } },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], { page: this.props.page, key: "Header" }),
                this.props.noContent ?
                    this.props.children :
                    (this.elemLayout !== null &&
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_4__Content__["a" /* default */], { page: this.props.page, layout: this.elemLayout }, this.props.children)),
                !this.props.noFooter && __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], null))),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2_antd_min__["b" /* default */].BackTop, { key: "backTop" })
        ];
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["a" /* observable */]
], App.prototype, "elemLayout", void 0);
App = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["b" /* observer */]
], App);
(function (global) {
    const template = global.Template || (global.Template = {});
    template.Default_App = App;
})(window);


/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_Template_Default_Logo__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_Lib_ModelWindow__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_Components_Style_GlobalSkinEdit__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_CSS_G__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_Lib_ModelPanel__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const { Header } = __WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Layout;
let App = class App extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.setupModel = null;
        this.onClickSetup = (e) => {
            if (this.setupModel !== null) {
                this.setupModel.open(__WEBPACK_IMPORTED_MODULE_6_src_Lib_ModelPanel__["a" /* EModelPanelAlign */].Left + __WEBPACK_IMPORTED_MODULE_6_src_Lib_ModelPanel__["a" /* EModelPanelAlign */].Bottom);
            }
        };
        this.onRefSetup = (instance) => {
            if (instance) {
                this.setupModel = new __WEBPACK_IMPORTED_MODULE_3_src_Lib_ModelWindow__["a" /* ModelWindow */]((__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_4_src_Components_Style_GlobalSkinEdit__["a" /* default */], null)), instance, 'wem-60 minhem-30 bg-gray zidx-999 shadow-1 ' + __WEBPACK_IMPORTED_MODULE_5_src_CSS_G__["a" /* G */].Class.map.frm_border);
            }
        };
    }
    render() {
        const page = this.props.page;
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(Header, { style: { zIndex: 99 } },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2_src_Template_Default_Logo__["a" /* default */], { EClass: "float" }),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "floatr" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "float" },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Menu, { onClick: page.onMenuClick, theme: "dark", mode: "horizontal", EClass: "inline lhpx-63", defaultSelectedKeys: [page.menu.index.toString()] }, page.menu.data
                        .map((k, i) => __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Menu.Item, { page: k[1], key: i }, k[0])))),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "floatr mpxr_-50 uof" },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "github" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("a", { target: "_blank", href: "https://github.com/make-in-china/HaoQiLab" }, "github\u6258\u7BA1")),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "mpxt_-64 memr-4" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Button, { ref: this.onRefSetup, onClick: this.onClickSetup, size: "small" }, "\u5168\u5C40\u6837\u5F0F"))))));
    }
};
App = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        github: [
            'transform:rotateZ(50deg);',
            'hem-2 lhem-2 bg-ff0 bd-bb0 pdiplr-20 fb fz-15 inline mpxr_-12 meml-4'.split(' ')
        ]
    })
], App);
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_Lib_ModelPanel__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__ = __webpack_require__(13);


class ModelWindow extends __WEBPACK_IMPORTED_MODULE_0_src_Lib_ModelPanel__["b" /* ModelPanel */] {
    constructor(content, nearBy, eClass, autoClose = false) {
        super(content, nearBy, eClass, autoClose);
        this.content = content;
        this.nearBy = nearBy;
        this.autoClose = autoClose;
        const titleBox = this.titleBox = document.createElement('div');
        const closeBtn = document.createElement('div');
        closeBtn.onclick = () => {
            this.close();
        };
        closeBtn.innerHTML = '×';
        __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["b" /* cssClassNS */].CSSClass.instance.parseToElement(closeBtn, 'floatr wem-1 hem-1 pointer fb f-red');
        titleBox.appendChild(closeBtn);
        this.panelBox.appendChild(titleBox);
        const contentBox = this.contentBox = document.createElement('div');
        this.panelBox.appendChild(contentBox);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModelWindow;



/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_Components_StringSelect__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_CSS_G__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SkinEditBox__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_Lib_mobx_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_Lib_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_CSS_G_Class__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const notification = __WEBPACK_IMPORTED_MODULE_5_src_Lib_antd_min__["a" /* Antd */].notification;
let GlobalSkinEdit = class GlobalSkinEdit extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        // #region static
        super(...arguments);
        // #endregion
        // #region public property
        this.name = __WEBPACK_IMPORTED_MODULE_2_src_CSS_G__["a" /* G */].Class.names[0];
        this.sync = false;
        this.isUserRule = this.ruleIsUserRule();
        this.useCount = document.querySelectorAll('.' + this.name).length;
        this.onChangeRule = () => {
            this.isUserRule = this.ruleIsUserRule();
        };
        this.classOnChange = (v) => {
            this.name = v;
            this.useCount = document.querySelectorAll('.' + this.name).length;
            this.isUserRule = this.ruleIsUserRule();
        };
        this.onChangeSync = (checked) => {
            this.sync = checked;
        };
        this.onClickClearAllRule = (e) => {
            __WEBPACK_IMPORTED_MODULE_6_src_CSS_G_Class__["b" /* localClassRuleData */].set({});
            notification.open({
                message: '样式清除',
                description: `清除所有用户样式成功！`,
                btn: (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5_src_Lib_antd_min__["a" /* Antd */].Button, { type: "primary", size: "small", onClick: () => {
                        notification.close('clearAllClass');
                        Object(__WEBPACK_IMPORTED_MODULE_6_src_CSS_G_Class__["d" /* updateLocalClass */])();
                        this.isUserRule = false;
                    } }, "\u5237\u65B0\u9875\u9762\u6837\u5F0F")),
                key: 'clearAllClass',
                onClose: close,
            });
        };
        // #endregion
    }
    // #endregion
    // #region private property
    // #endregion
    // #region public methods
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "fz-16 pdip-5" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", null, "\u5168\u5C40\u6837\u5F0F\uFF1A"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_src_Components_StringSelect__["a" /* default */], { defaultValue: this.name, data: __WEBPACK_IMPORTED_MODULE_2_src_CSS_G__["a" /* G */].Class.names, onChange: this.classOnChange }),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", { EClass: "mdiplr-10" },
                    this.useCount,
                    "\u4E2A\u5728\u7528\u00A0",
                    this.isUserRule ? __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", { EClass: "f-12-gray" }, "\u7528\u6237\u914D\u7F6E") : __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", { EClass: "f-12-gray" }, "\u9ED8\u8BA4\u914D\u7F6E")),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5_src_Lib_antd_min__["a" /* Antd */].Switch, { onChange: this.onChangeSync, checkedChildren: '全局调整', unCheckedChildren: '私有调整', defaultChecked: this.sync }),
                "\u00A0",
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5_src_Lib_antd_min__["a" /* Antd */].Button, { size: "small", onClick: this.onClickClearAllRule }, "\u6E05\u9664\u7528\u6237\u89C4\u5219")),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "mdipt-5" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__SkinEditBox__["a" /* default */], { onChangeRule: this.onChangeRule, name: this.name, sync: this.sync, info: __WEBPACK_IMPORTED_MODULE_2_src_CSS_G__["a" /* G */].Class.data[this.name] }))));
    }
    // #endregion
    // #region private methods
    ruleIsUserRule() {
        return this.name in (__WEBPACK_IMPORTED_MODULE_6_src_CSS_G_Class__["b" /* localClassRuleData */].get() || {});
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_4_src_Lib_mobx_index__["a" /* observable */]
], GlobalSkinEdit.prototype, "name", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_4_src_Lib_mobx_index__["a" /* observable */]
], GlobalSkinEdit.prototype, "sync", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_4_src_Lib_mobx_index__["a" /* observable */]
], GlobalSkinEdit.prototype, "isUserRule", void 0);
GlobalSkinEdit = __decorate([
    __WEBPACK_IMPORTED_MODULE_4_src_Lib_mobx_index__["b" /* observer */]
], GlobalSkinEdit);
/* harmony default export */ __webpack_exports__["a"] = (GlobalSkinEdit);


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StepSlider__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StringSelect__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SkinTargets__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_Components_Sketch_SketchPicker__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_Lib_mobx_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_CSS_G__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_Components_RenderData__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_Lib_highlightStyle__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//#region import














// import * as ZeroClipboard from 'zeroclipboard';
//#endregion
const TabPane = __WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Tabs.TabPane;
const notification = __WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].notification;
let SkinEditBox = class SkinEditBox extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        //#endregion
        //#region private property
        this.btnUpdateClassBySave = (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Button, { type: "primary", size: "small", onClick: () => {
                notification.close('saveClass');
                Object(__WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__["d" /* updateLocalClass */])(this.props.name);
                this.props.onChangeRule();
            } }, "\u5237\u65B0\u9875\u9762\u6837\u5F0F"));
        this.btnUpdateClassByClear = (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Button, { type: "primary", size: "small", onClick: () => {
                notification.close('clearClass');
                Object(__WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__["d" /* updateLocalClass */])(this.props.name);
                this.props.onChangeRule();
            } }, "\u5237\u65B0\u9875\u9762\u6837\u5F0F"));
        this.globalEClass = __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["b" /* cssClassNS */].CSSClass.instance;
        this.displayOnChange = this.makeChangeEvent('display');
        this.borderStyleOnChange = this.makeChangeEvent('borderStyle');
        this.shadowOnChange = this.makeChangeEvent('shadow');
        this.marginOnChange = this.makeChangeEvent('margin');
        this.paddingOnChange = this.makeChangeEvent('padding');
        this.borderWidthOnChange = this.makeChangeEvent('borderWidth');
        this.borderRadiusOnChange = this.makeChangeEvent('borderRadius');
        this.backgroundColorOnChange = this.makeChangeEvent('backgroundColor');
        this.colorOnChange = this.makeChangeEvent('color');
        this.fontSizeOnChange = this.makeChangeEvent('fontSize');
        this.rotateXOnChange = this.makeChangeEvent('rotateX');
        this.rotateYOnChange = this.makeChangeEvent('rotateY');
        this.rotateZOnChange = this.makeChangeEvent('rotateZ');
        this.fontWeightOnChange = this.makeChangeEvent('fontWeight');
        this.shadowColorOnChange = this.makeChangeEvent('shadowColor');
        this.borderColorOnChange = this.makeChangeEvent('borderColor');
        this.renderRandom = Math.random();
        // #region private
        this.onClickClear = (evt) => {
            const data = __WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__["b" /* localClassRuleData */].get() || {};
            delete data[this.props.name];
            __WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__["b" /* localClassRuleData */].set(data);
            notification.open({
                message: '样式清除',
                description: `清除“${this.props.name}”样式成功！`,
                btn: this.btnUpdateClassByClear,
                key: 'clearClass',
                onClose: close,
            });
        };
        this.onClickSave = (evt) => {
            const data = __WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__["b" /* localClassRuleData */].get() || {};
            data[this.props.name] = this.createRule();
            __WEBPACK_IMPORTED_MODULE_7_src_CSS_G_Class__["b" /* localClassRuleData */].set(data);
            notification.open({
                message: '样式保存',
                description: `保存“${this.props.name}”样式成功！`,
                btn: this.btnUpdateClassBySave,
                key: 'saveClass',
                onClose: close,
            });
        };
        this.onClickExport = (evt) => {
            const rule = this.createRule();
            const str = JSON.stringify(rule);
            notification.open({
                message: '样式规则导出-' + this.props.name,
                description: str,
                btn: null,
                key: 'copyClass',
                onClose: close,
            });
        };
        this.onRaiseChange = (onChange) => {
            this.onStyleTextChange = onChange;
        };
        this.onChangeCheck = () => {
            this.updateRule(this.props);
        };
        // #endregion
    }
    //#endregion
    //#region public function without render
    createRule() {
        const rule = {};
        if (this.checkList.display) {
            rule.display = this.setup.display;
        }
        if (this.checkList.backgroundColor) {
            rule.backgroundColor = Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["h" /* getRGBACSSString */])(this.setup.backgroundColor);
        }
        if (this.checkList.margin) {
            rule.margin = this.setup.margin;
        }
        if (this.checkList.rotateX) {
            rule.rotateX = this.setup.rotateX;
        }
        if (this.checkList.rotateY) {
            rule.rotateY = this.setup.rotateY;
        }
        if (this.checkList.rotateZ) {
            rule.rotateZ = this.setup.rotateZ;
        }
        if (this.checkList.padding) {
            rule.padding = this.setup.padding;
        }
        if (this.checkList.borderStyle) {
            rule.borderStyle = this.setup.borderStyle;
        }
        if (this.checkList.borderWidth) {
            rule.borderWidth = this.setup.borderWidth;
        }
        if (this.checkList.borderColor) {
            rule.borderColor = Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["h" /* getRGBACSSString */])(this.setup.borderColor);
        }
        if (this.checkList.borderRadius) {
            rule.borderRadius = this.setup.borderRadius;
        }
        if (this.checkList.color) {
            rule.color = Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["h" /* getRGBACSSString */])(this.setup.color);
        }
        if (this.checkList.fontSize) {
            rule.fontSize = this.setup.fontSize;
        }
        if (this.checkList.fontWeight) {
            rule.fontWeight = this.setup.fontWeight;
        }
        if (this.checkList.shadow) {
            const shadowColor = Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["f" /* getRGBA2String */])(this.setup.shadowColor);
            rule.shadow = [this.setup.shadow, shadowColor];
        }
        return rule;
    }
    componentDidMount() {
        this.updateRule(this.props);
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(props) {
        if (props.info !== this.props.info) {
            this.init(props);
        }
        this.updateRule(props);
        this.renderRandom = Math.random();
    }
    //#endregion
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        const data = {
            onChangeCheck: this.onChangeCheck,
            source: this.checkList
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Button, { size: "small", onClick: this.onClickSave }, "\u4FDD\u5B58\u89C4\u5219"),
                    "\u00A0",
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Button, { size: "small", onClick: this.onClickClear }, "\u6E05\u9664\u89C4\u5219"),
                    "\u00A0",
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Button, { size: "small", onClick: this.onClickExport }, "\u5BFC\u51FA\u89C4\u5219")),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "setupbox" },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: __WEBPACK_IMPORTED_MODULE_10_src_CSS_G__["a" /* G */].Class.map.frm_border, EClass: "mdipl_-4" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_12_src_Lib_antd_min__["a" /* Antd */].Tabs, { type: "card" },
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(TabPane, { tab: "大小", key: "size" },
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "显示模式", keyName: "display" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__StringSelect__["a" /* default */], { defaultValue: this.setup.display, data: ['', 'inline-block', 'block', 'inline-flex', 'flex', 'inline-grid', 'grid', 'inline-table', 'table', 'list-item', 'run-in', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group'], onChange: this.displayOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "外边距", keyName: "margin" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.margin, min: 1, max: 100, step: 10, onChange: this.marginOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "内边距", keyName: "padding" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.padding, min: 1, max: 100, step: 10, onChange: this.paddingOnChange }))),
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(TabPane, { tab: "边框", key: "border" },
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "边框风格", keyName: "borderStyle" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__StringSelect__["a" /* default */], { defaultValue: this.setup.borderStyle, data: ['', 'none', 'hidden', 'solid', 'dashed', 'dotted', 'ridge', 'inset', 'outset', 'groove', 'double'], onChange: this.borderStyleOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "边框宽度", keyName: "borderWidth" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.borderWidth, min: 1, max: 100, step: 10, onChange: this.borderWidthOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "边框圆角", keyName: "borderRadius" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.borderRadius, min: 1, max: 100, step: 10, onChange: this.borderRadiusOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "边框颜色", keyName: "borderColor" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_6_src_Components_Sketch_SketchPicker__["a" /* default */], { color: this.setup.borderColor, onChange: this.borderColorOnChange }))),
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(TabPane, { tab: "字体", key: "font" },
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "字体大小", keyName: "fontSize" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.fontSize, min: 1, max: 45, step: 1, onChange: this.fontSizeOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "字体宽度", keyName: "fontWeight" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.fontWeight, min: 1, max: 9, step: 1, ratio: 100, onChange: this.fontWeightOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "字体颜色", keyName: "color" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_6_src_Components_Sketch_SketchPicker__["a" /* default */], { color: this.setup.color, onChange: this.colorOnChange }))),
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(TabPane, { tab: "变形", key: "deformation" },
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "前后翻转", keyName: "rotateX" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.rotateX, min: 1, max: 360, step: 1, onChange: this.rotateXOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "左右翻转", keyName: "rotateY" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.rotateY, min: 1, max: 360, step: 1, onChange: this.rotateYOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "旋转", keyName: "rotateZ" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.rotateZ, min: 1, max: 360, step: 1, onChange: this.rotateZOnChange }))),
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(TabPane, { tab: "颜色和其他", key: "default" },
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "背景颜色", keyName: "backgroundColor" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_6_src_Components_Sketch_SketchPicker__["a" /* default */], { color: this.setup.backgroundColor, onChange: this.backgroundColorOnChange })),
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_5__SkinBoxSetupItem__["a" /* default */], Object.assign({ title: "阴影", keyName: "shadow" }, data),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__StepSlider__["a" /* default */], { defaultValue: this.setup.shadow, min: 1, max: 20, step: 2, onChange: this.shadowOnChange }),
                                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_6_src_Components_Sketch_SketchPicker__["a" /* default */], { color: this.setup.shadowColor, onChange: this.shadowColorOnChange }))))),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: __WEBPACK_IMPORTED_MODULE_10_src_CSS_G__["a" /* G */].Class.map.frm_border, EClass: "style" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("pre", null,
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_11_src_Components_RenderData__["a" /* default */], { data: "", onRaiseChange: this.onRaiseChange }))))),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "view" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: __WEBPACK_IMPORTED_MODULE_10_src_CSS_G__["a" /* G */].Class.map.frm_border, EClass: "frame minhem-20" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_4__SkinTargets__["a" /* default */], { count: 2, max: 10, EClass: "simple" }))))));
    }
    // private getValueForPx(value: string | number) {
    //     if (isString(value)) {
    //         value = value.trim();
    //         if (/^\d+p/.test(value)) {
    //             value = value.replace('px', '');
    //             return Number(value);
    //         } else if (/\d+em/.test(value)) {
    //             value = value.replace('em', '');
    //             return Number(value) * 16;
    //         } else {
    //             throw '无法解析borderRadius：' + value;
    //         }
    //     } else {
    //         return value;
    //     }
    // }
    getRGBAFromReactCSSPropertiesColor(color) {
        color = color.trim();
        if (/#[a-z\d]{3}([a-z\d]{3})?/.test(color)) {
            // #000  #000000
            color = color.replace('#', '');
            if (color.length === 3) {
                color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
            }
            return Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["e" /* getRGB */])(color), { A: 1 });
        }
        else {
            const match = color.match(/^rgba?\(\d{1,3},\d{1,3},\d{1,3}(,(\d{1,})?\.?\d{1,})?\)/);
            console.log(match);
            debugger;
            return { R: 0, G: 0, B: 0, A: 1 };
        }
    }
    init(props) {
        // const use = props.info.use;
        const values = props.info;
        this.setup = {};
        this.checkList = {};
        if (values.shadow) {
            this.setup.shadow = values.shadow[0];
            this.setup.shadowColor = Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["g" /* getRGBAByMoreInfo */])(values.shadow[1]);
            this.checkList.shadow = true;
        }
        else {
            this.setup.shadow = 0;
            this.setup.shadowColor = { R: 0, G: 0, B: 0, A: 0.5 };
        }
        if (values.display) {
            this.setup.display = values.display;
            this.checkList.display = true;
        }
        else {
            this.setup.display = '';
        }
        if (values.borderStyle) {
            this.setup.borderStyle = values.borderStyle;
            this.checkList.borderStyle = true;
        }
        else {
            this.setup.borderStyle = '';
        }
        if (values.rotateX) {
            this.setup.rotateX = values.rotateX;
            this.checkList.rotateX = true;
        }
        else {
            this.setup.rotateX = 0;
        }
        if (values.rotateY) {
            this.setup.rotateY = values.rotateY;
            this.checkList.rotateY = true;
        }
        else {
            this.setup.rotateY = 0;
        }
        if (values.rotateZ) {
            this.setup.rotateZ = values.rotateZ;
            this.checkList.rotateZ = true;
        }
        else {
            this.setup.rotateZ = 0;
        }
        if (values.padding) {
            this.setup.padding = values.padding;
            this.checkList.padding = true;
        }
        else {
            this.setup.padding = 15;
        }
        if (values.margin) {
            this.setup.margin = values.margin;
            this.checkList.margin = true;
        }
        else {
            this.setup.margin = 15;
        }
        if (values.borderRadius) {
            this.setup.borderRadius = values.borderRadius;
            this.checkList.borderRadius = true;
        }
        else {
            this.setup.borderRadius = 5;
        }
        if (values.borderWidth) {
            this.setup.borderWidth = values.borderWidth;
            this.checkList.borderWidth = true;
        }
        else {
            this.setup.borderWidth = 1;
        }
        if (values.fontSize) {
            this.setup.fontSize = values.fontSize;
            this.checkList.fontSize = true;
        }
        else {
            this.setup.fontSize = 14;
        }
        if (values.fontWeight) {
            this.setup.fontWeight = values.fontWeight;
            this.checkList.fontWeight = true;
        }
        else {
            this.setup.fontWeight = 1;
        }
        if (values.borderWidth) {
            this.setup.borderWidth = values.borderWidth;
            this.checkList.borderWidth = true;
        }
        else {
            this.setup.borderWidth = 1;
        }
        if (values.borderColor) {
            this.setup.borderColor = this.getRGBAFromReactCSSPropertiesColor(values.borderColor);
            this.checkList.borderColor = true;
        }
        else {
            this.setup.borderColor = { R: 0, G: 0, B: 0, A: 1 };
        }
        if (values.color) {
            this.setup.color = this.getRGBAFromReactCSSPropertiesColor(values.color);
            this.checkList.color = true;
        }
        else {
            this.setup.color = { R: 0, G: 0, B: 0, A: 1 };
        }
        if (values.backgroundColor) {
            this.setup.backgroundColor = this.getRGBAFromReactCSSPropertiesColor(values.backgroundColor);
            this.checkList.backgroundColor = true;
        }
        else {
            this.setup.backgroundColor = { R: 0, G: 0, B: 0, A: 1 };
        }
        this.skinRule = this.globalEClass.getRule(props.name);
        this.targetRule = this.cssClass.getRule('simple');
    }
    makeChangeEvent(name) {
        return (value) => {
            this.setup[name] = value;
            this.updateRule(this.props);
        };
    }
    recalRule(props) {
        const arr = [];
        const arr2 = [];
        if (this.checkList.display) {
            arr2.push(`display:${this.setup.display};`);
        }
        if (this.checkList.backgroundColor) {
            arr2.push(`background-color:rgba(${this.setup.backgroundColor.R},${this.setup.backgroundColor.G},${this.setup.backgroundColor.B},${this.setup.backgroundColor.A});`);
        }
        if (this.checkList.margin) {
            arr2.push(`margin:${this.setup.margin}px;`);
        }
        let transform = [];
        if (this.checkList.rotateX) {
            transform.push(`rotateX(${this.setup.rotateX}deg)`);
        }
        if (this.checkList.rotateY) {
            transform.push(`rotateY(${this.setup.rotateY}deg)`);
        }
        if (this.checkList.rotateZ) {
            transform.push(`rotateZ(${this.setup.rotateZ}deg)`);
        }
        if (transform.length > 0) {
            arr2.push(`transform:${transform.join(' ')};`);
        }
        if (this.checkList.padding) {
            arr2.push(`padding:${this.setup.padding}px;`);
        }
        if (this.checkList.fontWeight) {
            arr2.push(`font-weight:${this.setup.fontWeight * 100};`);
        }
        if (this.checkList.fontSize) {
            arr2.push(`font-size:${this.setup.fontSize}px;`);
        }
        if (this.checkList.borderStyle) {
            arr2.push(`border-style:${this.setup.borderStyle};`);
        }
        if (this.checkList.borderWidth) {
            arr2.push(`border-width:${this.setup.borderWidth}px;`);
        }
        if (this.checkList.borderColor) {
            arr2.push(`border-color:rgba(${this.setup.borderColor.R},${this.setup.borderColor.G},${this.setup.borderColor.B},${this.setup.borderColor.A});`);
        }
        if (this.checkList.borderRadius) {
            arr2.push(`border-radius:${this.setup.borderRadius}px;`);
        }
        if (this.checkList.color) {
            arr2.push(`color:rgba(${this.setup.color.R},${this.setup.color.G},${this.setup.color.B},${this.setup.color.A});`);
        }
        if (this.checkList.shadow) {
            const shadowColor = Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["f" /* getRGBA2String */])(this.setup.shadowColor);
            arr.push('shadow-' + this.setup.shadow + '-' + shadowColor);
        }
        if (arr.length > 0) {
            arr2.push(arr);
        }
        return arr2;
    }
    updateRule(props) {
        const ruleArr = this.recalRule(props);
        this.targetRule.map.simple = ruleArr;
        this.cssClass.updateClass('simple');
        let style;
        if (props.sync) {
            this.skinRule.map[props.name] = ruleArr;
            this.globalEClass.updateClass(props.name);
            style = this.globalEClass.getStyleByName(props.name);
        }
        else {
            style = this.cssClass.getStyleByName('simple');
        }
        style = Object(__WEBPACK_IMPORTED_MODULE_13_src_Lib_highlightStyle__["b" /* highlightStyle */])(style);
        this.onStyleTextChange(__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("code", { dangerouslySetInnerHTML: { __html: style } }));
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_8_mobx__["observable"]
], SkinEditBox.prototype, "renderRandom", void 0);
SkinEditBox = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        view: [
            {
                'chd': ['mhem-5 uof alignTop bdbox pdip-5'.split(' ')]
            }
        ],
        frame: [
            'pdip-5 bd-12-gray'.split(' ')
        ],
        setupbox: [
            'mdiptb-5 pdipl-4 minhem-16'.split(' '),
            {
                ' .ant-tabs.ant-tabs-card>.ant-tabs-bar .ant-tabs-nav-container': 'height:31px',
                ' .ant-tabs.ant-tabs-card>.ant-tabs-bar .ant-tabs-tab': 'line-height:29px;padding:0 10px;',
                chd: ['w-50 inline alignTop frame minhem-20'.split(' ')]
            }
        ],
        style: ['mdipl-4 maxhem-20 scrolly'.split(' '), {
                '>pre': 'overflow: initial;'
            }],
        simple: []
    }),
    __WEBPACK_IMPORTED_MODULE_9_src_Lib_mobx_index__["b" /* observer */]
], SkinEditBox);
/* harmony default export */ __webpack_exports__["a"] = (SkinEditBox);


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_index__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let StepSlider = class StepSlider extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.randerRandom = Math.random();
        this.ratio = this.props.ratio !== undefined ? this.props.ratio : 1;
        this.index = 0;
        this.onChange = (value) => {
            this.value = value;
            this.props.onChange(this.min + this.value);
            this.randerRandom = Math.random();
        };
        this.onChange2 = (value) => {
            this.min = this.stepArea * value;
            this.max = this.stepArea * (value + 1);
            this.index = value;
            this.props.onChange(this.min + this.value);
            this.randerRandom = Math.random();
        };
    }
    componentWillMount() {
        this.init(this.props);
    }
    init(props) {
        this.stepArea = props.max / props.step;
        const index = Math.floor(props.defaultValue / this.stepArea);
        this.value = props.defaultValue - this.index * this.stepArea;
        this.min = this.stepArea * index;
        this.max = this.stepArea * (index + 1);
        this.index = index;
    }
    componentWillReceiveProps(props) {
        this.init(props);
        this.randerRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.randerRandom;
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: this.props.className, EClass: "inline inline-chd" },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "pdipr-10 minwem-3" }, (this.min + this.value) * this.ratio),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Slider, { tipFormatter: null, EClass: "width", key: "a", defaultValue: this.value, min: 1, max: this.stepArea, onChange: this.onChange }),
            this.props.step !== 1 && __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Slider, { tipFormatter: null, EClass: "width", key: "b", defaultValue: this.index, min: 0, max: this.props.step - 1, onChange: this.onChange2 })));
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], StepSlider.prototype, "randerRandom", void 0);
StepSlider = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        width: ['wem-5 pdip-0 hem-0'.split(' ')]
    }),
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["b" /* observer */]
], StepSlider);
/* harmony default export */ __webpack_exports__["a"] = (StepSlider);


/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_Components_StringSelect__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_Lib_NamesAndMapAndList__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const innerType = {
    A: '边框div',
    B: '文字hello',
    AB: '边框+文字'
};
let SkinTargets = class SkinTargets extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.hasInnerTarget = true;
        this.count = this.props.count;
        this.type = 'div';
        this.innerType = innerType.AB;
        this.className = this.props.className;
        this.onChangeCount = (v) => {
            this.count = v;
        };
        this.onChangeInner = (v) => {
            this.hasInnerTarget = v;
        };
        this.onChangeInnerType = (v) => {
            this.innerType = v;
        };
        this.onChangeType = (v) => {
            this.type = v;
        };
    }
    componentWillUpdate(props) {
        this.className = props.className;
    }
    render() {
        let data = [];
        for (var i = 0; i < this.count; i++) {
            let inner = null;
            if (this.hasInnerTarget) {
                switch (this.innerType) {
                    case innerType.A:
                        inner = __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "inner" });
                        break;
                    case innerType.B:
                        inner = 'hello';
                        break;
                    case innerType.AB:
                        inner = __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "inner" }, "hello");
                        break;
                    default:
                }
            }
            data.push((__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(this.type, { class: this.className }, inner)));
        }
        return [
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "pdip-chd-3 inline-chd" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    "\u6F14\u793A\u76EE\u6807\uFF1A",
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3_src_Components_StringSelect__["a" /* default */], { data: ['div', 'span'], defaultValue: this.type, onChange: this.onChangeType })),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    "\u6570\u91CF\uFF1A",
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].InputNumber, { EClass: "wem-3", size: "small", min: 1, max: this.props.max, defaultValue: this.props.count, onChange: this.onChangeCount })),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Switch, { onChange: this.onChangeInner, checkedChildren: [(__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Icon, { type: "check" })), '填充'], unCheckedChildren: [(__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Icon, { type: "cross" })), '填充'], defaultChecked: this.hasInnerTarget })),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3_src_Components_StringSelect__["a" /* default */], { defaultValue: this.innerType, data: Object(__WEBPACK_IMPORTED_MODULE_4_src_Lib_NamesAndMapAndList__["a" /* toList */])(innerType).list, onChange: this.onChangeInnerType })))),
            data
        ];
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], SkinTargets.prototype, "hasInnerTarget", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], SkinTargets.prototype, "count", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], SkinTargets.prototype, "type", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], SkinTargets.prototype, "innerType", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], SkinTargets.prototype, "className", void 0);
SkinTargets = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        inner: ['ladip minwem-2 minhem-2 rdip-5 inline'.split(' ')]
    }),
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["b" /* observer */]
], SkinTargets);
/* harmony default export */ __webpack_exports__["a"] = (SkinTargets);


/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_index__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SkinBoxSetupItem = class SkinBoxSetupItem extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.isCheck = this.props.source[this.props.keyName];
        this.onChange = (e) => {
            this.isCheck = this.props.source[this.props.keyName] = e.target.checked;
            this.props.onChangeCheck();
        };
    }
    componentWillUpdate(props) {
        this.isCheck = props.source[this.props.keyName];
    }
    render() {
        const isCheck = this.isCheck;
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: 'line' + (isCheck ? '' : ' op-5') },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Tooltip, { placement: "left", title: this.props.keyName },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Checkbox, { onChange: this.onChange, checked: isCheck },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("span", { EClass: "name" },
                        this.props.title,
                        " : ")),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: isCheck ? 'inline' : 'inline noevent' }, this.props.children))));
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["a" /* observable */]
], SkinBoxSetupItem.prototype, "isCheck", void 0);
SkinBoxSetupItem = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        line: [
            'nowrap mdipt-5'.split(' '),
            {
                ' .&name': ['text-align:right;', 'mdipr-10 wem-5 inline'.split(' ')],
                '>input': ['wem-4 inline'.split(' ')] // 待抽离
            }
        ],
    }),
    __WEBPACK_IMPORTED_MODULE_2_mobx_index__["b" /* observer */]
], SkinBoxSetupItem);
/* harmony default export */ __webpack_exports__["a"] = (SkinBoxSetupItem);


/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_Components_ColorBooth__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SketchPickerPanel__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_Lib_mobx_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_Lib_ModelPanel__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let SketchPicker = class SketchPicker extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    // #endregion
    // #region private property
    // #endregion
    // #region public methods
    constructor(props) {
        super(props);
        // #region static
        // #endregion
        // #region public property
        this.color = this.props.color;
        this.setupModel = null;
        this.onChange = (clr) => {
            this.color = clr;
            if (this.props.onChange !== undefined) {
                this.props.onChange(clr);
            }
        };
        this.onClick = (e) => {
            if (this.setupModel) {
                this.setupModel.open();
            }
        };
        this.onRef = (instance) => {
            if (instance === null) {
                return;
            }
            if (instance) {
                this.setupModel = new __WEBPACK_IMPORTED_MODULE_4_src_Lib_ModelPanel__["b" /* ModelPanel */]((__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__SketchPickerPanel__["a" /* default */], { color: this.color, onChange: this.onChange })), instance, 'zidx-9999 pdip-10', true);
            }
        };
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(props) {
        this.init(props);
    }
    init(props) {
        this.color = props.color;
    }
    render() {
        const color = this.color;
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { ref: this.onRef, EClass: "colorbox" },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_src_Components_ColorBooth__["a" /* default */], null,
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "color", style: { backgroundColor: `rgba(${color.R},${color.G},${color.B},${color.A})` }, onClick: this.onClick }))));
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_3_src_Lib_mobx_index__["a" /* observable */]
], SketchPicker.prototype, "color", void 0);
SketchPicker = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass(/*local eclass rule */ {
        colorbox: ['pdip-5 ladip lhem-0 rdip-10 inline bd-12-gray'.split(' ')],
        color: ['wem-3 hem-1 rdip-5'.split(' ')],
    }),
    __WEBPACK_IMPORTED_MODULE_3_src_Lib_mobx_index__["b" /* observer */]
], SketchPicker);
/* harmony default export */ __webpack_exports__["a"] = (SketchPicker);


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_Components_RenderData__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_Lib_TouchMove__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_Components_ColorBooth__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_Lib_getPos__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_CSS_G__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const white = 'linear-gradient(to right, #fff, rgba(255,255,255,0));';
const black = 'linear-gradient(to top, #000, rgba(0,0,0,0));';
const horizontal = 'linear-gradient(to right, #f00 0%, #ff0 16.3333%, #0f0 33.6666%, #0ff 50%, #00f 66.3333%, #f0f 83.6666%, #f00 100%);';
const colorSlideWidth = 230;
const colorWidth = 256;
const colorHeight = 200;
let SketchPickerPanel = class SketchPickerPanel extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor(props) {
        super(props);
        this.onH = new __WEBPACK_IMPORTED_MODULE_3_src_Lib_TouchMove__["a" /* TouchMove */]((e, target) => {
            const pos = Object(__WEBPACK_IMPORTED_MODULE_5_src_Lib_getPos__["b" /* getPos */])(e, target);
            this.colorslidepos = pos.x;
            if (this.colorslidepos > colorSlideWidth) {
                this.colorslidepos = colorSlideWidth;
            }
            else if (this.colorslidepos < 0) {
                this.colorslidepos = 0;
            }
            this.baseColor.H = this.colorslidepos / colorSlideWidth;
            this.updateColor(this.props);
            this.raiseChange();
        });
        this.onAlpha = new __WEBPACK_IMPORTED_MODULE_3_src_Lib_TouchMove__["a" /* TouchMove */]((e, target) => {
            const pos = Object(__WEBPACK_IMPORTED_MODULE_5_src_Lib_getPos__["b" /* getPos */])(e, target);
            this.alphaslidepos = pos.x;
            if (this.alphaslidepos > colorSlideWidth) {
                this.alphaslidepos = colorSlideWidth;
            }
            else if (this.alphaslidepos < 0) {
                this.alphaslidepos = 0;
            }
            let alpha = this.alphaslidepos / colorSlideWidth;
            alpha = Math.floor(alpha * 100) / 100;
            this.alpha = alpha;
            this.updateColor(this.props);
            this.raiseChange();
        });
        this.onSL = new __WEBPACK_IMPORTED_MODULE_3_src_Lib_TouchMove__["a" /* TouchMove */]((e, target) => {
            this.pos = Object(__WEBPACK_IMPORTED_MODULE_5_src_Lib_getPos__["b" /* getPos */])(e, target);
            if (this.pos.x > colorWidth) {
                this.pos.x = colorWidth;
            }
            else if (this.pos.x < 0) {
                this.pos.x = 0;
            }
            if (this.pos.y > colorHeight) {
                this.pos.y = colorHeight;
            }
            else if (this.pos.y < 0) {
                this.pos.y = 0;
            }
            this.baseColor.S = this.pos.x / colorWidth;
            this.baseColor.L = (1 - this.pos.y / colorHeight) * (2 - this.baseColor.S) / 2;
            this.updateColor(this.props);
            this.raiseChange();
        });
        this.onRaiseChange = (onChange) => {
            this.onStyleTextChange = onChange;
        };
        // 不修改类上的rule
        this.cssClass = this.cssClass.clone();
    }
    static toRGBA(strColor) {
        return {
            R: 0,
            G: 0,
            B: 0,
            A: 0
        };
    }
    componentWillReceiveProps(props) {
        this.init(props);
        this.updateColor(props);
    }
    init(props) {
        this.baseColor = this.rgbToHSL(props.color);
        this.pos = {
            x: Math.round(colorWidth * this.baseColor.S),
            y: Math.round(colorHeight * (1 - this.baseColor.L * 2 / (2 - this.baseColor.S)))
        };
        this.colorslidepos = colorSlideWidth * this.baseColor.H;
        this.alpha = props.color.A;
        this.alphaslidepos = colorSlideWidth * this.alpha;
    }
    componentWillMount() {
        this.init(this.props);
        this.updateColor(this.props);
    }
    updateColor(props) {
        const rgb = this.hslToRGB(this.baseColor);
        const alpha = `linear-gradient(to right, rgba(${rgb.R},${rgb.G},${rgb.B},0) 0%, rgb(${rgb.R},${rgb.G},${rgb.B}) 100%);`;
        this.cssClass.updateRule({
            colorboxbg: `background-color:hsl(${this.baseColor.H * 360}, 100%, 50%);`,
            showcolor: `background-color:rgba(${rgb.R},${rgb.G},${rgb.B},${this.alpha});`,
            showAlphaColor: `background-image:${alpha}background-image:-webkit-${alpha}`,
            circlepos: `left:${this.pos.x - 5}px;top:${this.pos.y - 10}px;`,
            colorslidepos: `left:${this.colorslidepos - 2}px;`,
            alphaslidepos: `left:${this.alphaslidepos - 2}px;`
        });
        if (this.onStyleTextChange) {
            this.onStyleTextChange(this.getColorText());
        }
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "box" },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "colorbox colorboxbg", onMouseDown: this.onSL.autoDown },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "colorboxmaskwhite" },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "colorboxmaskblack" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "circle circlepos" })))),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "colorbox2" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "horizontal", onMouseDown: this.onH.autoDown },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "slide colorslidepos" })),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "alpha showAlphaColor", onMouseDown: this.onAlpha.autoDown },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_4_src_Components_ColorBooth__["a" /* default */], null,
                            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { style: { width: colorSlideWidth, height: 10 } },
                                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "slide alphaslidepos" }))))),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_4_src_Components_ColorBooth__["a" /* default */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: __WEBPACK_IMPORTED_MODULE_6_src_CSS_G__["a" /* G */].Class.map.frm_border2, EClass: "show showcolor" })))),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "hem-5" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2_src_Components_RenderData__["a" /* default */], { data: this.getColorText(), onRaiseChange: this.onRaiseChange }))));
    }
    HSLTo(p, q, t) {
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    hslToRGB(hsl) {
        var r, g, b;
        const l = hsl.L;
        const h = hsl.H;
        const s = hsl.S;
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = this.HSLTo(p, q, h + 1 / 3);
            g = this.HSLTo(p, q, h);
            b = this.HSLTo(p, q, h - 1 / 3);
        }
        return {
            R: Math.round(r * 255),
            G: Math.round(g * 255),
            B: Math.round(b * 255)
        };
    }
    rgbToHSL(rgb) {
        const r = rgb.R / 255;
        const g = rgb.G / 255;
        const b = rgb.B / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
            }
            h /= 6;
        }
        return {
            H: h,
            S: s,
            L: l
        };
    }
    raiseChange() {
        if (this.props.onChange) {
            this.props.onChange(Object.assign({}, this.hslToRGB(this.baseColor), { A: this.alpha }));
        }
    }
    // private getHSL() {
    //     return {
    //         H: Math.ceil(this.colorslidepos / colorSlideWidth * 360),
    //         S: Math.ceil(this.pos.x * 100 / colorWidth),
    //         L: Math.ceil(this.pos.y * 100 / colorHeight)
    //     };
    // }
    getColorText() {
        const rgb = this.hslToRGB(this.baseColor);
        const arr = [
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("br", null)),
            `R:${rgb.R} G:${rgb.G} B:${rgb.B} A:${this.alpha}`,
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("br", null)),
            'H:' + Math.round(this.baseColor.H * 360) + ' S:' + Math.round(this.baseColor.S * 100) + '% L:' + Math.round(this.baseColor.L * 50) + '%'
        ];
        if (this.alpha === 1) {
            arr.unshift(Object(__WEBPACK_IMPORTED_MODULE_1_src_CSS_CSSClass__["i" /* getRGBString */])(rgb) /*  + ' ' + getRGBString(this.props.color) */);
        }
        else {
            arr.unshift(`rgba(${rgb.R},${rgb.G},${rgb.B},${this.alpha})` /*  + ' ' + getRGBString(this.props.color) */);
        }
        return arr;
    }
};
SketchPickerPanel = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        box: ['pdip-10 rdip-5 shadow-1 bg-gray inline'.split(' ')],
        colorbox: [__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].calcStyle({ width: colorWidth, height: colorHeight })],
        colorbox2: [{
                chd: ['pdiptb-3 inline alignTop'.split(' ')]
            }],
        circle: ['noevent bd-gray shadow-1 bds-double inline rdip-8 bdwdip-6 relative'.split(' ')],
        slide: ['height:0.6em;top:-0.4em;border-width:0.2em;', 'shadow-1 noevent bd-gray bds-solid inline rdip-8 relative'.split(' ')],
        colorboxmaskwhite: [
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].calcStyle({ width: colorWidth, height: colorHeight }),
            `background-image:${white}background-image:-webkit-${white}`
        ],
        colorboxmaskblack: [
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].calcStyle({ width: colorWidth, height: colorHeight }),
            `background-image:${black}background-image:-webkit-${black}`
        ],
        horizontal: [
            'mdiptb-4'.split(' '),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].calcStyle({ width: colorSlideWidth, height: 10 }),
            `background-image:${horizontal}background-image:-webkit-${horizontal}`
        ],
        // vertical: [
        // 'mdiptb-3'.split(' '),
        //     React.calcStyle({ width: colorSlideWidth, height: 10 }),
        //     `background-image:${vertical}background-image:-webkit-${vertical}`
        // ]
        alpha: [
            'mdiptb-4'.split(' '),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].calcStyle({ width: colorSlideWidth, height: 10 })
        ],
        show: [
            'border-color:rgba(0,0,0,0.05);',
            'wdip-26 hdip-26 mdipl-5 mdipt-4'.split(' ')
        ],
        colorboxbg: [],
        showcolor: [],
        showAlphaColor: [],
        circlepos: [],
        colorslidepos: [],
        alphaslidepos: []
    })
], SketchPickerPanel);
/* harmony default export */ __webpack_exports__["a"] = (SketchPickerPanel);


/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TouchMoveEvent__ = __webpack_require__(540);
//  从自己其他框架里拷贝过来的代码，临时修改一下，屏蔽了手指的部分

/**
 * 鼠标（手指）拖滑处理
 */
class TouchMove {
    constructor(fn) {
        this.fn = fn;
        // touchstart: (event: SyntheticEvent<T>) => void;
        // touchend: (event: SyntheticEvent<T>) => void;
        // touchcancel: (event: SyntheticEvent<T>) => void;
        // touchmove: (event: SyntheticEvent<T>) => void;
        this.isTouch = false;
        let that = this;
        let isFirstRunAuto = true;
        this.autoDown = function (event) {
            that.isTouch = true;
            if (isFirstRunAuto) {
                document.body.addEventListener('mousemove', that.move);
                document.body.addEventListener('mouseup', that.up);
                isFirstRunAuto = false;
            }
            const evt = new __WEBPACK_IMPORTED_MODULE_0__TouchMoveEvent__["a" /* TouchMoveEvent */](event, that.isTouch);
            that.target = evt.targetEvent.target;
            that.fn.call(this, evt, that.target);
            event.preventDefault();
            event.stopPropagation();
        };
        // this.down = function (event: SyntheticEvent<T>) {
        //     that.isTouch = true;
        //     that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        // };
        this.up = function (event) {
            if (that.isTouch) {
                // 全局总是引发的，判断一下
                that.isTouch = false;
                that.fn.call(this, new __WEBPACK_IMPORTED_MODULE_0__TouchMoveEvent__["a" /* TouchMoveEvent */](event, that.isTouch), that.target);
            }
        };
        this.move = function (event) {
            if (that.isTouch) {
                that.fn.call(this, new __WEBPACK_IMPORTED_MODULE_0__TouchMoveEvent__["a" /* TouchMoveEvent */](event, that.isTouch), that.target);
            }
        };
        // this.touchstart = function (event: SyntheticEvent<T>) {
        //     that.isTouch = true;
        //     that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        // };
        // this.touchend = this.touchcancel = function (event: SyntheticEvent<T>) {
        //     that.isTouch = false;
        //     that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        // };
        // this.touchmove = function (event: SyntheticEvent<T>) {
        //     if (that.isTouch) {
        //         that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        //     }
        // };
        // elem.ontouchmove=function(this:T,event:Event){
        //     if(that.isTouch)
        //     that.fn.call(this,event)
        // }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TouchMove;



/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TouchMoveEvent {
    constructor(e, isTouch) {
        this.isTouch = isTouch;
        this.targetEvent = e;
        if (e instanceof TouchEvent) {
            this.x = e.changedTouches[0].screenX;
            this.y = e.changedTouches[0].screenY;
            let target = document.elementFromPoint(this.x, this.y);
            if (e.target !== target) {
                // if(target.parentNode===e.target.parentNode)
                this.target = target;
            }
            else {
                this.target = e.target;
            }
        }
        else if (e instanceof MouseEvent || ('clientX' in e && 'clientY' in e)) {
            this.x = e.clientX;
            this.y = e.clientY;
            this.target = e.target;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TouchMoveEvent;



/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Helper_WebComponentSize__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Content_AffixBreadcrumb__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_CSS_G__ = __webpack_require__(18);





class Content extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    render() {
        let elseHeight = 192;
        // 如果屏幕宽度比内容宽度小，再减去滚动条高度
        if (this.props.layout && document.documentElement.clientWidth < this.props.layout.clientWidth) {
            elseHeight += __WEBPACK_IMPORTED_MODULE_2__Helper_WebComponentSize__["a" /* default */].scrollBarHeight;
        }
        const minHeight = document.documentElement.clientHeight - elseHeight;
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Layout.Content, { className: __WEBPACK_IMPORTED_MODULE_4_src_CSS_G__["a" /* G */].Class.map.clr_background },
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { style: { overflow: 'hidden' } },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__Content_AffixBreadcrumb__["a" /* default */], { page: this.props.page })),
            __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: __WEBPACK_IMPORTED_MODULE_4_src_CSS_G__["a" /* G */].Class.map.clr_background2, EClass: `pdip-12 minhdip-${minHeight} uofauto mdiplr-50` }, this.props.children)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Content;



/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Size;
(function (Size) {
    Size.scrollBarHeight = +function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }();
})(Size || (Size = {}));
/* harmony default export */ __webpack_exports__["a"] = (Size);


/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BreadcrumbItems__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_Clock__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CSS_G__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const logo = __webpack_require__(39);
let AffixBreadcrumb = class AffixBreadcrumb extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.eclassControl = new __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].AsyncEClass('box', 'box2');
        this.eclassControl2 = new __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].AsyncEClass('mdiplr-50 floatr', 'mdiptb-16');
        this.onChange = (affixed) => {
            this.eclassControl.setClass('box' + (affixed ? '1' : '2'));
            this.eclassControl2.setClass('mdiptb-' + (affixed ? '8' : '16'));
        };
    }
    render() {
        return [
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: this.eclassControl, className: "Affix" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Affix, { EClass: "affix", onChange: this.onChange /* 切换背景颜色左右边距 */ },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: "logo" }),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Breadcrumb, { separator: " - ", className: "Breadcrumb" },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__BreadcrumbItems__["a" /* default */], { key: "Breadcrumb", page: this.props.page }))))), (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: this.eclassControl2, className: __WEBPACK_IMPORTED_MODULE_4__CSS_G__["a" /* G */].Class.map.clr_primary },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__Components_Clock__["a" /* default */], null)))
        ];
    }
};
AffixBreadcrumb = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        box: [{
                '.Affix': 'float:left;',
                '.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].calcStyle({ transition: 'color .3s' })
            }],
        box1: [{
                '.Affix .logo': [`background-image:url(${logo});background-size:100%;transform:rotate(180deg);`, 'wem-4 hem-4 float'.split(' ')],
                '.Affix': 'padding-left:25px;',
                '.Affix .Breadcrumb': 'float:left;margin:8px 0;',
                '.Affix .ant-affix': 'left:0 !important;height:2.5em;background-color:rgba(0,0,0,0.75);border-bottom-right-radius:1em;',
                '.Affix,.Affix .Breadcrumb, .ant-breadcrumb-separator,.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': 'color:#fff;'
            }],
        box2: [{
                ' .logo': ['uof'.split(' ')],
                '.Affix': 'padding-left:50px;',
                '.Affix .Breadcrumb': 'float:left;margin:16px 0;',
                '.Affix>div': 'padding-right:5em;'
            }],
        affix: ['uof zidx-999 inline meml-7'.split(' ')]
    })
], AffixBreadcrumb);
/* harmony default export */ __webpack_exports__["a"] = (AffixBreadcrumb);


/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_min__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BreadcrumbItems = class BreadcrumbItems extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor(props) {
        super(props);
        this.breadcrumbItems = null;
        const page = this.props.page;
        page.onChangeBreadcrumbs = (breadcrumbs) => {
            this.change(breadcrumbs);
        };
        this.change([]);
    }
    change(breadcrumbs) {
        const page = this.props.page;
        const breadcrumbs0 = [page.menu.data[page.menu.index][0]];
        Array.prototype.push.apply(breadcrumbs0, breadcrumbs);
        this.breadcrumbItems = breadcrumbs0.map((v, i) => __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2_antd_min__["b" /* default */].Breadcrumb.Item, { key: i, className: "BreadcrumbItem" }, v));
    }
    render() {
        return this.breadcrumbItems;
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["a" /* observable */]
], BreadcrumbItems.prototype, "breadcrumbItems", void 0);
BreadcrumbItems = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["b" /* observer */]
], BreadcrumbItems);
/* harmony default export */ __webpack_exports__["a"] = (BreadcrumbItems);


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_index__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let App = class App extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.date = new Date();
    }
    // constructor(props: App['props']) {
    //     super(props);
    // }
    render() {
        return this.date.toLocaleTimeString();
    }
    tick() {
        this.date = new Date();
    }
    componentDidMount() {
        this.timerID = window.setInterval(() => this.tick(), 250);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["a" /* observable */]
], App.prototype, "date", void 0);
App = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx_index__["b" /* observer */]
], App);
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Project_Config__ = __webpack_require__(38);



const { Footer } = __WEBPACK_IMPORTED_MODULE_1_antd_min__["b" /* default */].Layout;
class App extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(Footer, { style: { textAlign: 'center' } },
            __WEBPACK_IMPORTED_MODULE_2__Project_Config__["a" /* default */].name,
            " \u00A92017 Created by \u529F\u592B\u8336\u732B"));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),

/***/ 547:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Mobx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Mobx__);

const observer = __WEBPACK_IMPORTED_MODULE_0_Mobx___default.a.observer;
/* harmony export (immutable) */ __webpack_exports__["b"] = observer;

const observable = __WEBPACK_IMPORTED_MODULE_0_Mobx___default.a.observable;
/* harmony export (immutable) */ __webpack_exports__["a"] = observable;



/***/ })

/******/ });
});
//# sourceMappingURL=App.js.map