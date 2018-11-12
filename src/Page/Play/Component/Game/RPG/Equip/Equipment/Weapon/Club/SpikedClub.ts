import { BaseClub } from './BaseClub';

export class SpikedClub extends BaseClub {
    name = '钝钉木棒';
    equipCondition = {
        power: 15,
        level: 5
    };
    base = {
        physicalDamage: [9, 30] as [number, number],
        attackSpeed: 1.2
    };
}