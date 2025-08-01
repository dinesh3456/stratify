import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    spaceBetween: 30,
    slidesPerView:3,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

function Testimonial() {

    return (
        <>

        <section className="testimonial-twelve-area pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>OUR Clients</h6>
                    <h2 className="wow splt-txt" data-splitting>Thousands of satisfied <br /> customers said</h2>
                </div>
                <div className="testimonial-twelve__wrp">
                    <div className="swiper testimonial-twelve__slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-twelve__item">
                                    <div className="coma">
                                        <svg width="48" height="37" viewBox="0 0 48 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.26667 33.2108C1.6 30.2883 0 27.1 0 21.7863C0 12.4873 6.66667 4.25098 16 0L18.4 3.45392C9.6 8.23628 7.73333 14.3471 7.2 18.3324C8.53333 17.5353 10.4 17.2696 12.2667 17.5353C17.0667 18.0667 20.8 21.7863 20.8 26.8343C20.8 29.2255 19.7333 31.6167 18.1333 33.4765C16.2667 35.3363 14.1333 36.1334 11.4667 36.1334C8.53333 36.1334 5.86667 34.8049 4.26667 33.2108ZM30.9333 33.2108C28.2667 30.2883 26.6667 27.1 26.6667 21.7863C26.6667 12.4873 33.3333 4.25098 42.6667 0L45.0667 3.45392C36.2667 8.23628 34.4 14.3471 33.8667 18.3324C35.2 17.5353 37.0667 17.2696 38.9333 17.5353C43.7333 18.0667 47.4667 21.7863 47.4667 26.8343C47.4667 29.2255 46.4 31.6167 44.8 33.4765C43.2 35.3363 40.8 36.1334 38.1333 36.1334C35.2 36.1334 32.5333 34.8049 30.9333 33.2108Z"
                                                fill="#121C27" />
                                        </svg>
                                    </div>
                                    <p className="text">“Working with stratify has been a
                                        game-changer for our business. Their
                                        strategic insights and tailored solutions
                                        have streamlined our operations and
                                        significantly boosted our efficiency. We
                                        couldn’t be happier with the results.”</p>
                                    <div className="info">
                                        <img src="assets/images/testimonial/testimonial-twelve-image1.png" alt="imag" />
                                        <div>
                                            <h5>Bradly Gordon</h5>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <img src="assets/images/brand/nexflix.png" alt="icon" />
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-twelve__item">
                                    <div className="coma">
                                        <svg width="48" height="37" viewBox="0 0 48 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.26667 33.2108C1.6 30.2883 0 27.1 0 21.7863C0 12.4873 6.66667 4.25098 16 0L18.4 3.45392C9.6 8.23628 7.73333 14.3471 7.2 18.3324C8.53333 17.5353 10.4 17.2696 12.2667 17.5353C17.0667 18.0667 20.8 21.7863 20.8 26.8343C20.8 29.2255 19.7333 31.6167 18.1333 33.4765C16.2667 35.3363 14.1333 36.1334 11.4667 36.1334C8.53333 36.1334 5.86667 34.8049 4.26667 33.2108ZM30.9333 33.2108C28.2667 30.2883 26.6667 27.1 26.6667 21.7863C26.6667 12.4873 33.3333 4.25098 42.6667 0L45.0667 3.45392C36.2667 8.23628 34.4 14.3471 33.8667 18.3324C35.2 17.5353 37.0667 17.2696 38.9333 17.5353C43.7333 18.0667 47.4667 21.7863 47.4667 26.8343C47.4667 29.2255 46.4 31.6167 44.8 33.4765C43.2 35.3363 40.8 36.1334 38.1333 36.1334C35.2 36.1334 32.5333 34.8049 30.9333 33.2108Z"
                                                fill="#121C27" />
                                        </svg>
                                    </div>
                                    <p className="text">“Collaborating with Stratify has transformed our business. Their
                                        strategic insights and customized solutions have
                                        optimized our operations and greatly enhanced our efficiency. We are thrilled
                                        with
                                        the results!”</p>
                                    <div className="info">
                                        <img src="assets/images/testimonial/testimonial-twelve-image2.png" alt="imag" />
                                        <div>
                                            <h5>Brooklyn Simmons</h5>
                                            <span>Dog Trainer</span>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <img src="assets/images/brand/shopify.png" alt="icon" />
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-twelve__item">
                                    <div className="coma">
                                        <svg width="48" height="37" viewBox="0 0 48 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.26667 33.2108C1.6 30.2883 0 27.1 0 21.7863C0 12.4873 6.66667 4.25098 16 0L18.4 3.45392C9.6 8.23628 7.73333 14.3471 7.2 18.3324C8.53333 17.5353 10.4 17.2696 12.2667 17.5353C17.0667 18.0667 20.8 21.7863 20.8 26.8343C20.8 29.2255 19.7333 31.6167 18.1333 33.4765C16.2667 35.3363 14.1333 36.1334 11.4667 36.1334C8.53333 36.1334 5.86667 34.8049 4.26667 33.2108ZM30.9333 33.2108C28.2667 30.2883 26.6667 27.1 26.6667 21.7863C26.6667 12.4873 33.3333 4.25098 42.6667 0L45.0667 3.45392C36.2667 8.23628 34.4 14.3471 33.8667 18.3324C35.2 17.5353 37.0667 17.2696 38.9333 17.5353C43.7333 18.0667 47.4667 21.7863 47.4667 26.8343C47.4667 29.2255 46.4 31.6167 44.8 33.4765C43.2 35.3363 40.8 36.1334 38.1333 36.1334C35.2 36.1334 32.5333 34.8049 30.9333 33.2108Z"
                                                fill="#121C27" />
                                        </svg>
                                    </div>
                                    <p className="text">“Partnering with Stratify has been a pivotal moment for our
                                        business.
                                        Their strategic expertise and personalized
                                        solutions have improved our operations and significantly increased our
                                        efficiency.
                                        We couldn’t be more</p>
                                    <div className="info">
                                        <img src="assets/images/testimonial/testimonial-twelve-image3.png" alt="imag" />
                                        <div>
                                            <h5>Jane Cooper</h5>
                                            <span>Web Designerr</span>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <img src="assets/images/brand/spotify.png" alt="icon" />
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-twelve__item">
                                    <div className="coma">
                                        <svg width="48" height="37" viewBox="0 0 48 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.26667 33.2108C1.6 30.2883 0 27.1 0 21.7863C0 12.4873 6.66667 4.25098 16 0L18.4 3.45392C9.6 8.23628 7.73333 14.3471 7.2 18.3324C8.53333 17.5353 10.4 17.2696 12.2667 17.5353C17.0667 18.0667 20.8 21.7863 20.8 26.8343C20.8 29.2255 19.7333 31.6167 18.1333 33.4765C16.2667 35.3363 14.1333 36.1334 11.4667 36.1334C8.53333 36.1334 5.86667 34.8049 4.26667 33.2108ZM30.9333 33.2108C28.2667 30.2883 26.6667 27.1 26.6667 21.7863C26.6667 12.4873 33.3333 4.25098 42.6667 0L45.0667 3.45392C36.2667 8.23628 34.4 14.3471 33.8667 18.3324C35.2 17.5353 37.0667 17.2696 38.9333 17.5353C43.7333 18.0667 47.4667 21.7863 47.4667 26.8343C47.4667 29.2255 46.4 31.6167 44.8 33.4765C43.2 35.3363 40.8 36.1334 38.1333 36.1334C35.2 36.1334 32.5333 34.8049 30.9333 33.2108Z"
                                                fill="#121C27" />
                                        </svg>
                                    </div>
                                    <p className="text">“Working with stratify has been a
                                        game-changer for our business. Their
                                        strategic insights and tailored solutions
                                        have streamlined our operations and
                                        significantly boosted our efficiency. We
                                        couldn’t be happier with the results.”</p>
                                    <div className="info">
                                        <img src="assets/images/testimonial/testimonial-twelve-image1.png" alt="imag" />
                                        <div>
                                            <h5>Bradly Gordon</h5>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <img src="assets/images/brand/nexflix.png" alt="icon" />
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-twelve__item">
                                    <div className="coma">
                                        <svg width="48" height="37" viewBox="0 0 48 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.26667 33.2108C1.6 30.2883 0 27.1 0 21.7863C0 12.4873 6.66667 4.25098 16 0L18.4 3.45392C9.6 8.23628 7.73333 14.3471 7.2 18.3324C8.53333 17.5353 10.4 17.2696 12.2667 17.5353C17.0667 18.0667 20.8 21.7863 20.8 26.8343C20.8 29.2255 19.7333 31.6167 18.1333 33.4765C16.2667 35.3363 14.1333 36.1334 11.4667 36.1334C8.53333 36.1334 5.86667 34.8049 4.26667 33.2108ZM30.9333 33.2108C28.2667 30.2883 26.6667 27.1 26.6667 21.7863C26.6667 12.4873 33.3333 4.25098 42.6667 0L45.0667 3.45392C36.2667 8.23628 34.4 14.3471 33.8667 18.3324C35.2 17.5353 37.0667 17.2696 38.9333 17.5353C43.7333 18.0667 47.4667 21.7863 47.4667 26.8343C47.4667 29.2255 46.4 31.6167 44.8 33.4765C43.2 35.3363 40.8 36.1334 38.1333 36.1334C35.2 36.1334 32.5333 34.8049 30.9333 33.2108Z"
                                                fill="#121C27" />
                                        </svg>
                                    </div>
                                    <p className="text">“Collaborating with Stratify has transformed our business. Their
                                        strategic insights and customized solutions have
                                        optimized our operations and greatly enhanced our efficiency. We are thrilled
                                        with
                                        the results!”</p>
                                    <div className="info">
                                        <img src="assets/images/testimonial/testimonial-twelve-image2.png" alt="imag" />
                                        <div>
                                            <h5>Brooklyn Simmons</h5>
                                            <span>Dog Trainer</span>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <img src="assets/images/brand/shopify.png" alt="icon" />
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-twelve__item">
                                    <div className="coma">
                                        <svg width="48" height="37" viewBox="0 0 48 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.26667 33.2108C1.6 30.2883 0 27.1 0 21.7863C0 12.4873 6.66667 4.25098 16 0L18.4 3.45392C9.6 8.23628 7.73333 14.3471 7.2 18.3324C8.53333 17.5353 10.4 17.2696 12.2667 17.5353C17.0667 18.0667 20.8 21.7863 20.8 26.8343C20.8 29.2255 19.7333 31.6167 18.1333 33.4765C16.2667 35.3363 14.1333 36.1334 11.4667 36.1334C8.53333 36.1334 5.86667 34.8049 4.26667 33.2108ZM30.9333 33.2108C28.2667 30.2883 26.6667 27.1 26.6667 21.7863C26.6667 12.4873 33.3333 4.25098 42.6667 0L45.0667 3.45392C36.2667 8.23628 34.4 14.3471 33.8667 18.3324C35.2 17.5353 37.0667 17.2696 38.9333 17.5353C43.7333 18.0667 47.4667 21.7863 47.4667 26.8343C47.4667 29.2255 46.4 31.6167 44.8 33.4765C43.2 35.3363 40.8 36.1334 38.1333 36.1334C35.2 36.1334 32.5333 34.8049 30.9333 33.2108Z"
                                                fill="#121C27" />
                                        </svg>
                                    </div>
                                    <p className="text">“Partnering with Stratify has been a pivotal moment for our
                                        business.
                                        Their strategic expertise and personalized
                                        solutions have improved our operations and significantly increased our
                                        efficiency.
                                        We couldn’t be more</p>
                                    <div className="info">
                                        <img src="assets/images/testimonial/testimonial-twelve-image3.png" alt="imag" />
                                        <div>
                                            <h5>Jane Cooper</h5>
                                            <span>Web Designerr</span>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <img src="assets/images/brand/spotify.png" alt="icon" />
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default Testimonial;