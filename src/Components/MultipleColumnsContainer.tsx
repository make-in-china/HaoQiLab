import React from 'react-ex';
import ContentList from './ContentList';
import { ReactNode } from 'react';
export default class MultipleColumnsContainer
    extends React.Component<{
        datas: ReactNode[]
        cols?: number
        permissibleHeightGaps?: number
    }> {
    cols: number;
    containers: ContentList[];
    index: number;
    permissibleHeightGaps: number;
    componentWillReceiveProps(props: this['props']) {
        this.cols = (props.cols && props.cols > props.datas.length ? props.datas.length : props.cols) || 2;
        this.permissibleHeightGaps = props.permissibleHeightGaps !== undefined ? props.permissibleHeightGaps : 0;
        if (this.containers) {
            this.containers.forEach(item => item.clear());
        }
        this.containers = [];
        this.index = -1;

    }
    componentWillMount() {
        this.componentWillReceiveProps(this.props);
    }
    componentDidMount() {
        this.pushElements();
    }
    render() {
        let ccs: JSX.Element[] = [];
        for (let i = 0; i < this.cols; i++) {
            ccs.push(
                <div ref={String(i)} style={{ width: 100 / this.cols + '%', verticalAlign: 'top' }} EClass="inline pdiplr-8">
                    <ContentList onDidMount={this.onColumnContainerDidMount} onDidUpdate={this.onColumnContainerDidUpdate} />
                </div>
            );
        }
        return ccs;
    }

    private onColumnContainerDidMount = (cc: ContentList) => {
        this.onColumnContainerDidUpdate(cc);
    }
    private onColumnContainerDidUpdate = (cc: ContentList) => {
        // if (this.containers.indexOf(cc) === -1) {
        //     this.containers.push(cc);
        // }
        if (this.containers.length < this.cols) {
            this.containers.push(cc);
        }
        if (this.containers.length === this.cols) {
            window.setTimeout(() => this.pushElements(), 10);
        }
    }
    private getMinHeightColumnContainer(): ContentList | undefined {
        let minHeight = 0x7f000000;
        let minIndex = -1;
        this.containers.forEach((item, index) => {
            const elem = (this.refs[String(index)] as HTMLElement | undefined);
            if (!elem) {
                return ;
            }
            const scrollHeight = elem.scrollHeight;
            if (scrollHeight < minHeight - this.permissibleHeightGaps) {
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
        if (minHeightCC!==undefined) {
            this.index++;
            const data = this.props.datas[this.index];
            minHeightCC.add(data);
        }
    }
}
