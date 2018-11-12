import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
import { Creatures } from './Creatures/Creatures';
import { Antd } from 'antd-more';

const { config, clsMap } = eClassConfig({
    box: css`
        padding: 5px;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.1);
    `,
    name: css`font-size:12px;font-weight:bold;`,
    skill: css`font-size:12px;color:#f00;`,
    skillName: css`display:inline-block;margin:0 5px;color:#0c5;`,
    image: css`text-align:center;`,
    description: css`font-size:12px;color:#808080;`,
    featureDescription: css`font-size:12px;color:#af6025;`
});
@React.eclass(config)
@observer
export default class CreaturesInfo
    extends React.Component<{
        creatures: Creatures
    }> {
    @observable nextTick = 0;

    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        const m = this.props.creatures;
        return (
            <div EClass={clsMap.box} className={this.props.className}>
                <div EClass={clsMap.name}>LV: {this.props.creatures.level} {this.props.creatures.name}</div>
                <Antd.Progress style={{ width: 36 }} strokeColor="#f00" width={20} percent={m.hp / m.computed.maxHP * 100} strokeWidth={5} showInfo={false} />
                <span style={{ color: '#f00' }}>{m.hp !== 0 ? m.hp : '死亡'}</span>
                <div EClass={clsMap.image}><img src={this.props.creatures.picture[1]} /></div>
                <div EClass={clsMap.skill}>技能：{
                    m.skillList.map(s => {
                        return (<span EClass={clsMap.skillName} key={s.name}>{s.name}</span>);
                    })
                }</div>
                <div EClass={clsMap.description}>{this.props.creatures.description}</div>
                <div EClass={clsMap.featureDescription}>{this.props.creatures.featureDescription}</div>
            </div>
        );
    }
}
