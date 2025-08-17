import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";

// Enhanced Professional SVG Icons with theme colors
const AgenticAiIcon = ({ isHovered, isVisible }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="ai-icon-svg">
    <defs>
      <linearGradient id="agenticGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isHovered ? "#1e293b" : "#121C27"} />
        <stop offset="100%" stopColor={isHovered ? "#334155" : "#3A5063"} />
      </linearGradient>
    </defs>
    <rect
      x="15"
      y="15"
      width="30"
      height="30"
      rx="8"
      fill="none"
      stroke="url(#agenticGradient)"
      strokeWidth="2"
      strokeDasharray="120"
      strokeDashoffset={isVisible ? "0" : "120"}
      className="ai-icon-rect"
    />
    <circle cx="25" cy="25" r="3" fill="url(#agenticGradient)" />
    <circle cx="35" cy="25" r="3" fill="url(#agenticGradient)" />
    <path
      d="M22 35 Q30 32 38 35"
      stroke="url(#agenticGradient)"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="28"
      y="18"
      width="4"
      height="4"
      fill="url(#agenticGradient)"
      className="ai-icon-dot"
    />
  </svg>
);

const MachineLearningIcon = ({ isHovered, isVisible }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="ai-icon-svg">
    <defs>
      <linearGradient id="mlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isHovered ? "#1e293b" : "#121C27"} />
        <stop offset="100%" stopColor={isHovered ? "#334155" : "#3A5063"} />
      </linearGradient>
    </defs>
    <g className={`ai-icon-group ${isHovered ? "hovered" : ""}`}>
      <circle
        cx="20"
        cy="20"
        r="6"
        fill="none"
        stroke="url(#mlGradient)"
        strokeWidth="2"
      />
      <circle
        cx="40"
        cy="20"
        r="6"
        fill="none"
        stroke="url(#mlGradient)"
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="40"
        r="6"
        fill="none"
        stroke="url(#mlGradient)"
        strokeWidth="2"
      />
      <circle
        cx="40"
        cy="40"
        r="6"
        fill="none"
        stroke="url(#mlGradient)"
        strokeWidth="2"
      />
      <path
        d="M26 20 L34 20 M20 26 L20 34 M26 40 L34 40 M40 26 L40 34"
        stroke="url(#mlGradient)"
        strokeWidth="2"
        strokeDasharray="40"
        strokeDashoffset={isVisible ? "0" : "40"}
        className="ai-icon-connections"
      />
      <circle cx="20" cy="20" r="2" fill="url(#mlGradient)" />
      <circle cx="40" cy="20" r="2" fill="url(#mlGradient)" />
      <circle cx="20" cy="40" r="2" fill="url(#mlGradient)" />
      <circle cx="40" cy="40" r="2" fill="url(#mlGradient)" />
    </g>
  </svg>
);

const NLPIcon = ({ isHovered, isVisible }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="ai-icon-svg">
    <defs>
      <linearGradient id="nlpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isHovered ? "#1e293b" : "#121C27"} />
        <stop offset="100%" stopColor={isHovered ? "#334155" : "#3A5063"} />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="25"
      width="40"
      height="15"
      rx="7"
      fill="none"
      stroke="url(#nlpGradient)"
      strokeWidth="2"
      className={`ai-icon-rect ${isHovered ? "hovered" : ""}`}
    />
    <rect x="15" y="15" width="8" height="4" rx="2" fill="url(#nlpGradient)" />
    <rect x="26" y="15" width="8" height="4" rx="2" fill="url(#nlpGradient)" />
    <rect x="37" y="15" width="8" height="4" rx="2" fill="url(#nlpGradient)" />
    <path
      d="M15 30 Q30 27 45 30"
      stroke="url(#nlpGradient)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="35"
      strokeDashoffset={isVisible ? "0" : "35"}
      className="ai-icon-wave"
    />
  </svg>
);

const ComputerVisionIcon = ({ isHovered, isVisible }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="ai-icon-svg">
    <defs>
      <linearGradient id="cvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isHovered ? "#1e293b" : "#121C27"} />
        <stop offset="100%" stopColor={isHovered ? "#334155" : "#3A5063"} />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="15"
      width="40"
      height="30"
      rx="5"
      fill="none"
      stroke="url(#cvGradient)"
      strokeWidth="2"
      className={`ai-icon-eye ${isHovered ? "hovered" : ""}`}
    />
    <circle
      cx="30"
      cy="30"
      r="8"
      fill="none"
      stroke="url(#cvGradient)"
      strokeWidth="2"
    />
    <circle cx="30" cy="30" r="4" fill="url(#cvGradient)" />
    <path
      d="M15 20 L25 20 M35 20 L45 20"
      stroke="url(#cvGradient)"
      strokeWidth="2"
      strokeDasharray="20"
      strokeDashoffset={isVisible ? "0" : "20"}
      className="ai-icon-scan"
    />
  </svg>
);

const PredictiveIcon = ({ isHovered, isVisible }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="ai-icon-svg">
    <defs>
      <linearGradient
        id="predictiveGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor={isHovered ? "#1e293b" : "#121C27"} />
        <stop offset="100%" stopColor={isHovered ? "#334155" : "#3A5063"} />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="15"
      width="40"
      height="30"
      rx="3"
      fill="none"
      stroke="url(#predictiveGradient)"
      strokeWidth="2"
    />
    <path
      d="M15 35 Q25 25 30 30 Q35 20 45 25"
      stroke="url(#predictiveGradient)"
      strokeWidth="3"
      fill="none"
      strokeDasharray="50"
      strokeDashoffset={isVisible ? "0" : "50"}
      className={`ai-icon-chart ${isHovered ? "hovered" : ""}`}
    />
    <circle
      cx="20"
      cy="32"
      r="2"
      fill="url(#predictiveGradient)"
      className="ai-icon-point"
    />
    <circle
      cx="30"
      cy="30"
      r="2"
      fill="url(#predictiveGradient)"
      className="ai-icon-point"
    />
    <circle
      cx="40"
      cy="25"
      r="2"
      fill="url(#predictiveGradient)"
      className="ai-icon-point"
    />
  </svg>
);

const AutomationIcon = ({ isHovered, isVisible }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="ai-icon-svg">
    <defs>
      <linearGradient
        id="automationGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor={isHovered ? "#1e293b" : "#121C27"} />
        <stop offset="100%" stopColor={isHovered ? "#334155" : "#3A5063"} />
      </linearGradient>
    </defs>
    <g className={`ai-icon-gears ${isHovered ? "hovered" : ""}`}>
      <circle
        cx="25"
        cy="25"
        r="10"
        fill="none"
        stroke="url(#automationGradient)"
        strokeWidth="2"
      />
      <circle
        cx="35"
        cy="35"
        r="8"
        fill="none"
        stroke="url(#automationGradient)"
        strokeWidth="2"
      />
      <path
        d="M25 15 L25 35 M15 25 L35 25"
        stroke="url(#automationGradient)"
        strokeWidth="1"
      />
      <path
        d="M35 27 L35 43 M27 35 L43 35"
        stroke="url(#automationGradient)"
        strokeWidth="1"
      />
      <circle cx="25" cy="25" r="3" fill="url(#automationGradient)" />
      <circle cx="35" cy="35" r="2" fill="url(#automationGradient)" />
    </g>
  </svg>
);

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

const AiSolutionsContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const [capabilitiesRef, isCapabilitiesVisible] = useIntersectionObserver(0.2);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const capabilities = [
    {
      id: 1,
      icon: AgenticAiIcon,
      title: "Agentic AI Solutions",
      details: [
        "Building AI First products that Think, Learn and Scale",
        "Real-time contextual agents that automate workflows",
        "Autonomous decision-making systems",
        "Intelligent process optimization",
      ],
    },
    {
      id: 2,
      icon: MachineLearningIcon,
      title: "Machine Learning & Deep Learning Models",
      details: [
        "Deep learning neural networks",
        "Predictive Analysis algorithms",
        "Advanced Data Mining techniques",
        "Statistical Modelling frameworks",
      ],
    },
    {
      id: 3,
      icon: NLPIcon,
      title: "Natural Language Processing (NLP)",
      details: [
        "Text analysis and sentiment detection",
        "Language understanding and generation",
        "Conversational AI interfaces",
        "Multi-language processing capabilities",
      ],
    },
    {
      id: 4,
      icon: ComputerVisionIcon,
      title: "Computer Vision & Image Recognition",
      details: [
        "Image and video analysis systems",
        "Object detection and recognition",
        "Real-time visual processing",
        "Advanced pattern recognition",
      ],
    },
    {
      id: 5,
      icon: PredictiveIcon,
      title: "Predictive Analytics & Forecasting",
      details: [
        "Future trend analysis models",
        "Risk assessment and mitigation",
        "Business intelligence insights",
        "Real-time data forecasting",
      ],
    },
    {
      id: 6,
      icon: AutomationIcon,
      title: "Intelligent Automation & RPA",
      details: [
        "Process automation and optimization",
        "Workflow intelligence systems",
        "Robotic process automation",
        "Smart task orchestration",
      ],
    },
  ];

  const useCases = [
    {
      id: 1,
      title: "Healthcare AI Solutions",
      subtitle: "Intelligent diagnostic systems and patient care optimization",
      frontIcon: (
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
      ),
      backContent: {
        title: "Advanced Healthcare AI",
        features: [
          "AI-powered diagnostic imaging analysis",
          "Predictive patient outcome modeling",
          "Automated treatment recommendation systems",
          "Real-time health monitoring solutions",
        ],
      },
    },
    {
      id: 2,
      title: "Financial AI Application",
      subtitle: "Intelligent fraud detection and risk management",
      frontIcon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_356_27498)">
            <path
              d="M30 0.703125C38.3203 0.703125 45.8203 3.98438 51.2109 9.25781C56.6016 14.5312 60 21.9141 60 30C60 38.0859 56.6016 45.4688 51.2109 50.7422C45.8203 56.0156 38.3203 59.2969 30 59.2969C21.6797 59.2969 14.1797 56.0156 8.78906 50.7422C3.39844 45.4688 0 38.0859 0 30C0 21.9141 3.39844 14.5312 8.78906 9.25781C14.1797 3.98438 21.6797 0.703125 30 0.703125ZM50.2734 10.3125C45 5.15625 37.8516 2.10938 30 2.10938C22.1484 2.10938 15 5.15625 9.72656 10.3125C4.57031 15.3516 1.40625 22.2656 1.40625 30C1.40625 37.7344 4.57031 44.6484 9.72656 49.6875C15 54.8438 22.1484 57.8906 30 57.8906C37.8516 57.8906 45 54.8438 50.2734 49.6875C55.4297 44.6484 58.5938 37.7344 58.5938 30C58.5938 22.2656 55.4297 15.3516 50.2734 10.3125Z"
              fill="#4B535D"
            />
            <path
              d="M30 5.74219C29.6484 5.74219 29.2969 5.97656 29.2969 6.32812C29.2969 6.79688 29.6484 7.03125 30 7.03125H46.5234C46.875 7.03125 47.2266 6.79688 47.2266 6.32812C47.2266 5.97656 46.875 5.74219 46.5234 5.74219H30ZM30 11.6016C29.6484 11.6016 29.2969 11.9531 29.2969 12.3047C29.2969 12.6562 29.6484 13.0078 30 13.0078H52.9688C53.4375 13.0078 53.6719 12.6562 53.6719 12.3047C53.6719 11.9531 53.4375 11.6016 52.9688 11.6016H30ZM30 17.4609C29.6484 17.4609 29.2969 17.8125 29.2969 18.1641C29.2969 18.5156 29.6484 18.8672 30 18.8672H56.7188C57.0703 18.8672 57.4219 18.5156 57.4219 18.1641C57.4219 17.8125 57.0703 17.4609 56.7188 17.4609H30ZM30 23.4375C29.6484 23.4375 29.2969 23.6719 29.2969 24.1406C29.2969 24.4922 29.6484 24.7266 30 24.7266H58.7109C59.0625 24.7266 59.4141 24.4922 59.4141 24.1406C59.4141 23.6719 59.0625 23.4375 58.7109 23.4375H30ZM30 29.2969C29.6484 29.2969 29.2969 29.6484 29.2969 30C29.2969 30.3516 29.6484 30.7031 30 30.7031H59.2969C59.6484 30.7031 60 30.3516 60 30C60 29.6484 59.6484 29.2969 59.2969 29.2969H30ZM30 35.2734C29.6484 35.2734 29.2969 35.5078 29.2969 35.8594C29.2969 36.3281 29.6484 36.5625 30 36.5625H58.7109C59.0625 36.5625 59.4141 36.3281 59.4141 35.8594C59.4141 35.5078 59.0625 35.2734 58.7109 35.2734H30ZM30 41.1328C29.6484 41.1328 29.2969 41.4844 29.2969 41.8359C29.2969 42.1875 29.6484 42.5391 30 42.5391H56.7188C57.0703 42.5391 57.4219 42.1875 57.4219 41.8359C57.4219 41.4844 57.0703 41.1328 56.7188 41.1328H30ZM30 46.9922C29.6484 46.9922 29.2969 47.3438 29.2969 47.6953C29.2969 48.0469 29.6484 48.3984 30 48.3984H52.9688C53.4375 48.3984 53.6719 48.0469 53.6719 47.6953C53.6719 47.3438 53.4375 46.9922 52.9688 46.9922H30ZM30 52.9688C29.6484 52.9688 29.2969 53.2031 29.2969 53.6719C29.2969 54.0234 29.6484 54.2578 30 54.2578H46.5234C46.875 54.2578 47.2266 54.0234 47.2266 53.6719C47.2266 53.2031 46.875 52.9688 46.5234 52.9688H30Z"
              fill="#4B535D"
            />
          </g>
          <defs>
            <clipPath id="clip0_356_27498">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      backContent: {
        title: "Intelligent Financial Systems",
        features: [
          "Real-time fraud detection algorithms",
          "Risk assessment and management",
          "Automated compliance monitoring",
          "Predictive market analysis",
        ],
      },
    },
    {
      id: 3,
      title: "Smart Manufacturing",
      subtitle: "Industrial automation and process optimization",
      frontIcon: (
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
      ),
      backContent: {
        title: "Smart Manufacturing",
        features: [
          "Predictive maintenance systems",
          "Quality control automation",
          "Supply chain optimization",
          "Production efficiency analytics",
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

  const getCardClassName = (capability, index) => {
    let className = "ai-capability-card";

    if (isCapabilitiesVisible) {
      className += " visible";
    }

    if (hoveredCard === capability.id || activeCard === capability.id) {
      className += " hovered";
    }

    return className;
  };

  return (
    <div className="services-details__content position-relative overflow-hidden px-3">
      {/* Hero Banner with enhanced overlay effect */}
      <div className="ai-hero-banner mb-4 position-relative">
        <img
          className="w-100 rounded"
          src="/assets/images/aiservice/ai-solutions-hero.jpg"
          alt="AI Solutions & Machine Learning - Future-ready AI capabilities"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* Main Content */}
      <h3 className="mt-4">AI Solutions & Machine Learning</h3>
      <p>
        Future-ready AI capabilities to keep you ahead in the digital surge. We
        empower your business with AI-driven culture that drives long-term,
        sustainable growth through responsible AI solutions.
      </p>
      <p>
        Our AI solutions transform your operations with intelligent automation
        and data-driven insights. From machine learning models to natural
        language processing, we deliver cutting-edge AI technologies that
        revolutionize how you work.
      </p>
      <p>
        Transform raw data into actionable insights with advanced analytics,
        predictive modelling, and interactive dashboards that drive strategic
        decision-making for your organization.
      </p>

      {/* Enhanced AI Capabilities Section - 3x2 layout with container only for this section */}
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
            Our AI Capabilities
          </h4>
          <div className="row">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              const isHovered =
                hoveredCard === capability.id || activeCard === capability.id;

              return (
                <div key={capability.id} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className={getCardClassName(capability, index)}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                    onMouseEnter={() => handleCardHover(capability.id)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => handleCardClick(capability.id)}
                  >
                    {/* Background Gradient */}
                    <div className="ai-card-background" />

                    {/* Shimmer Effect */}
                    <div className="ai-card-shimmer" />

                    {/* Icon */}
                    <div className="ai-icon-container text-center mb-3">
                      <IconComponent
                        isHovered={isHovered}
                        isVisible={isCapabilitiesVisible}
                      />
                    </div>

                    {/* Title */}
                    <h5 className="ai-card-title text-center mb-3">
                      {capability.title}
                    </h5>

                    {/* Details with staggered animation */}
                    <ul
                      className={`ai-details-list list-unstyled ${
                        isHovered ? "visible" : ""
                      }`}
                    >
                      {capability.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="ai-detail-item mb-2 d-flex align-items-start"
                          style={{
                            animationDelay: isHovered
                              ? `${detailIndex * 0.1}s`
                              : "0s",
                          }}
                        >
                          <i className="fas fa-check-circle ai-check-icon me-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Gradient Indicator */}
                    <div className="ai-card-indicator position-absolute bottom-0 start-0 w-100" />

                    {/* Floating Elements */}
                    <div className="ai-floating-element-1 position-absolute" />
                    <div className="ai-floating-element-2 position-absolute" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Implementation Process */}
      <div className="content mt-5">
        <div className="text">
          <h3>AI Implementation Process</h3>
          <p>
            Our comprehensive AI implementation process ensures seamless
            integration of intelligent solutions into your existing workflows
            and systems.
          </p>
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
            We follow responsible AI principles, ensuring ethical
            implementation, transparency, and bias mitigation throughout the
            development and deployment process.
          </blockquote>
        </div>

        {/* Technology Stack - Add the image back */}
        <div className="ai-implementation-diagram mt-4">
          <div className="tech-stack-placeholder p-4 bg-light border rounded text-center">
            <img
              className="w-100"
              src="/assets/images/aiservice/ai-tech-stack.jpg"
              alt="AI Technology Stack"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
            <p className="mt-3 text-muted">
              <em>
                Comprehensive technology stack diagram will be updated with
                detailed architecture
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* AI Solutions in Action Section - Original Implementation */}
      <div className="ai-use-cases mt-5 mb-5">
        <h3 className="mb-4">AI Solutions in Action</h3>
        <div className="row" style={{ minHeight: "320px" }}>
          {useCases.map((useCase) => (
            <div key={useCase.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className="flip-card"
                style={{
                  perspective: "1000px",
                  height: "300px",
                  position: "relative",
                }}
                onMouseEnter={() => setFlippedCard(useCase.id)}
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
                      flippedCard === useCase.id
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
                    <div className="icon mb-3">{useCase.frontIcon}</div>
                    <h4
                      className="mb-2 text-center"
                      style={{ color: "#333", fontSize: "1.2rem" }}
                    >
                      {useCase.title}
                    </h4>
                    <p className="small text-muted mt-2 text-center">
                      {useCase.subtitle}
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
                      {useCase.backContent.title}
                    </h4>
                    <ul className="list-unstyled text-start">
                      {useCase.backContent.features.map((feature, index) => (
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

      {/* FAQ Section - Keep original implementation */}
      <div className="innerpage mt-5 pt-4">
        <h3>Frequently Asked Questions</h3>
        <p>
          Get answers to common questions about our AI solutions and machine
          learning services.
        </p>
        <ServiceAccordion serviceType="ai-solutions" />
      </div>

      {/* Footer CTA Section with improved visibility and theme colors */}
      <div
        className="ai-cta-section mt-5 p-5 rounded text-center"
        style={{
          background: "linear-gradient(135deg, #121C27 0%, #334155 100%)",
          borderRadius: "24px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(58, 80, 99, 0.3) 0%, transparent 50%)
          `,
            pointerEvents: "none",
            zIndex: 1,
          }}
        ></div>

        <div className="position-relative" style={{ zIndex: 2 }}>
          <h4
            className="mb-4 text-white"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Ready to Transform Your Business with AI?
          </h4>

          <p
            className="mb-4 text-white"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              opacity: "0.95",
              maxWidth: "600px",
              margin: "0 auto 2rem auto",
              textShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Let's discuss how our AI solutions can drive growth and innovation
            for your organization.
          </p>

          <div className="cta-buttons">
            <Link
              href="/contact"
              className="btn btn-lg text-decoration-none d-inline-flex align-items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #3A5063 0%, #4a5568 100%)",
                color: "#ffffff", // Explicitly set to white
                padding: "1rem 2.5rem",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow:
                  "0 10px 30px rgba(58, 80, 99, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow =
                  "0 15px 40px rgba(58, 80, 99, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                e.target.style.background =
                  "linear-gradient(135deg, #4a5568 0%, #5a6478 100%)";
                e.target.style.color = "#ffffff"; // Ensure white on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 10px 30px rgba(58, 80, 99, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                e.target.style.background =
                  "linear-gradient(135deg, #3A5063 0%, #4a5568 100%)";
                e.target.style.color = "#ffffff"; // Ensure white when hover ends
              }}
            >
              <span style={{ color: "#ffffff" }}>Get Started Today</span>
              <i
                className="fas fa-arrow-right"
                style={{
                  transition: "transform 0.3s ease",
                  color: "#ffffff", // Ensure icon is also white
                }}
              />
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            width: "40px",
            height: "40px",
            background:
              "radial-gradient(circle, rgba(58, 80, 99, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite 1.5s",
            zIndex: 1,
          }}
        ></div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.3;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AiSolutionsContent;
