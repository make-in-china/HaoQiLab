import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
import { Creatures } from '../RPG/Creatures/Creatures';
export interface CellData {
    creatures: Creatures | null;
    value: number;
}
const { config, clsMap } = eClassConfig({
    cellBox: css`
        background-size: 80%;background-repeat: no-repeat;
        transition:background-color 200ms;background-position:50% 50%;
        vertical-align:top;margin-left:-2px;margin-top:-2px;padding:2px;
        border:2px solid rgba(255,255,255,0.1);width:38px;height:38px;line-height:1;
        box-sizing:border-box;display:inline-block;color:#555;
    `,
    no2: css`background-color:#ff0;`,
    no4: css`background-color:#fe0;`,
    no8: css`background-color:#fd0;`,
    no16: css`background-color:#fc0;`,
    no32: css`background-color:#fb0;`,
    no64: css`background-color:#fa0;`,
    no128: css`background-color:#f90;`,
    no256: css`background-color:#f80;`,
    no512: css`background-color:#f70;`,
    no1024: css`background-color:#f60;`,
    no2048: css`background-color:#f50;`
});
@React.eclass(config)
@observer
export default class Cell
    extends React.Component<{
        style?: React.CSSProperties
        data: CellData | null
        x: number
        y: number
    }> {
    @observable nextTick = 0;
    private d: CellData | null = null;
    get data() {
        return this.d;
    }
    set data(v: CellData | null) {
        this.setData(v);
    }
    private dStep: number = 0;
    private tID: number;
    private setData(v: CellData | null) {
        clearInterval(this.tID);
        const oldData = this.d ? this.d.value : 0;
        const newData = v ? v.value : 0;
        if (this.d === v) {
            return;
        }
        this.d = v;
        if (newData <= oldData) {
            this.dStep = newData;
            this.nextTick++;
            return;
        }
        this.dStep = oldData;
        this.tID = window.setInterval(() => {
            this.dStep += 2;

            if (this.dStep === newData) {
                clearInterval(this.tID);
            }
            this.nextTick++;
        }, 10);
    }
    x: number;
    y: number;

    constructor(props: Cell['props']) {
        super(props);
        this.init(props);

    }
    init(props: Cell['props']) {
        this.data = props.data;
        this.x = props.x;
        this.y = props.y;
    }
    componentWillReceiveProps(props: Cell['props']) {
        this.init(props);
        this.nextTick++;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        return (
            <div EClass={[clsMap.cellBox, this.d ? 'no' + this.d.value : '']} className={this.props.className} style={(this.d && this.d.creatures && { backgroundImage: `url(${this.d.creatures.picture[1]})` }||{})}>{this.dStep === 0 ? '' : this.dStep}</div >
        );
    }
}
