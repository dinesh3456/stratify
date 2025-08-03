import React, { useState } from "react";
import Link from "next/link";

function ChooseUs() {
  const [activeIndex, setActiveIndex] = useState(2);
  const tabs = [
    { index: 1, label: "Why Need Consultation?" },
    { index: 2, label: "Why Choose Us" },
    { index: 3, label: "How it Works" },
  ];

  // Refined to 4 most impactful points for elegant 2x2 layout
  const whyChooseUsFeatures = [
    {
      number: "01",
      title: "Cutting-Edge AI & Technology",
      description:
        "We leverage the latest AI, cloud, and emerging technologies to deliver future-ready solutions that keep you ahead in the digital transformation.",
    },
    {
      number: "02",
      title: "Proven Track Record",
      description:
        "Years of experience delivering successful projects across healthcare, finance, and manufacturing with measurable results and ROI.",
    },
    {
      number: "03",
      title: "Innovation-First Approach",
      description:
        "We push boundaries and transform ideas into scalable, intelligent solutions that drive sustainable growth and competitive advantage.",
    },
    {
      number: "04",
      title: "End-to-End Excellence",
      description:
        "From strategy to deployment and beyond, we provide comprehensive support with integrity, transparency, and unwavering commitment to quality.",
    },
  ];

  const consultationFeatures = [
    {
      number: "01",
      title: "Strategic Planning & Vision",
      description:
        "We help define clear requirements with precision, clarifying your vision and capturing unique business needs for digital transformation.",
    },
    {
      number: "02",
      title: "Risk Mitigation & Assessment",
      description:
        "Avoid costly mistakes with expert consultation upfront. We identify potential challenges and optimize your technology investment strategy.",
    },
    {
      number: "03",
      title: "Technology Roadmap",
      description:
        "Get a comprehensive assessment and strategic roadmap that aligns technology decisions with your business objectives and growth plans.",
    },
  ];

  const workingProcess = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "Deep analysis of your business needs, challenges, and goals through comprehensive stakeholder engagement and market research.",
    },
    {
      number: "02",
      title: "Design & Innovation",
      description:
        "Transform concepts into tangible experiences with rapid prototyping, user-centered design, and cutting-edge technology integration.",
    },
    {
      number: "03",
      title: "Development & Deployment",
      description:
        "Agile development with continuous integration, rigorous testing, and seamless deployment of scalable, production-ready solutions.",
    },
  ];

  return (
    <>
      <section className="choose-one-area bg-sub pt-130">
        <div className="row g-0">
          <div className="col-xl-7 order-2 order-xl-1">
            <div className="choose-one__wrp">
              <div className="section-header mb-50">
                <h2 className="wow splt-txt" data-splitting>
                  Enabling Tomorrow's Possibilities with <br /> Smart, Scalable
                  Solutions Today
                </h2>
              </div>

              {/* Tabs */}
              <div className="choose__tab">
                <ul className="nav nav-tabs" role="tablist">
                  {tabs.map((tab) => (
                    <li
                      className="nav-item"
                      key={tab.index}
                      role="presentation"
                    >
                      <button
                        className={`nav-link ${
                          activeIndex === tab.index ? "active" : ""
                        }`}
                        onClick={() => setActiveIndex(tab.index)}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tab Content */}
              <div className="tab-content mt-50">
                {/* Why Need Consultation Tab */}
                {activeIndex === 1 && (
                  <div className="tab-pane active">
                    <div className="choose-one__content">
                      <p className="mb-50">
                        In today's rapidly evolving digital landscape, making
                        the right technology decisions is crucial for business
                        success. Expert consultation ensures you invest in
                        solutions that deliver measurable results and long-term
                        value.
                      </p>
                      <div className="choose-one__elegant-grid">
                        {consultationFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="choose-one__elegant-item wow fadeInUp"
                            data-wow-delay={`${index * 150}ms`}
                            data-wow-duration="1200ms"
                          >
                            <div className="choose-one__number-badge">
                              <span>{feature.number}</span>
                            </div>
                            <div className="choose-one__elegant-content">
                              <h4 className="choose-one__elegant-title">
                                {feature.title}
                              </h4>
                              <p className="choose-one__elegant-desc">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="btn-one mt-60"
                        data-splitting
                        data-text="Get Consultation"
                      >
                        Get Consultation
                      </Link>
                    </div>
                  </div>
                )}

                {/* Why Choose Us Tab */}
                {activeIndex === 2 && (
                  <div className="tab-pane active">
                    <div className="choose-one__content">
                      <p className="mb-50">
                        We're dedicated to pushing the boundaries of what's
                        possible in software solutions. With cutting-edge
                        technology, proven expertise, and unwavering commitment
                        to excellence, we transform businesses through
                        intelligent innovation.
                      </p>
                      <div className="choose-one__elegant-grid">
                        {whyChooseUsFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="choose-one__elegant-item wow fadeInUp"
                            data-wow-delay={`${index * 150}ms`}
                            data-wow-duration="1200ms"
                          >
                            <div className="choose-one__number-badge">
                              <span>{feature.number}</span>
                            </div>
                            <div className="choose-one__elegant-content">
                              <h4 className="choose-one__elegant-title">
                                {feature.title}
                              </h4>
                              <p className="choose-one__elegant-desc">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/page-about"
                        className="btn-one mt-60"
                        data-splitting
                        data-text="About Us"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                )}

                {/* How it Works Tab */}
                {activeIndex === 3 && (
                  <div className="tab-pane active">
                    <div className="choose-one__content">
                      <p className="mb-50">
                        Our proven methodology ensures successful project
                        delivery from concept to completion. We follow a
                        structured approach that maximizes efficiency, minimizes
                        risks, and delivers exceptional results every time.
                      </p>
                      <div className="choose-one__elegant-grid">
                        {workingProcess.map((feature, index) => (
                          <div
                            key={index}
                            className="choose-one__elegant-item wow fadeInUp"
                            data-wow-delay={`${index * 150}ms`}
                            data-wow-duration="1200ms"
                          >
                            <div className="choose-one__number-badge">
                              <span>{feature.number}</span>
                            </div>
                            <div className="choose-one__elegant-content">
                              <h4 className="choose-one__elegant-title">
                                {feature.title}
                              </h4>
                              <p className="choose-one__elegant-desc">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/page-service-details"
                        className="btn-one mt-60"
                        data-splitting
                        data-text="View Services"
                      >
                        View Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-5 order-1 order-xl-2">
            <div className="choose-one__image gsap__parallax">
              <img
                src="assets/images/choose/choose-one-image.jpg"
                alt="image"
              />
              <div className="choose-one__rectangle">
                <div className="item wow" />
                <div className="item-dark wow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS following website's default pattern */}
      <style jsx>{`
        .choose-one__elegant-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .choose-one__elegant-item {
          position: relative;
          background: transparent;
          border: 1px solid rgba(18, 28, 39, 0.1);
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .choose-one__elegant-item:hover {
          transform: translateY(-5px);
          border-color: rgba(18, 28, 39, 0.2);
          box-shadow: 0 10px 30px rgba(18, 28, 39, 0.1);
        }

        .choose-one__number-badge {
          position: absolute;
          top: -12px;
          right: 2rem;
          width: 36px;
          height: 36px;
          color: #fff !important; /* Force white color */
          background: #121c27;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
        }

        .choose-one__elegant-content {
          margin-top: 1rem;
        }

        .choose-one__elegant-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #121c27;
          line-height: 1.3;
        }

        .choose-one__elegant-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .choose-one__elegant-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .choose-one__elegant-item {
            padding: 1.5rem;
          }

          .choose-one__number-badge {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default ChooseUs;
