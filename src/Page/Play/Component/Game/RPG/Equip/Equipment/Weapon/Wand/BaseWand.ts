import { ColdAffix } from './../../../EquipmentAffix/ColdAffix';
import { FireAffix } from './../../../EquipmentAffix/FireAffix';
import { IntelligenceAffix } from './../../../EquipmentAffix/IntelligenceAffix';
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
import { LightningAffix } from '../../../EquipmentAffix/LightningAffix';
import { SpellColdPointAffix } from '../../../EquipmentAffix/SpellColdPointAffix';
import { SpellFirePointAffix } from '../../../EquipmentAffix/SpellFirePointAffix';
import { SpellLightningPointAffix } from '../../../EquipmentAffix/SpellLightningPointAffix';

export class BaseWand extends Equipment {
    equipSlot = {
        slot: [EquipmentType.handheld, EquipmentType.handheld2, EquipmentType.handheld3, EquipmentType.handheld4]
    };
    prefixSource = [FireAffix, ColdAffix, LightningAffix,
        SpellColdPointAffix, SpellFirePointAffix, SpellLightningPointAffix,
        PhysicalAffix, PhysicalPointAffix, FirePointAffix, ColdPointAffix, LightningPointAffix];
    suffixSource = [AttackSpeed, FireResistenseAffix, ColdResistenseAffix, LightningResistenseAffix, IntelligenceAffix];
    affixSource = [];
    legendaryAffixSource = [];
}