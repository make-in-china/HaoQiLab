import { BaseClub } from './BaseClub';

export class StoneHammer extends BaseClub {
    name = '石锤';
    equipCondition = {
        power: 30,
        level: 10
    };
    base = {
        physicalDamage: [13, 45] as [number, number],
        attackSpeed: 1.2
    };
}