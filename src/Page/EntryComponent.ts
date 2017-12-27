
export default function AddEntryComponent(name: string, pageName: string, ctor: Function) {
    const global: any = window;
    const page = global.Page || (global.Page = {});
    const index = page[pageName] || (page[pageName] = {});
    const content = index.Content || (index.Content = {});
    content[name] = ctor;
}