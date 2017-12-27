import React from 'react-ex';
import Antd from 'antd-more';
import ExampleContainer from '../../../../Components/ExampleContainer';
export default class App extends React.Component {
    render() {
        return (
            <ExampleContainer
                examples={
                    [{
                        title: '按钮类型',
                        view: (
                            <div>
                                <Antd.Button type="primary">Primary</Antd.Button>
                                <Antd.Button>Default</Antd.Button>
                                <Antd.Button type="dashed">Dashed</Antd.Button>
                                <Antd.Button type="danger">Danger</Antd.Button>
                            </div>),
                        description: (<div>
                            <p>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</p>
                            <blockquote>
                                <p>
                                    <code>danger</code> 在 <code>antd@2.7</code> 后支持。
                            </p>
                            </blockquote>
                        </div>)
                    },
                    {
                        title: '图标按钮',
                        view: (<div>
                            <Antd.Button type="primary" shape="circle" icon="search" />
                            <Antd.Button type="primary" icon="search">Search</Antd.Button>
                            <Antd.Button shape="circle" icon="search" />
                            <Antd.Button icon="search">Search</Antd.Button>
                            <br />
                            <Antd.Button shape="circle" icon="search" />
                            <Antd.Button icon="search">Search</Antd.Button>
                            <Antd.Button type="dashed" shape="circle" icon="search" />
                            <Antd.Button type="dashed" icon="search">Search</Antd.Button>
                        </div>),
                        description: (<div><p>当需要在 <code>Button</code> 内嵌入 <code>Icon</code> 时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。</p><p>如果想控制 <code>Icon</code> 具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon</code> 属性。</p></div>)
                    },
                    {
                        title: '3',
                        view: (<div style={{ height: 300 }} />),
                        description: (<div />)
                    },
                    {
                        title: '4',
                        view: (<div />),
                        description: (<div />)
                    },
                    {
                        title: '5',
                        view: (<div />),
                        description: (<div />)
                    },
                    {
                        title: '6',
                        view: (<div />),
                        description: (<div />)
                    }
                    ]
                }
            />

        );
    }
}
