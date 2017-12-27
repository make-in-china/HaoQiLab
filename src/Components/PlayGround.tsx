import React from 'react-ex';
import { cssClassNS } from 'src/CSS/CSSClass';

function isArray(a: any): a is Array<any> {
    return '[object Array]' === Object.prototype.toString.call(a);
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
function reductionReactNode(chd: React.ReactNode, space: number = 0) {
    let html = '';
    if (chd) {
        const spaceHTML = new Array(space + 1).join(' ');
        if (isArray(chd)) {
            chd.forEach(itm => html += reductionReactNode(itm, space));
        } else if (isStringNumberBoolean(chd)) {
            const str = String(chd);
            if (str.length > 20) {
                html += spaceHTML + chd + '\n';
            } else {
                html += chd;
            }
        } else {
            if ('type' in chd) {
                html += spaceHTML + '<' + (chd as any).type;
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
                        const str = reductionReactNode((props as any).children, space + 4);
                        if (str.length > 20) {
                            html += '\n' + str + spaceHTML;
                        } else {
                            html += str;
                        }
                        html += '</' + (chd as any).type + '>\n';
                    } else {
                        html += ' />\n';
                    }
                }
            }
        }
    }
    return html;
}
function getEclassList(chd: React.ReactNode) {
    const eclassList: string[] = [];
    if (chd) {
        if (isArray(chd)) {
            chd.forEach(itm => eclassList.push.apply(eclassList, getEclassList(itm)));
        } else if (!isStringNumberBoolean(chd)) {
            if ('type' in chd) {
                if ('props' in chd) {
                    const props = (chd as any).props;
                    if ('EClass' in props) {
                        eclassList.push.apply(eclassList, (props as any).EClass.split(/ +/g));
                    }
                    if ('children' in props) {
                        eclassList.push.apply(eclassList, getEclassList((props as any).children));

                    }
                }
            }
        }
    }
    return eclassList;
}

@React.eclass(
    {
        box: [
            'rdip-5 mdip-5 ladip pdip-5 bd-12-gray'.split(' ')
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
    getCodeNode(str: string) {
        return str.split('\n').map((itm, idx) => {
            if (idx % 2 === 1) {
                return (<code style={{ backgroundColor: 'rgba(0,0,0,0.025)' }}>{itm}</code>);
            } else {
                return (<code style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>{itm}</code>);
            }
        });
    }
    render() {
        /* 放在pre里显示的数据源的html演示数据 */
        const htmlSource = reductionReactNode(this.props.source);
        /* 数据源用到的所有eclass */
        const eclassList = getEclassList(this.props.source);
        /* 放在pre里显示的数据结果的html演示数据 */
        const htmlDest = eclassList.map((eclass) => '<style>\n' + cssClassNS.CSSClass.instance.getStyleByName(eclass) + '\n</style>\n')
            + reductionReactNode(this.props.children);
        /* 样式 */
        const previewEClass = `pre${this.props.sourceMaxHeight ? ' maxhdip-' + this.props.sourceMaxHeight : ''}`;
        return [
            (
                <div className="ant-col-12">
                    <div>createElement前</div>
                    <div EClass="box">
                        <pre EClass={previewEClass}>
                            {this.getCodeNode(htmlSource)}
                        </pre>
                    </div>
                </div>
            ),
            (
                <div className="ant-col-12">
                    <div>createElement后</div>
                    <div EClass="box">
                        <pre EClass={previewEClass}>
                            {this.getCodeNode(htmlDest)}
                        </pre>
                    </div>
                </div>
            ),
            (
                <div EClass="box2" className="ant-col-24">{this.props.children}</div>
            )
        ];
    }
}