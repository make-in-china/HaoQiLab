
import React, { css } from 'react-ex';
import { observer, observable } from 'mobx-index';

import { eClassConfig } from 'src/CSS/G.Class';
import { SpikedClub } from './RPG/Equip/Equipment/Weapon/Club/SpikedClub';
import EquipmentInfo from './RPG/Equip/EquipmentInfo';
import { Creatures } from './RPG/Creatures/Creatures';
import { BambooRatCook } from './RPG/Creatures/BambooRatCook/BambooRatCook';
import { Equipment, EquipmentRare } from './RPG/Equip/Equipment';
import { MouseEvent } from 'react';
import { makeRandomEquipment } from './RPG/Equip/Equipment/allEquipment';
const { config, clsMap } = eClassConfig({
    box: css`cursor:pointer;background-color:#001529;color:#a6adb4;width:1200px;height:640px;overflow:auto;padding:5px;box-sizing:border-box;`,
    slotName: css`width:4em;text-align:right;display:inline-block;`,
    nBox: css`display:inline-block;width:200px;vertical-align:top;`,
    manListBox: css`display:inline-block;width:400px;vertical-align:top;`,
    creaturesBox: css`padding:5;`
});
@React.eclass(config)
@React.eclass(config)
@observer
export default class Test2048
    extends React.Component<{}> {
    @observable nextTick = 0;
    showEquipmenet: Equipment | null = null;

    componentWillMount() {

        let man100 = this.createCreatures('100级', 100, BambooRatCook);
        let man5 = this.createCreatures('5级', 5, BambooRatCook);

        for (let i = 0; i < 8; i++) {
            man100.equip(makeRandomEquipment(100));
        }
        for (let i = 0; i < 8; i++) {
            man5.equip(makeRandomEquipment(5));
        }

        this.arr = [man100, man5];
        this.showEquipmenet = null;
    }
    arr: Creatures[];
    componentWillReceiveProps() {
        this.componentWillMount();
        this.nextTick++;
    }
    createCreatures<T extends { new(level: number): Creatures }>(name: string, level: number, ctor: T) {

        const bambooRatCook = new ctor(level);
        bambooRatCook.name = name;
        bambooRatCook.addPower(level * 10);
        return bambooRatCook;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        const color = {
            [EquipmentRare.white]: '#888',
            [EquipmentRare.magic]: '#26f',
            [EquipmentRare.rare]: '#ff0',
            [EquipmentRare.legendary]: '#f50'
        };
        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.manListBox}>
                    {
                        this.arr.map(man => {
                            return (
                                <div key={man.name} EClass={clsMap.creaturesBox}>
                                    <div>{man.name}</div>
                                    <div>
                                        <div EClass={clsMap.nBox}>
                                            <div>力　　量：{man.computed.power}</div>
                                            <div>智　　力：{man.computed.intelligence}</div>
                                            <div>心　　志：{man.computed.mind}</div>
                                            <div>敏　　捷：{man.computed.dex}</div>
                                            <div>最大生命：{man.computed.maxHP}</div>
                                            <div>单次可能伤害：{man.normalAttackDamage}</div>
                                            <div>单次物理伤害：{man.computed.physicalDamage.join('-')}</div>
                                            <div>单次火焰伤害：{man.computed.fireDamage.join('-')}</div>
                                            <div>单次冰冷伤害：{man.computed.coldDamage.join('-')}</div>
                                            <div>单次闪电伤害：{man.computed.lightningDamage.join('-')}</div>
                                            <div>单次混沌伤害：{man.computed.chaosDamage.join('-')}</div>
                                            <div>防　　御：{man.computed.armor}</div>
                                            <div>闪　　避：{man.computed.evasion}</div>
                                        </div>
                                        <div EClass={clsMap.nBox}>
                                            {
                                                man.slotList.map((m, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <span EClass={clsMap.slotName}>{m.slot.type}</span> :
                                                    {
                                                                (m.equipment ? ['[', (<span style={{ color: (color[m.equipment.rare]) }} onMouseOver={this.makeOnMouseOverWeapon(m.equipment)}>{m.equipment.name}</span>), ']'] : null)}

                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>);
                        })
                    }
                </div>
                {
                    this.showEquipmenet ? (
                        <div EClass={clsMap.nBox}>
                            <EquipmentInfo equipment={this.showEquipmenet} />
                        </div>
                    ) : null}
            </div>
        );
    }
    makeOnMouseOverWeapon(equipment: Equipment) {
        return (event: MouseEvent<HTMLAnchorElement>) => {
            this.showEquipmenet = equipment;
            this.nextTick++;
        };
    }
    test1() {
        let arr = [];
        for (let i = 0; i < 1; i++) {
            let club = new SpikedClub(Math.random() * 100 | 0);
            club.resetAffix();
            arr.push(club);
        }
        return arr.map((m, i) => {
            return (<EquipmentInfo key={i} equipment={m} />);
        });
    }
}
