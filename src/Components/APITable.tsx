import React from 'react-ex';
import Table from './Table';
export default class App extends React.Component
    <
    {
        datasource: ({ key?: string } & Record<string, any | (any[])>)[]
    }, {}
    > {
    render() {
        return (
            <Table
                datasource={this.props.datasource}
                columns={
                    [{
                        key: 'property',
                        title: '成员',
                        dataIndex: 'property'
                    }, {
                        key: 'description',
                        title: '说明',
                        dataIndex: 'description'
                    }, {
                        key: 'type',
                        title: '类型',
                        dataIndex: 'type'
                    }, {
                        key: 'default',
                        title: '默认值',
                        dataIndex: 'default'
                    }]
                }
            />);
    }
}