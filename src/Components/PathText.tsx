import React, { css } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    box: ['wem-4 hem-4 f-gray mdipt-20'.split(' '), {
        ' svg': css`display:block;overflow:visible;`,
        ' path': css`fill:none;`,
        ' text': css`font-size:2em;`
    }]
});
@React.eclass(config)
export default class PathText
    extends React.Component<{
        path: string
        fill?: string
    }> {
    onRef = (instance: HTMLElement | null) => {
        if (!instance) {
            return;
        }
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        instance.setAttributeNS(xlinkNS, 'xlink:href', `#${this.cssClass!.key}path`);
    }
    render() {
        return (
            <div EClass={clsMap.box}>
                <svg viewBox="0 0 100 100">
                    <path d={this.props.path} id={this.cssClass!.key + 'path'} />
                    <text fill={this.props.fill ? this.props.fill : '#ffffff'}><textPath ref={this.onRef}>{this.props.children}</textPath></text>
                </svg>
            </div >
        );

    }
}
