import React from 'react';
import Link from 'next/link';


function Pricing() {

    return (
        <>

        <section className="pricing-seven-area pt-130 pb-130">
            <div className="container">
                <div className="pricing-five__wrp">
                    <div className="section-header text-center mb-50">
                        <h6>PRICING PLANS</h6>
                        <h2 className="wow splt-txt" data-splitting>Choose the Pricing plan</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xxl-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing-seven__item bg-sub border-0">
                                <div className="head">
                                    <h4>BASIC PLAN</h4>
                                </div>
                                <div className="price mt-20 mb-30">
                                    <h2>$15 <span>/per month</span></h2>
                                    <span className="mt-20">We are at the forefront of technological innovation, dedicated to providing</span>
                                </div>
                                <ul>
                                    <li><i className="fa-solid fa-check" /> Unlimited Project</li>
                                    <li><i className="fa-solid fa-check" /> Power And Predictive Dialing</li>
                                    <li><i className="fa-solid fa-check" /> Quality & Customer Experience</li>
                                    <li className="disable"><i className="fa-solid fa-xmark" /> Try for free, forever!</li>
                                    <li className="disable"><i className="fa-solid fa-xmark" /> 24/7 phone and email support
                                    </li>
                                </ul>
                                <Link href="/page-pricing" className="pricing-btn light-area bg-black border-0 mt-40">Choose Package <i className="fa-regular fa-angle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="pricing-seven__item popular-dark">
                                <div className="popular-tag"><img src="assets/images/icon/popular-tag.png" alt="image" />
                                </div>
                                <div className="head">
                                    <h4 className="text-white">STANDARD PLAN</h4>
                                </div>
                                <div className="price mt-20 mb-30">
                                    <h2 className="text-white">$99 <span className="text-white">/per month</span></h2>
                                    <span className="text-white mt-20">We are at the forefront of technological
                                        innovation, dedicated to providing</span>
                                </div>
                                <ul>
                                    <li><i className="fa-solid fa-check" /> Unlimited Project</li>
                                    <li><i className="fa-solid fa-check" /> Power And Predictive Dialing</li>
                                    <li><i className="fa-solid fa-check" /> Quality & Customer Experience</li>
                                    <li><i className="fa-solid fa-check" /> Try for free, forever!</li>
                                    <li className="disable"><i className="fa-solid fa-xmark" /> 24/7 phone and email support
                                    </li>
                                </ul>
                                <Link href="/page-pricing" className="pricing-btn mt-40">Choose Package <i className="fa-regular fa-angle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="pricing-seven__item bg-sub border-0">
                                <div className="head">
                                    <h4>PREMIUM PLAN</h4>
                                </div>
                                <div className="price mt-20 mb-30">
                                    <h2>$99 <span>/per month</span></h2>
                                    <span className="mt-20">We are at the forefront of technological innovation, dedicated to providing</span>
                                </div>
                                <ul>
                                    <li><i className="fa-solid fa-check" /> Unlimited Project</li>
                                    <li><i className="fa-solid fa-check" /> Power And Predictive Dialing</li>
                                    <li><i className="fa-solid fa-check" /> Quality & Customer Experience</li>
                                    <li><i className="fa-solid fa-check" /> Try for free, forever!</li>
                                    <li><i className="fa-solid fa-check" /> 24/7 phone and email support</li>
                                </ul>
                                <Link href="/page-pricing" className="pricing-btn light-area bg-black border-0 mt-40">Choose Package <i className="fa-regular fa-angle-right" /></Link>
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
