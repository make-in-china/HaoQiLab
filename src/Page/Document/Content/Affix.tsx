import React from 'react-ex';
import Antd from 'antd-more';
import Table from '../../../Components/APITable';
import entry from '../Entry';
@entry('Affix')
export default class Affix extends React.Component {
    container: HTMLElement | null = null;
    render() {
        return [
            (
                <section className="markdown">
                    <h1>Affix
                <span className="subtitle">固钉</span>
                    </h1>
                    <section className="markdown"><p>将页面元素钉在可视范围。</p>
                        <h2 id="何时使用" data-scrollama-index="0"><span>何时使用</span>
                            <a href="#何时使用" className="anchor">#</a>
                        </h2><p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>
                        <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
                    </section>
                    <h2 data-scrollama-index="1">
                        <span>代码演示</span>
                        <i className="anticon anticon-appstore code-box-expand-trigger" title="展开全部代码" />
                    </h2>
                </section>
            )
            ,
            (
                <div style={{ height: '200px', overflowY: 'scroll' }} ref={(node: HTMLElement) => { this.container = node; }}>
                    <div style={{ paddingTop: '60px', height: '400px' }}>
                        <Antd.Affix>
                            <Antd.Button type="primary">Affix top</Antd.Button>
                        </Antd.Affix>
                        <br />
                        <Antd.Affix offsetBottom={0}>
                            <Antd.Button type="primary">Affix bottom</Antd.Button>
                        </Antd.Affix>
                        <br />
                        <Antd.Affix
                            offsetTop={120}
                            onChange={(affixed?: boolean) => console.log(affixed)}
                        >
                            <Antd.Button>120px to affix top</Antd.Button>
                        </Antd.Affix>
                        <br />
                        <Antd.Affix target={() => this.container}>
                            <Antd.Button type="primary">
                                Fixed at the top of container
                            </Antd.Button>
                        </Antd.Affix>

                    </div>
                </div>
            ),
            (
                <section className="markdown api-container">
                    <h2 id="API" data-scrollama-index="5">
                        <span>API</span>
                        <a href="#API" className="anchor">#</a>
                    </h2>
                    <Table
                        datasource={
                            [
                                { property: 'offsetBottom', default: '', type: 'number', description: '距离窗口底部达到指定偏移量后触发' },
                                { property: 'offsetTop', default: '', type: 'number', description: '距离窗口顶部达到指定偏移量后触发' },
                                { property: 'target', default: '() => window', type: '() => HTMLElement', description: `设置<code>Affix</code>需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数` },
                                { property: 'onChange', default: '', type: 'Function(affixed)', description: '固定状态改变时触发的回调函数' }
                            ]
                        }
                    />
                </section>
            )
        ];
    }
}