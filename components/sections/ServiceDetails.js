import React from "react";

// Import all service content components
import CloudMigrationContent from "../services/CloudMigrationContent";
import AiSolutionsContent from "../services/AiSolutionsContent";
import ItSolutionsContent from "../services/ItSolutionsContent";
import DataAnalyticsContent from "../services/DataAnalyticsContent";
import ProductEngineeringContent from "../services/ProductEngineeringContent";
import ServiceSidebar from "../services/ServiceSidebar";

function ServiceDetails({ serviceType = "cloud-migration" }) {
  // Function to render the appropriate content component
  const renderServiceContent = () => {
    switch (serviceType) {
      case "cloud-migration":
        return <CloudMigrationContent />;
      case "ai-solutions":
        return <AiSolutionsContent />;
      case "it-solutions":
        return <ItSolutionsContent />;
      case "data-analytics":
        return <DataAnalyticsContent />;
      case "product-engineering":
        return <ProductEngineeringContent />;
      default:
        return <CloudMigrationContent />; // Default to cloud migration
    }
  };

  return (
    <>
      <section className="services-details position-relative overflow-hidden pt-120 pb-120">
        <div className="container-lg">
          <div className="offer__wrp">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <ServiceSidebar activeService={serviceType} />
              </div>
              <div className="col-xl-8 col-lg-8">{renderServiceContent()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;
