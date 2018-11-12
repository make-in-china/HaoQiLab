export interface EffecctDesction {
    template: string[];
    args: (string | number | EffecctDesction[])[];
}
export function makeEffecctDesction(template: TemplateStringsArray, ...args: (string | number | EffecctDesction[])[]) {
    return {
        template: template.slice(), args
    };
}
export function makeBlueEffecctDesction(str: string) {
    return makeEffecctDesction`{#6262ff}${str}`;
}
export const minimumDesction: EffecctDesction = {
    template: [],
    args: []
};