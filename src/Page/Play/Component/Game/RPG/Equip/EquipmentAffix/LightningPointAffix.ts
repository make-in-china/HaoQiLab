import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class LightningPointAffix extends EquipmentAffix {
    priority = 0;
    
    private get min() {
        let min = 10;
        min = (min * this.level / 100) | 0;
        return min;
    }
    private get max() {
        let max = 170;
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
        return makeBlueEffecctDesction(`该装备附加(${this.min}-${this.max}) 点闪电伤害`);
    }
    effectEquipment(eq: Equipment) {
        let lightningDamage: [number, number];
        if (eq.base.lightningDamage) {
            lightningDamage = eq.base.lightningDamage;
        } else {
            lightningDamage = [0, 0];
        }
        eq.computed.lightningDamage = [this.min + lightningDamage[0], this.max + lightningDamage[1]];
    }
}