import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
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
    navigation: {
        clickable: true,
        prevEl: ".testimonial__arry-prev",
        nextEl: ".testimonial__arry-next",
    },
    breakpoints: {
        320: { slidesPerView: 2 },
        425: { slidesPerView: 3 },
        800: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1900: { slidesPerView: 6 },
    },
};

// Single source array (so no duplication)
const brandImages = [
    "brand-image1.png",
    "brand-image2.png",
    "brand-image3.png",
    "brand-image4.png",
    "brand-image5.png",
    "brand-image6.png",
];

function Clients() {
    return (
        <div className="marqueeSwiper-area brand-two-area pt-100 pb-100">
            <div className="container">
                <div className="swiper marqueeSwiper__slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        {/* Map brand images twice to create looping effect */}
                        {brandImages.concat(brandImages).map((imgName, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={`/assets/images/brand/${imgName}`} alt={`Brand ${index + 1}`}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Clients;
