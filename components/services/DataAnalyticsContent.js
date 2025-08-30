import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

// Import the Data Analytics Capability Icons
import {
  DataVisualizationIcon,
  BusinessIntelligenceIcon,
  DataEngineeringIcon,
  DataScienceIcon,
  RealTimeAnalyticsIcon,
  DataGovernanceIcon,
} from "../icons/DataAnalyticsCapabilityIcons";

// Particle Background Component
const ParticleBackground = () => (
  <div className="ai-particle-container">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="ai-particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${10 + Math.random() * 20}s`,
        }}
      />
    ))}
  </div>
);

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Custom hook for media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

// Updated StandardFlipCard Component with rotateY animation (for capabilities)
const StandardFlipCard = ({
  capability,
  index,
  isVisible,
  onHover,
  onLeave,
  onClick,
  isMobile,
  isHovered,
}) => {
  const IconComponent = capability.icon;

  return (
    <div
      className={`ai-flip-card ${isVisible ? "visible" : ""}`}
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className={`ai-flip-card-inner ${isHovered ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="ai-flip-card-front">
          {/* Glossy background effect - similar to success stories */}
          <div className="glossy-pattern" />

          <div className="ai-icon-container">
            <IconComponent isHovered={isHovered} isVisible={isVisible} />
          </div>

          <h4 className="ai-flip-card-title mb-2">{capability.title}</h4>
          <p className="ai-flip-card-subtitle small text-muted">
            {capability.description}
          </p>
        </div>

        {/* Back Side */}
        <div className="ai-flip-card-back">
          {/* Glossy background pattern for back side */}
          <div className="glossy-pattern" />

          <h4 className="ai-flip-card-back-title mb-3">{capability.title}</h4>
          <ul className="ai-flip-card-list list-unstyled text-start">
            {capability.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="ai-flip-card-item mb-2">
                <i className="fas fa-check-circle ai-flip-card-icon me-2 flex-shrink-0" />
                <span className="ai-flip-card-text">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Optimized Stripe Flip Card Component with rotateX animation (for success stories)
const OptimizedStripeFlipCard = ({
  story,
  index,
  isVisible,
  onHover,
  onLeave,
  onClick,
  isMobile,
  isHovered,
}) => {
  return (
    <div
      className={`stripe-flip-card ${isVisible ? "visible" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="stripe-flip-inner">
        {/* Front Face */}
        <div className="stripe-face stripe-face-front">
          <div className="stripe-pattern" />
          <div className="stripe-content">
            <div className="stripe-icon">{story.frontIcon}</div>
            <h5 className="stripe-title">{story.title}</h5>
            <p className="stripe-subtitle">{story.subtitle}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="stripe-face stripe-face-back">
          <div className="stripe-pattern" />
          <div className="stripe-content">
            <h5 className="stripe-title">{story.backContent.title}</h5>
            <ul className="stripe-features">
              {story.backContent.features.map((feature, idx) => (
                <li key={idx} className="stripe-feature-item">
                  <i className="fas fa-check-circle stripe-feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Simplified decorations */}
      <div className="stripe-decoration stripe-decoration-1" />
      <div className="stripe-decoration stripe-decoration-2" />

      {/* Hover indicator */}
      <div className="stripe-indicator" />
    </div>
  );
};

const DataAnalyticsContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredStory, setHoveredStory] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const [capabilitiesRef, isCapabilitiesVisible] = useIntersectionObserver(0.2);
  const [storiesRef, isStoriesVisible] = useIntersectionObserver(0.2);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const capabilities = [
    {
      id: 1,
      icon: DataVisualizationIcon,
      title: "Data Visualization & Analytics",
      description: "Interactive dashboards and advanced statistical modeling",
      details: [
        "Interactive dashboards and reports",
        "Advanced statistical modeling",
        "Custom visualization solutions",
      ],
    },
    {
      id: 2,
      icon: BusinessIntelligenceIcon,
      title: "Business Intelligence & Reporting",
      description: "KPI tracking and automated reporting systems",
      details: [
        "KPI tracking and monitoring",
        "Automated reporting systems",
        "Executive dashboards",
      ],
    },
    {
      id: 3,
      icon: DataEngineeringIcon,
      title: "Data Engineering & ETL",
      description: "Data pipeline development and integration",
      details: [
        "Data pipeline development",
        "ETL/ELT processes",
        "Data quality management",
      ],
    },
    {
      id: 4,
      icon: DataScienceIcon,
      title: "Data Science & Machine Learning",
      description: "Predictive modeling and AI-powered insights",
      details: [
        "Predictive modeling and analytics",
        "AI-powered insights generation",
        "Recommendation systems",
      ],
    },
    {
      id: 5,
      icon: RealTimeAnalyticsIcon,
      title: "Real-time Analytics & Streaming",
      description: "Streaming data processing and live updates",
      details: [
        "Streaming data processing",
        "Live dashboard updates",
        "Performance monitoring",
      ],
    },
    {
      id: 6,
      icon: DataGovernanceIcon,
      title: "Data Governance & Security",
      description: "Data privacy, compliance and access control",
      details: [
        "Data privacy and compliance",
        "Access control and security",
        "Quality assurance frameworks",
      ],
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "Retail Analytics Platform",
      subtitle: "E-commerce data intelligence and customer insights",
      frontIcon: (
        <div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0005 53.3342C29.6951 53.3342 29.4551 53.0942 29.4551 52.7887C29.4551 52.4833 29.6951 52.2433 30.0005 52.2433C42.2623 52.2433 52.2441 42.2614 52.2441 29.9996C52.2441 17.7378 42.2623 7.75595 30.0005 7.75595C29.6951 7.75595 29.4551 7.51595 29.4551 7.2105C29.4551 6.90504 29.6951 6.66504 30.0005 6.66504C42.8841 6.66504 53.3351 17.116 53.3351 29.9996C53.3351 36.1851 50.8805 42.1196 46.506 46.4942C42.1314 50.8905 36.1969 53.3451 30.0005 53.3342Z"
              fill="#4B535D"
            />
            <path
              d="M30.0005 48.8835C29.6951 48.8835 29.4551 48.6435 29.4551 48.338C29.4551 48.0326 29.6951 47.7926 30.0005 47.7926C39.8078 47.7926 47.7932 39.8071 47.7932 29.9998C47.7932 20.1926 39.8078 12.2071 30.0005 12.2071C29.6951 12.2071 29.4551 11.9671 29.4551 11.6617C29.4551 11.3562 29.6951 11.1162 30.0005 11.1162C40.4187 11.1162 48.8841 19.5926 48.8841 29.9998C48.8841 40.4071 40.4187 48.8835 30.0005 48.8835Z"
              fill="#4B535D"
            />
            <path
              d="M30.0005 44.4438C29.6951 44.4438 29.4551 44.2038 29.4551 43.8983C29.4551 43.5929 29.6951 43.3529 30.0005 43.3529C37.3751 43.3529 43.3532 37.3747 43.3532 30.0002C43.3532 22.6256 37.3751 16.6583 30.0005 16.6583C29.6951 16.6583 29.4551 16.4183 29.4551 16.1129C29.4551 15.8074 29.6951 15.5674 30.0005 15.5674C37.9641 15.5674 44.4441 22.0474 44.4441 30.0111C44.4441 37.9747 37.9641 44.4438 30.0005 44.4438Z"
              fill="#4B535D"
            />
            <path
              d="M29.9991 57.7746C14.6609 57.7746 2.22461 45.3383 2.22461 30.0001C2.22461 29.6946 2.46461 29.4546 2.77006 29.4546H20.5518C20.8573 29.4546 21.0973 29.6946 21.0973 30.0001C21.0973 34.9201 25.09 38.9019 29.9991 38.9019C34.9082 38.9019 38.9009 34.9092 38.9009 30.0001C38.9009 25.0801 34.9192 21.0983 29.9991 21.0983C29.6936 21.0983 29.4536 20.8583 29.4536 20.5528C29.4536 20.2474 29.6936 20.0074 29.9991 20.0074C35.5191 20.0074 39.9918 24.4801 39.9918 30.0001C39.9918 35.5201 35.5191 39.9928 29.9991 39.9928C24.6864 39.9928 20.3118 35.8474 20.0173 30.5455H3.31552C3.61006 45.011 15.4682 56.6837 29.9991 56.6837C44.7155 56.6837 56.6828 44.7165 56.6828 30.0001C56.6828 15.2837 44.7155 3.3165 29.9991 3.3165C29.6936 3.3165 29.4536 3.0765 29.4536 2.77105C29.4536 2.46559 29.6936 2.22559 29.9991 2.22559C45.3373 2.22559 57.7737 14.6728 57.7737 30.011C57.7737 37.3746 54.85 44.4437 49.6355 49.6474C44.4427 54.8619 37.3736 57.7964 29.9991 57.7746Z"
              fill="#4B535D"
            />
            <path
              d="M30.0005 35.5526C29.6951 35.5526 29.4551 35.3126 29.4551 35.0071C29.4551 34.7016 29.6951 34.4616 30.0005 34.4616C32.466 34.4616 34.4623 32.4653 34.4623 30.0107C34.4623 27.5453 32.466 25.5489 30.0114 25.5489C29.706 25.5489 29.466 25.3089 29.466 25.0035C29.466 24.698 29.706 24.458 30.0114 24.458C33.0769 24.458 35.5641 26.9453 35.5641 29.9998C35.5532 33.0653 33.066 35.5526 30.0005 35.5526Z"
              fill="#4B535D"
            />
          </svg>
        </div>
      ),
      backContent: {
        title: "Data-Driven Retail Success",
        features: [
          "360° customer analytics implementation",
          "30% increase in conversion rates",
          "Personalized recommendation engine",
        ],
      },
    },
    {
      id: 2,
      title: "Financial Data Warehouse",
      subtitle: "Enterprise data consolidation and regulatory reporting",
      frontIcon: (
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_356_27483)">
              <path
                d="M39.2534 18.5076C40.2236 18.8061 41.1937 19.1046 42.0146 19.4777C42.3131 19.627 42.8355 19.4777 42.9848 19.03C43.134 18.6568 42.9848 18.2091 42.537 18.0598C41.6415 17.6867 40.6713 17.3882 39.6266 17.0897C39.2534 16.9404 38.8057 17.2389 38.731 17.6121C38.5818 18.0598 38.8803 18.433 39.2534 18.5076ZM27.6116 16.7165C28.5818 16.7165 29.5519 16.7912 30.5967 16.9404C31.1191 16.9404 31.343 16.6419 31.4176 16.2688C31.4176 15.8957 31.1191 15.5225 30.746 15.4479C29.7758 15.3733 28.731 15.2986 27.7609 15.224C27.3131 15.224 27.0146 15.5225 27.0146 15.9703C26.8654 16.418 27.2385 16.7165 27.6116 16.7165ZM21.6415 16.7912C21.7161 16.7912 21.7161 16.7912 21.6415 16.7912C22.6116 16.7166 23.6564 16.7165 24.6266 16.7165C25.0743 16.7165 25.3728 16.3434 25.3728 15.9703C25.3728 15.5971 24.9997 15.224 24.6266 15.224C23.6564 15.224 22.6116 15.224 21.6415 15.2986C21.2684 15.2986 20.8952 15.6718 20.8952 16.0449V16.1195C20.9698 16.4927 21.2684 16.7912 21.6415 16.7912ZM10.1489 18.6568C11.0445 18.3583 12.0146 18.1345 12.9848 17.9106C13.134 17.9106 13.2086 17.836 13.3579 17.6867V17.7613C13.3579 18.1345 13.5818 18.433 13.9549 18.5076C14.3281 18.5822 14.7012 18.3583 14.7758 17.9106C14.8504 17.4628 14.9251 17.0897 14.9997 16.7165V16.7912C15.0743 17.1643 15.3728 17.3882 15.746 17.3882H15.8952C16.8654 17.2389 17.8355 17.0897 18.8057 17.0151C19.1788 16.9404 19.5519 16.6419 19.4773 16.1942C19.4773 15.821 19.1042 15.5225 18.6564 15.5225C17.6116 15.5971 16.6415 15.7464 15.6713 15.8957C15.4475 15.9703 15.2236 16.1195 15.0743 16.3434C15.1489 15.8957 15.2236 15.4479 15.3728 15.0748C15.4475 14.627 15.1489 14.2539 14.7758 14.1792C14.4027 14.1046 13.9549 14.3285 13.8803 14.7763C13.731 15.4479 13.5818 16.1942 13.5072 16.9404C13.3579 16.6419 13.0594 16.4927 12.6863 16.5673C11.7161 16.7912 10.6713 17.0897 9.77577 17.3136C9.40264 17.4628 9.17876 17.9106 9.25339 18.2837C9.32801 18.5822 9.70115 18.8061 10.1489 18.6568ZM4.8504 20.9703C5.59667 20.5225 6.41756 20.0748 7.38771 19.627C7.76085 19.4777 7.9101 19.03 7.76085 18.6568C7.61159 18.2837 7.16383 18.1345 6.7907 18.2837C5.74592 18.7315 4.8504 19.1792 4.02951 19.7016C3.65637 19.9255 3.58174 20.4479 3.80562 20.7464C4.02951 21.1195 4.47727 21.2688 4.8504 20.9703Z"
                fill="#4B535D"
              />
              <path
                d="M49.6268 24.9999C49.6268 11.4178 38.582 0.373047 24.9999 0.373047C11.4178 0.373047 0.373047 11.4178 0.373047 24.9999C0.373047 38.582 11.4178 49.6268 24.9999 49.6268C38.582 49.6268 49.6268 38.582 49.6268 24.9999ZM47.8357 21.2686C46.5671 19.9999 45.373 19.4775 45.2984 19.4029C44.9253 19.179 44.4775 19.3283 44.3283 19.7014C44.1044 20.0745 44.2536 20.5223 44.6268 20.7462C45.5223 21.2686 46.2686 21.791 46.8656 22.388C47.1641 22.6865 47.6865 22.6865 47.985 22.2387C48.0596 22.8357 48.1342 23.5074 48.1342 24.1044C48.0596 24.3283 48.2089 25.1492 48.1342 24.9999C48.1342 27.7611 43.8059 30.5969 36.7163 32.1641C37.0148 29.9253 37.2387 27.5372 37.2387 24.9999C37.2387 22.4626 37.0895 20.0745 36.7163 17.7611C37.0148 17.6865 37.2387 17.4626 37.2387 17.2387C37.3133 16.791 37.0895 16.4178 36.6417 16.3432C36.5671 16.3432 36.4924 16.3432 36.4178 16.2686C35.2984 9.99991 32.9104 4.99991 29.9253 2.38797C39.1044 4.4029 46.2686 11.8656 47.8357 21.2686ZM20.8954 2.23872C20.8954 2.31335 20.9701 2.4626 20.9701 2.53723C21.1939 2.91036 21.6417 2.98499 22.0148 2.76111C22.8357 2.23872 23.6566 1.94021 24.4775 1.86558C30.4477 1.71633 33.582 10.1492 34.776 15.9701C33.582 15.7462 33.7313 15.8208 33.6566 15.7462C33.1342 15.7462 32.8357 16.0447 32.8357 16.4178C32.8357 16.9402 33.1342 17.2387 33.5074 17.2387C34.1044 17.3133 34.6268 17.388 35.1492 17.5372C35.5223 19.8507 35.7462 22.388 35.7462 24.9999C35.7462 27.6119 35.5223 30.0745 35.1492 32.4626C32.1641 32.985 28.7313 33.2835 24.9999 33.2835C21.2686 33.2835 17.8357 32.985 14.776 32.388C14.6268 32.0895 14.3283 31.8656 13.9551 31.9402C13.8059 31.9402 13.6566 32.0895 13.582 32.1641C6.26857 30.5969 1.86558 27.7611 1.86558 24.9253C1.86558 24.179 2.16409 23.4327 2.76111 22.6865C3.05961 22.388 2.98499 21.8656 2.68648 21.6417C2.53723 21.4924 2.31335 21.4924 2.16409 21.4924C3.582 11.791 11.1939 3.95514 20.8954 2.23872ZM2.16409 28.7313C4.32827 30.8954 8.35812 32.6119 13.582 33.7313C13.7313 34.4775 13.8805 35.1492 14.0298 35.8208C14.1044 36.1939 14.5522 36.4925 14.9253 36.3432C15.373 36.2686 15.5969 35.8208 15.4477 35.4477C15.2984 34.9999 15.2238 34.4775 15.1492 33.9551C18.1342 34.4775 21.4924 34.776 24.9999 34.776C28.5074 34.776 31.8656 34.4775 34.8507 33.9551C33.2089 42.1641 29.3283 48.0596 24.9999 48.0596C24.179 48.0596 23.2835 47.8357 22.4626 47.388C22.0895 47.1641 21.6417 47.388 21.4924 47.6865V47.7611C11.5671 46.3432 3.80588 38.582 2.16409 28.7313ZM29.9253 47.6119C32.985 44.9999 35.2984 39.9999 36.4178 33.7313C41.5671 32.6865 45.5969 30.8954 47.7611 28.7313C46.2686 38.1342 39.1044 45.5969 29.9253 47.6119Z"
                fill="#4B535D"
              />
              <path
                d="M17.3141 40.97C16.941 40.1491 16.5678 39.1789 16.2693 38.2834C16.1201 37.9103 15.6723 37.6864 15.2992 37.8356C14.926 37.9849 14.7022 38.358 14.8514 38.8058C15.1499 39.7759 15.5231 40.7461 15.9708 41.6416C16.1201 42.0147 16.5678 42.164 16.941 42.0147C17.2395 41.7909 17.4634 41.4177 17.3141 40.97ZM20.3738 45.8207C19.7768 45.1491 19.1798 44.4028 18.6574 43.5819C18.4335 43.2088 17.9857 43.1341 17.6126 43.358C17.2395 43.5819 17.1648 44.0297 17.3887 44.4028C17.9857 45.373 18.5828 46.1938 19.2544 46.8655C19.5529 47.164 20.0007 47.164 20.2992 46.8655C20.5977 46.567 20.6723 46.1192 20.3738 45.8207ZM13.5081 24.5521C13.9559 24.5521 14.2544 24.2536 14.2544 23.8058C14.2544 22.8356 14.329 21.8655 14.4037 20.8953C14.4037 20.5222 14.1051 20.1491 13.732 20.0744C13.3589 19.9998 12.9857 20.373 12.9111 20.7461C12.8365 21.7162 12.7619 22.6864 12.7619 23.7312C12.6872 23.8804 12.9111 24.5521 13.5081 24.5521ZM15.1499 12.761C15.5231 12.9103 15.9708 12.6864 16.1201 12.2386C16.4186 11.2685 16.7171 10.373 17.0902 9.47739C17.2395 9.02963 17.0902 8.6565 16.7171 8.50724C16.344 8.35799 15.8962 8.50724 15.7469 8.88038C15.3738 9.7759 15.0007 10.7461 14.7022 11.7909C14.5529 12.0894 14.7022 12.6118 15.1499 12.761ZM14.329 26.7162C14.329 26.3431 13.9559 25.97 13.5828 25.97C13.2096 25.97 12.8365 26.3431 12.8365 26.7162C12.8365 27.6864 12.9111 28.7312 13.0604 29.7013C13.0604 30.0744 13.3589 30.4476 13.8066 30.4476C14.329 30.4476 14.6275 29.9252 14.5529 29.6267C14.4037 28.7312 14.329 27.761 14.329 26.7162ZM17.3141 7.16396C17.6872 7.38784 18.135 7.23859 18.3589 6.86545C18.8813 5.96993 19.4037 5.22366 20.0007 4.55202C20.2992 4.25351 20.2246 3.80575 19.926 3.50725C19.6275 3.28336 19.1051 3.28336 18.8813 3.58187C18.2096 4.32814 17.6126 5.14904 17.0902 6.11919C16.8663 6.49232 17.0156 7.01471 17.3141 7.16396Z"
                fill="#4B535D"
              />
            </g>
            <defs>
              <clipPath id="clip0_356_27483">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
      backContent: {
        title: "Enterprise Data Transformation",
        features: [
          "Unified data warehouse implementation",
          "50% reduction in reporting time",
          "Real-time risk analytics dashboard",
        ],
      },
    },
    {
      id: 3,
      title: "Manufacturing IoT Analytics",
      subtitle: "Predictive maintenance and operational intelligence",
      frontIcon: (
        <div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.7866 29.4159C53.6421 29.4145 53.5031 29.36 53.3961 29.2627C53.2891 29.1655 53.2217 29.0323 53.2066 28.8885C52.6817 23.2042 50.1857 17.8823 46.1507 13.8441C42.1158 9.80598 36.7959 7.30577 31.112 6.77633C30.9664 6.75092 30.8358 6.67174 30.7459 6.55448C30.656 6.43723 30.6135 6.29048 30.6268 6.14335C30.6401 5.99621 30.7082 5.85944 30.8176 5.76017C30.927 5.6609 31.0697 5.60639 31.2174 5.60744C37.1727 6.16005 42.7473 8.77742 46.9764 13.0065C51.2055 17.2356 53.8229 22.8102 54.3755 28.7655C54.3828 28.8464 54.3732 28.9279 54.3475 29.005C54.3217 29.082 54.2803 29.1529 54.2258 29.2132C54.1713 29.2734 54.105 29.3218 54.0309 29.3551C53.9568 29.3885 53.8767 29.4062 53.7954 29.4071L53.7866 29.4159ZM28.8269 56.8364C14.6772 56.8364 3.16406 45.3233 3.16406 31.1736C3.16406 24.7315 5.55457 18.5795 9.90494 13.8336C14.2004 9.13836 20.0911 6.21185 26.4276 5.62502C26.5762 5.62152 26.7206 5.67436 26.8319 5.77292C26.9432 5.87148 27.013 6.00847 27.0275 6.15641C27.042 6.30434 26.9999 6.45227 26.9099 6.57051C26.8198 6.68875 26.6883 6.76855 26.5419 6.7939C20.4578 7.33369 14.7984 10.1392 10.6851 14.6546C6.57174 19.1699 4.30464 25.0656 4.33295 31.1736C4.33993 37.6676 6.92277 43.8937 11.5148 48.4857C16.1068 53.0777 22.3329 55.6605 28.8269 55.6675C34.9349 55.6958 40.8306 53.4287 45.3459 49.3154C49.8613 45.2021 52.6668 39.5427 53.2066 33.4586C53.232 33.3131 53.3112 33.1824 53.4284 33.0926C53.5457 33.0027 53.6924 32.9602 53.8396 32.9734C53.9867 32.9867 54.1235 33.0548 54.2227 33.1642C54.322 33.2736 54.3765 33.4164 54.3755 33.5641C53.7872 39.9021 50.8573 45.7932 46.1581 50.0867C41.4122 54.4371 35.2602 56.8364 28.8269 56.8364Z"
              fill="#4B535D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.5638 31.7527H31.1742C31.0315 31.7352 30.9002 31.6661 30.805 31.5584C30.7097 31.4508 30.6572 31.312 30.6572 31.1683C30.6572 31.0245 30.7097 30.8858 30.805 30.7781C30.9002 30.6705 31.0315 30.6014 31.1742 30.5838H51.5638C51.7065 30.6014 51.8378 30.6705 51.933 30.7781C52.0283 30.8858 52.0809 31.0245 52.0809 31.1683C52.0809 31.312 52.0283 31.4508 51.933 31.5584C51.8378 31.6661 51.7065 31.7352 51.5638 31.7527ZM28.7749 53.9528C28.6187 53.9528 28.4689 53.8908 28.3585 53.7803C28.2481 53.6699 28.1861 53.5201 28.1861 53.364V51.8523C28.1759 51.7696 28.1834 51.6856 28.2081 51.6059C28.2329 51.5263 28.2742 51.4528 28.3295 51.3904C28.3847 51.3279 28.4526 51.2779 28.5286 51.2437C28.6047 51.2094 28.6871 51.1917 28.7705 51.1917C28.8539 51.1917 28.9363 51.2094 29.0124 51.2437C29.0884 51.2779 29.1563 51.3279 29.2115 51.3904C29.2668 51.4528 29.3081 51.5263 29.3329 51.6059C29.3576 51.6856 29.3651 51.7696 29.3549 51.8523V53.364C29.3549 53.6892 29.0913 53.9528 28.7749 53.9528ZM28.7749 48.7939C28.6202 48.7939 28.4718 48.7331 28.3616 48.6245C28.2514 48.516 28.1884 48.3685 28.1861 48.2138V46.7022C28.1759 46.6194 28.1834 46.5354 28.2081 46.4558C28.2329 46.3762 28.2742 46.3027 28.3295 46.2402C28.3847 46.1778 28.4526 46.1278 28.5286 46.0935C28.6047 46.0593 28.6871 46.0415 28.7705 46.0415C28.8539 46.0415 28.9363 46.0593 29.0124 46.0935C29.0884 46.1278 29.1563 46.1778 29.2115 46.2402C29.2668 46.3027 29.3081 46.3762 29.3329 46.4558C29.3576 46.5354 29.3651 46.6194 29.3549 46.7022V48.2138C29.3549 48.539 29.0913 48.7939 28.7749 48.7939ZM28.7749 43.6437C28.6202 43.6438 28.4718 43.5829 28.3616 43.4744C28.2514 43.3659 28.1884 43.2183 28.1861 43.0637V41.5521C28.1759 41.4693 28.1834 41.3853 28.2081 41.3057C28.2329 41.226 28.2742 41.1525 28.3295 41.0901C28.3847 41.0276 28.4526 40.9776 28.5286 40.9434C28.6047 40.9091 28.6871 40.8914 28.7705 40.8914C28.8539 40.8914 28.9363 40.9091 29.0124 40.9434C29.0884 40.9776 29.1563 41.0276 29.2115 41.0901C29.2668 41.1525 29.3081 41.226 29.3329 41.3057C29.3576 41.3853 29.3651 41.4693 29.3549 41.5521V43.0637C29.3549 43.3801 29.0913 43.6437 28.7749 43.6437ZM28.7749 38.4936C28.6202 38.4936 28.4718 38.4328 28.3616 38.3243C28.2514 38.2157 28.1884 38.0682 28.1861 37.9136V36.4019C28.1759 36.3191 28.1834 36.2352 28.2081 36.1555C28.2329 36.0759 28.2742 36.0024 28.3295 35.9399C28.3847 35.8775 28.4526 35.8275 28.5286 35.7932C28.6047 35.759 28.6871 35.7413 28.7705 35.7413C28.8539 35.7413 28.9363 35.759 29.0124 35.7932C29.0884 35.8275 29.1563 35.8775 29.2115 35.9399C29.2668 36.0024 29.3081 36.0759 29.3329 36.1555C29.3576 36.2352 29.3651 36.3191 29.3549 36.4019V37.9136C29.3549 38.2299 29.0913 38.4936 28.7749 38.4936ZM28.8276 29.415C28.7503 29.415 28.6737 29.3997 28.6023 29.3701C28.5308 29.3405 28.4659 29.2972 28.4112 29.2425C28.3566 29.1878 28.3132 29.1229 28.2836 29.0515C28.254 28.98 28.2388 28.9034 28.2388 28.8261V8.4365C28.2388 8.28033 28.3008 8.13056 28.4112 8.02013C28.5217 7.9097 28.6715 7.84766 28.8276 7.84766C28.9838 7.84766 29.1336 7.9097 29.244 8.02013C29.3544 8.13056 29.4165 8.28033 29.4165 8.4365V28.8261C29.4165 29.1513 29.1528 29.415 28.8276 29.415Z"
              fill="#4B535D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.827 4.33295C28.3608 4.33295 27.9137 4.51813 27.5841 4.84777C27.2545 5.17741 27.0693 5.62449 27.0693 6.09067C27.0693 6.55685 27.2545 7.00394 27.5841 7.33357C27.9137 7.66321 28.3608 7.8484 28.827 7.8484C29.2932 7.8484 29.7403 7.66321 30.0699 7.33357C30.3995 7.00394 30.5847 6.55685 30.5847 6.09067C30.5847 5.62449 30.3995 5.17741 30.0699 4.84777C29.7403 4.51813 29.2932 4.33295 28.827 4.33295ZM28.827 9.02608C28.0485 9.02608 27.3019 8.71681 26.7514 8.16632C26.2009 7.61582 25.8916 6.86919 25.8916 6.09067C25.8916 5.31216 26.2009 4.56552 26.7514 4.01503C27.3019 3.46453 28.0485 3.15527 28.827 3.15527C29.6055 3.15527 30.3522 3.46453 30.9027 4.01503C31.4531 4.56552 31.7624 5.31216 31.7624 6.09067C31.7624 6.86919 31.4531 7.61582 30.9027 8.16632C30.3522 8.71681 29.6055 9.02608 28.827 9.02608ZM28.827 29.4157C28.3608 29.4157 27.9137 29.6009 27.5841 29.9305C27.2545 30.2601 27.0693 30.7072 27.0693 31.1734C27.0693 31.6396 27.2545 32.0867 27.5841 32.4163C27.9137 32.7459 28.3608 32.9311 28.827 32.9311C29.2932 32.9311 29.7403 32.7459 30.0699 32.4163C30.3995 32.0867 30.5847 31.6396 30.5847 31.1734C30.5847 30.7072 30.3995 30.2601 30.0699 29.9305C29.7403 29.6009 29.2932 29.4157 28.827 29.4157ZM28.827 34.1C28.4286 34.1218 28.0299 34.0622 27.6553 33.9248C27.2808 33.7873 26.9381 33.575 26.6484 33.3007C26.3586 33.0263 26.1278 32.6958 25.9701 32.3293C25.8124 31.9628 25.731 31.568 25.731 31.169C25.731 30.77 25.8124 30.3752 25.9701 30.0087C26.1278 29.6422 26.3586 29.3117 26.6484 29.0373C26.9381 28.763 27.2808 28.5507 27.6553 28.4132C28.0299 28.2758 28.4286 28.2162 28.827 28.238C29.5766 28.2791 30.282 28.6058 30.7981 29.1509C31.3142 29.6961 31.6019 30.4183 31.6019 31.169C31.6019 31.9197 31.3142 32.6419 30.7981 33.1871C30.282 33.7322 29.5766 34.0589 28.827 34.1ZM53.901 29.4157C53.4348 29.4157 52.9877 29.6009 52.6581 29.9305C52.3284 30.2601 52.1433 30.7072 52.1433 31.1734C52.1433 31.6396 52.3284 32.0867 52.6581 32.4163C52.9877 32.7459 53.4348 32.9311 53.901 32.9311C54.3672 32.9311 54.8142 32.7459 55.1439 32.4163C55.4735 32.0867 55.6587 31.6396 55.6587 31.1734C55.6587 30.7072 55.4735 30.2601 55.1439 29.9305C54.8142 29.6009 54.3672 29.4157 53.901 29.4157ZM53.901 34.1C53.5155 34.0994 53.1339 34.0229 52.778 33.8749C52.4221 33.7268 52.0988 33.5101 51.8266 33.2371C51.5544 32.9642 51.3387 32.6402 51.1917 32.2839C51.0447 31.9275 50.9694 31.5457 50.97 31.1602C50.9705 30.7747 51.047 30.3931 51.1951 30.0372C51.3431 29.6813 51.5598 29.358 51.8328 29.0859C52.1058 28.8137 52.4297 28.5979 52.7861 28.451C53.1425 28.304 53.5243 28.2286 53.9098 28.2292C54.6883 28.2292 55.4349 28.5385 55.9854 29.089C56.5359 29.6395 56.8452 30.3861 56.8452 31.1646C56.8452 31.9431 56.5359 32.6898 55.9854 33.2402C55.4349 33.7907 54.6795 34.1 53.901 34.1ZM8.14736 31.815H6.63572C6.47954 31.815 6.32977 31.7529 6.21935 31.6425C6.10892 31.5321 6.04688 31.3823 6.04688 31.2261C6.04688 31.07 6.10892 30.9202 6.21935 30.8098C6.32977 30.6993 6.47954 30.6373 6.63572 30.6373H8.14736C8.30352 30.6373 8.45331 30.6993 8.56373 30.8098C8.67416 30.9202 8.7362 31.07 8.7362 31.2261C8.7362 31.3823 8.67416 31.5321 8.56373 31.6425C8.45331 31.7529 8.30352 31.815 8.14736 31.815ZM13.2975 31.815H11.7771C11.6209 31.815 11.4711 31.7529 11.3607 31.6425C11.2503 31.5321 11.1882 31.3823 11.1882 31.2261C11.1882 31.07 11.2503 30.9202 11.3607 30.8098C11.4711 30.6993 11.6209 30.6373 11.7771 30.6373H13.2887C13.4449 30.6373 13.5946 30.6993 13.7051 30.8098C13.8155 30.9202 13.8775 31.07 13.8775 31.2261C13.8775 31.3823 13.8155 31.5321 13.7051 31.6425C13.5946 31.7529 13.4449 31.815 13.2887 31.815H13.2975ZM18.4476 31.815H16.936C16.7798 31.815 16.63 31.7529 16.5196 31.6425C16.4092 31.5321 16.3471 31.3823 16.3471 31.2261C16.3471 31.07 16.4092 30.9202 16.5196 30.8098C16.63 30.6993 16.7798 30.6373 16.936 30.6373H18.4476C18.6038 30.6373 18.7536 30.6993 18.864 30.8098C18.9744 30.9202 19.0365 31.07 19.0365 31.2261C19.0365 31.3823 18.9744 31.5321 18.864 31.6425C18.7536 31.7529 18.6038 31.815 18.4476 31.815ZM23.5978 31.815H22.0861C21.93 31.815 21.7802 31.7529 21.6698 31.6425C21.5593 31.5321 21.4973 31.3823 21.4973 31.2261C21.4973 31.07 21.5593 30.9202 21.6698 30.8098C21.7802 30.6993 21.93 30.6373 22.0861 30.6373H23.5978C23.7539 30.6373 23.9037 30.6993 24.0141 30.8098C24.1246 30.9202 24.1866 31.07 24.1866 31.2261C24.1866 31.3823 24.1246 31.5321 24.0141 31.6425C23.9037 31.7529 23.7539 31.815 23.5978 31.815Z"
              fill="#4B535D"
            />
          </svg>
        </div>
      ),
      backContent: {
        title: "Smart Manufacturing Analytics",
        features: [
          "IoT sensor data integration",
          "25% reduction in downtime",
          "Real-time production optimization",
        ],
      },
    },
  ];

  const handleCardHover = useCallback(
    (id) => {
      if (!isMobile) {
        setHoveredCard(id);
      }
    },
    [isMobile]
  );

  const handleCardLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredCard(null);
    }
  }, [isMobile]);

  const handleCardClick = useCallback(
    (id) => {
      if (isMobile) {
        setActiveCard(activeCard === id ? null : id);
      }
    },
    [isMobile, activeCard]
  );

  const handleStoryHover = useCallback(
    (id) => {
      if (!isMobile) {
        setHoveredStory(id);
      }
    },
    [isMobile]
  );

  const handleStoryLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredStory(null);
    }
  }, [isMobile]);

  const handleStoryClick = useCallback(
    (id) => {
      if (isMobile) {
        setActiveStory(activeStory === id ? null : id);
      }
    },
    [isMobile, activeStory]
  );

  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Hero Banner */}
      <div className="ai-hero-banner mb-4 position-relative">
        <img
          className="w-100 rounded"
          src="/assets/images/dataservice/data-analytics-hero.jpg"
          alt="Data Analytics & Business Intelligence - Transform data into insights"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Main Content */}
      <h3 className="mt-4">Data Analytics & Business Intelligence</h3>
      <p>
        Transform raw data into strategic business advantage. Our analytics
        solutions unlock insights that drive growth, optimize operations, and
        create competitive differentiation.
      </p>
      <p>
        From data collection to advanced visualization, we deliver end-to-end
        analytics that turn complex datasets into clear, actionable intelligence
        for informed decision-making.
      </p>

      {/* Blockquote */}
      <div className="content mt-4">
        <div className="text">
          <blockquote
            className="blockquote-one"
            style={{
              background: "linear-gradient(135deg, #121C27 0%, #334155 100%)",
              color: "white",
              padding: "2rem",
              borderRadius: "16px",
              fontStyle: "italic",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              borderLeft: "4px solid rgba(255, 255, 255, 0.3)",
              margin: "2rem 0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            We ensure data quality, security, and compliance throughout the
            analytics lifecycle, implementing robust governance frameworks and
            privacy protection measures that meet GDPR, CCPA, and industry
            standards.
          </blockquote>
        </div>
      </div>

      {/* Enhanced Data Analytics Capabilities Section with Standard Flip Animation (rotateY) */}
      <div
        className="ai-capabilities-container mt-5 p-4 position-relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(226, 232, 240, 0.6) 100%)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <ParticleBackground />

        <div className="ai-capabilities" ref={capabilitiesRef}>
          <h4 className="ai-capabilities-title text-center mb-4 position-relative">
            Our Data Analytics Capabilities
          </h4>
          <div className="row">
            {capabilities.map((capability, index) => {
              const isHovered =
                hoveredCard === capability.id || activeCard === capability.id;

              return (
                <div key={capability.id} className="col-lg-4 col-md-6 mb-4">
                  <StandardFlipCard
                    capability={capability}
                    index={index}
                    isVisible={isCapabilitiesVisible}
                    onHover={() => handleCardHover(capability.id)}
                    onLeave={handleCardLeave}
                    onClick={() => handleCardClick(capability.id)}
                    isMobile={isMobile}
                    isHovered={isHovered}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Data Analytics Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>Data Analytics Process</h3>
          <p>
            Our structured approach ensures reliable, scalable analytics that
            deliver measurable business impact through proven methodologies.
          </p>

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
                    Comprehensive data extraction, cleaning, and preparation
                    from multiple sources to ensure high-quality datasets for
                    accurate analysis.
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
                    Interactive dashboards and advanced visualizations that
                    transform complex data into clear, actionable insights for
                    strategic decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="content mt-5">
        <div className="text">
          <h3>Data Analytics Technology Stack</h3>
          <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
            <img
              className="w-100"
              src="/assets/images/dataservice/data-analytics-tech-stack.jpg"
              alt="Data Analytics Technology Stack"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
            <p className="mt-3 text-muted">
              <em>
                Comprehensive analytics technology stack featuring Tableau,
                Power BI, Python, R, SQL, and cloud analytics platforms
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* Data Analytics Success Stories Section - Using Stripe Flip Animation (rotateX) */}
      <div
        className="ai-capabilities-container mt-5 p-4 position-relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(226, 232, 240, 0.6) 100%)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <ParticleBackground />

        <div className="ai-capabilities" ref={storiesRef}>
          <h3 className="ai-capabilities-title text-center mb-4 position-relative">
            Data Analytics Solutions in Action
          </h3>
          <div className="row" style={{ minHeight: "320px" }}>
            {successStories.map((story, index) => {
              const isHovered =
                hoveredStory === story.id || activeStory === story.id;

              return (
                <div key={story.id} className="col-lg-4 col-md-6 mb-4">
                  <OptimizedStripeFlipCard
                    story={story}
                    index={index}
                    isVisible={isStoriesVisible}
                    onHover={() => handleStoryHover(story.id)}
                    onLeave={handleStoryLeave}
                    onClick={() => handleStoryClick(story.id)}
                    isMobile={isMobile}
                    isHovered={isHovered}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="innerpage mt-5">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our data analytics and business
          intelligence services.
        </p>
        <ServiceAccordion serviceType="data-analytics" />
      </div>

      {/* Footer CTA Section */}
      <div className="ai-cta-section mt-5 p-5 rounded text-center">
        {/* Background Pattern */}
        <div className="ai-cta-background-pattern"></div>

        <div className="position-relative ai-cta-content">
          <h4 className="mb-4 text-white ai-cta-title">
            Ready to Unlock Your Data's Potential?
          </h4>

          <p className="mb-4 text-white ai-cta-description">
            Let's discuss how our data analytics solutions can transform your
            business intelligence and drive data-driven decisions.
          </p>

          <div className="cta-buttons">
            <Link
              href="/contact"
              className="btn btn-lg text-decoration-none d-inline-flex align-items-center gap-3 ai-cta-button"
            >
              <span className="ai-cta-button-text">
                Start Your Data Journey
              </span>
              <i className="fas fa-arrow-right ai-cta-button-icon" />
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="ai-cta-decoration-1"></div>
        <div className="ai-cta-decoration-2"></div>
      </div>
    </div>
  );
};

export default DataAnalyticsContent;
