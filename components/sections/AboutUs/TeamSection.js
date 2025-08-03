import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    image: "assets/images/team/team-image2.jpg",
    name: "Sreekala Alavala",
    role: "Managing Partner",
    delay: "200ms",
  },

  {
    image: "assets/images/team/team-image4.jpg",
    name: "Prabu Subbarao",
    role: "Chief Operating Officer",
    delay: "200ms",
  },
  {
    image: "assets/images/team/team-image3.jpg",
    name: "Jonathan Roy",
    role: "Head of Operations, USA",
    delay: "00ms",
  },
  {
    image: "assets/images/team/team-image1.jpg",
    name: "Srikanth Dharmana",
    role: "Head of Operations, INDIA",
    delay: "00ms",
  },
];

function TeamSection() {
  return (
    <>
      <section className="team-area pt-130 pb-130">
        <div className="container">
          <div className="team__wrp">
            <div className="row g-5">
              <div className="col-xl-5">
                <div className="team__left">
                  <div className="section-header">
                    <h6>OUR TEAM</h6>
                    <h2 className="wow splt-txt" data-splitting>
                      Our Leadership Team
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      Meet the visionary leaders driving innovation and
                      excellence at Stratify. Our diverse team of experts brings
                      together decades of experience in technology, strategy,
                      and business transformation.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-one wow fadeInUp mt-50"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                    data-splitting
                    data-text="Join Our Team"
                  >
                    Join Our Team
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
                        <div
                          className={`team__item ${
                            index % 2 === 0 ? "" : "mt-60"
                          }`}
                        >
                          <div className="team__image">
                            <img src={member.image} alt={member.name} />
                          </div>
                          <div className="team__content">
                            <h4>
                              <Link href="#" className="hover-link">
                                {member.name}
                              </Link>
                            </h4>
                            <span>{member.role}</span>
                          </div>
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

export default TeamSection;
