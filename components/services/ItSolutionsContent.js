import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const ItSolutionsContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Step 1 & 2: Hero Banner with updated images */}
      <div className="it-hero-banner mb-4">
        <img
          className="w-100 rounded"
          src="/assets/images/itservice/it-solutions-hero.jpg"
          alt="IT Solutions & Consulting - Comprehensive technology services"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Step 3: Updated main content */}
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
        Transform your IT operations with strategic consulting, advanced
        security solutions, and reliable support services that ensure business
        continuity and drive digital transformation success.
      </p>

      {/* Step 4: Updated IT Capabilities in 3-column grid */}
      <div className="it-capabilities mt-5">
        <h4 className="mb-4">Our IT Service Capabilities</h4>
        <div className="row">
          {/* Cybersecurity & Risk Management */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-shield-alt"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Cybersecurity & Risk Management
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Advanced threat detection and prevention
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Security audits and compliance management
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Incident response and recovery
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Security awareness training
                </li>
              </ul>
            </div>
          </div>

          {/* Network Infrastructure & Management */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-network-wired"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Network Infrastructure & Management
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Network design and optimization
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  24/7 network monitoring
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Wireless and LAN/WAN solutions
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Performance troubleshooting
                </li>
              </ul>
            </div>
          </div>

          {/* IT Consulting & Strategy */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-users-cog"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">IT Consulting & Strategy</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Digital transformation planning
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Technology roadmap development
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  IT governance and policy creation
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Budget planning and optimization
                </li>
              </ul>
            </div>
          </div>

          {/* 24/7 Technical Support & Monitoring */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-headset"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                24/7 Technical Support & Monitoring
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Round-the-clock help desk support
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Proactive system monitoring
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Remote troubleshooting
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Emergency response services
                </li>
              </ul>
            </div>
          </div>

          {/* System Integration & Modernization */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-cogs"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                System Integration & Modernization
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Legacy system modernization
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  API development and integration
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Data migration and synchronization
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Backup & Disaster Recovery */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-database"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Backup & Disaster Recovery</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Automated backup solutions
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Business continuity planning
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Disaster recovery testing
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  RTO/RPO optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: IT Transformation Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>IT Transformation Approach</h3>
          <p>
            Our structured approach to IT transformation ensures minimal
            disruption while maximizing the benefits of modern technology
            solutions and robust security frameworks.
          </p>
          <blockquote className="blockquote-one">
            We implement multi-layered security frameworks, conduct regular
            security assessments, and ensure compliance with industry standards
            to protect your IT infrastructure from evolving cyber threats.
          </blockquote>
        </div>

        {/* Step 6: Updated process cards with new images */}
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/itservice/it-assessment-strategy.jpg"
                  alt="IT Assessment & Strategy"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Comprehensive IT Assessment</h5>
                <p>
                  Thorough evaluation of your current IT infrastructure,
                  security posture, and operational processes to identify
                  optimization opportunities and strategic improvements.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/itservice/it-implementation-support.jpg"
                  alt="IT Implementation & Support"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Implementation & Ongoing Support</h5>
                <p>
                  Seamless implementation of IT solutions with comprehensive
                  change management, team training, and 24/7 ongoing support to
                  ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7: Technology Stack - IT Solutions Tools */}
      <div className="it-tech-stack mt-5">
        <h3 className="mb-4">Our IT Solutions Technology Stack</h3>
        <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
          <img
            className="w-100"
            src="/assets/images/itservice/it-tech-stack.jpg"
            alt="IT Solutions Technology Stack"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <p className="mt-3 text-muted">
            <em>
              Comprehensive IT technology stack featuring security tools,
              monitoring platforms, and enterprise solutions
            </em>
          </p>
        </div>
      </div>

      {/* Use Cases / Portfolio Examples */}
      <div className="it-use-cases mt-5">
        <h3 className="mb-4">IT Solutions in Action</h3>
        <div className="row">
          {/* Enterprise Security Solutions */}
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
                    className="fas fa-lock"
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
                  Enterprise Security Solutions
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Advanced cybersecurity implementations protecting against
                  evolving threats and ensuring compliance
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Modernization */}
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
                    className="fas fa-server"
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
                  Infrastructure Modernization
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Legacy system upgrades and infrastructure optimization for
                  improved performance and efficiency
                </p>
              </div>
            </div>
          </div>

          {/* 24/7 Managed Services */}
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
                    className="fas fa-clock"
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
                  24/7 Managed Services
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Round-the-clock monitoring, support, and maintenance ensuring
                  optimal system performance
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
          Get answers to common questions about our IT solutions and consulting
          services.
        </p>
        <ServiceAccordion serviceType="it-solutions" />
      </div>

      {/* Step 9: Footer CTA Section */}
      <div className="it-cta-section mt-5 p-4 bg-light rounded text-white text-center">
        <h4 className="mb-3">Ready to Modernize Your IT Infrastructure?</h4>
        <p className="mb-4">
          Let's discuss how our comprehensive IT solutions can enhance your
          operational efficiency and security posture.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-dark btn-lg me-3">
            Get IT Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItSolutionsContent;
