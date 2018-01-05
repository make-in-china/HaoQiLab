import React from 'react-ex';
import { RGB, RGBA, getRGBByArea, getRGBString } from 'src/CSS/CSSClass';
import { default as RenderData, OnChange } from 'src/Components/RenderData';
import { TouchMove } from 'src/Lib/TouchMove';
import ColorBooth from 'src/Components/ColorBooth';
import { getPos } from 'src/Lib/getPos';

const white = 'linear-gradient(to right, #fff, rgba(255,255,255,0));';
const black = 'linear-gradient(to top, #000, rgba(0,0,0,0));';
const horizontal = 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);';
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
        'wdip-26 hdip-26 mdipl-5 mdipt-4 ladip rdip-3'.split(' ')
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
    onColorSlide = new TouchMove((e, target: HTMLElement) => {
        const pos = getPos(e, target);
        this.colorslidepos = pos.x;
        if (this.colorslidepos > colorSlideWidth) {
            this.colorslidepos = colorSlideWidth;
        } else if (this.colorslidepos < 0) {
            this.colorslidepos = 0;
        }
        this.updateBaseColor();
        this.recalShowColor();
        this.updateColor(this.props);
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
        this.recalShowColor();
        this.updateColor(this.props);
    });
    onColorBox = new TouchMove((e, target: HTMLElement) => {
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
        this.recalShowColor();
        this.updateColor(this.props);
    });
    private baseColor: RGB;
    private alpha: number;
    private showColor: RGB;
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
    
    componentWillReceiveProps(props: this['props']) {
        this.init(props);
        this.updateColor(this.props);
    }
    init(props: this['props']) {
        const propsColor = props.color;

        let high = propsColor.R;
        if (propsColor.G > high) {
            high = propsColor.G;
        }
        if (propsColor.B > high) {
            high = propsColor.B;
        }
        const sub = 255 - high;
        const highColor = {
            R: propsColor.R + sub,
            G: propsColor.G + sub,
            B: propsColor.B + sub
        };

        let redThenElse = 2;
        let greenThenElse = 2;
        let blueThenElse = 2;

        if (propsColor.G > propsColor.R) {
            redThenElse--;
        }
        if (propsColor.B > propsColor.R) {
            redThenElse--;
        }
        if (propsColor.R > propsColor.G) {
            greenThenElse--;
        }
        if (propsColor.B > propsColor.G) {
            greenThenElse--;
        }
        if (propsColor.R > propsColor.B) {
            blueThenElse--;
        }
        if (propsColor.G > propsColor.B) {
            blueThenElse--;
        }
        const code = '' + redThenElse + greenThenElse + blueThenElse;
        let x = colorWidth;
        switch (code) {
            case '222':
            // fff
            case '211':
                // f00
                this.colorslidepos = 0;
                x = (1 - highColor.B / 255) * colorWidth;
                break;
            case '220':
                // ff0
                this.colorslidepos = colorSlideWidth * 0.17;
                x = (1 - highColor.B / 255) * colorWidth;
                break;
            case '121':
                this.colorslidepos = colorSlideWidth * 0.33;
                x = (1 - highColor.R / 255) * colorWidth;
                // 0f0
                break;
            case '022':
                // 0ff
                this.colorslidepos = colorSlideWidth * 0.5;
                x = (1 - highColor.R / 255) * colorWidth;
                break;
            case '112':
                // 00f
                this.colorslidepos = colorSlideWidth * 0.67;
                x = (1 - highColor.G / 255) * colorWidth;
                break;
            case '202':
                // f0f
                this.colorslidepos = colorSlideWidth * 0.83;
                x = (1 - highColor.G / 255) * colorWidth;
                break;
            default:

                switch (code) {
                    case '210':
                        this.colorslidepos = colorSlideWidth * 0.17 * highColor.G / 255;
                        x = highColor.B / 255 * colorWidth;
                        // f00 - ff0
                        break;
                    case '120':
                        this.colorslidepos = colorSlideWidth * 0.17 + colorSlideWidth * 0.16 * (1 - highColor.R / 255);
                        x = highColor.B / 255 * colorWidth;
                        // ff0 - 0f0
                        break;
                    case '021':
                        this.colorslidepos = colorSlideWidth * 0.33 + colorSlideWidth * 0.17 * highColor.B / 255;
                        x = highColor.R / 255 * colorWidth;
                        // 0f0 - 0ff
                        break;
                    case '012':
                        this.colorslidepos = colorSlideWidth * 0.5 + colorSlideWidth * 0.17 * (1 - highColor.G / 255);
                        x = highColor.R / 255 * colorWidth;
                        // 0ff - 00f
                        break;
                    case '102':
                        this.colorslidepos = colorSlideWidth * 0.67 + colorSlideWidth * 0.16 * highColor.R / 255;
                        x = highColor.G / 255 * colorWidth;
                        // 00f - f0f
                        break;
                    case '201':
                        this.colorslidepos = colorSlideWidth * 0.83 + colorSlideWidth * 0.17 * (1 - highColor.B / 255);
                        x = highColor.G / 255 * colorWidth;
                        // f0f - f00
                        break;
                    default:
                }
        }
        this.updateBaseColor();
        this.pos = {
            x: x,
            y: colorHeight * (sub / 255)
        };

        const color = getRGBByArea(this.baseColor, { R: 255, G: 255, B: 255 }, colorWidth - this.pos.x, colorWidth);
        this.showColor = getRGBByArea(color, { R: 0, G: 0, B: 0 }, this.pos.y, colorHeight);

        this.alpha = props.color.A;

        this.alphaslidepos = colorSlideWidth * this.alpha;

    }
    componentWillMount() {
        this.init(this.props);
        this.updateColor(this.props);
    }
    updateBaseColor() {
        const persent = this.colorslidepos / colorSlideWidth;
        if (persent < 0.17) {
            // f00 - ff0
            this.baseColor = getRGBByArea({ R: 255, G: 0, B: 0 }, { R: 255, G: 255, B: 0 }, persent, 0.17);
        } else if (persent < 0.33) {
            // ff0 - 0f0
            this.baseColor = getRGBByArea({ R: 255, G: 255, B: 0 }, { R: 0, G: 255, B: 0 }, persent - 0.17, 0.16);
        } else if (persent < 0.5) {
            // 0f0 - 0ff
            this.baseColor = getRGBByArea({ R: 0, G: 255, B: 0 }, { R: 0, G: 255, B: 255 }, persent - 0.33, 0.17);
        } else if (persent < 0.67) {
            // 0ff - 00f
            this.baseColor = getRGBByArea({ R: 0, G: 255, B: 255 }, { R: 0, G: 0, B: 255 }, persent - 0.5, 0.17);
        } else if (persent < 0.83) {
            // 00f - f0f
            this.baseColor = getRGBByArea({ R: 0, G: 0, B: 255 }, { R: 255, G: 0, B: 255 }, persent - 0.67, 0.16);
        } else {
            // f0f - f00
            this.baseColor = getRGBByArea({ R: 255, G: 0, B: 255 }, { R: 255, G: 0, B: 0 }, persent - 0.83, 0.17);
        }
    }
    updateColor(props: this['props']) {

        const alpha = `linear-gradient(to right, rgba(${this.showColor.R},${this.showColor.G},${this.showColor.B},0) 0%, rgb(${this.showColor.R},${this.showColor.G},${this.showColor.B}) 100%);`;
        const rgba = { ...this.showColor, A: this.alpha };
        const strRGBA = `rgba(${rgba.R},${rgba.G},${rgba.B},${rgba.A})`;
        this.cssClass!.updateRule({
            colorboxbg: `background-color:${getRGBString(this.baseColor)};`,
            showcolor: `background-color:${strRGBA};`,
            showAlphaColor: `background-image:${alpha}background-image:-webkit-${alpha}`,
            circlepos: `left:${this.pos.x - 5}px;top:${this.pos.y - 10}px;`,
            colorslidepos: `left:${this.colorslidepos - 3}px;`,
            alphaslidepos: `left:${this.alphaslidepos - 3}px;`
        });
        if (this.onStyleTextChange) {
            if (this.alpha === 1) {
                this.onStyleTextChange(getRGBString(this.showColor));
            } else {
                this.onStyleTextChange(strRGBA);
            }
        }
        if (props.onChange) {
            props.onChange(rgba);
        }

    }
    render() {
        debugger;
        return (
            <div EClass="box">
                <div EClass="colorbox colorboxbg" onMouseDown={this.onColorBox.autoDown}>
                    <div EClass="colorboxmaskwhite">
                        <div EClass="colorboxmaskblack">
                            <div EClass="circle circlepos" />
                        </div>
                    </div>
                </div>
                <div EClass="colorbox2">
                    <div>
                        <div EClass="horizontal" onMouseDown={this.onColorSlide.autoDown}>
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
                        <ColorBooth><div EClass="show showcolor" /></ColorBooth>
                    </div>
                </div>
                <RenderData
                    data={this.alpha === 1 ? (getRGBString(this.showColor)) : (`rgba(${this.showColor.R},${this.showColor.G},${this.showColor.B},${this.alpha})`)}
                    onRaiseChange={this.onRaiseChange}
                />
            </div >
        );
    }
    recalShowColor() {
        const color = getRGBByArea(this.baseColor, { R: 255, G: 255, B: 255 }, colorWidth - this.pos.x, colorWidth);
        this.showColor = getRGBByArea(color, { R: 0, G: 0, B: 0 }, this.pos.y, colorHeight);
    }
    private onRaiseChange: RenderData['props']['onRaiseChange'] = (onChange) => {
        this.onStyleTextChange = onChange;
    }
}
