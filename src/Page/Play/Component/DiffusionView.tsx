
import React from 'react-ex';
import { observer, } from 'mobx-react';
import { observable } from 'mobx';
@observer
export default class DiffusionView
    extends React.Component<
    {
        source: number[]
        sourceMap: string
        destList: string[]
        largeThenList: number[]
        lessThenAndEqualList: number[]
    }> {
    @observable index = 0;
    timerID: number;
    componentDidMount() {
        if (this.index < this.props.destList.length - 1) {
            this.timerID = window.setInterval(() => {
                if (this.index + 2 >= this.props.destList.length) {
                    window.clearInterval(this.timerID);
                }
                this.index++;
            }, 100);
        }
    }
    calcNumberDest(source: number[], dest: string) {
        let destArr: number[] = [];
        let largeThenList = this.props.largeThenList.slice();
        let lessThenAndEqualList = this.props.lessThenAndEqualList.slice();
        for (let i = 0; i < dest.length; i++) {
            if (dest[i] === '●') {
                destArr.push(largeThenList.shift()!);
            } else {
                destArr.push(lessThenAndEqualList.shift()!);
            }
        }
        return destArr;
    }
    componentWillReceiveProps(nextProps: this['props']) {
        window.clearInterval(this.timerID);
        this.index = 0;
        this.componentDidMount();
    }
    // componentWillUpdate() {
    //     this.index = 0;
    //     this.componentDidMount();
    // }
    render() {
        let sourceMap = this.props.sourceMap;

        let change = '';
        let persent = 0;
        let dest = this.props.destList[this.index];
        for (let i = 0; i < sourceMap.length; i++) {
            if (sourceMap[i] === dest[i]) {
                change += '　';
            } else {
                change += '◎';
                persent++;
            }
        }
        return (
            <div EClass="nowrap-chd">
                <div>结果：{JSON.stringify(this.calcNumberDest(this.props.source, dest))}</div>
                <div>原图：{sourceMap}</div>
                <div>变化：<span style={{ color: '#00cdee', margin: '-5px 0' }}>{change}</span></div>
                <div>修正：{dest}</div>
                <div>变异：{(persent / sourceMap.length * 100).toFixed(2)}%</div>
                <div>频度：{this.index}</div>
            </div>);
    }
}