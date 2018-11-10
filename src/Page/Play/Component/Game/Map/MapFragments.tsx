import { observable, observer } from 'mobx-index';
import React, { css, _ } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { MouseEvent } from 'react';
import {  MapFragmentsNode } from './MapData';

const { config, clsMap } = eClassConfig({
    box: [
        css`padding:15px;position:absolute;width:60px;height:60px;background-repeat: no-repeat;background-size:60px;background-position:50% 50%;`,
        // {
        //     hv: css`background-size:70px;`
        // }
    ],
    targetBox: [
        css`background-color:rgba(255,255,255,0.1);width:30px;height:30px;border-radius:30px;`,
        { hv: css`background-color:rgba(255,255,255,0.3);` }
    ]
});
@React.eclass(config)
@observer
export class MapFragments
    extends React.Component<{
        width: number,
        height: number
        mapNode: MapFragmentsNode
        onMouseOver: (inst: MapFragments) => void
        onClick: (inst: MapFragments, mapNode: MapFragmentsNode) => void
    }> {
    @observable nextTick = 0;
    x: number;
    y: number;
    picSrc?: string;
    onMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        this.props.onMouseOver(this);
    }
    onClick = (event: MouseEvent<HTMLDivElement>) => {
        this.props.onClick(this, this.props.mapNode);
    }
    componentWillMount() {
        this.setData(this.props);
    }
    setData(props: MapFragments['props']) {
        this.x = props.mapNode.x;
        this.y = props.mapNode.y;
        this.picSrc = props.mapNode.picSrc;
    }
    get left() {
        return this.props.width / 2 - 30 + this.x * 48;
    }
    get top() {
        let top = this.props.height / 2 - 30;
        if (this.x % 2 === 0) {
            top += 30;
        }
        return top + this.y * 60;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        return (
            <div EClass={clsMap.box} onClick={this.onClick} onMouseOver={this.onMouseOver} style={{ left: this.left, top: this.top, backgroundImage: `url(${this.picSrc})` }}>
                {!this.picSrc && <div EClass={clsMap.targetBox}>{null}</div>}
            </div>
        );
    }
}