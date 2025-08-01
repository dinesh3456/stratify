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
                                        <h3 className="wow splt-txt mb-30" data-splitting>Our Mission Transforming
                                            Industries
                                            through Innovative IT Solutions</h3>
                                        <p className="text">We are at the forefront of technological innovation, dedicated
                                            to
                                            providing
                                            comprehensive IT solutions that empower
                                            businesses for success in the digital age. With a deep commitment to
                                            excellence
                                        </p>
                                        <ul className="list mt-30">
                                            <li className="mb-15 d-flex align-items-center"><svg width="18" height="13"
                                                    viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.293 0.203125C15.4688 0.0273438 15.75 0.0273438 15.8906 0.203125L16.9102 1.1875C17.0508 1.36328 17.0508 1.64453 16.9102 1.78516L6.36328 12.332C6.1875 12.5078 5.94141 12.5078 5.76562 12.332L1.05469 7.65625C0.914062 7.48047 0.914062 7.19922 1.05469 7.05859L2.07422 6.03906C2.21484 5.89844 2.49609 5.89844 2.67188 6.03906L6.04688 9.44922L15.293 0.203125Z"
                                                        fill="white" />
                                                </svg>
                                                <h5 className="ml-10">Professional Team Member</h5>
                                            </li>
                                            <li className="d-flex align-items-center"><svg width="18" height="13"
                                                    viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.293 0.203125C15.4688 0.0273438 15.75 0.0273438 15.8906 0.203125L16.9102 1.1875C17.0508 1.36328 17.0508 1.64453 16.9102 1.78516L6.36328 12.332C6.1875 12.5078 5.94141 12.5078 5.76562 12.332L1.05469 7.65625C0.914062 7.48047 0.914062 7.19922 1.05469 7.05859L2.07422 6.03906C2.21484 5.89844 2.49609 5.89844 2.67188 6.03906L6.04688 9.44922L15.293 0.203125Z"
                                                        fill="white" />
                                                </svg>
                                                <h5 className="ml-10">Awards Winning IT Solutions Company</h5>
                                            </li>
                                        </ul>
                                        <div className="info mt-50">
                                            <Link href="/page-about" className="btn-one dark-mode" data-splitting>Read More <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                            <img src="assets/images/about/about-ten-info-dark.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade show"} id="projection" role="tabpanel"
                                        aria-labelledby="projection-tab">
                                        <h3 className="wow animated splt-txt mb-30" data-splitting>Our Mission Transforming
                                            Industries
                                            through Innovative IT Solutions</h3>
                                        <p className="text">We are at the forefront of technological innovation, dedicated
                                            to
                                            providing
                                            comprehensive IT solutions that empower
                                            businesses for success in the digital age. With a deep commitment to
                                            excellence
                                        </p>
                                        <ul className="list mt-30">
                                            <li className="mb-15 d-flex align-items-center"><svg width="18" height="13"
                                                    viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.293 0.203125C15.4688 0.0273438 15.75 0.0273438 15.8906 0.203125L16.9102 1.1875C17.0508 1.36328 17.0508 1.64453 16.9102 1.78516L6.36328 12.332C6.1875 12.5078 5.94141 12.5078 5.76562 12.332L1.05469 7.65625C0.914062 7.48047 0.914062 7.19922 1.05469 7.05859L2.07422 6.03906C2.21484 5.89844 2.49609 5.89844 2.67188 6.03906L6.04688 9.44922L15.293 0.203125Z"
                                                        fill="white" />
                                                </svg>
                                                <h5 className="ml-10">Professional Team Member</h5>
                                            </li>
                                            <li className="d-flex align-items-center"><svg width="18" height="13"
                                                    viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.293 0.203125C15.4688 0.0273438 15.75 0.0273438 15.8906 0.203125L16.9102 1.1875C17.0508 1.36328 17.0508 1.64453 16.9102 1.78516L6.36328 12.332C6.1875 12.5078 5.94141 12.5078 5.76562 12.332L1.05469 7.65625C0.914062 7.48047 0.914062 7.19922 1.05469 7.05859L2.07422 6.03906C2.21484 5.89844 2.49609 5.89844 2.67188 6.03906L6.04688 9.44922L15.293 0.203125Z"
                                                        fill="white" />
                                                </svg>
                                                <h5 className="ml-10">Awards Winning IT Solutions Company</h5>
                                            </li>
                                        </ul>
                                        <div className="info mt-50">
                                            <Link href="/page-about" className="btn-one dark-mode" data-splitting>Read More <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                            <img src="assets/images/about/about-ten-info-dark.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade show"} id="business" role="tabpanel"
                                        aria-labelledby="business-tab">
                                        <h3 className="wow animated splt-txt mb-30" data-splitting>Our Mission Transforming
                                            Industries
                                            through Innovative IT Solutions</h3>
                                        <p className="text">We are at the forefront of technological innovation, dedicated
                                            to
                                            providing
                                            comprehensive IT solutions that empower
                                            businesses for success in the digital age. With a deep commitment to
                                            excellence
                                        </p>
                                        <ul className="list mt-30">
                                            <li className="mb-15 d-flex align-items-center"><svg width="18" height="13"
                                                    viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.293 0.203125C15.4688 0.0273438 15.75 0.0273438 15.8906 0.203125L16.9102 1.1875C17.0508 1.36328 17.0508 1.64453 16.9102 1.78516L6.36328 12.332C6.1875 12.5078 5.94141 12.5078 5.76562 12.332L1.05469 7.65625C0.914062 7.48047 0.914062 7.19922 1.05469 7.05859L2.07422 6.03906C2.21484 5.89844 2.49609 5.89844 2.67188 6.03906L6.04688 9.44922L15.293 0.203125Z"
                                                        fill="white" />
                                                </svg>
                                                <h5 className="ml-10">Professional Team Member</h5>
                                            </li>
                                            <li className="d-flex align-items-center"><svg width="18" height="13"
                                                    viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.293 0.203125C15.4688 0.0273438 15.75 0.0273438 15.8906 0.203125L16.9102 1.1875C17.0508 1.36328 17.0508 1.64453 16.9102 1.78516L6.36328 12.332C6.1875 12.5078 5.94141 12.5078 5.76562 12.332L1.05469 7.65625C0.914062 7.48047 0.914062 7.19922 1.05469 7.05859L2.07422 6.03906C2.21484 5.89844 2.49609 5.89844 2.67188 6.03906L6.04688 9.44922L15.293 0.203125Z"
                                                        fill="white" />
                                                </svg>
                                                <h5 className="ml-10">Awards Winning IT Solutions Company</h5>
                                            </li>
                                        </ul>
                                        <div className="info mt-50">
                                            <Link href="/page-about" className="btn-one dark-mode" data-splitting>Read More <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                            <img src="assets/images/about/about-ten-info-dark.png" alt="image" />
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