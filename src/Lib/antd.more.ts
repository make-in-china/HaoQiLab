
import * as Antd from 'antd';

export default Antd;
if (Antd === undefined) {
    alert('未导入任何Antd组件');
} else if (Antd.Affix === undefined) {
    alert('未导入Antd.Base');
} else if (Antd.Switch === undefined) {
    alert('未导入Antd.Ex');
}