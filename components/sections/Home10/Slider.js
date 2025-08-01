import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Link from 'next/link';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

const slides = [
    {
        id: 1,
        image: 'assets/images/banner/banner-ten-image1.jpg',
        subtitle: "Welcome to Stratify",
        title: "Empower Your Business with Smart Digital Solutions",
        description: "We craft powerful strategies that transform your vision into reality. Let’s elevate your brand to new heights together.",
    },
    {
        id: 2,
        image: 'assets/images/banner/banner-ten-image2.jpg',
        subtitle: "Boost Your Reach",
        title: "Accelerate Growth with Proven Marketing Tactics",
        description: "Our creative team delivers fresh ideas and dynamic campaigns that drive measurable success for your business.",
    },
    {
        id: 3,
        image: 'assets/images/banner/banner-ten-image3.jpg',
        subtitle: "Let’s Build Success",
        title: "Partner with Experts to Lead Your Industry",
        description: "Join forces with our experienced professionals to dominate your market and build lasting client relationships.",
    },
];

function Slider() {
    const [isOpen, setOpen] = useState(false);
    const handleOpenVideo = () => setOpen(true);

    return (
        <>
            <section id='home-menu' className="banner-ten-area">
                <div className="swiper banner-ten__slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        {slides.map(slide => (
                        <SwiperSlide key={slide.id} className="swiper-slide">
                            <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
                            <div className="banner-ten__content">
                                <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">
                                    {slide.subtitle}
                                </h5>
                                <h1 className="title" data-animation="fadeInUp" data-delay=".3s">
                                    {slide.title}
                                </h1>
                                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                                    {slide.description}
                                </p>
                                <div className="btns mt-40">
                                    <Link href="/page-about" passHref className="btn-one" data-splitting data-animation="fadeInUp" data-delay=".8s">Get Started <i className="fa-regular fs-14 fa-angle-right" /></Link>
                                    <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                        <button type="button" onClick={handleOpenVideo} className="video-popup">
                                            <i className="fa-solid fa-play" />
                                        </button>
                                        <h5>Watch Our Story</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UalTfOIDQ7M" onClose={() => setOpen(false)} />
        </>
    );
}

export default Slider;
