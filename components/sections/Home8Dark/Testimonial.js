import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Testimonial() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperOptions = {
        modules: [Autoplay, Thumbs, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation:{
            clickable: true,
            prevEl: ".testimonial-three__arry-prev",
            nextEl: ".testimonial-three__arry-next",
        },
        loop: true,
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
    };

    return (

        <section className="testimonial-three-area pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h2 className="wow splt-txt" data-splitting>Feedback From Clients</h2>
                </div>
                <div className="testimonial-three__wrp">
                    <div className="swiper testimonial-three__slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__item">
                                    <img src="assets/images/icon/five-star.png" alt="icon" />
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
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
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
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
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
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
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
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
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
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
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
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
                    <div className="swiper testimonial-three__slider-thumb">
                        <Swiper 
                            onSwiper={setThumbsSwiper}
                            slidesPerView={3}
                            spaceBetween={10}
                            watchSlidesProgress={true}
                            className="testimonial-three__slider-thumb"
                            style={{ height: '100px' }}
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src="assets/images/testimonial/testimonial-three-image1.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src="assets/images/testimonial/testimonial-three-image2.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src="assets/images/testimonial/testimonial-three-image3.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src="assets/images/testimonial/testimonial-three-image1.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src="assets/images/testimonial/testimonial-three-image2.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src="assets/images/testimonial/testimonial-three-image3.png" alt="image" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <button className="testimonial-three__arry-prev dark-mode"><i className="fa-light fa-chevron-left"></i><span>PREV</span></button>
                    <button className="testimonial-three__arry-next dark-mode"> <span>NEXT</span><i className="fa-light fa-chevron-right"></i></button>
                </div>
            </div>
        </section>

    );
}

export default Testimonial;