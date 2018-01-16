import React from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    frame: ['rdip-5', 'inline', 'ladip']
})
export default class E2 extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="frame">
                frame
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