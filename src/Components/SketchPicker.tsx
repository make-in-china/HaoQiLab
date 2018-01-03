import React from 'react-ex';
const white = 'linear-gradient(to right, #fff, rgba(255,255,255,0));';
const black = 'linear-gradient(to top, #000, rgba(0,0,0,0));';
const horizontal = 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);';
const alpha = 'linear-gradient(to right, rgba(255, 24, 28, 0) 0%, rgb(255, 24, 28) 100%);';
// const vertical = 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);';
@React.eclass({
    box: ['pdip-5 rdip-5 mdip-5 shadow-1 bg-gray inline'.split(' ')],
    colorbox: [],
    colorbox2: [{
        chd: ['pdiptb-3 inline alignTop'.split(' ')]
    }],
    colorboxbg: [React.calcStyle({ backgroundColor: '#f00' })],
    colorboxmaskwhite: [
        React.calcStyle({ width: 200, height: 150 }),
        `background-image:${white}background-image:-webkit-${white}`
    ],
    colorboxmaskblack: [
        React.calcStyle({ width: 200, height: 150 }),
        `background-image:${black}background-image:-webkit-${black}`
    ],
    horizontal: [
        'mdiptb-4'.split(' '),
        React.calcStyle({ width: 172, height: 10 }),
        `background-image:${horizontal}background-image:-webkit-${horizontal}`
    ],
    // vertical: [
    // 'mdiptb-3'.split(' '),
    //     React.calcStyle({ width: 172, height: 10 }),
    //     `background-image:${vertical}background-image:-webkit-${vertical}`
    // ]
    alpha: [
        'mdiptb-4'.split(' '),
        React.calcStyle({ width: 172, height: 10 }),
        `background-image:${alpha}background-image:-webkit-${alpha}`
    ],
    show: ['wdip-26 hdip-26 mdipl-5 mdipt-4 bg-red ladip bd-12-red rdip-3'.split(' ')]
})
export default class SketchPicker
    extends React.Component {
    render() {
        return (
            <div EClass="box">
                <div EClass="colorbox">
                    <div EClass="colorboxbg">
                        <div EClass="colorboxmaskwhite">
                            <div EClass="colorboxmaskblack" />
                        </div>
                    </div>
                </div>
                <div EClass="colorbox2">
                    <div>
                        <div EClass="horizontal" />
                        <div EClass="alpha">
                            <div style={{ width: 172, height: 10, background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center' }} />
                        </div>
                    </div>
                    <div>
                        <div EClass="show" />
                    </div>
                </div>
            </div>
        );
    }
}
