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
        source: Record<string, boolean | undefined>
        keyName: string
        title: string
        onChangeCheck: () => void
    }> {
    @observable private isCheck = this.props.source[this.props.keyName];
    onChange: Antd.Checkbox['props']['onChange'] = (e) => {
        this.isCheck = this.props.source[this.props.keyName] = e.target.checked;
        this.props.onChangeCheck();
    }
    componentWillUpdate(props: this['props']) {
        this.isCheck = props.source[this.props.keyName];
    }
    render() {
        const isCheck = this.isCheck;
        return (
            <div EClass={'line' + (isCheck ? '' : ' op-5')}>
                <Antd.Tooltip placement="left" title={this.props.keyName}>
                    <Antd.Checkbox onChange={this.onChange} checked={isCheck}>
                        <span EClass="name" >{this.props.title} : </span>
                    </Antd.Checkbox>
                </Antd.Tooltip>
                <div EClass={isCheck ? 'inline' : 'inline noevent'}>{this.props.children}</div>
            </div>
        );
    }
}
