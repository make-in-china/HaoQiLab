import React from 'react-ex';

import Diffusion from './Component/Diffusion';
import MultipleColumnsContainer from 'src/Components/MultipleColumnsContainer';
import CircularText from 'src/Components/CircularText';
import BurrowBox from './Component/BurrowBox';
import Animation from '../../Components/Animation';
import Antd from 'antd-more';
import { observer , observable } from 'mobx-index';
import Logo from 'src/Template/Default/Logo';
import SkinBox from 'src/Page/Play/Component/SkinBox';
import SketchPicker from 'src/Components/SketchPicker';
const RadioGroup = Antd.Radio.Group;
const RadioButton = Antd.Radio.Button;
@React.eclass({
    rate: [['f-5-skyblue'], { ' .ant-rate-star': [['mdipr-2']] }]
})
@observer
export default class App extends React.Component {
    @observable cols = 2;
    @observable permissibleHeightGaps = 250;
    timeID: number;
    onChange: Antd.Rate['props']['onChange'] = (value) => {
        this.cols = value;
    }

    onRadioGroupChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.permissibleHeightGaps = e.target.value as any;
    }
    render() {
        return (
            <div>
                <div EClass="uof floatr-chd mdipr-chd-15">
                    <div EClass="pdipt-7">高度容差：<RadioGroup onChange={this.onRadioGroupChange} defaultValue={this.permissibleHeightGaps} size="small">
                        <RadioButton value={60}>60</RadioButton>
                        <RadioButton value={120}>120</RadioButton>
                        <RadioButton value={250}>250</RadioButton>
                        <RadioButton value={400}>400</RadioButton>
                        <RadioButton value={600}>600</RadioButton>
                    </RadioGroup></div>
                    <div>显示列数：<Antd.Rate EClass="rate" count={4} value={this.cols} character={<Antd.Icon type="database" />} onChange={this.onChange} />{this.cols}列</div>
                </div>
                <MultipleColumnsContainer
                    cols={this.cols}
                    permissibleHeightGaps={this.permissibleHeightGaps}
                    datas={[
                        (
                            <BurrowBox title="取色器">
                                <SketchPicker/>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="样式设计器">
                                <SkinBox/>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="逆序文字">
                                <div EClass="pdip-10">
                                    普通显示：‮文字你肿么了
                                <br />
                                    svg显示：<CircularText fill="#555">
                                        <Animation
                                            splitCount={7}
                                            data={function (index: number) {
                                                var text = '‮文字你肿么了';
                                                return text.substr(0, index);
                                            }}
                                        />

                                    </CircularText>
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="Logo组件" >
                                default theme的Logo
                                <Logo fill="#555"/>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="扩散算法">
                                <div EClass="scrollx">
                                    <div>无聊写的小算法，把○○（2个小于等于5的数）扩散开去，不允许连续</div>
                                    <Diffusion source={Diffusion.makeArrByTemplate('___00000000000000000_0_0__0_0_0_0___')} splitNumber={5} />
                                    <Diffusion
                                        source={Diffusion.makeArrByTemplate('__00__00__0____0__0__0_0_000__00000000000_0___0_0__0______00_00___')}
                                        splitNumber={5}
                                    />
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="广告位5，虚席以待">
                                <div EClass="hem-15">
                                    长短不一的广告
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="广告位6，虚席以待" />
                        ), (
                            <BurrowBox title="广告位7，虚席以待" />
                        ), (
                            <BurrowBox title="广告位8，虚席以待">
                                <div EClass="hem-25">
                                    长短不一的广告
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="广告位9，虚席以待" />
                        ), (
                            <BurrowBox title="广告位10，虚席以待">
                                <div EClass="hem-35">
                                    长短不一的广告
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox title="广告位11，虚席以待" />
                        ), (
                            <BurrowBox title="广告位12，虚席以待" />
                        ), (
                            <BurrowBox title="广告位13，虚席以待" />
                        ), (
                            <BurrowBox title="广告位14，虚席以待" />
                        )
                    ]}
                />
            </div>
        );
    }
}