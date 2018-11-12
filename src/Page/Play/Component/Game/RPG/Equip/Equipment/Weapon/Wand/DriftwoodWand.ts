import { BaseWand } from './BaseWand';

export class DriftwoodWand extends BaseWand {
    name = '朽木法杖';
    equipCondition = {
        intelligence: 15,
        level: 5
    };
    base = {
        physicalDamage: [3, 6] as [number, number],
        attackSpeed: 1
    };
}