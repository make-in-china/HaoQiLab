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
    weWin = false;
    weDead = false;
    // 行动条
    actionStack: {
        dex: number
        creatures: Creatures
        nextActionPos: number
        distance: number
    }[] = [];
    actionPos = 0;
    actionTime: number;
    constructor(
        public teammate: Creatures[],
        public enemys: Creatures[],
        private onScrollAction: (actionStack: War['actionStack']) => void,
        private onAction: (creatures: Creatures) => void,
        private onWin: () => void
    ) {
        enemys.forEach(m => this.console.logNormal(`遭遇` + m.name));
        this.initActionStack();
    }
    updateActionStack(): void {
        this.teammate.concat(this.enemys).forEach(m => {
            if (this.actionStack.findIndex(n => {
                return n.creatures === m;
            }) === -1) {
                this.actionStack.push(this.createActionStack(m));
            }
        });
    }
    initActionStack() {
        this.actionStack = this.teammate.concat(this.enemys).map(m => {
            return this.createActionStack(m);
        });

    }
    getHighOrLowHPEnemys(enemys: Creatures[]) {
        let hp = 99999999999;
        let isHigh = false;
        let enemy: Creatures | null = null;
        if (Math.random() < 0.5) {
            isHigh = true;
            hp = 0;
        }
        for (let i = 0; i < enemys.length; i++) {
            const m = enemys[i];
            if (m.hp <= 0) {
                continue;
            }
            if (isHigh) {

                if (m.hp > hp) {
                    hp = m.hp;
                    enemy = m;
                }
            } else {

                if (m.hp < hp) {
                    hp = m.hp;
                    enemy = m;
                }
            }
        }
        return enemy;
    }
    private createActionStack(m: Creatures) {
        // dex 100   dex 200
        // actionBar 1000 
        // 1s 跑完
        // 100000/100=1000  100000/200=500
        const distance = 100000 / m.computed.dex;
        return {
            dex: m.computed.dex,
            creatures: m,
            nextActionPos: distance,
            distance: distance
        };
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
    async action() {

        this.teammate.forEach(async(m) => {
            await m.usePassiveSkill(this, this.enemys, this.teammate);
        });
        this.enemys.forEach(async(m) => {
            await m.usePassiveSkill(this, this.teammate, this.enemys);
        });

        this.checkWin();
        if (this.weDead || this.weWin) {
            return;
        }

        const actionLoop = async () => {
            const actionList = this.actionStack.filter(m => {
                m.nextActionPos -= 8;
                if (m.creatures.computed.dex !== m.dex) {
                    m.dex = m.creatures.computed.dex;
                    const distance = 100000 / m.dex;
                    m.nextActionPos += m.distance - distance;
                    m.distance = distance;
                }
                if (m.nextActionPos <= 0) {
                    m.nextActionPos += m.distance;
                    return m;
                }
                return null;
            });
            this.onScrollAction(this.actionStack);
            if (actionList.length > 0) {
                window.clearInterval(this.actionTime);
                for (const m of actionList) {
                    await this.doAction(m);
                    if (this.weWin || this.weDead) {
                        return;
                    }
                }
                this.actionTime = window.setInterval(actionLoop, 15);
            }

        };
        this.actionTime = window.setInterval(actionLoop, 15);
    }

    private async doAction(m: { dex: number; creatures: Creatures; nextActionPos: number; distance: number; }) {
        this.onAction(m.creatures);
        if (m.creatures.isTeammate) {
            await m.creatures.action(this, this.enemys, this.teammate);
        } else {
            await m.creatures.action(this, this.teammate, this.enemys);
        }
        this.roundIndex++;
        this.checkWin();
    }

    endAction() {
        window.clearInterval(this.actionTime);
    }
    roundIndex: number = 0;
    private checkWin() {
        this.weWin = this.isAllDead(this.enemys);
        if (this.weWin) {
            this.console.logNormal(`我方胜利！行动数 ${this.roundIndex}`);
            this.onWin();
            return;
        }
        this.weDead = this.isAllDead(this.teammate);
        if (this.weDead) {
            this.console.logNormal(`我方战败！行动数 ${this.roundIndex}`);
            this.console.logNormal(`生命女神不忍生灵涂炭，复活了我们！`);
            this.teammate.forEach(m => {
                m.revorverdHP(m.computed.maxHP);
            });
            this.weDead = false;
        }
    }

    // round() {
    //     this.roundIndex++;
    //     this.console.logNormal(`---------第${this.roundIndex}行动----------`);
    //     this.teammate.forEach(m => {
    //         m.action(this, this.enemys, this.teammate);
    //     });
    //     this.enemys.forEach(m => {
    //         m.action(this, this.teammate, this.enemys);
    //     });

    //     this.checkWin();
    // }
}