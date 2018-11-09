import React, { css } from 'react-ex';
import { observer /* , observable */ } from 'mobx-index';

interface FixHeaderTableColumn {
    // 列标题
    title: string;
    // 数据字段名
    key?: string;
    // 自定义渲染列
    render?: React.ReactNode;
    // 列宽度
    width?: number | string;
}

interface FixHeaderTableProps {
    // 表格列描述
    columns: FixHeaderTableColumn[];
    // 表格数据
    data: {
        [index: string]: any
    }[];
}
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    wrap: [
        css`
        display: flex;
        flex-direction: column;
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        color: #495060;
        font-size: 12px;
        background-color: #fff;
        box-sizing: border-box;
      `,
        {
            ':before': css`
                content: "";
                position: absolute;
                background-color: #dddee1;
                width: 100%;
                height: 1px;
                left: 0;
                bottom: 0;
                z-index: 1;
            `,
            ':after': css`
                width: 1px;
                height: 100%;
                top: 0;
                right: 0;
                z-index: 3;
                content: "";
                position: absolute;
                background-color: #dddee1;
            `,
            ' .selected': css`
                background-color: greenyellow;
            `
        },
    ],
    thtd: css`
        padding: 0 16px;
        height: 38px;
        text-align: left;
        text-overflow: ellipsis;
        vertical-align: middle;
        border-bottom: 1px solid #e9eaec;
        box-sizing: border-box;
    `,
    th: [['thtd'], css`
        white-space: nowrap;
        overflow: hidden;
        border-right: 1px solid rgb(233, 234, 236);
        background-color: #f8f8f9;
    `],
    td: [['thtd'], css`
        border-right: 1px solid #e9eaec;
        word-break: keep-all;
        font-size: 12px;
    `],
    // body: [
    //     css`
    //         overflow: auto;
    //         box-sizing: border-box;
    //         height: 100%;
    //     `,
    //     {
    //         ' .&tr:hover': css`
    //             background-color: #eee;
    //         `,
    //         ' .selected:hover': css`
    //             background-color: greenyellow;
    //         `
    //     }
    // ],
    heade: css`
        position: relative;
        overflow: hidden;
    `,
    nodata: css`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    `
});
@React.eclass(config)
@observer
export default class FixHeaderTable extends React.Component<FixHeaderTableProps> {
    // class前缀
    // static Prefix = 'sp__table';

    private tableRows: JSX.Element[];
    private currentSelect: number = 0;
    private trRefs: HTMLTableRowElement[];
    constructor(props: FixHeaderTableProps) {
        super(props);
        this.state = { selecteIndexs: [] };
    }
    /**
     * 单选表格行
     * @param index 表格行数
     */
    public ActiveTableRow(index: number) {
        const { data } = this.props;
        if (index < 0 || index >= data.length) { return; }
        console.log('setState 设置当前选中索引', index);
        // this.setState({selecteIndexs: [index]});
        // this.select = index;
        // this.forceUpdate();
        this.select(index);
    }

    // 渲染
    public render() {
        console.log('开始表格渲染');
        return (
            <div EClass={clsMap.box}>
                <div EClass={clsMap.wrap}>
                    {/* {this.TableHeader()} */}
                    {this.TableBody()}
                </div>
            </div>
        );
    }

    public componentWillMount() {

        this.init(this.props);

    }

    public componentWillReceiveProps(props: this['props']) {

        this.init(props);

    }

    public componentWillUpdate() {
        console.log('即将更新');
        console.time('a');
    }

    public componentDidUpdate() {
        console.log('更新完毕'/* , this.state.selecteIndexs */);
        console.timeEnd('a');
    }
    // 表格列宽度组
    private TableColGroup() {
        const { columns } = this.props;
        console.log('遍历数据渲染表格列');
        return (
            <colgroup>
                {columns.map((column, i) => (<col key={i} width={column.width} />))}
            </colgroup>
        );
    }

    // // 表格头
    // private TableHeader() {
    //     const { columns } = this.props;

    //     return (
    //         <div className="sp__table-heade">
    //             <table>
    //                 {this.TableColGroup()}
    //                 <thead>
    //                     <tr>
    //                         {columns.map((col, i) => (<th key={i} EClass="th">{col.title}</th>))}
    //                     </tr>
    //                 </thead>
    //             </table>
    //         </div>
    //     );
    // }

    private select(index: number): any {
        if (this.trRefs.length === 0) {
            return;
        }

        this.trRefs[this.currentSelect].classList.remove('selected');
        this.trRefs[index].classList.add('selected');
        this.currentSelect = index;
    }
    private init(props: this['props']) {
        this.trRefs = [];
        const { data } = props;
        console.log('生成数据渲染表格行');
        const tableRows = data.map((item, i) => {
            return (
                <tr key={i} ref={(instance: HTMLTableRowElement) => { this.trRefs.push(instance); }} onClick={() => { this.ActiveTableRow(i); }}>
                    {this.TableCols(item)}
                </tr>
            );
        });
        this.tableRows = tableRows;
        this.select(0);
    }
    // 表格列
    private TableCols(item: { [index: string]: any; }) {
        return this.props.columns.map((col, colIndex) => {
            if (!col.key) {
                return null;
            }
            const value = item[col.key];
            return (<td EClass={clsMap.td} key={colIndex}>{value}</td>);
        });
    }

    // 表格体
    private TableBody() {
        // const { data } = this.props;
        return (
            <table>
                {this.TableColGroup()}
                <tbody>
                    {this.tableRows}
                </tbody>
            </table>
        );
    }

}