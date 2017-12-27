import BaseApp from '../BaseApp';
import React from 'react-ex';
import Diffusion from './Component/Diffusion';
export default class App extends BaseApp {

    noContent = false;
    noFooter = false;

    renderContent() {
        return (
            <div EClass="scrollx">
                <div>无聊写的小算法，把○○（2个小于等于5的数）扩散开去，不允许连续</div>
                <Diffusion source={Diffusion.makeArrByTemplate('___00000000000000000_0_0__0_0_0_0___')} splitNumber={5} />
                <Diffusion
                    source={Diffusion.makeArrByTemplate('__00__00__0____0__0__0_0_000__00000000000_0___0_0__0______00_00___')}
                    splitNumber={5}
                />
            </div>);
    }
}