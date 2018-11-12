import { BasePowerHelmet } from './BasePowerHelmet';

export class ConeHelmet extends BasePowerHelmet {
    name = '锥顶盔';
    equipCondition = {
        power: 30,
        level: 10
    };
    base = {
        armor: 10
    };
}