
import React from 'react-ex';
import Antd from 'antd-min';
import CircularText from '../../Components/CircularText';
import project from '../../Project.Config';
import Animation from '../../Components/Animation';

const logo = require('../assert/logo.png');
const { Header } = Antd.Layout;

@React.eclass({
    logo: [
        'f-gray fb float'.split(' '),
        {
            ' .logo': [
                `background-image:url(${logo});background-size:100%;`,
                'wem-6 hem-6 inline memt-2'.split(' ')
            ],
            ' span': ['vertical-align:top;', 'meml_-5 inline'.split(' ')]
        }
    ]
})
export default class App extends React.Component<{ page: IPage }> {
    render() {
        const page = this.props.page;
        return (
            <Header style={{ zIndex: 99 }}>
                <div EClass="logo">
                    <div className="logo" />
                    <span><CircularText>
                        <Animation
                            iterationCount={0}
                            duration={150}
                            splitCount={project.name.length * 5}
                            data={function (index: number, max: number) {
                                if (index <= project.name.length) {
                                    // 右往左出现
                                    return new Array(project.name.length - index + 1).join('　') + project.name.substr(0, index);
                                } else if (index > project.name.length && index <= project.name.length * 5 - project.name.length) {
                                    // 当作delay
                                    return project.name;
                                } else {
                                    // 右往左消失
                                    const count = max - index;
                                    return project.name.substr(project.name.length - count, count);
                                }
                            }}
                        /></CircularText></span>
                </div>
                <div style={{ float: 'right' }}>
                    <Antd.Menu
                        onClick={page.onMenuClick}
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '63px', display: 'inline-block' }}
                        defaultSelectedKeys={[page.menu.index.toString()]}
                    >
                        {
                            page.menu.data
                                .map((k, i) => <Antd.Menu.Item page={k[1]} key={i}>{k[0]}</Antd.Menu.Item>)
                        }
                    </Antd.Menu>
                </div>
            </Header>
        );
    }
}
