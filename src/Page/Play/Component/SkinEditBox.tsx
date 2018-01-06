/**
 * 此页面不设计多次Render
 */

import React from 'react-ex';
import { CSSRuleEx, cssClassNS, RGBA, getRGBA2String, getRGB } from '../../../CSS/CSSClass';
import StepSlider from 'src/Page/Play/Component/StepSlider';
import StringSelect from 'src/Page/Play/Component/StringSelect';
import SkinTargets from 'src/Page/Play/Component/SkinTargets';
import { ReactNode } from 'src/Lib/react';
import SkinBoxSetupItem from 'src/Page/Play/Component/SkinBoxSetupItem';
import SketchPicker from 'src/Components/SketchPicker';
import { ClassItem } from 'src/CSS/G.Class';
import { observable } from 'mobx';
import { observer } from 'src/Lib/mobx.index';
import { G } from 'src/CSS/G';
import RenderData from 'src/Components/RenderData';
import { isString } from 'src/Lib/is';

const re = /(\/\*.*?\*\/)/g;
@React.eclass({
    view: [
        {
            'chd': ['mhem-5 w-50 uof inline alignTop bdbox pdip-5'.split(' ')]
        }
    ],
    frame: [
        'pdip-5 bd-12-gray'.split(' ')
    ],
    simple: []
})
@observer
export default class SkinEditBox
    extends React.Component<{
        info: ClassItem
        sync: boolean
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
    checkList: {
        [P in keyof ClassItem['defaultValue']]?: boolean
    };
    skinRule: {
        map: Record<string, CSSRuleEx>;
        rule: CSSRuleEx;
        cssClass: cssClassNS.CSSClass;
    };
    private onStyleTextChange: ((data: ReactNode) => void);
    private globalEClass = cssClassNS.CSSClass.instance;
    private targetRule: this['skinRule'];
    @observable private renderRandom = Math.random();

    backgroundColorOnChange: SketchPicker['props']['onChange'] = (clr) => {
        this.backgroundColor = clr;
        this.updateRule(this.props);
    }
    borderColorOnChange: SketchPicker['props']['onChange'] = (clr) => {
        this.borderColor = clr;
        this.updateRule(this.props);
    }
    colorOnChange: SketchPicker['props']['onChange'] = (clr) => {
        this.color = clr;
        this.updateRule(this.props);
    }
    onChange: SketchPicker['props']['onChange'] = (clr) => {
        this.shadowColor = clr;
        this.updateRule(this.props);
    }
    componentDidMount() {
        this.updateRule(this.props);
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(props: this['props']) {
        this.init(props);
        this.updateRule(props);
        this.renderRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        return (
            <div>
                <div className={G.Class.map.frm_border} EClass="frame mdip-5">
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="显示模式" keyName="display" source={this.checkList}>
                        <StringSelect defaultValue={this.display} data={['', 'inline-block', 'block', 'inline-flex', 'flex', 'inline-grid', 'grid', 'inline-table', 'table', 'list-item', 'run-in', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group']} onChange={this.displayOnChange} />
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
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="字框颜色" keyName="color" source={this.checkList}>
                        <SketchPicker color={this.color} onChange={this.colorOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框风格" keyName="borderStyle" source={this.checkList}>
                        <StringSelect defaultValue={this.borderStyle} data={['', 'none', 'hidden', 'solid', 'dashed', 'dotted', 'ridge', 'inset', 'outset', 'groove', 'double']} onChange={this.borderStyleOnChange} />
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
                        <div className={G.Class.map.frm_border} EClass="frame minhem-20">
                            <SkinTargets count={2} max={10} EClass="simple" />
                        </div>
                    </div>
                    <div>
                        <pre className={G.Class.map.frm_border} EClass="frame minhem-20">
                            <RenderData data="" onRaiseChange={this.onRaiseChange} />
                        </pre>
                    </div>
                </div>
            </div >
        );
    }
    // #region private
    private getValueForPx(value: string | number) {
        if (isString(value)) {
            value = value.trim();
            if (/^\d+p/.test(value)) {
                value = value.replace('px', '');
                return Number(value);
            } else if (/\d+em/.test(value)) {
                value = value.replace('em', '');
                return Number(value) * 16;
            } else {
                throw "无法解析borderRadius：" + value;
            }
        } else {
            return value;
        }
    }
    private getRGBAFromReactCSSPropertiesColor(color: string) {
        color = color.trim();
        if (/#[a-z\d]{3}([a-z\d]{3})?/.test(color)) {
            // #000  #000000
            color = color.replace('#', '');
            if (color.length === 3) {
                color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
            }
            return { ...getRGB(color), A: 1 };
        } else {
            debugger;
            const match = color.match(/^rgba?\(\d{1,3},\d{1,3},\d{1,3}(,(\d{1,})?\.?\d{1,})?\)/);
            console.log(match);
            debugger;
            return { R: 0, G: 0, B: 0, A: 1 };
        }
    }
    private init(props: this['props']) {
        // const use = props.info.use;
        const values = props.info.defaultValue;

        this.shadow = 0;
        this.shadowColor = { R: 0, G: 0, B: 0, A: 0.5 };
        this.checkList = {};

        if (values.display) {
            this.display = values.display;
            this.checkList.display = true;
        } else {
            this.display = '';
        }

        if (values.borderStyle) {
            this.borderStyle = values.borderStyle;
            this.checkList.borderStyle = true;
        } else {
            this.borderStyle = '';
        }


        if (values.padding) {
            this.padding = this.getValueForPx(values.padding);
            this.checkList.padding = true;
        } else {
            this.padding = 15;
        }

        if (values.margin) {
            this.margin = this.getValueForPx(values.margin);
            this.checkList.margin = true;
        } else {
            this.margin = 15;
        }

        if (values.borderRadius) {
            this.borderRadius = this.getValueForPx(values.borderRadius);
            this.checkList.borderRadius = true;
        } else {
            this.borderRadius = 5;
        }

        if (values.borderWidth) {
            this.borderWidth = this.getValueForPx(values.borderWidth);
            this.checkList.borderWidth = true;
        } else {
            this.borderWidth = 1;
        }

        if (values.borderColor) {
            this.borderColor = this.getRGBAFromReactCSSPropertiesColor(values.borderColor);
            this.checkList.borderColor = true;
        } else {
            this.borderColor = { R: 0, G: 0, B: 0, A: 1 };
        }

        if (values.color) {
            this.color = this.getRGBAFromReactCSSPropertiesColor(values.color);
            this.checkList.color = true;
        } else {
            this.color = { R: 0, G: 0, B: 0, A: 1 };
        }

        if (values.backgroundColor) {
            this.backgroundColor = this.getRGBAFromReactCSSPropertiesColor(values.backgroundColor);
            this.checkList.backgroundColor = true;
        } else {
            this.backgroundColor = { R: 0, G: 0, B: 0, A: 1 };
        }

        this.skinRule = this.globalEClass.getRule(props.info.name);
        this.targetRule = this.cssClass!.getRule('simple')
    }
    private onRaiseChange: RenderData['props']['onRaiseChange'] = (onChange) => {
        this.onStyleTextChange = onChange;
    }
    private displayOnChange = (value: string) => {
        this.display = value;
        this.updateRule(this.props);
    }
    private borderStyleOnChange = (value: string) => {
        this.borderStyle = value;
        this.updateRule(this.props);
    }
    private shadowSliderOnChange = (value: number) => {
        this.shadow = value;
        this.updateRule(this.props);
    }
    private marginSliderOnChange = (value: number) => {
        this.margin = value;
        this.updateRule(this.props);
    }
    private paddingSliderOnChange = (value: number) => {
        this.padding = value;
        this.updateRule(this.props);
    }
    private borderWidthSliderOnChange = (value: number) => {
        this.borderWidth = value;
        this.updateRule(this.props);
    }
    private borderRadiusSliderOnChange = (value: number) => {
        this.borderRadius = value;
        this.updateRule(this.props);
    }
    private onChangeCheck = () => {
        this.updateRule(this.props);
    }
    private updateRule(props: this['props']) {
        const arr: string[] = [];
        const arr2: any[] = [];

        if (this.checkList.display) {
            arr2.push(`display:${this.display};`);
        }
        if (this.checkList.backgroundColor) {
            arr2.push(`background-color:rgba(${this.backgroundColor.R},${this.backgroundColor.G},${this.backgroundColor.B},${this.backgroundColor.A});`);
        }
        if (this.checkList.margin) {
            arr2.push(`margin:${this.margin}px;`);
        }
        if (this.checkList.padding) {
            arr2.push(`padding:${this.padding}px;`);
        }
        if (this.checkList.borderStyle) {
            arr2.push(`border-style:${this.borderStyle};`);
        }
        if (this.checkList.borderWidth) {
            arr2.push(`border-width:${this.borderWidth}px;`);
        }
        if (this.checkList.borderColor) {
            arr2.push(`border-color:rgba(${this.borderColor.R},${this.borderColor.G},${this.borderColor.B},${this.borderColor.A});`);
        }
        if (this.checkList.borderRadius) {
            arr2.push(`border-radius:${this.borderRadius}px;`);
        }
        if (this.checkList.color) {
            arr2.push(`color:rgba(${this.color.R},${this.color.G},${this.color.B},${this.color.A});`);
        }
        if (this.checkList.shadow) {
            const shadowColor = getRGBA2String(this.shadowColor);
            arr.push('shadow-' + this.shadow + '-' + shadowColor);
        }
        if (arr.length > 0) {
            arr2.push(arr);
        }
        let style: string;
        this.targetRule.map.simple = arr2;
        this.cssClass!.updateClass('simple');
        if (this.props.sync) {

            this.skinRule.map[props.info.name] = arr2;
            this.globalEClass.updateClass(props.info.name);
            style = this.globalEClass.getStyleByName(props.info.name)!;
        } else {
            style = this.cssClass!.getStyleByName('simple')!;
        }

        style = style.replace(/((-[a-z]+?-)?[a-z]+?\-?[a-z]+?:)/g, '<span style="color:red;">$1</span>');
        style = style.replace(re, '<span style="color:green;">$1</span>');
        style = style.replace(/(\{|;)/g, '$1\n  ');
        style = style.replace(/\n\s*\n/g, '\n');
        style = style.replace(/(  \})/g, '$1\n');
        this.onStyleTextChange(<code dangerouslySetInnerHTML={{ __html: style }} />);
    }
    // #endregion
}