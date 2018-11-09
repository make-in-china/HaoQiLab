import React from 'react-ex';
import BaseApp from '../BaseApp';
// import Test from 'src/Page/Donations/Test';
// import { Antd } from 'antd-more';
import Test2 from 'src/Page/Donations/Test2';
// const Menu = Antd.Menu;
// const Icon = Antd.Icon;
export default class App extends BaseApp {
    // region static
    static content = (
        <div>
            <div className="">别打钱了，这是github地址：<a href="https://github.com/make-in-china/HaoQiLab" target="_blank">https://github.com/make-in-china/HaoQiLab</a>，下载了玩玩吧！记得加星哦</div>
            <Test2><div>11234</div><div>11234</div></Test2>
            {/* <Test /> */}
        
        </div>
    );
    // endregion
    noContent = false;
    noFooter = false;
    constructor(props: App['props']) {
        super(props);
    }
    renderContent() { return App.content; }
}