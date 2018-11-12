import { delay } from 'src/Data/TimeNode/Lib';
import { War } from '../../../War';
import { Skill, SkillType } from '../../../Skill';
import { Creatures } from '../../Creatures';

export class FastAttack extends Skill {
    name = '快斩';
    fullName = '快斩';
    type = SkillType.attack;
    probability = 100;
    description = '100%伤害攻击敌人';
    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        let enemy = war.getRandomEnemys(enemys, 1);

        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        await delay(500);
        if (enemy.length===1) {
            creatures.attack(war, enemy[0], {
                physical: 1,
                cold: 1,
                lightning: 1,
                fire: 1,
                chaos: 1
            });
        } else {
            war.console.logNormal(`但所有目标都已死亡。`);
        }
    }
}