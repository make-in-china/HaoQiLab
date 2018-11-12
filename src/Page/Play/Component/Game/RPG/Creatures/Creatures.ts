import { WarAction, War } from '../War';
import { SkillType, Skill } from '../Skill';
import { Equipment } from '../Equip/Equipment';
import { EquipmentSlot } from '../Equip/EquipmentSlot/EquipmentSlot';
export interface CreaturesSlot {
    slot: EquipmentSlot;
    equipment?: Equipment;
}
export class Property<T> {
    constructor(public name: string, public value: T) {
    }
}
const emptyArray: any[] = [];
export abstract class Creatures {

    minions: Creatures[] = [];
    basePhysicalDamageName = '基础物理伤害';
    baseName: string;
    skillList: Skill[] = emptyArray;
    slotList: CreaturesSlot[] = emptyArray;
    passiveSkillList: Skill[];
    description: string;
    featureDescription: string;
    isTeammate: boolean = false;

    protected m = {
        level: 1
    };
    get normalAttackDamage() {
        let damage = (this.computed.physicalDamage[0] + this.computed.physicalDamage[1]) / 2;
        damage += (this.computed.fireDamage[0] + this.computed.fireDamage[1]) / 2;
        damage += (this.computed.coldDamage[0] + this.computed.coldDamage[1]) / 2;
        damage += (this.computed.lightningDamage[0] + this.computed.lightningDamage[1]) / 2;
        damage += (this.computed.chaosDamage[0] + this.computed.chaosDamage[1]) / 2;
        return damage;
    }
    get hp() {
        return this.state.hp < 0 ? 0 : this.state.hp;
    }
    get armor() {
        return this.computed.armor;
    }
    get level() {
        return this.m.level;
    }
    get name() {
        return this.allocation.name;
    }
    set name(v: string) {
        this.allocation.name = v;
    }
    allocation = {
        // 未使用
        unuse: 10,
        // 力量
        power: 0,
        // 意念
        mind: 0,
        // 智慧
        intelligence: 0,
        // 分配的名字
        name: this.baseName
    };
    computed: {
        // 力量
        power: number,
        // 意念
        mind: number,
        // 智慧
        intelligence: number,
        // 敏捷
        dex: number,
        // 技能几率总值
        probability: number,
        // 名字
        name: string,
        // 最大生命值
        maxHP: number,
        // 物理伤害
        physicalDamage: [number, number],
        // 冰冻伤害
        coldDamage: [number, number],
        // 火焰伤害
        fireDamage: [number, number],
        // 闪电伤害
        lightningDamage: [number, number],
        // 混沌伤害
        chaosDamage: [number, number],
        // 护甲
        armor: number,
        // 闪避
        evasion: number,
        // 火焰抗性
        fireResistance: number,
        // 冰冷抗性
        coldResistance: number,
        // 闪电抗性
        lightningResistance: number,
        // 混沌抗性
        chaosResistance: number,
        // 更多物理伤害
        physicalDamageMore: number,
        // 火焰法术额外点伤
        spellFireDamage: [number, number],
        // 冰冷法术额外点伤
        spellColdDamage: [number, number],
        // 闪电法术额外点伤
        spellLightningDamage: [number, number],
        // 混沌法术额外点伤
        spellChaosDamage: [number, number],
        // 更多火焰伤害
        fireDamageMore: number,
        // 更多冰冷伤害
        coldDamageMore: number,
        // 更多闪电伤害
        lightningDamageMore: number,
        // 更多混沌伤害
        chaosDamageMore: number,
    } = {} as any;
    private state = {
        hp: 50,
    };
    base = {
        // 力量
        power: 10,
        // 意念
        mind: 10,
        // 智慧
        intelligence: 10,
        // 经验值
        experience: 10,
        // 最大生命值
        maxHP: 50,
        // 基础物理伤害
        physicalDamage: [5, 10],
        // 冰冻伤害
        coldDamage: [0, 0],
        // 火焰伤害
        fireDamage: [0, 0],
        // 闪电伤害
        lightningDamage: [0, 0],
        // 混沌伤害
        chaosDamage: [0, 0],
        // 护甲
        armor: 0,
        // 闪避
        evasion: 0,
        // 敏捷
        dex: 100,
        // 火焰抗性
        fireResistance: 0,
        // 冰冷抗性
        coldResistance: 0,
        // 闪电抗性
        lightningResistance: 0,
        // 混沌抗性
        chaosResistance: 0,
    };
    constructor(
        level: number,
        public picture: [string, string],
        basePhysicalDamage: Property<[number, number]>,
        skillList: Skill[]) {

        this.base.physicalDamage = basePhysicalDamage.value;
        this.basePhysicalDamageName = basePhysicalDamage.name;
        this.m.level = level;
        this.allocation.unuse = level * 10;
        this.skillList = skillList;
        this.computeProperty();
    }

    equip(equipment: Equipment, slotPos?: number) {
        let slot: CreaturesSlot | undefined = undefined;
        if (slotPos) {
            slot = this.slotList[slotPos];
            if (!slot || (equipment.equipSlot.slot.findIndex(m => m === slot!.slot.type) === -1)) {
                return new Error(`无法将${equipment.name}装备到${slot.slot.type}栏！`);
            }

        } else {
            const slotList = this.slotList.filter(m => equipment.equipSlot.slot.findIndex(n => n === m!.slot.type) !== -1);
            if (slotList) {
                slot = slotList.find(m => !m.equipment);
                if (!slot) {
                    slot = slotList[0];
                }
            }
        }

        if (!slot) {
            return new Error(`装备${equipment.name}失败！`);
        } else {
            let old = slot.equipment;

            slot.equipment = equipment;
            this.computeProperty();
            return old;
        }
    }
    // private levelUp() {

    //     this.m.level++;

    //     this.allocation.unuse += 10;
    //     this.computeProperty();

    // }
    fightState: { [index: string]: any };
    private computeProperty() {
        const cpt = this.computed;
        const base = this.base;
        cpt.power = base.power + this.allocation.power;
        cpt.mind = base.mind + this.allocation.mind;
        cpt.intelligence = base.intelligence + this.allocation.intelligence;

        cpt.dex = base.dex + this.m.level;

        // 重算技能总几率
        cpt.probability = 0;
        this.skillList.forEach(m => {
            cpt.probability += m.probability;
        });
        const oldMaxHP = cpt.maxHP;
        // 重算最大生命
        const maxHP =
            (base.maxHP +
                cpt.power / 2 +
                this.m.level * 6) | 0;
        cpt.maxHP = maxHP;

        // 重置初始点伤
        cpt.physicalDamage = [base.physicalDamage[0], base.physicalDamage[1]];
        cpt.fireDamage = [base.fireDamage[0], base.fireDamage[1]];
        cpt.coldDamage = [base.coldDamage[0], base.coldDamage[1]];
        cpt.lightningDamage = [base.lightningDamage[0], base.lightningDamage[1]];
        cpt.chaosDamage = [base.chaosDamage[0], base.chaosDamage[1]];

        // 火焰法术额外点伤
        cpt.spellFireDamage = [0, 0];
        // 冰冷法术额外点伤
        cpt.spellColdDamage = [0, 0];
        // 闪电法术额外点伤
        cpt.spellLightningDamage = [0, 0];
        // 混沌法术额外点伤
        cpt.spellChaosDamage = [0, 0];
        // 更多火焰伤害
        cpt.fireDamageMore = 0;
        // 更多冰冷伤害
        cpt.coldDamageMore = 0;
        // 更多闪电伤害
        cpt.lightningDamageMore = 0;
        // 更多混沌伤害
        cpt.chaosDamageMore = 0;

        cpt.physicalDamageMore = cpt.power / 2 | 0;

        // 计算总护甲和闪避
        cpt.armor = base.armor;
        cpt.evasion = base.evasion;
        // 计算抗性
        cpt.fireResistance = base.fireResistance;
        cpt.coldResistance = base.coldResistance;
        cpt.lightningResistance = base.lightningResistance;
        cpt.chaosResistance = base.chaosResistance;

        // 计算装备加成等
        this.computedEquipmentsProperty();

        // 进行更多伤害加成计算
        cpt.physicalDamage[0] = cpt.physicalDamage[0] * (100 + cpt.physicalDamageMore) / 100 | 0;
        cpt.physicalDamage[1] = cpt.physicalDamage[1] * (100 + cpt.physicalDamageMore) / 100 | 0;

        cpt.fireDamage[0] = cpt.fireDamage[0] * (100 + cpt.fireDamageMore) / 100 | 0;
        cpt.fireDamage[1] = cpt.fireDamage[1] * (100 + cpt.fireDamageMore) / 100 | 0;

        cpt.coldDamage[0] = cpt.coldDamage[0] * (100 + cpt.coldDamageMore) / 100 | 0;
        cpt.coldDamage[1] = cpt.coldDamage[1] * (100 + cpt.coldDamageMore) / 100 | 0;

        cpt.lightningDamage[0] = cpt.lightningDamage[0] * (100 + cpt.lightningDamageMore) / 100 | 0;
        cpt.lightningDamage[1] = cpt.lightningDamage[1] * (100 + cpt.lightningDamageMore) / 100 | 0;

        cpt.chaosDamage[0] = cpt.chaosDamage[0] * (100 + cpt.chaosDamageMore) / 100 | 0;
        cpt.chaosDamage[1] = cpt.chaosDamage[1] * (100 + cpt.chaosDamageMore) / 100 | 0;

        // 补充变化后获得的当前hp;
        const addHP = cpt.maxHP - oldMaxHP;
        const hp = this.state.hp + addHP;
        if (hp <= cpt.maxHP) {
            this.state.hp = hp;
        } else {
            this.state.hp = maxHP;
        }
    }
    private computedEquipmentProperty(eq: Equipment) {
        const eqcomputed = eq.computed;
        const computed = this.computed;
        if (eqcomputed.physicalDamage) {
            computed.physicalDamage[0] = computed.physicalDamage[0] + eqcomputed.physicalDamage[0];
            computed.physicalDamage[1] = computed.physicalDamage[1] + eqcomputed.physicalDamage[1];
        }
        if (eqcomputed.fireDamage) {
            computed.fireDamage[0] = computed.fireDamage[0] + eqcomputed.fireDamage[0];
            computed.fireDamage[1] = computed.fireDamage[1] + eqcomputed.fireDamage[1];
        }
        if (eqcomputed.coldDamage) {
            computed.coldDamage[0] = computed.coldDamage[0] + eqcomputed.coldDamage[0];
            computed.coldDamage[1] = computed.coldDamage[1] + eqcomputed.coldDamage[1];
        }
        if (eqcomputed.lightningDamage) {
            computed.lightningDamage[0] = computed.lightningDamage[0] + eqcomputed.lightningDamage[0];
            computed.lightningDamage[1] = computed.lightningDamage[1] + eqcomputed.lightningDamage[1];
        }
        if (eqcomputed.chaosDamage) {
            computed.chaosDamage[0] = computed.chaosDamage[0] + eqcomputed.chaosDamage[0];
            computed.chaosDamage[1] = computed.chaosDamage[1] + eqcomputed.chaosDamage[1];
        }
        if (eqcomputed.armor) {
            computed.armor += eqcomputed.armor;
        }
        if (eqcomputed.evasion) {
            computed.evasion += eqcomputed.evasion;
        }
        if (eqcomputed.attackSpeed) {
            // 攻击速度
        }

        eq.effectCreatures(this);
    }
    /**
     * 计算装备属性
     */
    private computedEquipmentsProperty(): void {
        this.slotList.forEach(m => {
            if (m.equipment) {
                this.computedEquipmentProperty(m.equipment);
            }
        });
    }
    nextActionCallBack: void | (() => boolean | void);
    addPower(v: number) {
        if (this.allocation.unuse >= v) {
            this.allocation.unuse -= v;
            this.allocation.power += v;
            this.computeProperty();
        }
    }
    addMind(v: number) {
        if (this.allocation.unuse >= v) {
            this.allocation.unuse -= v;
            this.allocation.mind += v;
            this.computeProperty();
        }
    }
    addIntelligence(v: number) {
        if (this.allocation.unuse >= v) {
            this.allocation.unuse -= v;
            this.allocation.intelligence += v;
            this.computeProperty();
        }
    }

    async usePassiveSkill(war: War, enemys: Creatures[], teammate: Creatures[]) {
        this.passiveSkillList.forEach(async (m) => {
            if (m.type & SkillType.minion) {
                await m.action(war, this, enemys, teammate);
            }
        });
    }
    async action(war: War, enemys: Creatures[], teammate: Creatures[]) {
        if (this.hp <= 0) {
            return;
        }
        if (this.nextActionCallBack) {
            const free = this.nextActionCallBack();
            if (!free) {
                return;
            }
            this.nextActionCallBack = undefined;
        }
        if (this.skillList.length === 0) {
            war.console.logDangerous(`【${this.name}】观察中。`);
            return;
        }
        let probability = (this.computed.probability * Math.random() | 0);
        for (const skill of this.skillList) {
            if (probability < skill.probability) {
                this.nextActionCallBack = await skill.action(war, this, enemys, teammate);
                war.raiseSkill(this, skill);
                return;
            } else {
                probability -= skill.probability;
            }
        }
    }
    private getDamage(area: [number, number]) {
        return area[0] + ((area[1] - area[0]) * Math.random()) | 0;
    }
    attack(war: War, target: Creatures, coefficientConfig: {
        physical?: number
        fire?: number
        cold?: number
        lightning?: number
        chaos?: number
    }) {
        let physicalDamage = 0, fireDamage = 0, coldDamage = 0, lightningDamage = 0, chaosDamage = 0;
        for (const key in coefficientConfig) {
            const coefficient: number = coefficientConfig[key];
            switch (key) {
                case 'physical':
                    physicalDamage = this.getDamage(this.computed.physicalDamage) * coefficient;
                    break;
                case 'fire':
                    fireDamage = this.getDamage(this.computed.fireDamage) * coefficient;
                    break;
                case 'cold':
                    coldDamage = this.getDamage(this.computed.coldDamage) * coefficient;
                    break;
                case 'lightning':
                    lightningDamage = this.getDamage(this.computed.lightningDamage) * coefficient;
                    break;
                case 'chaos':
                    chaosDamage = this.getDamage(this.computed.fireDamage) * coefficient;
                    break;
                default:
            }
        }
        target.deductHPByHit(war, this, physicalDamage, fireDamage, coldDamage, lightningDamage, chaosDamage);
        war.raise(WarAction.beAttacked, this, target);
    }

    revorverdHP(hp: number) {
        this.state.hp += hp;
        if (this.state.hp > this.computed.maxHP) {
            this.state.hp = this.computed.maxHP;
        }
    }
    deductHPByHit(war: War, from: Creatures, physicalDamage: number, fireDamage: number, coldDamage: number, lightningDamage: number, chaosDamage: number) {
        if (this.state.hp <= 0) {
            debugger;
        }
        let damage = this.getTotalDamage(physicalDamage, fireDamage, coldDamage, lightningDamage, chaosDamage);
        this.state.hp -= damage;
        war.console.logDangerous(`【${this.name}】受到${damage}点伤害。`);
        war.onHurtByHit(this, from, damage);
        if (this.state.hp <= 0) {
            war.console.logSuperDangerous(this.name + '死亡！');
            war.raise(WarAction.beKilled, from, this);
        }
    }
    getTotalDamage(physicalDamage: number, fireDamage: number, coldDamage: number, lightningDamage: number, chaosDamage: number) {
        let damage = 0;
        if (physicalDamage !== 0) {
            // 护甲 / (护甲+伤害*10)
            damage += physicalDamage * (1 - this.armor / (this.armor + physicalDamage * 10)) | 0;
        }
        if (fireDamage !== 0) {
            damage += fireDamage * (1 - (this.computed.fireResistance / 100)) | 0;
        }
        if (coldDamage !== 0) {
            damage += coldDamage * (1 - (this.computed.coldResistance / 100)) | 0;
        }
        if (lightningDamage !== 0) {
            damage += lightningDamage * (1 - (this.computed.lightningResistance / 100)) | 0;
        }
        if (chaosDamage !== 0) {
            damage += chaosDamage * (1 - (this.computed.chaosResistance / 100)) | 0;
        }
        return damage;
    }

    deductHPByDamageOverTime(war: War, from: Creatures, physicalDamage: number, fireDamage: number, coldDamage: number, lightningDamage: number, chaosDamage: number, skill: Skill) {
        if (this.state.hp <= 0) {
            debugger;
        }

        let damage = this.getTotalDamage(physicalDamage, fireDamage, coldDamage, lightningDamage, chaosDamage);
        this.state.hp -= damage;
        war.console.logDangerous(`【${this.name}】受到${damage}点${skill.fullName}持续伤害。`);
        war.onHurtByDamageOverTime(this, from, skill, damage);
        if (this.state.hp <= 0) {
            war.console.logSuperDangerous(this.name + '死亡！');
            war.raise(WarAction.beKilled, from, this);
        }
    }
    deductHPByDamageOverTimeButNoKill(war: War, from: Creatures, physicalDamage: number, fireDamage: number, coldDamage: number, lightningDamage: number, chaosDamage: number, skill: Skill) {
        if (this.state.hp <= 0) {
            debugger;
        }

        let damage = this.getTotalDamage(physicalDamage, fireDamage, coldDamage, lightningDamage, chaosDamage);
        this.state.hp -= damage;
        war.console.logDangerous(`【${this.name}】受到${damage}点${skill.fullName}持续伤害。`);
        war.onHurtByDamageOverTime(this, from, skill, damage);
        if (this.state.hp <= 0) {
            this.state.hp = 1;
        }
    }
}