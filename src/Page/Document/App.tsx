import React from 'react-ex';
import BaseApp from '../BaseApp';
import Content from './Content';
import './index.css';
class App extends BaseApp {
    noContent= false;
    noFooter= false;
    renderContent() {
        return (
            <Content
                page={this}
                menuTitle="控件文档"
                info={
                    {
                        'Button 按钮': `Page/${this.props.name}/Content/Button`,
                        'Gird 栅格': `Page/${this.props.name}/Content/Grid`,
                        'Layout 布局': `Page/${this.props.name}/Content/Layout`,
                        'Affix 固钉': `Page/${this.props.name}/Content/Affix`,
                        'Breadcrumb 面包屑': `Page/${this.props.name}/Content/Breadcrumb`,
                        'Dropdown 下拉菜单': `Page/${this.props.name}/Content/Dropdown`,
                        'Menu 导航菜单': `Page/${this.props.name}/Content/Menu`,
                        'Pagination 分页': `Page/${this.props.name}/Content/Pagination`,
                        'Table 表格': `Page/${this.props.name}/Content/Table`,
                        'ToolTip 提示文字': `Page/${this.props.name}/Content/ToolTip`,
                        'Popconfirm 气泡确认框': `Page/${this.props.name}/Content/Popconfirm`,
                        'Spin 加载中': `Page/${this.props.name}/Content/Spin`,
                        'BackTop 回到顶部': `Page/${this.props.name}/Content/BackTop`
                    }} 
            />
        );
    }
}
export default App;