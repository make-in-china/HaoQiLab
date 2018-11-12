import { BaseIntelligenceBoots } from './BaseIntelligenceBoots';

export class WoolShoes extends BaseIntelligenceBoots {
    name = '羊毛之鞋';
    equipCondition = {
        intelligence: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}