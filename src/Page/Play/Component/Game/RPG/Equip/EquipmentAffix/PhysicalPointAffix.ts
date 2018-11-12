import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class PhysicalPointAffix extends EquipmentAffix {
    priority = 0;
    
    private get min() {
        let min = 25;
        min = (min * this.level / 100) | 0;
        return min;
    }
    private get max() {
        let max = 50;
        max = (max * this.level / 100) | 0;
        return max;
    }
    
    effectMinimumDesction(eq: Equipment) {
        if (!isHandheld(eq.equipSlot.slot)) {
            return this.effectDesction();
        }
        return minimumDesction;
    }
    effectDesction() {
        return makeBlueEffecctDesction(`该装备附加(${this.min}-${this.max}) 点物理伤害`);
    }
    effectEquipment(eq: Equipment) {

        if (eq.base.physicalDamage) {
            let minPhysical = eq.base.physicalDamage[0];
            let maxPhysical = eq.base.physicalDamage[1];
            eq.computed.physicalDamage = [this.min + minPhysical, this.max + maxPhysical];
        }
    }
}