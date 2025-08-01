import React from "react";
import Link from 'next/link';

function Team() {

    return (
        <>

        <section id="team-menu" className="team-six-area pt-130 pb-130">
            <div className="container">
                <div className="team-six__wrp">
                    <div className="section-header text-center mb-50">
                        <h2 className="wow splt-txt" data-splitting>Bring your team together</h2>
                        <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with
                            Stratify-Tax/VAT ensures your books are accurate and <br /> updated in
                            real-time, giving you peace of mind.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="team-six__item">
                                <div className="image">
                                    <img src="assets/images/team/team-six-image1.jpg" alt="image" />
                                    <div className="socials light-area">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <ul>
                                            <li><Link href="/"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link href="/"><i className="fa fa-x"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><Link className="hover-link" href="/page-team-details">Brooklyn
                                        Simmons</Link></h4>
                                <span className="sub-title">Marketing Leader</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-six__item">
                                <div className="image">
                                    <img src="assets/images/team/team-six-image2.jpg" alt="image" />
                                    <div className="socials light-area">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <ul>
                                            <li><Link href="/"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link href="/"><i className="fa fa-x"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><Link className="hover-link" href="/page-team-details">Leslie
                                        Alexander</Link></h4>
                                <span className="sub-title">CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-six__item">
                                <div className="image">
                                    <img src="assets/images/team/team-six-image3.jpg" alt="image" />
                                    <div className="socials light-area">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <ul>
                                            <li><Link href="/"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link href="/"><i className="fa fa-x"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><Link className="hover-link" href="/page-team-details">Darlene
                                        Robertson</Link></h4>
                                <span className="sub-title">Junior Executive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Team;