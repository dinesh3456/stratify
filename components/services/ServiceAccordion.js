import React, { useState } from "react";

const ServiceAccordion = ({ serviceType = "cloud-migration" }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

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
      case "ai-solutions":
        return [
          {
            question: "What AI technologies do you specialize in?",
            answer:
              "We specialize in machine learning, deep learning, natural language processing, computer vision, predictive analytics, and intelligent automation. Our team works with the latest AI frameworks and technologies.",
          },
          {
            question:
              "How do you ensure AI ethics and responsible implementation?",
            answer:
              "We follow strict ethical AI guidelines, including bias detection and mitigation, transparency in model decisions, privacy protection, and ensuring human oversight in critical decisions.",
          },
          {
            question: "Do you work with existing systems and data?",
            answer:
              "Yes, we integrate AI solutions with your existing systems and can work with various data sources. We ensure seamless integration without disrupting your current operations.",
          },
          {
            question: "What's the typical timeline for AI implementation?",
            answer:
              "AI project timelines vary based on complexity, from 2-3 months for simple automation to 12+ months for comprehensive AI transformation. We provide detailed project timelines during planning.",
          },
        ];
      case "it-solutions":
        return [
          {
            question: "What IT services do you provide?",
            answer:
              "We provide comprehensive IT services including cybersecurity, network management, cloud solutions, technical support, system integration, and IT consulting to help organizations optimize their technology infrastructure.",
          },
          {
            question: "How do you handle IT security and compliance?",
            answer:
              "We implement multi-layered security frameworks, conduct regular security assessments, ensure compliance with industry standards, and provide 24/7 monitoring to protect your IT infrastructure from threats.",
          },
          {
            question: "Do you provide ongoing IT support?",
            answer:
              "Yes, we offer 24/7 technical support, proactive monitoring, regular maintenance, and help desk services to ensure your IT systems run smoothly and efficiently.",
          },
          {
            question: "How do you approach IT modernization?",
            answer:
              "We start with a comprehensive assessment, develop a strategic roadmap, implement solutions in phases to minimize disruption, and provide ongoing optimization to ensure maximum ROI.",
          },
        ];
      case "data-analytics":
        return [
          {
            question: "What types of data can you analyze?",
            answer:
              "We can analyze structured and unstructured data from various sources including databases, APIs, files, social media, IoT devices, and third-party systems. Our team works with all major data formats and platforms.",
          },
          {
            question: "How do you ensure data security and privacy?",
            answer:
              "We implement comprehensive data governance frameworks, encryption, access controls, and comply with regulations like GDPR and CCPA. Data privacy and security are integrated into every stage of our analytics process.",
          },
          {
            question: "What analytics tools and platforms do you use?",
            answer:
              "We work with leading analytics platforms including Tableau, Power BI, Python, R, SQL, Apache Spark, and cloud-based solutions like AWS Analytics, Azure Analytics, and Google Cloud Analytics.",
          },
          {
            question: "How long does it take to see results?",
            answer:
              "Initial insights can be delivered within 2-4 weeks for basic analytics. Comprehensive analytics solutions typically take 2-3 months to implement, with ongoing refinements based on business needs.",
          },
        ];
      case "product-engineering":
        return [
          {
            question: "What technologies do you use for product development?",
            answer:
              "We work with modern technologies including React, Node.js, Python, Java, .NET, mobile frameworks like React Native and Flutter, and cloud platforms like AWS, Azure, and GCP.",
          },
          {
            question: "How do you ensure product quality and reliability?",
            answer:
              "We implement comprehensive testing strategies including unit testing, integration testing, performance testing, and security testing. We also use automated CI/CD pipelines and code review processes.",
          },
          {
            question: "Do you provide ongoing support and maintenance?",
            answer:
              "Yes, we provide comprehensive post-launch support including bug fixes, feature enhancements, performance optimization, security updates, and technical support to ensure your product continues to evolve.",
          },
          {
            question: "What's your development methodology?",
            answer:
              "We follow agile development methodologies with regular sprints, continuous integration, and frequent client collaboration to ensure rapid delivery and adaptability to changing requirements.",
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

  return (
    <ul className="accordion-box mt-30 wow fadeInRight">
      {accordionData.map((item, index) => {
        const key = index + 1;
        return (
          <li
            key={key}
            className={
              isActive.key == key
                ? "accordion block active-block"
                : "accordion block"
            }
            onClick={() => handleToggle(key)}
          >
            <div className={isActive.key == key ? "acc-btn active" : "acc-btn"}>
              {item.question}
              <div className="icon fa fa-plus" />
            </div>
            <div
              className={
                isActive.key == key ? "acc-content current" : "acc-content"
              }
            >
              <div className="content">
                <div className="text">{item.answer}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ServiceAccordion;
