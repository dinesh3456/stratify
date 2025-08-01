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

function Projects() {
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
            <section className="project-area pt-130">
                <div className="container">
                    <div className="section-header__flex mb-50">
                        <div>
                            <h6>HOW WE WORKS</h6>
                            <h2 className="wow splt-txt" data-splitting>4 Easy Steps to Achieve <br /> Your Business Goal</h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className="project__wrp light-area">
                    <div className="swiper project__slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide" data-tab="tab-1" onMouseEnter={() => handleTabClick("tab-1")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>01</span>
                                        <h4>We’ll Visit You <br /> at Home</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-2" onMouseEnter={() => handleTabClick("tab-2")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>02</span>
                                        <h4>Initial computer <br /> Designs</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-3" onMouseEnter={() => handleTabClick("tab-3")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>03</span>
                                        <h4>Start the in-depth <br /> design process</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-4" onMouseEnter={() => handleTabClick("tab-4")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>04</span>
                                        <h4>Assembly <br /> Home</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-5" onMouseEnter={() => handleTabClick("tab-5")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>05</span>
                                        <h4>We’ll Visit You <br /> at Home</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-6" onMouseEnter={() => handleTabClick("tab-6")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>06</span>
                                        <h4>Initial computer <br /> Designs</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-7" onMouseEnter={() => handleTabClick("tab-7")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>07</span>
                                        <h4>Start the in-depth <br /> design process</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" data-tab="tab-8" onMouseEnter={() => handleTabClick("tab-8")}>
                                <Link href="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>08</span>
                                        <h4>Assembly Home</h4>
                                        <p>We specialize in serving industries like healthcare, Computer Design.</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="project__slider-arrys">
                        <button className="project__arry-prev"><i className="fa-regular fa-arrow-left"></i></button>
                        <button className="project__arry-next"><i className="fa-regular fa-arrow-right"></i></button>
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
    );
}
export default Projects;
