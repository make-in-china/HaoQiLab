import { DexAffix } from './../../../EquipmentAffix/DexAffix';
import { IntelligenceAffix } from './../../../EquipmentAffix/IntelligenceAffix';
import { LightningResistenseAffix } from '../../../EquipmentAffix/LightningResistenseAffix';
import { Equipment } from '../../../Equipment';
import { EquipmentType } from '../../../EquipmentType';
import { FireResistenseAffix } from '../../../EquipmentAffix/FireResistenseAffix';
import { ColdResistenseAffix } from '../../../EquipmentAffix/ColdResistenseAffix';
import { ArmorAffix } from '../../../EquipmentAffix/ArmorAffix';
import { LivePointAffix } from '../../../EquipmentAffix/LivePointAffix';
import { ArmorPointAffix } from '../../../EquipmentAffix/ArmorPointAffix';
export class BaseIntelligenceBoots extends Equipment {
    equipSlot = {
        slot: [EquipmentType.boots]
    };
    prefixSource = [DexAffix, ArmorAffix, ArmorPointAffix, LivePointAffix];
    suffixSource = [FireResistenseAffix, ColdResistenseAffix, LightningResistenseAffix, IntelligenceAffix];
    affixSource = [];
    legendaryAffixSource = [];
}