import React from 'react-ex';
import PlayGround from '../../../Components/PlayGround';
@React.eclass({
    box: 'color:#f00;'
})
export default class EClassA extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="box">{/* 动态样式 */}
                A组件
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