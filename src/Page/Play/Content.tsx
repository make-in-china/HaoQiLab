import React, { css } from 'react-ex';

import Diffusion from './Component/Diffusion';
import MultipleColumnsContainer from 'src/Components/MultipleColumnsContainer';
import CircularText from 'src/Components/CircularText';
import BurrowBox from './Component/BurrowBox';
import Animation from '../../Components/Animation';
import Antd from 'antd-more';
import { observer, observable } from 'mobx-index';
import BindFunctionList from 'src/Page/Play/Component/BindFunctionList';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import UndoRedo from './Component/UndoRedo';
import G2048 from './Component/Game/2048RPG/App';
import AnimateArticle from './Component/AnimateArticle';
import { eClassConfig } from 'src/CSS/G.Class';
const RadioGroup = Antd.Radio.Group;
const RadioButton = Antd.Radio.Button;
const { config, clsMap } = eClassConfig({
    rate: [['f-5-skyblue'], { ' .ant-rate-star': [['mdipr-2']] }],
    borderDashRepeat: css`
        border-image-source: url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==");
        border-width: 1px;
        border-style: solid;
        border-image-slice: 1;
        border-image-repeat: repeat;
    `
});
@React.eclass(config)
@observer
export default class App extends React.Component {
    @observable cols = 1;
    @observable permissibleHeightGaps = 60;
    timeID: number;
    onChange: Antd.Rate['props']['onChange'] = (value) => {
        this.cols = value;
    }

    onRadioGroupChange = (e: RadioChangeEvent) => {
        this.permissibleHeightGaps = e.target.value;
    }
    onPlayAll = () => {
        this.burrowBoxList.forEach(m => {
            m.play();
        });
    }
    burrowBoxList: BurrowBox[] = [];
    onBurrowBoxRef = (inst: BurrowBox) => {
        this.burrowBoxList.push(inst);
    }
    render() {
        const bbconf = { ref: this.onBurrowBoxRef };
        return (
            <div>
                <div EClass={[clsMap.borderDashRepeat, clsMap.inline, clsMap.op + '-5']}>这个页面下的显示都是渲染结果，查看数据源请翻看源码。源码下载请访问右上角</div>
                <div EClass="uof floatr-chd mdipr-chd-15">
                    <div EClass="pdipt-7">
                        高度容差：
                        <RadioGroup onChange={this.onRadioGroupChange} defaultValue={this.permissibleHeightGaps} size="small">
                            <RadioButton value={60}>60</RadioButton>
                            <RadioButton value={120}>120</RadioButton>
                            <RadioButton value={250}>250</RadioButton>
                            <RadioButton value={400}>400</RadioButton>
                            <RadioButton value={600}>600</RadioButton>
                        </RadioGroup>
                    </div>
                    <div className={clsMap.clr_primary}>显示列数：<Antd.Rate EClass={clsMap.rate} count={4} value={this.cols} character={<Antd.Icon type="database" />} onChange={this.onChange} />{this.cols}列</div>
                    <div EClass="pdipt-7">
                        <Antd.Button size="small" onClick={this.onPlayAll}>全部播放/刷新</Antd.Button>
                    </div>
                </div>
                <MultipleColumnsContainer
                    cols={this.cols}
                    permissibleHeightGaps={this.permissibleHeightGaps}
                    datas={[
                        (
                            <BurrowBox {...bbconf} title="2048小游戏" >
                                <G2048 />
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="撤销重做" >
                                <UndoRedo />
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="时空版自动打字机" >
                                <AnimateArticle />
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="逆序文字">
                                <div EClass="pdip-10">
                                    普通显示：‮文字你肿么了
                                    <br />
                                    svg显示：
                                    <CircularText fill="#555">
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
                            <BurrowBox {...bbconf} title="扩散算法">
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
                            <BurrowBox {...bbconf} title="函数合并测试">
                                <BindFunctionList />
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="广告位7，虚席以待" />
                        ), (
                            <BurrowBox {...bbconf} title="广告位8，虚席以待">
                                <div EClass="hem-25">
                                    长短不一的广告
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="广告位9，虚席以待" />
                        ), (
                            <BurrowBox {...bbconf} title="广告位10，虚席以待">
                                <div EClass="hem-35">
                                    长短不一的广告
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="广告位11，虚席以待">
                                <div EClass="hem-15">
                                    长短不一的广告
                                </div>
                                <div EClass="hem-15">
                                    长短不一的广告
                                </div>
                            </BurrowBox>
                        ), (
                            <BurrowBox {...bbconf} title="广告位12，虚席以待" />
                        ), (
                            <BurrowBox {...bbconf} title="广告位13，虚席以待" />
                        ), (
                            <BurrowBox {...bbconf} title="广告位14，虚席以待" />
                        )
                    ]}
                />
            </div>
        );
    }
}