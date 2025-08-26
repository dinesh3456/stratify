import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";
import {
  CloudStrategyIcon,
  CloudMigrationIcon,
  CloudSecurityIcon,
  CloudOptimizationIcon,
  CloudAutomationIcon,
  CloudMonitoringIcon,
} from "../icons/CloudMigrationIcons";

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

// Updated StandardFlipCard Component with reduced text size and glossy background
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

// Optimized Stripe Flip Card Component
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

// Replace your StripeFlipCardForStories with OptimizedStripeFlipCard in your main component
const CloudMigrationContent = () => {
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
      icon: CloudStrategyIcon,
      title: "Cloud Strategy & Assessment",
      description:
        "Evaluate infrastructure readiness and create tailored migrations",
      details: [
        "Infrastructure readiness evaluation",
        "Cost-benefit analysis",

        "Risk assessment & mitigation",
      ],
    },
    {
      id: 2,
      icon: CloudMigrationIcon,
      title: "Seamless Cloud Migration",
      description:
        "Execute zero-downtime migrations with data integrity assurance",
      details: [
        "Zero-downtime migration strategies",
        "Data integrity & validation",

        "Legacy system integration",
      ],
    },
    {
      id: 3,
      icon: CloudSecurityIcon,
      title: "Cloud Security & Compliance",
      description:
        "Implement enterprise-grade security and regulatory compliance",
      details: [
        "End-to-end encryption protocols",
        "Identity & access management",

        "Security monitoring & alerts",
      ],
    },
    {
      id: 4,
      icon: CloudOptimizationIcon,
      title: "Performance Optimization",
      description:
        "Maximize resource efficiency and minimize operational costs",
      details: [
        "Resource utilization analysis",
        "Cost optimization strategies",

        "Performance tuning & monitoring",
      ],
    },
    {
      id: 5,
      icon: CloudAutomationIcon,
      title: "DevOps & Automation",
      description: "Streamline deployments with automated CI/CD pipelines",
      details: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Automated deployment workflows",
      ],
    },
    {
      id: 6,
      icon: CloudMonitoringIcon,
      title: "Monitoring & Management",
      description: "Ensure optimal performance with 24/7 monitoring solutions",
      details: [
        "24/7 infrastructure monitoring",

        "Performance analytics dashboard",
        "Automated backup & recovery",
      ],
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "Enterprise Migration Success",
      subtitle: "Fortune 500 company infrastructure transformation",
      frontIcon: (
        <div
          style={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SVG placeholder - you will fill this */}
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
        </div>
      ),
      backContent: {
        title: "Enterprise Cloud Transformation",
        features: [
          "Migrated 200+ applications to cloud",
          "Reduced infrastructure costs by 40%",
          "Achieved 99.9% uptime reliability",
          // "Improved deployment speed by 10x",
        ],
      },
    },
    {
      id: 2,
      title: "Healthcare Cloud Migration",
      subtitle: "HIPAA-compliant cloud infrastructure deployment",
      frontIcon: (
        <div
          style={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SVG placeholder - you will fill this */}
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 2.46094C24.5534 2.46094 19.229 4.07608 14.7001 7.10212C10.1714 10.1281 6.64161 14.4292 4.55724 19.4613C2.47287 24.4934 1.9275 30.0306 2.9901 35.3726C4.0527 40.7147 6.67554 45.6216 10.527 49.473C14.3784 53.3244 19.2854 55.9473 24.6275 57.0099C29.9694 58.0725 35.5067 57.5271 40.5387 55.4429C45.5709 53.3585 49.8719 49.8287 52.898 45.2999C55.9239 40.7711 57.5391 35.4467 57.5391 30C57.5309 22.6988 54.6269 15.6989 49.464 10.536C44.3012 5.37319 37.3013 2.46913 30 2.46094ZM53.865 40.0589L52.6932 39.1322C52.4847 38.9676 52.3463 38.7303 52.3055 38.468L52.0112 36.593C51.9453 36.1757 51.7607 35.7863 51.4793 35.4711C51.1979 35.1561 50.8316 34.9289 50.4244 34.8164L49.3101 34.5099C49.2174 34.4841 49.1328 34.4348 49.0647 34.3667C48.9968 34.2984 48.9476 34.2137 48.9221 34.1208L48.653 33.1295C48.5259 32.6646 48.2498 32.2544 47.8671 31.9617C47.4843 31.6691 47.016 31.5102 46.5342 31.5095H45.1308C44.8265 31.5093 44.5254 31.5726 44.2469 31.6952C43.9683 31.8176 43.7181 31.9967 43.5125 32.2211C43.3068 32.4453 43.1501 32.7101 43.0521 32.9982C42.9542 33.2864 42.9173 33.5916 42.9437 33.8949C42.9524 33.9987 42.9317 34.103 42.8841 34.1958C42.8366 34.2887 42.764 34.3662 42.6746 34.4199L39 36.6038C38.7072 36.7784 38.3747 36.8753 38.0339 36.885L35.588 36.9492C35.4443 36.9539 35.3039 36.9053 35.1939 36.8126C35.084 36.7199 35.0123 36.5897 34.9926 36.4472L34.6176 33.8546C34.6005 33.735 34.6206 33.6131 34.6754 33.5055C34.7301 33.3978 34.8167 33.3098 34.9233 33.2532L37.1087 32.0963C37.3911 31.9472 37.6376 31.7379 37.8308 31.4834C38.0238 31.229 38.159 30.9353 38.2266 30.623L39.0488 26.8491C39.1689 26.2956 39.4473 25.7891 39.8499 25.3908L43.3969 21.8775C43.6286 21.6489 43.8063 21.3714 43.917 21.0654C44.0279 20.7593 44.0688 20.4324 44.0372 20.1084L43.8539 18.1875C43.8414 18.0542 43.8776 17.9207 43.9556 17.8118C44.0336 17.7029 44.1483 17.6256 44.2787 17.5946L46.4504 17.0822C46.9698 16.9599 47.4411 16.6859 47.8041 16.2947L50.1572 13.7634C53.0956 17.4011 54.9923 21.7677 55.6452 26.3981C56.2982 31.0284 55.6829 35.7506 53.865 40.0589ZM4.10157 30C4.09631 25.2258 5.41904 20.5442 7.92189 16.4784L10.4709 18.135C10.6842 18.2729 10.8594 18.4622 10.9805 18.6852C11.1016 18.9084 11.1648 19.1585 11.1642 19.4124V21.2597C11.1641 21.7158 11.2869 22.1636 11.5198 22.5557C11.7527 22.9478 12.087 23.27 12.4875 23.4882L13.3678 23.9687C13.4396 24.0078 13.5023 24.0615 13.552 24.1265C13.6017 24.1914 13.6373 24.266 13.6564 24.3455C13.6756 24.4248 13.6779 24.5075 13.6632 24.5879C13.6486 24.6683 13.6172 24.7448 13.5713 24.8124L13.2075 25.3443C12.8832 25.8176 12.7545 26.3979 12.8482 26.9639C12.942 27.5298 13.2509 28.0376 13.7105 28.3809L14.5734 29.0283C14.9629 29.3196 15.4278 29.4933 15.9129 29.5284C16.398 29.5637 16.883 29.4591 17.3105 29.2271L19.0121 28.3008C19.4274 28.0746 19.7712 27.737 20.0049 27.3258L21.5874 24.5429C21.8183 24.1368 21.9398 23.6777 21.9399 23.2106V22.3593C21.9393 22.1276 22.0286 21.9047 22.1891 21.7374C22.3494 21.57 22.5684 21.4715 22.8 21.4622L25.2759 21.3576C25.4273 21.3506 25.578 21.3821 25.7138 21.4494C25.8495 21.5168 25.9659 21.6177 26.0517 21.7425L27.1449 23.3184C27.2615 23.4879 27.3168 23.6921 27.3015 23.8971C27.2862 24.1023 27.2015 24.296 27.0609 24.4463L26.7797 24.7449C26.3529 25.1981 26.1075 25.7922 26.0901 26.4146C26.0729 27.0368 26.285 27.6437 26.6859 28.1199L27.4242 28.9968C27.5148 29.1047 27.579 29.2322 27.6116 29.3691C27.6441 29.5061 27.6441 29.6487 27.6117 29.7858L27.2813 31.1583C27.2252 31.3859 27.0828 31.5827 26.8842 31.7073C26.6858 31.8318 26.4465 31.8743 26.2172 31.8258L25.38 31.6434C24.9632 31.5543 24.5282 31.6193 24.1556 31.8261C23.7828 32.0328 23.4977 32.3676 23.3526 32.7684L22.6374 34.7583C22.5947 34.877 22.5273 34.9853 22.44 35.0763C22.3526 35.1674 22.2471 35.2389 22.1303 35.2863C22.0134 35.3339 21.8877 35.3562 21.7617 35.352C21.6357 35.3477 21.5118 35.3169 21.3984 35.2617L18.6713 33.9314C18.3933 33.7959 18.0876 33.7269 17.7785 33.7301C17.4693 33.7331 17.1651 33.8081 16.8899 33.9491C16.6148 34.0901 16.3761 34.2932 16.193 34.5423C16.0098 34.7915 15.8873 35.0798 15.8349 35.3846L15.6708 36.3342C15.5823 36.843 15.6198 37.3658 15.7802 37.8566C15.9405 38.3475 16.2188 38.7917 16.5905 39.15L19.2188 41.6855C19.5021 41.9579 19.8447 42.1611 20.2197 42.2793C20.5946 42.3975 20.9918 42.4274 21.3801 42.3666L23.7488 41.9916C24.0036 41.9502 24.2648 41.9747 24.5075 42.0627C24.7502 42.1508 24.9663 42.2994 25.1354 42.4946L26.8659 44.4779C26.9829 44.6118 27.0573 44.7776 27.0797 44.9541L27.2171 46.0214C27.2346 46.1585 27.2202 46.2977 27.1751 46.4283C27.1301 46.559 27.0554 46.6775 26.9571 46.7745C26.8587 46.8716 26.7395 46.9448 26.6082 46.9881C26.4771 47.0316 26.3376 47.0442 26.2008 47.025L24.0882 46.7283C23.7245 46.6772 23.3541 46.7058 23.0025 46.812C22.6511 46.9184 22.3268 47.0997 22.0524 47.3438L21.047 48.2343C20.9136 48.3528 20.748 48.4289 20.5715 48.4527C20.3948 48.4766 20.2149 48.4472 20.055 48.3684L16.2263 46.4859C15.6281 46.191 14.9519 46.0929 14.2946 46.2059C13.6373 46.3188 13.0326 46.6368 12.5672 47.1146L11.5519 48.1542C6.77528 43.3197 4.09815 36.7962 4.10157 30ZM30 55.8984C23.6267 55.9026 17.4773 53.547 12.7378 49.2858L13.74 48.2601C13.9641 48.0302 14.2552 47.877 14.5716 47.8226C14.888 47.7683 15.2136 47.8154 15.5016 47.9574L19.3304 49.8389C19.7822 50.0621 20.2902 50.1453 20.7896 50.0781C21.2889 50.0108 21.7569 49.796 22.1334 49.4612L23.1404 48.5705C23.2377 48.4847 23.3526 48.4208 23.4768 48.3833C23.6012 48.3456 23.7321 48.3354 23.8608 48.353L25.973 48.6497C26.3598 48.7041 26.7539 48.6684 27.1247 48.5457C27.4953 48.4229 27.8328 48.2162 28.1106 47.9417C28.3884 47.6672 28.5993 47.3324 28.7265 46.9631C28.8539 46.5939 28.8942 46.2002 28.8446 45.8129L28.7076 44.7455C28.6442 44.2466 28.4336 43.778 28.1025 43.3992L26.3724 41.4159C26.021 41.0108 25.572 40.7022 25.0679 40.5194C24.5637 40.3365 24.0213 40.2854 23.492 40.3712L21.1238 40.7462C20.9864 40.7681 20.8457 40.7577 20.7129 40.7159C20.5802 40.674 20.4588 40.6019 20.3588 40.5051L17.7296 37.9688C17.5505 37.7961 17.4165 37.5822 17.3393 37.3458C17.262 37.1094 17.244 36.8577 17.2866 36.6126L17.4512 35.663C17.46 35.6088 17.4815 35.5575 17.5139 35.5133C17.5461 35.4689 17.5884 35.4327 17.6372 35.4075C17.6859 35.3825 17.7399 35.3691 17.7948 35.3687C17.8497 35.3681 17.9039 35.3805 17.9532 35.4047L20.6799 36.735C21.0005 36.8913 21.3504 36.9785 21.7068 36.9905C22.0634 37.0026 22.4183 36.9395 22.7487 36.8052C23.0792 36.671 23.3777 36.4686 23.6247 36.2112C23.8716 35.954 24.0617 35.6475 24.1824 35.312L24.8976 33.3216C24.9072 33.2948 24.9261 33.2724 24.951 33.2586C24.9759 33.2448 25.0049 33.2405 25.0326 33.2466L25.8695 33.4289C26.5172 33.5651 27.1926 33.4446 27.7533 33.0926C28.314 32.7407 28.7162 32.1848 28.875 31.5422L29.2059 30.1674C29.2985 29.7804 29.2992 29.3772 29.2079 28.9901C29.1167 28.6029 28.9361 28.2425 28.6805 27.9375L27.9417 27.0609C27.8 26.8925 27.725 26.6777 27.7311 26.4575C27.7373 26.2373 27.8241 26.027 27.975 25.8666L28.2563 25.568C28.653 25.1432 28.8929 24.5957 28.9361 24.0159C28.9791 23.4363 28.823 22.8593 28.4934 22.3805L27.3999 20.805C27.1568 20.4524 26.828 20.1674 26.4443 19.9767C26.0607 19.7861 25.635 19.6961 25.2071 19.7151L22.7312 19.8201C22.0758 19.8459 21.456 20.1251 21.0024 20.5986C20.5488 21.0723 20.2967 21.7035 20.2992 22.3593V23.2134C20.2991 23.3961 20.2517 23.5758 20.1614 23.7347L18.5784 26.5176C18.4961 26.6633 18.3744 26.7827 18.2274 26.8622L16.5258 27.7889C16.3746 27.8709 16.203 27.9078 16.0316 27.8954C15.86 27.8829 15.6956 27.8216 15.5579 27.7187L14.6949 27.0717C14.5747 26.9813 14.4939 26.8482 14.4693 26.6999C14.4446 26.5515 14.4778 26.3993 14.5622 26.2749L14.9259 25.7429C15.1014 25.4859 15.221 25.1951 15.2771 24.8892C15.3332 24.5832 15.3246 24.2688 15.2519 23.9664C15.1791 23.664 15.0437 23.3802 14.8545 23.1333C14.6653 22.8864 14.4265 22.6818 14.1534 22.5329L13.2731 22.0524C13.1313 21.9753 13.0129 21.8615 12.9305 21.7229C12.848 21.5841 12.8044 21.4257 12.8044 21.2643V19.4124C12.8054 18.885 12.6742 18.3659 12.4227 17.9024C12.1712 17.4389 11.8075 17.0459 11.3649 16.7592L8.82845 15.1112C11.0517 11.9413 13.9584 9.3112 17.334 7.41497C20.7096 5.51873 24.468 4.40476 28.3317 4.15528C32.1954 3.9058 36.0657 4.52716 39.6572 5.97352C43.2486 7.41988 46.4694 9.65431 49.082 12.5119L46.6032 15.1772C46.461 15.3303 46.2767 15.4376 46.0734 15.4856L43.9013 15.998C43.3857 16.1214 42.932 16.4268 42.6233 16.8578C42.3146 17.2889 42.1718 17.8167 42.2208 18.3446L42.405 20.2626C42.413 20.3445 42.4026 20.4272 42.3747 20.5046C42.3467 20.5818 42.3018 20.652 42.2433 20.7099L38.6963 24.2226C38.0684 24.8438 37.6341 25.634 37.4466 26.4971L36.6245 30.272C36.6075 30.3506 36.5736 30.4247 36.525 30.4889C36.4764 30.5531 36.4143 30.6059 36.3432 30.6437L34.1583 31.8005C33.7529 32.0159 33.4236 32.3511 33.2157 32.7606C33.0078 33.17 32.9312 33.6335 32.9963 34.088L33.3713 36.6807C33.4488 37.2206 33.7221 37.7132 34.1393 38.0648C34.5564 38.4162 35.0882 38.6021 35.6334 38.5871L38.0795 38.5229C38.7 38.5068 39.306 38.3322 39.84 38.0157L43.5126 35.8322C43.8671 35.6201 44.1548 35.3126 44.3432 34.9451C44.5314 34.5774 44.6129 34.1645 44.5782 33.7529C44.5715 33.6762 44.5809 33.5991 44.6057 33.5262C44.6304 33.4535 44.67 33.3866 44.7221 33.33C44.774 33.2733 44.8371 33.228 44.9075 33.1971C44.9778 33.1661 45.0539 33.15 45.1308 33.15H46.5338C46.6556 33.1502 46.7739 33.1904 46.8707 33.2642C46.9674 33.3381 47.0373 33.4418 47.0696 33.5592L47.3382 34.5501C47.4386 34.9185 47.633 35.2545 47.9024 35.5251C48.1718 35.7957 48.5069 35.9916 48.8747 36.0938L49.9889 36.4004C50.0918 36.4286 50.1843 36.486 50.2554 36.5655C50.3265 36.6452 50.3732 36.7436 50.3897 36.8489L50.6841 38.7239C50.7887 39.3942 51.1427 40.0004 51.675 40.4208L53.1516 41.5884C50.9987 45.8855 47.6933 49.4994 43.605 52.0265C39.5166 54.5534 34.8063 55.8941 30 55.8984Z"
                fill="#4B535D"
              />
            </svg>
          </div>
        </div>
      ),
      backContent: {
        title: "Secure Healthcare Cloud",
        features: [
          "HIPAA & SOC 2 compliance achieved",
          "Enhanced data security protocols",
          "Streamlined patient data access",
          // "Disaster recovery implementation",
        ],
      },
    },
    {
      id: 3,
      title: "Financial Services Migration",
      subtitle: "Banking infrastructure modernization",
      frontIcon: (
        <div
          style={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SVG placeholder - you will fill this */}
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
        </div>
      ),
      backContent: {
        title: "Modern Banking Infrastructure",
        features: [
          "Real-time transaction processing",
          "Enhanced fraud detection systems",
          "Regulatory compliance automation",
          // "Scalable microservices architecture",
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
          src="/assets/images/cloudservice/cloud-migration-hero.jpg"
          alt="Cloud Migration Services - Seamless cloud transformation"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Main Content */}
      <h3 className="mt-4">Cloud Migration & Infrastructure Transformation</h3>
      <p>
        Transform your business with secure, scalable cloud solutions. Our
        expert team ensures seamless migration with zero downtime and maximum
        ROI.
      </p>
      <p>
        From strategy to execution, we deliver end-to-end cloud transformation
        services that drive innovation and operational excellence.
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
            We implement enterprise-grade security, automated scaling, and
            comprehensive monitoring to ensure your cloud infrastructure
            delivers peak performance and reliability.
          </blockquote>
        </div>
      </div>

      {/* Enhanced Cloud Migration Capabilities Section with Standard Flip Animation (rotateY) */}
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
            Cloud Migration Capabilities
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

      {/* Cloud Migration Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>Cloud Migration Process</h3>
          <p>
            Our proven methodology ensures seamless transition with minimal
            disruption and maximum ROI.
          </p>

          <div className="feature-list mt-4">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="process-card p-4 border rounded">
                  <img
                    className="mb-3 w-100 rounded"
                    src="/assets/images/cloudservice/cloud-assessment-strategy.jpg"
                    alt="Cloud Assessment & Strategy"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <h5 className="mb-3">Assessment & Strategy</h5>
                  <p>
                    Comprehensive infrastructure evaluation and custom migration
                    roadmap with risk assessment and cost optimization planning.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="process-card p-4 border rounded">
                  <img
                    className="mb-3 w-100 rounded"
                    src="/assets/images/cloudservice/cloud-migration-optimization.jpg"
                    alt="Migration & Optimization"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <h5 className="mb-3">Migration & Optimization</h5>
                  <p>
                    Zero-downtime migration execution with real-time monitoring,
                    performance tuning, and ongoing cost management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Migration Success Stories Section - Using Stripe Flip Animation (rotateX) */}
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
            Cloud Migration Success Stories
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
          Get answers to common questions about our cloud migration and
          transformation services.
        </p>
        <ServiceAccordion serviceType="cloud-migration" />
      </div>

      {/* Footer CTA Section */}
      <div className="ai-cta-section mt-5 p-5 rounded text-center">
        {/* Background Pattern */}
        <div className="ai-cta-background-pattern"></div>

        <div className="position-relative ai-cta-content">
          <h4 className="mb-4 text-white ai-cta-title">
            Ready to Transform Your Infrastructure?
          </h4>

          <p className="mb-4 text-white ai-cta-description">
            Let's discuss how our cloud migration services can enhance your
            business agility and reduce operational costs.
          </p>

          <div className="cta-buttons">
            <Link
              href="/contact"
              className="btn btn-lg text-decoration-none d-inline-flex align-items-center gap-3 ai-cta-button"
            >
              <span className="ai-cta-button-text">
                Start Your Cloud Journey
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

export default CloudMigrationContent;
