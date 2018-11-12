import { Creatures } from './Creatures/Creatures';
import { War } from './War';
import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
import { Antd } from 'antd-more';
import ActionScroll from './ActionScroll';
import CreaturesInfo from './CreaturesInfo';
import { Skill } from './Skill';
import { Equipment } from './Equip/Equipment';

const { config, clsMap } = eClassConfig({
    box: css`padding:5px;height:600px;overflow:auto;`,
    creaturesBox: [css`
        padding:2px;font-size:12px;color:#888;text-align:center;
    `],
    creaturesInfoBox: css`
        height:260px;
        overflow:auto;
        position: absolute;
        left:10px;
        top:40px;
        width:200px;
        `,
    consoleBox: css`
        padding: 5px;
        border-radius: 5px;
        height: 200px;
        overflow: auto;
        font-size: 8px;
        background-color: rgba(255,255,255,0.1);
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 360px;`,
    infoBox: css`display: inline-block; width: 10em;`,
    fightBox: css`position:absolute;top:100px;right: 0;left: 0;`,
    skillName: css`color:#0c5;`,
    skillNameBox: [css`position:absolute;padding:0 3px;top:20px;transform:translateX(-50%);left: 50%;animation:skill 2s;border:1px solid #888;border-radius:3px;`, {
        '{}@keyframes skill': `
            0% {margin-top:10px;opacity:0;}
            33% {margin-top:0px;opacity:1;}
            66% {margin-top:0px;opacity:1;}
            100% {margin-top:-10px;opacity:0;}
        `
    }],
    teammateMoveIn: [css`animation:teammateMoveIn 1s;`, {
        '{}@keyframes teammateMoveIn': `
            from {margin-top:50px;opacity:0;}
            to {margin-top:0px;opacity:1;}
        `
    }],
    teammateMoveOut: [css`animation:teammateMoveOut 8s;`, {
        '{}@keyframes teammateMoveOut': `
            0% {margin-top:0px;}
            80% {margin-top:0px;}
            100% {margin-top:-400px;}
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
        onWin: (equipmentList: Equipment[]) => void
        onStartWar: () => void
    }> {
    @observable nextTick = 0;

    war: War;

    messageList: React.ReactNode[] = [];
    actionCreatures: Creatures | null = null;
    hurtCreatures: Creatures | null = null;
    hurtDamage: number | null = null;
    consoleBox: HTMLDivElement;
    actionScroll: ActionScroll;

    actionSkill: Skill | null = null;

    timeCloseActionSkill: number;
    onActionScroll = (actionStack: War['actionStack']) => {
        this.actionScroll.updateActionStack(actionStack);
    }
    onRefActionScroll = (inst: ActionScroll | null) => {
        if (inst) {
            this.actionScroll = inst;
        }
    }
    onAction = (creatures: Creatures) => {
        this.actionCreatures = creatures;
        this.actionSkill = null;
        this.pickMessage();
    }
    onHurtByHit = (who: Creatures, from: Creatures, damage: number) => {
        this.onHurt(who, damage);
    }
    onHurtByDamageOverTime = (who: Creatures, from: Creatures, skill: Skill, damage: number) => {
        this.onHurt(who, damage);
    }
    onSkill = (skill: Skill, from: Creatures) => {
        if (this.actionSkill) {
            window.clearTimeout(this.timeCloseActionSkill);
            this.nextTick++;
        }
        this.actionSkill = skill;
        this.actionCreatures = from;
        this.timeCloseActionSkill = window.setTimeout(() => {
            this.actionSkill = null;
            // this.actionSkillCreatures = null;
            this.nextTick++;
        }, 2000);
        this.nextTick++;
    }
    timeCloseHurt: number;
    win = false;
    onWin = (equipmentList: Equipment[]) => {
        // this.war = null;
        this.win = true;
        // this.actionScroll.stop();
        this.nextTick++;
        this.props.onWin(equipmentList);
    }
    private onHurt(who: Creatures, damage: number) {
        if (this.hurtCreatures) {
            window.clearTimeout(this.timeCloseHurt);
            this.nextTick++;
        }
        this.hurtCreatures = who;
        this.hurtDamage = damage;
        this.timeCloseHurt = window.setTimeout(() => {
            this.hurtCreatures = null;
            this.hurtDamage = null;
            this.nextTick++;
        }, 2000);
        this.nextTick++;
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
        this.actionSkill = null;
        this.win = false;
        this.actionCreatures = null;
        if (this.war) {
            this.war.endAction();
        }
        props.onStartWar();
        this.war = new War(
            props.teammate.slice(),
            props.enemys.slice(),
            this.onActionScroll,
            this.onAction,
            this.onWin,
            this.onSkill,
            this.onHurtByHit,
            this.onHurtByDamageOverTime
        );

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
    componentWillReceiveProps(props: this['props'], newProps: this['props']) {
        this.nextTick++;
        // if (!this.war) {
        //     this.init(props);
        // } else {
        //     debugger;
        // }
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.fightBox}>
                    {!this.win && <div EClass={clsMap.creaturesBox}>
                        {this.war.enemys.map((m, i) => {
                            return (
                                <span key={i} EClass={clsMap.infoBox}>
                                    lv:{m.level} {m.name} {this.hurtCreatures === m ? <span style={{ color: '#f00' }}>{-this.hurtDamage!}</span> : null}
                                    <br />
                                    {!this.win && m === this.actionCreatures ? (<span style={{ marginTop: -90 }} EClass={clsMap.target}>◆</span>) : null}
                                    <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                                    <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                                    <br />
                                    <img style={{ opacity: (m.hp === 0 ? 0.2 : 1) }} src={m.picture[1]} />
                                </span>);
                        })}
                    </div>}
                    <div EClass={[clsMap.creaturesBox, (this.war!.weWin ? clsMap.teammateMoveOut : clsMap.teammateMoveIn)]} >
                        {this.war.teammate.map((m, i) => (
                            <span key={i} EClass={clsMap.infoBox}>
                                <img style={{ opacity: (m.hp === 0 ? 0.2 : 1) }} src={m.picture[0]} />
                                <br />
                                <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                                <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                                <br />
                                {!this.win && m === this.actionCreatures ? (<span style={{ marginTop: 20 }} EClass={clsMap.target}>◆</span>) : null}
                                lv:{m.level} {m.name} {this.hurtCreatures === m ? <span style={{ color: '#f00' }}>{-this.hurtDamage!}</span> : null}
                            </span>))}
                    </div>
                </div>
                {
                    this.actionCreatures ? (
                        <CreaturesInfo EClass={clsMap.creaturesInfoBox} creatures={this.actionCreatures} />
                    ) : null
                }
                <ActionScroll EClass={clsMap.scrollBox} ref={this.onRefActionScroll} />
                <div ref={this.onRefConsoleBox} EClass={clsMap.consoleBox}>
                    {this.messageList}
                </div>
                {this.actionSkill ? <div EClass={clsMap.skillNameBox}>{this.actionCreatures!.name} 使用了：<span EClass={clsMap.skillName}>{this.actionSkill.fullName}</span></div> : null}
            </div>
        );
    }
}
