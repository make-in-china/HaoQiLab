
import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { TimeNodeClassInstance } from 'src/Data/TimeNode/TimeNode';
import { eClassConfig } from 'src/CSS/G.Class';
import { Antd } from 'antd-more';
import Cell, { CellData } from './Cell';
import OutCell from './OutCell';
import RPG from '../RPG/APP';
import { allCreatures } from '../RPG/AllCreatures';
import { BambooRatCook } from '../RPG/Creatures/BambooRatCook/BambooRatCook';
import { Creatures } from '../RPG/Creatures';
import { Map } from '../Map/Map';
import { World } from '../Map/World';
import { WorldFragments } from '../Map/WorldFragments';
import { MapData, MapFragmentsNode } from '../Map/MapData';
import { MapFragments } from '../Map/MapFragments';
const beginPic = require('../Map/WorldIcon/begin.png');
const castle = require('../Map/Icon/castle.png');
const mountain = require('../Map/Icon/mountain.png');
const enum MoveWay {
    up = 0,
    left = 1,
    down = 2,
    right = 3
}
const size = 36;
type MoveState = {
    isUp: boolean;
    cell: Cell;
};
const enum MoveStateCellsXOrY {
    x = 0,
    y = 1
}
const Select = Antd.Select;
const Option = Select.Option;
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
    showBox: [
        css`margin-left:2px;margin-top:4px;`
    ],
    showOutBox: css`overflow:hidden;margin:5px;display:inline-block;vertical-align:top;`,
    warBox: css`display:inline-block;width:540px;vertical-align:top;`,
    toolBox: css`margin:5px;`,
    centerBox: [css`margin-left:${size}px;`],
    topBox: [css`height:${size}px;margin-left:${size}px;`],
    leftBox: [css`width:${size}px;margin-top:${size + 2}px;`],
    rightBox: [css`width:${size}px;margin-top:${size}px;`],
    bottomBox: [css`height:${size}px;margin-left:${size}px;`],
    infoBox: css`margin-left:4px;text-align:center;font-size:16px;`,
    winBox: [_`infoBox`, { ' div': css`background-color:#0cf;color:#f55;` }],
    gameOverBox: [_`infoBox`, { ' div': css`background-color:#000;color:#fff;` }],
    actionCount: css`width:8em;margin:5px;display:inline-block;`,
    power: css`width:8em;margin:5px;display:inline-block;`,
    creatures: css``,
    creaturesBox: css`display:inline-block;`,
    mapBox: [
        _`full`, css`height:600px;display:inline-block;vertical-align:top;`]
});
@React.eclass(config)
@observer
export default class App
    extends React.Component<{}> {
    @observable nextTick = 0;
    node!: TimeNodeClassInstance;
    cellBox = {
        left: [] as React.ReactNode[],
        right: [] as React.ReactNode[],
        top: [] as React.ReactNode[],
        bottom: [] as React.ReactNode[],
        center: [] as React.ReactNode[][],
    };
    mode: 4 | 5 | 6 = 5;
    modeChange = (v: '4' | '5' | '6') => {
        this.mode = Number(v) as any;
        this.setMode(this.mode);
        this.nextTick++;
    }
    stateBoxStyle = [
        { display: 'none' },
        { display: 'block' },
        { display: 'none' }
    ];
    cellRefs = {
        left: [] as Cell[],
        right: [] as Cell[],
        top: [] as Cell[],
        bottom: [] as Cell[],
        center: [] as Cell[][],
    };
    actionCount = 0;
    onMapReturnWorld = () => {
        this.stateBoxStyle[0].display = 'none';
        this.stateBoxStyle[1].display = 'block';
        this.nextTick++;
    }
    onClickWorld = (inst: WorldFragments) => {
        this.stateBoxStyle[1].display = 'none';
        this.stateBoxStyle[0].display = 'block';

        this.setCurrentWorld(inst.x, inst.y);
        this.nextTick++;
    }
    private setMode(mode: 4 | 5 | 6) {
        this.yCellsList = null;
        this.xCellsList = null;
        this.gameOver = false;
        this.actionCount = 0;
        this.win = false;
        // 初始化表格和引用
        const cell = this.cellBox;
        cell.left = [];
        cell.right = [];
        cell.top = [];
        cell.bottom = [];
        cell.center = [];
        const cellRefs = this.cellRefs;
        cellRefs.left = [];
        cellRefs.right = [];
        cellRefs.top = [];
        cellRefs.bottom = [];
        cellRefs.center = [];

        const initDatas: [number, number][] = [];
        for (let i = 0; i < 3; i++) {
            const dataCell = this.getRandomCellIdx(mode);
            if (initDatas.findIndex(m => (m[0] === dataCell[0] && m[1] === dataCell[1])) === -1) {
                initDatas.push(dataCell);
            } else {
                i--;
            }
        }

        const onRefLeft = (inst: Cell | null) => {
            if (!inst) {
                return;
            }
            cellRefs.left.push(inst);
        };
        const onRefRight = (inst: Cell | null) => {
            if (!inst) {
                return;
            }
            cellRefs.right.push(inst);
        };
        const onRefTop = (inst: Cell | null) => {
            if (!inst) {
                return;
            }
            cellRefs.top.push(inst);
        };
        const onRefBottom = (inst: Cell | null) => {
            if (!inst) {
                return;
            }
            cellRefs.bottom.push(inst);
        };
        const makeRefCenter = (i: number) => {
            return (inst: Cell | null) => {
                if (!inst) {
                    return;
                }
                cellRefs.center[i - 1].push(inst);
            };
        };
        for (let i = 1; i <= mode; i++) {
            cell.left.push((<OutCell ref={onRefLeft} data={null} />));
            cell.right.push((<OutCell ref={onRefRight} data={null} />));
            cell.top.push((<OutCell ref={onRefTop} data={null} />));
            cell.bottom.push((<OutCell ref={onRefBottom} data={null} />));
            const content: React.ReactNode[] = [];

            const onRefCenter = makeRefCenter(i);
            for (let j = 1; j <= mode; j++) {
                let data: CellData | null = null;
                let className = '';
                for (let idx = 0; idx < 3; idx++) {
                    if (initDatas[idx][0] === i && initDatas[idx][1] === j) {
                        data = this.getRandomCellData();
                        className = 'cellStyle' + data;
                    }
                }
                content.push((<Cell x={j} y={j} className={className} ref={onRefCenter} data={data} />));
            }
            cell.center.push(content);
            cellRefs.center.push([]);
        }

        this.nextTick++;
    }
    addNumberToEmptyCell() {
        let allEmpty: Cell[] = [];
        this.cellRefs.center.forEach(lst => {
            lst.forEach(m => {
                if (m.data === null) {
                    allEmpty.push(m);
                }
            });
        });
        const len = allEmpty.length;
        const idx = (allEmpty.length * Math.random() | 0);

        allEmpty[idx].data = this.getRandomCellData();
        if (len === 1) {
            this.gameOver = true;
        }

        this.nextTick++;
    }
    private getRandomCreatures(): Creatures {
        const idx = (this.teammate.length * Math.random()) | 0;
        return this.teammate[idx];
    }
    teammate: Creatures[] = [];
    gameOver: boolean = false;
    rpg: RPG;
    map: Map;
    world: World;
    onRefRPG = (inst: RPG | null) => {
        if (inst) {
            this.rpg = inst;
        }
    }
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
    win: boolean = false;
    power: number = 100;
    getRandomCellIdx(mode: 4 | 5 | 6): [number, number] {
        const index = (Math.random() * mode * mode) | 0;
        const i = (index / mode) | 0;
        const j = index % mode;
        return [i + 1, j + 1];
    }

    private yCellsList: Cell[][] | null = null;
    get YCellsList() {
        if (this.yCellsList === null) {
            this.yCellsList = [];
            for (let i = 0; i < this.mode; i++) {
                const yCells: Cell[] = [];
                this.yCellsList.push(yCells);
                for (let j = 0; j < this.mode; j++) {
                    yCells.push(this.cellRefs.center[j][i]);
                }
            }
        }
        return this.yCellsList;
    }
    private xCellsList: Cell[][] | null = null;
    get XCellsList() {
        if (this.xCellsList === null) {
            this.xCellsList = [];
            for (let i = 0; i < this.mode; i++) {
                const xCells: Cell[] = [];
                this.xCellsList.push(xCells);
                for (let j = 0; j < this.mode; j++) {
                    xCells.push(this.cellRefs.center[i][j]);
                }
            }
        }
        return this.xCellsList;
    }
    private getMoveStateCellsList(xOrY: MoveStateCellsXOrY) {
        let cellsList: Cell[][];
        if (xOrY === MoveStateCellsXOrY.x) {
            cellsList = this.XCellsList;
        } else {
            cellsList = this.YCellsList;
        }

        const stateCellsList: MoveState[][] = [];
        cellsList.forEach(yCells => {
            const yStateCells: MoveState[] = [];
            stateCellsList.push(yStateCells);
            yCells.forEach(n => {
                yStateCells.push({
                    isUp: false, cell: n
                });
            });
        });
        return stateCellsList;
    }
    moveUp() {
        this.moveCells(MoveWay.up);
    }

    private moveCells(way: MoveWay) {
        /*
            循环每一列
            往前找相同值的未合并的格或空格，移动或合并，并标记已移动
        */
        this.actionCount++;

        let xOrY: MoveStateCellsXOrY;
        if (way === MoveWay.up || way === MoveWay.down) {
            xOrY = MoveStateCellsXOrY.y;
        } else {
            xOrY = MoveStateCellsXOrY.x;
        }
        const cellsList = this.getMoveStateCellsList(xOrY);
        cellsList.forEach(cells => {
            let { startIndex, endIndex, step } = getLoopParams(way, cells);
            let i: number = startIndex + step;
            while (i !== endIndex) {
                i = this.moveCell(cells, way, i) + step;
            }
        });
        setTimeout(() => {
            this.addNumberToEmptyCell();
        }, 200);

        this.commitPowerPool();
        this.rpg.round();
        if (this.rpg.war.weWin) {
            this.win = true;
        } else if (this.rpg.war.weDead) {
            this.gameOver = true;
        }
        this.nextTick++;
    }
    getRandomCellData() {
        return {
            creatures: (Math.random() < 0.75) ? null : this.getRandomCreatures(),
            value: ((Math.random() * 2 + 1) | 0) * 2
        };
    }
    commitPowerPool() {
        const hash: { [index: number]: number } = {};
        this.powerPool.forEach(v => {
            if (hash[v]) {
                hash[v]++;
            } else {
                hash[v] = 1;
            }
        });

        this.powerPool = [];
        let power = 0;
        let moreMessage = '';
        for (const key in hash) {
            const count = hash[key];
            const v = Number(key);
            power += v * (count + count - 1);
            if (count > 1) {
                moreMessage += `${v} * ${count} = ${v * count} 额外奖励:${v * (count - 1)}`;
            }
        }
        if (power > 0) {
            this.addMessage('能量 + ' + power);
            if (moreMessage.length > 0) {
                this.addMessage(moreMessage);
            }
            this.power += power;
        }

    }
    messages: string[] = [];
    addMessage(message: string) {

        this.messages.push(message);
        if (this.messages.length > 10) {
            this.messages.shift();
        }
    }
    powerPool: number[] = [];
    addPower(value: number) {
        this.powerPool.push(value);
    }
    findCanMoveCell(data: number, cells: MoveState[], way: MoveWay, startIndex: number, step: number, endIndex: number) {
        let empty: MoveState | null = null;
        for (let i = startIndex; i !== endIndex; i = i + step) {
            const cell = cells[i];
            if (cell.cell.data !== null) {
                if (cell.cell.data.value === data) {
                    if (cell.isUp) {
                        return empty;
                    } else {
                        return cell;
                    }
                } else {
                    return empty;
                }
            } else {
                empty = cell;
            }
        }
        return empty;
    }
    moveCell(cells: MoveState[], way: MoveWay, startIdx: number = (way === MoveWay.up || way === MoveWay.left) ? 0 : cells.length - 1): number {
        let { startIndex, endIndex, step } = getLoopParams(way, cells);
        let i = startIdx;
        for (; i !== endIndex; i = i + step) {
            const cell = cells[i];
            if (cell.cell.data !== null) {
                // 需要移动
                const preState = this.findCanMoveCell(cell.cell.data.value, cells, way, i - step, -step, startIndex - step);
                if (preState && preState !== cell) {
                    // 有可移动位置
                    if (preState.cell.data !== null) {
                        // 不是空位
                        const v = preState.cell.data.value * 2;
                        preState.cell.data.value = v;
                        this.addPower(v);
                        // if (v === 2044) {
                        //     this.win = true;
                        // }
                        preState.isUp = true;
                    } else {
                        // 是空位
                        preState.cell.data = cell.cell.data;
                    }
                    cell.cell.data = null;
                    return i;
                }
            }
        }
        return i - step;
    }

    moveDown() {
        this.moveCells(MoveWay.down);
    }
    moveLeft() {
        this.moveCells(MoveWay.left);
    }
    moveRight() {
        this.moveCells(MoveWay.right);
    }
    constructor(props: App['props']) {
        super(props);
        document.body.addEventListener('keydown', (ev: KeyboardEvent) => {
            if (this.gameOver || this.win) {
                return;
            }
            switch (ev.key) {
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
                default:
            }
            ev.stopPropagation();
            ev.preventDefault();
        });
    }
    componentWillMount() {

        function createBambooRatCook(name: string) {

            const bambooRatCook = new BambooRatCook(10);
            bambooRatCook.name = name;
            bambooRatCook.addPower(100);
            return bambooRatCook;
        }

        // 生成2个厨师
        this.teammate.push(createBambooRatCook('华农兄'));
        this.teammate.push(createBambooRatCook('华农弟'));

        this.setMode(this.mode);

        this.worldMaps = new MapData();
        const root = this.worldMaps.root!;
        root.picSrc = beginPic;
        this.worlds.push({
            x: root.x,
            y: root.y,
            maps: this.createNewWorldMaps()
        });
        this.currentWorldMaps = this.worlds[0].maps;

        this.worlds.push(this.createNewWorld());
        this.worlds.push(this.createNewWorld());
        this.worlds.push(this.createNewWorld());

    }
    createNewWorld() {

        let next = this.worldMaps.addRandomNode();
        next.picSrc = beginPic;
        return {
            x: next.x,
            y: next.y,
            maps: this.createNewWorldMaps()
        };
    }
    worlds: {
        x: number;
        y: number;
        maps: MapData;
    }[] = [];
    setCurrentWorld(x: number, y: number) {
        const world = this.worlds.find(m => {
            if (m.x === x && m.y === y) {
                return true;
            }
            return false;
        })!;
        this.currentWorldMaps = world.maps;
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
        return false;
    }
    worldMaps: MapData;
    currentWorldMaps: MapData;
    content: React.ReactNode;
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        const wrapClassName = this.cssClass.key + clsMap.modal;
        this.cssClass.parse(clsMap.modal);
        return (
            <Antd.Modal width={1200} footer={null} visible={true} wrapClassName={wrapClassName}>
                <div EClass={clsMap.box}>

                    <div EClass={clsMap.stateBox} style={{ display: this.stateBoxStyle[0].display }}>

                        <div EClass={clsMap.mapBox}>
                            <Map onMoveToMap={this.onMoveToMap} world={this.currentWorldMaps} creatures={this.teammate[0]} width={1180} height={580} ref={this.onRefMap} return={this.onMapReturnWorld} />
                        </div>
                    </div>
                    <div EClass={clsMap.stateBox} style={{ display: this.stateBoxStyle[1].display }}>

                        <div EClass={clsMap.mapBox}>
                            <World worlds={this.worldMaps} ref={this.onRefWorld} onClickWorld={this.onClickWorld} />
                        </div>
                    </div>
                    <div EClass={clsMap.stateBox} style={{ display: this.stateBoxStyle[2].display }}>
                        <div EClass={clsMap.toolBox}>
                            {/* <Select defaultValue="6 Ⅹ 6" style={{ width: 120 }} onChange={this.modeChange}>
                            <Option value="4">4 Ⅹ 4</Option>
                            <Option value="5">5 Ⅹ 5</Option>
                            <Option value="6">6 Ⅹ 6</Option>
                        </Select> */}
                            <span EClass={clsMap.actionCount}>回合数 {this.actionCount}</span>
                            <span EClass={clsMap.power}>能量:{this.power}</span>
                        </div>
                        <div EClass={clsMap.creaturesBox}>
                            <div>角色列表</div>
                            <Select placeholder="增加角色" defaultValue={['竹鼠厨师']} mode="multiple" style={{ width: 120 }} onChange={this.modeChange}>
                                {allCreatures.map(m => (<Option value={m.baseName}>{m.baseName}</Option>))}
                            </Select></div>
                        <div EClass={clsMap.showOutBox} style={{ width: size * (this.mode + 2) + 6, height: size * (this.mode + 2) + 6 }}>
                            <div EClass={clsMap.showBox}>
                                <div EClass={clsMap.leftBox}>
                                    {this.cellBox.left}
                                </div>
                                <div EClass={clsMap.topBox} style={{ marginTop: -size * (this.mode + 1) }}>
                                    {this.cellBox.top}
                                </div>
                                <div EClass={clsMap.centerBox}>
                                    {this.cellBox.center.map(m => (<div style={{ height: size }}>{m}</div>))}
                                </div>
                                <div EClass={clsMap.bottomBox}>
                                    {this.cellBox.bottom}
                                </div>
                                <div EClass={clsMap.rightBox} style={{ marginTop: -size * (this.mode + 1), marginLeft: size * (this.mode + 1) }}>
                                    {this.cellBox.right}
                                </div>
                            </div>
                        </div>
                        <div EClass={clsMap.warBox}>
                            <RPG ref={this.onRefRPG} teammate={this.teammate} />
                            {/* this.messages.map((m, i) => {
                            return <div key={i}>{m}</div>;
                        }) */}
                        </div>
                        {
                            this.win ? (<div style={{ width: size * this.mode + 2 }} EClass={clsMap.winBox}><div>游戏胜利！</div></div>) : (
                                this.gameOver && (<div style={{ width: size * this.mode + 2 }} EClass={clsMap.gameOverBox}><div>游戏失败！</div></div>)
                            )}

                    </div>
                </div >

            </Antd.Modal >
        );
    }
}

function getLoopParams(way: MoveWay, cells: MoveState[]) {
    let step: number;
    let endIndex: number;
    let startIndex: number;
    if (way === MoveWay.up || way === MoveWay.left) {
        step = 1;
        endIndex = cells.length;
        startIndex = 0;
    } else {
        step = -1;
        endIndex = -1;
        startIndex = cells.length - 1;
    }
    return { endIndex, step, startIndex };
}
