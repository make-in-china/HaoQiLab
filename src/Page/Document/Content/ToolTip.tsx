
import React, { css } from 'react-ex';
import Antd from 'antd-more';
import entry from '../Entry';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    that: [{
        '.tooltip-demo-placement a': css`display: inline-block;line-height: 32px;height: 32px;width: 60px;font-size: 14px;text-align: center;background: #f5f5f5;margin-right: 1em;margin-bottom: 1em;border-radius: 6px;`,
        '.tooltip-demo-placement button': css`display: inline-block;line-height: 32px;height: 32px;width: 60px;font-size: 14px;text-align: center;background: #f5f5f5;margin-right: 1em;margin-bottom: 1em;border-radius: 6px;`,
    }]
});
const text = <span>prompt text</span>;
@entry('ToolTip')
@React.eclass(config)

export default class ToolTip extends React.Component {
    render() {
        return [
            '后面的不仿了，演示下动态加载',
            (
                <div EClass={clsMap.that} className="tooltip-demo-placement">
                    <div style={{ marginLeft: 60 }}>
                        <Antd.Tooltip placement="topLeft" title={text}>
                            <a href="#">TL</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="top" title={text}>
                            <a href="#">Top</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="topRight" title={text}>
                            <a href="#">TR</a>
                        </Antd.Tooltip>
                    </div>
                    <div style={{ width: 60, float: 'left' }}>
                        <Antd.Tooltip placement="leftTop" title={text}>
                            <a href="#">LT</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="left" title={text}>
                            <a href="#">Left</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="leftBottom" title={text}>
                            <a href="#">LB</a>
                        </Antd.Tooltip>
                    </div>
                    <div style={{ width: 60, marginLeft: 270 }}>
                        <Antd.Tooltip placement="rightTop" title={text}>
                            <a href="#">RT</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="right" title={text}>
                            <a href="#">Right</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="rightBottom" title={text}>
                            <a href="#">RB</a>
                        </Antd.Tooltip>
                    </div>
                    <div style={{ marginLeft: 60, clear: 'both' }}>
                        <Antd.Tooltip placement="bottomLeft" title={text}>
                            <a href="#">BL</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="bottom" title={text}>
                            <a href="#">Bottom</a>
                        </Antd.Tooltip>
                        <Antd.Tooltip placement="bottomRight" title={text}>
                            <a href="#">BR</a>
                        </Antd.Tooltip>
                    </div>
                </div>
            )];
    }
}