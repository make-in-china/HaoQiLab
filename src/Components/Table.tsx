import React from 'react-ex';
export default class App extends React.Component
    <
    {
        datasource: ({ key?: string } & Record<string, any | (any[])>)[],
        columns: {
            title: string,
            dataIndex: string,
            key: string
        }[]
    }, {}
    > {
    private keyMap: Record<string, number> = {};
    constructor(props: App['props']) {
        super(props);
        this.props.columns.map((v, i) => {
            this.keyMap[v.key] = i;
        });
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>{this.props.columns.map((v) => (
                        <th>{v.title}</th>
                    ))}</tr>
                </thead>
                <tbody>{this.props.datasource.map((v) => (
                    <tr>{(() => {
                        const keys = Object.keys(v);
                        const arrtd = new Array(keys.length - 1);
                        keys.forEach((k, i) => {
                            if (k !== 'key') {
                                arrtd[this.keyMap[k]] = (<td dangerouslySetInnerHTML={{ __html: v[k] }} />);
                            }
                        });
                        return arrtd;
                    })()}</tr>
                ))}</tbody>
            </table>);
    }

}