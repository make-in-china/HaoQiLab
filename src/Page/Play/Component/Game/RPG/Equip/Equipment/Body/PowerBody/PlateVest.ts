import { BasePowerBody } from './BasePowerBody';

export class PlateVest extends BasePowerBody {
    name = '铁制背心';
    equipCondition = {
        power: 15,
        level: 5
    };
    base = {
        armor: 10
    };
}