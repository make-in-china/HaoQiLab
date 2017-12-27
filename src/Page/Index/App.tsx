import React from 'react-ex';
import BaseApp from '../BaseApp';
import Swiper from '../../Components/Swiper';
import './index.css';
export default class App extends BaseApp {
    // constructor(props: App['props']) {
    //     super({
    //         theme: props.theme,
    //         name: props.name,
    //         noContent: true
    //     });
    // }
    noContent= true;
    noFooter= true;
    renderContent() {
        return (
            <div className="pages">
                <Swiper>
                    <div className="swiper-slide swiper-slide1">&nbsp;</div>
                    <div className="swiper-slide swiper-slide2">&nbsp;</div>
                    <div className="swiper-slide swiper-slide3">&nbsp;</div>
                    <div className="swiper-slide swiper-slide4">&nbsp;</div>
                    <div className="swiper-slide swiper-slide5">&nbsp;</div>
                    <div className="swiper-slide swiper-slide6">&nbsp;</div>
                    <div className="swiper-slide swiper-slide5">&nbsp;</div>
                    <div className="swiper-slide swiper-slide4">&nbsp;</div>
                    <div className="swiper-slide swiper-slide3">&nbsp;</div>
                    <div className="swiper-slide swiper-slide2">&nbsp;</div>
                </Swiper>
            </div>
        );
    }
}