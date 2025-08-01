import React from 'react';
import Link from 'next/link';

function Case() {    
    return (
        <>

        <section className="case-area pt-130">
            <div className="container">
                <div className="case__wrp">
                    <div className="section-header mb-50">
                        <h6>case studies</h6>
                        <h2 className="wow splt-txt" data-splitting>Our Case Studies</h2>
                    </div>
                    <div className="case__item">
                        <div className="row g-0">
                            <div className="col-lg-6 col-xl-7 col-xxl-8">
                                <div className="image">
                                    <img src="assets/images/case/case-image1.jpg" alt="image" />
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-right-long" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 col-xxl-4">
                                <div className="content">
                                    <h4 className="title"><Link href="/page-project-details" className="hover-link">Consultation Critical Role</Link></h4>
                                    <span className="sub-title">Branding Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case__item">
                        <div className="row g-0">
                            <div className="col-lg-6 col-xl-7 col-xxl-8">
                                <div className="image">
                                    <img src="assets/images/case/case-image2.jpg" alt="image" />
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-right-long" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 col-xxl-4">
                                <div className="content">
                                    <h4 className="title"><Link href="/page-project-details" className="hover-link">Sustainable Family Busienss</Link></h4>
                                    <span className="sub-title">Business Planning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case__item">
                        <div className="row g-0">
                            <div className="col-lg-6 col-xl-7 col-xxl-8">
                                <div className="image">
                                    <img src="assets/images/case/case-image3.jpg" alt="image" />
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-right-long" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 col-xxl-4">
                                <div className="content">
                                    <h4 className="title"><Link href="/page-project-details" className="hover-link">Marketing Analysis Strategy</Link></h4>
                                    <span className="sub-title">Market Plan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case__item">
                        <div className="row g-0">
                            <div className="col-lg-6 col-xl-7 col-xxl-8">
                                <div className="image">
                                    <img src="assets/images/case/case-image4.jpg" alt="image" />
                                    <Link href="/page-project-details" className="arry-btn"><i className="fa-light fa-arrow-right-long" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 col-xxl-4">
                                <div className="content">
                                    <h4 className="title"><Link href="/page-project-details" className="hover-link">Business Portfolio Design</Link></h4>
                                    <span className="sub-title">Brand Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/page-projects" className="btn-one dark-mode" data-splitting data-text="View All Cases">View All Cases</Link>
                </div>
            </div>
        </section>

        </>
    );
}
export default Case