/**
 * 此页面不设计多次Render
 */

import React from 'react-ex';
import { CSSRuleEx, cssClassNS } from '../../../CSS/CSSClass';
import StepSlider from 'src/Page/Play/Component/StepSlider';
import StringSelect from 'src/Page/Play/Component/StringSelect';
import RenderData from '../../../Components/RenderData';
import SkinTargets from 'src/Page/Play/Component/SkinTargets';
import { ReactNode } from 'src/Lib/react';
import SkinBoxSetupItem from 'src/Page/Play/Component/SkinBoxSetupItem';
@React.eclass({
    view: [
        {
            'chd': ['mhem-5 w-50 uof inline alignTop bdbox pdip-5'.split(' ')]
        }
    ],
    frame: [
        'rdip-5 pdip-5 ladip bd-12-gray'.split(' ')
    ],
    skin: []
})
// @observer
export default class SkinBox extends React.Component {
    display: string;
    margin: number;
    padding: number;
    borderStyle: string;
    borderWidth: number;
    borderRadius: number;
    shadow: number;
    skinRule: {
        map: Record<string, CSSRuleEx>;
        rule: CSSRuleEx;
        cssClass: cssClassNS.CSSClass;
    };
    checkList = {
        display: true,
        margin: true,
        padding: true,
        borderStyle: true,
        borderWidth: true,
        borderRadius: true,
        shadow: true
    };
    private onStyleTextChange: ((data: ReactNode) => void);
    // @observable private renderRandom = Math.random();
    componentDidMount() {
        this.skinRule = this.cssClass!.getRule('skin');
        this.updateRule();
    }
    componentWillMount() {
        this.init();
    }
    // componentDidUpdate() {
    //     alert(1);
    //     this.init();
    //     this.renderRandom = Math.random();
    // }
    render() {
        // // tslint:disable-next-line:no-unused-expression
        // void this.renderRandom;
        return (
            <div>
                <div id="aaa" EClass="frame mdip-5">
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="显示模式" keyName="display" source={this.checkList}>
                        <StringSelect defaultValue={this.display} data={['none', 'inline-block', 'block', 'inline-flex', 'flex', 'inline-grid', 'grid', 'inline-table', 'table', 'list-item', 'run-in', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group']} onChange={this.displayOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="外边距" keyName="margin" source={this.checkList}>
                        <StepSlider defaultValue={this.margin} min={1} max={100} step={10} onChange={this.marginSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="内边距" keyName="padding" source={this.checkList}>
                        <StepSlider defaultValue={this.padding} min={1} max={100} step={10} onChange={this.paddingSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框风格" keyName="borderStyle" source={this.checkList}>
                        <StringSelect defaultValue={this.borderStyle} data={['none', 'hidden', 'solid', 'dashed', 'dotted', 'ridge', 'inset', 'outset', 'groove', 'double']} onChange={this.borderStyleOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框宽度" keyName="borderWidth" source={this.checkList}>
                        <StepSlider defaultValue={this.borderWidth} min={1} max={100} step={10} onChange={this.borderWidthSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="边框圆角" keyName="borderRadius" source={this.checkList}>
                        <StepSlider defaultValue={this.borderRadius} min={1} max={100} step={10} onChange={this.borderRadiusSliderOnChange} />
                    </SkinBoxSetupItem>
                    <SkinBoxSetupItem onChangeCheck={this.onChangeCheck} title="阴影" keyName="shadow" source={this.checkList}>
                        <StepSlider defaultValue={this.shadow} min={1} max={20} step={2} onChange={this.shadowSliderOnChange} />
                    </SkinBoxSetupItem>
                </div>
                <div EClass="view">
                    <div>
                        <div EClass="frame minhem-20">
                            <SkinTargets count={2} max={10} EClass="skin" />
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
    private init() {
        this.display = 'inline-block';
        this.margin = 15;
        this.padding = 15;
        this.borderStyle = 'solid';
        this.borderWidth = 1;
        this.borderRadius = 5;
        this.shadow = 0;
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
        const arr2: any[] = [arr];
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
            arr.push('shadow-' + this.shadow);
        }
        if (this.checkList.display) {
            arr2.unshift(`display:${this.display};`);
        }
        this.skinRule.map.skin = arr2;
        this.cssClass!.updateClass('skin');

        let style = this.cssClass!.getStyleByName('skin')!;
        const re = /(\/\*.*?\*\/)/g;
        style = style.replace(/((-[a-z]+?-)?[a-z]+?\-?[a-z]+?:)/g, '<span style="color:red;">$1</span>');
        style = style.replace(re, '<span style="color:green;">$1</span>');
        style = style.replace(/;/g, ';\n  ');
        style = style.replace(/\n\s*\n/g, '\n');
        this.onStyleTextChange(<code dangerouslySetInnerHTML={{ __html: style }} />);
    }
}