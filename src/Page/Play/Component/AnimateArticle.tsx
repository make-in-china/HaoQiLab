
import React, { css } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { TimeNodeClass, TimeNodeClassInstance } from 'src/Data/TimeNode/TimeNode';

import { delay } from 'src/Data/TimeNode/Lib';
import { Antd } from 'antd-more';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    showBox: css`height:300px;overflow:auto;`,
    pre: css`white-space: pre-wrap;word-wrap: break-word;`,
    small: css`font-size:12px;color:#888;height:3em;`
});
@React.eclass(config)
@observer
export default class AnimateArticle
    extends React.Component<{}> {
    @observable index = 0;
    node!: TimeNodeClassInstance;

    private done = false;
    onTimeVersionChange: (v: number) => void;
    constructor(props: AnimateArticle['props']) {
        super(props);
        const that = this;
        this.onTimeVersionChange = function (this: { max: number }, v: number) {
            that.node.throughTime(this.max - v);
            that.index++;
        };
    }
    onPlayBack = () => {
        this.node.playTimeReverse();
    }
    onPlayAgain = () => {
        this.node.playTime();
    }
    onTimeChange = (v: number) => {
        this.node.throughTime(v);
    }
    async componentWillMount() {
        this.done = false;
        const root = this.node = new TimeNodeClass('article', 'article');

        root.descript = '';
        root.onThroughTime = root.onSplitTime = () => {
            setTimeout(() => {
                this.index++;
            });
        };
        for (let i = 0; i < article.length; i++) {
            await delay(60);
            root.descript += article[i];
        }
        // 记录当前版本
        let version = root.timeVersion;

        for (let i = 0; i < wrongWord.length; i++) {
            await delay(60);
            root.descript += wrongWord[i];
        }
        await delay(60);
        // 回退到之前记录的版本
        await root.playTimeFor(root.timeVersion - 1, version, 4);
        await delay(60);

        // 继续加新版本(不会删除任何错开的版本)
        for (let i = 0; i < article2.length; i++) {
            await delay(60);
            root.descript += article2[i];
        }
        root.splitTime();
        root.commitTrans();
        this.done = true;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.index;

        return (
            <div EClass={clsMap.showBox}>
                {[
                    (<Antd.Button size="small" onClick={this.onPlayBack}>逆序播放</Antd.Button>),
                    ' ',
                    (<Antd.Button size="small" onClick={this.onPlayAgain}>正序播放</Antd.Button>),
                    ' 版本:',
                    (<Antd.InputNumber size="small" width={60} value={this.node.timeVersion} onChange={this.onTimeChange} />)
                ]}
                <pre EClass={[clsMap.pre, clsMap.small]}>{this.done ? '（因为删除文字并没有真的删除文字，而是回退到历史时刻，所以，点击播放的时候，不会重现“删除文字”的动作，而是会直接切换到了新的时刻）' : ''}</pre>
                <pre EClass={clsMap.pre}>{this.node.descript ? this.node.descript : ''}</pre>
            </div>
        );
    }
}
const wrongWord = `…&#%￥*^%!@!##`;
const article = `>
    这里演示一个时空版本自动打字机，你可以看到这里的字一个个的打出来。
    初看之下，貌似与那些setTimeout的自动打字机没什么区别，但展示的东西却是完全不一样的。
    比如我这里打错字了，然后我删掉几个字(注意看删的时候的版本变化)。
    `;
const article2 = `
    好了，刚才输错的字都删了。`;
