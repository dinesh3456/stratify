import React from "react";
import Link from 'next/link';

function Pricing() {

    return (
        <>
            
        <section className="pricing-area pt-120">
            <div className="container">
                <div className="pricing__wrp">
                    <div className="section-header text-center mb-50">
                        <h6>PRICING PLANS</h6>
                        <h2 className="wow splt-txt" data-splitting>Choose the Pricing plan</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xxl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing__item">
                                <div className="title">
                                    <h6>basic plan</h6>
                                </div>
                                <div className="price">
                                    <h2>$110</h2>
                                    <span>Monthly</span>
                                </div>
                                <p className="mb-30">Manage and streamline operations acr osers multiple locations wenels </p>
                                <Link href="/page-pricing" className="btn-one mb-20 w-100 rounded-0" data-splitting data-text="Get Started With Plan">Get Started With Plan</Link>
                                <Link href="/page-pricing" className="btn-two w-100 rounded-0" data-splitting data-text="Chat to Sales">Chat to Sales</Link>
                                <ul>
                                    <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                    <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                    <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                    <li><i className="fa-light fa-xmark" /> Smart Lighting Control</li>
                                    <li><i className="fa-light fa-xmark" /> Power And Predictive Dialling</li>
                                    <li><i className="fa-light fa-xmark" /> Free Consultation Until Cooperation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 wow fadeInLeft" data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="pricing__item popular">
                                <div className="title">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0246 0H0.974609C0.715734 0 0.505859 0.209875 0.505859 0.46875V15.5313C0.505859 15.6937 0.589984 15.8446 0.728172 15.93C0.866391 16.0154 1.03895 16.0232 1.18427 15.9505L6.99961 13.0428L12.815 15.9505C12.8811 15.9836 12.953 16 13.0246 16C13.1103 16 13.1958 15.9765 13.2711 15.93C13.4093 15.8446 13.4934 15.6937 13.4934 15.5313V0.46875C13.4934 0.209875 13.2835 0 13.0246 0ZM10.3393 6.00572L9.00961 7.30188L9.31917 9.1066C9.32686 9.14028 9.33092 9.17531 9.33092 9.21134C9.33092 9.46991 9.12155 9.67959 8.86305 9.68009C8.86251 9.68009 8.86201 9.68009 8.86148 9.68009C8.78686 9.68009 8.71201 9.66231 8.64342 9.62625L6.99961 8.76225L5.35586 9.62625C5.2873 9.66228 5.21239 9.68009 5.1378 9.68009C5.04061 9.68009 4.94389 9.64991 4.8622 9.59056C4.71789 9.48566 4.64558 9.30794 4.67577 9.13209L4.98977 7.30191L3.65989 6.00575C3.53211 5.88122 3.48611 5.69491 3.54127 5.52522C3.59642 5.3555 3.74311 5.23181 3.91967 5.20619L5.75745 4.93913L6.5792 3.27384C6.65817 3.11384 6.82111 3.01253 6.99955 3.01253C7.17798 3.01253 7.34095 3.11381 7.41989 3.27381L8.2418 4.93913L10.0795 5.20619C10.256 5.23181 10.4028 5.3555 10.4579 5.52519C10.5131 5.69488 10.4671 5.88116 10.3393 6.00572Z"
                                            fill="white" />
                                    </svg>
                                    <h6>ADVANCE PLAN / MOST popular</h6>
                                </div>
                                <div className="price">
                                    <h2>$150</h2>
                                    <span>Monthly</span>
                                </div>
                                <p className="mb-30">Manage and streamline operations acr osers multiple locations wenels</p>
                                <Link href="/page-pricing" className="btn-one-light mb-20 w-100 rounded-0" data-splitting data-text="Get Started With Plan">Get Started With Plan</Link>
                                <Link href="/page-pricing" className="btn-two-light w-100 rounded-0" data-splitting data-text="Chat to Sales">Chat to Sales</Link>
                                <ul>
                                    <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                    <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                    <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                    <li><i className="fa-light fa-check" /> Smart Lighting Control</li>
                                    <li><i className="fa-light fa-check" /> Power And Predictive Dialling</li>
                                    <li><i className="fa-light fa-xmark" /> Free Consultation Until Cooperation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 wow fadeInLeft" data-wow-delay="400ms"
                            data-wow-duration="1500ms">
                            <div className="pricing__item">
                                <div className="title">
                                    <h6>premium plan</h6>
                                </div>
                                <div className="price">
                                    <h2>$200</h2>
                                    <span>Monthly</span>
                                </div>
                                <p className="mb-30">Manage and streamline operations acr osers multiple locations wenels</p>
                                <Link href="/page-pricing" className="btn-one mb-20 w-100 rounded-0" data-splitting data-text="Get Started With Plan">Get Started With Plan</Link>
                                <Link href="/page-pricing" className="btn-two w-100 rounded-0" data-splitting data-text="Chat to Sales">Chat to Sales</Link>
                                <ul>
                                    <li><i className="fa-light fa-check" /> 24/7 Support at Any Time</li>
                                    <li><i className="fa-light fa-check" /> Orientation for Business</li>
                                    <li><i className="fa-light fa-check" /> Basic Security Systems</li>
                                    <li><i className="fa-light fa-check" /> Smart Lighting Control</li>
                                    <li><i className="fa-light fa-check" /> Power And Predictive Dialling</li>
                                    <li><i className="fa-light fa-check" /> Free Consultation Until Cooperation</li>
                                </ul>
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