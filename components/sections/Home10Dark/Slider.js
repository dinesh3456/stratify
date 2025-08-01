import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';


function Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <section id='home-menu' className="banner-ten-area">
            <div className="swiper banner-ten__slider dark-area">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(assets/images/banner/banner-ten-image1.jpg)`}}></div>
                        <div className="banner-ten__content">
                            <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">Welcome to Stratify
                            </h5>
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Grow Your Brand with Expert
                                Marketing Strategies!</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We infuse every client
                                relationship with a fresh, dynamic perspective, fuelled by an unwavering energy that
                                drives
                                action.</p>
                            <div className="btns mt-40">
                                <Link href="/page-about" className="btn-one dark-mode" data-splitting data-animation="fadeInUp" data-delay=".8s">Get Started<i className="fa-regular fs-14 fa-angle-right" /></Link>
                                <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                    <a onClick={() => setOpen(true)} className="video-popup"><i className="fa-solid fa-play" /></a>
                                    <h5>Watch IT Videos</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(assets/images/banner/banner-ten-image2.jpg)`}}></div>
                        <div className="banner-ten__content">
                            <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">Welcome to Stratify
                            </h5>
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Grow Your Brand with Expert
                                Marketing Strategies!</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We infuse every client
                                relationship with a fresh, dynamic perspective, fuelled by an unwavering energy that
                                drives
                                action.</p>
                            <div className="btns mt-40">
                                <Link href="/page-about" className="btn-one dark-mode" data-splitting data-animation="fadeInUp" data-delay=".8s">Get Started<i className="fa-regular fs-14 fa-angle-right" /></Link>
                                <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                    <a onClick={() => setOpen(true)} className="video-popup"><i className="fa-solid fa-play" /></a>
                                    <h5>Watch IT Videos</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(assets/images/banner/banner-ten-image3.jpg)`}}></div>
                        <div className="banner-ten__content">
                            <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">Welcome to Stratify
                            </h5>
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Grow Your Brand with Expert
                                Marketing Strategies!</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We infuse every client
                                relationship with a fresh, dynamic perspective, fuelled by an unwavering energy that
                                drives
                                action.</p>
                            <div className="btns mt-40">
                                <Link href="/page-about" className="btn-one dark-mode" data-splitting data-animation="fadeInUp" data-delay=".8s">Get Started<i className="fa-regular fs-14 fa-angle-right" /></Link>
                                <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                    <a onClick={() => setOpen(true)} className="video-popup"><i className="fa-solid fa-play" /></a>
                                    <h5>Watch IT Videos</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UalTfOIDQ7M" onClose={() => setOpen(false)} />

        </>
    )
}
export default Slider;
