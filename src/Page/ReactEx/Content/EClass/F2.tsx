import React, { css } from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
@React.eclass({
    main: {
        chd: css`color:red;`
    }
})
export default class F2 extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="main">
                <div>1</div>
                <div>2</div>
                <div>3</div>
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
