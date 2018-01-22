
import React from 'react-ex';
import Antd from 'antd-more';
const text = 'Are you sure delete this task?';

function confirm() {
    Antd.message.info('Click on Yes.');
}
import entry from '../Entry';
@entry('Popconfirm')
@React.eclass({
    that: [{
        '.tooltip-demo-placement a': 'display: inline-block;line-height: 32px;height: 32px;width: 60px;font-size: 14px;text-align: center;background: #f5f5f5;margin-right: 1em;margin-bottom: 1em;border-radius: 6px;',
        '.tooltip-demo-placement button': 'display: inline-block;line-height: 32px;height: 32px;width: 60px;font-size: 14px;text-align: center;background: #f5f5f5;margin-right: 1em;margin-bottom: 1em;border-radius: 6px;',
    }]
})
export default class Popconfirm extends React.Component {
    render() {
        return [
            '后面的不仿了，演示下动态加载',
            (
                <div EClass="that" className="tooltip-demo-placement">
                    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                        <Antd.Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>TL</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>Top</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>TR</Antd.Button>
                        </Antd.Popconfirm>
                    </div>
                    <div style={{ width: 70, float: 'left' }}>
                        <Antd.Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>LT</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>Left</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>LB</Antd.Button>
                        </Antd.Popconfirm>
                    </div>
                    <div style={{ width: 70, marginLeft: 304 }}>
                        <Antd.Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>RT</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>Right</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>RB</Antd.Button>
                        </Antd.Popconfirm>
                    </div>
                    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                        <Antd.Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>BL</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>Bottom</Antd.Button>
                        </Antd.Popconfirm>
                        <Antd.Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Antd.Button>BR</Antd.Button>
                        </Antd.Popconfirm>
                    </div>
                </div>
            )];
    }
}