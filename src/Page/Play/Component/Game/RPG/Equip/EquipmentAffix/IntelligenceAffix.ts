import { EquipmentAffix } from '../EquipmentAffix';
import { makeBlueEffecctDesction } from '../EffectDesction';
import { Creatures } from '../../Creatures/Creatures';

export class IntelligenceAffix extends EquipmentAffix {
    priority = 0;
    
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let pt = 50;
        this.pt = (pt * this.level / 100) | 0;
    }
    private pt: number;

    effectDesction() {
        return makeBlueEffecctDesction(`角色附加 ${this.pt} 点智力`);
    }
    effectCreatures(creatures: Creatures): void {
        creatures.computed.intelligence += this.pt;
    }
}