import { BaseIntelligenceGrovesGroves } from './BaseIntelligenceGroves';

export class WoolGloves extends BaseIntelligenceGrovesGroves {
    name = '羊毛手套';
    equipCondition = {
        intelligence: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}