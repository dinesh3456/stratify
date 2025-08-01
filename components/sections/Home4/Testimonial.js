import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    spaceBetween: 30,
    speed: 1000,
    navigation: {
        nextEl: ".testimonial-four__arry-next",
        prevEl: ".testimonial-four__arry-prev",
    },
    autoplay: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1399: {
            slidesPerView: 4,
        },
    },
};

function Testimonial() {

    return (
        
        <section className="testimonial-four-area bg-sub pt-130 pb-130">
            <div className="container">
                <div className="testimonial-four__wrp">
                    <div className="section-header__flex mb-50">
                        <div>
                            <h2 className="wow splt-txt" data-splitting>What Our Customers Says?</h2>
                            <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our success lies in achieving over 99% customer satisfaction.</p>
                        </div>
                        <div className="arry__wrp wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <button className="testimonial-four__arry-prev arry-prev"><i className="fa-light fa-chevron-left" /></button>
                            <button className="testimonial-four__arry-next arry-next"><i className="fa-light fa-chevron-right" /></button>
                        </div>
                    </div>
                    <div className="swiper testimonial-four__slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image1.png" alt="image" />
                                            <div>
                                                <h5>Jenny Wilson</h5>
                                                <span>Director your company</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image2.png" alt="image" />
                                            <div>
                                                <h5>Jacob Jones</h5>
                                                <span>Medical Assistant</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 4.2
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image3.png" alt="image" />
                                            <div>
                                                <h5>Albert Flores</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image4.png" alt="image" />
                                            <div>
                                                <h5>Darrell Steward</h5>
                                                <span>Marketing Coordinator</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 4.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image1.png" alt="image" />
                                            <div>
                                                <h5>Jenny Wilson</h5>
                                                <span>Director your company</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image2.png" alt="image" />
                                            <div>
                                                <h5>Jacob Jones</h5>
                                                <span>Medical Assistant</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 4.2
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image3.png" alt="image" />
                                            <div>
                                                <h5>Albert Flores</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src="assets/images/testimonial/testimonial-four-image4.png" alt="image" />
                                            <div>
                                                <h5>Darrell Steward</h5>
                                                <span>Marketing Coordinator</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" /> 4.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support, working closely with your organization to ensure a comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="testimonial-four__review wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h5>Check all <span className="fw-600">5000+</span> Exclusive visitor reviews on</h5>
                    <img src="assets/images/testimonial/testimonial-four-review.png" alt="icon" />
                </div>
            </div>
            <div className="testimonial-four__map">
                <img src="assets/images/shape/testimonial-four-map.png" alt="map-shape" />
            </div>
        </section>

    );
}

export default Testimonial;