// import React from 'react-ex';
import AddEntryComponent from 'src/Page/EntryComponent';
import { IReactComponent } from 'mobx-react';
// declare class CPN extends React.Component<any, any> { }
export default function entry<T extends IReactComponent>(ctor: T) {
    debugger;
    AddEntryComponent(ctor.name, 'ReactEx', ctor);
}