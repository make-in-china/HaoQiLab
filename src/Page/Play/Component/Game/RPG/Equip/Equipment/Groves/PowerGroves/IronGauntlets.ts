import { BasePowerGroves } from './BasePowerGroves';

export class IronGauntlets extends BasePowerGroves {
    name = '铁锻护手';
    equipCondition = {
        power: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}