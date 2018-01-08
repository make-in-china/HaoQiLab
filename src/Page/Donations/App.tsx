import React from 'react-ex';
import BaseApp from '../BaseApp';
export default class App extends BaseApp {
    // region static
    static content = (
        <div>github地址：<a href="https://github.com/make-in-china/HaoQiLab" target="_blank">https://github.com/make-in-china/HaoQiLab</a></div>
    );
    // endregion
    noContent= false;
    noFooter= false;
    constructor(props: App['props']) {
        super( props);
    }
    renderContent() { return App.content; }
}