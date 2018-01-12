import AddEntryComponent from 'src/Page/EntryComponent';
import { IReactComponent } from 'mobx-react';
export default function entry<T extends IReactComponent>(ctor: T) {
    AddEntryComponent(ctor.name, 'Document', ctor);
}