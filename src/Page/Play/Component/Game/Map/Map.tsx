import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { MapFragments } from './MapFragments';
import { MapData, MapFragmentsNode } from './MapData';
import { Antd } from 'antd-more';
import { Creatures } from '../RPG/Creatures';
import { MapBackLines } from './MapBackLines';
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
        border-radius: 30px;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        transform: translateX(-50%);
    `],
    upMapBtn: [_`abs`, css`
        bottom: 25px;
        right: 25px;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
    `],
    creatures: [_`abs`
        , css`transform: translateX(-50%) translateY(-50%);width:30px;height:50px;
        background-size:30px;background-position:50% 100%;background-repeat:no-repeat;
        pointer-events:none;`],
});
@React.eclass(config)
@observer
export class Map
    extends React.Component<{
        world: MapData
        width: number
        height: number
        return: () => void
        onMoveToMap: (inst: MapFragments, mapNode: MapFragmentsNode) => boolean
        creatures: Creatures
        curent?: MapFragmentsNode
    }> {
    @observable nextTick = 0;

    id: number;
    messageList: React.ReactNode[] = [];
    mapBackLines: MapBackLines;
    onMouseOver = (inst: MapFragments) => {
        this.mapBackLines.move(inst.left - 110, inst.top - 110);
    }
    onRefMapBackLines = (inst: MapBackLines | null) => {
        if (inst) {
            this.mapBackLines = inst;
        }
    }
    onMapFragmentsClick = (inst: MapFragments, map: MapFragmentsNode) => {
        if (inst === this.currentMap) {
            return;
        }
        if (this.props.onMoveToMap(inst, map)) {
            this.currentMap = inst;
        }
        this.nextTick++;
    }
    currentMap: MapFragments;
    centerMap: MapFragments;
    componentWillMount() {
        //
    }
    onRefCurrentMap = (inst: MapFragments | null) => {
        if (inst) {
            this.currentMap = inst;
        }
    }
    onRefCenterMap = (inst: MapFragments | null) => {
        if (inst) {
            this.currentMap = inst;
        }
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        const mapRestParam = {
            onClick: this.onMapFragmentsClick,
            onMouseOver: this.onMouseOver,
            width: this.props.width,
            height: this.props.height
        };
        const allMap = this.props.world.getAllFragments().map(m => {
            if (!this.currentMap && this.props.curent && m.x === this.props.curent.x && m.y === this.props.curent.y) {
                return (<MapFragments {...mapRestParam} key={m.x + ',' + m.y} mapNode={m} />);
            }
            return (<MapFragments {...mapRestParam} key={m.x + ',' + m.y} mapNode={m} />);
        });
        if (!this.currentMap && !this.props.curent) {
            allMap[0].props.ref = this.onRefCurrentMap;
        }
        allMap[0].props.ref = this.onRefCenterMap;

        let left = 0;
        let top = 0;
        if (this.currentMap && this.centerMap) {
            left = this.currentMap.left - this.centerMap.left;
            top = this.currentMap.left - this.centerMap.left;
        }
        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.full} style={{ left, top }}>
                    <MapBackLines ref={this.onRefMapBackLines} />
                    {allMap}
                    <div
                        EClass={clsMap.creatures}
                        style={{
                            left: this.props.width / 2 - 15,
                            top: this.props.height / 2 + 30,
                            backgroundImage: `url(${this.props.creatures.picture[1]})`
                        }}
                    />
                </div>
                <div EClass={clsMap.mapName}>梦大陆</div>
                <Antd.Button EClass={clsMap.upMapBtn} onClick={this.props.return}>返回无限世界</Antd.Button>
            </div>
        );
    }
}
