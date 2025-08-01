import React from 'react';
import Link from 'next/link';

const teamMembers = [
    {
        image: "assets/images/team/team-four-image1.jpg",
        name: "Brooklyn Simmons",
        role: "Marketing Leader",
        delay: "00ms"
    },
    {
        image: "assets/images/team/team-four-image2.jpg",
        name: "Charlotte Martinez",
        role: "CEO & Founder",
        delay: "200ms"
    },
    {
        image: "assets/images/team/team-four-image3.jpg",
        name: "Leslie Alexander",
        role: "Medical Assistant",
        delay: "00ms"
    },
    {
        image: "assets/images/team/team-four-image4.jpg",
        name: "Marvin McKinney",
        role: "Marketing Leader",
        delay: "200ms"
    },
    {
        image: "assets/images/team/team-four-image5.jpg",
        name: "Arlene McCoy",
        role: "Co-Ordinator",
        delay: "200ms"
    },
    {
        image: "assets/images/team/team-four-image6.jpg",
        name: "Darlene Robertson",
        role: "Merchandiser",
        delay: "200ms"
    }
];

function Teams() {    
    return (
        <>
        
        <section id="team-menu" className="team-two-area pt-130 pb-130">
            <div className="container">
                <div class="row g-5">
                    <div class="col-xl-4">
                        <div class="team__left">
                            <div class="section-header">
                                <h2 class="wow splt-txt" data-splitting>Bring your team together & foster a sense of unity collaboration</h2>
                                <p class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with Stratify-Tax/VAT ensures your books are accurate and updated in real-time, giving you peace of mind.</p>
                            </div>
                            <Link href="/page-team" class="btn-one wow fadeInUp mt-50" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="row g-4 g-lg-5">
                            {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`col-sm-6 col-xl-4 wow fadeInLeft`}
                                data-wow-delay={member.delay}
                                data-wow-duration="1500ms"
                            >
                                <div className={`team-two__item ${index % 2 === 0 ? 'have-margin' : ''}`}>
                                    <div className="socials">
                                        <i className="fa-regular fa-plus" />
                                        <ul>
                                            <li><Link href="/"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={member.image} alt="team member" />
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">{member.role}</span>
                                        <h4 className="title">
                                            <Link className="hover-link-light" href="/page-team-details">{member.name}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default Teams;