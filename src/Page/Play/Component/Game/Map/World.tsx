import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { WorldFragments } from './WorldFragments';
import { MapData } from './MapData';

const { config, clsMap } = eClassConfig({
    box: css`left:10px;right:10px;top:10px;bottom:10px;padding:5px;position:absolute;
    background-color:#466e9e;border-radius: 50px;overflow:hidden;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 0 33px rgba(0,0,0,0.5);border: 2px #bfbfbf solid;`,
    mapName: [_`abs`, css`
        top: 5px;
        left: 50%;
        color: #fff;
        padding: 0px 15px;
        font-size: 18px;
        border: 1px rgba(0,0,0,0.5) solid;
        background-color: rgba(0, 255, 255, 0.42);
        transform: translateX(-50%);
        border-radius: 30px;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
    `]
});
@React.eclass(config)
@observer
export class World
    extends React.Component<{
        worlds: MapData
        onClickWorld: (inst: WorldFragments) => void
    }> {
    @observable nextTick = 0;

    id: number;
    messageList: React.ReactNode[] = [];

    componentWillMount() {
        //
    }

    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (
            <div EClass={clsMap.box}>
                {
                    this.props.worlds.getAllFragments().map(m => {
                        return (<WorldFragments key={m.x + ',' + m.y} {...m} onClick={this.props.onClickWorld} />);
                    })
                }
                <div EClass={clsMap.mapName}>无限世界</div>
            </div>
        );
    }
}
