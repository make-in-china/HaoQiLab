// import React from 'react-ex';
import AddEntryComponent from 'src/Page/EntryComponent';
import { IReactComponent } from 'mobx-react';
// declare class CPN extends React.Component<any, any> { }
export const Key = 'CPN';
export default function entry<T extends IReactComponent>(name: string) {
    return function (ctor: T) {
        AddEntryComponent(name, Key, ctor);
    };
}