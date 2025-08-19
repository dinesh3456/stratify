import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

// Import the Product Engineering Capability Icons
import {
  FullStackDevelopmentIcon,
  MobileAppDevelopmentIcon,
  ApiDevelopmentIcon,
  CloudNativeDevelopmentIcon,
  DevOpsIcon,
  QualityAssuranceIcon,
} from "../icons/ProductEngineeringCapabilityIcons";

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

const StripeFlipCard = ({
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
  const numStripes = 6; // Number of horizontal stripes

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
      {/* Front Side Stripes */}
      <div className="stripe-container front">
        {Array.from({ length: numStripes }).map((_, stripeIndex) => (
          <div
            key={`front-${stripeIndex}`}
            className="stripe front-stripe"
            style={{
              animationDelay: isHovered ? `${stripeIndex * 0.05}s` : "0s",
              zIndex: numStripes - stripeIndex,
            }}
          >
            <div className="stripe-content">
              {/* Icon distributed across stripes 1-2 for better spacing */}
              {(stripeIndex === 1 || stripeIndex === 2) && (
                <div className="icon-stripe">
                  {stripeIndex === 1 && (
                    <IconComponent
                      isHovered={isHovered}
                      isVisible={isVisible}
                    />
                  )}
                </div>
              )}
              {/* Title distributed across stripes 3-4 for better spacing */}
              {(stripeIndex === 3 || stripeIndex === 4) && (
                <div className="title-stripe">
                  {stripeIndex === 3 && (
                    <h5 className="card-title">{capability.title}</h5>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Back Side Stripes */}
      <div className="stripe-container back">
        {Array.from({ length: numStripes }).map((_, stripeIndex) => (
          <div
            key={`back-${stripeIndex}`}
            className="stripe back-stripe"
            style={{
              animationDelay: isHovered ? `${stripeIndex * 0.05}s` : "0s",
              zIndex: numStripes - stripeIndex,
            }}
          >
            <div className="stripe-content">
              {/* Title in the first stripe on the back */}
              {stripeIndex === 0 && (
                <div className="back-title-stripe">
                  <h5 className="back-title">{capability.title}</h5>
                </div>
              )}
              {/* Details in stripes 1-4 on the back */}
              {stripeIndex >= 1 &&
                stripeIndex <= 4 &&
                capability.details[stripeIndex - 1] && (
                  <div className="detail-stripe">
                    <div className="detail-item">
                      <i className="fas fa-check-circle check-icon" />
                      <span>{capability.details[stripeIndex - 1]}</span>
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="floating-element-1"></div>
      <div className="floating-element-2"></div>

      {/* Hover indicator */}
      <div className="card-indicator" />
    </div>
  );
};

const ProductEngineeringContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const [capabilitiesRef, isCapabilitiesVisible] = useIntersectionObserver(0.2);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const capabilities = [
    {
      id: 1,
      icon: FullStackDevelopmentIcon,
      title: "Full-Stack Web Development",
      details: [
        "React, Angular, Vue.js frontend solutions",
        "Node.js, Python, Java backend systems",
        "RESTful APIs and GraphQL development",
        "Progressive Web Applications (PWAs)",
      ],
    },
    {
      id: 2,
      icon: MobileAppDevelopmentIcon,
      title: "Mobile Application Development",
      details: [
        "Native iOS and Android development",
        "Cross-platform React Native & Flutter",
        "Mobile UI/UX optimization",
        "App store deployment and maintenance",
      ],
    },
    {
      id: 3,
      icon: ApiDevelopmentIcon,
      title: "API Development & Integration",
      details: [
        "RESTful and GraphQL API design",
        "Third-party service integrations",
        "API documentation and testing",
        "Webhook and real-time processing",
      ],
    },
    {
      id: 4,
      icon: CloudNativeDevelopmentIcon,
      title: "Cloud-Native Development",
      details: [
        "Microservices architecture design",
        "Containerization with Docker & Kubernetes",
        "Serverless application development",
        "Scalable cloud infrastructure",
      ],
    },
    {
      id: 5,
      icon: DevOpsIcon,
      title: "DevOps & CI/CD",
      details: [
        "Automated deployment pipelines",
        "Infrastructure as Code (IaC)",
        "Continuous integration and delivery",
        "Monitoring and performance optimization",
      ],
    },
    {
      id: 6,
      icon: QualityAssuranceIcon,
      title: "Quality Assurance & Testing",
      details: [
        "Automated testing frameworks",
        "Performance and load testing",
        "Security vulnerability assessments",
        "Code quality and review processes",
      ],
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Scalable multi-vendor marketplace solution",
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
        title: "Modern E-commerce Success",
        features: [
          "Multi-vendor marketplace architecture",
          "Real-time inventory management",
          "Payment gateway integrations",
          "Mobile-responsive design",
        ],
      },
    },
    {
      id: 2,
      title: "Enterprise Mobile App",
      subtitle: "Cross-platform business productivity solution",
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
        title: "Enterprise Mobile Solution",
        features: [
          "Cross-platform React Native app",
          "Offline-first data synchronization",
          "Enterprise security protocols",
          "Real-time collaboration features",
        ],
      },
    },
    {
      id: 3,
      title: "SaaS Platform",
      subtitle: "Cloud-native multi-tenant application",
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
              d="M17.6768 11.1353L16.3065 9.03891L18.7166 7.65105L19.8422 9.88664L17.6768 11.1353ZM29.9916 7.48254V4.98047L27.2168 5.13199L27.4909 7.6193L29.9916 7.48254ZM24.7774 8.0884L24.1999 5.65242L21.5304 6.44414L22.3772 8.79949L24.7774 8.0884ZM35.3914 5.56441L32.6437 5.11969L32.3821 7.60699L34.8533 8.00766L35.3914 5.56441ZM9.255 21.1405L6.95004 20.1559L5.99836 22.7678L8.39859 23.4911L9.255 21.1405ZM11.8707 16.596L9.85934 15.1056L8.3277 17.4243L10.493 18.6825L11.8707 16.596ZM7.7673 26.169L5.2984 25.7463L4.98047 28.5047L7.48113 28.6513L7.7673 26.169ZM15.4649 12.7747L13.8502 10.864L11.8264 12.7673L13.642 14.4898L15.4649 12.7747ZM50.5835 20.8083L52.8713 19.787L51.5944 17.3168L49.4337 18.5873L50.5835 20.8083ZM40.9066 7.4727L38.335 6.40254L37.503 8.76281L39.8128 9.72551L40.9066 7.4727ZM52.5166 31.0433L55.0195 31.1557L54.995 28.3826L52.4946 28.5413L52.5166 31.0433ZM52.1518 25.8122L54.6134 25.3504L53.9477 22.6505L51.5525 23.3835L52.1518 25.8122ZM49.8813 14.7855L48.0707 12.677L46.2625 14.4093L47.8946 16.3077L49.8813 14.7855ZM45.8222 10.6075L43.5735 8.97293L42.2133 11.0742L44.2391 12.5452L45.8222 10.6075ZM42.5631 48.6962L43.9601 50.7731L46.1793 49.097L44.5597 47.1888L42.5631 48.6962ZM32.7954 52.3441L33.1036 54.829L35.8443 54.333L35.262 51.8994L32.7954 52.3441ZM37.8946 51.0956L38.7731 53.4388L41.3223 52.3196L40.187 50.089L37.8946 51.0956ZM46.5488 45.2855L48.3888 46.9861L50.1604 44.8457L48.1465 43.3601L46.5488 45.2855ZM47.5301 30C47.5301 39.6707 39.6758 47.5137 29.9916 47.5137C20.3071 47.5137 12.4528 39.6707 12.4528 30C12.4528 20.3295 20.3071 12.4863 29.9916 12.4863C39.6757 12.4863 47.5301 20.3295 47.5301 30ZM45.0245 30C45.0245 21.7221 38.2809 14.9883 29.9916 14.9883C21.702 14.9883 14.9584 21.722 14.9584 30C14.9584 38.278 21.702 45.0118 29.9916 45.0118C38.2809 45.0118 45.0245 38.278 45.0245 30ZM51.6698 36.2159L54.0799 36.9049L54.6966 34.1927L52.2253 33.7773L51.6698 36.2159ZM49.644 41.0511L51.8264 42.2802L53.0573 39.7879L50.7499 38.8082L49.644 41.0511ZM8.41559 36.5627L6.01793 37.2909L6.97465 39.9004L9.27703 38.9109L8.41559 36.5627ZM11.8707 47.2767L13.8991 49.1776L15.5088 47.2597L13.6812 45.5494L11.8707 47.2767ZM27.2779 54.8755L29.9914 55.0195V52.5176L27.547 52.3856L27.2779 54.8755ZM7.48594 31.4025L4.98527 31.5564L5.30824 34.3148L7.77727 33.8873L7.48594 31.4025ZM10.52 41.3639L8.35699 42.6295L9.89613 44.9459L11.905 43.4482L10.52 41.3639ZM16.3579 50.9954L18.7705 52.3759L19.8961 50.1402L17.7232 48.8966L16.3579 50.9954ZM21.5893 53.578L24.2586 54.3622L24.8312 51.9263L22.4284 51.2202L21.5893 53.578Z"
              fill="#4B535D"
            />
          </svg>
        </div>
      ),
      backContent: {
        title: "Scalable SaaS Architecture",
        features: [
          "Multi-tenant cloud architecture",
          "Microservices-based design",
          "Auto-scaling infrastructure",
          "Advanced analytics dashboard",
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

  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Hero Banner */}
      <div className="ai-hero-banner mb-4 position-relative">
        <img
          className="w-100 rounded"
          src="/assets/images/productservice/product-engineering-hero.jpg"
          alt="Product Engineering & Development - End-to-end software solutions"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Main Content */}
      <h3 className="mt-4">Product Engineering & Development</h3>
      <p>
        Transform ideas into market-ready software solutions. Our end-to-end
        product engineering delivers scalable, high-performance applications
        that drive business growth and user engagement.
      </p>
      <p>
        From concept to deployment, we build resilient, future-ready products
        using cutting-edge technologies and agile methodologies that adapt to
        evolving market demands.
      </p>

      {/* Enhanced Product Engineering Capabilities Section with Stripe Flip Animation */}
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
            Our Engineering Capabilities
          </h4>
          <div className="row">
            {capabilities.map((capability, index) => {
              const isHovered =
                hoveredCard === capability.id || activeCard === capability.id;

              return (
                <div key={capability.id} className="col-lg-4 col-md-6 mb-4">
                  <StripeFlipCard
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
            We follow industry best practices for secure coding, performance
            optimization, and scalable architecture design to ensure your
            products are robust, future-ready, and built to scale with your
            business growth.
          </blockquote>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="content mt-5">
        <div className="text">
          <h3>Product Engineering Technology Stack</h3>
          <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
            <img
              className="w-100"
              src="/assets/images/productservice/product-engineering-tech-stack.jpg"
              alt="Product Engineering Technology Stack"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
            <p className="mt-3 text-muted">
              <em>
                Comprehensive development technology stack featuring React,
                Node.js, Python, mobile frameworks, and cloud platforms
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* Product Engineering Success Stories Section */}
      <div className="ai-use-cases mt-5 mb-5">
        <h3 className="mb-4">Product Engineering Success Stories</h3>
        <div className="row" style={{ minHeight: "320px" }}>
          {successStories.map((story) => (
            <div key={story.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className="flip-card"
                style={{
                  perspective: "1000px",
                  height: "300px",
                  position: "relative",
                }}
                onMouseEnter={() => setFlippedCard(story.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform:
                      flippedCard === story.id
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="flip-card-front"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      border: "1px solid #e9ecef",
                      borderRadius: "8px",
                      padding: "2rem",
                      backgroundColor: "white",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="icon mb-3">{story.frontIcon}</div>
                    <h4
                      className="mb-2 text-center"
                      style={{ color: "#333", fontSize: "1.2rem" }}
                    >
                      {story.title}
                    </h4>
                    <p className="small text-muted mt-2 text-center">
                      {story.subtitle}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="flip-card-back"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      border: "1px solid #121C27",
                      borderRadius: "8px",
                      padding: "2rem",
                      backgroundColor: "#121C27",
                      color: "white",
                      boxShadow: "0 10px 30px rgba(18, 28, 39, 0.3)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h4 className="mb-3 text-white text-center">
                      {story.backContent.title}
                    </h4>
                    <ul className="list-unstyled text-start">
                      {story.backContent.features.map((feature, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                        >
                          <i
                            className="fas fa-check-circle me-2 flex-shrink-0"
                            style={{
                              color: "rgba(255, 255, 255, 0.8)",
                              marginTop: "2px",
                            }}
                          />
                          <span
                            style={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "0.9rem",
                              lineHeight: "1.4",
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="innerpage mt-5">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our product engineering and
          development services.
        </p>
        <ServiceAccordion serviceType="product-engineering" />
      </div>

      {/* Footer CTA Section */}
      <div className="ai-cta-section mt-5 p-5 rounded text-center">
        {/* Background Pattern */}
        <div className="ai-cta-background-pattern"></div>

        <div className="position-relative ai-cta-content">
          <h4 className="mb-4 text-white ai-cta-title">
            Ready to Build Your Next Great Product?
          </h4>

          <p className="mb-4 text-white ai-cta-description">
            Let's discuss how our product engineering expertise can bring your
            vision to life with scalable, modern solutions.
          </p>

          <div className="cta-buttons">
            <Link
              href="/contact"
              className="btn btn-lg text-decoration-none d-inline-flex align-items-center gap-3 ai-cta-button"
            >
              <span className="ai-cta-button-text">Start Your Project</span>
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

export default ProductEngineeringContent;
