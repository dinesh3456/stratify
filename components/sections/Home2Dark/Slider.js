import React from 'react'
import Link from 'next/link'


 function Slider() {
    return (
        <>

        <section id='home-menu' className="banner-two-area light-area paralax__animation" style={{ backgroundImage: `url(assets/images/banner/banner-two-bg.jpg)`}}>
            <div className="banner-two__wrp">
                <div className="banner-two__content">
                    <h1 className="title wow splt-txt-bounce" data-splitting>Grow Your Brand with Expert Marketing Strategies!</h1>
                    <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action.</p>
                    <Link href="/page-about" className="arry-btn"><i className="fa-light wow fadeInLeft fa-arrow-right" data-wow-delay="500ms" data-wow-duration="1500ms"></i></Link>
                </div>
            </div>
            <div className="banner-two__image ">
                <img className="animation__arryLeftRight" src="assets/images/banner/banner-two-image.png" alt="image" />
                <div className="info1">
                    <img data-depth="0.03" src="assets/images/banner/banner-two-info1.png" alt="image" />
                </div>
                <div className="info2">
                    <img data-depth="0.05" src="assets/images/banner/banner-two-info2.png" alt="image" />
                </div>
                <div className="info3">
                    <img className="animation__rotate" src="assets/images/banner/banner-two-info3.png" alt="image" />
                </div>
            </div>
        </section>

        </>
    )
}
export default Slider;
