import React from 'react';
import Link from 'next/link';


function Slider() {

    return (
        <>

        <section id='home-menu' className="banner-nine-area">
            <div className="row g-0 align-items-center">
                <div className="col-xl-6 order-2 order-xl-1">
                    <div className="banner-nine__content">
                        <h1 className="title wow splt-txt" data-splitting>Grow Up Your Business
                            With IT Solutions</h1>
                        <p className="text wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">We bring a
                            fresh, dynamic perspective to every client relationship, driven by a
                            relentless energy
                            that sparks action.</p>
                        <div>
                            <div className="wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <Link href="#feature" className="arry-btn animation__arryUpDown"><i className="fa-light fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 order-1 order-xl-2">
                    <div className="banner-nine__image imageRightToLeft wow">
                        <img className="parallaxRightScroll" src="assets/images/banner/banner-nine-image.jpg" alt="image" />
                    </div>
                </div>
            </div>
            <div className="banner-nine__circle">
                <img className="animation__rotate" src="assets/images/banner/banner-nine-circle.png" alt="image" />
            </div>
        </section>

        </>
    )
}
export default Slider;
