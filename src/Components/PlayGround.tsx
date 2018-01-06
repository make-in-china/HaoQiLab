import React from 'react-ex';
import { cssClassNS } from 'src/CSS/CSSClass';
import { G } from '../CSS/G';

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
    }> {
    /* 数据源用到的所有eclass */
    private eclassList = this.getEclassList(this.props.source);

    /* 放在pre里显示的数据源的html演示数据 */
    private htmlSource = this.reductionReactNode(this.props.source);

    /* 放在pre里显示的数据结果的html演示数据 */
    private htmlDest = this.eclassList.map(eclass => {
        return '<style>\n' + cssClassNS.CSSClass.instance.getStyleByName(eclass) + '\n</style>\n';
    }) + this.reductionReactNode(this.props.children);

    /* 样式 */
    private previewEClass = `pre${this.props.sourceMaxHeight ? ' maxhdip-' + this.props.sourceMaxHeight : ''}`;

    private elemCodeSource = this.getCodeNode(this.htmlSource);

    private elemCodeDest = this.getCodeNode(this.htmlDest);

    render() {
        return [
            (
                <div className="ant-col-12">
                    <div>createElement前</div>
                    <div EClass="box" className={G.Class.map.frm_border}>
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
    private isFunction(a: any): a is Function {
        return '[object Function]' === Object.prototype.toString.call(a);
    }
    private isArray(a: any): a is Array<any> {
        const type = Object.prototype.toString.call(a);
        return '[object Array]' === type || ('[object Object]' === type && a.length !== undefined);
    }
    private isStringNumberBoolean(a: any): a is boolean | number | string {
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
    private reductionReactNode(chd: React.ReactNode, space: number = 0) {
        let html = '';
        if (chd) {
            const spaceHTML = new Array(space + 1).join(' ');
            if (this.isArray(chd)) {
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    html += this.reductionReactNode(itm, space);
                }
            } else if (this.isStringNumberBoolean(chd)) {
                const str = String(chd);
                if (str.length > 20) {
                    html += spaceHTML + chd + '\n';
                } else {
                    html += chd;
                }
            } else {
                if ('type' in chd) {
                    const type: Function | string = (chd as any).type;
                    if (this.isFunction(type)) {
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
                                if (this.isFunction(type)) {
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
            if (this.isArray(chd)) {
                for (let i = 0; i < chd.length; i++) {
                    const itm = chd[i];
                    Array.prototype.push.apply(eclassList, this.getEclassList(itm));
                }
            } else if (!this.isStringNumberBoolean(chd)) {
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