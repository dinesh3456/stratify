import React from 'react';
import Link from 'next/link';


function About() {
    return (
        <>

        <section id="about-menu" className="about-six-area">
            <div className="about-six__bg">
                <img src="assets/images/bg/about-six-bg.png" alt="image" />
            </div>
            <div className="container">
                <div className="about-six__wrp">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-six__image">
                                <img className="bounceInLeft wow animation__arryLeftRight" src="assets/images/about/about-six-image.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-six__item">
                                <div className="section-header">
                                    <h6>About STRATIFY</h6>
                                    <h2 className="wow splt-txt" data-splitting>Experts in Providing Investment
                                        Consulting Services</h2>
                                    <p>At Stratify Business Consulting, we have built a network of dedicated
                                        professionals
                                        (consultants, analysts, strategists, and industry experts) who are passionate
                                        about
                                        delivering exceptional business solutions in an innovative</p>
                                </div>
                                <p className="text">Our culture fosters and strives for innovation, creativity, and business
                                    expertise,
                                    with a strong client-cantered focus. Every day, we cultivate an entrepreneurial
                                    environment that is both flexible and supportive.</p>
                                <p className="text">Call us 24/7. Let’s start fighting together.</p>
                                <h4 className="number">
                                    <Link href="/" className="hover-link">3333-000-000</Link>
                                    <span>Or</span>
                                    <Link href="/" className="hover-link">3333-000-000</Link>
                                </h4>
                                <div className="info">
                                    <img src="assets/images/about/about-six-sing.png" alt="sing-image" />
                                    <div>
                                        <h6>Harry Oliver,</h6>
                                        <p>CEO of Stratify Business Consulting</p>
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
