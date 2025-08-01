import React, { useState } from 'react';
import Link from 'next/link';

const AccordionItem = ({ title, number, content, imageSrc, delay, isActive, onClick }) => (
  <div
    className={`hzAccordion__item ${isActive ? 'active' : ''}`}
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
      title: 'Organizational Culture & Leadership Alignment',
      number: '01',
      content: 'We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.',
      imageSrc: 'assets/images/service/service-one-image1.jpg',
      delay: '0ms',
    },
    {
      title: 'Strategic Planning & Development',
      number: '02',
      content: 'We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.',
      imageSrc: 'assets/images/service/service-one-image2.jpg',
      delay: '200ms',
    },
    {
      title: 'Operational Efficiency Optimization',
      number: '03',
      content: 'We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.',
      imageSrc: 'assets/images/service/service-one-image3.jpg',
      delay: '400ms',
    },
    {
      title: 'Tailored Consulting Solutions & Advisory Services',
      number: '04',
      content: 'We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.',
      imageSrc: 'assets/images/service/service-one-image4.jpg',
      delay: '600ms',
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
              onClick={() => setActiveIndex(activeIndex === index ? 0 : index)}
            />
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default HorizontalAccordion;
