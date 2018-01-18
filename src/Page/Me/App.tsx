import React from 'react-ex';
import BaseApp from '../BaseApp';
import Content from './Content';
class App extends BaseApp {

    noContent= false;
    noFooter= false;
    constructor(props: App['props']) {
        super( props);
    }
    renderContent() { return (<Content/>); }
}
export default App;