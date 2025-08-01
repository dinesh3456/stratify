import React from 'react';
import Link from 'next/link';


function Slider() {
    return (
        <>

        <section id='home-menu' className="banner-six-area">
            <div className="swiper banner-six__slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(assets/images/banner/banner-six-bg.jpg)`}}></div>
                        <div className="banner-six__content">
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Protect What Matters with
                                Expert Insurance Consultation Now</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We a group of design company
                                that amplify creativity from brands and design to marketing and digital strategies.</p>
                            <Link href="/page-about" className="arry-btn" data-animation="fadeInUp" data-delay="1s"><i
                                    className="fa-thin fa-arrow-up-right"></i></Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(assets/images/banner/banner-six-bg2.jpg)`}}></div>
                        <div className="banner-six__content">
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Protect What Matters with
                                Expert Insurance Consultation Now</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We a group of design company
                                that amplify creativity from brands and
                                design to
                                marketing and digital strategies.</p>
                            <Link href="/page-about" className="arry-btn" data-animation="fadeInUp" data-delay="1s"><i
                                    className="fa-thin fa-arrow-up-right"></i></Link>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(assets/images/banner/banner-six-bg3.jpg)`}}></div>
                        <div className="banner-six__content">
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Protect What Matters with
                                Expert Insurance Consultation Now</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We a group of design company
                                that amplify creativity from brands and
                                design to
                                marketing and digital strategies.</p>
                            <Link href="/page-about" className="arry-btn" data-animation="fadeInUp" data-delay="1s"><i
                                    className="fa-thin fa-arrow-up-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Slider;
