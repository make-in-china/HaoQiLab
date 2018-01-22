
import React from 'react-ex';
import Antd from 'antd-min';
import entry from '../Entry';
@entry('Spin')
export default class Spin extends React.Component {
    render() {
        return [
            '后面的不仿了，演示下动态加载',
            (
                <Antd.Spin
                    size="large"
                    indicator={<Antd.Icon type="loading" style={{ fontSize: 24 }} spin={undefined} />}
                    tip="读取皮肤..."
                />
            )];
    }
}