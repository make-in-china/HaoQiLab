import React, { css } from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    main: {
        '>.a': css`color:red;`,
        '>.b': css`color:blue;`,
    }
})
export default class F extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="main">
                <div className="a">a</div>
                <div className="b">b</div>
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