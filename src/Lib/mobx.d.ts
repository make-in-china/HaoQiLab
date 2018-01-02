

import { IObservableFactory , IObservableFactories } from "mobx/lib/api/observable";

export type IReactComponent<P = any> =
    | React.StatelessComponent<P>
    | React.ComponentClass<P>
    | React.ClassicComponentClass<P>

declare const everything: {
    observer: {
        (stores: string[]): <T extends IReactComponent>(clazz: T) => void
        <T extends IReactComponent>(stores: string[], clazz: T): T
        <T extends IReactComponent>(target: T): T
    }
    observable: IObservableFactory & IObservableFactories & {
        deep: {
            struct<T>(initialValue?: T): T;
        };
        ref: {
            struct<T>(initialValue?: T): T;
        };
    };
};
export default everything;