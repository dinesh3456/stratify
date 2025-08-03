import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const ItSolutionsContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      <img
        className="w-100"
        src="assets/images/resource/it-solutions-main.jpg"
        alt="IT Solutions & Consulting"
      />
      <h3 className="mt-4">IT Solutions & Consulting</h3>
      <p>
        Scalable, flexible and fully managed IT solutions across cybersecurity,
        risk, network, cloud, and support. Simplify your IT environment while
        focusing on growth and customer acquisition with our expert team by your
        side.
      </p>
      <p>
        Our comprehensive IT solutions help organizations modernize their
        technology infrastructure, improve operational efficiency, and enhance
        security posture while reducing costs and complexity.
      </p>
      <p>
        From strategic IT planning to implementation and ongoing support, we
        provide end-to-end technology solutions that align with your business
        objectives and drive digital transformation.
      </p>

      <div className="it-services mt-4">
        <h4>Our IT Service Areas</h4>
        <ul className="service-list">
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Cybersecurity & Risk Management
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Network Infrastructure & Management
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            IT Consulting & Strategy
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            24/7 Technical Support & Monitoring
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            System Integration & Modernization
          </li>
        </ul>
      </div>

      <div className="content mt-40">
        <div className="text">
          <h3>IT Transformation Approach</h3>
          <p>
            Our structured approach to IT transformation ensures minimal
            disruption while maximizing the benefits of modern technology
            solutions.
          </p>
          <blockquote className="blockquote-one">
            We implement robust security frameworks, compliance standards, and
            best practices to protect your organization from evolving cyber
            threats.
          </blockquote>
        </div>
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/it-assessment.jpg"
                alt="IT Assessment"
              />
              <p>
                Comprehensive IT infrastructure assessment and strategic
                planning to identify optimization opportunities and security
                gaps.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/it-implementation.jpg"
                alt="IT Implementation"
              />
              <p>
                Seamless implementation of IT solutions with change management,
                training, and ongoing support for your team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="innerpage mt-25">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our IT solutions and consulting
          services.
        </p>
        <ServiceAccordion serviceType="it-solutions" />
      </div>
    </div>
  );
};

export default ItSolutionsContent;
