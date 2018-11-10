import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { MapFragments } from './MapFragments';
import { MapData, MapFragmentsNode } from './MapData';
import { Antd } from 'antd-more';
import { Creatures } from '../RPG/Creatures';
import { MapBackLines } from './MapBackLines';
import { MapCreatures } from './MapCreatures';
const { config, clsMap } = eClassConfig({
    box: css`
        left:10px;right:10px;top:10px;bottom:10px;padding:5px;position:absolute;
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
    show3D: css`transform: rotateX(70deg) translateY(140px);`

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
        encounters: (fnWin: () => void, fnLost: () => void) => void
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

            window.clearInterval(this.moveTimeID);
            const stepLeft = (this.centerMap.left - this.currentMap.left - this.left) / 10;
            const stepTop = (this.centerMap.top - this.currentMap.top - this.top) / 10;
            let step = 0;
            const move = () => {
                step++;
                if (step >= 10) {
                    window.clearInterval(this.moveTimeID);
                    this.left = this.centerMap.left - this.currentMap.left;
                    this.top = this.centerMap.top - this.currentMap.top;
                    this.nextTick++;

                    return;
                }
                this.left += stepLeft;
                this.top += stepTop;
                if (Math.random() < 0.1) {
                    // 遭遇战斗
                    window.clearInterval(this.moveTimeID);
                    this.show3D = clsMap.show3D;
                    this.props.encounters(() => {
                        this.show3D = '';
                        this.moveTimeID = window.setInterval(move, 30);
                        this.nextTick++;
                    }, () => {
                        //
                    });
                }
                this.nextTick++;
            };
            this.moveTimeID = window.setInterval(move, 30);

        }
    }

    currentMap: MapFragments;
    centerMap: MapFragments;
    onRefCurrentMap = (inst: MapFragments | null) => {
        if (inst) {
            this.currentMap = inst;
        }
    }
    onRefCenterMap = (inst: MapFragments | null) => {
        if (inst) {
            this.centerMap = inst;
            if (!this.currentMap) {
                this.currentMap = inst;
            }
        }
    }

    left = 0;
    top = 0;
    moveTimeID: number;
    show3D: string = '';
    componentWillReceiveProps(props: this['props']) {
        this.currentMap = this.centerMap;
        this.left = 0;
        this.top = 0;
        this.nextTick++;
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
        const allMap = this.props.world.getAllFragments().map((m, i) => {
            if (i === 0) {
                return (<MapFragments ref={this.onRefCenterMap} {...mapRestParam} key={m.x + ',' + m.y} mapNode={m} />);
            } else if (!this.currentMap && this.props.curent && m.x === this.props.curent.x && m.y === this.props.curent.y) {
                return (<MapFragments ref={this.onRefCurrentMap} {...mapRestParam} key={m.x + ',' + m.y} mapNode={m} />);
            }
            return (<MapFragments {...mapRestParam} key={m.x + ',' + m.y} mapNode={m} />);
        });

        return (
            <div EClass={clsMap.box}>
                <div EClass={[clsMap.full, this.show3D]} style={{ left: this.left, top: this.top }}>
                    <MapBackLines ref={this.onRefMapBackLines} />
                    {allMap}
                </div>
                {this.show3D === '' ? [
                    (<div EClass={clsMap.mapName}>梦大陆</div>),
                    (<Antd.Button EClass={clsMap.upMapBtn} onClick={this.props.return}>返回无限世界</Antd.Button>),
                    (<MapCreatures width={this.props.width} height={this.props.height} creatures={this.props.creatures} />)
                ] : null}
            </div>
        );
    }
}
