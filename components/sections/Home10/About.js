import React, { useState } from 'react';
import Link from 'next/link';

function About() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    
    return (
        <>

        <section id="about-menu" className="about-ten-area pt-130 pb-130">
            <div className="section-header text-center mb-80">
                <h6>About Company</h6>
                <h2 className="wow splt-txt" data-splitting>Unveiling Our IT Company <br />
                    Shaping the Futures</h2>
            </div>
            <div className="container">
                <div className="about-ten__wrp">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="about-ten__content">
                                <ul className="nav mb-50 nav-tabs" id="serviceTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button id="#info-tab" className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} data-tab="#info">
                                            Company Mission
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button id="#projection-tab" className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} data-tab="#projection">
                                            Awards Winnings
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button id="business-tab" className={activeIndex === 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)} data-tab="#business">
                                            Plan & Goals
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="serviceTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade show"} id="info" role="tabpanel"
                                        aria-labelledby="info-tab">
                                        <h3 className="wow splt-txt mb-30" data-splitting>Empowering Businesses through Cutting-Edge IT Solutions</h3>
                                        <p className="text">
                                            At our core, we are dedicated to driving digital transformation through innovative technologies.
                                            We aim to deliver tailored IT solutions that optimize operations, enhance user experiences, and
                                            accelerate growth for businesses worldwide. Excellence, reliability, and customer success remain
                                            at the heart of our mission.
                                        </p>
                                        <ul className="list mt-30">
                                            <li className="mb-15 d-flex align-items-center">✔ Dedicated & Professional Team Members</li>
                                            <li className="mb-15 d-flex align-items-center">✔ Trusted Technology Partner Globally</li>
                                        </ul>
                                        <div className="info mt-50">
                                            <Link href="/page-about" className="btn-one" data-splitting>Read More <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                            <img src="assets/images/about/about-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade show"} id="projection" role="tabpanel"
                                        aria-labelledby="projection-tab">
                                        <h3 className="wow animated splt-txt mb-30" data-splitting>Recognized Excellence in IT Innovations</h3>
                                        <p className="text">
                                            Our commitment to innovation and client satisfaction has earned us multiple industry awards
                                            and recognitions. We are proud to be acknowledged for delivering exceptional solutions and 
                                            shaping the future of IT services across diverse sectors.
                                        </p>
                                        <ul className="list mt-30">
                                            <li className="mb-15 d-flex align-items-center">🏆 Best IT Solutions Provider 2023</li>
                                            <li className="d-flex align-items-center">🏅 Excellence in Cloud Computing Award</li>
                                        </ul>
                                        <div className="info mt-50">
                                            <Link href="/page-about" className="btn-one" data-splitting>Read More <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                            <img src="assets/images/about/about-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade show"} id="business" role="tabpanel"
                                        aria-labelledby="business-tab">
                                        <h3 className="wow animated splt-txt mb-30" data-splitting>Driving Future Growth with Strategic Innovation</h3>
                                        <p className="text">
                                            Our future roadmap is built on scaling our services, expanding into emerging markets, and 
                                            fostering long-term partnerships. We are committed to developing next-generation solutions 
                                            that address the evolving needs of businesses in the digital era.
                                        </p>
                                        <ul className="list mt-30">
                                            <li className="mb-15 d-flex align-items-center">🚀 Expand Global Operations by 2025</li>
                                            <li className="d-flex align-items-center">💡 Launch AI & Blockchain-Based Services</li>
                                        </ul>
                                        <div className="info mt-50">
                                            <Link href="/page-about" className="btn-one" data-splitting>Read More <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                            <img src="assets/images/about/about-ten-info.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-ten__image">
                            <img className="wow bounceInRight" src="assets/images/about/about-ten-image.png" alt="image" />
                            <div className="info">
                                <img className="animation__arryUpDown" src="assets/images/about/about-ten-image-info.png" alt="image" />
                            </div>
                            <div className="shape">
                                <img className="animation__rotate" src="assets/images/shape/about-ten-shape.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default About;