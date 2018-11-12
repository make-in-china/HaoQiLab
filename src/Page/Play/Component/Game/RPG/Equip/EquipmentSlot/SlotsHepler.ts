import { EquipmentSlot } from './EquipmentSlot';
import { EquipmentType } from '../EquipmentType';

export function makeHumanEquipmentSlot() {
    return [
        {
            slot: new EquipmentSlot(EquipmentType.handheld)
        },
        {
            slot: new EquipmentSlot(EquipmentType.handheld2)
        },
        {
            slot: new EquipmentSlot(EquipmentType.helmet)
        },
        {
            slot: new EquipmentSlot(EquipmentType.body)
        },
        {
            slot: new EquipmentSlot(EquipmentType.groves)
        },
        {
            slot: new EquipmentSlot(EquipmentType.boots)
        },
        {
            slot: new EquipmentSlot(EquipmentType.ring)
        },
        {
            slot: new EquipmentSlot(EquipmentType.ring2)
        },
        {
            slot: new EquipmentSlot(EquipmentType.amulet)
        },
        {
            slot: new EquipmentSlot(EquipmentType.belt)
        }
    ];
}