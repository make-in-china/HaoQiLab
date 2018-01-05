import * as ReactDOM from 'react-dom';
import * as _React from 'react';
export function calcStyle(style: React.CSSProperties) {
    let str: string | null = null;
    ReactDOM.render(
        _React.createElement('div', {
            // tslint:disable-next-line:typedef
            ref: function (elem: HTMLElement | null) {
                str = elem!.style.cssText;
            },
            style: style
        }),
        document.createElement('div')
    );
    return function () {
        return str ? str : '';
    };
}