import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class AttackSpeed extends EquipmentAffix {
    
    priority = 0;
    constructor(level: EquipmentAffix['level']) {
        super(level);
        let max = 30;
        this.speed = (max * this.level / 100) | 0;
    }
    speed: number;
    effectMinimumDesction(eq: Equipment) {
        if (!isHandheld(eq.equipSlot.slot)) {
            return this.effectDesction();
        }
        return minimumDesction;
    }
    effectDesction() {
        return makeBlueEffecctDesction(`该装备增加(${this.speed})% 物理伤害`);
    }
    effectEquipment(eq: Equipment) {
        if (eq.base.attackSpeed) {
            eq.computed.attackSpeed = ((1 + this.speed / 100) * eq.base.attackSpeed * 1000 | 0) / 1000;
        }
    }
}