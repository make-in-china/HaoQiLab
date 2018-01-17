// #region import
import React from 'react-ex';
import { toMap } from 'src/Lib/NamesAndMapAndList';
// #endregion

interface ComponentClass extends Partial<React.Component<any, any>> {
    new(): ComponentClass;
}

export function ExportEClass(ctor: ComponentClass) {
    return class extends ctor {

    };
}
