import React from 'react-ex';
import Antd from 'antd-min';
import AddEntryComponent from '../../EntryComponent';
export default class App extends React.Component {
    container: HTMLElement | null = null;
    render() {
        return (
            <Antd.Breadcrumb separator=">">
                <Antd.Breadcrumb.Item>Home</Antd.Breadcrumb.Item>
                <Antd.Breadcrumb.Item href="">Application Center</Antd.Breadcrumb.Item>
                <Antd.Breadcrumb.Item href="">Application List</Antd.Breadcrumb.Item>
                <Antd.Breadcrumb.Item>An Application</Antd.Breadcrumb.Item>
            </Antd.Breadcrumb>
        );
    }
}
AddEntryComponent('Breadcrumb', 'Document', App);