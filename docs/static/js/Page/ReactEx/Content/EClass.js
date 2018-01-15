(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 593);
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AddEntryComponent;
function AddEntryComponent(name, pageName, ctor) {
    const global = window;
    const page = global.Page || (global.Page = {});
    const index = page[pageName] || (page[pageName] = {});
    const content = index.Content || (index.Content = {});
    content[name] = ctor;
}


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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = entry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_Page_EntryComponent__ = __webpack_require__(20);
// import React from 'react-ex';

// declare class CPN extends React.Component<any, any> { }
const Key = 'ReactEx';
/* harmony export (immutable) */ __webpack_exports__["a"] = Key;

function entry(ctor) {
    Object(__WEBPACK_IMPORTED_MODULE_0_src_Page_EntryComponent__["a" /* default */])(ctor.name, Key, ctor);
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

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(594);


/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_PlayGround__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Entry__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let EClass = class EClass extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        this.playGroundData = __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].hookCreateElement(() => {
            return this.renderReactNode(() => (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "box" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u5982\u679C"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, ","),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u6211\u662FDJ"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, ","),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u4F60\u4F1A\u7231\u6211\u5417"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "?"))));
        });
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1__Components_PlayGround__["a" /* default */], { source: this.playGroundData.source, sourceMaxHeight: 300, cssClass: this.cssClass }, this.playGroundData.result));
    }
};
EClass = __decorate([
    __WEBPACK_IMPORTED_MODULE_2__Entry__["b" /* default */],
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        box: [
            ['pdip-10', 'ladip', 'rdip-20', 'bg-gray', 'inline'],
            {
                chd: [['mdip-5', 'pdip-5', 'rdip-5', 'bg-blue', 'f-gray', 'inline']]
            }
        ]
    })
], EClass);
/* harmony default export */ __webpack_exports__["default"] = (EClass);


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CSS_G__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_Lib_is__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_Lib_highlightStyle__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let App = class App extends __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].Component {
    constructor() {
        super(...arguments);
        /* 数据源用到的所有eclass */
        this.eclassList = this.getEclassList(this.props.source);
        /* 放在pre里显示的数据源的html演示数据 */
        this.htmlSource = this.reductionReactNode(this.props.source);
        this.styleDest = this.eclassList.map(eclass => {
            const styleString = this.props.cssClass.getStyleByName(eclass);
            if (styleString !== null) {
                return styleString;
            }
            return '';
        }).join('\n').split('\n');
        /* 放在pre里显示的数据结果的html演示数据 */
        this.htmlDest = this.reductionReactNode(this.props.children).replace(/className=\{(.*?)\}/g, 'class=$1');
        /* 样式 */
        this.previewEClass = `${this.props.sourceMaxHeight ? ' maxhdip-' + this.props.sourceMaxHeight : ''}`;
        this.elemCodeSource = this.getCodeNode(this.htmlSource);
        this.previewRule = this.eclassList.map(eclass => {
            const ruleInfo = this.props.cssClass.getRule(eclass);
            if (ruleInfo === null) {
                return '';
            }
            return this.format({ [eclass]: ruleInfo.rule });
        }).join('\n').split('\n');
        this.elemCodeDest = this.getCodeNode(this.htmlDest);
    }
    /* 格式化JSON源码(对象转换为JSON文本) */
    format(obj, compress /*是否为压缩模式*/) {
        const draw = [];
        this.notify('', obj, true, 0, false, {
            line: compress ? '' : '\n',
            indentChar: '  ',
            nodeCount: 0,
            maxDepth: 0,
            draw: draw,
            compress: compress
        });
        let str = draw.join('')
            .replace(/",\n\s*"/g, '","')
            .replace(/\[\n\s*?("|\[)/g, '[$1')
            .replace(/("|\])\n\s*?\]/g, '$1]')
            .replace(/\[\n\s*?("|\[)/g, '[$1')
            .replace(/("|\])\n\s*?\]/g, '$1]');
        return str;
    }
    render() {
        this.cssClass.parse('pre code1 code2'); // 显式让pre被覆盖
        const styleString = this.getCodeNode2(this.styleDest, __WEBPACK_IMPORTED_MODULE_3_src_Lib_highlightStyle__["c" /* highlightStyleLine */]).join('');
        const ruleString = this.getCodeNode2(this.previewRule, __WEBPACK_IMPORTED_MODULE_3_src_Lib_highlightStyle__["a" /* highlightString */]).join('');
        return [
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: "ant-col-12" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u524D"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "box", className: __WEBPACK_IMPORTED_MODULE_1__CSS_G__["a" /* G */].Class.map.frm_border },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u6837\u5F0Frule"),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: 'scroll ' + this.previewEClass },
                        __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("pre", { key: "rule", EClass: "pre", dangerouslySetInnerHTML: { __html: ruleString } })),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "dom"),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("pre", { EClass: this.previewEClass + ' pre' }, this.elemCodeSource)))),
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { className: "ant-col-12" },
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u540E"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "box", className: __WEBPACK_IMPORTED_MODULE_1__CSS_G__["a" /* G */].Class.map.frm_border },
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u6837\u5F0Fstyle"),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: 'scroll ' + this.previewEClass }, this.styleDest !== null && (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("pre", { key: "style", EClass: "pre", dangerouslySetInnerHTML: { __html: styleString } }))),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "dom"),
                    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("pre", { EClass: this.previewEClass + ' pre' }, this.elemCodeDest)))),
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("br", null)),
            (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", null, "\u6E32\u67D3\u7ED3\u679C"),
                __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("div", { EClass: "box2" }, this.props.children)))
        ];
    }
    notify(name, value, isLast, indent /*缩进*/, formObj, setup) {
        setup.nodeCount++;
        /*节点计数*/
        for (var i = 0, tab = ''; i < indent; i++) {
            tab += setup.indentChar; /* 缩进HTML */
        }
        tab = setup.compress ? '' : tab; /*压缩模式忽略缩进*/
        setup.maxDepth = ++indent; /*缩进递增并记录*/
        if (value && value.constructor === Array) {
            setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + '[' + setup.line); /*缩进'[' 然后换行*/
            for (let k = 0; k < value.length; k++) {
                this.notify(k, value[k], k === value.length - 1, indent, false, setup);
            }
            setup.draw.push(tab + ']' + (isLast ? setup.line : (',' + setup.line))); /*缩进']'换行,若非尾元素则添加逗号*/
        }
        else if (value && typeof value === 'object') {
            setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + '{' + setup.line); /*缩进'{' 然后换行*/
            let len = Object.keys(value).length, j = 0;
            for (let key in value) {
                this.notify(key, value[key], ++j === len, indent, true, setup);
            }
            setup.draw.push(tab + '}' + (isLast ? setup.line : (',' + setup.line))); /*缩进'}'换行,若非尾元素则添加逗号*/
        }
        else {
            if (typeof value === 'string') {
                value = '"' + value + '"';
            }
            setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + value + (isLast ? '' : ',') + setup.line);
        }
    }
    getCodeNode2(strArr, fn) {
        const cssKey = this.cssClass.key;
        const code1 = cssKey + 'code1';
        const code2 = cssKey + 'code2';
        let codeStep = 1;
        const ret = [];
        for (let itm of strArr) {
            if (itm.length === 0) {
                break;
            }
            if (fn) {
                itm = fn(itm);
            }
            if (codeStep === 1) {
                ret.push(`<code class="${code1}">${itm}</code>`);
            }
            else {
                ret.push(`<code class="${code2}">${itm}</code>`);
            }
            codeStep = 3 - codeStep;
        }
        return ret;
    }
    getCodeNode(str, fn) {
        return str.split('\n').map((itm, idx) => {
            if (fn) {
                itm = fn(itm);
            }
            if (idx % 2 === 1) {
                return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("code", { style: { backgroundColor: 'rgba(0,0,0,0.025)' } }, itm));
            }
            else {
                return (__WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].createElement("code", { style: { backgroundColor: 'rgba(0,0,0,0.05)' } }, itm));
            }
        });
    }
    reductionReactNode(chd, space = 0) {
        let html = '';
        if (chd) {
            const spaceHTML = new Array(space + 1).join(' ');
            if (Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_is__["a" /* isArray */])(chd)) {
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    html += this.reductionReactNode(itm, space);
                }
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_is__["e" /* isStringNumberBoolean */])(chd)) {
                const str = String(chd);
                if (str.length > 20) {
                    html += spaceHTML + chd + '\n';
                }
                else {
                    html += chd;
                }
            }
            else {
                if ('type' in chd) {
                    const type = chd.type;
                    if (Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_is__["b" /* isFunction */])(type)) {
                        html += spaceHTML + '<' + type.name;
                    }
                    else {
                        html += spaceHTML + '<' + type;
                    }
                    if ('props' in chd) {
                        const props = chd.props;
                        Object.keys(props).forEach((key) => {
                            if (key !== 'children') {
                                html += ' ' + key + `={${JSON.stringify(props[key])}}`;
                            }
                        });
                        // html += ' {...props}'/* (chd as any).props */;
                        if ('children' in props) {
                            html += '>';
                            const str = this.reductionReactNode(props.children, space + 4);
                            if (str === '') {
                                html += ' />\n';
                            }
                            else {
                                if (str.length > 20) {
                                    html += '\n' + str + spaceHTML;
                                }
                                else {
                                    html += str;
                                }
                                if (Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_is__["b" /* isFunction */])(type)) {
                                    html += '</' + type.name + '>\n';
                                }
                                else {
                                    html += '</' + type + '>\n';
                                }
                            }
                        }
                        else {
                            html += ' />\n';
                        }
                    }
                }
            }
        }
        return html;
    }
    getEclassList(chd) {
        const eclassList = [];
        if (chd) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_is__["a" /* isArray */])(chd)) {
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    Array.prototype.push.apply(eclassList, this.getEclassList(itm));
                }
            }
            else if (!Object(__WEBPACK_IMPORTED_MODULE_2_src_Lib_is__["e" /* isStringNumberBoolean */])(chd)) {
                if ('type' in chd) {
                    if ('props' in chd) {
                        const props = chd.props;
                        if ('EClass' in props) {
                            eclassList.push.apply(eclassList, props.EClass.split(/ +/g));
                        }
                        if ('children' in props) {
                            eclassList.push.apply(eclassList, this.getEclassList(props.children));
                        }
                    }
                }
            }
        }
        return eclassList;
    }
};
App = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_react_ex__["a" /* default */].eclass({
        box: [
            'mdip-5 pdip-5 bd-12-gray'.split(' ')
        ],
        pre: [
            'inline minw-100 mdipb-0'.split(' '),
            {
                chd: 'display:block;'
            }
        ],
        code1: ['background-color:rgba(0,0,0,0.025);'],
        code2: ['background-color:rgba(0,0,0,0.05);'],
        box2: ['box pdip-15 minhem-10'.split(' ')]
    })
], App);
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=EClass.js.map