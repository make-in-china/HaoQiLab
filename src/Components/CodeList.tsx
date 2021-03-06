// #region import
import React, { css } from 'react-ex';
// #endregion

import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    pre: [
        'inline minw-100 mdipb-0'.split(' '),
        {
            chd: css`display:block;`
        }
    ],
    code1: [css`background-color:rgba(0,0,0,0.025);`],
    code2: [css`background-color:rgba(0,0,0,0.05);`]
});
@React.eclass(config)
export default class CodeList
    extends React.Component<{
        datas: string[]
        highLight?: (str: string) => string
    }> {
    componentDidMount() {
        this.cssClass.parse('pre code1 code2');
    }
    render() {
        const cssKey = this.cssClass.key;
        const code1 = cssKey + 'code1';
        const code2 = cssKey + 'code2';
        let codeStep = 1;
        const ret: string[] = [];
        const highLight = this.props.highLight;
        for (let itm of this.props.datas) {
            if (itm.length === 0) {
                break;
            }
            if (highLight) {
                itm = highLight(itm);
            }
            if (codeStep === 1) {
                ret.push(`<code class="${code1}">${itm}</code>`);
            } else {
                ret.push(`<code class="${code2}">${itm}</code>`);
            }
            codeStep = 3 - codeStep;
        }
        return <pre key="rule" EClass={clsMap.pre} dangerouslySetInnerHTML={{ __html: ret.join('') }} />;
    }

    // #region private methods

    // #endregion
}
