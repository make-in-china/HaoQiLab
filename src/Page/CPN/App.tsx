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
                    '取色面板': `Page/${this.props.name}/Content/SketchPickerPage`,
                    '多列自分组竖向容器': `Page/${this.props.name}/Content/MultipleColumnsContainerPage`,
                    'Logo': `Page/${this.props.name}/Content/LogoPage`
                }}
            />
        );
    }
}