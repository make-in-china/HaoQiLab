import { cssClassNS } from 'src/CSS/CSSClass';
import { calcStyle } from 'src/CSS/CalcStyle';

declare var window: { ClassNS: Class } & Window;
type CSSPropertie = Pick<React.CSSProperties, 'display' | 'margin' | 'padding' | 'borderStyle' | 'borderWidth' | 'borderRadius' | 'shadow' | 'color' | 'borderColor' | 'backgroundColor'>;
export interface ClassItem {
    name: keyof Class['map'];
    defaultRule: Partial<CSSPropertie>;
    use: {
        [P in keyof CSSPropertie]?: boolean
    };
}
class Class {
    map = {
        clr_primary: 'clr_primary',
        clr_background: 'clr_background',
        clr_background2: 'clr_background2',
        clr_background3: 'clr_background3',
        frame: 'frame'
    };
    list: ClassItem[] = [
        {
            name: 'clr_background',
            use: {
                backgroundColor: true
            },
            defaultRule: {
                backgroundColor: '#f0f0f0'
            }
        }, {
            name: 'clr_background2',
            use: {
                backgroundColor: true
            },
            defaultRule: {
                backgroundColor: '#fff'
            }
        }, {
            name: 'clr_background3',
            use: {
                backgroundColor: true
            },
            defaultRule: {
                backgroundColor: '#fff'
            }
        }, {
            name: 'clr_primary',
            use: {
                color: true,
            },
            defaultRule: {
                color: '#555',
            }
        },
        {
            name: 'frame',
            use: {
                display: true,
                padding: true,
                margin: true,
                borderColor: true,
                borderWidth: true,
                borderRadius: true,
                borderStyle: true,
                shadow: true
            },
            defaultRule: {
                borderColor: '#555',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '5px'
            }
        }
    ];
    register() {
        const css = cssClassNS.CSSClass.instance;
        for (const item of this.list) {
            css.registerClassRuleItem(item.name, calcStyle(item.defaultRule));
            css.registerClass(item.name);
        }
    }
}
if (window.ClassNS === undefined) {
    window.ClassNS = new Class;
}
const defaultExport = window.ClassNS;
export default defaultExport;