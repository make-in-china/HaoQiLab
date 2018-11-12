import { BaseIntelligenceGrovesGroves } from './BaseIntelligenceGroves';

export class VelvetGloves extends BaseIntelligenceGrovesGroves {
    name = '丝绒手套';
    equipCondition = {
        intelligence: 30,
        level: 10
    };
    base = {
        armor: 10
    };
}