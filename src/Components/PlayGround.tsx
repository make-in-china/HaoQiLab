import React from 'react-ex';
import { cssClassNS } from 'src/CSS/CSSClass';
import { G } from '../CSS/G';
import { isArray, isStringNumberBoolean, isFunction } from 'src/Lib/is';
import { highlightStyleLine } from 'src/Lib/highlightStyle';

@React.eclass({
    box: [
        'mdip-5 pdip-5 bd-12-gray'.split(' ')
    ],
    pre: [
        ['scrolly pdip-2 rdip-2'],
        {
            chd: 'display:block;'
        }
    ],
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
    }).join('\n');

    /* 放在pre里显示的数据结果的html演示数据 */
    private htmlDest = this.reductionReactNode(this.props.children).replace(/className=\{(.*?)\}/g, 'class=$1');

    /* 样式 */
    private previewEClass = `pre${this.props.sourceMaxHeight ? ' maxhdip-' + this.props.sourceMaxHeight : ''}`;

    private elemCodeSource = this.getCodeNode(this.htmlSource);

    private previewRule = this.getCodeNode(this.eclassList.map(eclass => {
        return this.format({ [eclass]: this.props.cssClass.getRule(eclass).rule });
    }).join('\n'));

    private elemCodeDest = this.getCodeNode(this.htmlDest);
    format(obj: any, compress?: boolean/*是否为压缩模式*/) {/* 格式化JSON源码(对象转换为JSON文本) */
        const indentChar = '    ';
        const draw: string[] = [];
        const line = compress ? '' : '\n';
        // @ts-ignore
        let nodeCount = 0;
        // @ts-ignore
        let maxDepth = 0;

        var notify = function (name: string | number, value: any, isLast: boolean, indent: number/*缩进*/, formObj: any) {
            nodeCount++;
            /*节点计数*/
            for (var i = 0, tab = ''; i < indent; i++) {
                tab += indentChar; /* 缩进HTML */
            }
            tab = compress ? '' : tab; /*压缩模式忽略缩进*/
            maxDepth = ++indent; /*缩进递增并记录*/
            if (value && value.constructor === Array) {/*处理数组*/
                draw.push(tab + (formObj ? ('"' + name + '":') : '') + '[' + line); /*缩进'[' 然后换行*/
                for (let k = 0; k < value.length; k++) {
                    notify(k, value[k], k === value.length - 1, indent, false);
                }
                draw.push(tab + ']' + (isLast ? line : (',' + line))); /*缩进']'换行,若非尾元素则添加逗号*/
            } else if (value && typeof value === 'object') {/*处理对象*/
                draw.push(tab + (formObj ? ('"' + name + '":') : '') + '{' + line); /*缩进'{' 然后换行*/
                let len = Object.keys(value).length, j = 0;

                for (let key in value) {
                    notify(key, value[key], ++j === len, indent, true);
                }
                draw.push(tab + '}' + (isLast ? line : (',' + line))); /*缩进'}'换行,若非尾元素则添加逗号*/
            } else {
                if (typeof value === 'string') {
                    value = '"' + value + '"';
                }
                draw.push(tab + (formObj ? ('"' + name + '":') : '') + value + (isLast ? '' : ',') + line);
            }
        };
        notify('', obj, true, 0, false);
        return draw.join('');
    }
    render() {
        const styleString = this.styleDest.split('\n').map((itm, idx) => {
            if (idx % 2 === 1) {
                return `<code style="background-olor:rgba(0,0,0,0.025);">${highlightStyleLine(itm)}</code>`;
            } else {
                return `<code style="background-color:rgba(0,0,0,0.05);">${highlightStyleLine(itm)}</code>`;
            }
        }).join('');
        return [
            (
                <div className="ant-col-12">
                    <div>createElement前</div>
                    <div EClass="box" className={G.Class.map.frm_border}>
                        <pre EClass={this.previewEClass}>
                            {this.previewRule}
                        </pre>
                        <pre EClass={this.previewEClass}>
                            {this.elemCodeSource}
                        </pre>
                    </div>
                </div>
            ),
            (
                <div className="ant-col-12">
                    <div>createElement后</div>
                    <div EClass="box" className={G.Class.map.frm_border}>
                        {this.styleDest !== null && (<pre key="style" EClass={this.previewEClass} dangerouslySetInnerHTML={{ __html: styleString }} />)}
                        <pre EClass={this.previewEClass}>
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
    private getCodeNode(str: string) {
        return str.split('\n').map((itm, idx) => {
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