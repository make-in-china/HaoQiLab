import { BasePowerHelmet } from './BasePowerHelmet';

export class IconHat extends BasePowerHelmet {
    name = '粗铁盔';
    equipCondition = {
        power: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}