import React from 'react-ex';
import Antd from 'antd-more';
import { observer, observable } from 'mobx-index';
import StringSelect from 'src/Page/Play/Component/StringSelect';
@React.eclass({
    inner: ['ladip wem-2 hem-2'.split(' ')]
})
@observer
export default class SkinTargets
    extends React.Component<
    {
        max: number
        count: number
    }> {
    @observable hasInnerTarget: boolean = false;
    @observable count: number = this.props.count;
    @observable type: string = 'div';
    onChangeCount: Antd.InputNumber['props']['onChange'] = (v: number) => {
        this.count = v;
    }
    onChangeInner: Antd.Switch['props']['onChange'] = (v) => {
        this.hasInnerTarget = v;
    }
    onChangeType: StringSelect['props']['onChange'] = (v) => {
        this.type = v;
    }
    render() {
        let data: React.ReactNode[] = [];
        for (var i = 0; i < this.count; i++) {
            data.push((React.createElement(this.type, { class: this.props.className }, this.hasInnerTarget && <div EClass="inner" />)));
        }
        return [
            (
                <div EClass="pdip-chd-3 inline-chd">
                    <div>目标：<StringSelect data={['div', 'span']} defaultValue={this.type} onChange={this.onChangeType} /></div>
                    <div>数量：<Antd.InputNumber EClass="wem-3" size="small" min={1} max={this.props.max} defaultValue={this.props.count} onChange={this.onChangeCount} /></div>
                    <div>内容物：<Antd.Switch onChange={this.onChangeInner} checkedChildren={<Antd.Icon type="check" />} unCheckedChildren={<Antd.Icon type="cross" />} defaultChecked={this.hasInnerTarget} /></div>
                </div>
            )
            , data
        ];
    }

}