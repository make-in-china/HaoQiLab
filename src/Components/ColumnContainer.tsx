import React from 'react-ex';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
@observer
export default class ColumnContainer
    extends React.Component<{
        onDidMount: (cc: ColumnContainer) => void
        onDidUpdate: (cc: ColumnContainer) => void
        width: number
    }> {
    elements: JSX.Element[] = [];
    elem: HTMLDivElement;
    @observable renderRandom = Math.random();

    add(item: JSX.Element) {
        this.elements.push(item);
        this.renderRandom = Math.random();
    }
    componentDidMount() {
        this.props.onDidMount(this);
    }
    componentDidUpdate() {
        this.props.onDidUpdate(this);
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;

        return (
            <div style={{ width: this.props.width + '%', verticalAlign: 'top' }} ref={this.onRef} /* className="ant-col-12 code-boxes-col-2-1" */ EClass="inline pdiplr-8">
                {this.elements}
            </div>
        );
    }
    private onRef = (elem: HTMLDivElement) => {
        if (elem === null) {
            return;
        }
        this.elem = elem;
    }
}
