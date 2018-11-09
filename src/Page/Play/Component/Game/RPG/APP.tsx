import { Creatures } from './Creatures';
import { BambooRat } from './Creatures/BambooRat/BambooRat';
import { War } from './War';
import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
import { Antd } from 'antd-more';

const { config, clsMap } = eClassConfig({
    box: css`padding:5px;height:550px;overflow:auto;`,
    creaturesBox: css`padding:2px;font-size:12px;color:#888;text-align:center;`,
    consoleBox: css`height:200px;overflow:auto;font-size:8px;`,
    infoBox: css`display: inline-block; width: 10em;`,
});
@React.eclass(config)
@observer
export default class RPG
    extends React.Component<{
        teammate: Creatures[]
    }> {
    @observable nextTick = 0;

    war: War;

    messageList: React.ReactNode[] = [];
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
        this.war.round();
        this.pickMessage();

    }
    componentWillMount() {

        const teammate: Creatures[] = this.props.teammate;
        const enemys: Creatures[] = [];

        function createBambooRat(name: string) {

            const bambooRat = new BambooRat(5);
            bambooRat.name = name;
            bambooRat.addPower(50);
            return bambooRat;

        }

        // 生成3个竹鼠
        enemys.push(createBambooRat('野生竹鼠1'));
        enemys.push(createBambooRat('野生竹鼠2'));
        enemys.push(createBambooRat('野生竹鼠3'));

        this.war = new War(teammate, enemys);

        this.war.action();
        this.pickMessage();
    }
    consoleBox: HTMLDivElement;
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
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.creaturesBox}>
                    {this.war.enemys.map((m, i) => (
                        <span key={i} EClass={clsMap.infoBox}>
                            lv:{m.level} {m.name}
                            <br />
                            <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                            <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                            <br />
                            <img style={{ opacity: (m.hp === 0 ? 0.2 : 1) }} src={m.picture[1]} />
                        </span>))}
                </div>
                <div EClass={clsMap.creaturesBox} style={{ marginTop: -15 }}>
                    {this.war.teammate.map((m, i) => (
                        <span key={i} EClass={clsMap.infoBox}>
                            <img style={{ opacity: (m.hp === 0 ? 0.2 : 1) }} src={m.picture[0]} />
                            <br />
                            <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                            <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                            <br />
                            lv:{m.level} {m.name}
                        </span>))}
                </div>
                <div ref={this.onRefConsoleBox} EClass={clsMap.consoleBox}>
                    {this.messageList}
                </div>
            </div>
        );
    }
}
