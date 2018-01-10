export class Local<U> {
    constructor(private key: string) { }
    get(): U | null {
        return JSON.parse(window.localStorage.getItem(this.key) as any);
    }
    set(value: U) {
        window.localStorage.setItem(this.key, JSON.stringify(value) as any);
    }
}