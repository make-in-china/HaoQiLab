
import React from 'react-ex';
import Antd from 'antd-min';
const { Footer} = Antd.Layout;
export default class App extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                react实验室 ©2017 Created by 功夫茶猫
            </Footer>
        );
    }
}