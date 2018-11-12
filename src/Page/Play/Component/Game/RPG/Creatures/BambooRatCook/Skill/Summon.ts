import { Skill, SkillType } from '../../../Skill';
import { Creatures } from '../../Creatures';
import { BambooRat } from '../../BambooRat/BambooRat';
import { WarAction, War } from '../../../War';
import { allSkill } from '../../../AllSkill';
import { delay } from 'src/Data/TimeNode/Lib';

export class BambooRatCookSummon extends Skill {
    name = '召唤竹鼠';
    fullName = '召唤下一只竹鼠';
    type = SkillType.minion | SkillType.passive;
    probability = 100;
    async action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): Promise<(() => boolean | void) | void> {
        let i = 0;
        const callMinion = async () => {
            if (creatures.hp <= 0) {
                return true;
            }
            const bambooRat = new BambooRat(creatures.level);
            if (i === 0) {

                war.console.logNormal(`【${creatures.name}】发动【${this.fullName}】。`);

                war.console.logFreeze(`【${creatures.name}】召唤了竹鼠。`);
                bambooRat.name = creatures.name + '的竹鼠';
            } else {

                war.console.logNormal(`【${creatures.name}】再次发动【${this.fullName}】。`);

                war.console.logFreeze(`【${creatures.name}】召唤了另一只竹鼠。`);
                bambooRat.name = creatures.name + '的竹鼠' + i;
            }
            bambooRat.addPower(creatures.level * 8);
            bambooRat.addIntelligence(creatures.level);
            bambooRat.addMind(creatures.level);
            teammate.push(bambooRat);
            war.updateActionStack();
            creatures.minions.push(bambooRat);
            // 这些on都没卸载，回头都卸载了
            war.onWho(bambooRat, WarAction.beAttacked, async (who: Creatures, from: Creatures) => {
                if (creatures.hp > 0) {
                    war.console.logDangerous(`【${bambooRat.name}】被【${from.name}】攻击，【${creatures.name}】发动【报复】。`);
                    creatures.attack(war, from, { physical: 1 });
                    await delay(500);
                }
            });
            war.onWho(bambooRat, WarAction.beKilled, async (who: Creatures, from: Creatures) => {
                if (creatures.hp > 0) {
                    war.console.logDangerous(`【${bambooRat.name}】被【${from.name}】所杀，【${creatures.name}】发动【暴怒】。`);
                    // this.action(war, creatures, enemys, teammate);bug，越来越多

                    creatures.nextActionCallBack = () => {
                        callMinion();
                    };
                    await delay(500);
                }
            });
            war.onWho(bambooRat, WarAction.useSkill, async (skill: Skill, from: Creatures) => {
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

                    await delay(500);
                    // 被吃的时候，不要再写callback去处理，上面会接到的；
                    // // this.action(war, creatures, enemys, teammate); // bug，越来越多
                    // creatures.nextActionCallBack = () => {
                    //     callMinion();
                    // };
                }
            });
            await delay(500);
            return true; // 传递给nextActionCallBack时，使用这个返回值告诉callback只执行一次；
        };
        callMinion();
    }
}