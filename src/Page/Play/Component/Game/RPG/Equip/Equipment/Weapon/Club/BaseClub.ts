import { PowerAffix } from './../../../EquipmentAffix/PowerAffix';
import { LightningResistenseAffix } from './../../../EquipmentAffix/LightningResistenseAffix';
import { Equipment } from '../../../Equipment';
import { EquipmentType } from '../../../EquipmentType';
import { PhysicalAffix } from '../../../EquipmentAffix/PhysicalAffix';
import { PhysicalPointAffix } from '../../../EquipmentAffix/PhysicalPointAffix';
import { FireResistenseAffix } from '../../../EquipmentAffix/FireResistenseAffix';
import { ColdResistenseAffix } from '../../../EquipmentAffix/ColdResistenseAffix';
import { AttackSpeed } from '../../../EquipmentAffix/AttackSpeed';
import { FirePointAffix } from '../../../EquipmentAffix/FirePointAffix';
import { ColdPointAffix } from '../../../EquipmentAffix/ColdPointAffix';
import { LightningPointAffix } from '../../../EquipmentAffix/LightningPointAffix';

export class BaseClub extends Equipment {
    equipSlot = {
        slot: [EquipmentType.handheld, EquipmentType.handheld2, EquipmentType.handheld3, EquipmentType.handheld4]
    };
    prefixSource = [PhysicalAffix, PhysicalPointAffix, FirePointAffix, ColdPointAffix, LightningPointAffix];
    suffixSource = [AttackSpeed, FireResistenseAffix, ColdResistenseAffix, LightningResistenseAffix, PowerAffix];
    affixSource = [];
    legendaryAffixSource = [];
}