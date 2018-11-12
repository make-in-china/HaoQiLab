import { BasePowerGroves } from './BasePowerGroves';

export class PlatedGauntlets extends BasePowerGroves {
    name = '坚铁护手';
    equipCondition = {
        power: 30,
        level: 10
    };
    base = {
        armor: 10
    };
}