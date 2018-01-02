import React from 'react-ex';
import BaseApp from '../BaseApp';
class App extends BaseApp {

    noContent= false;
    noFooter= false;
    constructor(props: App['props']) {
        super( props);
    }
    renderContent() { return (<div>我，功夫茶猫</div>); }
}
export default App;