import { EquipmentAffix } from '../EquipmentAffix';
import { Equipment } from '../Equipment';
import { makeBlueEffecctDesction, minimumDesction } from '../EffectDesction';
import { isHandheld } from '../EquipmentType';

export class PhysicalAffix extends EquipmentAffix {
    
    priority = 1;
    private get persent() {
        let min = 150;
        min = (min * this.level / 100) | 0;
        return min;
    }
    effectMinimumDesction(eq: Equipment) {
        if (!isHandheld(eq.equipSlot.slot)) {
            return this.effectDesction();
        }
        return minimumDesction;
    }
    effectDesction() {
        return makeBlueEffecctDesction(`该装备增加 ${this.persent}% 物理伤害`);
    }
    effectEquipment(eq: Equipment) {

        if (eq.base.physicalDamage) {
            let minPhysical;
            let maxPhysical;
            if (eq.computed.physicalDamage) {
                minPhysical = eq.computed.physicalDamage[0];
                maxPhysical = eq.computed.physicalDamage[1];
            } else {
                minPhysical = eq.base.physicalDamage[0];
                maxPhysical = eq.base.physicalDamage[1];
            }
            let persent = this.persent;
            eq.computed.physicalDamage = [(100+persent) / 100 * minPhysical | 0, (100+persent) / 100 * maxPhysical | 0];
        }
    }
}