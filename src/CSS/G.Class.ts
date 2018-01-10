import { cssClassNS } from 'src/CSS/CSSClass';
import { calcStyle } from 'src/CSS/CalcStyle';
import { toNamesAndMapAndList, NamesAndMapAndList } from 'src/Lib/NamesAndMapAndList';
import { Local } from '../Lib/Local';
export interface ClassRule {
    display?: '' | 'inline-block' | 'block' | 'inline-flex' | 'flex' | 'inline-grid' | 'grid' | 'inline-table' | 'table' | 'list-item' | 'run-in' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group';
    margin?: number;
    padding?: number;
    borderWidth?: number;
    borderRadius?: number;
    fontSize?: number;
    // fontWeight?: number;
    fontFamily?: string;
    shadow?: [number, string];
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderStyle?: '' | 'none' | 'hidden' | 'solid' | 'dashed' | 'dotted' | 'ridge' | 'inset' | 'outset' | 'groove' | 'double';
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
} as ClassRuleData;

declare var window: { ClassNS: { data: ClassRuleData } & NamesAndMapAndList<ClassRule, ClassRuleData> } & Window;

if (window.ClassNS === undefined) {
    window.ClassNS = { data: classRuleData, ...toNamesAndMapAndList(classRuleData) };
}

export const localClassRuleData = new Local<ClassRuleData>('classRuleData');

export function registerClass() {
    const css = cssClassNS.CSSClass.instance;
    const data = localClassRuleData.get();
    const classNS = window.ClassNS;
    for (const key in classNS.data) {
        let rule: ClassRule;
        if (data && data[key]) {
            rule = data[key];
        } else {
            rule = classNS.data[key];
        }
        const { shadow, ...elseRule } = rule;
        const arr: string[] = [];
        if (shadow !== undefined) {
            arr.push(`shadow-${shadow[0]}-${shadow[1]}`);
        }
        if (arr.length > 0) {
            css.registerClassRuleItem(key, [calcStyle(elseRule), arr]);
        } else {
            css.registerClassRuleItem(key, calcStyle(elseRule));
        }

        css.registerClass(key);
    }
}

const defaultExport = window.ClassNS;

export default defaultExport;