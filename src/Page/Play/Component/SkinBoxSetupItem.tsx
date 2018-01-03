import React from 'react-ex';
import Antd from 'antd-more';
import { observer, observable } from 'mobx-index';
@observer
export default class SkinBoxSetupItem
    extends React.Component<
    {
        source: Record<string, boolean>
        title: string
        onChangeCheck: () => void
    }> {
    @observable private renderRandom = Math.random();
    onChange: Antd.Checkbox['props']['onChange'] = (e) => {
        this.props.source[this.props.title] = e.target.checked;
        this.props.onChangeCheck();
        this.renderRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        return (
            <div>
                <span><Antd.Checkbox onChange={this.onChange} checked={this.props.source[this.props.title]}>{this.props.title}</Antd.Checkbox></span>
                {this.props.children}
            </div>
        );
    }
}
