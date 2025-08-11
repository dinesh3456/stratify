import Link from "next/link";
import React from "react";

const ServiceSidebar = ({ activeService }) => {
  const serviceListData = [
    {
      title: "Cloud Migration",
      linkurl: "/services/cloud-migration",
    },
    {
      title: "AI Solutions",
      linkurl: "/services/ai-solutions",
    },
    {
      title: "IT Solutions",
      linkurl: "/services/it-solutions",
    },
    {
      title: "Data Analytics",
      linkurl: "/services/data-analytics",
    },
    {
      title: "Product Engineering",
      linkurl: "/services/product-engineering",
    },
  ];

  return (
    <div className="service-sidebar">
      <div className="sidebar-widget service-sidebar-single">
        <div className="sidebar-service-list">
          <ul>
            {serviceListData.map((eachitem, servicelist) => (
              <li key={servicelist}>
                <Link
                  className={
                    eachitem.linkurl.includes(activeService) ? "current" : ""
                  }
                  href={eachitem.linkurl}
                >
                  <i className="fas fa-angle-right" />
                  <span>{eachitem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-details-help">
          <div className="help-shape-1" />
          <div className="help-shape-2" />
          <h2 className="help-title">
            Need help? <br /> Let's talk to <br /> our experts
          </h2>
          <div className="help-icon">
            <span className="fa-regular fa-headset" />
          </div>
          <div className="help-contact">
            <Link
              href="/contact"
              className="btn btn-dark mt-2 w-100"
              style={{ whiteSpace: "nowrap", padding: "10px 20px" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="sidebar-widget service-sidebar-single mt-4">
          <div
            className="service-sidebar-single-btn wow fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1200ms"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
