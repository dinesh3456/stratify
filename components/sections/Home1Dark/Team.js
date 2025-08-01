import React from "react";
import Link from 'next/link';

const teamMembers = [
    {
        image: "assets/images/team/team-image1.jpg",
        name: "Brooklyn Simmons",
        role: "Marketing Leader",
        delay: "00ms"
    },
    {
        image: "assets/images/team/team-image2.jpg",
        name: "Leslie Alexander",
        role: "CEO & Founder",
        delay: "200ms"
    },
    {
        image: "assets/images/team/team-image3.jpg",
        name: "Savannah Nguyen",
        role: "Medical Assistant",
        delay: "00ms"
    },
    {
        image: "assets/images/team/team-image4.jpg",
        name: "Ronald Richards",
        role: "Web Designer",
        delay: "200ms"
    }
];

function Team() {
    return (
        <>
        
        <section id="team-menu" className="team-area pt-130">
            <div className="container">
                <div className="team__wrp">
                    <div className="row g-5">
                        <div className="col-xl-5">
                            <div className="team__left">
                                <div className="section-header">
                                    <h2 className="wow splt-txt" data-splitting>
                                        Bring your team together & foster a sense of unity collaboration
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        Partnering with Stratify-Tax/VAT ensures your books are accurate and updated in real-time, giving you peace of mind.
                                    </p>
                                </div>
                                <Link href="/page-team" className="btn-one dark-mode wow fadeInUp mt-50" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="View More">
                                    View More
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="team__right">
                                <div className="row g-4 g-lg-5">
                                    {teamMembers.map((member, index) => (
                                        <div
                                            key={index}
                                            className={`col-sm-6 wow fadeInLeft`}
                                            data-wow-delay={member.delay}
                                            data-wow-duration="1500ms"
                                        >
                                            <div className={`team__item ${index % 2 === 0 ? 'have-margin' : ''}`}>
                                                <div className="socials light-area">
                                                    <i className="fa-regular fa-plus" />
                                                    <ul>
                                                        <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                        <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                                        <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                                <div className="team__image">
                                                    <img src={member.image} alt="team member" />
                                                </div>
                                                <h4>
                                                    <Link className="hover-link" href="/page-team-details">
                                                        {member.name}
                                                    </Link>
                                                </h4>
                                                <span>{member.role}</span>
                                            </div>
                                        </div>
                                    ))}
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
export default Team;