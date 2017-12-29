import React from 'react-ex';
import ColumnContainer from './ColumnContainer';
export default class MultipleColumnsContainer
    extends React.Component<{
        datas: JSX.Element[]
        cols?: number
    }> {
    cols = (this.props.cols && this.props.cols > this.props.datas.length ? this.props.datas.length : this.props.cols) || 2;
    containers: ColumnContainer[] = [];
    index: number = -1;

    onRef = (elem: HTMLElement | null) => {
        if (elem === null) {
            return;
        }
        this.pushElements();
    }

    render() {
        let ccs: JSX.Element[] = [];
        for (let i = 0; i < this.cols; i++) {
            ccs.push(<ColumnContainer width={100 / this.cols} onDidMount={this.onColumnContainerDidMount} onDidUpdate={this.onColumnContainerDidUpdate} />);
        }
        return ccs;
    }
    private onColumnContainerDidMount = (cc: ColumnContainer) => {
        this.containers.push(cc);
        if (this.containers.length === this.cols) {
            this.pushElements();
        }
    }
    private onColumnContainerDidUpdate = (cc: ColumnContainer) => {
        this.pushElements();
    }
    private getMinHeightColumnContainer() {
        let minHeight = 0x7fffffff;
        let minIndex = -1;
        this.containers.forEach((value, index) => {
            const scrollHeight = value.elem.scrollHeight;
            if (scrollHeight < minHeight) {
                minHeight = scrollHeight;
                minIndex = index;
            }
        });
        return this.containers[minIndex];
    }
    private pushElements() {
        if (this.index === this.props.datas.length - 1) {
            return;
        }
        const minHeightCC = this.getMinHeightColumnContainer();
        this.index++;
        const data = this.props.datas[this.index];
        minHeightCC.add(data);
    }
}
