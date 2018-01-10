import { cssClassNS } from 'src/CSS/CSSClass';
import { calcStyle } from 'src/CSS/CalcStyle';
import { toNamesAndMapAndList, NamesAndMapAndList } from 'src/Lib/NamesAndMapAndList';
export type CSSPropertie = Pick<React.CSSProperties,
    'display' | 'margin' | 'padding' | 'borderStyle' |
    'borderWidth' | 'borderRadius' | 'shadow' | 'color' |
    'borderColor' | 'backgroundColor' | 'fontSize' | 'fontWeight' |
    'fontFamily'
    >;
export type ClassRule = Partial<CSSPropertie>;
interface ClassRuleData {
    data: {
        [index: string]: ClassRule
    };
}
class Class implements ClassRuleData {
    data = {
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
}

declare var window: { ClassNS: Class & NamesAndMapAndList<ClassRule, Class['data']> } & Window;

if (window.ClassNS === undefined) {
    const classNSData = new Class;
    window.ClassNS = { ...classNSData, ...toNamesAndMapAndList(classNSData.data) };
}
const defaultExport = window.ClassNS;
export default defaultExport;

export function registerClass() {
    const css = cssClassNS.CSSClass.instance;
    for (const key in window.ClassNS.data) {
        css.registerClassRuleItem(key, calcStyle(window.ClassNS.data[key]));
        css.registerClass(key);
    }
}
