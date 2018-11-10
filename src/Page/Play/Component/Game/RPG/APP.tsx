import { Creatures } from './Creatures';
import { War } from './War';
import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
import { Antd } from 'antd-more';
import ActionScroll from './ActionScroll';

const { config, clsMap } = eClassConfig({
    box: css`padding:5px;height:600px;overflow:auto;`,
    creaturesBox: [css`
        padding:2px;font-size:12px;color:#888;text-align:center;
    `],
    consoleBox: css`
        padding: 5px;
        border-radius: 5px;
        height: 200px;
        overflow: auto;
        font-size: 8px;
        background-color: #ffffff0f;
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 360px;`,
    infoBox: css`display: inline-block; width: 10em;`,
    fightBox: css`position:absolute;top:100px;right: 0;left: 0;`,
    teammateMoveIn: [css`animation:teammateMoveIn 1s;`, {
        '{}@keyframes teammateMoveIn': `
            from {margin-top:50px;opacity:0;}
            to {margin-top:0px;opacity:1;}
        `
    }],
    teammateMoveOut: [css`animation:teammateMoveOut 4s;`, {
        '{}@keyframes teammateMoveOut': `
            from {margin-top:0px;}
            to {margin-top:-400px;}
        `
    }],
    scrollBox: css`position:absolute;left:300px;bottom:80px;width:400px;`,
    target: css`position: absolute;
    color: #ffca00;
    font-size: 50px;
    
    margin-left: 17px;`,
    // enemysMoveIn: [css`animation:enemysMoveIn 1s;`, {
    //     '{}@keyframes enemysMoveIn': `
    //         from {margin-top:-50px;}
    //         to {margin-top:0px;}
    //     `
    // }]
});
@React.eclass(config)
@observer
export default class RPG
    extends React.Component<{
        teammate: Creatures[]
        enemys: Creatures[]
        onWin: () => void
    }> {
    @observable nextTick = 0;

    war: War;

    messageList: React.ReactNode[] = [];
    consoleBox: HTMLDivElement;
    onActionScroll = (actionStack: War['actionStack']) => {
        this.actionScroll.upDateActionStack(actionStack);
    }
    onRefActionScroll = (inst: ActionScroll | null) => {
        if (inst) {
            this.actionScroll = inst;
        }
    }
    actionScroll: ActionScroll;
    actionCreatures: Creatures;
    onAction = (creatures: Creatures) => {
        this.actionCreatures = creatures;
        this.pickMessage();
    }
    private pickMessage() {
        const node = this.war.console.logList.shift();
        if (node) {
            this.messageList.push(node);
            this.nextTick++;
            setTimeout(() => {
                this.pickMessage();
            }, 60);
        }
    }
    round() {
        // this.war.round();
        // this.pickMessage();
        // 2048进来的数据
    }

    init(props: this['props']) {
        this.messageList = [];
        if (this.war) {
            this.war.endAction();
        }
        this.war = new War(props.teammate.slice(), props.enemys.slice(), this.onActionScroll, this.onAction, this.props.onWin);

        this.war.action();
        this.pickMessage();
    }
    componentWillMount() {
        this.init(this.props);
    }
    onRefConsoleBox = (inst: HTMLDivElement | null) => {
        if (inst) {
            this.consoleBox = inst;
        }
    }
    componentDidUpdate() {
        if (this.consoleBox) {
            this.consoleBox.scrollTop = this.consoleBox.scrollHeight;
        }

    }
    componentWillReceiveProps(props: this['props']) {
        if (this.war.weWin || this.war.weDead) {
            this.init(props);
        }
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.fightBox}>
                    <div EClass={clsMap.creaturesBox}>
                        {this.war.enemys.map((m, i) => {
                            return (
                                <span key={i} EClass={clsMap.infoBox}>
                                    lv:{m.level} {m.name}
                                    <br />
                                    {m === this.actionCreatures ? (<span style={{marginTop: -70}}  EClass={clsMap.target}>◆</span>) : null}
                                    <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                                    <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                                    <br />
                                    <img style={{ opacity: (m.hp === 0 ? 0.2 : 1) }} src={m.picture[1]} />
                                </span>);
                        })}
                    </div>
                    <div EClass={[clsMap.creaturesBox, (this.war.weWin ? clsMap.teammateMoveOut : clsMap.teammateMoveIn)]} >
                        {this.war.teammate.map((m, i) => (
                            <span key={i} EClass={clsMap.infoBox}>
                                <img style={{ opacity: (m.hp === 0 ? 0.2 : 1) }} src={m.picture[0]} />
                                <br />
                                <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                                <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                                <br />
                                {m === this.actionCreatures ? (<span style={{marginTop: 20}} EClass={clsMap.target}>◆</span>) : null}
                                lv:{m.level} {m.name}
                            </span>))}
                    </div>
                </div>
                <ActionScroll EClass={clsMap.scrollBox} ref={this.onRefActionScroll} />
                <div ref={this.onRefConsoleBox} EClass={clsMap.consoleBox}>
                    {this.messageList}
                </div>
            </div>
        );
    }
}
