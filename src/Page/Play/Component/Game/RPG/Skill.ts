import { Creatures } from './Creatures';
import { War } from './War';

export enum SkillType {
    // 被动技能
    passive = 0,
    // 持续输出技能
    channeling = 1,
    // 瞬发技能
    prompt = 2,
    // 光环技能
    aura = 4,
    // 攻击
    attack = 8,
    // 法术
    spell = 16,
    // 召唤
    minion = 32,
    // 衰变技能
    duration = 64
}
export abstract class Skill {

    action(war: War, creatures: Creatures, enemys: Creatures[], teammate: Creatures[]): (() => boolean | void) | void {
        throw new Error('Method not implemented.');
    }
    name: string;
    fullName: string;
    description: string;
    type: SkillType;
    probability = 0;
}