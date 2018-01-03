
import React from 'react-ex';
import Antd from 'antd-min';
import Logo from 'src/Template/Default/Logo';

const { Header } = Antd.Layout;

export default class App extends React.Component<{ page: IPage }> {
    render() {
        const page = this.props.page;
        return (
            <Header style={{ zIndex: 99 }}>
                <Logo EClass="float"/>
                <div EClass="floatr">
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
