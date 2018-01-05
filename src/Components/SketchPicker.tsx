import React from 'react-ex';
import ColorBooth from 'src/Components/ColorBooth';
import { MouseEventHandler } from 'react';
import * as ReactDOM from 'react-dom';
import SketchPickerPanel from 'src/Components/SketchPickerPanel';
import { RGBA, cssClassNS } from 'src/CSS/CSSClass';
import { observable, observer } from 'src/Lib/mobx.index';
import { Ref } from 'react';
import { getOffset } from 'src/Lib/getPos';
@React.eclass(/*local eclass rule */{
    colorbox: ['pdip-5 ladip lhem-0 rdip-10 inline bd-12-gray'.split(' ')],
    color: ['wem-3 hem-1 rdip-5'.split(' ')],
})
@observer
export default class SketchPicker
    extends React.Component<{
        /* props */
        color: RGBA
        onChange?: SketchPickerPanel['props']['onChange']
    }> {
    // #region static

    // #endregion

    // #region public property
    @observable color: RGBA = this.color = this.props.color;
    root: HTMLDivElement;
    div: HTMLDivElement;
    onChange: SketchPickerPanel['props']['onChange'] = (clr) => {
        this.color = clr;
        if (this.props.onChange !== undefined) {
            this.props.onChange(clr);
        }
    }

    onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        const div = this.div;
        const pos = getOffset(this.root);
        div.style.left = pos.x + 'px';
        div.style.top = pos.y - this.root.scrollHeight + 'px';
        document.body.appendChild(div);

        ReactDOM.render((
            <div style={{ marginTop: '-100%' }}>
                <SketchPickerPanel color={this.color} onChange={this.onChange} />
            </div>
        ), div);
        document.body.addEventListener('click', this.closePanel);
    }
    onRef: Ref<HTMLDivElement> = (elem) => {
        if (elem === null) {
            return;
        }
        this.root = elem as HTMLDivElement;

    }
    // #endregion

    // #region private property

    // #endregion

    // #region public methods
    /**
     *
     */
    constructor(props: SketchPicker['props']) {
        super(props);
        const div = this.div = document.createElement('div');
        const eclass = cssClassNS.CSSClass.instance;
        eclass.registerClass('abs');
        eclass.registerClass('pdip-5');
        eclass.registerClass('zidx-8888');
        div.className = 'abs pdip-5 zidx-8888';
        div.addEventListener('click', function (e: Event) {
            e.stopPropagation();
            e.preventDefault();
        });
    }
    componentWillMount() {
        this.init();
    }
    init() {
        this.color = this.props.color;
    }
    render() {
        const color = this.color;
        return (
            <div ref={this.onRef} EClass="colorbox">
                <ColorBooth>
                    <div EClass="color" style={{ backgroundColor: `rgba(${color.R},${color.G},${color.B},${color.A})` }} onClick={this.onClick} />
                </ColorBooth>
            </div>
        );
    }
    // #endregion

    // #region private methods
    closePanel = () => {
        document.body.removeEventListener('click', this.closePanel);
        this.div.remove();
    }
    // #endregion
}
