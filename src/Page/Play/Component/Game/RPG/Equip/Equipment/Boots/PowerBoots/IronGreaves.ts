import { BasePowerBoots } from './BasePowerBoots';

export class IronGreaves extends BasePowerBoots {
    name = '铁锻胫甲';
    equipCondition = {
        power: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}