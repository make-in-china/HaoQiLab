import React from 'react-ex';
import BaseApp from '../BaseApp';
import Content from '../Document/Content';
export default class App extends BaseApp {
    noContent = false;
    noFooter = false;
    renderContent() {
        return (
            <Content
                page={this}
                menuTitle="小组件列表"
                info={{
                    'SketchPicker 取色面板': `Page/${this.props.name}/Content/SketchPickerPage`,
                    'Button 可调按钮': `Page/${this.props.name}/Content/ButtonPage`
                }}
            />
        );
    }
}