import { Skill, SkillType } from '../../../Skill';
import { Creatures } from '../../../Creatures';
import { BambooRat } from '../../BambooRat/BambooRat';
import { WarAction, War } from '../../../War';
import { allSkill } from '../../../AllSkill';

export class BambooRatCookSummon extends Skill {
    name = '召唤竹鼠';
    fullName = '召唤下一只竹鼠';
    type = SkillType.minion | SkillType.passive;
    probability = 100;
    action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]) {
        war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);

        war.console.logFreeze(`【${creatures.name}】召唤了一只竹鼠。`);
        const bambooRat = new BambooRat(creatures.level);
        bambooRat.name = creatures.name + '的竹鼠';
        bambooRat.addPower(creatures.level * 8);
        bambooRat.addIntelligence(creatures.level);
        bambooRat.addMind(creatures.level);
        enemys.push(bambooRat);
        creatures.minions.push(bambooRat);

        war.onWho(bambooRat, WarAction.beAttacked, (who, from) => {
            if (creatures.hp > 0) {
                war.console.logDangerous(`【${bambooRat.name}】被【${from.name}】攻击，【${creatures.name}】发动【报复】。`);
                creatures.attack(war, from, { physical: 1 });
            }
        });
        war.onWho(bambooRat, WarAction.beKilled, (who, from) => {
            if (creatures.hp > 0) {
                war.console.logDangerous(`【${bambooRat.name}】被【${from.name}】所杀，【${creatures.name}】发动【暴怒】。`);
                this.action(war, creatures, enemys, teammate);
            }
        });
        war.onWho(bambooRat, WarAction.useSkill, (skill: Skill) => {
            if (creatures.hp > 0 && 0.1 > Math.random()) {
                if (skill === allSkill.bambooRatBite) {
                    war.console.logNormal(`【${creatures.name}】发动【想吃】。`);
                    war.console.logFreeze(`这只【${bambooRat.name}】老打架，受了很多内伤，我们吃了它吧。`);
                } else if (skill === allSkill.bambooRatSleep) {
                    war.console.logNormal(`【${creatures.name}】发动【想吃】。`);
                    war.console.logFreeze(`这只【${bambooRat.name}】老睡觉，可能是生病了，我们吃了它吧。`);
                } else if (skill === allSkill.bambooRatPlayingCute) {
                    war.console.logNormal(`【${creatures.name}】发动【想吃】。`);
                    war.console.logFreeze(`这只【${bambooRat.name}】好漂亮，我们吃了它吧。`);
                } else if (skill === allSkill.bambooRatFreeze) {
                    war.console.logNormal(`【${creatures.name}】发动【想吃】。`);
                    war.console.logFreeze(`这只【${bambooRat.name}】傻乎乎的，我们吃了它吧。`);
                } else if (skill === allSkill.bambooRatEat) {
                    war.console.logNormal(`【${creatures.name}】发动【想吃】。`);
                    war.console.logFreeze(`这只【${bambooRat.name}】吃太胖了，活不长，我们吃了它吧。`);
                } else {
                    return;
                }
                war.console.logFreeze(`【${bambooRat.name}】被【${creatures.name}】烹饪成了美味菜肴。`);
                const recorverdHP = (creatures.computed.maxHP / 10) | 0;
                war.console.logGood(`【${creatures.name}】很享受，恢复了${recorverdHP}生命。`);
                creatures.revorverdHP(recorverdHP);
                enemys.splice(enemys.indexOf(bambooRat), 1);
                this.action(war, creatures, enemys, teammate);
            }
        });
    }
}