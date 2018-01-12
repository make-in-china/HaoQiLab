import React from 'react-ex';
import { RGBA, getRGBString, HSL, RGB } from 'src/CSS/CSSClass';
import { default as RenderData, OnChange } from 'src/Components/RenderData';
import { TouchMove } from 'src/Lib/TouchMove';
import ColorBooth from 'src/Components/ColorBooth';
import { getPos } from 'src/Lib/getPos';
import { G } from 'src/CSS/G';

const white = 'linear-gradient(to right, #fff, rgba(255,255,255,0));';
const black = 'linear-gradient(to top, #000, rgba(0,0,0,0));';
const horizontal = 'linear-gradient(to right, #f00 0%, #ff0 16.3333%, #0f0 33.6666%, #0ff 50%, #00f 66.3333%, #f0f 83.6666%, #f00 100%);';
const colorSlideWidth = 230;
const colorWidth = 256;
const colorHeight = 200;
// const vertical = 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);';
@React.eclass({
    box: ['pdip-10 rdip-5 shadow-1 bg-gray inline'.split(' ')],
    colorbox: [React.calcStyle({ width: colorWidth, height: colorHeight })],
    colorbox2: [{
        chd: ['pdiptb-3 inline alignTop'.split(' ')]
    }],
    circle: ['noevent bd-gray shadow-1 bds-double inline rdip-8 bdwdip-6 relative'.split(' ')],
    slide: ['height:0.6em;top:-0.4em;border-width:0.2em;', 'shadow-1 noevent bd-gray bds-solid inline rdip-8 relative'.split(' ')],
    colorboxmaskwhite: [
        React.calcStyle({ width: colorWidth, height: colorHeight }),
        `background-image:${white}background-image:-webkit-${white}`
    ],
    colorboxmaskblack: [
        React.calcStyle({ width: colorWidth, height: colorHeight }),
        `background-image:${black}background-image:-webkit-${black}`
    ],
    horizontal: [
        'mdiptb-4'.split(' '),
        React.calcStyle({ width: colorSlideWidth, height: 10 }),
        `background-image:${horizontal}background-image:-webkit-${horizontal}`
    ],
    // vertical: [
    // 'mdiptb-3'.split(' '),
    //     React.calcStyle({ width: colorSlideWidth, height: 10 }),
    //     `background-image:${vertical}background-image:-webkit-${vertical}`
    // ]
    alpha: [
        'mdiptb-4'.split(' '),
        React.calcStyle({ width: colorSlideWidth, height: 10 })
    ],
    show: [
        'border-color:rgba(0,0,0,0.05);',
        'wdip-26 hdip-26 mdipl-5 mdipt-4'.split(' ')
    ],
    colorboxbg: [],
    showcolor: [],
    showAlphaColor: [],
    circlepos: [],
    colorslidepos: [],
    alphaslidepos: []
})
export default class SketchPickerPanel
    extends React.Component<{
        color: RGBA
        onChange?: (color: RGBA) => void
    }> {
    onH = new TouchMove((e, target: HTMLElement) => {
        const pos = getPos(e, target);
        this.colorslidepos = pos.x;
        if (this.colorslidepos > colorSlideWidth) {
            this.colorslidepos = colorSlideWidth;
        } else if (this.colorslidepos < 0) {
            this.colorslidepos = 0;
        }
        this.baseColor.H = this.colorslidepos / colorSlideWidth;
        this.updateColor(this.props);
        this.raiseChange();
    });
    onAlpha = new TouchMove((e, target: HTMLElement) => {
        const pos = getPos(e, target);
        this.alphaslidepos = pos.x;
        if (this.alphaslidepos > colorSlideWidth) {
            this.alphaslidepos = colorSlideWidth;
        } else if (this.alphaslidepos < 0) {
            this.alphaslidepos = 0;
        }
        let alpha = this.alphaslidepos / colorSlideWidth;
        alpha = Math.floor(alpha * 100) / 100;
        this.alpha = alpha;

        this.updateColor(this.props);
        this.raiseChange();
    });
    onSL = new TouchMove((e, target: HTMLElement) => {
        this.pos = getPos(e, target);
        if (this.pos.x > colorWidth) {
            this.pos.x = colorWidth;
        } else if (this.pos.x < 0) {
            this.pos.x = 0;
        }
        if (this.pos.y > colorHeight) {
            this.pos.y = colorHeight;
        } else if (this.pos.y < 0) {
            this.pos.y = 0;
        }
        this.baseColor.S = this.pos.x / colorWidth;
        this.baseColor.L = (1 - this.pos.y / colorHeight) * (2 - this.baseColor.S) / 2;
        this.updateColor(this.props);
        this.raiseChange();
    });
    private baseColor: HSL;
    private alpha: number;
    private pos: {
        x: number
        y: number
    };
    private colorslidepos: number;
    private alphaslidepos: number;

    private onStyleTextChange: OnChange;
    static toRGBA(strColor: string) {
        return {
            R: 0,
            G: 0,
            B: 0,
            A: 0
        };
    }
    constructor(props: SketchPickerPanel['props']) {
        super(props);
        // 不修改类上的rule
        this.cssClass = this.cssClass.clone();
    }
    componentWillReceiveProps(props: this['props']) {
        this.init(props);
        this.updateColor(props);
    }
    init(props: this['props']) {
        this.baseColor = this.rgbToHSL(props.color);

        this.pos = {
            x: Math.round(colorWidth * this.baseColor.S),
            y: Math.round(colorHeight * (1 - this.baseColor.L * 2 / (2 - this.baseColor.S)))
        };

        this.colorslidepos = colorSlideWidth * this.baseColor.H;
        this.alpha = props.color.A;
        this.alphaslidepos = colorSlideWidth * this.alpha;
    }
    componentWillMount() {
        this.init(this.props);
        this.updateColor(this.props);
    }

    updateColor(props: this['props']) {
        const rgb = this.hslToRGB(this.baseColor);
        const alpha = `linear-gradient(to right, rgba(${rgb.R},${rgb.G},${rgb.B},0) 0%, rgb(${rgb.R},${rgb.G},${rgb.B}) 100%);`;
        this.cssClass!.updateRule({
            colorboxbg: `background-color:hsl(${this.baseColor.H * 360}, 100%, 50%);`,
            showcolor: `background-color:rgba(${rgb.R},${rgb.G},${rgb.B},${this.alpha});`,
            showAlphaColor: `background-image:${alpha}background-image:-webkit-${alpha}`,
            circlepos: `left:${this.pos.x - 5}px;top:${this.pos.y - 10}px;`,
            colorslidepos: `left:${this.colorslidepos - 2}px;`,
            alphaslidepos: `left:${this.alphaslidepos - 2}px;`
        });
        if (this.onStyleTextChange) {
            this.onStyleTextChange(this.getColorText());
        }

    }
    render() {
        return (
            <div EClass="box">
                <div EClass="colorbox colorboxbg" onMouseDown={this.onSL.autoDown}>
                    <div EClass="colorboxmaskwhite">
                        <div EClass="colorboxmaskblack">
                            <div EClass="circle circlepos" />
                        </div>
                    </div>
                </div>
                <div EClass="colorbox2">
                    <div>
                        <div EClass="horizontal" onMouseDown={this.onH.autoDown}>
                            <div EClass="slide colorslidepos" />
                        </div>
                        <div EClass="alpha showAlphaColor" onMouseDown={this.onAlpha.autoDown}>
                            <ColorBooth>
                                <div style={{ width: colorSlideWidth, height: 10 }} >
                                    <div EClass="slide alphaslidepos" />
                                </div>
                            </ColorBooth>
                        </div>
                    </div>
                    <div>
                        <ColorBooth><div className={G.Class.map.frm_border2} EClass="show showcolor" /></ColorBooth>
                    </div>
                </div>
                <div EClass="hem-5">
                    <RenderData
                        data={this.getColorText()}
                        onRaiseChange={this.onRaiseChange}
                    />
                </div>
            </div >
        );
    }
    private HSLTo(p: number, q: number, t: number) {
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    private hslToRGB(hsl: HSL) {

        var r, g, b;
        const l = hsl.L;
        const h = hsl.H;
        const s = hsl.S;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = this.HSLTo(p, q, h + 1 / 3);
            g = this.HSLTo(p, q, h);
            b = this.HSLTo(p, q, h - 1 / 3);
        }

        return {
            R: Math.round(r * 255),
            G: Math.round(g * 255),
            B: Math.round(b * 255)
        };
    }
    private rgbToHSL(rgb: RGB) {
        const r = rgb.R / 255;
        const g = rgb.G / 255;
        const b = rgb.B / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
                default:

            }
            h /= 6;
        }
        return {
            H: h,
            S: s,
            L: l
        };
    }
    private raiseChange() {
        if (this.props.onChange) {
            this.props.onChange({ ...this.hslToRGB(this.baseColor), A: this.alpha });
        }
    }
    // private getHSL() {
    //     return {
    //         H: Math.ceil(this.colorslidepos / colorSlideWidth * 360),
    //         S: Math.ceil(this.pos.x * 100 / colorWidth),
    //         L: Math.ceil(this.pos.y * 100 / colorHeight)
    //     };
    // }
    private getColorText() {
        const rgb = this.hslToRGB(this.baseColor);
        const arr = [
            (<br />),
            `R:${rgb.R} G:${rgb.G} B:${rgb.B} A:${this.alpha}`,
            (<br />),
            'H:' + Math.round(this.baseColor.H * 360) + ' S:' + Math.round(this.baseColor.S * 100) + '% L:' + Math.round(this.baseColor.L * 50) + '%'
        ];
        if (this.alpha === 1) {
            arr.unshift(getRGBString(rgb)/*  + ' ' + getRGBString(this.props.color) */);
        } else {
            arr.unshift(`rgba(${rgb.R},${rgb.G},${rgb.B},${this.alpha})`/*  + ' ' + getRGBString(this.props.color) */);
        }
        return arr;
    }
    private onRaiseChange: RenderData['props']['onRaiseChange'] = (onChange) => {
        this.onStyleTextChange = onChange;
    }
}
