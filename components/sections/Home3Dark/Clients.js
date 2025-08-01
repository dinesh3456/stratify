import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    loop: true,
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    navigation:{
        clickable: true,
        prevEl: ".testimonial__arry-prev",
        nextEl: ".testimonial__arry-next",
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

function Clients() {
    return (
        <>

        <div className="marqueeSwiper-area pt-130 pb-130">
            <div className="container">
                <div className="swiper marqueeSwiper__slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image1-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image2-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image3-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image4-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image5-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image6-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image1-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image2-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image3-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image4-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image5-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand-two__item">
                                <img src="assets/images/brand/brand-image6-dark.png" alt="icon" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

        </>
    )
}
export default Clients