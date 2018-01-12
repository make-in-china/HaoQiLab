
import React from 'react-ex';
import Antd from 'antd-min';
import entry from '../Entry';
@entry
export default class Spin extends React.Component {
    render() {
        return (
            <Antd.Spin
                size="large"
                indicator={<Antd.Icon type="loading" style={{ fontSize: 24 }} spin={undefined} />}
                tip="读取皮肤..." 
            />
        );
    }
}