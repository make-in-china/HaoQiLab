import React from 'react-ex';
import Antd from 'antd-min';
const SubMenu = Antd.Menu.SubMenu;
const MenuItemGroup = Antd.Menu.ItemGroup;

import entry from '../Entry';
@entry
export default class Menu extends React.Component {
    handleClick: IPage['onMenuClick'] = (e) => {
        console.log('click ', e);
    }
    render() {
        return (
            <Antd.Menu
                onClick={this.handleClick}
                style={{ width: 240 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Antd.Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Antd.Menu.Item key="1">Option 1</Antd.Menu.Item>
                        <Antd.Menu.Item key="2">Option 2</Antd.Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Antd.Menu.Item key="3">Option 3</Antd.Menu.Item>
                        <Antd.Menu.Item key="4">Option 4</Antd.Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Antd.Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Antd.Menu.Item key="5">Option 5</Antd.Menu.Item>
                    <Antd.Menu.Item key="6">Option 6</Antd.Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Antd.Menu.Item key="7">Option 7</Antd.Menu.Item>
                        <Antd.Menu.Item key="8">Option 8</Antd.Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Antd.Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Antd.Menu.Item key="9">Option 9</Antd.Menu.Item>
                    <Antd.Menu.Item key="10">Option 10</Antd.Menu.Item>
                    <Antd.Menu.Item key="11">Option 11</Antd.Menu.Item>
                    <Antd.Menu.Item key="12">Option 12</Antd.Menu.Item>
                </SubMenu>
            </Antd.Menu>
        );
    }
}