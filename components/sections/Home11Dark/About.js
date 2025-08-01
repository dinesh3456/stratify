import React from 'react';
import Link from 'next/link';


function About() {
    return (
        <>

        <section id="about-menu" className="about-eleven-area">
            <div className="container">
                <div className="section-header text-center mb-80">
                    <h6>About Company</h6>
                    <h2 className="wow splt-txt" data-splitting>Guardians of the Digital Realm Our <br /> Mission and
                        Expertise</h2>
                </div>
                <div className="about-eleven__wrp">
                    <div className="row g-5 g-xl-0">
                        <div className="col-xl-5">
                            <div className="about-eleven__year">
                                <h2 className="count">39</h2>
                                <span>Years Of Experience In Cyber <br /> Security Services</span>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="about-eleven-right">
                                <div className="about-eleven__content">
                                    <h4 className="wow splt-txt" data-splitting>Safeguarding the Future Our Mission in
                                        <br /> the Digital Landscah </h4>
                                    <p className="text mt-20">We approached Stratify with complex project Designing a
                                        website can involve various aspects such as layout, graphics, content, and
                                        experience For a more specific response, could you please elaborate</p>
                                    <div className="info mt-30">
                                        <Link href="/page-about" className="arrow-btn">Continue Reading <i className="fa-regular fs-14 fa-angle-right"></i></Link>
                                        <img src="assets/images/about/about-ten-info-dark.png" alt="image" />
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
export default About;
