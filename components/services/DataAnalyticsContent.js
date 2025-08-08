import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const DataAnalyticsContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Step 1 & 2: Hero Banner with updated images */}
      <div className="data-hero-banner mb-4">
        <img
          className="w-100 rounded"
          src="/assets/images/dataservice/data-analytics-hero.jpg"
          alt="Data Analytics & Business Intelligence - Transform data into insights"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Step 3: Updated main content */}
      <h3 className="mt-4">Data Analytics & Business Intelligence</h3>
      <p>
        Power your strategy with high-volume, accurate, and compliant data.
        Transform raw data into actionable insights with advanced analytics,
        predictive modeling, and interactive dashboards that drive strategic
        decision-making.
      </p>
      <p>
        Our data analytics solutions help organizations unlock the full
        potential of their data assets, enabling data-driven decision making and
        competitive advantage through sophisticated analytics and visualization
        tools.
      </p>
      <p>
        From data collection and processing to advanced analytics and reporting,
        we provide comprehensive solutions that turn your data into a strategic
        business asset and competitive advantage.
      </p>

      {/* Step 4: Updated Data Analytics Capabilities in 3-column grid */}
      <div className="data-capabilities mt-5">
        <h4 className="mb-4">Our Data Analytics Capabilities</h4>
        <div className="row">
          {/* Advanced Data Analytics & Visualization */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-chart-bar"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Advanced Data Analytics & Visualization
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Interactive dashboards and reports
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Statistical analysis and modeling
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Data storytelling and insights
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Custom visualization solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Business Intelligence & Reporting */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-chart-line"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Business Intelligence & Reporting
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Executive dashboard creation
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  KPI tracking and monitoring
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Automated reporting solutions
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Performance analytics
                </li>
              </ul>
            </div>
          </div>

          {/* Predictive Analytics & Forecasting */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-brain"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Predictive Analytics & Forecasting
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Machine learning models
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Trend analysis and forecasting
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Risk assessment modeling
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Customer behavior prediction
                </li>
              </ul>
            </div>
          </div>

          {/* Data Warehousing & ETL Processes */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-database"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Data Warehousing & ETL Processes
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Data warehouse design and implementation
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  ETL pipeline development
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Data integration and transformation
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Data quality management
                </li>
              </ul>
            </div>
          </div>

          {/* Real-time Analytics & Monitoring */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-stream"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Real-time Analytics & Monitoring
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Streaming data processing
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Live dashboard updates
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Alert and notification systems
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Performance monitoring
                </li>
              </ul>
            </div>
          </div>

          {/* Data Science & Machine Learning */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="capability-card h-100 p-4 border rounded bg-light">
              <div className="capability-icon mb-3">
                <i
                  className="fas fa-robot"
                  style={{ fontSize: "2.5rem", color: "#3A5063" }}
                ></i>
              </div>
              <h5 className="capability-title">
                Data Science & Machine Learning
              </h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Advanced statistical modeling
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  AI-powered insights generation
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Pattern recognition and clustering
                </li>
                <li className="mb-2">
                  <i
                    className="fas fa-check-circle me-2"
                    style={{ color: "#3A5063" }}
                  ></i>
                  Recommendation systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Data Analytics Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>Data Analytics Process</h3>
          <p>
            Our structured approach to data analytics ensures accurate,
            reliable, and actionable insights that drive business growth and
            operational efficiency while maintaining data quality and security.
          </p>
          <blockquote className="blockquote-one">
            We ensure data quality, security, and compliance throughout the
            analytics lifecycle, implementing robust governance frameworks and
            privacy protection measures that meet GDPR, CCPA, and industry
            standards.
          </blockquote>
        </div>

        {/* Step 6: Updated process cards with new images */}
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/dataservice/data-collection-processing.jpg"
                  alt="Data Collection & Processing"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Data Collection & Processing</h5>
                <p>
                  Comprehensive data collection, cleaning, and preparation
                  processes from multiple sources to ensure high-quality
                  datasets for accurate analysis and meaningful insights.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="process-card p-4 border rounded">
                <img
                  className="mb-3 w-100 rounded"
                  src="/assets/images/dataservice/data-visualization-insights.jpg"
                  alt="Data Visualization & Insights"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="mb-3">Visualization & Actionable Insights</h5>
                <p>
                  Interactive dashboards and advanced visualizations that make
                  complex data accessible and actionable for stakeholders at all
                  organizational levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7: Technology Stack - Data Analytics Tools */}
      <div className="data-tech-stack mt-5">
        <h3 className="mb-4">Our Data Analytics Technology Stack</h3>
        <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
          <img
            className="w-100"
            src="/assets/images/dataservice/data-analytics-tech-stack.jpg"
            alt="Data Analytics Technology Stack"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <p className="mt-3 text-muted">
            <em>
              Comprehensive data analytics technology stack featuring Tableau,
              Power BI, Python, R, SQL, and cloud analytics platforms
            </em>
          </p>
        </div>
      </div>

      {/* Use Cases / Portfolio Examples */}
      <div className="data-use-cases mt-5">
        <h3 className="mb-4">Data Analytics Solutions in Action</h3>
        <div className="row">
          {/* Business Intelligence Dashboards */}
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
                    className="fas fa-tachometer-alt"
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
                  Business Intelligence Dashboards
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Executive dashboards with real-time KPI tracking and
                  performance analytics for strategic decision-making
                </p>
              </div>
            </div>
          </div>

          {/* Predictive Analytics Models */}
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
                    className="fas fa-crystal-ball"
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
                  Predictive Analytics Models
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Advanced machine learning models for forecasting, risk
                  assessment, and customer behavior prediction
                </p>
              </div>
            </div>
          </div>

          {/* Data Warehousing Solutions */}
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
                    className="fas fa-warehouse"
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
                  Data Warehousing Solutions
                </h5>
                <p
                  className="small"
                  style={{ color: "#6c757d", transition: "color 0.3s ease" }}
                >
                  Scalable data warehouse implementations with ETL pipelines and
                  data integration from multiple sources
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
          Get answers to common questions about our data analytics and business
          intelligence services.
        </p>
        <ServiceAccordion serviceType="data-analytics" />
      </div>

      {/* Step 9: Footer CTA Section */}
      <div className="data-cta-section mt-5 p-4 bg-light rounded text-white text-center">
        <h4 className="mb-3">
          Ready to Transform Your Data into Strategic Insights?
        </h4>
        <p className="mb-4">
          Let's discuss how our data analytics solutions can unlock the value
          hidden in your data and drive informed decision-making.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-dark btn-lg me-3">
            Start Data Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsContent;
