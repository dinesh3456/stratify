import React from "react";
import Link from 'next/link';


function Solutions() {
    return (
        <>
            
        <section className="solution-area light-area have-padding pb-130" style={{ backgroundImage: `url(assets/images/bg/solution-bg-image.jpg)`}}>
            <div className="container">
                <div className="solution__wrp">
                    <div className="solution__header">
                        <div className="section-header__flex mb-50">
                            <div>
                                <h6 className="text-white">Optimize Security Solutions</h6>
                                <h2 className="wow splt-txt text-white" data-splitting>Comprehensive Protection <br />for your Business</h2>
                            </div>
                            <div>
                                <p className="text-white wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms"> Metrics for improving your site's performance over time security measures like systems</p>
                                <ul>
                                    <li className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms"><i className="fa-regular fa-check" /> Professional Team Member</li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms"><i className="fa-regular fa-check" /> Awards Winning IT Solutions Company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="solution__item">
                                <div className="image"><img src="assets/images/solution/solution-image1.jpg" alt="image" /></div>
                                <div className="content">
                                    <h5 className="sub-title">Start up Business</h5>
                                    <div className="title">
                                        <span className="number">1</span>
                                        <h4 className="text-white"><Link href="/page-service-details">Defense Arsenal Unveiling Our Cyber Security Suite</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="solution__item">
                                <div className="image"><img src="assets/images/solution/solution-image2.jpg" alt="image" /></div>
                                <div className="content">
                                    <h5 className="sub-title">Small Business</h5>
                                    <div className="title">
                                        <span className="number">2</span>
                                        <h4 className="text-white"><Link href="/page-service-details">Fortified Protection Explore Our Robust Security Features</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="solution__item">
                                <div className="image"><img src="assets/images/solution/solution-image3.jpg" alt="image" /></div>
                                <div className="content">
                                    <h5 className="sub-title">Entrepreneur</h5>
                                    <div className="title">
                                        <span className="number">3</span>
                                        <h4 className="text-white"><Link href="/page-service-details">Empowering Digital Safety at Every Level Protection</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="solution__rectangle">
                <div className="item-one wow" />
                <div className="item-two wow" />
                <div className="item-three wow" />
            </div>
        </section>

        </>
    )
}
export default Solutions