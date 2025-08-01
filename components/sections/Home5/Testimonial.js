import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Link from 'next/link'

const swiperOptions = {
    modules: [Autoplay, Pagination],
    spaceBetween: 50,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".testimonial__dot",
        clickable: true,
    },
};

function Testimonial() {

    return (

        <section className="testimonial-five-area pt-130 pb-130">
            <div className="container">
                <div className="testimonial-five__wrp">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonial-five__image">
                                <img src="assets/images/testimonial/testimonial-five-image.jpg" alt="image" />
                                <div className="image-content">
                                    <h4 className="title">5m+ Trusted <br /> Global Clients</h4>
                                    <div className="users">
                                        <Link href="/"><img src="assets/images/testimonial/testimonial-five-user1.png" alt="image" /></Link>
                                        <Link href="/"><img src="assets/images/testimonial/testimonial-five-user2.png" alt="image" /></Link>
                                        <Link href="/"><img src="assets/images/testimonial/testimonial-five-user3.png" alt="image" /></Link>
                                        <Link className="icon" href="/"><i className="fa-sharp fa-solid fa-plus" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-five-right">
                                <div className="section-header pb-50 mb-50">
                                    <h6>Our Testimonials</h6>
                                    <h2 className="wow splt-txt" data-splitting>1250+ People Say About Our Tech Services</h2>
                                </div>
                                <div className="swiper testimonial-five__slider">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-five__item">
                                                <h4 className="title">
                                                    <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.33333 26.0417C1.25 23.75 0 21.25 0 17.0833C0 9.79167 5.20833 3.33333 12.5 0L14.375 2.70833C7.5 6.45833 6.04167 11.25 5.625 14.375C6.66667 13.75 8.125 13.5417 9.58333 13.75C13.3333 14.1667 16.25 17.0833 16.25 21.0417C16.25 22.9167 15.4167 24.7917 14.1667 26.25C12.7083 27.7083 11.0417 28.3333 8.95833 28.3333C6.66667 28.3333 4.58333 27.2917 3.33333 26.0417ZM24.1667 26.0417C22.0833 23.75 20.8333 21.25 20.8333 17.0833C20.8333 9.79167 26.0417 3.33333 33.3333 0L35.2083 2.70833C28.3333 6.45833 26.875 11.25 26.4583 14.375C27.5 13.75 28.9583 13.5417 30.4167 13.75C34.1667 14.1667 37.0833 17.0833 37.0833 21.0417C37.0833 22.9167 36.25 24.7917 35 26.25C33.75 27.7083 31.875 28.3333 29.7917 28.3333C27.5 28.3333 25.4167 27.2917 24.1667 26.0417Z" fill="#121C27" />
                                                    </svg>
                                                    Robert J. Hare / <span>Graphics Designer</span>
                                                </h4>
                                                <p className="text">Climb the mountain not to plant your flag but to embrace the ways challenge, enjoy the air, and behold the. Climb it see the world, not so the world can see you.</p>
                                                <div className="ratting">
                                                    <img src="assets/images/icon/testi-logo.png" alt="icon" />
                                                    <img src="assets/images/icon/five-star.png" alt="icon" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-five__item">
                                                <h4 className="title">
                                                    <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.33333 26.0417C1.25 23.75 0 21.25 0 17.0833C0 9.79167 5.20833 3.33333 12.5 0L14.375 2.70833C7.5 6.45833 6.04167 11.25 5.625 14.375C6.66667 13.75 8.125 13.5417 9.58333 13.75C13.3333 14.1667 16.25 17.0833 16.25 21.0417C16.25 22.9167 15.4167 24.7917 14.1667 26.25C12.7083 27.7083 11.0417 28.3333 8.95833 28.3333C6.66667 28.3333 4.58333 27.2917 3.33333 26.0417ZM24.1667 26.0417C22.0833 23.75 20.8333 21.25 20.8333 17.0833C20.8333 9.79167 26.0417 3.33333 33.3333 0L35.2083 2.70833C28.3333 6.45833 26.875 11.25 26.4583 14.375C27.5 13.75 28.9583 13.5417 30.4167 13.75C34.1667 14.1667 37.0833 17.0833 37.0833 21.0417C37.0833 22.9167 36.25 24.7917 35 26.25C33.75 27.7083 31.875 28.3333 29.7917 28.3333C27.5 28.3333 25.4167 27.2917 24.1667 26.0417Z" fill="#121C27" />
                                                    </svg>
                                                    Leslie Alexander / <span>CEO & Founder</span>
                                                </h4>
                                                <p className="text">Climb the mountain not to plant your flag but to embrace the ways challenge, enjoy the air, and behold the. Climb it see the world, not so the world can see you.</p>
                                                <div className="ratting">
                                                    <img src="assets/images/icon/testi-logo.png" alt="icon" />
                                                    <img src="assets/images/icon/five-star.png" alt="icon" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-five__item">
                                                <h4 className="title">
                                                    <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.33333 26.0417C1.25 23.75 0 21.25 0 17.0833C0 9.79167 5.20833 3.33333 12.5 0L14.375 2.70833C7.5 6.45833 6.04167 11.25 5.625 14.375C6.66667 13.75 8.125 13.5417 9.58333 13.75C13.3333 14.1667 16.25 17.0833 16.25 21.0417C16.25 22.9167 15.4167 24.7917 14.1667 26.25C12.7083 27.7083 11.0417 28.3333 8.95833 28.3333C6.66667 28.3333 4.58333 27.2917 3.33333 26.0417ZM24.1667 26.0417C22.0833 23.75 20.8333 21.25 20.8333 17.0833C20.8333 9.79167 26.0417 3.33333 33.3333 0L35.2083 2.70833C28.3333 6.45833 26.875 11.25 26.4583 14.375C27.5 13.75 28.9583 13.5417 30.4167 13.75C34.1667 14.1667 37.0833 17.0833 37.0833 21.0417C37.0833 22.9167 36.25 24.7917 35 26.25C33.75 27.7083 31.875 28.3333 29.7917 28.3333C27.5 28.3333 25.4167 27.2917 24.1667 26.0417Z" fill="#121C27" />
                                                    </svg>
                                                    Arlene McCoy / <span>Co-Ordinator</span>
                                                </h4>
                                                <p className="text">Climb the mountain not to plant your flag but to embrace the ways challenge, enjoy the air, and behold the. Climb it see the world, not so the world can see you.</p>
                                                <div className="ratting">
                                                    <img src="assets/images/icon/testi-logo.png" alt="icon" />
                                                    <img src="assets/images/icon/five-star.png" alt="icon" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-five__item">
                                                <h4 className="title">
                                                    <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.33333 26.0417C1.25 23.75 0 21.25 0 17.0833C0 9.79167 5.20833 3.33333 12.5 0L14.375 2.70833C7.5 6.45833 6.04167 11.25 5.625 14.375C6.66667 13.75 8.125 13.5417 9.58333 13.75C13.3333 14.1667 16.25 17.0833 16.25 21.0417C16.25 22.9167 15.4167 24.7917 14.1667 26.25C12.7083 27.7083 11.0417 28.3333 8.95833 28.3333C6.66667 28.3333 4.58333 27.2917 3.33333 26.0417ZM24.1667 26.0417C22.0833 23.75 20.8333 21.25 20.8333 17.0833C20.8333 9.79167 26.0417 3.33333 33.3333 0L35.2083 2.70833C28.3333 6.45833 26.875 11.25 26.4583 14.375C27.5 13.75 28.9583 13.5417 30.4167 13.75C34.1667 14.1667 37.0833 17.0833 37.0833 21.0417C37.0833 22.9167 36.25 24.7917 35 26.25C33.75 27.7083 31.875 28.3333 29.7917 28.3333C27.5 28.3333 25.4167 27.2917 24.1667 26.0417Z" fill="#121C27" />
                                                    </svg>
                                                    Marvin McKinney / <span>Marketing Leader</span>
                                                </h4>
                                                <p className="text">Climb the mountain not to plant your flag but to embrace the ways challenge, enjoy the air, and behold the. Climb it see the world, not so the world can see you.</p>
                                                <div className="ratting">
                                                    <img src="assets/images/icon/testi-logo.png" alt="icon" />
                                                    <img src="assets/images/icon/five-star.png" alt="icon" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="mt-50">
                                        <div className="swiper__dots testimonial__dot" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Testimonial;