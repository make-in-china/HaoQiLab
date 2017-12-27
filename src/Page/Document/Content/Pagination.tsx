import React from 'react-ex';
import Antd from 'antd-more';
import AddEntryComponent from '../../EntryComponent';
class App extends React.Component {
    showTotal(total: number) {
        return `Total ${total} items`;
    }
    itemRender(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next') {
        if (type === 'prev') {
            return <a>上一页</a>;
        } else if (type === 'next') {
            return <a>下一页</a>;
        }
        return null;
    }

    render() {
        return [
            <Antd.Pagination key="1" simple={undefined} defaultCurrent={2} total={50} />,
            <Antd.Pagination key="2" size="small" total={50} />,
            <Antd.Pagination key="3" size="small" total={50} showSizeChanger={undefined} showQuickJumper={undefined} />,
            <Antd.Pagination key="4" size="small" total={50} showTotal={this.showTotal} />,
            <Antd.Pagination key="5" total={500} itemRender={this.itemRender} />

        ];
    }
}
export default App;

AddEntryComponent('Pagination', 'Document', App);