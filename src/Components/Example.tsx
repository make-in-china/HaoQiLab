import React from 'react-ex';
export default class App extends React.Component
    <
    {
        view: JSX.Element,
        title: string,
        description: JSX.Element | string,
        onRef: (ele: HTMLElement) => void,
        index: number
    }, {}
    > {
    render() {
        return (
            <section id={'Anchor' + this.props.index} key={this.props.index} ref={this.props.onRef} className="code-box" data-scrollama-index="2">
                <section className="code-box-demo">
                    {this.props.view}
                </section>
                <section className="code-box-meta markdown">
                    <div className="code-box-title">
                        <a href={'#Anchor' + this.props.index}>{this.props.title}</a>
                    </div>
                    {this.props.description}
                    <span className="code-expand-icon">
                        <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" className="code-expand-icon-show" />
                        <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" className="code-expand-icon-hide" />
                    </span>
                </section>
            </section>
        );
    }
}