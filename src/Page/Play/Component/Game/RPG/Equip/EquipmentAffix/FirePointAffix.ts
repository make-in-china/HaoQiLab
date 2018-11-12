import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class FirePointAffix extends EquipmentAffix {
    priority = 0;
    
    private get min() {
        let min = 62;
        min = (min * this.level / 100) | 0;
        return min;
    }
    private get max() {
        let max = 114;
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
        return makeBlueEffecctDesction(`该装备附加(${this.min}-${this.max}) 点火焰伤害`);
    }
    effectEquipment(eq: Equipment) {
        let fireDamage: [number, number];
        if (eq.base.fireDamage) {
            fireDamage = eq.base.fireDamage;
        } else {
            fireDamage = [0, 0];
        }
        eq.computed.fireDamage = [this.min + fireDamage[0], this.max + fireDamage[1]];
    }
}