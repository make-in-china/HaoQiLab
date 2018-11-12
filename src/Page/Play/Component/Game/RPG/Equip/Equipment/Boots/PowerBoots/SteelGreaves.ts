import { BasePowerBoots } from './BasePowerBoots';

export class SteelGreaves extends BasePowerBoots {
    name = '冷钢胫甲';
    equipCondition = {
        power: 30,
        level: 10
    };
    base = {
        armor: 10
    };
}