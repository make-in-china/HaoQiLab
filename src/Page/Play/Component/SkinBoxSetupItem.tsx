import React from 'react-ex';
import Antd from 'antd-more';
import { observer, observable } from 'mobx-index';
@React.eclass({
    line: [
        'nowrap mdipt-5'.split(' '),
        {
            ' .&name': ['text-align:right;', 'mdipr-10 wem-5 inline'.split(' ')],
            '>input': ['wem-4 inline'.split(' ')]// 待抽离
        }
    ],
})
@observer
export default class SkinBoxSetupItem
    extends React.Component<
    {
        source: Record<string, boolean>
        keyName: string
        title: string
        onChangeCheck: () => void
    }> {
    @observable private renderRandom = Math.random();
    onChange: Antd.Checkbox['props']['onChange'] = (e) => {
        this.props.source[this.props.keyName] = e.target.checked;
        this.props.onChangeCheck();
        this.renderRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        return (
            <div EClass="line">
                <Antd.Tooltip placement="left" title={this.props.keyName}>
                    <Antd.Checkbox onChange={this.onChange} checked={this.props.source[this.props.keyName]}>
                        <span EClass="name" >{this.props.title} : </span>
                    </Antd.Checkbox>
                </Antd.Tooltip>
                {this.props.children}
            </div>
        );
    }
}
