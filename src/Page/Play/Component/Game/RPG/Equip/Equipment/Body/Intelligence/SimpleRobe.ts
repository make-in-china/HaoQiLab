import { BaseIntelligenceBody } from './BaseIntelligenceBody';

export class SimpleRobe extends BaseIntelligenceBody {
    name = '简易之袍';
    equipCondition = {
        intelligence: 15,
        level: 5
    };
    base = {
        armor: 5
    };
}