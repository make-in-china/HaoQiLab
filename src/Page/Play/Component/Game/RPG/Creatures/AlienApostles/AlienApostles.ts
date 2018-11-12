import { Creatures, Property } from '../Creatures';
import { allSkill } from '../../AllSkill';
const pic1 = require('./pic1.png');
const pic2 = require('./pic2.png');

export class AlienApostles extends Creatures {

    baseName = '异形使徒';
    description = '来自异星的圣徒';
    featureDescription = '用异星圣焰净化一切外恶';

    passiveSkillList = [
        allSkill.bambooRatDodge
    ];
    constructor(level: number) {
        super(
            level,
            [pic1, pic2],
            new Property<[number, number]>('撕咬力', [20, 30]),
            [
                allSkill.righteousFire, // 回头加个1血隐身
            ]);
        this.base.fireResistance = 50;
    }
}
