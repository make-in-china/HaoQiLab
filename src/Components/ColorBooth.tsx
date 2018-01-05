import React from 'react-ex';

export default class ColorBooth extends React.Component {
    static bgpic = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center';
    render() {
        return (
            <div EClass="inline" style={{ background: ColorBooth.bgpic }}>
                {this.props.children}
            </div>
        );
    }
}
