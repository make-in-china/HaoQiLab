import * as _React from 'react';
import { CSS, cssClassNS, CSSRuleEx } from '../CSS/CSSClass';
import { calcStyle } from 'src/CSS/CalcStyle';
import { isString } from 'src/Lib/is';
import { ReactNode } from 'react';

namespace ReactEx {
    type ComponentClass<P = any> =
        | React.StatelessComponent<P>
        | React.ComponentClass<P>
        | React.ClassicComponentClass<P>
        | {
            prototype: {
                render: () => ReactNode
            }
        };
    let renderCSSClass: cssClassNS.CSSClass = CSS.instance;
    let isHookCreateElement = false;
    let createElementReactNodes: {
        type: JSX.Element | string,
        props: EClassProps & { className?: string, children?: React.ReactNode[] } | undefined,

    }[] = [];
    // const _ReactcreateElement = _React.createElement;
    // function isObject(a: any): a is string {
    //     return '[object Object]' === Object.prototype.toString.call(a);
    // }
    export function createElement(type: JSX.Element | string, props?: Record<string, any>, ...children: React.ReactNode[]) {
        if (isHookCreateElement) {
            let chds: React.ReactNode[] | undefined = undefined;
            if (children.length > 0) {
                chds = [];
                for (let i = 0; i < children.length; i++) {
                    if (isString(children[i])) {
                        chds.push(children[i]);
                    } else {
                        chds.push(createElementReactNodes[createElementReactNodes.length - children.length + i]);
                    }
                }
            }
            createElementReactNodes.push({
                type: type,
                props: { ...props, children: chds },
            });
        }
        if (props) {
            const eClass: string | AsyncEClass = props.EClass;
            if (eClass !== undefined) {
                const cssClass = renderCSSClass;
                if (isString(eClass)) {
                    if (eClass.trim() !== '') {
                        const clses = cssClass.parse(eClass);
                        if (props.className === undefined) {
                            props.className = clses.join(' ');
                        } else {
                            props.className += ' ' + clses.join(' ');
                        }
                        delete props.EClass;
                    }
                } else if ('setClass' in eClass) {
                    // 加ref
                    let oldRef: Function | undefined = undefined;
                    if ('ref' in props) {
                        oldRef = props.ref;
                    }
                    props.ref = function (instance: HTMLElement | null) {
                        // 在ref里设置instance
                        eClass.instance = instance;
                        if (oldRef) {
                            oldRef(instance);
                        }
                    };

                    let oldList: string[] | undefined;
                    eClass.onChange = function (newEClass: string) {
                        const elem = eClass.instance;
                        let clsList: string[] | undefined = undefined;
                        if (elem) {
                            clsList = cssClass.parse(newEClass);
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
                        const fixedClsList = cssClass.parse(eClass.fixedClass);
                        if (props.className === undefined) {
                            props.className = fixedClsList.join(' ');
                        } else {
                            props.className += ' ' + fixedClsList.join(' ');
                        }
                    }
                    if (eClass.defaultClass.trim() !== '') {
                        oldList = cssClass.parse(eClass.defaultClass);
                        if (props.className === undefined) {
                            props.className = oldList.join(' ');
                        } else {
                            props.className += ' ' + oldList.join(' ');
                        }
                    }
                    delete props.EClass;

                }

            }
            for (const v in cssClassNS.cssClassSelectorMap) {
                const vEClass = props['EClass-' + v];
                if (vEClass) {
                    const clses = renderCSSClass.parse(vEClass, v as any);
                    if (props.className === undefined) {
                        props.className = clses.join(' ');
                    } else {
                        props.className += ' ' + clses.join(' ');
                    }
                    delete props['EClass-' + v];
                }
            }
        }
        return _React.createElement.apply(_React, arguments);
    }
    // Object.defineProperty(_React, 'createElement', { value: createElement });
    export interface EClassProps {
        EClass?: string;
        ['EClass-bf']?: string;
        ['EClass-af']?: string;
        ['EClass-ac']?: string;
        ['EClass-hv']?: string;
        ['EClass-bfac']?: string;
        ['EClass-afac']?: string;
        ['EClass-bfhv']?: string;
        ['EClass-afhv']?: string;
        ['EClass-chd']?: string;
        ['EClass-chdbf']?: string;
        ['EClass-chdaf']?: string;
        ['EClass-chdac']?: string;
        ['EClass-chdhv']?: string;
        ['EClass-chdbfac']?: string;
        ['EClass-chdafac']?: string;
        ['EClass-chdbfhv']?: string;
        ['EClass-chdafhv']?: string;
    }

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
    export class AsyncEClass {
        instance: HTMLElement | null;
        onChange?: (this: AsyncEClass, newClass: string) => void;
        constructor(public fixedClass: string, public defaultClass: string) { }
        setClass(newClass: string) {
            if (this.onChange) {
                this.onChange(newClass);
            }

        }
    }
    /**
     * 注册eclass
     * @param rule 
     * @param isPrivate 
     * @param isExtendsGlobal 
     * @param isGlobalName 
     */
    export function eclass(
        rule: Record<string, CSSRuleEx>,
        isPrivate: boolean = true/* true 不允许被继承 ; false 允许*/,
        isExtendsGlobal: boolean = false/* false 不从全局继承rule ;true 继承*/,
        isGlobalName: boolean = false/* false 不加名字前缀 ; true 加*/
    ) {
        return function <T extends ComponentClass>(ctor: T) {
            const render = ctor.prototype.render;
            (ctor as any).cssClass = new cssClassNS.CSSClass(undefined, isPrivate, isExtendsGlobal, isGlobalName, rule);
            ctor.prototype.render = function (this: Component) {
                const oldcssClass = renderCSSClass;
                renderCSSClass = this.cssClass!;
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
    export interface CreateElementHookCallBack {
        (type: string, props?: EClassProps & { className?: string }, ...children: React.ReactNode[]): React.ReactNode;
    }

    export function hookCreateElement(cb: () => React.ReactNode) {
        isHookCreateElement = true;
        createElementReactNodes = [];
        const reactNode = cb();
        isHookCreateElement = false;
        const source = createElementReactNodes.pop()!;

        return {
            source: source,
            result: reactNode
        };
    }
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
    export class Component<P = {}, S = {}> extends _React.Component<P, S> {
        static cssClass?: cssClassNS.CSSClass;
        private instanceCssClass?: cssClassNS.CSSClass;
        get cssClass(): cssClassNS.CSSClass {

            if (this.instanceCssClass) {
                return this.instanceCssClass;
            }
            const cssClass = (this.constructor as typeof Component).cssClass;
            if (cssClass) {
                return cssClass;
            }
            return cssClassNS.CSSClass.instance;
        }
        set cssClass(v: cssClassNS.CSSClass) {
            this.instanceCssClass = v;
        }
        renderReactNode(fn: (this: void) => React.ReactNode) {
            if (this.cssClass) {
                const oldcssClass = renderCSSClass;
                renderCSSClass = this.cssClass;
                const result = fn();
                renderCSSClass = oldcssClass;
                return result;
            } else {
                return fn();
            }
        }

    }
}
export function css(x: any, ...args: any[]) {
    var arr = [x[0]];
    for (var i = 0; i < args.length; i++) {
        arr.push(args[i]);
        arr.push(x[i + 1]);
    }
    return arr.join('');
}
export default { ..._React, ...ReactEx, calcStyle: calcStyle };
if (_React === undefined) {
    alert('未导入React');
}
