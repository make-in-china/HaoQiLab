import { BaseIntelligenceHelmet } from './BaseIntelligenceHelmet';

export class IronCirclet extends BaseIntelligenceHelmet {
    name = '铁锻之冠';
    equipCondition = {
        intelligence: 30,
        level: 10
    };
    base = {
        armor: 10
    };
}