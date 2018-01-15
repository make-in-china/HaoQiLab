import AddEntryComponent from 'src/Page/EntryComponent';
import { IReactComponent } from 'mobx-react';
export const Key = 'Document';
export default function entry<T extends IReactComponent>(name: string) {
    return function (ctor: T) {
        AddEntryComponent(ctor.name, Key, ctor);
    };
}