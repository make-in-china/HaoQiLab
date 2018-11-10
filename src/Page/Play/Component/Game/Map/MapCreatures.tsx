import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { Creatures } from '../RPG/Creatures';
const { config, clsMap } = eClassConfig({
        creatures: [_`abs`
        , css`transform: translateX(-50%) translateY(-50%);width:30px;height:50px;
        background-size:30px;background-position:50% 100%;background-repeat:no-repeat;
        pointer-events:none;`],
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
                    left: this.props.width / 2 ,
                    top: this.props.height / 2 + 30,
                    backgroundImage: `url(${this.props.creatures.picture[1]})`
                }}
            />
        );
    }
}
