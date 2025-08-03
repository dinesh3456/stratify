import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const CloudMigrationContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      <img
        className="w-100"
        src="assets/images/resource/cloud-migration-main.jpg"
        alt="Cloud Migration Services"
      />
      <h3 className="mt-4">Cloud & Data Transformation</h3>
      <p>
        Each and every customer's journey to the cloud is unique and needs a
        tailored approach. We acknowledge that building secure and optimized
        cloud environments can be challenging, especially when time and
        knowledge are not readily available.
      </p>
      <p>
        We offer a wide array of flexible solutions to suit every customer's
        needs. Our cloud transformation services enable organizations to
        leverage the full potential of cloud computing while ensuring security,
        scalability, and cost-effectiveness.
      </p>
      <p>
        Our experienced team ensures a smooth transition to the cloud while
        maintaining business continuity. We provide end-to-end support from
        initial assessment to post-migration optimization, ensuring your
        organization realizes the full benefits of cloud transformation.
      </p>

      <div className="cloud-platforms mt-4">
        <h4>Our Cloud Platforms</h4>
        <ul className="platform-list">
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Comprehensive AWS migration and optimization services
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Enterprise Azure cloud solutions and migrations
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            GCP infrastructure and data analytics solutions
          </li>
        </ul>
      </div>

      <div className="content mt-40">
        <div className="text">
          <h3>Cloud Migration Process</h3>
          <p>
            Our comprehensive cloud migration process ensures a seamless
            transition with minimal disruption to your business operations.
          </p>
          <blockquote className="blockquote-one">
            We implement end-to-end encryption, secure transfer protocols, and
            comprehensive access controls following industry best practices and
            compliance requirements like GDPR, HIPAA, and SOC 2.
          </blockquote>
        </div>
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/cloud-assessment.jpg"
                alt="Cloud Assessment"
              />
              <p>
                Comprehensive evaluation of your current infrastructure and
                readiness with customized roadmap and architecture design for
                your cloud journey.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/cloud-optimization.jpg"
                alt="Cloud Optimization"
              />
              <p>
                Seamless migration with continuous optimization and monitoring
                to ensure peak performance and cost-effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="innerpage mt-25">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our cloud migration and
          transformation services.
        </p>
        <ServiceAccordion serviceType="cloud-migration" />
      </div>
    </div>
  );
};

export default CloudMigrationContent;
