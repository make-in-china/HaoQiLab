import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    cellBox: css`
    vertical-align:top;margin-left:-2px;margin-top:-2px;padding:2px;border:2px solid rgba(255,255,255,0.1);
    width:38px;height:38px;line-height:1;box-sizing:border-box;display:inline-block;`
});
@React.eclass(config)
@observer
export default class OutCell
    extends React.Component<{
        style?: React.CSSProperties
        data: number | null
    }> {
    @observable index = 0;
    data: number | null;
    constructor(props: OutCell['props']) {
        super(props);
        this.init(props);

    }
    init(props: OutCell['props']) {
        this.data = props.data;
    }
    componentWillReceiveProps(props: OutCell['props']) {
        this.init(props);
        this.index++;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.index;
        return (
            <div EClass={clsMap.cellBox} className={this.props.className} style={this.props.style}>{this.data}</div >
        );
    }
}
