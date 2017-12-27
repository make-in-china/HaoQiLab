
import React from 'react-ex';
import Antd from 'antd-min';
import CircularText from '../../Components/CircularText';
import '../assert/index.css';
const { Header } = Antd.Layout;

@React.eclass({
    logo: [
        'f-gray fb float'.split(' '),
        {
            ' .logo': ['wem-6 hem-6 inline memt-2'.split(' ')],
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
                    <span><CircularText text="好奇实验室" /></span>
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
