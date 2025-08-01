import React from "react";
import Link from 'next/link';

function Work() {

    return (
        <>
            
        <section className="work-area pt-130 pb-130">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="work__item-left">
                            <div className="work__image">
                                <img src="assets/images/work/work-image.jpg" alt="image" />
                                <div className="icon">
                                    <img className="animation__rotateY" src="assets/images/icon/work-icon.png" alt="icon" />
                                </div>
                            </div>
                            <div className="section-header mt-50">
                                <h2 className="wow splt-txt" data-splitting>How we can help you At Stratify</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">We are committed to leading you through your financial journey with professional expertise.</p>
                            </div>
                            <Link href="/page-about" className="btn-one mt-50 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="work__item-right">
                            <p className="text mb-30 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Working with Stratify-vat/tax gives you a peace mind in knowing that your books are accurate updated in real time strategic solutions.</p>
                            <div className="work__item">
                                <span>01</span>
                                <div className="content">
                                    <h4 className="mb-10">Project Planning</h4>
                                    <p>We arrange meetings with our customers at a designated location to thoroughly discuss their specific needs, preferences, and demands.</p>
                                    <Link href="/page-project-details" className="btn-view mt-20">View Details <i className="fa-light fa-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="work__item">
                                <span>02</span>
                                <div className="content">
                                    <h4 className="mb-10">Idea & Concept</h4>
                                    <p>We arrange meetings with our customers at a designated location to thoroughly discuss their specific needs, preferences, and demands.</p>
                                    <Link href="/page-project-details" className="btn-view mt-20">View Details <i className="fa-light fa-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="work__item">
                                <span>03</span>
                                <div className="content">
                                    <h4 className="mb-10">User Testing</h4>
                                    <p>We arrange meetings with our customers at a designated location to thoroughly discuss their specific needs, preferences, and demands.</p>
                                    <Link href="/page-project-details" className="btn-view mt-20">View Details <i className="fa-light fa-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="work__item">
                                <span>04</span>
                                <div className="content">
                                    <h4 className="mb-10">Execute and Developed</h4>
                                    <p>We arrange meetings with our customers at a designated location to thoroughly discuss their specific needs, preferences, and demands.</p>
                                    <Link href="/page-project-details" className="btn-view mt-20">View Details <i className="fa-light fa-arrow-right" /></Link>
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
export default Work