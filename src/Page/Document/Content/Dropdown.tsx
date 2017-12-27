import React from 'react-ex';
import Antd from 'antd-min';
import AddEntryComponent from '../../EntryComponent';
class App extends React.Component {
    container: HTMLElement | null = null;
    render() {
        return (
            <Antd.Dropdown
                overlay={
                    <Antd.Menu>
                        <Antd.Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                        </Antd.Menu.Item>
                        <Antd.Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                        </Antd.Menu.Item>
                        <Antd.Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                        </Antd.Menu.Item>
                    </Antd.Menu>
                }
            >
                <a className="ant-dropdown-link" href="#">
                    Hover me <Antd.Icon type="down" />
                </a>
            </Antd.Dropdown>

        );
    }
}
export default App;
AddEntryComponent('Dropdown', 'Document', App);