import React, { _ } from 'react-ex';
import Antd from 'antd-more';
import { observer, observable } from 'mobx-index';
import { G } from 'src/CSS/G';
import { isArray } from 'src/Lib/is';
function setComponentWillReceivePropsToPrototype(chd: any) {
    if (!chd) {
        return;
    }
    let chds: any[] = [];
    if (isArray(chd)) {
        chds = chd;
    } else {
        chds = [chd];
    }
    chds.forEach(m => {
        let t = m.type;
        if (React.isReactComponent(t)) {
            let tProto = t.prototype;
            if (
                !('componentWillReceiveProps' in tProto) &&
                ('componentWillMount' in tProto)
            ) {
                tProto.componentWillReceiveProps = function () {
                    this.componentWillMount();
                };
            }
        }
        if (t) {
            setComponentWillReceivePropsToPrototype(m.props.children);
        }

    });
}
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    box: [
        _`pdip-5 mdipt-10 uof bd-12-gray minhem-15`,
        {
            hv: [_`bd-10-gray`]
        }
    ],
    boxbig: [_`abs zidx-2 shadowless2 left-15 right-15`],
    title: [_`pdip-3 mdip-2 mdipb-5 uof`],
    content: [_`pdip-3 mdip-2 mdipt-5 uof`]
});
@React.eclass(config)

@observer
export default class App extends React.Component<{
    title?: string
}> {
    play(): void {
        this.onRefresh();
    }
    @observable max = false;
    @observable content: React.ReactNode | null = null;
    componentWillMount() {
        const chd = this.props.children;
        setComponentWillReceivePropsToPrototype(chd);
    }
    onRefresh = () => {

        this.content = this.props.children; // React.cloneReactNode(this.props.children);
    }
    onChange = () => {
        this.max = !this.max;
    }

    render() {
        return (
            <div className={G.Class.map.clr_background3 + ' ' + G.Class.map.frm_border} EClass={this.max ? [clsMap.boxbig, clsMap.box] : clsMap.box} >
                <div EClass={clsMap.title} className={G.Class.map.clr_primary}>
                    {this.props.title}
                    {
                        this.max ? (
                            <Antd.Button size="small" shape="circle" icon="shrink" EClass={clsMap.floatr} onClick={this.onChange} />
                        ) : (
                                <Antd.Button size="small" shape="circle" icon="arrows-alt" EClass={clsMap.floatr} onClick={this.onChange} />
                            )
                    }
                    <Antd.Button size="small" shape="circle" icon="retweet" EClass="floatr mdipr-3" onClick={this.onRefresh} />
                </div>
                <div EClass={clsMap.content}>{this.content ? this.content : (
                    this.props.children ? (<Antd.Icon style={{ fontSize: 36 }} type="play-circle" theme="filled" onClick={this.onRefresh} />) : '无内容'
                )}</div>
            </div>
        );
    }
}
/*  ========================================================
    [ props.title ]                [ onRefresh ][ onChange ]

                        [ this.content ]

    ========================================================
*/