import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';
import { Creatures } from '../../Creatures/Creatures';

export class SpellFirePointAffix extends EquipmentAffix {
    priority = 0;

    constructor(level: EquipmentAffix['level']) {
        super(level);
        let min = 62;
        this.min = (min * this.level / 100) | 0;
        let max = 114;
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
        return makeBlueEffecctDesction(`法术附加(${this.min}-${this.max}) 点火焰伤害`);
    }
    effectCreatures(creatures: Creatures): void {
        creatures.computed.spellFireDamage[0]+=this.min;
        creatures.computed.spellFireDamage[1]+=this.max;
    }
}