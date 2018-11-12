import { PowerAffix } from './../../../EquipmentAffix/PowerAffix';
import { LightningResistenseAffix } from '../../../EquipmentAffix/LightningResistenseAffix';
import { Equipment } from '../../../Equipment';
import { EquipmentType } from '../../../EquipmentType';
import { FireResistenseAffix } from '../../../EquipmentAffix/FireResistenseAffix';
import { ColdResistenseAffix } from '../../../EquipmentAffix/ColdResistenseAffix';
import { ArmorAffix } from '../../../EquipmentAffix/ArmorAffix';
import { LivePointAffix } from '../../../EquipmentAffix/LivePointAffix';
import { ArmorPointAffix } from '../../../EquipmentAffix/ArmorPointAffix';
import { PhysicalPointAffix } from '../../../EquipmentAffix/PhysicalPointAffix';
export class BasePowerGroves extends Equipment {
    equipSlot = {
        slot: [EquipmentType.groves]
    };
    prefixSource = [PhysicalPointAffix, ArmorAffix, ArmorPointAffix, LivePointAffix ];
    suffixSource = [ FireResistenseAffix, ColdResistenseAffix, LightningResistenseAffix, PowerAffix];
    affixSource = [];
    legendaryAffixSource = [];
}