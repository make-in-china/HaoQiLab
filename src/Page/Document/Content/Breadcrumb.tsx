import React from 'react-ex';
import Antd from 'antd-min';
import entry from '../Entry';
@entry('Breadcrumb')
export default class Breadcrumb extends React.Component {
    container: HTMLElement | null = null;
    render() {
        return [
            '后面的不仿了，演示下动态加载',
            (
                <Antd.Breadcrumb separator=">">
                    <Antd.Breadcrumb.Item>Home</Antd.Breadcrumb.Item>
                    <Antd.Breadcrumb.Item href="">Application Center</Antd.Breadcrumb.Item>
                    <Antd.Breadcrumb.Item href="">Application List</Antd.Breadcrumb.Item>
                    <Antd.Breadcrumb.Item>An Application</Antd.Breadcrumb.Item>
                </Antd.Breadcrumb>
            )];
    }
}