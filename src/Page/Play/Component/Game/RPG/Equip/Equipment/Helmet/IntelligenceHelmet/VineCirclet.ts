import { BaseIntelligenceHelmet } from './BaseIntelligenceHelmet';

export class VineCirclet extends BaseIntelligenceHelmet {
    name = '藤蔓之冠';
    equipCondition = {
        intelligence: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}