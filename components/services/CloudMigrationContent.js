import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const CloudMigrationContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Step 1 & 2: Hero Banner with updated images */}
      <div className="cloud-hero-banner mb-4">
        <img
          className="w-100 rounded"
          src="/assets/images/cloudservice/cloud-migration-hero.jpg"
          alt="Cloud Migration Services - Seamless cloud transformation"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Step 3: Updated main content */}
      <h3 className="mt-4">Cloud Migration & Data Transformation</h3>
      <p>
        Seamlessly migrate your infrastructure to the cloud and harness the
        power of data with engineered solutions that unlock agility and insight.
        From assessment to optimization, we ensure your cloud journey is secure
        and efficient.
      </p>
      <p>
        Our cloud transformation services enable organizations to leverage the
        full potential of cloud computing while ensuring security, scalability,
        and cost-effectiveness. We provide end-to-end support from initial
        assessment to post-migration optimization.
      </p>
      <p>
        Transform your infrastructure with advanced cloud technologies,
        automated deployment pipelines, and intelligent monitoring that drive
        operational excellence and strategic business growth.
      </p>

      {/* Step 4: Updated Cloud Capabilities in 3-column grid */}
      <div className="cloud-capabilities mt-5">
        <h4 className="mb-4">Our Cloud Capabilities</h4>
        <div className="row">
          {/* AWS Cloud Solutions */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fab fa-aws"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">AWS Cloud Solutions</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Comprehensive AWS migration and optimization
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  EC2, S3, RDS, and Lambda implementations
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Auto-scaling and load balancing
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Cost optimization strategies
                </li>
              </ul>
            </div>
          </div>

          {/* Microsoft Azure Solutions */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fab fa-microsoft"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Microsoft Azure Solutions</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Enterprise Azure migrations
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Azure DevOps and CI/CD pipelines
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Active Directory integration
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Hybrid cloud architectures
                </li>
              </ul>
            </div>
          </div>

          {/* Google Cloud Platform */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fab fa-google"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Google Cloud Platform (GCP)</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  GCP infrastructure and data analytics
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  BigQuery and data warehousing
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Kubernetes and containerization
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Machine learning integrations
                </li>
              </ul>
            </div>
          </div>

          {/* Cloud Security & Compliance */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-shield-alt"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">Cloud Security & Compliance</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  End-to-end encryption protocols
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  GDPR, HIPAA, SOC 2 compliance
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Identity and access management
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Security auditing and monitoring
                </li>
              </ul>
            </div>
          </div>

          {/* DevOps & Automation */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-cogs"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">DevOps & Automation</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  CI/CD pipeline implementation
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
                  Automated deployment strategies
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Container orchestration
                </li>
              </ul>
            </div>
          </div>

          {/* Cloud Monitoring & Optimization */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-chart-line"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Cloud Monitoring & Optimization
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  24/7 performance monitoring
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Cost optimization and tracking
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Resource utilization analysis
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Automated scaling solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Cloud Migration Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>Cloud Migration Process</h3>
          <p>
            Our comprehensive cloud migration process ensures seamless
            transition with minimal disruption to your business operations and
            maximum return on investment.
          </p>
          <blockquote className="blockquote-one">
            We implement end-to-end encryption, secure transfer protocols, and
            comprehensive access controls following industry best practices and
            compliance requirements like GDPR, HIPAA, and SOC 2.
          </blockquote>
        </div>

        {/* Step 6: Updated process cards with new images */}
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/cloudservice/cloud-assessment-strategy.jpg"
                  alt="Cloud Assessment & Strategy"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Strategic Cloud Assessment</h5>
                <p>
                  Comprehensive evaluation of your current infrastructure,
                  applications, and readiness with customized roadmap and
                  architecture design for your cloud journey.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/cloudservice/cloud-migration-optimization.jpg"
                  alt="Cloud Migration & Optimization"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Migration & Continuous Optimization</h5>
                <p>
                  Seamless migration execution with real-time monitoring,
                  performance optimization, and ongoing cost management to
                  ensure maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7: Technology Stack - Cloud Migration Tools */}
      <div className="cloud-tech-stack mt-5">
        <h3 className="mb-4">Our Cloud Migration Technology Stack</h3>
        <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
          <img
            className="w-100"
            src="/assets/images/cloudservice/cloud-tech-stack.jpg"
            alt="Cloud Migration Technology Stack"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <p className="mt-3 text-muted">
            <em>
              Comprehensive cloud migration technology stack featuring AWS,
              Azure, GCP, and DevOps tools
            </em>
          </p>
        </div>
      </div>

      {/* Use Cases / Portfolio Examples */}
      <div className="cloud-use-cases mt-5">
        <h3 className="mb-4">Cloud Migration Success Stories</h3>
        <div className="row">
          {/* Enterprise Cloud Migration */}
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
                  Enterprise Cloud Migration
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Secure, scalable enterprise migrations with zero data loss and
                  minimal downtime
                </p>
              </div>
            </div>
          </div>

          {/* Multi-Cloud Strategy */}
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
                    className="fas fa-network-wired"
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
                  Multi-Cloud Strategy
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Strategic multi-cloud implementations for maximum flexibility
                  and vendor independence
                </p>
              </div>
            </div>
          </div>

          {/* DevOps Transformation */}
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
                    className="fas fa-rocket"
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
                  DevOps Transformation
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Automated CI/CD pipelines and infrastructure as code
                  implementations
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
          Get answers to common questions about our cloud migration and
          transformation services.
        </p>
        <ServiceAccordion serviceType="cloud-migration" />
      </div>

      {/* Step 9: Footer CTA Section */}
      <div className="cloud-cta-section mt-5 p-4 bg-light rounded text-white text-center">
        <h4 className="mb-3">
          Ready to Transform Your Infrastructure with Cloud?
        </h4>
        <p className="mb-4">
          Let's discuss how our cloud migration services can enhance your
          business agility and reduce operational costs.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-dark btn-lg me-3">
            Start Your Cloud Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloudMigrationContent;
