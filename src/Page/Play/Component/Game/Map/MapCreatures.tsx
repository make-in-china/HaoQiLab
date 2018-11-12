import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { Creatures } from '../RPG/Creatures/Creatures';
const balloon = require('src/Page/Play/Component/Game/Map/Icon/balloon.png');
const { config, clsMap } = eClassConfig({
    creatures: [_`abs`
        , css`transform: translateX(-50%) translateY(-100%);width:36px;height:50px;padding-top:28px;
        background-size:30px;background-position:50% 100%;background-repeat:no-repeat;
        pointer-events:none;animation:anitBalloon 1s infinite;`, {
        '{}@keyframes anitBalloon': `
            0% {margin-top:0px;}
            50% {margin-top:10px;}
            100% {margin-top:0px;}
        `
    }],
});
@React.eclass(config)
@observer
export class MapCreatures
    extends React.Component<{
        width: number
        height: number
        creatures: Creatures
    }> {
    @observable nextTick = 0;

    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (

            <div
                EClass={clsMap.creatures}
                style={{
                    left: this.props.width / 2,
                    top: this.props.height / 2 + 30,
                    backgroundImage: `url(${balloon})`
                }}
            >
                <img src={this.props.creatures.picture[1]} />
            </div>
        );
    }
}
