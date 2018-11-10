import { observable, observer } from 'mobx-index';
import React, { css } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';

const { config, clsMap } = eClassConfig({
    box: css`padding:45px;position:absolute;width:180px;height:180px;background-repeat: no-repeat;background-size:180px;`,
    targetBox: css`background-color:rgba(255,255,255,0.2);width:90px;height:90px;border-radius:90px;`,
});
@React.eclass(config)
@observer
export class WorldFragments
    extends React.Component<{
        width: number
        height: number
        x: number
        y: number
        picSrc?: string
        onClick: (inst: WorldFragments) => void
    }> {
    @observable nextTick = 0;
    x: number;
    y: number;
    picSrc?: string;
    onClick = () => {
        this.props.onClick(this);
    }
    componentWillMount() {
        this.setData(this.props);
        // setInterval(() => {
        //     this.rotate = (this.rotate + 1) % 360;
        //     this.nextTick++;
        // }, 10);
    }
    setData(props: WorldFragments['props']) {
        this.x = props.x;
        this.y = props.y;
        this.picSrc = props.picSrc;
    }
    rotate = (Math.random() * 360) | 0;

    get left() {
        return this.props.width / 2 - 90 + this.x * 152;
    }
    get top() {
        let top = this.props.height / 2 - 90;
        if (this.x % 2 === 0) {
            top += 90;
        }
        return top + this.y * 180;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;
        
        return (
            <div
                EClass={clsMap.box}
                onClick={this.onClick}
                style={{
                    left: this.left,
                    top: this.top,
                    backgroundImage: `url(${this.picSrc})`,
                    transform: `rotate(${this.rotate}deg)`
                }}
            >
                {!this.picSrc && <div EClass={clsMap.targetBox}>{null}</div>}
            </div>
        );
    }
}