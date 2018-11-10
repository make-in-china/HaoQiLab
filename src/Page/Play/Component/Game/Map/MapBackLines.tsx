import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
const bg = require('./Icon/HoverBackground.png');
const { config, clsMap } = eClassConfig({

    background: [_`abs`, css`
        width:280px;
        height:280px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${bg});
        pointer-events:none;
    `]
});
@React.eclass(config)
@observer
export class MapBackLines
    extends React.Component<{

    }> {
    @observable nextTick = 0;
    x: number = -9999;
    y: number = -9999;
    move(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.nextTick++;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (
            <div style={{ left: this.x, top: this.y }} EClass={clsMap.background} />
        );
    }
}
