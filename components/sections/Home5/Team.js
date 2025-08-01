import React from "react";
import Link from 'next/link';

function Team() {

    return (
        <>
            
        <section id="team-menu" className="team-five-area pt-130 pb-130">
            <div className="container">
                <div className="team-five__wrp">
                    <div className="section-header__flex mb-50">
                        <div>
                            <h6>ABOUT COMPANY</h6>
                            <h2 className="wow splt-txt" data-splitting>We are building great future <br /> Together, Be with us </h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Stratify provides a comprehensive range of consultancy and training services for data consultation, focusing on strategic business solutions and effective training methods.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="team-five__item">
                                <div className="image">
                                    <img src="assets/images/team/team-five-image1.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link href="/page-team-details" className="hover-link-light">Madison Loren</Link></h4>
                                    <span className="sub-title">Chief Executive</span>
                                    <div className="socials">
                                        <Link href="/"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link href="/"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="/"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-five__item">
                                <div className="image">
                                    <img src="assets/images/team/team-five-image2.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link href="/page-team-details" className="hover-link-light">Esther Howard</Link></h4>
                                    <span className="sub-title">Medical Assistant</span>
                                    <div className="socials">
                                        <Link href="/"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link href="/"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="/"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-five__item">
                                <div className="image">
                                    <img src="assets/images/team/team-five-image3.jpg" alt="image" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link href="/page-team-details" className="hover-link-light">Jenny Wilson</Link></h4>
                                    <span className="sub-title">Web Designer</span>
                                    <div className="socials">
                                        <Link href="/"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link href="/"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="/"><i className="fa-brands fa-linkedin-in" /></Link>
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
export default Team