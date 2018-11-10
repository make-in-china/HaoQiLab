import { Skill, SkillType } from '../../../Skill';
import { Creatures } from '../../../Creatures';
import { War } from '../../../War';
import { delay } from 'src/Data/TimeNode/Lib';

export class BambooRatFreeze extends Skill {
    name = '发呆';
    fullName = '竹鼠发呆';
    type = SkillType.duration;
    probability = 100;
    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        war.console.logFreeze(`【${creatures.name}】......`);
        await delay(500);
    }
}