import React, { useState } from "react";
import Link from "next/link";

const AccordionItem = ({
  title,
  number,
  content,
  imageSrc,
  delay,
  isActive,
  onClick,
}) => (
  <div
    className={`hzAccordion__item ${isActive ? "active" : ""}`}
    style={{ animationDelay: delay }}
    onClick={onClick}
  >
    <div className="head">
      <h3 className="head-title">
        <span className="title">{title}</span>
        <span className="number">{number}</span>
      </h3>
    </div>
    {isActive && (
      <div className="content">
        <div className="wrp">
          <div className="content-wrp">
            <p className="text">{content}</p>
            <Link className="arry-btn" href="/page-service-details">
              <i className="fa-thin fa-arrow-up-right" />
            </Link>
          </div>
          <div className="shape">
            <img src="assets/images/shape/hz-accordion-shape.png" alt="shape" />
          </div>
          <div className="image">
            <img src={imageSrc} alt="image" />
          </div>
        </div>
      </div>
    )}
  </div>
);

const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Cloud Migration",
      number: "01",
      content:
        "Seamlessly migrate your infrastructure to the cloud and harness the power of data with engineered solutions that unlock agility and insight. From assessment to optimization, we ensure your cloud journey is secure and efficient.",
      imageSrc: "assets/images/service/service-one-image1.jpg",
      delay: "0ms",
    },
    {
      title: "AI Solutions",
      number: "02",
      content:
        "Future-ready AI capabilities to keep you ahead in the digital surge. We empower your business with AI-driven culture that drives long-term, sustainable growth through responsible AI solutions.",
      imageSrc: "assets/images/service/service-one-image2.jpg",
      delay: "120ms",
    },
    {
      title: "IT Solutions",
      number: "03",
      content:
        "Scalable, flexible and fully managed IT solutions across cybersecurity, risk, network, cloud, and support. Simplify your IT environment while focusing on growth and customer acquisition.",
      imageSrc: "assets/images/service/service-one-image3.jpg",
      delay: "240ms",
    },
    {
      title: "Data Analytics",
      number: "04",
      content:
        "Power your strategy with high-volume, accurate, and compliant data. Transform raw data into actionable insights with advanced analytics, predictive modeling, and interactive dashboards that drive strategic decision-making.",
      imageSrc: "assets/images/service/service-one-image4.jpg",
      delay: "360ms",
    },
    {
      title: "Product Engineering",
      number: "05",
      content:
        "Transform software portfolios with comprehensive product engineering. From ideation to deployment, we deliver resilient, future-ready solutions using cutting-edge technologies and agile methodologies.",
      imageSrc: "assets/images/service/service-one-image1.jpg",
      delay: "480ms",
    },
  ];

  return (
    <>
      <section id="service-menu" className="hzAccordion-area pt-130 pb-130">
        <div className="container">
          <div className="section-header mb-60">
            <h2 className="wow splt-txt text-white" data-splitting>
              Our Services
            </h2>
          </div>
          <div className="hzAccordion__wrp">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                number={item.number}
                content={item.content}
                imageSrc={item.imageSrc}
                delay={item.delay}
                isActive={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? 0 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalAccordion;
