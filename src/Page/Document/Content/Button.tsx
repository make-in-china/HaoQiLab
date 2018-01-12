import React from 'react-ex';
import Table from '../../../Components/APITable';
import ButtonExample from './Else/Button.Ex';
import entry from '../Entry';
@entry
export default class Button extends React.Component {
    render() {
        return [
            (
                <style key="xx">{
                    `[class="code-box-demo"] .ant-btn {
                    margin-right: 8px;
                    margin-bottom: 12px;
                    }
                    [class="code-box-demo"] .ant-btn-group > .ant-btn {
                    margin-right: 0;
                    }`
                }</style>
            ),
            (
                <section className="markdown">
                    <h1>Button<span className="subtitle">按钮</span></h1>
                    <section className="markdown">
                        <p>按钮用于开始一个即时操作。</p>
                        <h2 id="何时使用" data-scrollama-index="0">
                            <span>何时使用</span>
                            <a href="#何时使用" className="anchor">#</a>
                        </h2>
                        <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                    </section>
                    <h2 data-scrollama-index="1">
                        <span>代码演示</span>
                        <i className="anticon anticon-appstore code-box-expand-trigger" title="展开全部代码" />
                    </h2>
                    <ButtonExample />

                </section>
            )
            ,
            (
                <section className="markdown api-container ant-col-20">
                    <h2 id="API" data-scrollama-index="10"><span>API</span>
                        <a href="#API" className="anchor">#</a>
                    </h2>
                    <p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：
                    <code>type</code>
                        -{'>'}
                        <code>shape</code>
                        -{'>'}
                        <code>size</code>
                        -{'>'}
                        <code>loading</code>
                        -{'>'}
                        <code>disabled</code>
                    </p>
                    <p>按钮的属性说明如下：</p>
                    <Table
                        datasource={[
                            { property: 'ghost', default: 'false', type: 'boolean', description: '幽灵属性，使按钮背景透明，版本 2.7 中增加' },
                            { property: 'htmlType', default: 'button', type: 'string', description: `设置 <code>button</code> 原生的 <code>type</code> 值，可选值请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTML 标准</a>` },
                            { property: 'icon', default: '-', type: 'string', description: '设置按钮的图标类型' },
                            { property: 'loading', default: 'false', type: 'boolean | { delay: number }', description: '设置按钮载入状态' },
                            { property: 'shape', default: '-', type: 'string', description: `设置按钮形状，可选值为 <code>circle</code> 或者不设` },
                            { property: 'size', default: 'default', type: 'string', description: `设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设` },
                            { property: 'type', default: '-', type: 'string', description: `设置按钮类型，可选值为 <code>primary</code> <code>dashed</code> <code>danger</code>(版本 2.7 中增加) 或者不设` },
                            { property: 'onClick', default: '-', type: 'function', description: `<code>click</code> 事件的 handler` },
                            { property: 'href', default: '-', type: 'string', description: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致' },
                            { property: 'target', default: '-', type: 'string', description: '相当于 a 链接的 target 属性，href 存在时生效' }
                        ]}
                    />
                    <p>
                        <code>{`<Button>Hello world!</Button>`}</code>
                        最终会被渲染为
                    <code>{`<button><span>Hello world!</span></button>`}</code>
                        ，并且除了上表中的属性，其它属性都会直接传到
                    <code>{`<button></button>`}</code>
                        。
                </p>
                    <p>
                        <code>{`<Button href="http://example.com">Hello world!</Button>`}</code>
                        则会渲染为
                    <code>{`<a href="http://example.com"><span>Hello world!</span></a>`}</code>
                        。
                </p>
                </section>
            )

        ];
    }
}