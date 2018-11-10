import { Skill, SkillType } from '../../../Skill';
import { War } from '../../../War';
import { Creatures } from '../../../Creatures';
import { delay } from 'src/Data/TimeNode/Lib';

export class BambooRatDodge extends Skill {
    name = '闪躲';
    fullName = '竹鼠躲躲';
    type = SkillType.passive;
    async action(war: War, creatures: Creatures): Promise<(() => boolean | void) | void> {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        await delay(500);
    }
}