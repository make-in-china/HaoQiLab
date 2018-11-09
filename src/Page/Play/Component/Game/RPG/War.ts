import { Creatures } from './Creatures';
import { Skill } from './Skill';
import { Console } from './Console';

export enum WarAction {
    beAttacked = 'beAttacked',
    beKilled = 'beKilled',
    useSkill = 'useSkill'
}
export interface WarActionCallBack {
    beAttacked(creatures: Creatures, from: Creatures): void;
    beKilled(creatures: Creatures, from: Creatures): void;
    useSkill(skill: Skill): void;
}
export class War {
    console = new Console();
    weWin= false;
    weDead= false;
    constructor(public teammate: Creatures[], public enemys: Creatures[]) {
        this.console.logNormal(`遭遇` + enemys.map(m => m.name).join('、'));
    }
    isAllDead(enemys: Creatures[]) {
        let isAllDead = true;
        for (const m of enemys) {
            if (m.hp > 0) {
                isAllDead = false;
                break;
            }
        }
        return isAllDead;
    }
    private m = {
        onList: {
            [WarAction.beAttacked]: [] as WarActionCallBack[WarAction.beAttacked][],
            [WarAction.beKilled]: [] as WarActionCallBack[WarAction.beKilled][],
            [WarAction.useSkill]: [] as WarActionCallBack[WarAction.useSkill][]
        },
        onWhoList: {
            [WarAction.beAttacked]: [] as [Creatures, WarActionCallBack[WarAction.beAttacked]][],
            [WarAction.beKilled]: [] as [Creatures, WarActionCallBack[WarAction.beKilled]][],
            [WarAction.useSkill]: [] as [Creatures, WarActionCallBack[WarAction.useSkill]][]
        }
    };

    raiseSkill(target: Creatures, skill: Skill) {
        this.m.onList['useSkill'].forEach(m => {
            m(skill);
        });
        this.m.onWhoList['useSkill'].forEach(m => {
            if (m[0] === target) {
                m[1](skill);
            }
        });
    }
    raise<T extends Exclude<WarAction, 'useSkill'>>(warAction: T, from: Creatures, target: Creatures) {
        this.m.onList[warAction].forEach(m => {
            m(target, from);
        });
        this.m.onWhoList[warAction].forEach(m => {
            if (m[0] === target) {
                m[1](target, from);
            }
        });
    }
    on<T extends WarAction>(warAction: T, fn: WarActionCallBack[T]) {
        (this.m.onList[warAction] as any).push(fn);
    }
    onWho<T extends WarAction>(who: Creatures, warAction: T, fn: WarActionCallBack[T]) {
        (this.m.onWhoList[warAction] as any).push([who, fn]);
    }
    action() {

        this.teammate.forEach(m => {
            m.usePassiveSkill(this, this.teammate, this.enemys);
        });
        this.enemys.forEach(m => {
            m.usePassiveSkill(this, this.teammate, this.enemys);
        });

        this.checkWin();
    }
    roundIndex: number = 0;
    private checkWin() {
        this.weWin = this.isAllDead(this.enemys);
        this.weDead = this.isAllDead(this.teammate);
        if (this.weWin) {
            this.console.logNormal(`我方胜利！回合数 ${this.roundIndex}`);
        } else if (this.weDead) {
            this.console.logNormal(`我方战败！回合数 ${this.roundIndex}`);
        }
    }

    round() {
        this.roundIndex++;
        this.console.logNormal(`---------第${this.roundIndex}回合----------`);
        this.teammate.forEach(m => {
            m.action(this, this.enemys, this.teammate);
        });
        this.enemys.forEach(m => {
            m.action(this, this.teammate, this.enemys);
        });

        this.checkWin();
    }
}