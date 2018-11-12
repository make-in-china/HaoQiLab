import { EquipmentType } from '../EquipmentType';
import { Equipment } from '../Equipment';

export class EquipmentSlot {

    constructor(public type: EquipmentType) { }
    value: Equipment | null;

}