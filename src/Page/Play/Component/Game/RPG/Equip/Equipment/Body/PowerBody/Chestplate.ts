import { BasePowerBody } from './BasePowerBody';

export class Chestplate extends BasePowerBody {
    name = '胸甲';
    equipCondition = {
        power: 15,
        level: 5
    };
    base = {
        armor: 10
    };
}