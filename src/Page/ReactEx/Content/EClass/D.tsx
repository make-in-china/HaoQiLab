import React from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    border: function (idx: number = 1, moreInfo: string = 'solid') { return `border:${idx}px #808080 ${moreInfo};`; },
})
export default class D extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="border-10-dashed">
                10px dashed
            </div>
        ));
    });
    render() {
        return (
            <div>
                <PlayGround
                    source={this.playGroundData.source}
                    sourceMaxHeight={200}
                    cssClass={this.cssClass}
                >
                    {this.playGroundData.result}
                </PlayGround>
            </div>
        );
    }
}