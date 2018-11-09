import { Skill, SkillType } from '../../../Skill';
import { War } from '../../../War';
import { Creatures } from '../../../Creatures';

export class BambooRatDodge extends Skill {
    name = '闪躲';
    fullName = '竹鼠躲躲';
    type = SkillType.passive;
    action(war: War, creatures: Creatures) {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
    }
}