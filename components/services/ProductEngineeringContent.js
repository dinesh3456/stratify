import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const ProductEngineeringContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Step 1 & 2: Hero Banner with updated images */}
      <div className="product-hero-banner mb-4">
        <img
          className="w-100 rounded"
          src="/assets/images/productservice/product-engineering-hero.jpg"
          alt="Product Engineering & Development - End-to-end software solutions"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Step 3: Updated main content */}
      <h3 className="mt-4">Product Engineering & Development</h3>
      <p>
        Transform software portfolios with comprehensive product engineering.
        From ideation to deployment, we deliver resilient, future-ready
        solutions using cutting-edge technologies and agile methodologies.
      </p>
      <p>
        Our product engineering services encompass the entire software
        development lifecycle, ensuring scalable, maintainable, and
        high-performance applications that meet evolving business requirements
        and market demands.
      </p>
      <p>
        We combine technical expertise with deep industry knowledge to build
        products that not only meet current needs but are designed to scale and
        adapt to future challenges and market opportunities.
      </p>

      {/* Step 4: Updated Product Engineering Capabilities in 3-column grid */}
      <div className="product-capabilities mt-5">
        <h4 className="mb-4">Our Engineering Capabilities</h4>
        <div className="row">
          {/* Full-Stack Web Development */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-code"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Full-Stack Web Development</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  React, Angular, Vue.js frontend development
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Node.js, Python, Java backend systems
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  RESTful APIs and GraphQL development
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Progressive Web Applications (PWAs)
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Application Development */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-mobile-alt"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Mobile Application Development
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Native iOS and Android development
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  React Native and Flutter cross-platform
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Mobile UX/UI design and optimization
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  App store optimization and deployment
                </li>
              </ul>
            </div>
          </div>

          {/* Cloud-Native Development */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-cloud"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Cloud-Native Development</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Microservices architecture design
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Container orchestration with Kubernetes
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Serverless application development
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  AWS, Azure, GCP platform expertise
                </li>
              </ul>
            </div>
          </div>

          {/* DevOps & CI/CD */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-infinity"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">DevOps & CI/CD</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Automated deployment pipelines
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Infrastructure as Code (IaC)
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Monitoring and observability
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Release management and rollback strategies
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Assurance & Testing */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-bug"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Quality Assurance & Testing</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Automated testing frameworks
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Performance and load testing
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Security vulnerability assessment
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Code quality and review processes
                </li>
              </ul>
            </div>
          </div>

          {/* API Development & Integration */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-plug"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                API Development & Integration
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  RESTful and GraphQL API design
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Third-party service integrations
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  API documentation and testing
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Webhook and real-time data processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Product Development Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>Agile Product Development Process</h3>
          <p>
            Our agile product development process ensures rapid delivery of
            high-quality solutions while maintaining flexibility to adapt to
            changing requirements and market conditions.
          </p>
          <blockquote className="blockquote-one">
            We follow industry best practices for secure coding, performance
            optimization, and scalable architecture design to ensure your
            products are robust, future-ready, and built to scale with your
            business growth.
          </blockquote>
        </div>

        {/* Step 6: Updated process cards with new images */}
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/productservice/product-design-architecture.jpg"
                  alt="Product Design & Architecture"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Product Design & Architecture</h5>
                <p>
                  User-centered design and system architecture planning that
                  ensures optimal user experience, technical excellence, and
                  scalable solutions from the ground up.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/productservice/product-deployment-maintenance.jpg"
                  alt="Product Deployment & Maintenance"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Deployment & Continuous Support</h5>
                <p>
                  Seamless deployment with automated testing, monitoring, and
                  continuous integration for reliable product delivery and
                  ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7: Technology Stack - Product Engineering Tools */}
      <div className="product-tech-stack mt-5">
        <h3 className="mb-4">Our Product Engineering Technology Stack</h3>
        <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
          <img
            className="w-100"
            src="/assets/images/productservice/product-engineering-tech-stack.jpg"
            alt="Product Engineering Technology Stack"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <p className="mt-3 text-muted">
            <em>
              Comprehensive development technology stack featuring React,
              Node.js, Python, mobile frameworks, and cloud platforms
            </em>
          </p>
        </div>
      </div>

      {/* Use Cases / Portfolio Examples */}
      <div className="product-use-cases mt-5">
        <h3 className="mb-4">Product Engineering Success Stories</h3>
        <div className="row">
          {/* Enterprise Web Applications */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="capability-card h-100 p-4 border rounded position-relative overflow-hidden"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2c3e50";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(44, 62, 80, 0.15)";
                const icon = e.currentTarget.querySelector("i");
                if (icon) icon.style.color = "white";
                const title = e.currentTarget.querySelector("h5");
                if (title) title.style.color = "white";
                const text = e.currentTarget.querySelector("p");
                if (text) text.style.color = "rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8f9fa";
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                const icon = e.currentTarget.querySelector("i");
                if (icon) icon.style.color = "#3A5063";
                const title = e.currentTarget.querySelector("h5");
                if (title) title.style.color = "#333";
                const text = e.currentTarget.querySelector("p");
                if (text) text.style.color = "#6c757d";
              }}
            >
              <div className="text-center">
                <div className="mb-3">
                  <i
                    className="fas fa-laptop-code"
                    style={{
                      fontSize: "3rem",
                      color: "#3A5063",
                      transition: "color 0.3s ease",
                    }}
                  ></i>
                </div>
                <h5
                  className="mb-3"
                  style={{ color: "#333", transition: "color 0.3s ease" }}
                >
                  Enterprise Web Applications
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Scalable web applications with modern frameworks, optimized
                  performance, and enterprise-grade security
                </p>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="capability-card h-100 p-4 border rounded position-relative overflow-hidden"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2c3e50";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(44, 62, 80, 0.15)";
                const icon = e.currentTarget.querySelector("i");
                if (icon) icon.style.color = "white";
                const title = e.currentTarget.querySelector("h5");
                if (title) title.style.color = "white";
                const text = e.currentTarget.querySelector("p");
                if (text) text.style.color = "rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8f9fa";
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                const icon = e.currentTarget.querySelector("i");
                if (icon) icon.style.color = "#3A5063";
                const title = e.currentTarget.querySelector("h5");
                if (title) title.style.color = "#333";
                const text = e.currentTarget.querySelector("p");
                if (text) text.style.color = "#6c757d";
              }}
            >
              <div className="text-center">
                <div className="mb-3">
                  <i
                    className="fas fa-mobile"
                    style={{
                      fontSize: "3rem",
                      color: "#3A5063",
                      transition: "color 0.3s ease",
                    }}
                  ></i>
                </div>
                <h5
                  className="mb-3"
                  style={{ color: "#333", transition: "color 0.3s ease" }}
                >
                  Mobile App Development
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Native and cross-platform mobile applications with intuitive
                  UX and seamless performance across devices
                </p>
              </div>
            </div>
          </div>

          {/* Cloud-Native Solutions */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="capability-card h-100 p-4 border rounded position-relative overflow-hidden"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2c3e50";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(44, 62, 80, 0.15)";
                const icon = e.currentTarget.querySelector("i");
                if (icon) icon.style.color = "white";
                const title = e.currentTarget.querySelector("h5");
                if (title) title.style.color = "white";
                const text = e.currentTarget.querySelector("p");
                if (text) text.style.color = "rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8f9fa";
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                const icon = e.currentTarget.querySelector("i");
                if (icon) icon.style.color = "#3A5063";
                const title = e.currentTarget.querySelector("h5");
                if (title) title.style.color = "#333";
                const text = e.currentTarget.querySelector("p");
                if (text) text.style.color = "#6c757d";
              }}
            >
              <div className="text-center">
                <div className="mb-3">
                  <i
                    className="fas fa-cloud-upload-alt"
                    style={{
                      fontSize: "3rem",
                      color: "#3A5063",
                      transition: "color 0.3s ease",
                    }}
                  ></i>
                </div>
                <h5
                  className="mb-3"
                  style={{ color: "#333", transition: "color 0.3s ease" }}
                >
                  Cloud-Native Solutions
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Microservices architecture and containerized applications
                  built for scalability and high availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 8: FAQ Section */}
      <div className="innerpage mt-5">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our product engineering and
          development services.
        </p>
        <ServiceAccordion serviceType="product-engineering" />
      </div>

      {/* Step 9: Footer CTA Section */}
      <div className="product-cta-section mt-5 p-4 bg-light rounded text-white text-center">
        <h4 className="mb-3">Ready to Build Your Next Great Product?</h4>
        <p className="mb-4">
          Let's discuss how our product engineering expertise can bring your
          vision to life with scalable, modern solutions.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-dark btn-lg me-3">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductEngineeringContent;
