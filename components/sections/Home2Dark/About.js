import React from "react";
import Link from 'next/link';

function About() {

    // Avoid duplicated list items by using arrays
    const listOne = [
        "Strategic Analysis for Businesses",
        "24/7 Support at Any Time",
        "Exceptional Atmosphere",
        "Complimentary Breakfast",
    ];

    const listTwo = [
        "Orientation for Business",
        "No Booking Fees",
        "Exceptional Atmosphere",
        "Analyze the Problems You are Facing",
    ];

    return (
        <section id="about-menu" className="about-two-area bg-sub pt-130 pb-130">
            <div className="container">
                <div className="row g-5">
                    {/* Left Side */}
                    <div className="col-xl-6">
                        <div className="about-two-left">
                            <div className="section-header mb-50">
                                <h6>ABOUT STRATIFY</h6>
                                <h2 className="wow splt-txt" data-splitting>
                                    We work with you to Make your <br /> Vision a Reality
                                </h2>
                            </div>

                            <div className="about-two__image imageUpToDown wow gsap__parallax">
                                <img src="assets/images/about/about-two-image.jpg" alt="image" />
                                <div className="about-two__rectangle">
                                    <div className="item-one wow" />
                                    <div className="item-two wow" />
                                    <div className="item-three wow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6">
                        <div className="about-two-right">
                            <div className="section-header mb-40">
                                <h2 className="wow splt-txt" data-splitting>
                                    We offer solutions that create Significant opportunities for the growth of your business.
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    Being a prominent retail digital marketing company, we offer a variety of services to retail brands.
                                    We help our clients create strategic and highly effective retail marketing strategies. Results oriented retail digital marketing campaigns.
                                </p>
                            </div>

                            <div className="about-two__content">
                                {/* First List */}
                                <ul className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    {listOne.map((item, index) => (
                                        <li key={`list1-${index}`}>
                                            <i className="fa-light fa-check" /> {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Second List */}
                                <ul className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    {listTwo.map((item, index) => (
                                        <li key={`list2-${index}`}>
                                            <i className="fa-light fa-check" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/page-about" className="btn-one dark-mode mt-50 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" data-splitting data-text="Discover More">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
