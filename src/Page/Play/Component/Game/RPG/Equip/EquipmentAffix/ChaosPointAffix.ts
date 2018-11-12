import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class ChaosPointAffix extends EquipmentAffix {
    priority = 0;
    
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let min = 48;
        this.min = (min * this.level / 100) | 0;

        let max = 124;
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
        return makeBlueEffecctDesction(`该装备附加(${this.min}-${this.max}) 点混沌伤害`);
    }
    effectEquipment(eq: Equipment) {
        let chaosDamage: [number, number];
        if (eq.base.chaosDamage) {
            chaosDamage = eq.base.chaosDamage;
        } else {
            chaosDamage = [0, 0];
        }
        eq.computed.chaosDamage = [this.min + chaosDamage[0], this.max + chaosDamage[1]];
    }
}