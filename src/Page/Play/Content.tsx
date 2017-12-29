import React from 'react-ex';

import Diffusion from './Component/Diffusion';
import MultipleColumnsContainer from 'src/Components/MultipleColumnsContainer';
import CircularText from 'src/Components/CircularText';
import BurrowBox from './Component/BurrowBox';
import Animation from '../../Components/Animation';
export default class App extends React.Component {

    render() {
        return (
            <MultipleColumnsContainer
                cols={3}
                datas={[
                    (
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
                        <BurrowBox title="广告位3，虚席以待" />
                    ), (
                        <BurrowBox title="广告位4，虚席以待" />
                    ), (
                        <BurrowBox title="广告位5，虚席以待" />
                    ), (
                        <BurrowBox title="广告位6，虚席以待" />
                    ), (
                        <BurrowBox title="广告位7，虚席以待" />
                    ), (
                        <BurrowBox title="广告位8，虚席以待" />
                    ), (
                        <BurrowBox title="广告位9，虚席以待" />
                    ), (
                        <BurrowBox title="广告位10，虚席以待" />
                    ), (
                        <BurrowBox title="广告位11，虚席以待" />
                    ), (
                        <BurrowBox title="广告位12，虚席以待" />
                    )
                ]}
            />
        );
    }
}