
import React from 'react-ex';
import { CSSRuleEx, cssClassNS, RGBA, getRGBA2String, getRGB, getRGBACSSString, getRGBAByMoreInfo } from 'src/CSS/CSSClass';
import StepSlider from '../StepSlider';
import StringSelect from '../StringSelect';
import SkinTargets from './SkinTargets';
import { ReactNode } from 'src/Lib/react';
import SkinBoxSetupItem from './SkinBoxSetupItem';
import SketchPicker from 'src/Components/Sketch/SketchPicker';
import { ClassRule, localClassRuleData, updateLocalClass } from 'src/CSS/G.Class';
import { observable } from 'mobx';
import { observer } from 'src/Lib/mobx.index';
import { G } from 'src/CSS/G';
import RenderData from 'src/Components/RenderData';
import { Antd } from 'src/Lib/antd.min';
// import * as ZeroClipboard from 'zeroclipboard';
const TabPane = Antd.Tabs.TabPane;
const re = /(\/\*.*?\*\/)/g;
const notification = Antd.notification;

@React.eclass({
    view: [
        {
            'chd': ['mhem-5 w-50 uof inline alignTop bdbox pdip-5'.split(' ')]
        }
    ],
    frame: [
        'pdip-5 bd-12-gray'.split(' ')
    ],
    setupbox: [
        'mdip-5 minhem-16'.split(' '),
        {
            ' .ant-tabs.ant-tabs-card>.ant-tabs-bar .ant-tabs-nav-container': 'height:31px',
            ' .ant-tabs.ant-tabs-card>.ant-tabs-bar .ant-tabs-tab': 'line-height:29px'
        }
    ],
    simple: []
})
@observer
export default class SkinEditBox
    extends React.Component<{
        name: string
        info: ClassRule
        sync: boolean
        onChangeRule: () => void
    }> {
    setup: {
        display: ClassRule['display'];
        color: RGBA;
        margin: number;
        padding: number;
        borderStyle: ClassRule['borderStyle'];
        borderWidth: number;
        borderRadius: number;
        shadow: number;
        shadowColor: RGBA;
        backgroundColor: RGBA;
        borderColor: RGBA;
        fontSize: number;
        fontWeight: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        rotateX: number
        rotateY: number
        rotateZ: number
    };
    checkList: {
        [P in keyof ClassRule]?: boolean
    };
    skinRule: {
        map: Record<string, CSSRuleEx>;
        rule: CSSRuleEx;
        cssClass: cssClassNS.CSSClass;
    };

    private btnUpdateClassBySave = (
        <Antd.Button
            type="primary"
            size="small"
            onClick={() => {
                notification.close('saveClass');
                updateLocalClass(this.props.name);
                this.props.onChangeRule();
            }}
        >
            刷新页面样式
        </Antd.Button>
    );
    private btnUpdateClassByClear = (
        <Antd.Button
            type="primary"
            size="small"
            onClick={() => {
                notification.close('clearClass');
                updateLocalClass(this.props.name);
                this.props.onChangeRule();
            }}
        >
            刷新页面样式
        </Antd.Button>
    );
    private onStyleTextChange: ((data: ReactNode) => void);
    private globalEClass = cssClassNS.CSSClass.instance;
    private targetRule: this['skinRule'];
    private displayOnChange = this.makeChangeEvent('display');
    private borderStyleOnChange = this.makeChangeEvent('borderStyle');
    private shadowOnChange = this.makeChangeEvent('shadow');
    private marginOnChange = this.makeChangeEvent('margin');
    private paddingOnChange = this.makeChangeEvent('padding');
    private borderWidthOnChange = this.makeChangeEvent('borderWidth');
    private borderRadiusOnChange = this.makeChangeEvent('borderRadius');
    private backgroundColorOnChange = this.makeChangeEvent('backgroundColor');
    private colorOnChange = this.makeChangeEvent('color');
    private fontSizeOnChange = this.makeChangeEvent('fontSize');
    private rotateXOnChange = this.makeChangeEvent('rotateX');
    private rotateYOnChange = this.makeChangeEvent('rotateY');
    private rotateZOnChange = this.makeChangeEvent('rotateZ');
    private fontWeightOnChange = this.makeChangeEvent('fontWeight');
    private shadowColorOnChange = this.makeChangeEvent('shadowColor');
    private borderColorOnChange = this.makeChangeEvent('borderColor');
    @observable private renderRandom = Math.random();

    onClickExport: React.FormEventHandler<any> = (evt) => {
        const rule = this.createRule();
        const str = JSON.stringify(rule);
        notification.open({
            message: '样式规则导出-' + this.props.name,
            description: str,
            btn: null,
            key: 'copyClass',
            onClose: close,
        });
    }
    onClickClear: React.FormEventHandler<any> = (evt) => {
        const data = localClassRuleData.get() || {};
        delete data[this.props.name];
        localClassRuleData.set(data);
        notification.open({
            message: '样式清除',
            description: `清除“${this.props.name}”样式成功！`,
            btn: this.btnUpdateClassByClear,
            key: 'clearClass',
            onClose: close,
        });
    }
    onClickSave: React.FormEventHandler<any> = (evt) => {

        const data = localClassRuleData.get() || {};
        data[this.props.name] = this.createRule();
        localClassRuleData.set(data);
        notification.open({
            message: '样式保存',
            description: `保存“${this.props.name}”样式成功！`,
            btn: this.btnUpdateClassBySave,
            key: 'saveClass',
            onClose: close,
        });
    }
    createRule() {
        const rule: ClassRule = {};

        if (this.checkList.display) {
            rule.display = this.setup.display;
        }
        if (this.checkList.backgroundColor) {
            rule.backgroundColor = getRGBACSSString(this.setup.backgroundColor);
        }
        if (this.checkList.margin) {
            rule.margin = this.setup.margin;
        }
        if (this.checkList.rotateX) {
            rule.rotateX = this.setup.rotateX;
        }
        if (this.checkList.rotateY) {
            rule.rotateY = this.setup.rotateY;
        }
        if (this.checkList.rotateZ) {
            rule.rotateZ = this.setup.rotateZ;
        }
        if (this.checkList.padding) {
            rule.padding = this.setup.padding;
        }
        if (this.checkList.borderStyle) {
            rule.borderStyle = this.setup.borderStyle;
        }
        if (this.checkList.borderWidth) {
            rule.borderWidth = this.setup.borderWidth;
        }
        if (this.checkList.borderColor) {
            rule.borderColor = getRGBACSSString(this.setup.borderColor);
        }
        if (this.checkList.borderRadius) {
            rule.borderRadius = this.setup.borderRadius;
        }
        if (this.checkList.color) {
            rule.color = getRGBACSSString(this.setup.color);
        }
        if (this.checkList.fontSize) {
            rule.fontSize = this.setup.fontSize;
        }
        if (this.checkList.fontWeight) {
            rule.fontWeight = this.setup.fontWeight;
        }
        if (this.checkList.shadow) {
            const shadowColor = getRGBA2String(this.setup.shadowColor);
            rule.shadow = [this.setup.shadow, shadowColor];
        }
        return rule;
    }
    componentDidMount() {
        this.updateRule(this.props);
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(props: this['props']) {
        if (props.info !== this.props.info) {
            this.init(props);
        }
        this.updateRule(props);
        this.renderRandom = Math.random();
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        void this.renderRandom;
        const data = {
            onChangeCheck: this.onChangeCheck,
            source: this.checkList
        };
        return (
            <div>
                <div className={G.Class.map.frm_border} EClass="frame setupbox">
                    <Antd.Tabs type="card">
                        <TabPane tab="大小" key="size">
                            <SkinBoxSetupItem title="显示模式" keyName="display" {...data}>
                                <StringSelect defaultValue={this.setup.display!} data={['', 'inline-block', 'block', 'inline-flex', 'flex', 'inline-grid', 'grid', 'inline-table', 'table', 'list-item', 'run-in', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group']} onChange={this.displayOnChange as any} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="外边距" keyName="margin" {...data}>
                                <StepSlider defaultValue={this.setup.margin} min={1} max={100} step={10} onChange={this.marginOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="内边距" keyName="padding" {...data}>
                                <StepSlider defaultValue={this.setup.padding} min={1} max={100} step={10} onChange={this.paddingOnChange} />
                            </SkinBoxSetupItem>
                        </TabPane>
                        <TabPane tab="边框" key="border">
                            <SkinBoxSetupItem title="边框风格" keyName="borderStyle" {...data}>
                                <StringSelect defaultValue={this.setup.borderStyle! as string} data={['', 'none', 'hidden', 'solid', 'dashed', 'dotted', 'ridge', 'inset', 'outset', 'groove', 'double']} onChange={this.borderStyleOnChange as any} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="边框宽度" keyName="borderWidth" {...data}>
                                <StepSlider defaultValue={this.setup.borderWidth} min={1} max={100} step={10} onChange={this.borderWidthOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="边框圆角" keyName="borderRadius" {...data}>
                                <StepSlider defaultValue={this.setup.borderRadius} min={1} max={100} step={10} onChange={this.borderRadiusOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="边框颜色" keyName="borderColor" {...data}>
                                <SketchPicker color={this.setup.borderColor} onChange={this.borderColorOnChange} />
                            </SkinBoxSetupItem>
                        </TabPane>
                        <TabPane tab="字体" key="font">
                            <SkinBoxSetupItem title="字体大小" keyName="fontSize" {...data}>
                                <StepSlider defaultValue={this.setup.fontSize} min={1} max={45} step={1} onChange={this.fontSizeOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="字体宽度" keyName="fontWeight" {...data}>
                                <StepSlider defaultValue={this.setup.fontWeight} min={1} max={9} step={1} ratio={100} onChange={this.fontWeightOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="字体颜色" keyName="color" {...data}>
                                <SketchPicker color={this.setup.color} onChange={this.colorOnChange} />
                            </SkinBoxSetupItem>
                        </TabPane>
                        <TabPane tab="变形" key="deformation">
                            <SkinBoxSetupItem title="前后翻转" keyName="rotateX" {...data}>
                                <StepSlider defaultValue={this.setup.rotateX} min={1} max={360} step={1} onChange={this.rotateXOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="左右翻转" keyName="rotateY" {...data}>
                                <StepSlider defaultValue={this.setup.rotateY} min={1} max={360} step={1} onChange={this.rotateYOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="旋转" keyName="rotateZ" {...data}>
                                <StepSlider defaultValue={this.setup.rotateZ} min={1} max={360} step={1} onChange={this.rotateZOnChange} />
                            </SkinBoxSetupItem>
                        </TabPane>
                        <TabPane tab="颜色和其他" key="default">
                            <SkinBoxSetupItem title="背景颜色" keyName="backgroundColor" {...data}>
                                <SketchPicker color={this.setup.backgroundColor} onChange={this.backgroundColorOnChange} />
                            </SkinBoxSetupItem>
                            <SkinBoxSetupItem title="阴影" keyName="shadow" {...data}>
                                <StepSlider defaultValue={this.setup.shadow} min={1} max={20} step={2} onChange={this.shadowOnChange} />
                                <SketchPicker color={this.setup.shadowColor} onChange={this.shadowColorOnChange} />
                            </SkinBoxSetupItem>
                        </TabPane>
                    </Antd.Tabs>
                </div>
                <div EClass="view">
                    <div>
                        <div className={G.Class.map.frm_border} EClass="frame minhem-20">
                            <SkinTargets count={2} max={10} EClass="simple" />
                        </div>
                    </div>
                    <div>
                        <pre className={G.Class.map.frm_border} EClass="frame minhem-20">
                            <div>
                                <Antd.Button size="small" onClick={this.onClickSave}>保存规则</Antd.Button>&nbsp;
                                <Antd.Button size="small" onClick={this.onClickClear}>清除规则</Antd.Button>&nbsp;
                                <Antd.Button size="small" onClick={this.onClickExport}>导出规则</Antd.Button>
                            </div>
                            <RenderData data="" onRaiseChange={this.onRaiseChange} />
                        </pre>
                    </div>
                </div>
            </div >
        );
    }
    // #region private
    // private getValueForPx(value: string | number) {
    //     if (isString(value)) {
    //         value = value.trim();
    //         if (/^\d+p/.test(value)) {
    //             value = value.replace('px', '');
    //             return Number(value);
    //         } else if (/\d+em/.test(value)) {
    //             value = value.replace('em', '');
    //             return Number(value) * 16;
    //         } else {
    //             throw '无法解析borderRadius：' + value;
    //         }
    //     } else {
    //         return value;
    //     }
    // }
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
            const match = color.match(/^rgba?\(\d{1,3},\d{1,3},\d{1,3}(,(\d{1,})?\.?\d{1,})?\)/);
            console.log(match);
            debugger;
            return { R: 0, G: 0, B: 0, A: 1 };
        }
    }
    private init(props: this['props']) {
        // const use = props.info.use;
        const values = props.info;
        this.setup = {} as any;
        this.checkList = {};
        if (values.shadow) {
            this.setup.shadow = values.shadow[0];
            this.setup.shadowColor = getRGBAByMoreInfo(values.shadow[1])!;
            this.checkList.shadow = true;
        } else {
            this.setup.shadow = 0;
            this.setup.shadowColor = { R: 0, G: 0, B: 0, A: 0.5 };
        }
        if (values.display) {
            this.setup.display = values.display;
            this.checkList.display = true;
        } else {
            this.setup.display = '';
        }

        if (values.borderStyle) {
            this.setup.borderStyle = values.borderStyle;
            this.checkList.borderStyle = true;
        } else {
            this.setup.borderStyle = '';
        }

        if (values.rotateX) {
            this.setup.rotateX = values.rotateX;
            this.checkList.rotateX = true;
        } else {
            this.setup.rotateX = 0;
        }

        if (values.rotateY) {
            this.setup.rotateY = values.rotateY;
            this.checkList.rotateY = true;
        } else {
            this.setup.rotateY = 0;
        }

        if (values.rotateZ) {
            this.setup.rotateZ = values.rotateZ;
            this.checkList.rotateZ = true;
        } else {
            this.setup.rotateZ = 0;
        }

        if (values.padding) {
            this.setup.padding = values.padding;
            this.checkList.padding = true;
        } else {
            this.setup.padding = 15;
        }

        if (values.margin) {
            this.setup.margin = values.margin;
            this.checkList.margin = true;
        } else {
            this.setup.margin = 15;
        }

        if (values.borderRadius) {
            this.setup.borderRadius = values.borderRadius;
            this.checkList.borderRadius = true;
        } else {
            this.setup.borderRadius = 5;
        }

        if (values.borderWidth) {
            this.setup.borderWidth = values.borderWidth;
            this.checkList.borderWidth = true;
        } else {
            this.setup.borderWidth = 1;
        }
        if (values.fontSize) {
            this.setup.fontSize = values.fontSize;
            this.checkList.fontSize = true;
        } else {
            this.setup.fontSize = 14;
        }
        if (values.fontWeight) {
            this.setup.fontWeight = values.fontWeight;
            this.checkList.fontWeight = true;
        } else {
            this.setup.fontWeight = 1;
        }
        if (values.borderWidth) {
            this.setup.borderWidth = values.borderWidth;
            this.checkList.borderWidth = true;
        } else {
            this.setup.borderWidth = 1;
        }

        if (values.borderColor) {
            this.setup.borderColor = this.getRGBAFromReactCSSPropertiesColor(values.borderColor);
            this.checkList.borderColor = true;
        } else {
            this.setup.borderColor = { R: 0, G: 0, B: 0, A: 1 };
        }

        if (values.color) {
            this.setup.color = this.getRGBAFromReactCSSPropertiesColor(values.color);
            this.checkList.color = true;
        } else {
            this.setup.color = { R: 0, G: 0, B: 0, A: 1 };
        }

        if (values.backgroundColor) {
            this.setup.backgroundColor = this.getRGBAFromReactCSSPropertiesColor(values.backgroundColor);
            this.checkList.backgroundColor = true;
        } else {
            this.setup.backgroundColor = { R: 0, G: 0, B: 0, A: 1 };
        }

        this.skinRule = this.globalEClass.getRule(props.name);
        this.targetRule = this.cssClass!.getRule('simple');
    }
    private onRaiseChange: RenderData['props']['onRaiseChange'] = (onChange) => {
        this.onStyleTextChange = onChange;
    }
    private makeChangeEvent<P extends keyof this['setup']>(name: P) {
        return (value: this['setup'][P]) => {
            this.setup[name as any] = value;
            this.updateRule(this.props);
        };
    }

    private onChangeCheck = () => {
        this.updateRule(this.props);
    }
    private recalRule(props: this['props']) {
        const arr: string[] = [];
        const arr2: any[] = [];

        if (this.checkList.display) {
            arr2.push(`display:${this.setup.display};`);
        }
        if (this.checkList.backgroundColor) {
            arr2.push(`background-color:rgba(${this.setup.backgroundColor.R},${this.setup.backgroundColor.G},${this.setup.backgroundColor.B},${this.setup.backgroundColor.A});`);
        }
        if (this.checkList.margin) {
            arr2.push(`margin:${this.setup.margin}px;`);
        }
        let transform: string[] = [];
        if (this.checkList.rotateX) {
            transform.push(`rotateX(${this.setup.rotateX}deg)`);
        }
        if (this.checkList.rotateY) {
            transform.push(`rotateY(${this.setup.rotateY}deg)`);
        }
        if (this.checkList.rotateZ) {
            transform.push(`rotateZ(${this.setup.rotateZ}deg)`);
        }
        if (transform.length > 0) {
            arr2.push(`transform:${transform.join(' ')};`);
        }
        if (this.checkList.padding) {
            arr2.push(`padding:${this.setup.padding}px;`);
        }
        if (this.checkList.fontWeight) {
            arr2.push(`font-weight:${this.setup.fontWeight * 100};`);
        }
        if (this.checkList.fontSize) {
            arr2.push(`font-size:${this.setup.fontSize}px;`);
        }
        if (this.checkList.borderStyle) {
            arr2.push(`border-style:${this.setup.borderStyle};`);
        }
        if (this.checkList.borderWidth) {
            arr2.push(`border-width:${this.setup.borderWidth}px;`);
        }
        if (this.checkList.borderColor) {
            arr2.push(`border-color:rgba(${this.setup.borderColor.R},${this.setup.borderColor.G},${this.setup.borderColor.B},${this.setup.borderColor.A});`);
        }
        if (this.checkList.borderRadius) {
            arr2.push(`border-radius:${this.setup.borderRadius}px;`);
        }
        if (this.checkList.color) {
            arr2.push(`color:rgba(${this.setup.color.R},${this.setup.color.G},${this.setup.color.B},${this.setup.color.A});`);
        }
        if (this.checkList.shadow) {
            const shadowColor = getRGBA2String(this.setup.shadowColor);
            arr.push('shadow-' + this.setup.shadow + '-' + shadowColor);
        }
        if (arr.length > 0) {
            arr2.push(arr);
        }
        return arr2;
    }
    private updateRule(props: this['props']) {
        const ruleArr = this.recalRule(props);
        this.targetRule.map.simple = ruleArr;
        this.cssClass!.updateClass('simple');

        let style: string;
        if (props.sync) {

            this.skinRule.map[props.name] = ruleArr;
            this.globalEClass.updateClass(props.name);
            style = this.globalEClass.getStyleByName(props.name)!;
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
