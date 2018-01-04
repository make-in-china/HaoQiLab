import { TouchMoveEvent } from './TouchMoveEvent';
import { SyntheticEvent } from 'src/Lib/react';
/**
 * 鼠标（手指）拖滑处理
 */
export class TouchMove<T extends HTMLElement> {
    autoDown: (event: SyntheticEvent<T>) => void;
    // private down: (event: SyntheticEvent<T>) => void;
    private up: (event: SyntheticEvent<T>) => void;
    private move: (event: SyntheticEvent<T>) => void;
    // touchstart: (event: SyntheticEvent<T>) => void;
    // touchend: (event: SyntheticEvent<T>) => void;
    // touchcancel: (event: SyntheticEvent<T>) => void;
    // touchmove: (event: SyntheticEvent<T>) => void;
    private isTouch: boolean = false;
    private target: EventTarget;
    constructor(private fn: (event: TouchMoveEvent<T>, target: EventTarget) => void) {
        let that = this;
        let isFirstRunAuto = true;
        this.autoDown = function (event: SyntheticEvent<T>) {
            that.isTouch = true;
            if (isFirstRunAuto) {
                document.body.addEventListener('mousemove', that.move as any);
                document.body.addEventListener('mouseup', that.up as any);
                isFirstRunAuto = false;
            }
            const evt = new TouchMoveEvent(event, that.isTouch);
            that.target = evt.targetEvent.target;
            that.fn.call(this, evt, that.target);
        };
        // this.down = function (event: SyntheticEvent<T>) {
        //     that.isTouch = true;
        //     that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        // };
        this.up = function (event: SyntheticEvent<T>) {
            if (that.isTouch) {
                that.isTouch = false;
                that.fn.call(this, new TouchMoveEvent(event, that.isTouch), that.target);
            }
        };
        this.move = function (event: SyntheticEvent<T>) {
            if (that.isTouch) {
                that.fn.call(this, new TouchMoveEvent(event, that.isTouch), that.target);
            }
        };
        // this.touchstart = function (event: SyntheticEvent<T>) {
        //     that.isTouch = true;
        //     that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        // };
        // this.touchend = this.touchcancel = function (event: SyntheticEvent<T>) {
        //     that.isTouch = false;
        //     that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        // };
        // this.touchmove = function (event: SyntheticEvent<T>) {
        //     if (that.isTouch) {
        //         that.fn.call(this, new TouchMoveEvent(event, that.isTouch));
        //     }
        // };
        // elem.ontouchmove=function(this:T,event:Event){
        //     if(that.isTouch)
        //     that.fn.call(this,event)
        // }
    }
}