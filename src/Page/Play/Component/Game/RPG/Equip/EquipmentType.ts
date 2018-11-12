import { isArray } from 'src/Lib/is';

export enum EquipmentType {
    // 手持
    handheld = '手持1',
    // 手持
    handheld2 = '手持2',
    // 手持
    handheld3 = '手持3',
    // 手持
    handheld4 = '手持4',
    // 身体
    body = '身体',
    // 头部
    helmet = '头部',
    // 鞋子
    boots = '鞋子',
    // 手套
    groves = '手套',
    // 腰带
    belt = '腰带',
    // 珠宝
    jewel = '珠宝',
    // 戒指
    ring = '戒指1',
    // 戒指
    ring2 = '戒指2',
    // 戒指
    ring3 = '戒指3',
    // 戒指
    ring4 = '戒指4',
    // 项链
    amulet = '项链',
    // 晶核
    nucleus = '晶核',
}

export function isHandheld(type: EquipmentType | EquipmentType[]) {
    let is = true;
    let arr;
    if (isArray(type)) {
        arr = type;
    } else {
        arr = [type];
    }
    for (let i = 0; i < arr.length; i++) {
        const type2 = arr[i];
        is = type2 === EquipmentType.handheld || type2 === EquipmentType.handheld2 || type2 === EquipmentType.handheld3 || type2 === EquipmentType.handheld4;
        if (!is) {
            return false;
        }
    }
    return is;
}