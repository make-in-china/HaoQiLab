import { BaseWand } from './BaseWand';

export class GoatHorn extends BaseWand {
    name = '羊角法杖';
    equipCondition = {
        intelligence: 30,
        level: 10
    };
    base = {
        physicalDamage: [6, 12] as [number, number],
        attackSpeed: 1
    };
}