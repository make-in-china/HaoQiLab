import React from 'react-ex';
import PlayGround from '../../../Components/PlayGround';
import entry from '../Entry';
import CodeList from 'src/Components/CodeList';
import { highlightString } from 'src/Lib/highlightStyle';
import { formatJSON } from 'src/Lib/Format';
import { G } from 'src/CSS/G';
import B from 'src/Page/ReactEx/Content/EClass/B';
import A from 'src/Page/ReactEx/Content/EClass/A';
@entry('EClass')
@React.eclass({
    box: [
        ['pdip-10', 'ladip', 'rdip-20', 'bg-gray', 'inline'],
        {
            chd: [['mdip-5', 'pdip-5', 'rdip-5', 'bg-blue', 'f-gray', 'inline']]
        }
    ]
})
export default class EClass extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass="box">{/* 动态样式 */}
                <div>如果</div>
                <div>,</div>
                <div>我是DJ</div>
                <div>,</div>
                <div>你会爱我吗</div>
                <div>?</div>
            </div>
        ));
    });
    render() {
        return (
            <div>
                <div>
                    <p>该增强一言难尽，先展示个示例，后面逐步讲解如何获得EClass的特性的</p>
                    <p>
                        简介：观察本项目源码，可以看到项目构建的绝大多数组件都使用了一个eclass（@React.eclass）的装饰器,该装饰器注册了一个类隔离级别的样式rule，并装饰了render方法，被装饰过的render方法会在运行期间切换cssClass上下文，此时，当render方法内的代码调用预先替换掉的React.createElement，createElement会使用正确的cssClass实例来注册EClass并转换为className属性。
                    </p>
                    <p>
                        效果如下：
                    </p>
                </div>
                <PlayGround
                    source={this.playGroundData.source}
                    sourceMaxHeight={300}
                    cssClass={this.cssClass}
                >
                    {this.playGroundData.result}
                </PlayGround>
                <div>
                    <h3>rule的一些例子</h3>
                    <div>
                        rule的结构是一个多层混合结构，以下是一些合法的rule:
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
                    </div>
                </div>
                <div>
                    <h3>class的隔离</h3>
                    <p>
                        历史教训：早期前端样式的编写免不了class污染，比如A君写了个轮播，使用了box做class name，B君写了个取色器，也使用了box做class name，当你同时使用了轮播和取色器，这2个box就被互相污染了。
                    </p>
                    <p>
                        思考：那么，我们如何保证没有使用到冲突的class nmae呢？同学们可能能找到不少方案，我这里提供的是一种透明隔离机制，自增key类组件隔离样式
                    </p>
                    <p>
                        下面我们来演示2个组件，他们均使用了叫做box的class name
                    </p>
                    <div>
                        <div className="ant-col-12">
                            <A />
                        </div>
                        <div className="ant-col-12">
                            <B />
                        </div>
                    </div>
                    <p>
                        可以看到，他们虽然都用了box做class name，但最终使用的是VNbox(N全局自增)
                    </p>
                </div>
            </div>
        );
    }
}