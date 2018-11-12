import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction } from '../EffectDesction';

export class ArmorPointAffix extends EquipmentAffix {
    priority = 0;
    
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let pt = 300;
        this.pt = (pt * this.level / 100) | 0;
    }
    private pt: number;

    // effectMinimumDesction(eq: Equipment) {
    //     if (eq.equipSlot.slot.findIndex(m => m===EquipmentType.body) !== -1) {
    //         return this.effectDesction();
    //     }
    //     return minimumDesction;
    // }
    effectDesction() {
        return makeBlueEffecctDesction(`该装备附加 ${this.pt} 点防御力`);
    }
    effectEquipment(eq: Equipment) {

        // if (eq.base.armor) {
        eq.computed.armor = this.pt + eq.base.armor!;
        // }
    }
}