import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction } from '../EffectDesction';

export class ArmorAffix extends EquipmentAffix {
    
    priority = 1;
    private get persent() {
        let min = 150;
        min = (min * this.level / 100) | 0;
        return min;
    }
    // effectMinimumDesction(eq: Equipment) {
    //     if (eq.equipSlot.slot.findIndex(m => m===EquipmentType.body) !== -1) {
    //         return this.effectDesction();
    //     }
    //     return minimumDesction;
    // }
    effectDesction() {
        return makeBlueEffecctDesction(`该装备增加 ${this.persent}% 防御力`);
    }
    effectEquipment(eq: Equipment) {

        if (eq.base.armor) {
            let armor;
            if (eq.computed.armor) {
                armor = eq.computed.armor;
            } else {
                armor = eq.computed.armor = eq.base.armor;
            }
            eq.computed.armor = (100 + this.persent) / 100 * armor | 0;
        } else {
            debugger;
        }
    }
}