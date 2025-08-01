import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
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
    spaceBetween: 30,
	speed: 1000,
    navigation:{
        clickable: true,
        prevEl: ".professional-seven__arry-prev",
        nextEl: ".professional-seven__arry-next",
    },
    loop: true,
};


function Professional() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <section className="professional-seven-area pb-130 light-area">
            <div className="professional-seven__wrp">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="professional-seven__image">
                            <div className="swiper professional-seven__slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <img src="assets/images/professional/professional-seven-image1.jpg" alt="image" />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <img src="assets/images/professional/professional-seven-image2.jpg" alt="image" />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <img src="assets/images/professional/professional-seven-image3.jpg" alt="image" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="icon">
                                <svg className="animation__rotate" width="182" height="191" viewBox="0 0 182 191"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_1349_4619)">
                                        <g clipPath="url(#clip0_1349_4619)">
                                            <path
                                                d="M179.409 65.3278C179.409 52.6335 165.852 32.8646 162.92 29.2018C144.796 10.3862 120.76 0 95.1847 0C46.8718 0 6.77901 37.3804 0.0488281 85.8495C12.1314 72.5112 20.5279 60.1598 33.4114 56.5472C54.7557 50.5764 79.3209 61.7653 106.386 89.7628C106.674 90.0641 106.963 90.3653 107.299 90.6659L108.213 91.6693C115.857 101.504 127.202 107.123 139.316 107.123C161.429 107.123 179.409 88.3579 179.409 65.3278Z"
                                                fill="white" fillOpacity="0.49" />
                                        </g>
                                        <path
                                            d="M46.5038 64.2246C20.6229 69.1968 7.41288 95.3008 4.04297 107.731C9.43483 136.736 35.5853 193.916 97.0525 190.601C64.7014 183.972 66.0493 133.973 70.7672 109.803C56.2092 101.516 48.5258 75.9645 46.5038 64.2246Z"
                                            fill="white" fillOpacity="0.49" />
                                        <path
                                            d="M79.3695 120.564C97.2175 134.439 140.246 158.154 173.887 145.023C94.6266 214.634 77.8502 157.722 79.3695 120.564Z"
                                            fill="white" fillOpacity="0.49" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_1349_4619" x="-20" y="-20" width="221.975" height="230.74"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                            <feComposite in2="SourceAlpha" operator="in"
                                                result="effect1_backgroundBlur_1349_4619" />
                                            <feBlend mode="normal" in="SourceGraphic"
                                                in2="effect1_backgroundBlur_1349_4619" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_1349_4619">
                                            <rect width="181.975" height="107.731" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="professional-seven__content">
                            <div className="section-header">
                                <h6 className="text-white">BUSINESS BOOK</h6>
                                <h2 className="wow splt-txt text-white" data-splitting>Your source of personal inspiration.
                                </h2>
                                <p className="wow fadeInUp text" data-wow-delay="00ms" data-wow-duration="1500ms">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                            </div>
                            <div className="arry-group mt-50 d-flex gap-2 wow fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <button className="professional-seven__arry-prev"><i
                                        className="fa-regular fa-angle-left"></i></button>
                                <button className="professional-seven__arry-next"><i
                                        className="fa-regular fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="professional-seven__video pt-130">
                <div className="row g-4 justify-content-between">
                    <div className="col-lg-7">
                        <div className="section-header">
                            <h6 className="text-white">DESIGN AGENCY</h6>
                            <h2 className="wow splt-txt text-white" data-splitting>We solve business solutions customized
                                for modern
                                brands.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="btn-video video-pulse">
                            <a onClick={() => setOpen(true)} className="video-popup"><i className="fa-sharp fa-light fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="professional-seven__shape">
                <img src="assets/images/shape/professtion-seven-shape.png" alt="shape" />
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UalTfOIDQ7M" onClose={() => setOpen(false)} />

        </>
    )
}
export default Professional;
