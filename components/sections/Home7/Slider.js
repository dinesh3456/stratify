import React from 'react';
import Link from 'next/link';


function Slider() {

    return (
        <>

        <section id='home-menu' className="banner-seven-area" style={{ backgroundImage: `url(assets/images/banner/banner-seven-bg.jpg)`}}>
            <div className="banner-seven__wrp">
                <div className="banner-seven__content">
                    <h1 className="title wow splt-txt-bounce" data-splitting>Decarbonize & optimize
                        your business with
                        autonomous AI</h1>
                    <Link href="/page-about" className="arry-btn"><i className="fa-thin fa-arrow-right wow fadeInLeft"
                            data-wow-delay="500ms" data-wow-duration="1500ms"></i></Link>
                </div>
            </div>
            <div className="banner-seven__image">
                <img className="wow fadeInUpBig" src="assets/images/banner/banner-seven-image.png" alt="image" />
                <div className="text1">
                    Stratify
                </div>
                <div className="text2">
                    BUSINESS
                </div>
            </div>
        </section>

        </>
    )
}
export default Slider;
