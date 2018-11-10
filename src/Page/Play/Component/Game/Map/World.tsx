import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { WorldFragments } from './WorldFragments';
import { MapData, MapFragmentsNode } from './MapData';
import { MapCreatures } from './MapCreatures';
import { Creatures } from '../RPG/Creatures';
import { Antd } from 'antd-more';
import { MouseEvent } from 'react';

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
        width: number
        height: number
        creatures: Creatures
        worlds: MapData
        onEnterWorld: (inst: WorldFragments) => void
        curent?: MapFragmentsNode
    }> {
    @observable nextTick = 0;

    id: number;
    messageList: React.ReactNode[] = [];

    currentMap: WorldFragments;
    centerMap: WorldFragments;
    onRefCurrentMap = (inst: WorldFragments | null) => {
        if (inst) {
            this.currentMap = inst;
        }
    }
    onRefCenterMap = (inst: WorldFragments | null) => {
        if (inst) {
            this.centerMap = inst;
            if (!this.currentMap) {
                this.currentMap = inst;
            }
        }
    }
    onConfirm = (e?: MouseEvent<any> | undefined) => {
        this.props.onEnterWorld(this.currentMap);
        this.visibleEnterQuestion = false;
        this.nextTick++;
    }

    visibleEnterQuestion = false;
    onCancel = (e?: MouseEvent<any> | undefined) => {
        this.visibleEnterQuestion = false;
        this.nextTick++;
    }
    componentWillMount() {
        //
    }
    onWorldClick = (inst: WorldFragments) => {
        if (inst === this.currentMap) {
            this.visibleEnterQuestion = true;
            this.nextTick++;
            return;
        }
        if (this.visibleEnterQuestion) {
            this.visibleEnterQuestion = false;
            this.nextTick++;
        }
        this.currentMap = inst;

        window.clearInterval(this.moveTimeID);
        const stopLeft = (this.centerMap.left - this.currentMap.left - this.left) / 10;
        const stopTop = (this.centerMap.top - this.currentMap.top - this.top) / 10;
        let step = 0;
        this.moveTimeID = window.setInterval(() => {
            step++;
            if (step === 10) {
                window.clearInterval(this.moveTimeID);
                this.left = this.centerMap.left - this.currentMap.left;
                this.top = this.centerMap.top - this.currentMap.top;

                this.visibleEnterQuestion = true;
                this.nextTick++;

                return;
            }
            this.left += stopLeft;
            this.top += stopTop;
            this.nextTick++;
        }, 30);

    }
    left = 0;
    top = 0;
    moveTimeID: number;
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        const allMap = this.props.worlds.getAllFragments().map((m, i) => {
            let wfs;
            if (i === 0) {
                wfs = (<WorldFragments width={this.props.width} key={m.x + ',' + m.y} height={this.props.height} ref={this.onRefCenterMap} {...m} onClick={this.onWorldClick} />);
            } else if (!this.currentMap && this.props.curent && m.x === this.props.curent.x && m.y === this.props.curent.y) {
                wfs = (<WorldFragments width={this.props.width} key={m.x + ',' + m.y} height={this.props.height} ref={this.onRefCurrentMap} {...m} onClick={this.onWorldClick} />);
            } else {
                wfs = (<WorldFragments width={this.props.width} key={m.x + ',' + m.y} height={this.props.height} {...m} onClick={this.onWorldClick} />);
            }
            return wfs;

        });
        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.full} style={{ left: this.left, top: this.top }}>
                    {
                        allMap
                    }
                </div>
                <div EClass={clsMap.mapName}>无限世界</div>
                <Antd.Popconfirm placement="top" title={'进入该世界吗？'} visible={this.visibleEnterQuestion} onConfirm={this.onConfirm} onCancel={this.onCancel} okText="是的" cancelText="不">
                    <MapCreatures width={this.props.width} height={this.props.height} creatures={this.props.creatures} />
                </Antd.Popconfirm>

            </div>
        );
    }
}
