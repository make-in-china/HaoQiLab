import { observable, observer } from 'mobx-index';
import React, { css } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';

const { config, clsMap } = eClassConfig({
    box: css`padding:15px;position:absolute;width:60px;height:60px;background-repeat: no-repeat;background-size:60px;`,
    targetBox: css`background-color:rgba(255,255,255,0.2);width:30px;height:30px;border-radius:30px;`,
});
@React.eclass(config)
@observer
export class MapFragments
    extends React.Component<{ x: number, y: number, picSrc?: string }> {
    @observable nextTick = 0;
    x: number;
    y: number;
    picSrc?: string;
    componentWillMount() {
        this.setData(this.props);
    }
    setData(props: MapFragments['props']) {
        this.x = props.x;
        this.y = props.y;
        this.picSrc = props.picSrc;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        let left = 1230;
        let top = 485;
        if (this.x % 2 === 0) {
            top += 30;
        }
        return (
            <div EClass={clsMap.box} style={{ left: left + this.x * 48, top: top + this.y * 60 , backgroundImage: `url(${this.picSrc})` }}>
                {!this.picSrc&&<div EClass={clsMap.targetBox}>{null}</div>}
            </div>
        );
    }
}