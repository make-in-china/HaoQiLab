import { TimeNodeConnectData, TimeNodeVersion } from './TimeNodeVersion';
import { TimeVersion } from './TimeVersion';
import { delay } from './Lib';
import { isFunction } from 'src/Lib/is';
export type RecordDataItem<T> = {
    version: number,
    value: T
}[];

export enum TimeAction {
    Normal = 0,
    Property = 1,
    Children = 2
}
export type RecordData<T> = {
    [P in keyof T]: RecordDataItem<T[P]>
};
export class TimeTreeBase<T> {
    //#region property

    __!: {
        clone(
            old: TimeTreeBase<T>,
            newConstructor: {
                new(...args: any[]): TimeTreeBase<T>
            }
        ): T & TimeTreeBase<T>
        ctor: {
            new(...args: any[]): TimeTreeBase<T>,
            keys?: (keyof T)[],
            toJSONStringKeys?: ((keyof T) | 'children')[]
        }
        sp: { new(...args: any[]): T }
        parent: (T & TimeTreeBase<T>) | null
        sourceData: T
        recordData: RecordData<T>
        connectData: TimeNodeConnectData<T> | null
        timeVersionHistory: ReturnType<TimeVersion<T>['createTimeNodeVersion']>[],
        timeAction: TimeAction
        timeActionKey: keyof T | null
    };
    onSplitTime: null | (() => void) = null;
    onThroughTime: null | (() => void) = null;

    children: ((T & TimeTreeBase<T>) | undefined)[] = [];
    timeVersion = 0;

    timeKey?= '';
    readonly toJSONString!: (...agrs: (keyof T)[]) => string;
    //#endregion
    constructor(
        clone: (
            old: TimeTreeBase<T>,
            newConstructor: { new(...args: any[]): TimeTreeBase<T> }
        ) => T & TimeTreeBase<T>,
        ctor: {
            new(...args: any[]): TimeTreeBase<T>,
            keys?: (keyof T)[],
            toJSONStringKeys?: ((keyof T) | 'children')[]
        },
        sp: { new(...args: any[]): T },
        args: any[],
        timeVersion: TimeVersion<T> | null = null,
        parent: (T & TimeTreeBase<T>) | null = null
    ) {
        if (timeVersion === null) {
            timeVersion = new TimeVersion<T>();
        }
        const sourceData = new sp(...args);

        if (!ctor.keys) {
            // 给原型链造专有的get set
            ctor.keys = Object.keys(sourceData) as any;
            ctor.toJSONStringKeys = ctor.keys!.slice();
            ctor.toJSONStringKeys.push('children');
            ctor.keys!.forEach((k) => {

                Object.defineProperty(ctor.prototype, k, {
                    get(this: T & TimeTreeBase<T>) {
                        return this.__.sourceData[k];
                    },
                    set(this: T & TimeTreeBase<T>, v: any) {
                        let dDta = this.__.sourceData;
                        if (dDta[k] === v) {
                            return;
                        }
                        this.__.timeAction = TimeAction.Property;
                        this.__.timeActionKey = k;
                        this.splitPropertyTime(k, v, '修改' + k);
                        dDta[k] = v;
                        if (this.autoCommit) {
                            this.commitTrans();
                        }
                    }
                });
            });

            (ctor.prototype.toJSONString) = function (this: TimeTreeBase<T>, ...args2: (keyof T)[]) {
                if (args2.length === 0) {
                    return JSON.stringify(this, ctor.toJSONStringKeys as string[], '    ');
                } else {
                    let newKeys: ((keyof T) | 'children')[] = [];
                    ctor.keys!.forEach(m => {
                        if (args2.indexOf(m as keyof T) !== -1) {
                            newKeys.push(m);
                        }
                    });
                    newKeys.push('children');
                    return JSON.stringify(this, newKeys as string[], '    ');
                }
            };
        }

        const recordData = {} as RecordData<T>;
        this.timeVersion = timeVersion.version;
        const timeNodeVersion = timeVersion.createTimeNodeVersion();
        ctor.keys!.forEach((k) => {
            recordData[k] = [{
                version: -1,
                value: sourceData[k]
            }];
        });

        this.__ = {
            clone: clone,
            ctor: ctor,
            sp: sp,
            parent: parent,
            sourceData: sourceData,
            recordData: recordData,
            connectData: null,
            timeVersionHistory: [timeNodeVersion],
            timeAction: TimeAction.Normal,
            timeActionKey: null
        };

    }
    get allTimeKey() {
        return this.curTimeNodeVersion().allTimeKey;
    }
    get parent() {
        return this.__.parent;
    }
    set parent(this: T & TimeTreeBase<T>, v: (T & TimeTreeBase<T>) | null) {
        if (v !== this.__.parent) {
            this.splitTime();
            this.__.parent = v;
            if (this.autoCommit) {
                this.commitTrans();
            }
        }
    }
    newChild(...args: any[]): this {

        const me = { __proto__: this.__.ctor.prototype, constructor: this.__.ctor } as any;
        (TimeTreeBase as any).call(me, this.__.clone, this.__.ctor, this.__.sp, args, this.curTimeNodeVersion().timeVersion, this);
        this.children.push(me);
        return me;
    }
    commitTrans() {
        // 更新版本
        const d = this.__.connectData;
        if (d && !d.isCommit) {
            // if(this.parent!==d.object.parent){
            //     //更新父节点版本

            // }
            this.children.forEach(m => {
                // 更新子节点
                m.commitTrans();
            });

            // 更新自己

            this.curTimeNodeVersion().commit();

            d.isCommit = true;
            this.__.connectData = null;
        }
    }
    get root(this: T & TimeTreeBase<T>) {
        let p = this.parent;

        while (p) {
            if (p.parent === null) {
                return p;
            } else {
                p = p.parent;
            }
        }
        return this;

    }
    getListBy(this: T & TimeTreeBase<T>, key: keyof TimeTreeBase<T>, value: any): TimeTreeBase<T>[] | null {
        const arr: (T & TimeTreeBase<T>)[] = [];
        parseListBy(arr, this, key, value);
        if (arr.length > 0) {
            return arr;
        }
        return null;
    }
    getItemBy(this: T & TimeTreeBase<T>, key: keyof T, value: any): TimeTreeBase<T> | null {
        if ((this as any)[key] === value) {
            return this;
        }
        for (let idx = 0; idx < this.children.length; idx++) {
            const element = this.children[idx]!.getItemBy(key, value);
            if (element) {
                return element;
            }
        }
        return null;
    }
    get previousSibling(this: T & TimeTreeBase<T>) {
        if (this.parent) {
            const chds = this.parent.children;
            const idx = chds.indexOf(this);
            if (idx !== -1) {
                const prev = chds[idx - 1];
                if (prev) {
                    return prev;
                }
                return null;
            }
        }
        return null;
    }

    get nextSibling(this: T & TimeTreeBase<T>) {
        if (this.parent) {
            const chds = this.parent.children;
            const idx = chds.indexOf(this);
            if (idx !== -1) {
                const next = chds[idx + 1];
                if (next) {
                    return next;
                }
                return null;
            }
        }
        return null;
    }
    insertAfter(this: T & TimeTreeBase<T>, refNode: T & TimeTreeBase<T>, node: T & TimeTreeBase<T>) {
        if (refNode.parent !== this) {
            return;
        }
        let t = refNode.nextSibling;
        if (t !== null) {
            this.insertBefore(t, node);
        } else {
            this.appendChild(node);
        }
    }

    @autoSplitCommit('插入节点')
    insertBefore(this: T & TimeTreeBase<T>, refNode: T & TimeTreeBase<T>, node: T & TimeTreeBase<T>) {
        node.remove();
        let idxRefNode = refNode.getIndex();
        // let idxNode=node.getIndex();
        this.children.splice(idxRefNode, 0, node);
        node.parent = this;
    }
    getIndex(this: T & TimeTreeBase<T>): number {
        if (this.parent) {
            const chds = this.parent.children;
            return chds.indexOf(this);
        }
        return -1;
    }
    @autoSplitCommit('删除节点')
    removeChildAt(index: number) {
        const child = this.children[index];
        if (!child) {
            throw new Error('不存在index为' + index + '的子元素');
        }
        this.children.splice(index, 1);
        child.parent = null; // child会分裂时空
        return child;
    }
    removeChild(node: T & TimeTreeBase<T>) {
        let idx = this.children.indexOf(node);
        if (idx !== -1) {
            this.removeChildAt(idx);
        }
        return node;
    }
    remove(this: T & TimeTreeBase<T>) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }
    @autoSplitCommit('添加节点')
    appendChild(this: T & TimeTreeBase<T>, node: T & TimeTreeBase<T>, index = -1) {

        // node.remove();不要用 node.remove();这个会分裂时空，然后下面设置parent又分裂一次，
        const nodeParent = node.parent;
        if (nodeParent) {
            let idx = nodeParent.children.indexOf(node);
            if (idx !== -1) {
                nodeParent.children.splice(idx, 1);
            } else {
                throw new Error('错误的树结构！');
            }
        }
        node.parent = this; // 如果parent没变，node不会分裂时空；
        let cur = this.curTimeNodeVersion();
        node.updateTimeVersion(cur);
        if (index < 0) {
            this.children.push(node);
        } else {
            this.children.splice(index, 0, node);
        }

        return node;
    }
    curTimeNodeVersion() {
        return this.__.timeVersionHistory[0];
    }
    updateTimeVersion(tv: TimeNodeVersion<T>) {
        if (this.curTimeNodeVersion().timeVersion !== tv.timeVersion) {
            this.__.timeVersionHistory.unshift(tv.timeVersion.createTimeNodeVersion());
        }
    }
    hasTimeVersion(timeVersion: number) {
        const cur = this.curTimeNodeVersion();

        for (const lst of cur.transactionHistory) {
            for (const item of lst) {
                if (item.version <= timeVersion) {
                    return true;
                }
            }
        }

        return false;
    }
    findNearestTimeVersionData(timeVersion: number) {
        const cur = this.curTimeNodeVersion();

        let distance = 999999999;
        let nearestData: TimeNodeConnectData<T> | null = null;
        for (const lst of cur.transactionHistory) {
            for (const item of lst) {
                if (item.version === timeVersion) {
                    return item;
                } else {
                    let distance2 = timeVersion - item.version;
                    if (distance2 > 0 && distance2 < distance) {
                        distance = distance2;
                        nearestData = item;
                    }
                }
            }
        }

        return nearestData;

    }
    /**
     * 反序播放版本历史区间
     * @param speedRatio 播放速度倍率，1是1倍，2是2倍，0.5是0.5倍
     * @param fn 回调
     */
    async playTimeReverse(this: T & TimeTreeBase<T>, speedRatio: number = 1, fn?: (d: T & TimeTreeBase<T>) => void) {
        const max = this.maxTimeVersion;
        return playTimeFor<T>(this, max, 0, speedRatio, fn);
    }
    /**
     * 播放版本历史区间
     * @param speedRatio 播放速度倍率，1是1倍，2是2倍，0.5是0.5倍
     * @param fn 回调
     */
    async playTime(this: T & TimeTreeBase<T>, speedRatio: number = 1, fn?: (d: T & TimeTreeBase<T>) => void) {
        const max = this.maxTimeVersion;
        return playTimeFor<T>(this, 0, max, speedRatio, fn);
    }
    /**
     * 播放版本历史区间
     * @param start 开始版本(可比结束的版本号大)
     * @param end 结束版本
     * @param speedRatio 播放速度倍率，1是1倍，2是2倍，0.5是0.5倍
     * @param fn 回调
     */
    async playTimeFor(this: T & TimeTreeBase<T>, start: number, end: number, speedRatio: number = 1, fn?: (d: T & TimeTreeBase<T>) => void) {
        return playTimeFor<T>(this, start, end, speedRatio, fn);
    }
    throughTime(this: T & TimeTreeBase<T>, timeVersion: number) {
        /*
            1.全时空都变化不现实，取出根节点，找根节点相近的timeVersion
            2.从根节点开始遍历所有节点timeThrough    --肯定能连接到自己
        */
        let d = this.findNearestTimeVersionData(timeVersion);
        if (!d) {
            return false;
        }
        const root = this.root;
        if (root !== this) {
            d = root.findNearestTimeVersionData(timeVersion);
            if (!d) {
                return false;
            }
        }
        throughTime<T>(root, timeVersion, d);

        return true;

    }

    clone(this: T & TimeTreeBase<T>, deep: boolean = false) {
        const that = this.__.clone(this, this.__.ctor);
        let arr: (T & TimeTreeBase<T>)[] = [];
        if (deep) {
            this.children.forEach(m => {
                arr.push(m.clone(deep));
            });
        } else {

            this.children.forEach(m => {
                arr.push(m);
            });
        }
        if (arr.length > 0) {
            arr.forEach(m => {
                that.appendChild(m);
            });
        }
        return that;
    }

    splitTimeWith(this: TimeTreeBase<T> & T, node: TimeTreeBase<T> & T) {
        const d = this.__.connectData;
        if (!d || d.isCommit) {
            // 未连接过版本管理或版本已经提交过

            const cur = this.curTimeNodeVersion();
            this.__.connectData = cur.splitTimeWith(this.children.slice(), cur.timeVersion.version);

            const nodeCur = node.curTimeNodeVersion();
            node.__.connectData = nodeCur.splitTimeWith(node.children.slice(), cur.timeVersion.version);
            cur.timeVersion.version++;

            this.timeVersion = this.timeVersion = cur.timeVersion.version;
            this.raiseOnSplitTime();
            return cur;
        }
        return null;
    }
    raiseOnSplitTime() {
        if (isFunction(this.onSplitTime)) {
            this.onSplitTime();
        }
    }
    raiseOnThrouthTime() {
        if (isFunction(this.onThroughTime)) {
            this.onThroughTime();
        }
    }
    splitPropertyTime<U extends keyof T>(this: T & TimeTreeBase<T>, name: U, v: T[U], key?: string) {
        const d = this.__.connectData;
        if (!d || d.isCommit) {

            this.raiseOnSplitTime();

            this.__.recordData[name].push({
                version: this.timeVersion,
                value: this.__.sourceData[name]
            });
            // 把属性加多一个版本
            const cur = this.curTimeNodeVersion();
            this.__.connectData = cur.splitPropertyTime(this.children.slice(), key);
            this.timeVersion = cur.timeVersion.version;
            return cur;
        }
        return null;
    }
    splitTime(this: T & TimeTreeBase<T>, key?: string) {
        const d = this.__.connectData;
        if (!d || d.isCommit) {
            // 未连接过版本管理或版本已经提交过
            this.raiseOnSplitTime();
            const cur = this.curTimeNodeVersion();
            this.__.connectData = cur.splitTime(this.children.slice(), key);
            this.timeVersion = cur.timeVersion.version;
            return cur;
        }
        return null;
    }
    splitTimeNoUpdateTimeVersion(this: T & TimeTreeBase<T>, key?: string) {
        const d = this.__.connectData;
        if (!d || d.isCommit) {
            // 未连接过版本管理或版本已经提交过
            const cur = this.curTimeNodeVersion();
            this.__.connectData = cur.splitTimeNoUpdateTimeVersion(this.children.slice(), key);
            this.timeVersion = this.__.connectData.version;
            this.raiseOnSplitTime();
            return cur;
        }
        return null;
    }
    get autoCommit() {
        return this.curTimeNodeVersion().timeVersion.autoCommit;
    }
    set autoCommit(v: boolean) {
        this.curTimeNodeVersion().timeVersion.autoCommit = v;
    }
    get maxTimeVersion() {
        return this.curTimeNodeVersion().timeVersion.version;
    }
    set maxTimeVersion(v: number) {
        this.curTimeNodeVersion().timeVersion.version = v;
    }
}

function playTimeFor<T>(this: void, node: T & TimeTreeBase<T>, start: number, end: number, speedRatio: number, fn?: (d: T & TimeTreeBase<T>) => void) {
    let step = 1;
    if (start > end) {
        step = -1;
    }
    const endValue = end + step;
    return new Promise<void>(async (resolve, reject) => {
        const d = node.findNearestTimeVersionData(end)!;
        if (!d) {
            reject();
            return;
        }

        for (let i = start; i !== endValue; i = i + step) {
            const now = new Date().getTime();
            const d2 = node.findNearestTimeVersionData(i)!;
            const delayTime = d2.endTime.getTime() - d2.beginTime.getTime();
            node.throughTime(i);
            if (fn) {
                callbackTimePlayFor<T>(fn, node);
            }
            const time2 = new Date().getTime();
            const time3 = speedRatio * (delayTime - (time2 - now));
            await delay(time3);
        }
        resolve();
    });
}

function callbackTimePlayFor<T>(this: void, fn: (d: T & TimeTreeBase<T>) => void, d: T & TimeTreeBase<T>) {
    setTimeout(function () {
        fn(d);
    }, 0);
}

//#region functions
function findNearestPropertyFromVersion<T>(item: RecordDataItem<T>, timeVersion: number): T | null {
    let distance = 999999999;
    let nearestData: T | null = null;
    for (const item2 of item) {
        if (item2.version === timeVersion) {
            return item2.value;
        } else {
            let distance2 = timeVersion - item2.version;
            if (distance2 > 0 && distance2 < distance) {
                distance = distance2;
                nearestData = item2.value;
            }
        }
    }
    return nearestData;
}
function throughTime<T>(this: void, node: TimeTreeBase<T>, timeVersion: number, timeVersionObj: TimeNodeConnectData<T> | null = null) {
    if (!timeVersionObj) {
        timeVersionObj = node.findNearestTimeVersionData(timeVersion);
    }
    if (timeVersionObj) {

        if (timeVersionObj.version === timeVersion) {
            // 已经到达分裂点，重写本身
            node.raiseOnThrouthTime();
            const clone = timeVersionObj.children;
            const sourceData = node.__.sourceData;
            const cloneRecordData = node.__.recordData;
            const keys = node.__.ctor.keys!;
            for (const k of keys) {
                sourceData[k] = findNearestPropertyFromVersion(cloneRecordData[k], timeVersion)!;
            }

            node.children = clone;
            node.timeVersion = timeVersion;
            node.__.connectData = timeVersionObj;
            node.timeKey = timeVersionObj.key;
            // }else{
            //     //取到的是最近的历史版本

        }

        node.children.forEach(m => {
            throughTime<T>(m, timeVersion);
        });
        return true;
    }
    return false;
}
function autoSplitCommit(key?: string) {
    return function <T>
        (
        that: TimeTreeBase<T>,
        funcName: string,
        propertyDescriptor: PropertyDescriptor) {

        const oldFunc = propertyDescriptor.value;
        propertyDescriptor.value = function (this: T & TimeTreeBase<T>, ...args: any[]) {
            if (this.__.timeAction === TimeAction.Property) {
                // 分裂一次property
                const name = this.__.timeActionKey!;
                this.__.recordData[name].push({
                    version: this.timeVersion,
                    value: this.__.sourceData[name]
                });

            }
            this.__.timeAction = TimeAction.Children;
            const cur = this.splitTimeNoUpdateTimeVersion(key);
            let version;
            if (cur) {
                version = cur.timeVersion.version;
            }
            const result = oldFunc.apply(this, args);
            if (cur) {
                if (version === cur.timeVersion.version) {
                    cur.timeVersion.version++;
                    // this.timeVersion=cur.timeVersion.version;
                }
                this.timeVersion = cur.timeVersion.version;
            }
            if (this.autoCommit) {
                this.commitTrans();
            }
            return result;
        };
    };
}
function parseListBy<T extends { children: (T | undefined)[] }>(this: void, arr: T[], node: T, key: keyof T, value: any): void {
    if (node[key] === value) {
        arr.push(node);
    }
    for (let idx = 0; idx < node.children.length; idx++) {
        parseListBy(arr, node.children[idx]!, key, value);
    }
}

//#endregion