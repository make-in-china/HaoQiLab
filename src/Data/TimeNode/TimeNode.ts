import { makeTimeTreeClass } from './ClassHelper';

export class HistoryNode {

    public descript: string | null = null;
    public isVertical = false;
    public isSpaceHolder = false;
    public size = 0.5;

    constructor(
        public id: string,
        public name: string

    ) {
    }

    setData() {
        // 写点啥
    }
}
export const TimeNodeClass = makeTimeTreeClass(HistoryNode,
    // tslint:disable-next-line:typedef
    function (me, ctor) {
        var clone = new ctor(me.id, me.name);
        clone.descript = me.descript;
        clone.isVertical = me.isVertical;
        clone.isSpaceHolder = me.isSpaceHolder;
        clone.size = me.size;
        return clone;
    },
    ['id', 'name']
);

export type TimeNodeClassInstance = InstanceType<typeof TimeNodeClass>;
