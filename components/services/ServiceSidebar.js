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
            Contact with <br /> us for any <br /> advice
          </h2>
          <div className="help-icon">
            <span className="fa-regular fa-headset" />
          </div>
          <div className="help-contact">
            <p>Need help? Talk to an expert</p>
            <Link href="/contact">+91 9900297673</Link>
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
