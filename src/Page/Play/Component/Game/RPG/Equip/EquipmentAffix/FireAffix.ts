import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';
import { Creatures } from '../../Creatures/Creatures';

export class FireAffix extends EquipmentAffix {
    priority = 0;

    constructor(level: EquipmentAffix['level']) {
        super(level);
        let persent = 60;
        this.persent = (persent * this.level / 100) | 0;
    }
    persent: number;
    effectMinimumDesction(eq: Equipment) {
        if (!isHandheld(eq.equipSlot.slot)) {
            return this.effectDesction();
        }
        return minimumDesction;
    }
    effectDesction() {
        return makeBlueEffecctDesction(`角色火焰伤害增加(${this.persent})%`);
    }
    effectCreatures(creatures: Creatures): void {
        creatures.computed.fireDamageMore += this.persent;
    }
}