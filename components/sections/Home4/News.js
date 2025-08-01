import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    loop: "true",
    spaceBetween: 50,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    },
};

function News() {
    return (
        <>

        <section id='blog-menu' className="blog-two-area pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                </div>
                <div className="blog-two__wrp">
                    <div className="swiper blog-two__slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image1.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image1.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Branding</li>
                                            <li className="date">May 15, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image2.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image2.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Marketing</li>
                                            <li className="date">May 20, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Stratify Agency transforms the way we work through the power of AI</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image3.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image3.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Design Trends</li>
                                            <li className="date">May 25, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Common UX pinpoints in Dashboard-related projects.</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image4.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image4.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Branding</li>
                                            <li className="date">May 15, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image1.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image1.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Branding</li>
                                            <li className="date">May 15, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image2.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image2.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Marketing</li>
                                            <li className="date">May 20, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Stratify Agency transforms the waywe work through the power of AI</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image3.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image3.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Design Trends</li>
                                            <li className="date">May 25, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Common UX pinpoints in Dashboard-relatedprojects.</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src="assets/images/blog/blog-two-image4.jpg" alt="image" />
                                        <img src="assets/images/blog/blog-two-image4.jpg" alt="image" />
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Branding</li>
                                            <li className="date">May 15, 2024</li>
                                        </ul>
                                        <h4 className="mt-10"><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default News
