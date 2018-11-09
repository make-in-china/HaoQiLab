import { TimeTreeBase } from './TimeTreeBase';
import { OmitValueWithType } from 'tslang/library/index';
import { ext } from './Extends';
// var __extends=require('./lib/extends.js').__extends;

export type TimeTreeClass<T, U extends any[]> = T & TimeTreeBase<T> & {
    newChild(...args: U): T & TimeTreeBase<T>
    children: (T & TimeTreeBase<T>)[]
};
export type Tree<T> = T & { children?: Tree<T>[] };
export interface TimeTreeClassConstructor<T extends object, U extends any[]> {
    new(...args: U): TimeTreeClass<T, U>;
    from(json: Tree<Partial<OmitValueWithType<T, Function>>>): TimeTreeClass<T, U>;
}
/**
 * 生成时空版本的构造器
 * @param sp 构造器（必须构造完成前初始化所有属性）
 * @param clone 克隆实现
 */
export function makeTimeTreeClass<T extends object, U extends any[]>(
    sp: { new(...args: U): T },
    clone: (
        old: T & TimeTreeBase<T>,
        newConstructor: TimeTreeClassConstructor<T, U>
    ) => T & TimeTreeBase<T>,
    constructorParams: string[]
): TimeTreeClassConstructor<T, U> {
    function clsCtor(this: T, ...args: U) {
        return (TimeTreeBase as any).call(this, clone, clsCtor, sp, args);
    }
    ext(clsCtor, sp);
    ext(clsCtor, TimeTreeBase);
    clsCtor.from = function (json: Tree<Partial<OmitValueWithType<T, Function>>>) {
        return newNode(null, clsCtor, constructorParams, json);
    };
    return clsCtor as any;
}
function newNode<T extends object>(parent: any | null, clsCtor: any, constructorParams: string[], json: Tree<Partial<OmitValueWithType<T, Function>>>) {
    const args: any[] = [];
    constructorParams.forEach(k => {
        args.push((json as any)[k]);
    });
    let node: any;
    if (parent) {
        node = parent.newChild.apply(parent, args);
    } else {
        node = Reflect.construct(clsCtor, args);
    }
    for (let key in json) {
        if (key === 'children') {
            const list = json.children!;
            list.forEach(m => {
                newNode(node, clsCtor, constructorParams, m);
            });
        } else {
            node[key] = (json as any)[key];
        }
    }
    return node;
}