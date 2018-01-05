/**
 * 此页面不设计多次Render
 */

import React from 'react-ex';
import { CSSRuleEx, cssClassNS, RGBA, getRGBA2String, getRGB } from '../../../CSS/CSSClass';
import StepSlider from 'src/Page/Play/Component/StepSlider';
import StringSelect from 'src/Page/Play/Component/StringSelect';
import RenderData from '../../../Components/RenderData';
import SkinTargets from 'src/Page/Play/Component/SkinTargets';
import { ReactNode } from 'src/Lib/react';
import SkinBoxSetupItem from 'src/Page/Play/Component/SkinBoxSetupItem';
import SketchPicker from 'src/Components/SketchPicker';
import { ClassItem } from 'src/CSS/G.Class';
import { observable } from 'mobx';
import { observer } from 'src/Lib/mobx.index';
@React.eclass({
    view: [
        {
            'chd': ['mhem-5 w-50 uof inline alignTop bdbox pdip-5'.split(' ')]
        }
    ],
    frame: [
        'rdip-5 pdip-5 ladip bd-12-gray'.split(' ')
    ]
})
@observer
export default class SkinEditBox
    extends React.Component<{
        info: ClassItem
    }> {
    display: string;
    color: RGBA;
    margin: number;
    padding: number;
    borderStyle: string;
    borderWidth: number;
    borderRadius: number;
    shadow: number;
    shadowColor: RGBA;
    backgroundColor: RGBA;
    borderColor: RGBA;
    checkList: ClassItem['use'];
    skinRule: {
        map: Record<string, CSSRuleEx>;
        rule: CSSRuleEx;
        cssClass: cssClassNS.CSSClass;
    };
    private onStyleTextChange: ((data: ReactNode) => void);
    private globalEClass: cssClassNS.CSSClass = cssClassNS.CSSClass.instance;
    @observable private renderRandom = Math.random();

    backgroundColorOnChange: SketchPicker['props']['onChange'] = (clr) => {
        this.backgroundColor = clr;
        this.updateRule();
    }
    borderColorOnChange: SketchPicker['props']['onChange'] = (clr) => {
        this.borderColor = clr;
        this.updateRule();
    }
    colorOnChange: SketchPicker['props']['onChange'] = (clr) => {
        this.color = clr;
        this.updateRule();
    }
    onChange: SketchPicker['props']['onChange'] = (clr) => {
        this.shadowColor = clr;
        this.updateRule();
    }
    componentDidMount() {

        this.skinRule = this.globalEClass.getRule(this.props.info.name);
        this.updateRule();
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillUpdate(props: this['props']) {
        this.init(props);
        this.renderRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        return (
            <div>
                <div EClass="frame mdip-5">
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="显示模式" keyName="display" source={this.checkList}>
                        <StringSelect defaultValue={this.display} data={['none', 'inline-block', 'block', 'inline-flex', 'flex', 'inline-grid', 'grid', 'inline-table', 'table', 'list-item', 'run-in', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group']} onChange={this.displayOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="背景颜色" keyName="backgroundColor" source={this.checkList}>
                        <SketchPicker color={this.backgroundColor} onChange={this.backgroundColorOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="外边距" keyName="margin" source={this.checkList}>
                        <StepSlider defaultValue={this.margin} min={1} max={100} step={10} onChange={this.marginSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="内边距" keyName="padding" source={this.checkList}>
                        <StepSlider defaultValue={this.padding} min={1} max={100} step={10} onChange={this.paddingSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="字颜色" keyName="color" source={this.checkList}>
                        <SketchPicker color={this.color} onChange={this.colorOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框风格" keyName="borderStyle" source={this.checkList}>
                        <StringSelect defaultValue={this.borderStyle} data={['none', 'hidden', 'solid', 'dashed', 'dotted', 'ridge', 'inset', 'outset', 'groove', 'double']} onChange={this.borderStyleOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框颜色" keyName="borderColor" source={this.checkList}>
                        <SketchPicker color={this.borderColor} onChange={this.borderColorOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框宽度" keyName="borderWidth" source={this.checkList}>
                        <StepSlider defaultValue={this.borderWidth} min={1} max={100} step={10} onChange={this.borderWidthSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框圆角" keyName="borderRadius" source={this.checkList}>
                        <StepSlider defaultValue={this.borderRadius} min={1} max={100} step={10} onChange={this.borderRadiusSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="阴影" keyName="shadow" source={this.checkList}>
                        <StepSlider defaultValue={this.shadow} min={1} max={20} step={2} onChange={this.shadowSliderOnChange} />
                        <SketchPicker color={this.shadowColor} onChange={this.onChange} />
                    </SkinBoxSetupItem>
                </div>
                <div EClass="view">
                    <div>
                        <div EClass="frame minhem-20">
                            <SkinTargets count={2} max={10} className={this.props.info.name} />
                        </div>
                    </div>
                    <div>
                        <pre EClass="frame minhem-20">
                            <RenderData data="" onRaiseChange={this.onRaiseChange} />
                        </pre>
                    </div>
                </div>
            </div >
        );
    }
    // #region private
    private getRGBAFromReactCSSPropertiesColor(color: string) {
        if (/^\s*#[a-z\d]{3}([a-z\d]{3})?/.test(color)) {
            // #000  #000000
            color = color.replace(/^\s*#/, '').replace(/\s*$/, '');
            if (color.length === 3) {
                color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
            }
            return { ...getRGB(color), A: 1 };
        } else {
            debugger;
            const match = color.match(/^\s*rgba?\(\d{1,3},\d{1,3},\d{1,3}(,(\d{1,})?\.?\d{1,})?\)/);
            console.log(match);
            debugger;
            return { R: 0, G: 0, B: 0, A: 1 };
        }
    }
    private init(props: this['props']) {
        const use = props.info.use;
        const rule = props.info.defaultRule;
        this.display = 'inline-block';
        this.margin = 15;
        this.padding = 15;
        this.borderStyle = 'solid';
        this.borderWidth = 1;
        this.borderRadius = 5;
        this.shadow = 0;
        this.shadowColor = { R: 0, G: 0, B: 0, A: 0.5 };
        this.checkList = use;
        if (rule.borderColor) {
            this.borderColor = this.getRGBAFromReactCSSPropertiesColor(rule.borderColor);
        } else {
            this.borderColor = { R: 0, G: 0, B: 0, A: 1 };
        }
        if (rule.color) {
            this.color = this.getRGBAFromReactCSSPropertiesColor(rule.color);
        } else {
            this.color = { R: 0, G: 0, B: 0, A: 1 };
        }
        if (rule.backgroundColor) {
            this.backgroundColor = this.getRGBAFromReactCSSPropertiesColor(rule.backgroundColor);
        } else {
            this.backgroundColor = { R: 0, G: 0, B: 0, A: 1 };
        }
    }
    private onRaiseChange: RenderData['props']['onRaiseChange'] = (onChange) => {
        this.onStyleTextChange = onChange;
    }
    private displayOnChange = (value: string) => {
        this.display = value;
        this.updateRule();
    }
    private borderStyleOnChange = (value: string) => {
        this.borderStyle = value;
        this.updateRule();
    }
    private shadowSliderOnChange = (value: number) => {
        this.shadow = value;
        this.updateRule();
    }
    private marginSliderOnChange = (value: number) => {
        this.margin = value;
        this.updateRule();
    }
    private paddingSliderOnChange = (value: number) => {
        this.padding = value;
        this.updateRule();
    }
    private borderWidthSliderOnChange = (value: number) => {
        this.borderWidth = value;
        this.updateRule();
    }
    private borderRadiusSliderOnChange = (value: number) => {
        this.borderRadius = value;
        this.updateRule();
    }
    private onChangeCheck = () => {
        this.updateRule();
    }
    private updateRule() {
        const arr: string[] = [];
        const arr2: any[] = [];
        if (this.checkList.padding) {
            arr.push('pdip-' + this.padding);
        }
        if (this.checkList.borderWidth) {
            arr.push('bdwdip-' + this.borderWidth);
        }
        if (this.checkList.borderRadius) {
            arr.push('rdip-' + this.borderRadius);
        }
        if (this.checkList.margin) {
            arr.push('mdip-' + this.margin);
        }
        if (this.checkList.borderStyle) {
            arr.push('bds-' + this.borderStyle);
        }
        if (this.checkList.shadow) {
            const shadowColor = getRGBA2String(this.shadowColor);
            arr.push('shadow-' + this.shadow + '-' + shadowColor);
        }
        if (this.checkList.display) {
            arr2.push(`display:${this.display};`);
        }
        if (this.checkList.borderColor) {
            arr2.push(`border-color:rgba(${this.borderColor.R},${this.borderColor.G},${this.borderColor.B},${this.borderColor.A});`);
        }
        if (this.checkList.backgroundColor) {
            arr2.push(`background-color:rgba(${this.backgroundColor.R},${this.backgroundColor.G},${this.backgroundColor.B},${this.backgroundColor.A});`);
        }
        if (this.checkList.color) {
            arr2.push(`color:rgba(${this.color.R},${this.color.G},${this.color.B},${this.color.A});`);
        }
        if (arr.length > 0) {
            arr2.push(arr);
        }
        this.skinRule.map[this.props.info.name] = arr2;
        this.globalEClass.updateClass(this.props.info.name);

        let style = this.globalEClass.getStyleByName(this.props.info.name)!;
        const re = /(\/\*.*?\*\/)/g;
        style = style.replace(/((-[a-z]+?-)?[a-z]+?\-?[a-z]+?:)/g, '<span style="color:red;">$1</span>');
        style = style.replace(re, '<span style="color:green;">$1</span>');
        style = style.replace(/;/g, ';\n  ');
        style = style.replace(/\n\s*\n/g, '\n');
        this.onStyleTextChange(<code dangerouslySetInnerHTML={{ __html: style }} />);
    }
    // #endregion
}