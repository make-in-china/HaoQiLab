import React from 'react-ex';
import Antd from 'antd-more';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
@React.eclass({
    box: ['pdip-5 rdip-5 mdipt-10 ladip uof bd-12-gray minhem-15'.split(' ')],
    boxbig: ['box abs zidx-2 shadowless2 left-15 right-15'.split(' ')],
    title: ['lbdip-dashed pdip-3 mdip-2 mdipb-5 uof'.split(' ')],
    content: ['pdip-3 mdip-2 mdipt-5 uof'.split(' ')]
})
@observer
export default class App extends React.Component<{ title?: string, style?: { backgroundColor?: string } }> {
    @observable max = false;
    @observable content = this.props.children;
    backgroundColor = (this.props.style && this.props.style.backgroundColor) || '#ffffff';
    onRefresh: React.FormEventHandler<Antd.Button> = () => {
        this.content = this.props.children; // React.cloneReactNode(this.props.children);
    }
    onChange: React.FormEventHandler<Antd.Button> = () => {
        this.max = !this.max;
    }
    render() {
        return (
            <div style={{ backgroundColor: this.backgroundColor }} EClass={this.max ? 'boxbig' : 'box'}>
                <div EClass="title" >
                    {this.props.title}
                    {this.max ? (
                        <Antd.Button size="small" shape="circle" icon="shrink" EClass="floatr" onClick={this.onChange} />
                    ) : (
                            <Antd.Button size="small" shape="circle" icon="arrows-alt" EClass="floatr" onClick={this.onChange} />
                        )}
                    <Antd.Button size="small" shape="circle" icon="retweet" EClass="floatr mdipr-3" onClick={this.onRefresh} />
                </div>
                <div EClass="content">{this.content}</div>
            </div>
        );
    }
}