import { TouchMoveEvent } from 'src/Lib/TouchMoveEvent';

export function getPos(e: TouchMoveEvent<HTMLElement>, target: HTMLElement) {
    const offset = getOffset(target);
    return { x: (e.targetEvent as any).pageX - offset.x, y: (e.targetEvent as any).pageY - offset.y };
}
export function getOffset(target: HTMLElement, rootTarget: HTMLElement = document.body) {
    let x = 0;
    let y = 0;
    do {
        x += target.offsetLeft;
        y += target.offsetTop;
        target = target.offsetParent as HTMLElement;
    } while (target && target !== rootTarget);
    return { x: x, y: y };
}