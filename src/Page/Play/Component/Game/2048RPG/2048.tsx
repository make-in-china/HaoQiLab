
import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
// import { Antd } from 'antd-more';
import RPG from '../RPG/APP';
// import { allCreatures } from '../RPG/AllCreatures';
import { Creatures } from '../RPG/Creatures/Creatures';
import Cell, { CellData } from './Cell';
import OutCell from './OutCell';
import { Equipment } from '../RPG/Equip/Equipment';
import EquipmentInfo from '../RPG/Equip/EquipmentInfo';
import { Antd } from 'antd-more';

const size = 36;
const enum MoveWay {
    up = 0,
    left = 1,
    down = 2,
    right = 3
}
type MoveState = {
    isUp: boolean;
    cell: Cell;
};

const enum MoveStateCellsXOrY {
    x = 0,
    y = 1
}

// const Select = Antd.Select;
// const Option = Select.Option;
const { config, clsMap } = eClassConfig({
    box: css`
        color:#fff;
        left:10px;right:10px;top:10px;height:580px;padding:5px;position:absolute;
        background-color:rgba(0, 0, 0, 0.62);border-radius: 50px;overflow:hidden;`,

    toolBox: css`margin:5px;`,
    actionCount: css`width:8em;margin:5px;display:inline-block;`,
    power: css`width:8em;margin:5px;display:inline-block;`,
    creaturesBox: css`display:inline-block;`,
    showBox: css`margin-left:2px;margin-top:4px;`,
    showOutBox: css`
        overflow: hidden;
        position: absolute;
        bottom: 0;`,
    centerBox: [css`margin-left:${size}px;`],
    topBox: [css`height:${size}px;margin-left:${size}px;`],
    leftBox: [css`width:${size}px;margin-top:${size + 2}px;`],
    rightBox: [css`width:${size}px;margin-top:${size}px;`],
    bottomBox: [css`height:${size}px;margin-left:${size}px;`],
    warBox: css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;`,
    gameInfoBox: css`
        min-width:10em;
        display:inline-block;
        position: absolute;
        font-size: 40px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        color:#f55;`,
    winBox: [_`gameInfoBox`],
    gameOverBox: [_`gameInfoBox`, css`color:#fff;`],
});
@React.eclass(config)
@observer
export default class Game2048
    extends React.Component<{
        teammate: Creatures[]
        enemys: Creatures[]
        onWin: () => void
    }> {
    @observable nextTick = 0;
    cellBox = {
        left: [] as React.ReactNode[],
        right: [] as React.ReactNode[],
        top: [] as React.ReactNode[],
        bottom: [] as React.ReactNode[],
        center: [] as React.ReactNode[][],
    };

    win: boolean = false;
    power: number = 100;
    actionCount = 0;
    mode: 4 | 5 | 6 = 5;
    gameOver: boolean = false;
    rpg: RPG;
    cellRefs = {
        left: [] as Cell[],
        right: [] as Cell[],
        top: [] as Cell[],
        bottom: [] as Cell[],
        center: [] as Cell[][],
    };
    awards: Equipment[];
    onWin = (equipmentList: Equipment[]) => {
        this.awards = equipmentList;
        // if (this.rpg.war.weWin) {
        this.win = true;
        this.nextTick++;
        // setTimeout(() => {
        //     this.props.onWin();
        // }, 2000);
        // } else if (this.rpg.war.weDead) {
        //     this.gameOver = true;
        // }
    }
    goBackMap = () => {
        this.props.onWin();
    }
    constructor(props: Game2048['props']) {
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
        this.setMode(this.mode);
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
                        debugger;
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
    getRandomCellIdx(mode: 4 | 5 | 6): [number, number] {
        const index = (Math.random() * mode * mode) | 0;
        const i = (index / mode) | 0;
        const j = index % mode;
        return [i + 1, j + 1];
    }
    moveUp() {
        this.moveCells(MoveWay.up);
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
        // this.rpg.round();

        this.nextTick++;
    }
    private getRandomCreatures(): Creatures {
        const idx = (this.props.teammate.length * Math.random()) | 0;
        return this.props.teammate[idx];
    }
    getRandomCellData() {
        return {
            creatures: (Math.random() < 0.75) ? null : this.getRandomCreatures(),
            value: ((Math.random() * 2 + 1) | 0) * 2
        };
    }
    powerPool: number[] = [];
    addPower(value: number) {
        this.powerPool.push(value);
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
    onRefRPG = (inst: RPG | null) => {
        if (inst) {
            this.rpg = inst;
        }
    }
    modeChange = (v: '4' | '5' | '6') => {
        this.mode = Number(v) as any;
        this.setMode(this.mode);
        this.nextTick++;
    }
    onStartWar = () => {
        this.win = false;
        this.gameOver = false;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.toolBox}>
                    {/* <Select defaultValue="6 Ⅹ 6" style={{ width: 120 }} onChange={this.modeChange}>
                            <Option value="4">4 Ⅹ 4</Option>
                            <Option value="5">5 Ⅹ 5</Option>
                            <Option value="6">6 Ⅹ 6</Option>
                        </Select> */}
                    <span EClass={clsMap.actionCount}>行动数 {this.actionCount}</span>
                    <span EClass={clsMap.power}>能量:{this.power}</span>
                </div>
                {/* <div EClass={clsMap.creaturesBox}>
                    <div>角色列表</div>
                    <Select placeholder="增加角色" defaultValue={['竹鼠厨师']} mode="multiple" style={{ width: 120 }} onChange={this.modeChange}>
                        {allCreatures.map(m => (<Option value={m.baseName}>{m.baseName}</Option>))}
                    </Select>
                </div> */}
                <div EClass={clsMap.warBox}>
                    <RPG onWin={this.onWin} onStartWar={this.onStartWar} enemys={this.props.enemys} ref={this.onRefRPG} teammate={this.props.teammate} />
                </div>
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
                {
                    this.win ? (
                        <div EClass={clsMap.winBox}>
                            <div EClass={clsMap.winBox}>
                                <div>游戏胜利！</div>
                            </div>
                            <div EClass={clsMap.winBox}>
                                <div>{this.awards.map((m, i) => {
                                    return (
                                        <EquipmentInfo key={i} equipment={m} />
                                    );
                                })}</div>
                            </div>
                            <div EClass={clsMap.winBox}>
                                <Antd.Button onClick={this.goBackMap}>{this.awards.length > 0 ? '收取奖励' : ''}继续游戏</Antd.Button>
                            </div>
                        </div>)
                        : (this.gameOver && (<div EClass={clsMap.gameOverBox}><div>游戏失败！</div></div>))}
            </div>
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
