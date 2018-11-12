
import { Skill, SkillType } from '../Skill';

import { War } from '../War';

import { Creatures } from '../Creatures/Creatures';
import { delay } from 'src/Data/TimeNode/Lib';

export class RighteousFire extends Skill {
    name = '正义之火';
    fullName = '正义之火';
    type = SkillType.aura;
    probability = 300;
    description = `灼烧随机3-5名敌人，使其每0.2秒受到你最大生命 8% 的火焰伤害
    自身被灼烧，每0.2秒承受你最大生命 18% 的火焰伤害
    自身被灼烧时，法术总伤害额外提高 (10)%`;

    // private isActive = false; 不要在自己身上记标记

    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        if (creatures.fightState['RighteousFire']) {
            return;
        }
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);
        if (creatures.hp <= 1) {
            war.console.logNormal(`但是血量太低发动失败了。`);
            return;
        }
        creatures.fightState['RighteousFire'] = true;
        let randomEnemys = war.getRandomEnemys(enemys, Math.random() * 3 | 0 + 3);
        war.console.logNormal(`【${creatures.name}】的【${this.fullName}】选中${randomEnemys.length}目标。`);
        await delay(500);
        const timeID = window.setInterval(() => {
            if (war.weWin || war.weDead) {
                clearInterval(timeID);
                creatures.fightState['RighteousFire'] = false;
                return;
            }
            let fireDamage = creatures.computed.maxHP * 0.18 | 0;

            creatures.deductHPByDamageOverTimeButNoKill(war, creatures, 0, fireDamage, 0, 0, 0, this);
            if (creatures.hp === 1) {

                clearInterval(timeID);
                creatures.fightState['RighteousFire'] = false;
            }
            fireDamage = creatures.computed.maxHP * 0.08 | 0;
            randomEnemys.forEach(m => {
                if (m.hp > 0) {

                    m.deductHPByDamageOverTime(war, creatures, 0, fireDamage, 0, 0, 0, this);
                }
            });
        }, 200);
        return () => {
            randomEnemys = war.getRandomEnemys(enemys, Math.random() * 3 | 0 + 3);
            war.console.logNormal(`【${creatures.name}】的【${this.fullName}】重新选中${randomEnemys.length}目标。`);
            return false;
        };

    }
}