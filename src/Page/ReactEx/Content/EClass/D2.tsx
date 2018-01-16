import React from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    box: [
        function (idx: number = 1, moreInfo: string = 'solid') { return `border:${idx}px #808080 ${moreInfo};`; },
        'inline mdip-5 pdip-5'.split(' ')
    ],
})
export default class D2 extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="box-chd-2-dashed">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
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