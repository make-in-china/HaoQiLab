
import React, { css } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { TimeNodeClass, TimeNodeClassInstance } from 'src/Data/TimeNode/TimeNode';
import Antd from 'antd-more';
import { delay } from 'src/Data/TimeNode/Lib';
const Tree = Antd.Tree;
const TreeNode = Tree.TreeNode;
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    
    showBox: css`height:300px;overflow:auto;`,
    sliderBox: [
        css`padding:5px 0;float:right;display:block;width:120px;font-size:12px;`,
        {   // 修改组件反序着色
            ' .ant-slider-dot': css`border:2px solid #8cc8ff;`,
            ' .ant-slider-dot-active': css`border-color:#e8e8e8;`,
            ' .ant-slider:hover .ant-slider-rail': css`background-color:#69c0ff;`,
            ' .ant-slider-rail': css`background-color:#91d5ff;`,
            ' .ant-slider-track': css`background-color:#f5f5f5;border-radius:2px;`,
            ' .ant-slider:hover .ant-slider-track': css`background-color:#f5f5f5;`,
            ' .ant-slider-mark-text': css`color:rgba(0,0,0,.65);`,
            ' .ant-slider-mark-text-active': css`color:rgba(0,0,0,.45);`
        }
    ],
    tree: css`display:inline-block;`
});
@React.eclass(config)

@observer
export default class UndoRedo
    extends React.Component<{}> {
    @observable index = 0;
    node!: TimeNodeClassInstance;
    onTimeVersionChange: (v: number) => void;
    sliderBoxStyle: { height: string | number };
    constructor(props: UndoRedo['props']) {
        super(props);
        const that = this;
        this.onTimeVersionChange = function (this: { max: number }, v: number) {
            setTimeout(() => {
                that.node.throughTime(this.max - v);
                that.index++;
            });
        };
    }
    onPlayClick = () => {
        this.node.playTime(1, () => this.index++);
    }
    allTimeKey: Record<string, string>;
    async componentWillMount() {
        const root = this.node = TimeNodeClass.from({
            id: 'root',
            name: 'root',
            children: [
                { id: 'a', name: 'a' },
                { id: 'b', name: 'b' },
                { id: 'c', name: 'c' }
            ]
        });
        root.onSplitTime = () => {
            setTimeout(() => {
                const allTimeKey = this.node.allTimeKey;
                const allTimeKey2 = this.allTimeKey = {};
                const maxTimeVersion = this.node.maxTimeVersion;
                let height = (maxTimeVersion * 12) * 2;
                // if (height > 150) {
                //     height = 150;
                // }
                this.sliderBoxStyle = { height: height + 'px' };
                Object.keys(allTimeKey).forEach(k => {
                    const i = Number(k);
                    if (i < maxTimeVersion) {
                        allTimeKey2[maxTimeVersion - i - 1] = allTimeKey[k];
                    }
                });
                this.index++;
            });
        };
        await delay(200);
        root.name = 'a';
        await delay(200);
        root.name = 'ab';
        await delay(200);
        root.name = 'abc';
        await delay(200);
        root.name = 'abcd';
        await delay(200);
        root.removeChildAt(0);
        await delay(200);
        root.removeChildAt(0);
        await delay(200);
        root.removeChildAt(0);
        root.splitTime('新世界');
        root.commitTrans();
    }
    // componentWillReceiveProps(props: this['props']) {
    //     this.componentWillMount();
    // }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.index;
        const timeVersion = this.node.timeVersion;
        const maxTimeVersion = this.node.maxTimeVersion;

        return (
            <div EClass={clsMap.showBox}>
                <div>
                    <Antd.Button onClick={this.onPlayClick}>播放历史轨迹</Antd.Button>
                    <div style={{ float: 'right' }}>({timeVersion}/{maxTimeVersion})</div>
                </div>
                <div EClass={clsMap.sliderBox} style={this.sliderBoxStyle}>
                    <Antd.Slider
                        vertical={true}
                        min={0}
                        max={maxTimeVersion}
                        value={maxTimeVersion - timeVersion}
                        onChange={this.onTimeVersionChange}
                        marks={this.allTimeKey}
                        tipFormatter={null}
                    />
                </div>
                <Tree
                    showLine={true}
                    defaultExpandAll={true}
                    EClass={clsMap.tree}
                >
                    {this.getTreeNode(this.node)}
                </Tree>
            </div>
        );

    }
    private getTreeNode(node: TimeNodeClassInstance) {
        return (
            <TreeNode title={node.name} key={node.id}>
                {(node.children.map(n => <TreeNode title={n.name} key={n.id} />))}
            </TreeNode>
        );
    }

}
