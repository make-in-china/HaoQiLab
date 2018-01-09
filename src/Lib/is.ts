export function isString(v: any): v is string {
    return Object.prototype.toString.call(v) === '[object String]';
}
export function isFunction(v: any): v is Function {
    return '[object Function]' === Object.prototype.toString.call(v);
}
export function isObject(v: any): v is Object {
    let type = typeof v;
    return type === 'function' || type === 'object' && !!v;
}
export function isArray(v: any): v is Array<any> {
    return '[object Array]' === Object.prototype.toString.call(v);
}