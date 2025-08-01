import React from "react";
import Link from 'next/link';

function Pricing() {

    return (
        <>

        <section className="pricing-nine-area pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>PRICING PLANS</h6>
                    <h2 className="wow splt-txt" data-splitting>Choose the Pricing plan</h2>
                </div>
                <div className="pricing-nine__wrp">
                    <div className="row g-4">
                        <div className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing-nine__item bg-sub border-0">
                                <div className="head">
                                    <div>
                                        <span>Licencse</span>
                                        <h4 className="title">Standard</h4>
                                    </div>
                                    <div className="price">
                                        <h3>$</h3>
                                        <h2>16</h2>
                                    </div>
                                </div>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Web & Mobile</li>
                                    <li><i className="fa-light fa-check"></i>Free Custom Domain</li>
                                    <li><i className="fa-light fa-check"></i>Best Hosting Ever</li>
                                </ul>
                                <Link href="/" className="btn-more">Purchase Now <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="pricing-nine__item bg-black border-0">
                                <div className="shape">
                                    <img src="assets/images/shape/pricing-nine-item-shape.png" alt="shape" />
                                </div>
                                <div className="head">
                                    <div>
                                        <span className="text-white">Licencse</span>
                                        <h4 className="title text-white">Essential</h4>
                                    </div>
                                    <div className="price">
                                        <h3 className="text-white">$</h3>
                                        <h2 className="text-white">32</h2>
                                    </div>
                                </div>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Web & Mobile</li>
                                    <li><i className="fa-light fa-check"></i>Free Custom Domain</li>
                                    <li><i className="fa-light fa-check"></i>Best Hosting Ever</li>
                                    <li><i className="fa-light fa-check"></i>Outstanding Support</li>
                                </ul>
                                <Link href="/" className="btn-more">Purchase Now <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="pricing-nine__item bg-sub border-0">
                                <div className="head">
                                    <div>
                                        <span>Licencse</span>
                                        <h4 className="title">Premium</h4>
                                    </div>
                                    <div className="price">
                                        <h3>$</h3>
                                        <h2>64</h2>
                                    </div>
                                </div>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Web & Mobile</li>
                                    <li><i className="fa-light fa-check"></i>Free Custom Domain</li>
                                    <li><i className="fa-light fa-check"></i>Best Hosting Ever</li>
                                    <li><i className="fa-light fa-check"></i>Outstanding Support</li>
                                    <li><i className="fa-light fa-check"></i>Web Design</li>
                                </ul>
                                <Link href="/" className="btn-more">Purchase Now <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        

        </>
    )
}
export default Pricing;