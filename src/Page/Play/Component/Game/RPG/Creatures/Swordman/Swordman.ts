import { Creatures, Property } from '../Creatures';
import { allSkill } from '../../AllSkill';
import { makeHumanEquipmentSlot } from '../../Equip/EquipmentSlot/SlotsHepler';
const pic1 = require('./pic1.png');
const pic2 = require('./pic2.png');

export class Swordman extends Creatures {

    baseName = '剑士';
    description = '剑士';
    featureDescription = '生平使用强大的力量和心志控制手里的剑与强劲的敌人交锋';
    slotList = makeHumanEquipmentSlot();
    passiveSkillList = [];
    constructor(level: number) {
        super(
            level,
            [pic1, pic2],
            new Property<[number, number]>('斩击力', [12, 24]),
            [allSkill.fastAttack]
        );
    }
}
