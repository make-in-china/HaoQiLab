import React, { css } from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    main: {
        '>.&a': css`color:red;`,
        '>.&b': css`color:blue;`,
    }
})
export default class F3 extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => {
            debugger;
            return (
                <div EClass="main">
                    <div EClass="a">a</div>
                    <div EClass="b">b</div>
                </div>
            );
        });
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