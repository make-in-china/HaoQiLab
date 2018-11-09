import React, { _ } from 'react-ex';
import Antd from 'antd-min';
import { observer, observable } from 'mobx-index';
import StringSelect from 'src/Components/StringSelect';
import { toList } from 'src/Lib/NamesAndMapAndList';
import { eClassConfig } from 'src/CSS/G.Class';
const innerType = {
    A: '边框div',
    B: '文字hello',
    AB: '边框+文字'
};
const { config, clsMap } = eClassConfig({
    inner: [_`ladip minwem-2 minhem-2 rdip-5 inline`]
});
@React.eclass(config)

@observer
export default class SkinTargets
    extends React.Component<
    {
        max: number
        count: number
    }> {
    @observable hasInnerTarget: boolean = true;
    @observable count: number = this.props.count;
    @observable type: string = 'div';
    @observable innerType: string = innerType.AB;
    @observable className?: string = this.props.className;
    onChangeCount: (value: number | string | undefined) => void = (v: number) => {
        this.count = v;
    }
    onChangeInner: (checked: boolean) => any = (v) => {
        this.hasInnerTarget = v;
    }
    onChangeInnerType: StringSelect['props']['onChange'] = (v) => {
        this.innerType = v;
    }
    onChangeType: StringSelect['props']['onChange'] = (v) => {
        this.type = v;
    }
    componentWillUpdate(props: this['props']) {
        this.className = props.className;
    }
    render() {
        let data: React.ReactNode[] = [];
        for (var i = 0; i < this.count; i++) {
            let inner: any = null;
            if (this.hasInnerTarget) {
                switch (this.innerType) {
                    case innerType.A:
                        inner = <div EClass={clsMap.inner} />;
                        break;
                    case innerType.B:
                        inner = 'hello';
                        break;
                    case innerType.AB:
                        inner = <div EClass={clsMap.inner}>hello</div>;
                        break;
                    default:
                }

            }
            data.push((React.createElement(this.type, { class: this.className }, inner)));
        }
        return [
            (
                <div EClass="pdip-chd-3 inline-chd">
                    <div>演示目标：<StringSelect data={['div', 'span']} defaultValue={this.type} onChange={this.onChangeType} /></div>
                    <div>数量：<Antd.InputNumber EClass="wem-3" size="small" min={1} max={this.props.max} defaultValue={this.props.count} onChange={this.onChangeCount} /></div>
                    <div><Antd.Switch onChange={this.onChangeInner} checkedChildren={[(<Antd.Icon type="check" />), '填充']} unCheckedChildren={[(<Antd.Icon type="cross" />), '填充']} defaultChecked={this.hasInnerTarget} /></div>
                    <div><StringSelect defaultValue={this.innerType} data={toList<string, Record<string, string>>(innerType).list} onChange={this.onChangeInnerType} /></div>
                </div>
            )
            , data
        ];
    }

}