import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 4,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".project__arry-prev",
        nextEl: ".project__arry-next",
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}

function Slider() {
    const [activeTab, setActiveTab] = useState("tab-1");
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const renderTabImage = (tabId, imageSrc) => {
        return (
            <img
                id={tabId}
                className={`tab-img ${activeTab === tabId ? 'active' : ''}`}
                src={imageSrc}
                alt="image"
            />
        );
    };

    return (
        <>

        <section id='home-menu' className="banner-four-area light-area">
            <div className="project__wrp">
                <div className="swiper project__slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide" data-tab="tab-1" onMouseEnter={() => handleTabClick("tab-1")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>01 <sup>/08</sup></span>
                                    <h4>Financial Advices</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-2" onMouseEnter={() => handleTabClick("tab-2")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>02 <sup>/08</sup></span>
                                    <h4>Business Report</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-3" onMouseEnter={() => handleTabClick("tab-3")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>03 <sup>/08</sup></span>
                                    <h4>Startup Plan</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-4" onMouseEnter={() => handleTabClick("tab-4")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>04 <sup>/08</sup></span>
                                    <h4>Investment Plan</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-5" onMouseEnter={() => handleTabClick("tab-5")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>05 <sup>/08</sup></span>
                                    <h4>Visit Home</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-6" onMouseEnter={() => handleTabClick("tab-6")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>06 <sup>/08</sup></span>
                                    <h4>Initial Computer</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-7" onMouseEnter={() => handleTabClick("tab-7")}>
                            <Link href="/page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>07 <sup>/08</sup></span>
                                    <h4>Design Process</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-tab="tab-8" onMouseEnter={() => handleTabClick("tab-8")}>
                            <Link href="page-project-details" className="project__item banner-four__item">
                                <div className="content">
                                    <span>08 <sup>/08</sup></span>
                                    <h4>Assembly Home</h4>
                                    <p className="text">Business reports are designed to provide factual information on specific topics such as performance evaluations,</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="project__slider-arrys">
                    <button className="project__arry-prev"><i className="fa-regular fa-arrow-left" /></button>
                    <button className="project__arry-next"><i className="fa-regular fa-arrow-right" /></button>
                </div>
                <div className="project__image">
                    {renderTabImage("tab-1", "assets/images/project/1.jpg")}
                    {renderTabImage("tab-2", "assets/images/project/2.jpg")}
                    {renderTabImage("tab-3", "assets/images/project/3.jpg")}
                    {renderTabImage("tab-4", "assets/images/project/4.jpg")}
                    {renderTabImage("tab-5", "assets/images/project/5.jpg")}
                    {renderTabImage("tab-6", "assets/images/project/6.jpg")}
                    {renderTabImage("tab-7", "assets/images/project/7.jpg")}
                    {renderTabImage("tab-8", "assets/images/project/8.jpg")}
                </div>
            </div>
        </section>

        </>
    )
}
export default Slider;
