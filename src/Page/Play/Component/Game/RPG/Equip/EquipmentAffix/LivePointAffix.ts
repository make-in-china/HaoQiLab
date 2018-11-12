import { EquipmentAffix } from '../EquipmentAffix';
import { makeBlueEffecctDesction } from '../EffectDesction';
import { Creatures } from '../../Creatures/Creatures';

export class LivePointAffix extends EquipmentAffix {
    priority = 0;
    
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let pt = 150;
        this.pt = (pt * this.level / 100) | 0;
    }
    private pt: number;

    effectDesction() {
        return makeBlueEffecctDesction(`角色附加 ${this.pt} 点生命`);
    }
    effectCreatures(creatures: Creatures): void {
        creatures.computed.maxHP += this.pt;
    }
}