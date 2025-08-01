import React from "react";
import Link from 'next/link';

function Portfolio() {

    return (
        <>
            
        <section className="portfolio-area pt-130 pb-130">
            <div className="container">
                <div className="row g-5 justify-content-between">
                    <div className="col-lg-6 col-xxl-4">
                        <div className="portfolio-left">
                            <div className="section-header">
                                <h6>OUR PORTFOLIO</h6>
                                <h2 className="wow splt-txt" data-splitting>Conduct market research to understand industry Quality workload.</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with Stratify-Tax/VAT ensures your books are accurate and updated in real-time, giving you peace of mind.</p>
                            </div>
                            <Link href="/page-portfolio" className="btn-one wow fadeInUp mt-50" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-6">
                        <div className="porfolio-right">
                            <div className="portfolio__item mb-30">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-image1.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <span className="number">01</span>
                                    <h4 className="title"><Link href="/page-portfolio-details">Organizational Culture & Leadership Alignment</Link></h4>
                                </div>
                            </div>
                            <div className="portfolio__item mb-30">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-image2.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <span className="number">02</span>
                                    <h4 className="title"><Link href="/page-portfolio-details">Strategic Planning & <br /> Development</Link></h4>
                                </div>
                            </div>
                            <div className="portfolio__item mb-30">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-image3.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <span className="number">03</span>
                                    <h4 className="title"><Link href="/page-portfolio-details">Operational Efficiency <br /> Optimization</Link></h4>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-image4.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <span className="number">04</span>
                                    <h4 className="title"><Link href="/page-portfolio-details">Tailored Consulting Solutions & Advisory Services</Link></h4>
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
export default Portfolio