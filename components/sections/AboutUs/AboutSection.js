import React from "react";
import Link from "next/link";

function AboutHero() {
  return (
    <>
      <section className="about-two-area bg-sub pt-130 pb-130">
        <div className="container">
          <div className="row g-5">
            {/* Left Side */}
            <div className="col-xl-6">
              <div className="about-two-left">
                <div className="section-header mb-50">
                  <h6>ABOUT STRATIFY</h6>
                </div>

                <div className="about-two__image imageUpToDown wow gsap__parallax">
                  <img
                    src="assets/images/about/about-two-image.jpg"
                    alt="About Stratify"
                  />
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
                    We're dedicated to pushing the boundaries of what's possible
                    in the world of software solutions.
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    With a focus on cutting-edge technology and a passion for
                    excellence, we deliver innovative solutions that drive
                    business transformation. Our team of experts specializes in
                    AI, cloud computing, and digital innovation.
                  </p>
                </div>

                <div className="row g-4">
                  <div className="col-sm-6">
                    <div
                      className="about-two__info wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="about-two__info-icon">
                        <i className="fa-solid fa-chart-line"></i>
                      </div>
                      <div>
                        <h5>Best Services</h5>
                        <p>
                          Enabling Tomorrow's Possibilities with Smart, Scalable
                          Solutions Today
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="about-two__info wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="about-two__info-icon">
                        <i className="fa-solid fa-headset"></i>
                      </div>
                      <div>
                        <h5>24/7 Call Support</h5>
                        <p>Always On, Always Here – You Can Count On</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-one wow fadeInUp mt-50"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                  data-splitting
                  data-text="Explore More"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
