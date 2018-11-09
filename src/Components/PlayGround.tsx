import React from 'react-ex';
import { cssClassNS } from 'src/CSS/CSSClass';
import { G } from '../CSS/G';
import { isArray, isStringNumberBoolean, isFunction } from 'src/Lib/is';
import { highlightStyleLine, highlightString } from 'src/Lib/highlightStyle';
import CodeList from 'src/Components/CodeList';
import { formatJSON } from 'src/Lib/Format';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    box: [
        'mdip-5 pdip-5 bd-12-gray'.split(' ')
    ],
    box2: ['box pdip-5 minhem-3'.split(' ')]
});
@React.eclass(config)
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
    private htmlSource = this.reductionReactNode(this.props.source).split('\n');

    private styleDest = this.eclassList.map(eclass => {
        const styleString = this.props.cssClass.getStyleByName(eclass);
        if (styleString !== null) {
            return styleString;
        }
        return '';
    }).join('\n').split('\n');

    /* 放在pre里显示的数据结果的html演示数据 */
    private htmlDest = this.reductionReactNode(this.props.children).replace(/className=\{(.*?)\}/g, 'class=$1').split('\n');

    /* 样式 */
    private previewEClass = `${this.props.sourceMaxHeight ? ' maxhdip-' + this.props.sourceMaxHeight : ''}`;

    private previewRule = this.eclassList.map(eclass => {
        const name = this.props.cssClass.getNameByClass(eclass);
        const ruleInfo = this.props.cssClass.getRule(name);
        if (ruleInfo === null) {
            return '';
        }
        return formatJSON({ [name]: ruleInfo.rule });
    }).join('\n').split('\n');

    render() {
        return (
            <div>
                <div EClass={clsMap.uof}>
                    <div className="ant-col-12">
                        <div>前</div>
                        <div EClass={clsMap.box} className={G.Class.map.frm_border}>
                            <div>样式rule</div>
                            <div EClass={[clsMap.scroll, this.previewEClass]}>
                                <CodeList datas={this.previewRule} highLight={highlightString} />
                            </div>
                            <div>dom</div>
                            <CodeList EClass={this.previewEClass} datas={this.htmlSource} />
                        </div>
                    </div>
                    <div className="ant-col-12">
                        <div>后</div>
                        <div EClass={clsMap.box} className={G.Class.map.frm_border}>
                            <div>样式style</div>
                            <div EClass={[clsMap.scroll, this.previewEClass]}>
                                <CodeList datas={this.styleDest} highLight={highlightStyleLine} />
                            </div>
                            <div>dom</div>
                            <CodeList EClass={this.previewEClass} datas={this.htmlDest} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>渲染结果</div>
                    <div EClass={clsMap.box2}>{this.props.children}</div>
                </div>
            </div>
        );
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
                        html += spaceHTML + '&lt;' + type.name;
                    } else {
                        html += spaceHTML + '&lt;' + type;
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
                            html += '&gt;';
                            const str = this.reductionReactNode((props as any).children, space + 4);
                            if (str === '') {
                                html += ' /&gt;\n';
                            } else {
                                if (str.length > 20) {
                                    html += '\n' + str + spaceHTML;
                                } else {
                                    html += str;
                                }
                                if (isFunction(type)) {
                                    html += '&lt;/' + type.name + '&gt;\n';
                                } else {
                                    html += '&lt;/' + type + '&gt;\n';
                                }
                            }

                        } else {
                            html += ' /&gt;\n';
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