import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"


const swiperOptions = {
    modules: [Autoplay, Pagination ],
    loop: true,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
        1900: {
            slidesPerView: 6,
        },
    },
};

function Marquee() {

    return (
        <>

        <div className="marqueeSwiper-area brand-two-area pt-100 pb-100">
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
        </div>

        </>
    )
}
export default Marquee