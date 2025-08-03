import React, { useState } from "react";

const Accordion = ({ serviceType = "cloud-migration" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getAccordionData = () => {
    switch (serviceType) {
      case "cloud-migration":
        return [
          {
            question: "How long does a typical cloud migration take?",
            answer:
              "The timeline varies depending on the complexity and size of your infrastructure. Simple migrations can take 3-6 months, while complex enterprise migrations may take 12-18 months. We provide detailed timelines during our assessment phase.",
          },
          {
            question: "How do you ensure data security during migration?",
            answer:
              "Security is our top priority. We implement end-to-end encryption, secure transfer protocols, and comprehensive access controls. Our migration process follows industry best practices and compliance requirements like GDPR, HIPAA, and SOC 2.",
          },
          {
            question: "What about downtime during the migration process?",
            answer:
              "We use proven migration strategies like phased approaches, blue-green deployments, and real-time data synchronization to minimize downtime. Most migrations can be completed with less than 4 hours of downtime, often during planned maintenance windows.",
          },
          {
            question: "What support do you provide after migration?",
            answer:
              "We provide comprehensive post-migration support including 24/7 monitoring, performance optimization, cost management, security updates, and ongoing consultation. Our support packages are tailored to your specific needs and SLA requirements.",
          },
        ];
      default:
        return [
          {
            question: "What services do you offer?",
            answer:
              "We offer a comprehensive range of technology services including cloud migration, AI solutions, IT consulting, data analytics, and product engineering.",
          },
          {
            question: "How do you ensure quality delivery?",
            answer:
              "We follow industry best practices, use proven methodologies, and maintain strict quality assurance processes throughout every project.",
          },
          {
            question: "Do you provide ongoing support?",
            answer:
              "Yes, we provide comprehensive post-implementation support and maintenance services to ensure your solutions continue to perform optimally.",
          },
        ];
    }
  };

  const accordionData = getAccordionData();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${
                activeIndex !== index ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              activeIndex === index ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
