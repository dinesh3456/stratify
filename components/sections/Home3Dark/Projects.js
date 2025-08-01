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
            
        <section className="project-three-area pt-130">
            <div className="project-three__wrp">
                <div className="section-header text-center mb-50">
                    <h6>LATEST PROJECT</h6>
                    <h2 className="wow splt-txt" data-splitting>Unique Ideas For Your <br />Business Project</h2>
                </div>

                <div className="row g-4 light-area">
                    <div className="col-lg-6 col-xl-4">
                        <div className="project-three__item">
                            <div className="project-three__content">
                                <div className="shape">
                                    <img src="assets/images/shape/project-three-item-shape.png" alt="shape" />
                                </div>
                                <div className="icon">
                                    <svg width="61" height="50" viewBox="0 0 61 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_356_27101)">
                                            <path
                                                d="M30.6228 50.0005C30.4122 50.0005 30.2071 49.9106 30.0574 49.7476L0.211536 16.9406C-0.0212888 16.6821 -0.0656364 16.2944 0.10621 15.991L7.82822 2.05688C7.96681 1.80966 8.2218 1.65234 8.49898 1.65234H12.5568C12.9836 1.65234 13.3329 2.01193 13.3329 2.4558C13.3329 2.89967 12.9836 3.25927 12.5568 3.25927H8.948L1.73598 16.272L30.6228 48.0227L59.2547 16.2944L51.2223 3.26488H30.5009C30.074 3.26488 29.7248 2.90529 29.7248 2.46142C29.7248 2.01755 30.074 1.65796 30.5009 1.65796H51.6436C51.9096 1.65796 52.1536 1.79843 52.2977 2.02879L60.8789 15.9629C61.0674 16.272 61.0341 16.6765 60.7902 16.9406L31.1883 49.7476C31.0386 49.9106 30.8335 50.0005 30.6228 50.0005Z"
                                                fill="white" />
                                            <path
                                                d="M43.6159 35.599C43.4164 35.599 43.2168 35.5203 43.0671 35.363L12.2512 3.02228C11.9518 2.70764 11.9518 2.19634 12.2567 1.88732C12.5616 1.5783 13.0494 1.5783 13.3543 1.89294L44.1647 34.2337C44.4641 34.5483 44.4641 35.0596 44.1592 35.3686C44.0095 35.5203 43.8155 35.599 43.6159 35.599Z"
                                                fill="white" />
                                            <path
                                                d="M24.841 6.42231C23.1336 6.42231 21.7422 4.98395 21.7422 3.21408C21.7422 1.44422 23.1336 0.00585938 24.841 0.00585938C26.5483 0.00585938 27.9398 1.44422 27.9398 3.21408C27.9453 4.98395 26.5539 6.42231 24.841 6.42231ZM24.841 1.60716C23.9873 1.60716 23.2888 2.32634 23.2888 3.21408C23.2888 4.10183 23.9817 4.82101 24.841 4.82101C25.6947 4.82101 26.3931 4.10183 26.3931 3.21408C26.3931 2.32634 25.7002 1.60716 24.841 1.60716Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="61" height="50" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4>.01</h4>
                                    <h4><Link className="hover-link-light" href="/page-project-details">Marketing strategy</Link></h4>
                                    <p className="mt-15 mb-25">Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.</p>
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-up-right" /></Link>
                                </div>
                            </div>
                            <div className="image">
                                <img src="assets/images/project/project-three-image1.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="project-three__item">
                            <div className="project-three__content">
                                <div className="shape">
                                    <img src="assets/images/shape/project-three-item-shape.png" alt="shape" />
                                </div>
                                <div className="icon">
                                    <svg width="69" height="56" viewBox="0 0 69 56" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_356_27124)">
                                            <path
                                                d="M27.2352 56C27.0256 56 26.8217 55.9145 26.6744 55.7606L0.232247 28.5785C0.0849684 28.4246 0 28.2137 0 28.0028C0 27.7863 0.0849684 27.5811 0.232247 27.4272L26.6744 0.239389C26.986 -0.0797964 27.4844 -0.0797964 27.796 0.239389L54.2382 27.4272C54.5497 27.7464 54.5497 28.2593 54.2382 28.5785L27.796 55.7663C27.643 55.9145 27.4448 56 27.2352 56ZM1.91462 28.0028L27.2352 54.0393L52.5558 28.0028L27.2352 1.96641L1.91462 28.0028Z"
                                                fill="white" />
                                            <path
                                                d="M47.7187 49.878C47.5148 49.878 47.3109 49.7982 47.1579 49.6386L40.2811 42.571C39.9696 42.2518 39.9696 41.7388 40.2811 41.4196C40.5927 41.1004 41.0912 41.1004 41.4027 41.4196L47.7187 47.9116L67.0858 27.9967L47.7187 8.08751L27.7908 28.5781C27.4792 28.8973 26.9808 28.8973 26.6692 28.5781C26.3577 28.2589 26.3577 27.7459 26.6692 27.4267L47.1579 6.36048C47.4695 6.0413 47.968 6.0413 48.2795 6.36048L68.7682 27.4267C69.0798 27.7459 69.0798 28.2589 68.7682 28.5781L48.2795 49.6386C48.1266 49.7982 47.9226 49.878 47.7187 49.878Z"
                                                fill="white" />
                                            <path
                                                d="M22.1431 36.4896C20.3984 36.4896 18.9766 35.0304 18.9766 33.235C18.9766 31.4396 20.3984 29.9805 22.1431 29.9805C23.8877 29.9805 25.3095 31.4396 25.3095 33.235C25.3095 35.0304 23.8934 36.4896 22.1431 36.4896ZM22.1431 31.6049C21.2707 31.6049 20.557 32.3345 20.557 33.235C20.557 34.1356 21.265 34.8652 22.1431 34.8652C23.0211 34.8652 23.7291 34.1356 23.7291 33.235C23.7291 32.3345 23.0154 31.6049 22.1431 31.6049Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="69" height="56" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4>.02</h4>
                                    <h4><Link className="hover-link-light" href="/page-project-details">Brand Identity</Link> </h4>
                                    <p className="mt-15 mb-25">Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.</p>
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-up-right" /></Link>
                                </div>
                            </div>
                            <div className="image">
                                <img src="assets/images/project/project-three-image2.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="project-three__item">
                            <div className="project-three__content">
                                <div className="shape">
                                    <img src="assets/images/shape/project-three-item-shape.png" alt="shape" />
                                </div>
                                <div className="icon">
                                    <svg width="60" height="61" viewBox="0 0 60 61" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_356_27134)">
                                            <path
                                                d="M30.0304 60.9993C29.8546 60.9993 29.6839 60.9273 29.5598 60.8038L0.195885 30.947C-0.0626909 30.6846 -0.0626909 30.2575 0.195885 29.9951L29.5029 0.194846C29.7615 -0.0675528 30.1804 -0.0675528 30.4389 0.194846L59.808 30.0517C60.0666 30.3141 60.0666 30.7412 59.808 31.0036L30.501 60.7987C30.3717 60.9273 30.2062 60.9993 30.0304 60.9993ZM1.59737 30.4685L30.0252 59.3735L58.3962 30.5302L29.9735 1.62518L1.59737 30.4685Z"
                                                fill="white" />
                                            <path
                                                d="M29.4886 43.707C29.3179 43.707 29.1472 43.6401 29.0179 43.5115L18.9283 33.2522C18.6697 32.9898 18.6697 32.5627 18.9283 32.3003L26.396 24.7062C26.6546 24.4438 27.0735 24.4438 27.332 24.7062C27.5906 24.9686 27.5906 25.3957 27.332 25.6581L20.335 32.7788L29.4886 42.0811L50.0971 21.1304C50.3557 20.868 50.7745 20.868 51.0331 21.1304C51.2917 21.3928 51.2917 21.8198 51.0331 22.0822L29.9592 43.5115C29.8299 43.6401 29.6592 43.707 29.4886 43.707Z"
                                                fill="white" />
                                            <path
                                                d="M30.4025 23.8978C29.8232 23.8978 29.2389 23.6714 28.7941 23.2238C27.9098 22.3234 27.9098 20.8622 28.7941 19.9618C29.6784 19.0614 31.1213 19.0665 32.0056 19.9669C32.4349 20.4043 32.6727 20.9805 32.6727 21.5979C32.6727 22.2153 32.44 22.7967 32.0108 23.2289C31.5609 23.6714 30.9817 23.8978 30.4025 23.8978ZM30.3973 20.6306C30.1542 20.6306 29.9163 20.7233 29.7302 20.9085C29.363 21.2841 29.363 21.8912 29.7353 22.2668C30.1025 22.6424 30.7024 22.6424 31.0696 22.2668C31.2454 22.0867 31.3437 21.8449 31.3437 21.5876C31.3437 21.3304 31.2454 21.0886 31.0644 20.9085C30.8782 20.7284 30.6352 20.6306 30.3973 20.6306Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="60" height="61" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4>.03</h4>
                                    <h4><Link className="hover-link-light" href="/page-project-details">Visual Design</Link></h4>
                                    <p className="mt-15 mb-25">Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.</p>
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-up-right" /></Link>
                                </div>
                            </div>
                            <div className="image">
                                <img src="assets/images/project/project-three-image3.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default Projects;
