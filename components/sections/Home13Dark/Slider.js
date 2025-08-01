import React from 'react';
import Link from 'next/link';


function Slider() {
    return (
        <>

        <section id='home-menu' className="banner-thirteen-area light-area paralax__animation" style={{ backgroundImage: `url(assets/images/banner/banner-thirteen-bg.jpg)`}}>
            <div className="banner-thirteen__wrp">
                <div className="banner-thirteen__content">
                    <h1 className="title wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">Secure the Future
                        with Expert Financial Guidance!</h1>
                    <p className="text wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">We infuse every
                        client relationship with a fresh, dynamic perspective, fuelled by an
                        unwavering energy that drives
                        action.</p>
                    <Link href="/contact" className="btn-two-light wow fadeInDown mt-50" data-wow-delay="400ms" data-wow-duration="1500ms" data-splitting data-text="Let’s Connect">Let’s Connect</Link>
                </div>
            </div>
            <div className="banner-thirteen__image">
                <img data-depth="0.01" className="bounceInRight wow" src="assets/images/banner/banner-thirteen-image.png" alt="image" />
                <div data-depth="0.03" className="info1">
                    <img src="assets/images/banner/banner-thirteen-info1-dark.png" alt="image" />
                    <div className="arry">
                        <img className="animation__arryLeftRight" src="assets/images/banner/banner-thirteen-arry.png" alt="image" />
                    </div>
                </div>
                <div data-depth="0.05" className="info2">
                    <img src="assets/images/banner/banner-thirteen-info2-dark.png" alt="image" />
                </div>
            </div>
            <div className="banner-thirteen__text wow imageUpToDown">
                <img src="assets/images/banner/banner-three-text.png" alt="image" />
            </div>
        </section>

        </>
    )
}
export default Slider;
