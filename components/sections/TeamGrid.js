import React from 'react';
import Link from 'next/link';


function TeamGrid() {
    return (
        <>

        <section className="team-five-area pt-120 pb-120">
            <div className="container-lg">
                <div className="row g-4 g-lg-5">
                    <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="team__item">
                            <div className="socials">
                                <i className="fa-regular fa-plus" />
                                <ul>
                                    <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="team__image">
                                <img src="assets/images/team/team-four-image1.jpg" alt="image" />
                            </div>
                            <h4><Link className="hover-link" href="/page-team-details">Brooklyn Simmons</Link></h4>
                            <span>Marketing Leader</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team__item">
                            <div className="socials">
                                <i className="fa-regular fa-plus" />
                                <ul>
                                    <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="team__image">
                                <img src="assets/images/team/team-four-image2.jpg" alt="image" />
                            </div>
                            <h4><Link className="hover-link" href="/page-team-details">Leslie Alexander</Link></h4>
                            <span>CEO & Founder</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="team__item">
                            <div className="socials">
                                <i className="fa-regular fa-plus" />
                                <ul>
                                    <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="team__image">
                                <img src="assets/images/team/team-four-image3.jpg" alt="image" />
                            </div>
                            <h4><Link className="hover-link" href="/page-team-details">Charlotte Martinez </Link></h4>
                            <span>Web Designer</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="team__item">
                            <div className="socials">
                                <i className="fa-regular fa-plus" />
                                <ul>
                                    <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="team__image">
                                <img src="assets/images/team/team-four-image4.jpg" alt="image" />
                            </div>
                            <h4><Link className="hover-link" href="/page-team-details">Marvin McKinney</Link></h4>
                            <span>Marketing Leader</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team__item">
                            <div className="socials">
                                <i className="fa-regular fa-plus" />
                                <ul>
                                    <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="team__image">
                                <img src="assets/images/team/team-four-image5.jpg" alt="image" />
                            </div>
                            <h4><Link className="hover-link" href="/page-team-details">Arlene McCoy</Link></h4>
                            <span>Co-Ordinator</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="team__item">
                            <div className="socials">
                                <i className="fa-regular fa-plus" />
                                <ul>
                                    <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="team__image">
                                <img src="assets/images/team/team-four-image6.jpg" alt="image" />
                            </div>
                            <h4><Link className="hover-link" href="/page-team-details">Darlene Robertson</Link></h4>
                            <span>Merchandiser</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default TeamGrid
