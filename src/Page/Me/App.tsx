import React from 'react-ex';
import BaseApp from '../BaseApp';
class App extends BaseApp {
    // region static
    static content = (
        <div>我，功夫茶猫</div>
    );
    // endregion
    noContent= false;
    noFooter= false;
    constructor(props: App['props']) {
        super( props);
    }
    renderContent() { return App.content; }
}
export default App;