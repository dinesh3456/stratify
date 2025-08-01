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
                    <Swiper {...swiperOptions} className="testimonial-three__slider">
                        <SwiperSlide>
                            <div className="testimonial-three__item">
                                <img src="assets/images/icon/five-star.png" alt="icon" />
                                <p>We've had negative experiences with call centres through Stratify, so I decided to build my own remote team. Now, I have full control over the team, allowing them to work from home, no matter where they are located.</p>
                                <div className="info">
                                    <h5>Leslie Alexander</h5>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-three__item">
                                <img src="assets/images/icon/five-star.png" alt="icon" />
                                <p>We've had negative experiences with call centres through Stratify, so I decided to build my own remote team. Now, I have full control over the team, allowing them to work from home, no matter where they are located.</p>
                                <div className="info">
                                    <h5>Leslie Alexander</h5>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-three__item">
                                <img src="assets/images/icon/five-star.png" alt="icon" />
                                <p>We've had negative experiences with call centres through Stratify, so I decided to build my own remote team. Now, I have full control over the team, allowing them to work from home, no matter where they are located.</p>
                                <div className="info">
                                    <h5>Leslie Alexander</h5>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper 
                        onSwiper={setThumbsSwiper}
                        slidesPerView={3}
                        spaceBetween={10}
                        watchSlidesProgress={true}
                        className="testimonial-three__slider-thumb"
                        style={{ height: '100px' }}
                    >
                        <SwiperSlide ><div className="testimonial-three__image"><img src="assets/images/testimonial/testimonial-three-image1.png" alt="Thumb" /></div></SwiperSlide>
                        <SwiperSlide ><div className="testimonial-three__image"><img src="assets/images/testimonial/testimonial-three-image2.png" alt="Thumb" /></div></SwiperSlide>
                        <SwiperSlide ><div className="testimonial-three__image"><img src="assets/images/testimonial/testimonial-three-image3.png" alt="Thumb" /></div></SwiperSlide>
                    </Swiper>
                    <button className="testimonial-three__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                    <button className="testimonial-three__arry-next"><i className="fa-light fa-chevron-right"></i></button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;