import { TimeVersion } from './TimeVersion';
import { TimeTreeBase } from './TimeTreeBase';

// function findVersion<T>(lst:TimeNodeVersion<T>['current'],version:number){
//     for (let i = 0; i < lst.length; i++) {
//         const m = lst[i];
//         if(m.version===version){
//             return m;
//         }
//     }
//     return null;
// }
export type TimeNodeVersionCloneData<T> = ((T & TimeTreeBase<T>) | undefined)[];

export interface TimeNodeConnectData<T> {
    children: TimeNodeVersionCloneData<T>;
    isCommit: boolean;
    version: number;
    beginTime: Date;
    endTime: Date;
    key?: string;
}
export class TimeNodeVersion<T> {
    allTimeKey: { [index: number]: string | undefined } = {};

    transactionHistory: TimeNodeVersion<T>['current'][] = [];

    current: TimeNodeConnectData<T>[] = [];

    beginTime: Date = new Date;

    constructor(public timeVersion: TimeVersion<T>) { }
    commit() {

        if (this.current.length !== 0) {
            this.transactionHistory.push(this.current);
            this.createNew();
        }
    }
    createNew() {
        this.current = [];
        this.beginTime = new Date;
    }
    splitTimeWith(clone: TimeNodeVersionCloneData<T>, version: number, key?: string) {
        const connectData = {
            children: clone,
            isCommit: false,
            version: version,
            beginTime: this.beginTime,
            endTime: new Date(),
            key: key
        };
        this.beginTime = connectData.endTime;
        this.current.push(connectData);
        this.allTimeKey[version] = key;
        return connectData;
    }
    splitTimeNoUpdateTimeVersion(old: TimeNodeVersionCloneData<T>, key?: string) {
        return this.splitTimeWith(old, this.timeVersion.version, key);
    }
    splitPropertyTime(obj: TimeNodeVersionCloneData<T>, key?: string) {
        const connectData = this.splitTimeWith(obj, this.timeVersion.version, key);
        connectData.version = this.timeVersion.version;
        this.timeVersion.version++;
        return connectData;
    }
    splitTime(old: TimeNodeVersionCloneData<T>, key?: string) {
        const connectData = this.splitTimeWith(old, this.timeVersion.version, key);
        connectData.version = this.timeVersion.version;
        this.timeVersion.version++;
        return connectData;
    }
    // isConnect(obj:T){
    //     for (const itm of this.current) {
    //         if(itm.object===obj){
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // use(version:number){
    //     // const obj=findVersion(this.current,version);
    //     // if(obj){
    //     //     return obj;
    //     // }
    //     for (let i = 0; i < this.transactionHistory.length; i++) {
    //         const m = this.transactionHistory[i];
    //         const historyObj=findVersion(m,version);
    //         if(historyObj){
    //             return historyObj;
    //         }
    //     }
    //     return null;
    //     // const lst=this.list;
    //     // for (let i = 0; i < lst.length; i++) {
    //     //     const m = lst[i];
    //     //     if(m.id===version){
    //     //         const prevOld=lst[i-1].list;
    //     //         return true;
    //     //     }
    //     // }
    //     // return false;
    // }
}