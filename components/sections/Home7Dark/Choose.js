import React from 'react';
import Link from 'next/link';
import ProgressBar from '../../elements/ProgressBar2';
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
        prevEl: ".testimonial__arry-prev",
        nextEl: ".testimonial__arry-next",
    },
    loop: true,
};


function Choose() {

    return (
        <>

        <section className="choose-seven-area">
            <div className="row g-0">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="choose-seven__wrp">
                        <div className="wrp">
                            <div className="section-header">
                                <h6>WHY WE ARE BEST</h6>
                                <h2 className="wow splt-txt" data-splitting>The Core Company Values</h2>
                                <p>We are continually growing, learning, and improving, and our steadily expanding.
                                    Completing
                                    200 projects is a
                                    significant milestone.</p>
                            </div>
                            <ProgressBar title="Project Complete" count={55} duration={0.55} />
                            <ProgressBar title="Happy Clients" count={93} duration={0.95} />
                            <ProgressBar title="Our Company Growth" count={67} duration={0.60} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <div className="choose-seven__image">
                        <img src="assets/images/choose/choose-seven-image1.jpg" alt="image" />
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="choose-seven__image">
                        <img src="assets/images/choose/choose-seven-image2.jpg" alt="image" />
                        <div className="icon">
                            <svg className="animation__rotate" width="154" height="161" viewBox="0 0 154 161" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_1349_5060)">
                                    <g clipPath="url(#clip0_1349_5060)">
                                        <path
                                            d="M151.19 55.0528C151.19 44.3552 139.766 27.6956 137.295 24.6089C122.022 8.75266 101.766 0 80.2137 0C39.4995 0 5.71265 31.5011 0.0410156 72.3468C10.2232 61.1064 17.299 50.6976 28.1562 47.6533C46.1434 42.6215 66.8449 52.0507 89.6528 75.6446C89.8961 75.8985 90.1394 76.1524 90.4228 76.4057L91.1927 77.2513C97.6341 85.539 107.195 90.2746 117.403 90.2746C136.039 90.2746 151.19 74.4607 151.19 55.0528Z"
                                            fill="white" fillOpacity="0.49" />
                                    </g>
                                    <path
                                        d="M39.1907 54.123C17.3804 58.3132 6.24808 80.3115 3.4082 90.7869C7.95201 115.229 29.9895 163.416 81.7889 160.623C54.5261 155.036 55.662 112.902 59.6378 92.5328C47.3696 85.5492 40.8946 64.0165 39.1907 54.123Z"
                                        fill="white" fillOpacity="0.49" />
                                    <path
                                        d="M66.8863 101.601C81.9271 113.293 118.188 133.279 146.538 122.212C79.7438 180.875 65.6059 132.914 66.8863 101.601Z"
                                        fill="white" fillOpacity="0.49" />
                                </g>
                                <defs>
                                    <filter id="filter0_b_1349_5060" x="-20" y="-20" width="193.354" height="200.739"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                        <feComposite in2="SourceAlpha" operator="in"
                                            result="effect1_backgroundBlur_1349_5060" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1349_5060"
                                            result="shape" />
                                    </filter>
                                    <clipPath id="clip0_1349_5060">
                                        <rect width="153.354" height="90.7867" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="choose-seven__wrp">
                        <div className="wrp">
                            <div className="section-header mb-30">
                                <h6>TESTIMONIALS</h6>
                                <h2 className="wow splt-txt" data-splitting>What People Are Saying</h2>
                            </div>
                            <div className="swiper testimonial-seven__slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-three__item">
                                            <img src="assets/images/icon/five-star.png" alt="icon" />
                                            <p>We've had negative experiences with call centres through Stratify, so I
                                                decided
                                                to build my
                                                own
                                                remote team. Now, I have
                                                full control over the team, allowing
                                                them to work from home, no matter where they are located.</p>
                                            <div className="info">
                                                <h5>Cameron Williamson</h5>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-three__item">
                                            <img src="assets/images/icon/five-star.png" alt="icon" />
                                            <p>We've had negative experiences with call centres through Stratify, so I
                                                decided
                                                to build my
                                                own
                                                remote team. Now, I have
                                                full control over the team, allowing
                                                them to work from home, no matter where they are located.</p>
                                            <div className="info">
                                                <h5>Ronald Richards</h5>
                                                <span>Web Desgner</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-three__item">
                                            <img src="assets/images/icon/five-star.png" alt="icon" />
                                            <p>We've had negative experiences with call centres through Stratify, so I
                                                decided
                                                to build my
                                                own
                                                remote team. Now, I have
                                                full control over the team, allowing
                                                them to work from home, no matter where they are located.</p>
                                            <div className="info">
                                                <h5>Savannah Nguyen</h5>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-three__item">
                                            <img src="assets/images/icon/five-star.png" alt="icon" />
                                            <p>We've had negative experiences with call centres through Stratify, so I
                                                decided
                                                to build my
                                                own
                                                remote team. Now, I have
                                                full control over the team, allowing
                                                them to work from home, no matter where they are located.</p>
                                            <div className="info">
                                                <h5>Cameron Williamson</h5>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-three__item">
                                            <img src="assets/images/icon/five-star.png" alt="icon" />
                                            <p>We've had negative experiences with call centres through Stratify, so I
                                                decided
                                                to build my
                                                own
                                                remote team. Now, I have
                                                full control over the team, allowing
                                                them to work from home, no matter where they are located.</p>
                                            <div className="info">
                                                <h5>Leslie Alexander</h5>
                                                <span>Web Desgner</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-three__item">
                                            <img src="assets/images/icon/five-star.png" alt="icon" />
                                            <p>We've had negative experiences with call centres through Stratify, so I
                                                decided
                                                to build my
                                                own
                                                remote team. Now, I have
                                                full control over the team, allowing
                                                them to work from home, no matter where they are located.</p>
                                            <div className="info">
                                                <h5>Brooklyn Simmons</h5>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="slider-arry">
                                <button className="arry-prev testimonial__arry-prev text-white"><i className="fa-light fa-arrow-left-long" /></button>
                                <button className="arry-next testimonial__arry-next text-white"><i className="fa-light fa-arrow-right-long" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="choose-seven__wrp">
                        <div className="wrp">
                            <div className="section-header mb-50">
                                <h6>Strategic</h6>
                                <h2 className="wow splt-txt" data-splitting>Strategic Investment Plan
                                    Tailored to Your Goals</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-sm-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="item">
                                        <svg width="51" height="49" viewBox="0 0 51 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1349_5044)">
                                                <path d="M9.22461 0.532227H50.4587V39.9453H9.22461V0.532227Z"
                                                    stroke="white" />
                                                <path d="M0.542969 7.98828H41.777V48.4665H0.542969V7.98828Z"
                                                    stroke="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1349_5044">
                                                    <rect width="51" height="49" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h4 className="my-3"><Link href="/page-service-details" className="hover-link">Business Strategies</Link></h4>
                                        <p>Personalized financial plans tailored <br /> to individual or business needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="item">
                                        <svg width="59" height="50" viewBox="0 0 59 50" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1349_5052)">
                                                <path
                                                    d="M35.7307 0.420898C40.2511 0.420898 44.67 1.77799 48.4286 4.32056C52.1872 6.86313 55.1167 10.477 56.8466 14.7051C58.5764 18.9333 59.0291 23.5858 58.1472 28.0743C57.2653 32.5629 55.0885 36.6859 51.8921 39.922C48.6956 43.1581 44.6232 45.3619 40.1896 46.2547C35.756 47.1475 31.1605 46.6893 26.9842 44.938C22.8079 43.1866 19.2383 40.2208 16.7269 36.4156C14.2155 32.6103 12.875 28.1366 12.875 23.5601C12.875 17.4232 15.283 11.5377 19.5693 7.19822C23.8555 2.85877 29.669 0.420898 35.7307 0.420898Z"
                                                    stroke="white" />
                                                <path
                                                    d="M23.2717 3.30176C27.7921 3.30176 32.211 4.65885 35.9696 7.20142C39.7282 9.74399 42.6577 13.3578 44.3876 17.586C46.1175 21.8141 46.5701 26.4666 45.6882 30.9552C44.8063 35.4438 42.6295 39.5668 39.4331 42.8029C36.2367 46.0389 32.1642 48.2427 27.7306 49.1356C23.297 50.0284 18.7015 49.5702 14.5252 47.8188C10.3489 46.0675 6.7793 43.1016 4.26789 39.2964C1.75648 35.4912 0.416016 31.0175 0.416016 26.441C0.416016 20.3041 2.82402 14.4185 7.11029 10.0791C11.3966 5.73963 17.21 3.30176 23.2717 3.30176Z"
                                                    stroke="white" />
                                                <path d="M29.9324 14.8564L38.6215 24.1057H12.9785" stroke="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1349_5052">
                                                    <rect width="59" height="50" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <h4 className="my-3"><Link href="/page-service-details" className="hover-link">Business Plan </Link></h4>
                                        <p>Personalized financial plans tailored <br /> to individual or business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact" className="btn-one dark-mode mt-50 wow fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <div className="choose-seven__image">
                        <img src="assets/images/choose/choose-seven-image3.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Choose;
