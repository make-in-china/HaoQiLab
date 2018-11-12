import { EquipmentAffix } from '../EquipmentAffix';
import { makeBlueEffecctDesction } from '../EffectDesction';

export class ColdResistenseAffix extends EquipmentAffix {
    isSuffix = true;
    effectDesction() {
        const v = (50 * this.level / 100) | 0;
        return makeBlueEffecctDesction(`增加角色${v}% 冰冷抗性`);
    }
}