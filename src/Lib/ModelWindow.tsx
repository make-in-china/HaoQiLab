import { ModelPanel } from 'src/Lib/ModelPanel';
import { ReactInstance } from 'react';
import { cssClassNS } from 'src/CSS/CSSClass';

export class ModelWindow extends ModelPanel {
    titleBox: HTMLDivElement;
    constructor(
        public content: React.ReactNode,
        public nearBy?: ReactInstance,
        eClass?: string,
        public autoClose: boolean = false
    ) {
        super(content, nearBy, eClass, autoClose);
        const titleBox = this.titleBox = document.createElement('div');
        const closeBtn = document.createElement('div');
        closeBtn.onclick = () => {
            this.close();
        };
        closeBtn.innerHTML = '×';
        cssClassNS.CSSClass.instance.parseToElement(closeBtn, 'floatr wem-1 hem-1 pointer fb f-red');
        titleBox.appendChild(closeBtn);
        this.panelBox.appendChild(titleBox);
        const contentBox = this.contentBox = document.createElement('div');
        this.panelBox.appendChild(contentBox);
    }
}