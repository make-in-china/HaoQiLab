import * as _React from 'react';
import { CSS, cssClassNS } from '../CSS/CSSClass';
import * as ReactDOM from 'react-dom';
namespace ReactEx {
    let renderCSSClass: cssClassNS.CSSClass = CSS.instance;
    let isHookCreateElement = false;
    let createElementReactNodes: {
        type: JSX.Element|string,
        props: EClassProps & { className?: string, children?: React.ReactNode[] } | undefined,

    }[] = [];
    const _ReactcreateElement = _React.createElement;
    Object.defineProperty(_React, 'createElement', {
        value: function (
            type: JSX.Element|string,
            props?: EClassProps & { className?: string },
            ...children: React.ReactNode[]) {
            if (isHookCreateElement) {
                createElementReactNodes.push({
                    type: type,
                    props: { ...props, children },
                });
            }
            if (props) {
                if (props.EClass !== undefined && props.EClass.trim() !== '') {
                    const clses = renderCSSClass.parse(props.EClass);
                    if (props.className === undefined) {
                        props.className = clses.join(' ');
                    } else {
                        props.className += ' ' + clses.join(' ');
                    }
                    delete props.EClass;
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
            return _ReactcreateElement.apply(_React, arguments);
        }
    });
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
    export function calcStyle(style: React.CSSProperties) {
        let str: string | null = null;
        ReactDOM.render(
            _React.createElement('div', {
                // tslint:disable-next-line:typedef
                ref: function (elem) {
                    str = elem!.style.cssText;
                },
                style: style
            }),
            document.createElement('div')
        );
        return function () {
            return str ? str : '';
        };
    }
    /* 注册私有eclass并立即写入到style */
    export function estyle(
        rule: Record<string, cssClassNS.CSSRuleEx>,
        isNoExtendsGlobal: boolean = false/* false 不从全局继承rule ;true 继承*/) {
        const cssClass = new cssClassNS.CSSClass(undefined, true, isNoExtendsGlobal, true, rule);
        return function (ctor: any) {
            for (const key in rule) {
                cssClass.registerClass(key);
            }
        };
    }
    /**
     * 注册eclass
     * @param rule 
     * @param isPrivate 
     * @param isNoExtendsGlobal 
     * @param isGlobalName 
     */
    export function eclass(
        rule: Record<string, cssClassNS.CSSRuleEx>,
        isPrivate: boolean = true/* true 不允许被继承 ; false 允许*/,
        isNoExtendsGlobal: boolean = false/* false 不从全局继承rule ;true 继承*/,
        isGlobalName: boolean = false/* false 不加名字前缀 ; true 加*/) {
        const cssClass = new cssClassNS.CSSClass(undefined, isPrivate, isNoExtendsGlobal, isGlobalName, rule);
        return function (ctor: any) {
            const render = ctor.prototype.render;
            ctor.cssClass = cssClass;
            ctor.prototype.render = function () {
                const oldcssClass = renderCSSClass;
                renderCSSClass = cssClass;
                const result = render.call(this);
                renderCSSClass = oldcssClass;
                return result;
            };
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
        return {
            source: createElementReactNodes.pop()!,
            result: reactNode
        };
    }
    export class Component<P = {}, S = {}> extends _React.Component<P, S> {
        static cssClass?: cssClassNS.CSSClass;
        static renderReactNode(fn: (this: void) => React.ReactNode) {
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

        /* hook createElement */
        // constructor(props: _React.Component['props']) {
        //     const propsEClass = props.EClass;
        //     if (propsEClass) {
        //         delete props.EClass;
        //         const arrClass = Component.cssClass!.parse(propsEClass);
        //         debugger;
        //         props.className = props.className + ' ' + arrClass.join(' ');
        //     }
        //     super(props as any);
        // }
    }
}
export default { ..._React, ...ReactEx };
if (_React === undefined) {
    alert('未导入React');
}