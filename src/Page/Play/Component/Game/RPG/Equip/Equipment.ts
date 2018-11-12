import { EquipmentAffix } from './EquipmentAffix';
import { EquipmentType } from './EquipmentType';
import { EffecctDesction, makeEffecctDesction } from './EffectDesction';
import { Creatures } from '../Creatures/Creatures';
const empty = {};
export enum EquipmentRare {
    white = 0,
    magic = 1,
    rare = 2,
    legendary = 4
}
export class Equipment {
    rare: EquipmentRare = EquipmentRare.white;
    constructor(public level: number) {

    }
    isClone: boolean = false;
    clone(): this {
        const clone: Equipment = new (this as any).constructor(this.level);
        clone.prefix = this.prefix.slice() as any;
        clone.suffix = this.suffix.slice() as any;
        clone.computeProperty();
        clone.isClone = true;
        return clone as any;
    }
    name: string;
    equipSlot: {
        slot: EquipmentType[],
        reject?: EquipmentType,
    };
    equipCondition: {
        power?: number
        mind?: number
        intelligence?: number
        level?: number
    };
    base: {
        armor?: number
        evasion?: number
        physicalDamage?: [number, number]
        fireDamage?: [number, number]
        coldDamage?: [number, number]
        lightningDamage?: [number, number]
        chaosDamage?: [number, number]
        attackSpeed?: number
    } = empty;
    computed: {
        armor?: number
        evasion?: number
        physicalDamage?: [number, number]
        fireDamage?: [number, number]
        coldDamage?: [number, number]
        lightningDamage?: [number, number]
        chaosDamage?: [number, number]
        attackSpeed?: number
    };
    prefixSource: (typeof EquipmentAffix)[];
    suffixSource: (typeof EquipmentAffix)[];
    affixSource: (typeof EquipmentAffix)[];
    legendaryAffixSource: (typeof EquipmentAffix)[];
    // 2个前缀
    prefix: [EquipmentAffix?, EquipmentAffix?] = [];
    // 2个后缀
    suffix: [EquipmentAffix?, EquipmentAffix?] = [];
    // 0-1个固有词缀
    affix?: EquipmentAffix;
    // 0-1个传奇词缀
    legendaryAffix?: EquipmentAffix;
    private computeProperty() {
        this.computed = { ...this.base };

        const len = this.prefix.length + this.suffix.length;
        if (len === 0) {
            this.rare = EquipmentRare.white;
        } else if (len <= 2) {
            this.rare = EquipmentRare.magic;
        } else if (len <= 4) {
            this.rare = EquipmentRare.rare;
        }
        for (let i = 0; i <= 10; i++) {
            this.prefix.forEach(m => {
                if (m.priority === i) {
                    m.effectEquipment(this);
                }
            });
            this.suffix.forEach(m => {
                if (m.priority === i) {
                    m.effectEquipment(this);
                }
            });
        }
    }
    private pushNormalEffectDesction(desction: (EffecctDesction | '-')[]) {

        if (this.isClone) {
            desction.push(makeEffecctDesction`{#fff}${'被神秘力量复制的产物'}`);
        }
        if (this.computed.physicalDamage) {

            if (this.computed.physicalDamage[0] !== this.base!.physicalDamage![0] || this.computed.physicalDamage[1] !== this.base!.physicalDamage![1]) {
                desction.push(makeEffecctDesction`物理攻击${' '}{#6262ff}${this.computed.physicalDamage[0]}-${''}{#6262ff}${this.computed.physicalDamage[1]}`);
            } else {
                desction.push(makeEffecctDesction`物理攻击${' '}{#fff}${this.computed.physicalDamage[0]}-${''}{#fff}${this.computed.physicalDamage[1]}`);
            }

        }
        const subDesction: EffecctDesction[] = [];
        if (this.computed.fireDamage) {
            subDesction.push(makeEffecctDesction`{#f00}${this.computed.fireDamage[0]}-${''}{#f00}${this.computed.fireDamage[1]}`);
        }
        if (this.computed.coldDamage) {
            subDesction.push(makeEffecctDesction`{#0cf}${this.computed.coldDamage[0]}-${''}{#0cf}${this.computed.coldDamage[1]}`);
        }
        if (this.computed.lightningDamage) {
            subDesction.push(makeEffecctDesction`{#ff0}${this.computed.lightningDamage[0]}-${''}{#ff0}${this.computed.lightningDamage[1]}`);
        }
        if (this.computed.chaosDamage) {
            subDesction.push(makeEffecctDesction`{#f0f}${this.computed.chaosDamage[0]}-${''}{#f0f}${this.computed.chaosDamage[1]}`);
        }
        if (subDesction.length > 0) {
            desction.push(makeEffecctDesction`元素攻击${subDesction}`);
        }
        if (this.computed.attackSpeed) {
            desction.push(makeEffecctDesction`攻击速度${' '}{#fff}${this.computed.attackSpeed}`);
        }
        if (this.computed.armor) {
            desction.push(makeEffecctDesction`防御${' '}{#fff}${this.computed.armor}`);
        }
        if (desction.length > 0) {
            desction.push('-');
        }
    }
    effectMinimumDesction() {
        const desction: (EffecctDesction | '-')[] = [];
        this.pushNormalEffectDesction(desction);
        this.prefix.forEach(m => {
            desction.push(m.effectMinimumDesction(this));
        });
        this.suffix.forEach(m => {
            desction.push(m.effectMinimumDesction(this));
        });
        return desction;
    }
    effectDesction() {
        const desction: (EffecctDesction | '-')[] = [];
        this.pushNormalEffectDesction(desction);
        this.prefix.forEach(m => {
            desction.push(m.effectDesction());
        });
        this.suffix.forEach(m => {
            desction.push(m.effectDesction());
        });
        return desction;
    }
    effectDetailDesction() {
        const desction: (EffecctDesction | '-')[] = [];
        this.pushNormalEffectDesction(desction);
        this.prefix.forEach(m => {
            desction.push(m.effectDetailDesction());
        });
        this.suffix.forEach(m => {
            desction.push(m.effectDetailDesction());
        });
        return desction;
    }
    effectCreatures(creatures: Creatures): any {
        this.prefix.forEach(m => {
            m.effectCreatures(creatures);
        });
        this.suffix.forEach(m => {
            m.effectCreatures(creatures);
        });
    }
    resetAffix() {
        this.prefix = [];
        this.suffix = [];
        let prefixCount = Math.random() * 3 | 0;  // 0-2
        let suffixCount = Math.random() * 3 | 0;  // 0-2
        let usePreList: number[] = [];
        let useSuffixList: number[] = [];

        let prefixSourceCount = this.prefixSource.length;
        if (prefixSourceCount > 0) {

            for (let i = 0; i < prefixCount; i++) {
                let idx = Math.random() * prefixSourceCount | 0;
                if (usePreList.findIndex(m => m === idx) === -1) {
                    let affixLevel = (this.level + 10);
                    if (affixLevel > 100) {
                        affixLevel = 100;
                    }

                    affixLevel = affixLevel / 2 | 0 + affixLevel / 2 * Math.random() | 0;

                    this.prefix.push(new this.prefixSource[idx](affixLevel as 100));
                    usePreList.push(idx);
                }
            }
        }

        let suffixSourceCount = this.suffixSource.length;
        if (suffixSourceCount > 0) {

            for (let i = 0; i < suffixCount; i++) {
                let idx = Math.random() * suffixSourceCount | 0;
                if (useSuffixList.findIndex(m => m === idx) === -1) {
                    let affixLevel = (this.level + 10);
                    if (affixLevel > 100) {
                        affixLevel = 100;
                    }

                    affixLevel = affixLevel / 2 | 0 + affixLevel / 2 * Math.random() | 0;
                    
                    this.suffix.push(new this.suffixSource[idx](affixLevel as 100));
                    useSuffixList.push(idx);
                }
            }
        }

        this.computeProperty();
    }
}