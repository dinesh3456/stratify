import React, { useState } from 'react';

function Serveice() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    
    return (
        <>

        <section id="service-menu" className="service-seven-area pt-130 pb-130">
            <div className="container">
                <div className="service-seven__wrp">
                    <div className="section-header text-center mb-50">
                        <h5>SINCE 1970</h5>
                        <h2 className="wow splt-txt" data-splitting>What We Can Offer</h2>
                    </div>
                    <div className="row g-4 g-xl-0 align-items-center justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="service-seven__tab">
                                <ul className="nav nav-tabs" id="serviceTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button id="info-tab" className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} data-tab="#info" >
                                            Information Collection <i className="fa-light fa-arrow-up-right"></i>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button id="projection-tab" className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} data-tab="#projection" >
                                        Projection Report Analysis <i className="fa-light fa-arrow-up-right"></i>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button id="business-tab" className={activeIndex === 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)} data-tab="#business" >
                                        Corporate Business Design <i className="fa-light fa-arrow-up-right"></i>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button id="design-tab" className={activeIndex === 4 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(4)} data-tab="#design" >
                                        Design Consulting <i className="fa-light fa-arrow-up-right"></i>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button id="residential-tab" className={activeIndex === 5 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(5)} data-tab="residential" >
                                        Residential Business <i className="fa-light fa-arrow-up-right"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="tab-content" id="serviceTabContent">
                                <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade show"} id="info-tab">
                                    <div className="service-seven__image">
                                        <img src="assets/images/service/service-seven-image1.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade show"} id="projection-tab">
                                    <div className="service-seven__image">
                                        <img src="assets/images/service/service-seven-image2.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade show"} id="business-tab">
                                    <div className="service-seven__image">
                                        <img src="assets/images/service/service-seven-image3.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab-pane fade show active" : "tab-pane fade show"} id="design-tab">
                                    <div className="service-seven__image">
                                        <img src="assets/images/service/service-seven-image4.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className={activeIndex === 5 ? "tab-pane fade show active" : "tab-pane fade show"} id="residential-tab">
                                    <div className="service-seven__image">
                                        <img src="assets/images/service/service-seven-image5.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <div className="service-seven__content">
                                <h3 className="wow splt-txt" data-splitting>Revamping Your Business with A Fresh Style</h3>
                                <p className="wow fadeInUp mt-20" data-wow-delay="00ms" data-wow-duration="1500ms">There are
                                    many
                                    variations of passages of Lorem Ipsumbut the majority have suffered alteration in
                                    some form, by injected
                                    humour, or words which don't look even.</p>
                                <div className="pricing-five__item p-0 border-0 wow fadeInDown" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <ul>
                                        <li><i className="fa-light fa-check"></i>
                                            <h5>Seasoned and Skilled Engineers</h5>
                                        </li>
                                        <li><i className="fa-light fa-check"></i>
                                            <h5>Dedicated to Exceptional Customer Service</h5>
                                        </li>
                                        <li><i className="fa-light fa-check"></i>
                                            <h5>Dedicated to Easing the Stress of Your Project</h5>
                                        </li>
                                        <li><i className="fa-light fa-check"></i>
                                            <h5>Adaptable to Any Building Structure</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default Serveice;
