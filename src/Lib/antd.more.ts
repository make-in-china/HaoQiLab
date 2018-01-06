
import * as _Antd from 'antd';
export const Antd = _Antd;
export default _Antd;
if (Antd === undefined) {
    alert('未导入任何Antd组件');
} else if (Antd.Affix === undefined) {
    alert('未导入Antd.Base');
} else if (Antd.Switch === undefined) {
    alert('未导入Antd.Ex，请在Page/Pages.json里配置第4个参数为true，然后重启或重新构建');
}