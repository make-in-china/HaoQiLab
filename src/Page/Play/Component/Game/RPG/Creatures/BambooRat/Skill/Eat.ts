import { Skill, SkillType } from '../../../Skill';

import { War } from '../../../War';

import { Creatures } from '../../Creatures';
import { delay } from 'src/Data/TimeNode/Lib';

export class BambooRatEat extends Skill {
    name = '找吃的';
    fullName = '竹鼠吃吃';
    type = SkillType.duration;
    probability = 100;
    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        war.console.logFreeze(`【${creatures.name}】找到了好吃的，开心的吃了起来。`);
        const recorverdHP = (creatures.computed.maxHP / 10) | 0;
        await delay(500);
        return () => {
            war.console.logGood(`【${creatures.name}】吃饱了，恢复了${recorverdHP}生命。`);
            creatures.revorverdHP(recorverdHP);
            return true;
        };
    }
}