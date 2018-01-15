import React from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    box: 'color:#00f;'
})
export default class B extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="box">{/* 动态样式 */}
                B组件
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