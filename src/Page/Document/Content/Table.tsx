
import React from 'react-ex';
import Antd from 'antd-more';
import entry from '../Entry';
const FormItem = Antd.Form.Item;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: (text: string) => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text: string, record: { name: string }) => (
        <span>
            <a href="#">Action 一 {record.name}</a>
            <span className="ant-divider" />
            <a href="#">Delete</a>
            <span className="ant-divider" />
            <a href="#" className="ant-dropdown-link">
                More actions <Antd.Icon type="down" />
            </a>
        </span>
    ),
}];

const data: {
    key: number
    name: string
    age: string
    address: string
    description: string
}[] = [];
for (let i = 1; i <= 5; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

const expandedRowRender = (record: any) => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };

@entry('Table')
export default class Table extends React.Component {
    state = {
        bordered: false,
        loading: false,
        pagination: true,
        size: 'default' as 'default' | 'middle' | 'small',
        expandedRowRender,
        title,
        showHeader,
        footer,
        rowSelection: {},
        scroll: undefined,
    };

    handleToggle = (prop: any) => {
        return (enable: boolean) => {
            this.setState({ [prop]: enable });
        };
    }

    handleSizeChange = (e: any) => {
        this.setState({ size: e.target.value });
    }

    handleExpandChange = (enable: boolean) => {
        this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
    }

    handleTitleChange = (enable: boolean) => {
        this.setState({ title: enable ? title : undefined });
    }

    handleHeaderChange = (enable: boolean) => {
        this.setState({ showHeader: enable ? showHeader : false });
    }

    handleFooterChange = (enable: boolean) => {
        this.setState({ footer: enable ? footer : undefined });
    }

    handleRowSelectionChange = (enable: boolean) => {
        this.setState({ rowSelection: enable ? {} : undefined });
    }

    handleScollChange = (enable: boolean) => {
        this.setState({ scroll: enable ? scroll : undefined });
    }

    render() {
        const state = this.state;
        return [
            '后面的不仿了，演示下动态加载',
            (
                <div style={{ minWidth: 800 }}>
                    <div className="components-table-demo-control-bar">
                        <Antd.Form layout="inline">
                            <FormItem label="Bordered">
                                <Antd.Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
                            </FormItem>
                            <FormItem label="loading">
                                <Antd.Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                            </FormItem>
                            <FormItem label="Pagination">
                                <Antd.Switch checked={state.pagination} onChange={this.handleToggle('pagination')} />
                            </FormItem>
                            <FormItem label="Title">
                                <Antd.Switch checked={!!state.title} onChange={this.handleTitleChange} />
                            </FormItem>
                            <FormItem label="Column Header">
                                <Antd.Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
                            </FormItem>
                            <FormItem label="Footer">
                                <Antd.Switch checked={!!state.footer} onChange={this.handleFooterChange} />
                            </FormItem>
                            <FormItem label="Expandable">
                                <Antd.Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
                            </FormItem>
                            <FormItem label="Checkbox">
                                <Antd.Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
                            </FormItem>
                            <FormItem label="Fixed Header">
                                <Antd.Switch checked={!!state.scroll} onChange={this.handleScollChange} />
                            </FormItem>
                            <FormItem label="Size">
                                <Antd.Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                                    <Antd.Radio.Button value="default">Default</Antd.Radio.Button>
                                    <Antd.Radio.Button value="middle">Middle</Antd.Radio.Button>
                                    <Antd.Radio.Button value="small">Small</Antd.Radio.Button>
                                </Antd.Radio.Group>
                            </FormItem>
                        </Antd.Form>
                    </div>
                    <Antd.Table
                        size={this.state.size}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            )];
    }
}