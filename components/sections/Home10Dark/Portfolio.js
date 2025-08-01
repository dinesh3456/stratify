import React from 'react';
import Link from 'next/link';

function Portfolio() {
    
    return (
        <>

        <section className="portfolio-ten-area pt-130 pb-130">
            <div className="container">
                <div className="row g-5 justify-content-between">
                    <div className="col-lg-6 col-xxl-4">
                        <div className="portfolio-left">
                            <div className="section-header">
                                <h6>OUR PORTFOLIO</h6>
                                <h2 className="wow splt-txt" data-splitting>Conduct market research to understand industry Quality workload.</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with Stratify-Tax/VAT ensures your books are accurate and updated in real-time, giving you peace of mind.</p>
                            </div>
                            <Link href="/page-portfolio" className="btn-one dark-mode wow fadeInUp mt-50" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-6">
                        <div className="porfolio-right">
                            <div className="portfolio-ten__item mb-50">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-ten-image1.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <div>
                                        <span className="sub-title">Cyber Security</span>
                                        <h4 className="title"><Link className="hover-link" href="/page-portfolio-details">Technology Assessment</Link></h4>
                                    </div>
                                    <Link href="/page-portfolio-details" className="btn-explore">Explore More <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="portfolio-ten__item mb-50">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-ten-image2.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <div>
                                        <span className="sub-title">Technology</span>
                                        <h4 className="title"><Link className="hover-link" href="/page-portfolio-details">Transforming Businesses</Link></h4>
                                    </div>
                                    <Link href="/page-portfolio-details" className="btn-explore">Explore More <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="portfolio-ten__item">
                                <div className="image">
                                    <img src="assets/images/protfolio/portfolio-ten-image3.jpg" alt="image" />
                                </div>
                                <div className="content pb-0 border-0">
                                    <div>
                                        <span className="sub-title">Technology</span>
                                        <h4 className="title"><Link className="hover-link" href="/page-portfolio-details">Accelerating Business</Link></h4>
                                    </div>
                                    <Link href="/page-portfolio-details" className="btn-explore">Explore More <i className="fa-regular fa-arrow-right"></i></Link>
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
export default Portfolio;