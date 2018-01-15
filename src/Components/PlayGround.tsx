import React from 'react-ex';
import { cssClassNS } from 'src/CSS/CSSClass';
import { G } from '../CSS/G';
import { isArray, isStringNumberBoolean, isFunction } from 'src/Lib/is';
import { highlightStyleLine, highlightString } from 'src/Lib/highlightStyle';

@React.eclass({
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
export default class App
    extends React.Component<{
        source: {
            type: string | JSX.Element;
            props: { children?: React.ReactNode[] } | undefined;
        }
        sourceMaxHeight?: number
        cssClass: cssClassNS.CSSClass
    }> {
    /* 数据源用到的所有eclass */
    private eclassList = this.getEclassList(this.props.source);

    /* 放在pre里显示的数据源的html演示数据 */
    private htmlSource = this.reductionReactNode(this.props.source);

    private styleDest = this.eclassList.map(eclass => {
        const styleString = this.props.cssClass.getStyleByName(eclass);
        if (styleString !== null) {
            return styleString;
        }
        return '';
    }).join('\n').split('\n');

    /* 放在pre里显示的数据结果的html演示数据 */
    private htmlDest = this.reductionReactNode(this.props.children).replace(/className=\{(.*?)\}/g, 'class=$1');

    /* 样式 */
    private previewEClass = `${this.props.sourceMaxHeight ? ' maxhdip-' + this.props.sourceMaxHeight : ''}`;

    private elemCodeSource = this.getCodeNode(this.htmlSource);

    private previewRule = this.eclassList.map(eclass => {
        const ruleInfo = this.props.cssClass.getRule(eclass);
        if (ruleInfo === null) {
            return '';
        }
        return this.format({ [eclass]: ruleInfo.rule });
    }).join('\n').split('\n');

    private elemCodeDest = this.getCodeNode(this.htmlDest);

    /* 格式化JSON源码(对象转换为JSON文本) */
    format(obj: object, compress?: boolean/*是否为压缩模式*/) {
        const draw: string[] = [];
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

        const styleString = this.getCodeNode2(this.styleDest, highlightStyleLine).join('');
        const ruleString = this.getCodeNode2(this.previewRule, highlightString).join('');
        return [
            (
                <div className="ant-col-12">
                    <div>前</div>
                    <div EClass="box" className={G.Class.map.frm_border}>
                        <div>样式rule</div>
                        <div EClass={'scroll ' + this.previewEClass}>
                            <pre key="rule" EClass="pre" dangerouslySetInnerHTML={{ __html: ruleString }} />
                        </div>
                        <div>dom</div>
                        <pre EClass={this.previewEClass + ' pre'}>
                            {this.elemCodeSource}
                        </pre>
                    </div>
                </div>
            ),
            (
                <div className="ant-col-12">
                    <div>后</div>
                    <div EClass="box" className={G.Class.map.frm_border}>
                        <div>样式style</div>
                        <div EClass={'scroll ' + this.previewEClass}>
                            {this.styleDest !== null && (<pre key="style" EClass="pre" dangerouslySetInnerHTML={{ __html: styleString }} />)}
                        </div>
                        <div>dom</div>
                        <pre EClass={this.previewEClass + ' pre'}>
                            {this.elemCodeDest}
                        </pre>
                    </div>
                </div>
            ),
            (<br />),
            (
                <div>
                    <div>渲染结果</div>
                    <div EClass="box2">{this.props.children}</div>
                </div>
            )
        ];
    }
    private notify(name: string | number, value: any, isLast: boolean, indent: number/*缩进*/, formObj: any, setup: {
        line: string,
        indentChar: string,
        nodeCount: number,
        maxDepth: number,
        draw: string[],
        compress?: boolean
    }
    ) {
        setup.nodeCount++;
        /*节点计数*/
        for (var i = 0, tab = ''; i < indent; i++) {
            tab += setup.indentChar; /* 缩进HTML */
        }
        tab = setup.compress ? '' : tab; /*压缩模式忽略缩进*/
        setup.maxDepth = ++indent; /*缩进递增并记录*/
        if (value && value.constructor === Array) {/*处理数组*/
            setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + '[' + setup.line); /*缩进'[' 然后换行*/
            for (let k = 0; k < value.length; k++) {
                this.notify(k, value[k], k === value.length - 1, indent, false, setup);
            }
            setup.draw.push(tab + ']' + (isLast ? setup.line : (',' + setup.line))); /*缩进']'换行,若非尾元素则添加逗号*/
        } else if (value && typeof value === 'object') {/*处理对象*/
            setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + '{' + setup.line); /*缩进'{' 然后换行*/
            let len = Object.keys(value).length, j = 0;

            for (let key in value) {
                this.notify(key, value[key], ++j === len, indent, true, setup);
            }
            setup.draw.push(tab + '}' + (isLast ? setup.line : (',' + setup.line))); /*缩进'}'换行,若非尾元素则添加逗号*/
        } else {
            if (typeof value === 'string') {
                value = '"' + value + '"';
            }
            setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + value + (isLast ? '' : ',') + setup.line);
        }
    }
    private getCodeNode2(strArr: string[], fn?: (str: string) => string) {
        const cssKey = this.cssClass.key;
        const code1 = cssKey + 'code1';
        const code2 = cssKey + 'code2';
        let codeStep = 1;
        const ret: string[] = [];
        for (let itm of strArr) {
            if (itm.length === 0) {
                break;
            }
            if (fn) {
                itm = fn(itm);
            }
            if (codeStep === 1) {
                ret.push(`<code class="${code1}">${itm}</code>`);
            } else {
                ret.push(`<code class="${code2}">${itm}</code>`);
            }
            codeStep = 3 - codeStep;
        }
        return ret;
    }
    private getCodeNode(str: string, fn?: (str: string) => string) {
        return str.split('\n').map((itm, idx) => {
            if (fn) {
                itm = fn(itm);
            }
            if (idx % 2 === 1) {
                return (<code style={{ backgroundColor: 'rgba(0,0,0,0.025)' }}>{itm}</code>);
            } else {
                return (<code style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>{itm}</code>);
            }
        });
    }

    private reductionReactNode(chd: React.ReactNode, space: number = 0) {
        let html = '';
        if (chd) {
            const spaceHTML = new Array(space + 1).join(' ');
            if (isArray(chd)) {
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    html += this.reductionReactNode(itm, space);
                }
            } else if (isStringNumberBoolean(chd)) {
                const str = String(chd);
                if (str.length > 20) {
                    html += spaceHTML + chd + '\n';
                } else {
                    html += chd;
                }
            } else {
                if ('type' in chd) {
                    const type: Function | string = (chd as any).type;
                    if (isFunction(type)) {
                        html += spaceHTML + '<' + type.name;
                    } else {
                        html += spaceHTML + '<' + type;
                    }
                    if ('props' in chd) {
                        const props = (chd as any).props;
                        Object.keys(props).forEach((key) => {
                            if (key !== 'children') {
                                html += ' ' + key + `={${JSON.stringify(props[key])}}`;
                            }
                        });
                        // html += ' {...props}'/* (chd as any).props */;
                        if ('children' in props) {
                            html += '>';
                            const str = this.reductionReactNode((props as any).children, space + 4);
                            if (str === '') {
                                html += ' />\n';
                            } else {
                                if (str.length > 20) {
                                    html += '\n' + str + spaceHTML;
                                } else {
                                    html += str;
                                }
                                if (isFunction(type)) {
                                    html += '</' + type.name + '>\n';
                                } else {
                                    html += '</' + type + '>\n';
                                }
                            }

                        } else {
                            html += ' />\n';
                        }
                    }
                }
            }
        }
        return html;
    }
    private getEclassList(chd: React.ReactNode) {
        const eclassList: string[] = [];
        if (chd) {
            if (isArray(chd)) {
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    Array.prototype.push.apply(eclassList, this.getEclassList(itm));
                }
            } else if (!isStringNumberBoolean(chd)) {
                if ('type' in chd) {
                    if ('props' in chd) {
                        const props = (chd as any).props;
                        if ('EClass' in props) {
                            eclassList.push.apply(eclassList, (props as any).EClass.split(/ +/g));
                        }
                        if ('children' in props) {
                            eclassList.push.apply(eclassList, this.getEclassList((props as any).children));

                        }
                    }
                }
            }
        }
        return eclassList;
    }

}