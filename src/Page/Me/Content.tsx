import React from 'react-ex';

// import Antd from 'antd-more';
import { observer /* , observable */ } from 'mobx-index';

@React.eclass({
    box: {
        ' ul': 'line-height:2em;'
    }
})
@observer
export default class App extends React.Component {
    render() {
        return (
            <div EClass="box">
                <div EClass="pdiptb-10 fb">我，功夫茶猫</div>
                <div EClass="ltdip bdst-dashed mdiptb-5 mdiplr-3"/>
                <div>我的github开源列表：
                    <ul>
                        <li><a href="https://github.com/make-in-china/HaoQiLab">HaoQiLab好奇实验室</a>（本项目，主要熟悉react和做react的增强测试）</li>
                        <li><a href="https://github.com/make-in-china/turtlejs">turtlejs龟计算</a>（一个组件框架，从我的某个hybrid app项目里整出来的，类似ng1,vue,react。）</li>
                        <li>
                            turtlejs2（上面的turtlejs的typescript并行重构版，独立拆分了多个项目，未完成，搁置状态）
                            <ul>
                                <li><a href="https://github.com/make-in-china/turtlejs-ui-server">turtlejs-ui-server</a>（ui编译服务）</li>
                                <li><a href="https://github.com/make-in-china/turtlejs-vdom">turtlejs-vdom</a>（仿真虚拟dom，多个生成结果分别支持不同仿真程度的dom，用以测试一些js库的运行效果）</li>
                                <li><a href="https://github.com/make-in-china/turtlejs-ui">turtlejs-ui</a>（组件项目）</li>
                            </ul>
                        </li>
                        <li><a href="https://github.com/make-in-china/vscode-turtle">vscode-turtle</a>（vscode 0.6时代的插件，后来vscode已经拥有了我插件大部分功能，我就不更新了。）</li>
                    </ul>
                </div>
            </div>
        );
    }
}