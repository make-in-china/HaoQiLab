import React from 'react-ex';
import BaseApp from '../BaseApp';
import Content from '../Document/Content';
class App extends BaseApp {
    noContent= false;
    noFooter= false;
    renderContent() {
        return (
            <Content
                page={this}
                menuTitle="实验列表"
                info={
                    {
                        'EClass 类增强': `Page/${this.props.name}/Content/EClass`
                    }} 
            />
        );
    }
}
export default App;