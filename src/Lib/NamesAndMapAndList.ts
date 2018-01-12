
export interface NamesAndMapAndList<P, T extends { [index: string]: P }> {
    map: {
        [U in keyof T]: U
    };
    list: P[];
    names: string[];
}
export function toNamesAndMapAndList<P, T extends { [index: string]: P }>(data: T): NamesAndMapAndList<P, T> {
    const map: {
        [U in keyof T]: U
    } = {} as any;
    const list: P[] = [];
    const names: string[] = [];
    Object.keys(data).forEach(v => {
        map[v] = v;
        list.push(data[v]);
        names.push(v);
    });
    return { map, list, names };
}
export function toNames<P, T extends { [index: string]: P }>(data: T) {

    const names: string[] = [];
    Object.keys(data).forEach(v => {

        names.push(v);
    });
    return { names };
}
export function toMap<P, T extends { [index: string]: P }>(data: T) {
    const map: {
        [U in keyof T]: U
    } = {} as any;
    Object.keys(data).forEach(v => {
        map[v] = v;
    });
    return { map };
}
export function toList<P, T extends { [index: string]: P }>(data: T): { list: P[] } {
    const list: P[] = [];
    Object.keys(data).forEach(v => {
        list.push(data[v]);
    });
    return { list: list };
}