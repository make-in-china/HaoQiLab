// #region import
import React from 'react-ex';
import entry from '../Entry';
import MultipleColumnsContainer from 'src/Components/MultipleColumnsContainer';
import { G } from 'src/CSS/G';
import { ReactNode } from 'react';
// #endregion
@entry('MultipleColumnsContainerPage')
@React.eclass(/*local eclass rule */{
    box: [[]]
})
export default class MultipleColumnsContainerPage
    extends React.Component<{
        /* props */
    }> {
    // #region static

    // #endregion

    // #region public property

    // #endregion

    // #region private property

    // #endregion

    // #region public methods withoutRender

    // #endregion
    render() {
        const border = G.Class.map.frm_border;
        const data: ReactNode[] = [];
        for (let i = 0; i < 20; i++) {
            const h = Math.floor(Math.random() * 10 + 3);
            data.push(<div key={i} EClass={border + ' hem-' + h}>{i + '.height:' + h + 'em;'}</div>);
        }
        return [
            (
                <MultipleColumnsContainer
                    cols={3}
                    datas={data}
                />
            ),
            '有空再加说明'
        ];
    }

    // #region private methods

    // #endregion
}
