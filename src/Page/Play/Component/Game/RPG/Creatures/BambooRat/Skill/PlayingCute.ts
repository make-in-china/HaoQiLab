import { Skill, SkillType } from '../../../Skill';
import { War } from '../../../War';
import { Creatures } from '../../Creatures';
import { delay } from 'src/Data/TimeNode/Lib';

export class BambooRatPlayingCute extends Skill {
    name = '卖萌';
    fullName = '竹鼠萌萌';
    type = SkillType.prompt;
    probability = 100;
    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        if (Math.random() < 0.5) {
            war.console.logNormal(`但什么都没有发生。`);
        } else {
            war.console.logGood(`【${creatures.name}】获得了再次行动的鼓励。`);
            creatures.action(war, enemys, teammate);
        }
        await delay(500);
    }
}