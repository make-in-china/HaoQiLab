import React from 'react-ex';
import Antd from 'antd-min';
import entry from '../Entry';
const { Header, Footer, Sider, Content } = Antd.Layout;
@entry('Layout')
export default class Layout extends React.Component {
    render() {
        return [
            '后面的不仿了，演示下动态加载',
            (
                <Antd.Layout>
                    <Sider>Sider</Sider>
                    <Antd.Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Antd.Layout>
                </Antd.Layout>
            )];
    }
}