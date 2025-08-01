import React from 'react';
import Link from 'next/link';


function About() {
    return (
        <>

        <section id="about-menu" className="about-thirteen-area bg-sub pt-130 pb-130">
            <div className="container">
                <div className="row g-0 g-lg-5">
                    <div className="col-xl-6">
                        <div className="about-thirteen__image">
                            <div className="row g-4 justify-content-center">
                                <div className="col-6">
                                    <img className="wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" src="assets/images/about/about-thirteen-image1.jpg" alt="image" />
                                </div>
                                <div className="col-6">
                                    <img className="wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms" src="assets/images/about/about-thirteen-image2.jpg" alt="image" />
                                </div>
                                <div className="col-6 wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <img className="image-last" src="assets/images/about/about-thirteen-image3.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two-right">
                            <div className="section-header mb-40">
                                <h2 className="wow splt-txt" data-splitting>We offer solutions that create Significant
                                    opportunities for the growth of your business.</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Being a
                                    prominent retail digital marketing company, we offer a variety of services to
                                    retail brands. We help our clients
                                    create strategic and highly effective retail marketing strategies. Results oriented
                                    retail digital marketing campaigns.</p>
                            </div>
                            <div className="about-two__content">
                                <ul className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <li><i className="fa-light fa-check" />Strategic Analysis for Businesses</li>
                                    <li><i className="fa-light fa-check" />24/7 Support at Any Time</li>
                                    <li><i className="fa-light fa-check" />Exceptional Atmosphere</li>
                                    <li><i className="fa-light fa-check" />Complimentary Breakfast</li>
                                </ul>
                                <ul className="wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <li><i className="fa-light fa-check" />Orientation for Business</li>
                                    <li><i className="fa-light fa-check" />No Booking Fees</li>
                                    <li><i className="fa-light fa-check" />Exceptional Atmosphere</li>
                                    <li><i className="fa-light fa-check" />Analyze the Problems You are Facing</li>
                                </ul>
                            </div>
                            <Link href="/page-about" className="btn-one wow fadeInDown mt-50" data-wow-delay="400ms" data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About;
