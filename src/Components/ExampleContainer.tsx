import React from 'react-ex';
import { observer , observable } from 'mobx-index';
import Antd from 'antd-more';
import Example from './Example';
const { Link } = Antd.Anchor;
@observer
export default class App
    extends React.Component
    <
    {
        examples: {
            view: JSX.Element,
            title: string,
            description: JSX.Element | string
        }[]
    }
    > {
    elemLeft: HTMLDivElement | null = null;
    elemRight: HTMLDivElement | null = null;
    examplesLeft: JSX.Element[] = [];
    examplesRight: JSX.Element[] = [];
    index: number = -1;
    @observable private renderCount = 0;
    // constructor(props: App['props']) {
    //     super(props);

    // }
    onRef = (elem: HTMLElement | null) => {
        if (elem === null) {
            return;
        }
        this.index++;
        if (this.index === this.props.examples.length) {
            return;
        }

        const data = this.props.examples[this.index];
        let examplesLeftOrRight;
        if (this.elemLeft!.scrollHeight <= this.elemRight!.scrollHeight) {
            examplesLeftOrRight = this.examplesLeft;
        } else {
            examplesLeftOrRight = this.examplesRight;
        }
        examplesLeftOrRight.push(<Example index={this.index} onRef={this.onRef} view={data.view} title={data.title} description={data.description} />);
        this.renderCount++;
    }
    onRefLeft = (elem: HTMLDivElement) => {
        if (elem === null) {
            return;
        }
        this.elemLeft = elem;
    }
    onRefRight = (elem: HTMLDivElement) => {
        if (elem === null) {
            return;
        }
        this.elemRight = elem;
        this.index++;
        const data = this.props.examples[this.index];
        this.examplesLeft.push(<Example index={this.index} onRef={this.onRef} view={data.view} title={data.title} description={data.description} />);
        this.renderCount++;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderCount;
        try {
            return (
                [
                    (
                        <div className="ant-row ant-col-21" style={{ marginLeft: '-8px', marginRight: '-8px' }}>
                            <div ref={this.onRefLeft} className="ant-col-12 code-boxes-col-2-1" style={{ paddingLeft: '8px', paddingRight: '8px', }}>
                                {this.examplesLeft}
                            </div>
                            <div ref={this.onRefRight} className="ant-col-12 code-boxes-col-2-1" style={{ paddingLeft: '8px', paddingRight: '8px', }}>
                                {this.examplesRight}
                            </div>
                        </div>
                    ),
                    (
                        <div className="ant-col-3" style={{ paddingLeft: 10, marginTop: -250 }}>
                            <Antd.Anchor>{this.props.examples.map((v, i) => (<Link href={'#Anchor' + i} title={v.title} />))}</Antd.Anchor>
                        </div>
                    )
                ]
            );
        } catch {
            debugger;
            return null;
        }

    }
}
