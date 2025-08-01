import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 2,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".testimonial__arry-prev",
        nextEl: ".testimonial__arry-next",
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
};

function Testimonial() {
    return (
        <>

        <section className="testimonial-area bg-sub pt-130 pb-130">
            <div className="testimonial__shape">
                <img src="assets/images/shape/testimonial-shape.png" alt="shape" />
            </div>
            <div className="testimonial__image animation__arryLeftRight">
                <img className="wow bounceInRight" src="assets/images/testimonial/testimonial-image.png" alt="image" />
            </div>
            <div className="container">
                <div className="testimonial__wrp">
                    <div className="section-header mb-50">
                        <h6>30 Years of Growing Together with Our Clients</h6>
                        <h2 className="wow splt-txt" data-splitting>Scale, grow, and optimize as <br /> quickly as you need to.</h2>
                    </div>
                    <div className="row g-5 g-lg-4 align-items-end">
                        <div className="col-lg-9 col-xxl-8">
                            <div className="swiper testimonial__slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial__item">
                                            <div className="icon">
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_356_27918)">
                                                        <path
                                                            d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                        <path
                                                            d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="27" height="25" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <p>It’s a great experience with centres through Stratify. We hired my own remote team and I have complete control over the team which means working from home anywhere</p>
                                            <div className="info">
                                                <h4>Brooklyn Simmons</h4>
                                                <span>Developer, Stratify</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial__item">
                                            <div className="icon">
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_356_27918)">                                                        
                                                        <path
                                                            d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                        <path
                                                            d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="27" height="25" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <p>Partnering with Stratify has been great. I hired my remote team and have full control, allowing for flexible work from anywhere and getting great results.</p>
                                            <div className="info">
                                                <h4>Leslie Alexander</h4>
                                                <span>Developer, Stratify</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial__item">
                                            <div className="icon">
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_356_27918)">
                                                        <path
                                                            d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                        <path
                                                            d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="27" height="25" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <p>It’s a great experience with centres through Stratify. We hired my own remote team and I have complete control over the team which means working from home anywhere</p>
                                            <div className="info">
                                                <h4>Savannah Nguyen</h4>
                                                <span>Developer, Stratify</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial__item">
                                            <div className="icon">
                                                <svg width="27" height="25" viewBox="0 0 27 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_356_27918)">
                                                        <path
                                                            d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                        <path
                                                            d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                                            stroke="white" strokeWidth="3" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="27" height="25" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <p>Partnering with Stratify has been great. I hired my remote team and have full control, allowing for flexible work from anywhere and getting great results.</p>
                                            <div className="info">
                                                <h4>Ronald Richards</h4>
                                                <span>Developer, Stratify</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xxl-2">
                            <div className="testimonial__review">
                                <h5>Average Rating</h5>
                                <h2>4.9</h2>
                                <div className="star">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                </div>
                                <h5>(30+) Customer <br /> reviews</h5>
                                <div className="testimonial__slider-arry">
                                    <button className="arry-prev testimonial__arry-prev"><i className="fa-light fa-arrow-left-long" /></button>
                                    <button className="arry-next testimonial__arry-next"><i className="fa-light fa-arrow-right-long" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Testimonial