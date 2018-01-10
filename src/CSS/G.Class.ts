import { cssClassNS } from 'src/CSS/CSSClass';
import { calcStyle } from 'src/CSS/CalcStyle';
import { toNamesAndMapAndList, NamesAndMapAndList } from 'src/Lib/NamesAndMapAndList';
import { Local } from '../Lib/Local';
export type CSSPropertie = Pick<React.CSSProperties,
    'display' | 'margin' | 'padding' | 'borderStyle' |
    'borderWidth' | 'borderRadius' | 'shadow' | 'color' |
    'borderColor' | 'backgroundColor' | 'fontSize' | 'fontWeight' |
    'fontFamily'
    >;
export type ClassRule = Partial<CSSPropertie>;
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
    }
};

declare var window: { ClassNS: { data: ClassRuleData } & NamesAndMapAndList<ClassRule, ClassRuleData> } & Window;

if (window.ClassNS === undefined) {
    window.ClassNS = { data: classRuleData, ...toNamesAndMapAndList(classRuleData) };
}

export const localClassRuleData = new Local<ClassRuleData>('classRuleData');

export function registerClass() {
    const css = cssClassNS.CSSClass.instance;
    const data = localClassRuleData.get();
    for (const key in window.ClassNS.data) {
        if (data && data[key]) {
            css.registerClassRuleItem(key, calcStyle(data[key]));
        } else {
            css.registerClassRuleItem(key, calcStyle(window.ClassNS.data[key]));
        }
        css.registerClass(key);
    }
}

const defaultExport = window.ClassNS;

export default defaultExport;