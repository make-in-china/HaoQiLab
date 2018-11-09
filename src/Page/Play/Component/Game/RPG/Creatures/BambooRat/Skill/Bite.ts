import { Skill, SkillType } from '../../../Skill';

import { War } from '../../../War';

import { Creatures } from '../../../Creatures';

export class BambooRatBite extends Skill {
    name = '咬';
    fullName = '竹鼠咬咬';
    type = SkillType.attack;
    probability = 300;
    description = '50%物理伤害攻击血最少的敌人';
    action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]) {
        let hp = 99999999999;
        let enemy: Creatures | null = null;
        for (let i = 0; i < enemys.length; i++) {
            const m = enemys[i];
            if (m.hp > 0 && m.hp < hp) {
                hp = m.hp;
                enemy = m;
            }
        }

        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        if (enemy) {
            creatures.attack(war, enemy!, {
                physical: 0.5
            });
        } else {
            war.console.logNormal(`但所有目标都已死亡。`);
        }

    }
}