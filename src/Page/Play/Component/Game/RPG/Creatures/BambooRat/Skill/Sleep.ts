import { Skill, SkillType } from '../../../Skill';
import { Creatures } from '../../../Creatures';
import { War } from '../../../War';

export class BambooRatSleep extends Skill {
    name = '睡眠';
    fullName = '竹鼠睡睡';
    type = SkillType.duration;
    probability = 100;
    action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]) {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        war.console.logFreeze(`【${creatures.name}】沉沉睡去。`);
        const recorverdHP = (creatures.computed.maxHP * 3 / 10) | 0;
        let round = 1;
        return () => {
            round++;
            if (round === 3) {
                war.console.logGood(`【${creatures.name}】睡醒了，恢复了${recorverdHP}生命。`);
                creatures.revorverdHP(recorverdHP);
                return true;
            } else {
                war.console.logFreeze(`【${creatures.name}】睡得很香，没有要醒的迹象。`);
            }
            return;
        };
    }
}