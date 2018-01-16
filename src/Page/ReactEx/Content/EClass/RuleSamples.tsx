// #region import
import React from 'react-ex';
import CodeList from 'src/Components/CodeList';
import { highlightString } from 'src/Lib/highlightStyle';
import { formatJSON } from 'src/Lib/Format';
import { G } from 'src/CSS/G';
// #endregion

export default class RuleSamples extends React.Component {
    // #region static

    // #endregion

    // #region public property

    // #endregion

    // #region private property

    // #endregion

    // #region public methods withoutRender

    // #endregion
    render() {
        return (
            <div EClass="inline-chd mdip-chd-5 pdip-chd-5 alignTop-chd">
                <div className={G.Class.map.frm_border}>
                    直接输出字符串
                    <CodeList
                        datas={formatJSON({
                            color: 'color:#f00;'
                        }).split('\n')}
                        highLight={highlightString}
                    />
                </div>
                <div className={G.Class.map.frm_border}>
                    函数调用
                    <CodeList
                        datas={formatJSON({
                            border: function (idx: number = 1, moreInfo: string = 'solid') { return `border:${idx}px #808080 ${moreInfo};`; }
                        }).split('\n')}
                        highLight={highlightString}
                    />
                </div>
                <div className={G.Class.map.frm_border}>
                    子选择
                    <CodeList
                        datas={formatJSON({
                            lineBox: {
                                chd: 'display:inline-block;'
                            }
                        }).split('\n')}
                        highLight={highlightString}
                    />
                </div>
                <div className={G.Class.map.frm_border}>
                    多个输出
                    <CodeList
                        datas={formatJSON({
                            border: [
                                'color:#f00;',
                                function (idx: number = 1, moreInfo: string = 'solid') { return `border:${idx}px #808080 ${moreInfo};`; }
                            ]
                        }).split('\n')}
                        highLight={highlightString}
                    />
                </div>
                <div className={G.Class.map.frm_border}>
                    多层输出
                    <CodeList
                        datas={formatJSON({
                            border: [
                                'color:#f00;',
                                {
                                    chd1: [
                                        'color:#ff0;',
                                        {
                                            chd2: [
                                                'color:#fff;',
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }).split('\n')}
                        highLight={highlightString}
                    />
                </div>
                <div className={G.Class.map.frm_border}>
                    组合
                    <CodeList
                        datas={formatJSON({
                            color: 'color:#f00;',
                            border: function (idx: number = 1, moreInfo: string = 'solid') { return `border:${idx}px #808080 ${moreInfo};`; },
                            borderAndColor: [['color', 'border-10-dashed']]
                        }).split('\n')}
                        highLight={highlightString}
                    />
                </div>
            </div>
        );
    }

    // #region private methods

    // #endregion
}
