
import * as Antd from 'antd';

export default {
    Affix : Antd.Affix,
    BackTop : Antd.BackTop,
    Breadcrumb : Antd.Breadcrumb,
    Dropdown : Antd.Dropdown,
    Icon : Antd.Icon,
    Layout : Antd.Layout,
    Menu : Antd.Menu,
    Spin : Antd.Spin,
    Tabs : Antd.Tabs
};
if (Antd === undefined) {
    alert('未导入任何Antd组件');
} else if (Antd.Affix === undefined) {
    alert('未导入Antd.Base');
}