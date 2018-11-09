import React, { css } from 'react-ex';
import Antd from 'antd-min';
import { observer, observable } from 'mobx-index';
import { ClassRule } from 'src/CSS/G.Class';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    line: [
        'nowrap mdipt-5'.split(' '),
        {
            ' .&name': [css`text-align:right;`, 'mdipr-10 wem-5 inline'.split(' ')],
            '>input': ['wem-4 inline'.split(' ')]// 待抽离
        }
    ],

});
@React.eclass(config)

@observer
export default class SkinBoxSetupItem
    extends React.Component<
    {
        source: {
            [P in keyof ClassRule]?: boolean
        }
        keyName: keyof ClassRule
        title: string
        onChangeCheck: () => void
    }> {
    @observable private isCheck = this.props.source[this.props.keyName];
    onChange: (e: CheckboxChangeEvent) => void = (e) => {
        this.isCheck = this.props.source[this.props.keyName] = e.target.checked;
        this.props.onChangeCheck();
    }
    componentWillUpdate(props: this['props']) {
        this.isCheck = props.source[this.props.keyName];
    }
    render() {
        const isCheck = this.isCheck;
        return (
            <div EClass={(isCheck ? clsMap.line : [clsMap.line, 'op-5'])}>
                <Antd.Tooltip placement="left" title={this.props.keyName}>
                    <Antd.Checkbox onChange={this.onChange} checked={isCheck}>
                        <span EClass="name" >{this.props.title} : </span>
                    </Antd.Checkbox>
                    <div EClass={isCheck ? clsMap.line : [clsMap.line, clsMap.noevent]}>{this.props.children}</div>
                </Antd.Tooltip>
            </div>
        );
    }
}
