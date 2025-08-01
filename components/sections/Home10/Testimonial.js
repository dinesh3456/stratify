import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    spaceBetween: 0,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".testimonial-ten__dot",
        clickable: true,
    },
};

function Testimonial() {

    return (
        <>

        <section className="testimonial-ten-aera">
            <div className="row g-0">
                <div className="col-xl-4">
                    <div className="testimonial-ten__image">
                        <img src="assets/images/testimonial/testimonial-ten-image.jpg" alt="image" />
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="testimonial-ten-right" style={{ backgroundImage: `url(assets/images/bg/testimonial-ten-bg.jpg)`}}>
                        <div className="swiper testimonial-ten__slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-ten__item">
                                        <p className="text">
                                            “ Im so happy with the team at Stratify Business Consulting!! The entire
                                            staff is so
                                            welcoming, professional and are all
                                            outstanding advocates. I’m especially grateful for my handling attorney,
                                            Matt Khan.
                                            Since day one he provided positive,
                                            hopeful yet realistic assurances, regarding my case. My motor vehicle
                                            collision was
                                            truly
                                            a life altering and devastating interruption in my life ”
                                        </p>
                                        <div className="info">
                                            <div className="d-flex gap-3 align-items-center">
                                                <img src="assets/images/testimonial/testimonial-ten1.png" alt="image" />
                                                <div>
                                                    <h5>Kourtney Holland</h5>
                                                    <span className="fs-14">CEO & Founder</span>
                                                </div>
                                            </div>
                                            <img src="assets/images/testimonial/testimonial-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-ten__item">
                                        <p className="text">
                                            “ Im so happy with the team at Stratify Business Consulting!! The entire
                                            staff is so
                                            welcoming, professional and are all
                                            outstanding advocates. I’m especially grateful for my handling attorney,
                                            Matt Khan.
                                            Since day one he provided positive,
                                            hopeful yet realistic assurances, regarding my case. My motor vehicle
                                            collision was
                                            truly
                                            a life altering and devastating interruption in my life ”
                                        </p>
                                        <div className="info">
                                            <div className="d-flex gap-3 align-items-center">
                                                <img src="assets/images/testimonial/testimonial-ten2.png" alt="image" />
                                                <div>
                                                    <h5>Madison Loren</h5>
                                                    <span className="fs-14">Chief Executive</span>
                                                </div>
                                            </div>
                                            <img src="assets/images/testimonial/testimonial-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-ten__item">
                                        <p className="text">
                                            “ Im so happy with the team at Stratify Business Consulting!! The entire
                                            staff is so
                                            welcoming, professional and are all
                                            outstanding advocates. I’m especially grateful for my handling attorney,
                                            Matt Khan.
                                            Since day one he provided positive,
                                            hopeful yet realistic assurances, regarding my case. My motor vehicle
                                            collision was
                                            truly
                                            a life altering and devastating interruption in my life ”
                                        </p>
                                        <div className="info">
                                            <div className="d-flex gap-3 align-items-center">
                                                <img src="assets/images/testimonial/testimonial-ten3.png" alt="image" />
                                                <div>
                                                    <h5>Esther Howard</h5>
                                                    <span className="fs-14">CEO & Founder</span>
                                                </div>
                                            </div>
                                            <img src="assets/images/testimonial/testimonial-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-ten__item">
                                        <p className="text">
                                            “ Im so happy with the team at Stratify Business Consulting!! The entire
                                            staff is so
                                            welcoming, professional and are all
                                            outstanding advocates. I’m especially grateful for my handling attorney,
                                            Matt Khan.
                                            Since day one he provided positive,
                                            hopeful yet realistic assurances, regarding my case. My motor vehicle
                                            collision was
                                            truly
                                            a life altering and devastating interruption in my life ”
                                        </p>
                                        <div className="info">
                                            <div className="d-flex gap-3 align-items-center">
                                                <img src="assets/images/testimonial/testimonial-ten4.png" alt="image" />
                                                <div>
                                                    <h5>Jenny Wilson</h5>
                                                    <span className="fs-14">Web Designer</span>
                                                </div>
                                            </div>
                                            <img src="assets/images/testimonial/testimonial-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper__dots testimonial-ten__dot"></div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default Testimonial;