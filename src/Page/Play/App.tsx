import BaseApp from '../BaseApp';
import React from 'react-ex';
import Content from './Content';

export default class App extends BaseApp {

    noContent = false;
    noFooter = false;
    renderContent() {
        return (<Content />);
    }
}