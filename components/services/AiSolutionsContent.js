import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const AiSolutionsContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      <img
        className="w-100"
        src="assets/images/resource/ai-solutions-main.jpg"
        alt="AI Solutions & Machine Learning"
      />
      <h3 className="mt-4">AI Solutions & Machine Learning</h3>
      <p>
        Future-ready AI capabilities to keep you ahead in the digital surge. We
        empower your business with AI-driven culture that drives long-term,
        sustainable growth through responsible AI solutions.
      </p>
      <p>
        Our AI solutions transform your operations with intelligent automation
        and data-driven insights. From machine learning models to natural
        language processing, we deliver cutting-edge AI technologies that
        revolutionize how you work.
      </p>
      <p>
        Transform raw data into actionable insights with advanced analytics,
        predictive modeling, and interactive dashboards that drive strategic
        decision-making for your organization.
      </p>

      <div className="ai-capabilities mt-4">
        <h4>Our AI Capabilities</h4>
        <ul className="capability-list">
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Machine Learning & Deep Learning Models
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Natural Language Processing (NLP)
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Computer Vision & Image Recognition
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Predictive Analytics & Forecasting
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Intelligent Automation & RPA
          </li>
        </ul>
      </div>

      <div className="content mt-40">
        <div className="text">
          <h3>AI Implementation Process</h3>
          <p>
            Our comprehensive AI implementation process ensures seamless
            integration of intelligent solutions into your existing workflows
            and systems.
          </p>
          <blockquote className="blockquote-one">
            We follow responsible AI principles, ensuring ethical
            implementation, transparency, and bias mitigation throughout the
            development and deployment process.
          </blockquote>
        </div>
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/ai-strategy.jpg"
                alt="AI Strategy"
              />
              <p>
                Strategic AI assessment and roadmap development tailored to your
                business objectives and technical requirements.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/ai-deployment.jpg"
                alt="AI Deployment"
              />
              <p>
                End-to-end AI model development, training, and deployment with
                continuous monitoring and optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="innerpage mt-25">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our AI solutions and machine
          learning services.
        </p>
        <ServiceAccordion serviceType="ai-solutions" />
      </div>
    </div>
  );
};

export default AiSolutionsContent;
