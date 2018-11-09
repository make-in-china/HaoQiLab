import { BambooRatBite } from './Creatures/BambooRat/Skill/Bite';

import { BambooRatSleep } from './Creatures/BambooRat/Skill/Sleep';

import { BambooRatPlayingCute } from './Creatures/BambooRat/Skill/PlayingCute';

import { BambooRatFreeze } from './Creatures/BambooRat/Skill/Freeze';

import { BambooRatCookSummon } from './Creatures/BambooRatCook/Skill/Summon';
import { BambooRatDodge } from './Creatures/BambooRat/Skill/Dobge';
import { BambooRatEat } from './Creatures/BambooRat/Skill/Eat';

export const allSkill = {

    // 竹鼠技能
    bambooRatBite: new BambooRatBite(),
    bambooRatSleep: new BambooRatSleep(),
    bambooRatDodge: new BambooRatDodge(),
    bambooRatPlayingCute: new BambooRatPlayingCute(),
    bambooRatEat: new BambooRatEat(),
    bambooRatFreeze: new BambooRatFreeze(),

    // 竹鼠厨师技能
    bambooRatCookSummon: new BambooRatCookSummon()
};
