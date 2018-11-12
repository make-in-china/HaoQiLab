
import React, { css } from 'react-ex';
import { observer, observable } from 'mobx-index';

import { eClassConfig } from 'src/CSS/G.Class';
import { Antd } from 'antd-min';
import { isArray } from 'src/Lib/is';
import { EffecctDesction } from './EffectDesction';
import { Equipment } from './Equipment';
const { config, clsMap } = eClassConfig({
    box: [css`padding:3px;color:#808080;text-align:center;vertical-align:top;display: inline-block;`,
    {
        ' .ant-divider': css`margin:5px 0;border-color:#f40;`
    }
    ],
    equipment: css`width:300px;padding:5px;border:2px solid #ccc;margin:5px;
    border-radius:5px;font-size:12px;display:inline-block;box-shadow:0 0 3px rgba(0,0,0,0.5);background-color:rgba(0,0,0,0.8);`,
    equipBg1: css`border-color:#137ebd;`,
    equipBg2: css`border-color:#ff0;`,
    equipBg4: css`border-color:#f40;`,
    equipBg0: css`border-color:#eee;`,
    equipmentName: css`border:1px solid #ccc;text-align:center;padding:2px;`,
    nameBg1: css`border-color:#137ebd;color:#137ebd;`,
    nameBg2: css`border-color:#ff0;color:#ff0;`,
    nameBg4: css`border-color:#f40;color:#f40;`,
    nameBg0: css`border-color:#eee;color:#eee;`,
});
@React.eclass(config)
@observer
export default class EquipmentInfo
    extends React.Component<{
        equipment: Equipment

    }> {
    @observable nextTick = 0;
    componentWillReceiveProps(props: this['props']) {
        this.nextTick++;
    }
    makeElement(effecctDesction: EffecctDesction): React.ReactNode {
        return effecctDesction.template.map((k, j) => {
            let value = effecctDesction.args[j];
            if (value !== undefined) {
                let elemValue: React.ReactNode;
                if (isArray(value)) {
                    elemValue = value.map(p => {
                        return this.makeElement(p);
                    });
                } else {
                    elemValue = value;
                }
                if (/\{#.*?\}/.test(k)) {
                    return <span style={{ color: k.substr(1, k.length - 2), margin: '0 2px', display: 'inline-block' }}>{elemValue}</span>;
                    // } else if (typeof elemValue === 'number') {
                    //     return [k, (<span style={{ color: '#8888ff' }}>{value}</span>)];
                } else {
                    return [k, elemValue];
                }
            } else {
                return k;
            }

        });
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        let m = this.props.equipment;
        return (
            <div EClass={clsMap.box}>

                <div EClass={[clsMap.equipment, clsMap['equipBg' + m.rare]]} >
                    <div EClass={[clsMap.equipmentName, clsMap['nameBg' + m.rare]]}>lv{m.level} {m.name}</div>
                    {m.effectDesction().map(n => (
                        <div>{n === '-' ? (<Antd.Divider />) :
                            this.makeElement(n)
                        }</div>
                    ))}
                </div>
            </div>
        );
    }

}
