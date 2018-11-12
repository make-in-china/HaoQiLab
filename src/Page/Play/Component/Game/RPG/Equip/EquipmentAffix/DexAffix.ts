import { EquipmentAffix } from '../EquipmentAffix';
import { makeBlueEffecctDesction } from '../EffectDesction';
import { Creatures } from '../../Creatures/Creatures';

export class DexAffix extends EquipmentAffix {
    priority = 0;
    
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let pt = 30;
        this.pt = (pt * this.level / 100) | 0;
    }
    private pt: number;

    effectDesction() {
        return makeBlueEffecctDesction(`角色附加 ${this.pt} 点敏捷`);
    }
    effectCreatures(creatures: Creatures): void {
        creatures.computed.dex += this.pt;
    }
}