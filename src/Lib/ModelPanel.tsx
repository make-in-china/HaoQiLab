
import { getOffset } from 'src/Lib/getPos';
import { cssClassNS } from 'src/CSS/CSSClass';
import * as ReactDOM from 'react-dom';
import React from 'react-ex';
import { ReactInstance } from 'react';
export enum EModelPanelAlign {
    Top = 1,
    Left = 2,
    Bottom = 4,
    Right = 8
}
export class ModelPanel {
    panelBox: HTMLDivElement;
    contentBox: HTMLDivElement;
    constructor(
        public content: React.ReactNode,
        public nearBy?: ReactInstance,
        eClass?: string,
        public autoClose: boolean = false
    ) {
        const panelBox = this.panelBox = this.contentBox = document.createElement('div');
        const cssClass = cssClassNS.CSSClass.instance;
        let eClassAll = 'fixed pdip-5 zidx-2 uof';
        if (eClassAll !== undefined) {
            eClassAll = eClassAll + ' ' + eClass;
        }
        cssClass.parse(eClassAll);
        panelBox.className = eClassAll;

    }
    open(align: EModelPanelAlign = EModelPanelAlign.Top + EModelPanelAlign.Right) {
        const panelBox = this.panelBox;
        let left: number;
        let top: number;

        document.body.appendChild(panelBox);

        ReactDOM.render((<div>{this.content}</div>), this.contentBox);
        const nearBy = this.nearBy;
        if (nearBy !== undefined) {
            let pos: { x: number, y: number };
            let dom: HTMLElement;
            if (nearBy instanceof HTMLElement) {
                dom = nearBy;
            } else {
                dom = ReactDOM.findDOMNode(nearBy) as HTMLElement;
            }
            pos = getOffset(dom);
            left = pos.x;
            top = pos.y;
            debugger;
            if (align & EModelPanelAlign.Bottom) {
                top = top + dom.scrollHeight;
            }
            if (align & EModelPanelAlign.Right) {
                left = left + dom.scrollWidth;
            }
            if (align & EModelPanelAlign.Left) {
                left = left - panelBox.scrollWidth;
            }
            if (align & EModelPanelAlign.Top) {
                top = top - panelBox.scrollHeight;
            }

        } else {
            left = 5;
            top = 5;
        }
        panelBox.style.left = left + 'px';

        panelBox.style.top = top + 'px';
        const pos2 = getOffset(panelBox);

        if (pos2.x + panelBox.scrollWidth > document.body.clientWidth - 5) {
            left = pos2.x + panelBox.scrollWidth + 5 - document.body.clientWidth;
            panelBox.style.left = left + 'px';
        }

        if (pos2.y + panelBox.scrollHeight > document.body.clientHeight - 5) {
            top = pos2.x + panelBox.scrollHeight + 5 - document.body.clientHeight;
            panelBox.style.top = top + 'px';
        }
        const pos3 = getOffset(panelBox);
        if (pos3.y < 5) {
            panelBox.style.top = top - pos3.y + 5 + 'px';
        }
        if (pos3.x < 5) {
            panelBox.style.left = left - pos3.x + 5 + 'px';
        }
        if (this.autoClose) {
            document.body.addEventListener('click', this.closeHandle);
        }
    }
    close = () => {
        document.body.removeEventListener('click', this.closeHandle);
        this.panelBox.remove();
    }
    private closeHandle = (e: Event) => {
        if (this.panelBox.contains(e.target as any)) {
            return;
        }
        this.close();
    }
}
