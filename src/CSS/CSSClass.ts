import { isArray, isObject, isString, isFunction } from "src/Lib/is";

declare var window: {
    CSSClass?: typeof cssClassNS.CSSClass;
} & Window;
export const enum ECSSRuleSelector {
    Before = 1,
    After = 2,
    Active = 4,
    Hover = 8,
    Target = 16,
    Child = 32
}
export interface SelectorMap {
    [index: string]: number;

    bf: number;
    af: number;

    ac: number;
    hv: number;
    tg: number;

    bfac: number;
    afac: number;
    bfhv: number;
    afhv: number;
    bftg: number;
    aftg: number;

    chd: number;

    chdbf: number;
    chdaf: number;
    chdac: number;
    chdhv: number;
    chdtg: number;
    chdbfac: number;
    chdafac: number;
    chdbfhv: number;
    chdafhv: number;
    chdbftg: number;
    chdaftg: number;

}

export interface CSSRuleCallBack<T> {
    (this: T, index?: number, moreInfo?: string): string;
}

export type CSSRuleBase = CSSRuleCallBack<any> | (string[]) | string;
export type CSSRuleBaseEx = {
    [P in keyof SelectorMap]?: CSSRuleEx
};
export type CSSRule = CSSRuleBase[] | CSSRuleCallBack<any> | string;
export type CSSRuleEx = (CSSRuleBase | CSSRuleBaseEx)[] | CSSRuleCallBack<any> | string | CSSRuleBaseEx;
// const classNameRuleRE = /^(([\w_]+)(-(bf|af|ac|hv|chd|bfac|afac|bfhv|afhv|chdbf|chdaf|chdac|chdhv|chdbfac|chdbfhv|chdafhv))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;
const classNameRuleRE = /^(([\w_]+)(-(bf|af|ac|hv|tg|chd|bfac|afac|bfhv|afhv|bftg|aftg|chdbf|chdaf|chdac|chdhv|chdtg|chdbfac|chdbfhv|chdafhv|chdbftg|chdaftg))?(-(\d+))?(-([\w\_\#][\.\w\_\#\d]*))?)$/;
export interface CSSClassInfo {
    input: string; /* eclassname */
    name: string; /* 纯名字 */
    selector?: keyof SelectorMap; /* 选择器 */
    index?: number; /* 计数参数 */
    moreInfo?: string; /* 更多参数 */
}
export interface CSSClassData {
    textNode: Text;
    /* 选择器数组 */
    selectors: string[];
    /* 选择器映射表 */
    selectorsMap: Record<string, null>;
    rule: string;
}
function rightString(str: string, count: number) {
    return str.substr(str.length - count, count);
}
export interface RGB {
    R: number;
    G: number;
    B: number;
}
export interface RGBA extends RGB {
    A: number;
}
export function getRGBA(color: string): RGBA {
    const colorInt = Number('0x' + color);
    const colorAlphaInt = (0xFF000000 & colorInt) / 0xFF000000;
    const colorRedInt = (0xFF0000 & colorInt) / 0x10000;
    const colorGreenInt = (0xFF00 & colorInt) / 0x100;
    const colorBlueInt = 0xFF & colorInt;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt, A: colorAlphaInt };
}
export function getRGB(color: string): RGB {
    const colorInt = Number('0x' + color);
    const colorRedInt = (0xFF0000 & colorInt) / 0x10000;
    const colorGreenInt = (0xFF00 & colorInt) / 0x100;
    const colorBlueInt = 0xFF & colorInt;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt };
}
export function getRGBByArea(color1: RGB, color2: RGB, index: number, max: number): RGB {
    const persent = index / max;
    let colorRedInt = (((color2.R - color1.R) * persent) + color1.R) & 0xFF;
    let colorGreenInt = ((color2.G - color1.G) * persent + color1.G) & 0xFF;
    let colorBlueInt = ((color2.B - color1.B) * persent + color1.B) & 0xFF;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt };
}
export function getRGBAByArea(color1: RGBA, color2: RGBA, index: number, max: number): RGBA {
    const persent = index / max;
    let colorRedInt = (((color2.R - color1.R) * persent) + color1.R) & 0xFF;
    let colorGreenInt = ((color2.G - color1.G) * persent + color1.G) & 0xFF;
    let colorBlueInt = ((color2.B - color1.B) * persent + color1.B) & 0xFF;
    let colorAlphaInt = (((color2.A - color1.A) * persent + color1.A) & 0xFF) / 255;
    return { R: colorRedInt, G: colorGreenInt, B: colorBlueInt, A: colorAlphaInt };
}
export function getRGBAColorByArea(color1: string, color2: string, index: number, max: number): string {
    const color1RGBA = getRGBA(color1);
    const color2RGBA = getRGBA(color2);
    const color3RGBA = getRGBAByArea(color1RGBA, color2RGBA, index, max);
    return `rgba(${color3RGBA.R},${color3RGBA.G},${color3RGBA.B},${color3RGBA.A})`;
}
export function getRGBString(color: RGB) {
    const ret =
        rightString('0' + color.R.toString(16), 2) +
        rightString('0' + color.G.toString(16), 2) +
        rightString('0' + color.B.toString(16), 2);
    return '#' + ret;
}
export function getRGBA2String(color: RGBA) {

    return rightString('0' + Math.floor(color.A * 256).toString(16), 2) +
        rightString('0' + color.R.toString(16), 2) +
        rightString('0' + color.G.toString(16), 2) +
        rightString('0' + color.B.toString(16), 2);
}
export function getColorByArea(color1: string, color2: string, index: number, max: number): string {
    const color1RGB = getRGB(color1);
    const color2RGB = getRGB(color2);
    const color3RGB = getRGBByArea(color1RGB, color2RGB, index, max);
    return getRGBString(color3RGB);
}
export namespace cssClassNS {

    function createDictionaryObject<T>(): Record<string, T> {
        return Object.create(null);
    }
    export const cssClassSelectorMap: SelectorMap = {
        bf: ECSSRuleSelector.Before,
        af: ECSSRuleSelector.After,

        ac: ECSSRuleSelector.Active,
        hv: ECSSRuleSelector.Hover,
        tg: ECSSRuleSelector.Target,

        chd: ECSSRuleSelector.Child,

        bfac: ECSSRuleSelector.Before + ECSSRuleSelector.Active,
        afac: ECSSRuleSelector.After + ECSSRuleSelector.Active,
        bfhv: ECSSRuleSelector.Before + ECSSRuleSelector.Hover,
        afhv: ECSSRuleSelector.After + ECSSRuleSelector.Hover,
        bftg: ECSSRuleSelector.Before + ECSSRuleSelector.Target,
        aftg: ECSSRuleSelector.After + ECSSRuleSelector.Target,

        chdbf: ECSSRuleSelector.Before + ECSSRuleSelector.Child,
        chdaf: ECSSRuleSelector.After + ECSSRuleSelector.Child,

        chdac: ECSSRuleSelector.Active + ECSSRuleSelector.Child,
        chdhv: ECSSRuleSelector.Hover + ECSSRuleSelector.Child,
        chdtg: ECSSRuleSelector.Target + ECSSRuleSelector.Child,

        chdbfac: ECSSRuleSelector.Before + ECSSRuleSelector.Active + ECSSRuleSelector.Child,
        chdafac: ECSSRuleSelector.After + ECSSRuleSelector.Active + ECSSRuleSelector.Child,
        chdbfhv: ECSSRuleSelector.Before + ECSSRuleSelector.Hover + ECSSRuleSelector.Child,
        chdafhv: ECSSRuleSelector.After + ECSSRuleSelector.Hover + ECSSRuleSelector.Child,
        chdbftg: ECSSRuleSelector.Before + ECSSRuleSelector.Target + ECSSRuleSelector.Child,
        chdaftg: ECSSRuleSelector.After + ECSSRuleSelector.Target + ECSSRuleSelector.Child
    };
    export class CSSClass {
        static regExp = {
            keyName: /\.&/g
        };
        static global: CSSClass[] = [];
        static private: CSSClass[] = [];
        static all: CSSClass[] = [];
        static missingClass: Record<string, null> = {};
        static cssIDIndex = 0;
        private static priInstance: CSSClass | null = null;
        key: string;
        rule: Record<string, CSSRuleEx> = {}; // = createDictionaryObject<CSSRuleEx>()
        /* class结果列表 */
        private list = createDictionaryObject<CSSClassData[] | CSSClassData>();
        /* 类名映射表 */
        private classMap = createDictionaryObject<null>();
        private styleElement: HTMLStyleElement;
        static reMountAllStyle() {
            for (const item of this.global) {
                document.head.appendChild(item.styleElement);
            }
            for (const item of this.private) {
                if (item.isPrivate && CSS.global.length > 0) {
                    document.head.insertBefore(item.styleElement, CSS.global[0]!.styleElement);
                } else {
                    // document.head.insertBefore2(style!,$t.turtleScriptElement!);
                    document.head.appendChild(item.styleElement);
                }
            }
        }
        constructor(
            style?: HTMLStyleElement,
            public isPrivate: boolean = false/* 不允许被继承 */,
            public isNoExtendsGlobal: boolean = false/* 不从全局继承rule */,
            public isGlobalName: boolean = false/* 不加名字前缀 */,
            rule?: Record<string, CSSRuleEx>
        ) {
            if (!isGlobalName) {
                this.key = 'V' + CSS.newID;
            } else {
                this.key = '';
            }
            if (!style) {
                style = document.createElement('style');
                style.type = 'text/css';
                if (isPrivate) {
                    style.setAttribute('Private', '');
                }
                if (isNoExtendsGlobal) {
                    style.setAttribute('NoExtendsGlobal', '');
                }
                style.setAttribute('key', this.key);
                // setTimeout(function(){
                if (isPrivate && CSS.global.length > 0) {
                    document.head.insertBefore(style!, CSS.global[0]!.styleElement);
                } else {
                    // document.head.insertBefore2(style!,$t.turtleScriptElement!);
                    document.head.appendChild(style!);
                }
                // },100);
            }

            this.styleElement = style;
            CSS.all.push(this);
            if (!isPrivate) {
                CSS.global.push(this);
            } else {
                CSS.private.push(this);
            }
            if (rule) {
                this.registerClassRule(rule);
            }
        }
        extendsClassRule(rule: Record<string, CSSRuleEx>) {
            const thisRule: any = this.rule;
            const __proto__ = thisRule.__proto__;
            rule.__proto__ = __proto__;
            thisRule.__proto__ = rule;
        }
        getStyleByName(name: string) {
            if (name in this.classMap) {
                name = this.getNameByInfo(this.parseInfo(name)!, false);
                const cssClass = this.list[name];
                let str = '';
                if (isArray(cssClass)) {
                    for (const item of cssClass) {
                        str += item.textNode.data + '\n';
                    }
                } else {
                    str = cssClass.textNode.data;
                }
                return str;
            }
            return null;
        }
        registerClassRule<T extends CSSRuleEx>(
            nameOrRuleObject: string | Record<string, T>, rule?: CSSRule) {
            if (isObject(nameOrRuleObject)) {
                for (const key in (nameOrRuleObject as Record<string, T>)) {
                    this.registerClassRuleItem(key, nameOrRuleObject[key]);
                }
            } else if (rule !== undefined) {
                this.registerClassRuleItem(nameOrRuleObject, rule);
            } else {
                throw new Error('未提供rule参数！');
            }
        }

        getNameByInfo(info: CSSClassInfo, hasSelector: boolean = true) {
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
        registerClass(name: string, selector?: keyof SelectorMap) {
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
            let className: string | undefined;

            if (this.getNameByInfo(info, false) in this.list) {
                // 如果已经加了，检查selector
                className = this.addSelector(info);
            } else {
                // 创建一个
                className = this.create(info);
            }
            return className;
        }
        updateRule(ruleList: Record<string, CSSRuleEx>) {
            for (const key in ruleList) {
                const rule = ruleList[key];
                const oldRule = this.getRule(key);
                oldRule.map[key] = rule;
                this.updateClass(key);
            }
        }
        updateClass(name: string) {
            const info = this.parseInfo(name);
            if (!info) {
                console.warn(new Error('can\' t update class \'' + name + '\',because unknown.'));
                return;
            }
            let className: string | undefined;
            if (this.getNameByInfo(info, false) in this.list) {
                // 如果已经加了，update
                className = this.updateSelector(info);
            } else {
                // 创建一个
                className = this.create(info);
            }
            return className;
        }
        /**
         * 解析出class数组，解析出的新class会立即注册到style
         * @param clses eclass like pdip-1,mdip-1
         */
        parse(clses: string, selector?: keyof SelectorMap) {

            const clsList = clses.split(/\s+/);
            const clsNames: string[] = [];
            for (let cls of clsList) {
                if (cls !== '') {
                    const className = this.registerClass(cls, selector);
                    if (className) {
                        clsNames.push(className);
                    } else {
                        console.warn('cssClass:' + cls + ' can\'t be parse!');
                    }

                }
            }
            return clsNames;
        }
        clear() {
            this.styleElement.innerHTML = '';
            this.list = createDictionaryObject<CSSClassData[] | CSSClassData>();
            this.classMap = createDictionaryObject<null>();
        }
        /**
         * 更新全部内容
         * @param info 
         */
        updateAllSelector() {
            // 获取旧的所有class
            const oldMap = createDictionaryObject<null>();
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
        updateSelector(info: CSSClassInfo) {
            const name = this.getNameByInfo(info, false);
            if (name in this.list) {
                const item = this.list[name];
                delete this.list[name];
                if (isArray(item)) {
                    for (const innerItem of item) {
                        innerItem.textNode.remove();
                    }
                } else {
                    item.textNode.remove();
                }
            }
            return this.create(info);
        }
        getCSSClassDataByName(name: string) {
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
        addSelector(info: CSSClassInfo) {
            const item = this.list[this.getNameByInfo(info, false)];
            if (isArray(item)) {
                for (const innerItem of item) {
                    this.doAddSelector(innerItem, info);
                }
            } else {
                this.doAddSelector(item, info);
            }
            return this.key + info.input;
        }

        /**
         * 设置样式内容:seletor{ ...  }
         */
        makeStyleString(item: CSSClassData) {
            item.textNode.data = `${item.selectors.join(',')}{${item.rule}}`;
        }

        getRuleString(rule: CSSRuleBase, ruleMap: Record<string, CSSRule>, info: { index?: number, moreInfo?: string }) {
            let strRule: string;
            if (isArray(rule)) {
                // 合并
                strRule = this.getRuleStringByArray(rule, ruleMap, info);
            } else if (isString(rule)) {
                strRule = rule;
            } else {
                strRule = rule.call(ruleMap, info.index, info.moreInfo);
            }
            return strRule;
        }
        getRuleStringByArray(rules: CSSRuleBase[], ruleMap: Record<string, CSSRuleEx>, info: { index?: number, moreInfo?: string }) {
            let strRule: string = `/* ${rules.length} in 1 */`;
            // 合并
            for (const rule of rules) {
                if (isString(rule)) {
                    const subInfo = this.parseInfo(rule);
                    if (subInfo) {
                        const ruleInfo = this.getRule(subInfo.name);
                        const subRule = ruleInfo.rule;
                        const map = ruleInfo.map;
                        if (subRule) {
                            strRule += '\n  /*from ' + subInfo.input + '*/\n  ' + this.getRuleString(subRule as any, map as any, subInfo);
                        }
                    } else {
                        strRule += '\n  /*from ' + rule + '*/\n\n';
                        CSS.missingClass[rule] = null;
                    }
                } else if (isArray(rule)) {
                    strRule += this.getRuleStringByArray(rule, ruleMap, info);
                }
            }
            return strRule;
        }

        create(info: CSSClassInfo) {
            const { rule, map, cssClass } = this.getRule(info.name);

            if (!rule) {
                this.list[this.getNameByInfo(info, false)] = this.doCreate(cssClass.styleElement, '', info);
            } else if (isArray(rule)) {
                this.list[this.getNameByInfo(info, false)] = this.createByArray(cssClass.styleElement, map, rule, info);
            } else if (isString(rule)) {
                this.list[this.getNameByInfo(info, false)] = this.doCreate(cssClass.styleElement, rule, info);
            } else if (isFunction(rule)) {
                this.list[this.getNameByInfo(info, false)] = this.doCreate(cssClass.styleElement, this.getRuleString(rule, map as any, info), info);
            } else {
                this.list[this.getNameByInfo(info, false)] = this.createByObject(cssClass.styleElement, map, rule, info);
            }

            this.classMap[info.input] = null;
            return this.key + info.input;

        }
        replace(elem: HTMLElement, oldClass: string, newClass: string) {
            if (elem && oldClass && newClass) {
                oldClass = this.key + oldClass;
                newClass = this.key + newClass;
                elem.className = elem.className.replace(oldClass, newClass);
            }
        }
        removeArray(elem: HTMLElement, clses: string[]) {
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
        remove(elem: HTMLElement, ...clses: string[]) {
            this.removeArray(elem, clses);
        }
        addArray(elem: HTMLElement, clses: string[]) {
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
        add(elem: HTMLElement, ...clses: string[]) {
            this.addArray(elem, clses);
        }
        getRule(ruleName: string) {
            let rule = this.rule[ruleName];
            let map = this.rule;
            let thatCssClass: CSSClass = this;
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
            return {
                map: map,
                rule: rule,
                cssClass: thatCssClass
            };
        }
        registerClassRuleItem(name: string, rule: CSSRuleEx) {
            // if (name in this.rule) {
            //     console.log(name + ' be replaced by ' + JSON.stringify(rule));
            // }
            this.rule[name] = rule;
        }
        /**
         * 从eclass名字中解析出有用信息
         * @param name 
         */
        private parseInfo(name: string): CSSClassInfo | null {
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
                selector: match[4] as any,
                index: idx,
                moreInfo: match[8]
            };
        }
        /**
         * 获取伪类等后缀
         * @param selector 
         */
        private getSelectorSuffix<T extends keyof SelectorMap>(selector: T) {
            if (!(selector in cssClassSelectorMap)) {
                const key = '.' + this.key;
                const selectorList = selector.split(',').map(v => v.replace(CSSClass.regExp.keyName, key));
                return selectorList;
            }
            const selectorEnum = cssClassSelectorMap[selector];

            let selectorSuffix: string = '';
            if (selectorEnum & ECSSRuleSelector.Child) {
                // selectorName+='in';
                selectorSuffix += '>*';
            }
            if (selectorEnum & ECSSRuleSelector.Active) {
                // selectorName+='ac';
                selectorSuffix += ':active';
            }
            if (selectorEnum & ECSSRuleSelector.Hover) {
                // selectorName+='hv';
                selectorSuffix += ':hover';
            }
            if (selectorEnum & ECSSRuleSelector.Target) {
                // selectorName+='tg';
                selectorSuffix += ':target';
            }
            if (selectorEnum & ECSSRuleSelector.Before) {
                // selectorName+='bf';
                selectorSuffix += '::before';
            }
            if (selectorEnum & ECSSRuleSelector.After) {
                // selectorName+='af';
                selectorSuffix += '::after';
            }

            return selectorSuffix;
        }
        private getClassNameBySuffix(info: CSSClassInfo, suffix: string | string[]) {
            if (isArray(suffix)) {
                return info.input + suffix.join('\n,.' + this.key + info.input);
            } else {
                return info.input + suffix;
            }
        }
        /**
         * 
         * @param info 
         */
        private getClassNameByInfo(info: CSSClassInfo) {

            if (info.selector) {

                return this.getClassNameBySuffix(info, this.getSelectorSuffix(info.selector));
            }
            return info.input;

        }

        /**
         * 添加更多选择器或更新内容
         * @param info 
         */
        private doAddSelector(item: CSSClassData, info: CSSClassInfo) {
            const className = this.getClassNameByInfo(info);
            if (!(className in item.selectorsMap)) {
                // 如果未添加此selector,先添加;
                item.selectors.push('.' + this.key + className);
                item.selectorsMap[className] = null;
                this.classMap[info.input] = null;
                this.makeStyleString(item);
            }
        }
        private createByArrayItemNoObject(map: Record<string, CSSRuleEx>, rule: CSSRuleBase | CSSRuleBaseEx, info: CSSClassInfo, items: CSSClassData[]) {
            let strRule;
            if (isArray(rule)) {
                // 寻找rule，再次解析
                strRule = this.getRuleStringByArray(rule, map, info);
            } else if (isString(rule)) {
                // 直接生成一个字符串
                strRule = rule;
            } else if (isFunction(rule)) {
                strRule = rule.call(map, info.index, info.moreInfo);
            }
            return strRule;
        }
        private createByArrayItem(styleElement: HTMLStyleElement, map: Record<string, CSSRuleEx>, rule: CSSRuleBase | CSSRuleBaseEx, info: CSSClassInfo, items: CSSClassData[]) {
            if (isArray(rule)) {
                // 寻找rule，再次解析
                return this.getRuleStringByArray(rule, map, info);
            } else if (isString(rule)) {
                // 直接生成一个字符串
                return rule;
            } else if (isFunction(rule)) {
                return rule.call(map, info.index, info.moreInfo);
            } else {
                // 从对象中解析后者
                for (let key in rule) {
                    let strRule: string;
                    const subRule = rule[key]!;
                    if (isArray(subRule)) {
                        strRule = '';
                        for (const subRule2 of subRule) {
                            strRule += this.createByArrayItemNoObject(map, subRule2, info, items);
                        }
                    } else if (isString(subRule)) {
                        // 直接生成一个字符串
                        strRule = subRule;
                    } else if (isFunction(subRule)) {
                        strRule = subRule.call(map, info.index, info.moreInfo);
                    } else {
                        strRule = '';
                    }
                    items.push(this.doCreate(styleElement, strRule, info, this.getClassNameBySuffix(info, this.getSelectorSuffix(key))));
                }

                return '';
            }
        }
        private createByArray(styleElement: HTMLStyleElement, map: Record<string, CSSRuleEx>, rule: (CSSRuleBase | CSSRuleBaseEx)[], info: CSSClassInfo) {
            let strRule = '';
            const items: CSSClassData[] = [];
            for (const subRule of rule) {
                strRule += this.createByArrayItem(styleElement, map, subRule, info, items);
            }
            items.push(this.doCreate(styleElement, strRule, info));
            return items;
            // this.doCreate(strRule,info,this.getClassNameByInfo(info));
        }
        private doCreate(styleElement: HTMLStyleElement, rule: string, info: CSSClassInfo, className: string = this.getClassNameByInfo(info)) {
            const textNode = document.createTextNode('');
            const item: CSSClassData = {
                textNode: textNode,
                selectors: ['.' + this.key + className],
                selectorsMap: { [className]: null },
                rule: rule
            };
            this.makeStyleString(item);
            styleElement.appendChild(textNode);
            return item;
        }
        private createByObject(styleElement: HTMLStyleElement, map: Record<string, CSSRuleEx>, rule: CSSRuleBaseEx, info: CSSClassInfo) {
            let key: string;
            const items: CSSClassData[] = [];
            for (key in rule) {
                const subRule: CSSRuleBase = rule[key]! as any;
                items.push(this.doCreate(
                    styleElement,
                    this.getRuleString(subRule, map as any, info),
                    info,
                    this.getClassNameBySuffix(info, this.getSelectorSuffix(key)))
                );
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
}

if (window.CSSClass === undefined) {
    window.CSSClass = cssClassNS.CSSClass;
}
export var CSS = window.CSSClass;
