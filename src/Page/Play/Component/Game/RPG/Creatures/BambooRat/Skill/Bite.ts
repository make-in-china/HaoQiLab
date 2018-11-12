import { Skill, SkillType } from '../../../Skill';

import { War } from '../../../War';

import { Creatures } from '../../Creatures';
import { delay } from 'src/Data/TimeNode/Lib';

export class BambooRatBite extends Skill {
    name = '咬';
    fullName = '竹鼠咬咬';
    type = SkillType.attack;
    probability = 300;
    description = '50%物理伤害攻击血量最少或最多的敌人';
    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        let enemy: Creatures | null = war.getHighOrLowHPEnemys(enemys);

        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        await delay(500);
        if (enemy) {
            creatures.attack(war, enemy!, {
                physical: 0.5
            });
        } else {
            war.console.logNormal(`但所有目标都已死亡。`);
        }

    }
}