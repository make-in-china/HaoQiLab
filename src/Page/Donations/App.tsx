import React from 'react-ex';
import BaseApp from '../BaseApp';
export default class App extends BaseApp {
    // region static
    static content = (
        <div>别打钱了，这是github地址：<a href="https://github.com/make-in-china/HaoQiLab" target="_blank">https://github.com/make-in-china/HaoQiLab</a>，下载了玩玩吧！记得加星哦</div>
    );
    // endregion
    noContent= false;
    noFooter= false;
    constructor(props: App['props']) {
        super( props);
    }
    renderContent() { return App.content; }
}