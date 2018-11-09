import { WarAction, War } from './War';
import { SkillType, Skill } from './Skill';
export class Property<T> {
    constructor(public name: string, public value: T) {
    }
}
export abstract class Creatures {

    minions: Creatures[] = [];
    basePhysicalDamageName = '基础物理伤害';
    baseName: string;
    skillList: Skill[];
    passiveSkillList: Skill[];
    description: string;
    featureDescription: string;

    protected m = {
        level: 1
    };
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
    computed = {
        // 力量
        power: 0,
        // 意念
        mind: 0,
        // 智慧
        intelligence: 0,
        // 技能几率总值
        probability: 100,
        // 名字
        name: this.baseName,
        // 最大生命值
        maxHP: 50,
        // 物理伤害
        physicalDamage: [5, 10] as [number, number],
        // 护甲
        armor: 0
    };
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
        // 护甲
        armor: 0
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
    // private levelUp() {

    //     this.m.level++;

    //     this.allocation.unuse += 10;
    //     this.computeProperty();

    // }
    private computeProperty() {
        this.computed.power = this.base.power + this.allocation.power;
        this.computed.mind = this.base.mind + this.allocation.mind;
        this.computed.intelligence = this.base.intelligence + this.allocation.intelligence;

        // 重算技能总几率
        this.computed.probability = 0;
        this.skillList.forEach(m => {
            this.computed.probability += m.probability;
        });

        // 重算最大生命
        const maxHP =
            (this.base.maxHP +
                this.computed.power / 2 +
                this.m.level * 6) | 0;
        const addHP = maxHP - this.computed.maxHP;
        this.computed.maxHP = maxHP;
        const hp = this.state.hp + addHP;
        if (hp <= maxHP) {
            this.state.hp = hp;
        } else {
            this.state.hp = maxHP;
        }

        // 计算总物理伤害
        let physicalMore = 1 + this.computed.power / 200;
        this.computed.physicalDamage = [this.base.physicalDamage[0] * physicalMore, this.base.physicalDamage[1] * physicalMore];

        // 计算总护甲
        this.computed.armor = this.base.armor;
    }
    private nextActionCallBack: void | (() => boolean | void);
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

    usePassiveSkill(war: War, enemys: Creatures[], teammate: Creatures[]) {
        this.passiveSkillList.forEach(m => {
            if (m.type & SkillType.minion) {
                m.action(war, this, enemys, teammate);
            }
        });
    }
    action(war: War, enemys: Creatures[], teammate: Creatures[]) {
        if (this.hp === 0) {
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
                this.nextActionCallBack = skill.action(war, this, enemys, teammate);
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
        let damage = 0;
        for (const key in coefficientConfig) {
            const coefficient: number = coefficientConfig[key];
            switch (key) {
                case 'physical':
                    // 护甲 / (护甲+伤害*10)
                    let physicalDamage = this.getDamage(this.computed.physicalDamage) * coefficient;
                    damage += physicalDamage * (1 - target.armor / (target.armor + physicalDamage * 10));
                    break;
                case 'fire':
                    break;
                case 'cold':
                    break;
                case 'lightning':
                    break;
                case 'chaos':

                    break;
                default:
            }
        }
        damage = damage | 0;
        target.deductHP(war, this, damage);
        war.raise(WarAction.beAttacked, this, target);
    }

    revorverdHP(hp: number) {
        this.state.hp += hp;
        if (this.state.hp > this.computed.maxHP) {
            this.state.hp = this.computed.maxHP;
        }
    }
    private deductHP(war: War, from: Creatures, damage: number) {
        this.state.hp -= damage;
        war.console.logDangerous(`【${this.name}】受到${damage}点伤害。`);
        if (this.state.hp <= 0) {
            war.console.logSuperDangerous(this.name + '死亡！');
            war.raise(WarAction.beKilled, from, this);
        }
    }
}