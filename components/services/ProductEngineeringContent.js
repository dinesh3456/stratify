import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const ProductEngineeringContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      <img
        className="w-100"
        src="assets/images/resource/product-engineering-main.jpg"
        alt="Product Engineering & Development"
      />
      <h3 className="mt-4">Product Engineering & Development</h3>
      <p>
        Transform software portfolios with comprehensive product engineering.
        From ideation to deployment, we deliver resilient, future-ready
        solutions using cutting-edge technologies and agile methodologies.
      </p>
      <p>
        Our product engineering services encompass the entire software
        development lifecycle, ensuring scalable, maintainable, and
        high-performance applications that meet evolving business requirements.
      </p>
      <p>
        We combine technical expertise with deep industry knowledge to build
        products that not only meet current needs but are designed to scale and
        adapt to future challenges and opportunities.
      </p>

      <div className="engineering-services mt-4">
        <h4>Our Engineering Capabilities</h4>
        <ul className="engineering-list">
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Full-Stack Web & Mobile Development
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Cloud-Native Application Development
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            API Development & Integration
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            DevOps & CI/CD Implementation
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Quality Assurance & Testing
          </li>
        </ul>
      </div>

      <div className="content mt-40">
        <div className="text">
          <h3>Product Development Process</h3>
          <p>
            Our agile product development process ensures rapid delivery of
            high-quality solutions while maintaining flexibility to adapt to
            changing requirements.
          </p>
          <blockquote className="blockquote-one">
            We follow industry best practices for secure coding, performance
            optimization, and scalable architecture design to ensure your
            products are robust and future-ready.
          </blockquote>
        </div>
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/product-design.jpg"
                alt="Product Design"
              />
              <p>
                User-centered design and architecture planning that ensures
                optimal user experience and technical excellence from the ground
                up.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/product-deployment.jpg"
                alt="Product Deployment"
              />
              <p>
                Seamless deployment and ongoing maintenance with automated
                testing, monitoring, and continuous integration for reliable
                product delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="innerpage mt-25">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our product engineering and
          development services.
        </p>
        <ServiceAccordion serviceType="product-engineering" />
      </div>
    </div>
  );
};

export default ProductEngineeringContent;
