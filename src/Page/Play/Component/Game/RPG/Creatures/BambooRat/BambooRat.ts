import { Creatures, Property } from '../../Creatures';
import { allSkill } from '../../AllSkill';
const pic1 = require('./pic1.png');
const pic2 = require('./pic2.png');

export class BambooRat extends Creatures {

    baseName = '竹鼠';
    description = '可通过竹鼠厨师召唤获得';
    featureDescription = '几率攻击，几率睡眠，睡两回合，睡眠结束回血30%，几率闪躲，几率卖萌，卖萌时可再行动一次，几率进食，进食时回血10%';

    passiveSkillList = [
        allSkill.bambooRatDodge
    ];
    constructor(level: number) {
        super(
            level,
            [pic1, pic2],
            new Property<[number, number]>('咬合力', [12, 24]),
            [
                allSkill.bambooRatBite,
                allSkill.bambooRatSleep,
                allSkill.bambooRatPlayingCute,
                allSkill.bambooRatEat,
                allSkill.bambooRatFreeze
            ]);

    }
}
