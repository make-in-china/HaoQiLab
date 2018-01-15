import { cssClassNS } from 'src/CSS/CSSClass';
import { calcStyle } from 'src/CSS/CalcStyle';
import { toNamesAndMapAndList } from 'src/Lib/NamesAndMapAndList';
import { Local } from '../Lib/Local';
export interface ClassRule {
    display?: '' | 'inline-block' | 'block' | 'inline-flex' | 'flex' | 'inline-grid' | 'grid' | 'inline-table' | 'table' | 'list-item' | 'run-in' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group';
    margin?: number;
    padding?: number;
    borderWidth?: number;
    borderRadius?: number;
    fontSize?: number;
    fontWeight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    fontFamily?: string;
    shadow?: [number, string];
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderStyle?: '' | 'none' | 'hidden' | 'solid' | 'dashed' | 'dotted' | 'ridge' | 'inset' | 'outset' | 'groove' | 'double';
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
}
export interface ClassRuleData {
    [index: string]: ClassRule;
}
const classRuleData = {
    clr_background: {
        backgroundColor: '#f0f0f0'
    },
    clr_background2: {
        backgroundColor: '#fff'
    },
    clr_background3: {
        backgroundColor: '#fff'
    },
    clr_primary: {
        color: '#555',
    },
    frm_border: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5
    },
    frm_border2: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3
    },
    clr_shadow: {
        shadow: [1, '40000000'],
    }
};

// declare var window: { ClassNS: { data: ClassRuleData } & NamesAndMapAndList<ClassRule, ClassRuleData> } & Window;

// if (window.ClassNS === undefined) {
//     window.ClassNS = { data: classRuleData, ...toNamesAndMapAndList(classRuleData) };
// }

const classNS = { data: classRuleData, ...toNamesAndMapAndList(classRuleData) };

export const localClassRuleData = new Local<ClassRuleData>('classRuleData');
function getSkinRule(css: cssClassNS.CSSClass, data: ClassRuleData | null, name: string) {
    let rule: ClassRule;
    if (data && data[name]) {
        rule = data[name];
    } else {
        rule = classRuleData[name];
    }
    const { fontWeight, shadow, rotateX, rotateY, rotateZ, ...elseRule } = rule;
    const arr: string[] = [];
    let elseString = '';
    if (shadow !== undefined) {
        arr.push(`shadow-${shadow[0]}-${shadow[1]}`);
    }
    if (fontWeight !== undefined) {
        elseString += 'font-weight:' + fontWeight + ';';
    }
    let transform: string[] = [];
    if (rotateX) {
        transform.push(`rotateX(${rotateX}deg)`);
    }
    if (rotateY) {
        transform.push(`rotateY(${rotateY}deg)`);
    }
    if (rotateZ) {
        transform.push(`rotateZ(${rotateZ}deg)`);
    }
    const arr2: (string | string[] | (() => string))[] = [calcStyle(elseRule)];
    if (arr.length > 0) {
        arr2.push(arr);
    }
    if (transform.length > 0) {
        arr2.push(`transform:${transform.join(' ')};`);
    }
    if (elseString.length > 0) {
        arr2.push(elseString);
    }
    return arr2;
}
function updateLocalClassByName(css: cssClassNS.CSSClass, data: ClassRuleData, name: string) {
    const rule = getSkinRule(css, data, name);
    const skinRule = css.getRule(name);
    if (skinRule === null) {
        return;
    }
    skinRule.map[name] = rule;

    css.updateClass(name);
}
export function updateLocalClass(name?: string) {
    const css = cssClassNS.CSSClass.instance;
    const data = localClassRuleData.get();
    // const classNS = window.ClassNS;
    if (data) {
        if (name !== undefined) {
            updateLocalClassByName(css, data, name);
        } else {
            for (const key in classRuleData) {
                updateLocalClassByName(css, data, key);
            }
        }
    }
}
export function registerClass() {
    const css = cssClassNS.CSSClass.instance;
    const data = localClassRuleData.get();
    // const classNS = window.ClassNS;
    for (const key in classRuleData) {
        const rule = getSkinRule(css, data, key);
        css.registerClassRuleItem(key, rule);
        css.registerClass(key);
    }
}

export default classNS;