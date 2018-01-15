import React from 'react-ex';
import Antd from 'antd-min';
import { observer, observable } from 'mobx-index';
@React.eclass(
    {
        box: [React.calcStyle({ position: 'absolute', left: 0, top: '40%', right: 0, textAlign: 'center' })]
    }
)
@observer
export default class CPNLoader
    extends React.Component
    <
    {
        getComponentAsync: (() => JSX.Element | null)
        src: string
    }
    > {
    @observable component?: JSX.Element | null;
    map: Record<string, JSX.Element | null> = {};
    constructor(props: CPNLoader['props']) {
        super(props);
        this.load(props);
    }
    componentWillReceiveProps(props: this['props']) {
        if (props.src in this.map/* document.querySelector(`script[key="${props.src}"]`) !== null */) {
            this.component = this.map[props.src];
            // this.component = props.getComponentAsync();
        } else {
            this.component = undefined;
            this.load(props);
        }
    }
    render() {
        const component = this.component;
        if (component) {
            return component;
            // } else if (component === null) {

        } else {
            return (
                <div EClass="box">
                    <Antd.Spin tip={`加载${this.props.src}`} size="large" />
                </div>
            );
        }
    }
    private makeOnLoad(props: this['props']) {
        return (ev: Event) => {

            try {
                const component = this.props.getComponentAsync();
                this.map[this.props.src] = component;

                // props没发生变化的话，更新输出
                if (this.props === props) {
                    this.component = component;
                }

            } catch (e) {
                this.component = (
                    <div EClass="box">
                        <Antd.Spin tip={`读取组件出错：${this.props.src}`} size="large" />
                    </div>
                );
                return;
            }
            // try {
            //     this.renderCount++;
            // } catch (e) {
            //     alert('mobx赋值出错：' + this.props.src);
            // }
        };
    }
    private load(props: this['props']) {

        const script = document.createElement('script');
        // script.setAttribute('key', props.src);
        script.src = '/HaoQiLab/static/js/' + props.src + '.js';
        script.onload = this.makeOnLoad(props);
        document.head.appendChild(script);
        this.map[props.src] = null;
    }

}