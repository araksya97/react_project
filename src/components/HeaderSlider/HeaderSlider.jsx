import React from 'react';
import './HeaderSlider.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import sl1 from '../../img/header_sl1.jpg'
import sl2 from '../../img/header_sl2.jpg'
import sl3 from '../../img/header_sl3.jpg'


SwiperCore.use([Navigation, Pagination]);

const data = [
    {
        id: 1,
        title: 'We Generate Creative & Novation Ideas',
        img: sl1
    },
    {
        id: 2,
        title: "We'r Provided  Best Digital Services",
        img: sl2
    },
    {
        id: 3,
        title: 'Best Solutions & Ideas for Your Business',
        img: sl3
    }
]
function HeaderSlider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}

                pagination
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map(slide => (
                    <SwiperSlide
                        key={slide.id}
                    >
                        <div className="slide_img"><img src={slide.img} alt="" /></div>
                        <div className="slider_cont">
                            <div className="text">
                                {slide.title}
                            </div>
                            <div className="btn_sw">
                                <a href="###">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
        </>
    )
}

export default HeaderSlider
