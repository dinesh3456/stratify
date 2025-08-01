import React from 'react';
import Link from 'next/link';


function Portfolio() {
    return (
        <>

        <section className="portfolio-eight-area pt-130 pb-130">
            <div className="container">
                <div className="portfolio-eight__wrp">                    
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="portfolio-eight__item item-one">
                                <Link href="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long" /></Link>
                                <div className="image wow imageUpToDown">
                                    <img src="assets/images/protfolio/portfolio-eight-image2.jpg" alt="image" />
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        href="/page-portfolio-details">Sophisticated
                                        Marketing
                                        Studio</Link>
                                </h4>
                                <h5 className="text-white">Marketing</h5>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="portfolio-eight__item item-two">
                                <Link href="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long" /></Link>
                                <div className="image wow imageRightToLeft">
                                    <img src="assets/images/protfolio/portfolio-eight-image1.jpg" alt="image" />
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        href="/page-portfolio-details">Sustainable
                                        Marketing
                                        Plan</Link>
                                </h4>
                                <h5 className="text-white">Marketing Design</h5>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="portfolio-eight__item item-three">
                                <Link href="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long" /></Link>
                                <div className="image wow imageLeftToRight">
                                    <img src="assets/images/protfolio/portfolio-eight-image4.jpg" alt="image" />
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        href="/page-portfolio-details">Sustainable
                                        Business
                                        Plan</Link>
                                </h4>
                                <h5 className="text-white">Business Plan</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="portfolio-eight__item item-four">
                                <Link href="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long" /></Link>
                                <div className="image wow imageUpToDown">
                                    <img src="assets/images/protfolio/portfolio-eight-image3.jpg" alt="image" />
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        href="/page-portfolio-details">Branding
                                        Design</Link>
                                </h4>
                                <h5 className="text-white">Marketing</h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="portfolio-eight__item item-five">
                                <Link href="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long" /></Link>
                                <div className="image wow imageUpToDown">
                                    <img src="assets/images/protfolio/portfolio-eight-image5.jpg" alt="image" />
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        href="/page-portfolio-details">Counselling
                                        Business</Link>
                                </h4>
                                <h5 className="text-white">Marketing</h5>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="portfolio-eight__item item-six">
                                <Link href="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long" /></Link>
                                <div className="image wow imageDownToUP">
                                    <img src="assets/images/protfolio/portfolio-eight-image6.jpg" alt="image" />
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        href="/page-portfolio-details">Marketing
                                        Promotion</Link>
                                </h4>
                                <h5 className="text-white">Branding</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Portfolio;
