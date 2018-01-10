
import * as _Antd from 'antd';
export const Antd = _Antd;
export default {
    Affix: _Antd.Affix,
    BackTop: _Antd.BackTop,
    Breadcrumb: _Antd.Breadcrumb,
    Dropdown: _Antd.Dropdown,
    Icon: _Antd.Icon,
    Layout: _Antd.Layout,
    Menu: _Antd.Menu,
    Spin: _Antd.Spin,
    Tabs: _Antd.Tabs,
    Button: _Antd.Button,
    Tooltip: _Antd.Tooltip,
    Checkbox: _Antd.Checkbox,
    InputNumber: _Antd.InputNumber,
    Switch: _Antd.Switch,
    Slider : _Antd.Slider
};
if (Antd === undefined) {
    alert('未导入任何Antd组件');
} else if (Antd.Affix === undefined) {
    alert('未导入Antd.Base');
}