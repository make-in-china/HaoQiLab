
import React from 'react-ex';
import Antd from 'antd-min';
import project from '../../Project.Config';
const { Footer } = Antd.Layout;
export default class App extends React.Component {
    render() {
        return (
            <Footer EClass="memt-5 lhem-3 fz-20 fb ctt">
                {project.name} ©2017 Created by 功夫茶猫(QQ692425987)
            </Footer>
        );
    }
}