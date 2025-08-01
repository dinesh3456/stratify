import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
	speed: 2000,
    loop: true,
    autoplay: true,
    slidesPerView: 6,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 6,
        },
    },
};

function Brand() {
    return (
        <>

        <section className="marqueeSwiper-area pt-130 pb-130">
            <div className="container">
                <div className="swiper marqueeSwiper__slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image1.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image2.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image3.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image4.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image5.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image6.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image1.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image2.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image3.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image4.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image5.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image6.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

        </>
    )
}
export default Brand;
