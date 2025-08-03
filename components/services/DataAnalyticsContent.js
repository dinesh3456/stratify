import React from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

const DataAnalyticsContent = () => {
  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      <img
        className="w-100"
        src="assets/images/resource/data-analytics-main.jpg"
        alt="Data Analytics & Business Intelligence"
      />
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
        business asset.
      </p>

      <div className="analytics-services mt-4">
        <h4>Our Analytics Capabilities</h4>
        <ul className="analytics-list">
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Advanced Data Analytics & Visualization
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Business Intelligence & Reporting
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Predictive Analytics & Forecasting
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Data Warehousing & ETL Processes
          </li>
          <li>
            <i className="fas fa-check-circle text-primary me-2"></i>
            Real-time Analytics & Monitoring
          </li>
        </ul>
      </div>

      <div className="content mt-40">
        <div className="text">
          <h3>Data Analytics Process</h3>
          <p>
            Our structured approach to data analytics ensures accurate,
            reliable, and actionable insights that drive business growth and
            operational efficiency.
          </p>
          <blockquote className="blockquote-one">
            We ensure data quality, security, and compliance throughout the
            analytics lifecycle, implementing robust governance frameworks and
            privacy protection measures.
          </blockquote>
        </div>
        <div className="feature-list mt-4">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/data-collection.jpg"
                alt="Data Collection"
              />
              <p>
                Comprehensive data collection, cleaning, and preparation
                processes to ensure high-quality datasets for accurate analysis
                and insights.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <img
                className="mb-3 w-100"
                src="assets/images/resource/data-visualization.jpg"
                alt="Data Visualization"
              />
              <p>
                Interactive dashboards and visualizations that make complex data
                accessible and actionable for stakeholders at all levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="innerpage mt-25">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our data analytics and business
          intelligence services.
        </p>
        <ServiceAccordion serviceType="data-analytics" />
      </div>
    </div>
  );
};

export default DataAnalyticsContent;
