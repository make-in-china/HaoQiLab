import React from 'react-ex';
import Antd from 'antd-min';
import AddEntryComponent from '../../EntryComponent';
const { Header, Footer, Sider, Content } = Antd.Layout;
export default class App extends React.Component {
    render() {
        return [(
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
AddEntryComponent('Layout', 'Document', App);