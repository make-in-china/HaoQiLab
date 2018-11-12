import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class ColdPointAffix extends EquipmentAffix {
    priority = 0;
    
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let min = 40;
        this.min = (min * this.level / 100) | 0;

        let max = 90;
        this.max = (max * this.level / 100) | 0;
    }
    min: number;
    max: number;
    effectMinimumDesction(eq: Equipment) {
        if (!isHandheld(eq.equipSlot.slot)) {
            return this.effectDesction();
        }
        return minimumDesction;
    }
    effectDesction() {
        return makeBlueEffecctDesction(`该装备附加(${this.min}-${this.max}) 点冰冷伤害`);
    }
    effectEquipment(eq: Equipment) {
        let coldDamage: [number, number];
        if (eq.base.coldDamage) {
            coldDamage = eq.base.coldDamage;
        } else {
            coldDamage = [0, 0];
        }
        eq.computed.coldDamage = [this.min + coldDamage[0], this.max + coldDamage[1]];
    }
}