import React, { css } from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    box: css`color:#00f;`
});
@React.eclass(config)

export default class B extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass={clsMap.box}>
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