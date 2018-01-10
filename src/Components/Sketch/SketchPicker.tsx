import React from 'react-ex';
import ColorBooth from 'src/Components/ColorBooth';
import { MouseEventHandler } from 'react';
import SketchPickerPanel from './SketchPickerPanel';
import { RGBA } from 'src/CSS/CSSClass';
import { observable, observer } from 'src/Lib/mobx.index';
import { Ref } from 'react';
import { ModelPanel } from 'src/Lib/ModelPanel';
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
    @observable color: RGBA = this.props.color;
    setupModel: ModelPanel | null = null;
    root: HTMLDivElement;
    divBox: HTMLDivElement;
    div: HTMLDivElement;
    onChange: SketchPickerPanel['props']['onChange'] = (clr) => {
        this.color = clr;
        if (this.props.onChange !== undefined) {
            this.props.onChange(clr);
        }
    }
    onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (this.setupModel) {
            this.setupModel.open();
        }
    }
    onRef: Ref<HTMLDivElement> = (instance) => {
        if (instance === null) {
            return;
        }
        if (instance) {
            this.setupModel = new ModelPanel((<SketchPickerPanel color={this.color} onChange={this.onChange} />), instance, 'zidx-9999 pdip-10', true);
        }
    }
    // #endregion

    // #region private property

    // #endregion

    // #region public methods

    constructor(props: SketchPicker['props']) {
        super(props);
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(props: this['props']) {
        this.init(props);
    }
    init(props: this['props']) {
        this.color = props.color;
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

    // #endregion
}
