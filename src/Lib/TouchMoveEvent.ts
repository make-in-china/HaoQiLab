import {  SyntheticEvent } from 'src/Lib/react';

export class TouchMoveEvent <T> {
    x: number;
    y: number;
    targetEvent: SyntheticEvent<T>;
    target: EventTarget;
    constructor(e: SyntheticEvent<T>, public isTouch: boolean) {
        this.targetEvent = e;
        if (e instanceof TouchEvent) {
            this.x = e.changedTouches[0].screenX;
            this.y = e.changedTouches[0].screenY;
            let target = document.elementFromPoint(this.x, this.y);
            if (e.target !== target) {
                // if(target.parentNode===e.target.parentNode)
                this.target = target!;
            } else {
                this.target = e.target;
            }
        } else if (e instanceof MouseEvent || ('clientX' in e && 'clientY' in e)) {
            this.x = (e as any).clientX;
            this.y = (e as any).clientY;
            this.target = e.target;
        }
    }
}