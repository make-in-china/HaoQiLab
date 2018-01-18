import React from 'react-ex';
import { observer , observable } from 'mobx-index';
import { ReactNode } from 'react';
@observer
export default class ContentList
    extends React.Component<{
        onDidUpdate: (cc: ContentList) => void
        onDidMount: (cc: ContentList) => void
    }> {
    elements: ReactNode[] = [];
    @observable renderRandom = Math.random();

    add(item: ReactNode) {
        this.elements.push(item);
        this.renderRandom = Math.random();
    }
    clear() {
        this.elements = [];
        this.renderRandom = Math.random();
    }
    componentDidUpdate() {
        this.props.onDidUpdate(this);
    }
    componentDidMount() {
        this.props.onDidMount(this);
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        return this.elements;
    }
}
