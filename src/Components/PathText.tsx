import React from 'react-ex';
@React.eclass({
    box: ['wem-4 hem-4 f-gray mdipt-20'.split(' '), {
        ' svg': 'display:block;overflow:visible;',
        ' path': 'fill:none;',
        ' text': 'font-size:2em;'
    }]
})
export default class PathText extends React.Component<{ path: string, text: string, fill?: string }> {
    key = PathText.cssClass!.key;
    onRef = (instance: HTMLElement | null) => {
        if (!instance) {
            return;
        }
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        instance.setAttributeNS(xlinkNS, 'xlink:href', `#${this.key}path`);
    }
    render() {
        return (
            <div EClass="box">
                <svg viewBox="0 0 100 100">
                    <path d={this.props.path} id={this.key + 'path'} />
                    <text fill={this.props.fill ? this.props.fill : '#ffffff'}><textPath ref={this.onRef}>{this.props.text}</textPath></text>
                </svg>
            </div >
        );

    }
}
