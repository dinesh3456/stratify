import React from "react";

function About() {

    return (
        <>
            
            <div id="about-menu" className="about-three-area">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-xl-7 order-2 order-xl-1">
                            <div className="about-three__content">
                                <p className="text wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">As a leading digital marketing company specializing in retail, we provide a range of services tailored to retail brands. We partner with clients to develop strategic, results-driven marketing campaigns that maximize impact and drive success.</p>
                                <div className="btn-group wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <span>Success Rate - 90%</span>
                                    <span>Spotlight <svg width="8" height="10" viewBox="0 0 8 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 4.5L0 0V9.5L8 4.5Z" fill="#121C27" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="list">
                                    <ul className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <li><i className="fa-light fa-check" />Retail Social Media Marketing</li>
                                        <li><i className="fa-light fa-check" />Business Consulting and Support</li>
                                        <li><i className="fa-light fa-check" />A Robust Brand Identity</li>
                                        <li><i className="fa-light fa-check" />Strategic Analysis for Businesses</li>
                                    </ul>
                                    <ul className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <li><i className="fa-light fa-check" />Data Gathering and Analysis</li>
                                        <li><i className="fa-light fa-check" />Retail Search Engine Optimization</li>
                                        <li><i className="fa-light fa-check" />Managed Paid Advertising Campaigns</li>
                                        <li><i className="fa-light fa-check" />Effective Retail Marketing Strategies</li>
                                    </ul>
                                </div>
                                <div className="shape">
                                    <img src="assets/images/shape/about-theree-shape.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 order-1 order-xl-2">
                            <div className="about-three__image imageLeftToRight wow">
                                <img src="assets/images/about/about-three-image.jpg" alt="image" />
                                <div className="icon">
                                    <img className="animation__rotate" src="assets/images/about/about-three-icon.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About