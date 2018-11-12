import { Creatures, Property } from '../Creatures';
import { allSkill } from '../../AllSkill';
import { makeHumanEquipmentSlot } from '../../Equip/EquipmentSlot/SlotsHepler';
const pic1 = require('./pic1.png');
const pic2 = require('./pic2.png');

export class BambooRatCook extends Creatures {

    baseName = '竹鼠厨师';
    description = '冷不丁消灭一只竹鼠';
    featureDescription = '召唤一只固有竹鼠，当竹鼠攻击、进食、受伤、睡眠、卖萌时，10%几率烹饪竹鼠。进食竹鼠后回血10%。竹鼠被攻击时，厨师会反击攻击竹鼠的那个敌人，竹鼠被打死时会狂怒，并重新召唤一只竹鼠';
    slotList = makeHumanEquipmentSlot();
    passiveSkillList = [
        allSkill.bambooRatCookSummon
    ];
    constructor(level: number) {
        super(
            level,
            [pic1, pic2],
            new Property<[number, number]>('腕力', [12, 24]),
            []
        );
    }
}
