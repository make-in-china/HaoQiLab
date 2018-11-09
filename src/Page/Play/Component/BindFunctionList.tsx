import React from 'react-ex';

const enum FuncListCombineLogic {
    Or = 0,
    And = 1
}
function combine<T>(...args: {
    logic?: FuncListCombineLogic
    func: (value: T) => boolean
}[]) {
    return function (value: T) {
        let returnValue: boolean = false;
        let isFirst = true;
        for (const info of args) {
            if (isFirst) {
                returnValue = info.func(value);
                isFirst = false;
            } else {
                if (info.logic === FuncListCombineLogic.Or) {
                    if (returnValue) {
                        // 如果之前的值为可用，则直接输出
                        return returnValue;
                    } else {
                        // 合并计算结果
                        returnValue = returnValue || info.func(value);
                    }
                } else {
                    // 合并计算结果
                    returnValue = returnValue && info.func(value);
                }
            }

        }
        return returnValue;
    };
}

export default class BindFunctionList
    extends React.Component<{
        /* props */
    }> {

    render() {
        const value = combine<string>(
            {
                func(v: string) { return v.length === 3; }
            }, {
                logic: FuncListCombineLogic.Or, /* || */
                func(v: string) { return v[0] === '1'; }
            }, {
                logic: FuncListCombineLogic.And, /* && */
                func(v: string) { return v[1] === '2'; }
            });
        return (
            <div className={this.props.className} >
                {'value.length===3 || value[0]==="1" && value[1]==="2"'}
                <br/>
                {'输入000，返回值：' + value('000')}
                <br/>
                {'输入12，返回值：' + value('12')}
                <br/>
                {'输入22，返回值：' + value('22')}
                <br/>
                {'输入21，返回值：' + value('11')}
            </div >
        );
    }
    // #endregion

    // #region private methods

    // #endregion
}
