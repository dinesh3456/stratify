import React, { useState } from 'react';
import Link from 'next/link';


function Pricing() {
    const [activeIndex, setActiveIndex] = useState(2);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            
        <section className="pricing-five-area pt-130 pb-130">
            <div className="container">
                <div className="pricing-five__wrp">
                    <div className="section-header text-center mb-30">
                        <h6>PRICING PLANS</h6>
                        <h2 className="wow splt-txt" data-splitting>Choose the Pricing plan</h2>
                    </div>
                    <div className="pricing-five__tab mb-50">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">Yearly (Save 25%)</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content mt-3">
                        <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade show"} id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                            <div className="row g-4">
                                <div className="col-lg-6 col-xxl-4">
                                    <div className="pricing-five__item">
                                        <div className="head">
                                            <h4>Basic Plan</h4>
                                            <span>Protect For Testing</span>
                                        </div>
                                        <div className="price mt-20 mb-30">
                                            <h2>Free</h2>
                                            <span>30 Days Trial</span>
                                        </div>
                                        <Link href="/contact" className="pricing-btn">Get Started <i className="fa-light fa-arrow-right" /></Link>
                                        <ul>
                                            <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                            <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                            <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                            <li><i className="fa-light fa-xmark" /> Smart Lighting Control</li>
                                            <li><i className="fa-light fa-xmark" /> Power And Predictive Dialling</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4">
                                    <div className="pricing-five__item popular">
                                        <div className="shape"><img src="assets/images/shape/pricing-five-item-shape.png" alt="shape" /></div>
                                        <div className="head">
                                            <h4 className="text-white">Premium Plan</h4>
                                            <span className="text-white">Protect For Testing</span>
                                        </div>
                                        <div className="price mt-20 mb-30">
                                            <h2 className="text-white">$42 <span className="text-white">/ Month</span></h2>
                                            <span className="text-white">No Credit Card Required</span>
                                        </div>
                                        <Link href="/contact" className="pricing-btn">Get Started <i className="fa-light fa-arrow-right" /></Link>
                                        <ul>
                                            <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                            <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                            <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                            <li><i className="fa-light fa-xmark" /> Smart Lighting Control</li>
                                            <li><i className="fa-light fa-xmark" /> Power And Predictive Dialling</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4">
                                    <div className="pricing-five__item">
                                        <div className="head">
                                            <h4>Enterprise Plan</h4>
                                            <span>For Big Conpaniesg</span>
                                        </div>
                                        <div className="price mt-20 mb-30">
                                            <h2>$99 <span>/ Month</span></h2>
                                            <span>No Credit Card Required</span>
                                        </div>
                                        <Link href="/contact" className="pricing-btn">Get Started <i className="fa-light fa-arrow-right" /></Link>
                                        <ul>
                                            <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                            <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                            <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                            <li><i className="fa-light fa-check" /> Smart Lighting Control</li>
                                            <li><i className="fa-light fa-check" /> Power And Predictive Dialling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade show"} id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                            <div className="row g-4">
                                <div className="col-lg-6 col-xxl-4">
                                    <div className="pricing-five__item">
                                        <div className="head">
                                            <h4>Basic Plan</h4>
                                            <span>Protect For Testing</span>
                                        </div>
                                        <div className="price mt-20 mb-30">
                                            <h2>Free</h2>
                                            <span>30 Days Trial</span>
                                        </div>
                                        <Link href="/contact" className="pricing-btn">Get Started <i className="fa-light fa-arrow-right" /></Link>
                                        <ul>
                                            <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                            <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                            <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                            <li><i className="fa-light fa-xmark" /> Smart Lighting Control</li>
                                            <li><i className="fa-light fa-xmark" /> Power And Predictive Dialling</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4">
                                    <div className="pricing-five__item popular">
                                        <div className="shape"><img src="assets/images/shape/pricing-five-item-shape.png" alt="shape" /></div>
                                        <div className="head">
                                            <h4 className="text-white">Premium Plan</h4>
                                            <span className="text-white">Protect For Testing</span>
                                        </div>
                                        <div className="price mt-20 mb-30">
                                            <h2 className="text-white">$499 <span className="text-white">/ Year</span></h2>
                                            <span className="text-white">No Credit Card Required</span>
                                        </div>
                                        <Link href="/contact" className="pricing-btn">Get Started <i className="fa-light fa-arrow-right" /></Link>
                                        <ul>
                                            <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                            <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                            <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                            <li><i className="fa-light fa-xmark" /> Smart Lighting Control</li>
                                            <li><i className="fa-light fa-xmark" /> Power And Predictive Dialling</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4">
                                    <div className="pricing-five__item">
                                        <div className="head">
                                            <h4>Enterprise Plan</h4>
                                            <span>For Big Conpaniesg</span>
                                        </div>
                                        <div className="price mt-20 mb-30">
                                            <h2>$999 <span>/ Year</span></h2>
                                            <span>No Credit Card Required</span>
                                        </div>
                                        <Link href="/contact" className="pricing-btn">Get Started <i className="fa-light fa-arrow-right" /></Link>
                                        <ul>
                                            <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                            <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                            <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                            <li><i className="fa-light fa-check" /> Smart Lighting Control</li>
                                            <li><i className="fa-light fa-check" /> Power And Predictive Dialling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        </>
    )
}
export default Pricing