import { Equipment } from './../Equipment';
import { SpikedClub } from './Weapon/Club/SpikedClub';
import { IconHat } from './Helmet/PowerHelmet/IconHat';
import { Chestplate } from './Body/PowerBody/Chestplate';
import { IronCirclet } from './Helmet/IntelligenceHelmet/IronCirclet';
import { VineCirclet } from './Helmet/IntelligenceHelmet/VineCirclet';
import { PlateVest } from './Body/PowerBody/PlateVest';
import { SilkenVest } from './Body/Intelligence/SilkenVest';
import { SimpleRobe } from './Body/Intelligence/SimpleRobe';
import { ConeHelmet } from './Helmet/PowerHelmet/ConeHelmet';
import { StoneHammer } from './Weapon/Club/StoneHammer';
import { DriftwoodWand } from './Weapon/Wand/DriftwoodWand';
import { GoatHorn } from './Weapon/Wand/GoatHorn';
import { SteelGreaves } from './Boots/PowerBoots/SteelGreaves';
import { VelvetSlippers } from './Boots/IntelligenceBoots/VelvetSlippers';
import { WoolShoes } from './Boots/IntelligenceBoots/WoolShoes';
import { IronGauntlets } from './Groves/PowerGroves/IronGauntlets';
import { PlatedGauntlets } from './Groves/PowerGroves/PlatedGauntlets';
import { WoolGloves } from './Groves/IntelligenceGroves/WoolGloves';
import { VelvetGloves } from './Groves/IntelligenceGroves/VelvetGloves';
import { IronGreaves } from './Boots/PowerBoots/IronGreaves';
export const allEquipment = {
    body: {
        powerBody: {
            Chestplate: Chestplate,
            PlateVest: PlateVest
        },
        intelligence: {
            SilkenVest: SilkenVest,
            SimpleRobe: SimpleRobe
        }
    },
    helmet: {
        powerHelmet: {
            IconHat: IconHat,
            ConeHelmet: ConeHelmet
        },
        intelligence: {
            IronCirclet: IronCirclet,
            VineCirclet: VineCirclet
        }
    },
    boots: {
        powerBody: {
            IronGreaves: IronGreaves,
            SteelGreaves: SteelGreaves
        },
        intelligence: {
            VelvetSlippers: VelvetSlippers,
            WoolShoes: WoolShoes
        }
    },
    groves: {
        powerBody: {
            IronGauntlets: IronGauntlets,
            PlatedGauntlets: PlatedGauntlets
        },
        intelligence: {
            WoolGloves: WoolGloves,
            VelvetGloves: VelvetGloves
        }
    },
    weapon: {
        club: {
            SpikedClub: SpikedClub,
            StoneHammer: StoneHammer
        },
        wand: {
            DriftwoodWand: DriftwoodWand,
            GoatHorn: GoatHorn
        }
    }
};
const allTypeKeys = Object.keys(allEquipment);
const info = {
    allTypeKeys
};
export function makeRandomEquipment(level: Equipment['level']) {
    const key1 = getRandomByArray(info.allTypeKeys);
    const inType = allEquipment[key1];

    const inTypeKey = getRandomByArray(Object.keys(inType));
    const inTypeInType = inType[inTypeKey];

    const inTypeInTypeKey = getRandomByArray(Object.keys(inTypeInType));
    const ctor = inTypeInType[inTypeInTypeKey];

    const rnd = new ctor(level) as Equipment;
    rnd.resetAffix();

    return rnd;
}
function getRandomByArray<T>(arr: T[]): T {
    const idx = arr.length * Math.random() | 0;
    return arr[idx];
}