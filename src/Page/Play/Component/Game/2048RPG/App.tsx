
import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { TimeNodeClassInstance } from 'src/Data/TimeNode/TimeNode';
import { eClassConfig } from 'src/CSS/G.Class';
import { Antd } from 'antd-more';
import { BambooRatCook } from '../RPG/Creatures/BambooRatCook/BambooRatCook';
import { Creatures } from '../RPG/Creatures';
import { Map } from '../Map/Map';
import { World } from '../Map/World';
import { WorldFragments } from '../Map/WorldFragments';
import { MapData, MapFragmentsNode } from '../Map/MapData';
import { MapFragments } from '../Map/MapFragments';
import { BambooRat } from '../RPG/Creatures/BambooRat/BambooRat';
import Game2048 from './2048';
import { allCreatures } from '../RPG/AllCreatures';
const beginPic = require('../Map/WorldIcon/begin.png');
const worldPic2 = require('../Map/WorldIcon/2.png');
const worldPic3 = require('../Map/WorldIcon/3.png');
const worldPic4 = require('../Map/WorldIcon/4.png');
const worldPicList = [beginPic, worldPic2, worldPic3, worldPic4];
const castle = require('../Map/Icon/castle.png');
const mountain = require('../Map/Icon/mountain.png');
const { config, clsMap } = eClassConfig({
    box: css`width:1200px;height:640px;overflow:auto;padding:5px;box-sizing:border-box;`,
    modal: {
        ' .ant-modal-confirm-content': css`margin:0;`,
        ' .ant-modal-body': css`padding:0;`,
        ' .anticon-info-circle': css`display:none;`,
        ' .ant-modal-confirm-btns': css`display:none;`,
        ' .ant-modal-close': css`display:none;`
    },
    stateBox: css`position: absolute;left:0;top:0;right:0;bottom:0;`,
    mapBox: [
        _`full`, css`height:600px;display:inline-block;vertical-align:top;`]
});
@React.eclass(config)
@observer
export default class App
    extends React.Component<{}> {
    @observable nextTick = 0;
    node!: TimeNodeClassInstance;
    stateBoxStyle: { display: boolean }[] = [
        { display: false },
        { display: true },
        { display: false }
    ];
    onMapReturnWorld = () => {
        this.stateBoxStyle[0].display = false;
        this.stateBoxStyle[1].display = true;
        this.nextTick++;
    }
    onEnterWorld = (inst: WorldFragments) => {
        this.stateBoxStyle[1].display = false;
        this.stateBoxStyle[0].display = true;

        this.setCurrentWorld(inst.x, inst.y);
        this.nextTick++;
    }
    currentMap: MapFragmentsNode;

    teammate: Creatures[] = [];
    map: Map;
    world: World;
    onRefWorld = (inst: World | null) => {
        if (inst) {
            this.world = inst;
        }
    }
    onRefMap = (inst: Map | null) => {
        if (inst) {
            this.map = inst;
        }
    }
    onWin = () => {
        this.stateBoxStyle[2].display = false;
        this.nextTick++;
        this.fnWin();
    }
    enemys: Creatures[];

    constructor(props: App['props']) {
        super(props);

    }
    createCreatures<T extends { new(level: number): Creatures }>(name: string, level: number, ctor: T) {

        const bambooRatCook = new ctor(level);
        bambooRatCook.name = name;
        bambooRatCook.addPower(level * 10);
        return bambooRatCook;
    }
    componentWillMount() {

        // 生成队友
        this.teammate.push(this.createCreatures('比卡丘', 100, BambooRat));
        this.teammate.push(this.createCreatures('雷丘', 100, BambooRat));
        this.teammate.push(this.createCreatures('华农兄弟', 100, BambooRatCook));
        this.teammate.forEach(m => {
            m.isTeammate = true;
        });

        this.worldMaps = new MapData();
        const root = this.worldMaps.root!;
        root.picSrc = beginPic;
        const map = this.createNewWorldMaps();
        this.worlds.push({
            x: root.x,
            y: root.y,
            maps: map,
            curentMap: map.root
        });
        this.currentWorldMaps = this.worlds[0].maps;

        this.worlds.push(this.createNewWorld());
        this.worlds.push(this.createNewWorld());
        this.worlds.push(this.createNewWorld());
        this.worlds.push(this.createNewWorld());
        this.worlds.push(this.createNewWorld());

    }
    createNewWorld() {
        const idx = (Math.random() * worldPicList.length) | 0;
        let next = this.worldMaps.addRandomNode();
        next.picSrc = worldPicList[idx];
        const map = this.createNewWorldMaps();
        return {
            x: next.x,
            y: next.y,
            maps: map,
            curentMap: map.root
        };
    }
    worlds: {
        x: number;
        y: number;
        maps: MapData;
        curentMap: MapFragmentsNode;
    }[] = [];
    setCurrentWorld(x: number, y: number) {

        const world = this.worlds.find(m => {
            if (m.x === x && m.y === y) {
                return true;
            }
            return false;
        })!;

        this.currentWorldMaps = world.maps;
        this.currentMap = world.curentMap;

    }

    createNewWorldMaps() {
        const map = new MapData();
        map.root.picSrc = castle;
        for (let j = 0; j < 15; j++) {

            for (let i = 0; i < 8; i++) {
                map.addRandomNode();
            }
            map.addRandomNode().picSrc = castle;

            for (let i = 0; i < 8; i++) {
                map.addRandomNode();
            }
            map.addRandomNode().picSrc = mountain;
        }
        return map;

    }
    onMoveToMap = (inst: MapFragments, mapNode: MapFragmentsNode) => {
        return true;
    }
    worldMaps: MapData;
    currentWorldMaps: MapData;
    content: React.ReactNode;
    fnWin: () => void;
    fnLose: () => void;
    encounters = (fnWin: () => void, fnLose: () => void) => {
        // this.stateBoxStyle[0].display = 'none';
        this.stateBoxStyle[2].display = true;
        this.fnWin = fnWin;
        this.fnLose = fnLose;
        this.enemys = this.createEnemys();
        this.nextTick++;
    }
    getEnemyCreaturesCtor(): { new(level: number): Creatures } {
        let idx = Math.random() * allCreatures.length | 0;
        return (allCreatures[idx] as any).constructor;
        // for (const c of allCreatures) {

        // };
    }
    createEnemys() {
        const enemys: Creatures[] = [];
        let level = 5;
        const len = (Math.random() * Math.random() * Math.random() * 3 + Math.random() * Math.random() * 2 + Math.random() * 1) | 0 + 1;
        let nameHash: { [index: string]: number } = {};
        for (let i = 0; i < len; i++) {
            let levelN = level - 3 + Math.random() * 4 | 0;
            const ctor = this.getEnemyCreaturesCtor();
            const enemy = new ctor(levelN);
            let name = enemy.baseName;
            let idx = nameHash[name];
            if (idx) {
                idx++;
                nameHash[name] = idx;
                name = name + idx;
            } else {
                nameHash[name] = 1;
            }
            enemy.name = '野生的' + name;
            enemy.addPower(levelN * 10);
            enemys.push(enemy);

        }
        return enemys;
    }
    wrapClassName = this.cssClass.key + clsMap.modal;
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        this.cssClass.parse(clsMap.modal);
        return (
            <Antd.Modal width={1200} footer={null} visible={true} wrapClassName={this.wrapClassName}>
                <div EClass={clsMap.box}>
                    {
                        this.stateBoxStyle[0].display ?
                            <div EClass={clsMap.stateBox}>

                                <div EClass={clsMap.mapBox}>
                                    <Map encounters={this.encounters} onMoveToMap={this.onMoveToMap} curent={this.currentMap} world={this.currentWorldMaps} creatures={this.teammate[0]} width={1180} height={580} ref={this.onRefMap} return={this.onMapReturnWorld} />
                                </div>
                            </div>
                            : null
                    }
                    {
                        this.stateBoxStyle[1].display ?
                            <div EClass={clsMap.stateBox}>

                                <div EClass={clsMap.mapBox}>
                                    <World worlds={this.worldMaps} creatures={this.teammate[0]} width={1180} height={580} ref={this.onRefWorld} onEnterWorld={this.onEnterWorld} />
                                </div>
                            </div>
                            : null
                    }
                    {
                        this.stateBoxStyle[2].display ?
                            <div EClass={clsMap.stateBox}>
                                <Game2048 enemys={this.enemys} onWin={this.onWin} teammate={this.teammate} />
                            </div>
                            : null
                    }
                </div >

            </Antd.Modal >
        );
    }
}