import React from 'react-ex';
import Antd from 'antd-min';
import { observer, observable } from 'mobx-index';
import { SliderValue } from 'antd/es/slider';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    width: ['wem-5 pdip-0 hem-0'.split(' ')]
});
@React.eclass(config)

@observer
export default class StepSlider
    extends React.Component<
    {
        min: number
        max: number
        step: number
        ratio?: number
        defaultValue: number
        onChange: (value: number) => void
    }> {
    @observable randerRandom = Math.random();
    ratio: number = this.props.ratio !== undefined ? this.props.ratio : 1;
    index = 0;
    min: number;
    max: number;
    stepArea: number;
    value: number;
    onChange: (value: SliderValue) => void = (value: number) => {
        this.value = value;
        this.props.onChange(this.min + this.value);
        this.randerRandom = Math.random();
    }
    onChange2: (value: SliderValue) => void = (value: number) => {
        this.min = this.stepArea * value;
        this.max = this.stepArea * (value + 1);
        this.index = value;
        this.props.onChange(this.min + this.value);
        this.randerRandom = Math.random();
    }
    componentWillMount() {
        this.init(this.props);
    }
    init(props: this['props']) {

        this.stepArea = props.max / props.step;
        const index = Math.floor(props.defaultValue / this.stepArea);
        this.value = props.defaultValue - this.index * this.stepArea;

        this.min = this.stepArea * index;
        this.max = this.stepArea * (index + 1);
        this.index = index;
    }
    componentWillReceiveProps(props: this['props']) {
        this.init(props);
        this.randerRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.randerRandom;
        return (
            <div className={this.props.className} EClass="inline inline-chd">
                <div EClass="pdipr-10 minwem-3">{(this.min + this.value) * this.ratio}</div>
                <Antd.Slider tipFormatter={null} EClass={clsMap.width} key="a" defaultValue={this.value} min={1} max={this.stepArea} onChange={this.onChange} />
                {
                    this.props.step !== 1 && 
                    <Antd.Slider tipFormatter={null} EClass={clsMap.width} key="b" defaultValue={this.index} min={0} max={this.props.step - 1} onChange={this.onChange2} />
                }
            </div>
        );
    }

}