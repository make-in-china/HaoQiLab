
import React from 'react-ex';
import 'swiper/dist/css/swiper.min.css';
const SwiperClass: typeof Swiper = require('swiper/dist/js/swiper.min.js');
export default class App extends React.Component {
    swiper: Swiper;
    onRef = (elem: HTMLDivElement | null) => {
        if (elem === null) {
            return;
        }
        this.swiper = new SwiperClass(elem, {
            direction: 'vertical',
            slidesPerView: 1,
            mousewheel: true,
        } as any);
    }
    render() {
        return (
            <div ref={this.onRef} className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}