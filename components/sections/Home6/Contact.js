import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';


function Contact() {
    return (
        <>

        <section id='contact-menu' className="contact-six-aera">
            <div className="row g-0">
                <div className="col-lg-7 order-2 order-lg-1">
                    <div className="contact-six__wrp" style={{ backgroundImage: `url(assets/images/bg/contact-six-bg.jpg)`}}>
                        <div className="contact-six__item">
                            <div className="section-header">
                                <h2 className="wow title text-white splt-txt" data-splitting>Have any new project? <br />
                                    Let’s discuss it.</h2>
                                <p className="text-white wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our
                                    dedicated team is always ready and available to provide the
                                    support you need, whenever you need it. We invite you to
                                    connect with us so we can discuss in detail how we can assist you further</p>
                            </div>
                            <div className="wrp">
                                <div className="count-item wow fadeInDown" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <h2 className="text-white"><span className="count text-white"><CounterUp end={99} /></span>%</h2>
                                    <p className="text-white">Client Satisfaction</p>
                                </div>
                                <div className="count-item wow fadeInDown" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <h2 className="text-white"><span className="count text-white"><CounterUp end={86} /></span>+</h2>
                                    <p className="text-white">Expert Team</p>
                                </div>
                                <div className="count-item wow fadeInDown" data-wow-delay="400ms"
                                    data-wow-duration="1500ms">
                                    <h2 className="text-white"><span className="count text-white"><CounterUp end={80} /></span>%</h2>
                                    <p className="text-white">Product Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                    <div className="contact-six__image ">
                        <img src="assets/images/contact/contact-six-image.jpg" alt="image" />
                        <Link href="/contact" className="circle-btn">
                            <span><i className="fa-light fa-arrow-right"></i></span>
                            <span>Contact us</span> <span>Now</span></Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Contact;
