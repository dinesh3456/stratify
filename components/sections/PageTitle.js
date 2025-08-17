import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area position-relative"
      style={{
        backgroundImage: "url(assets/images/banner/banner-inner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "350px", // Fixed height to match first screenshot
        transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {/* Enhanced Overlay */}
      <div
        className="breadcrumb-overlay position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(18, 28, 39, 0.85) 0%, rgba(58, 80, 99, 0.75) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Background Animation Effect */}
      <div
        className="breadcrumb-bg-effect position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          zIndex: 1,
          opacity: 0.6,
        }}
      ></div>

      <div className="container position-relative h-100" style={{ zIndex: 2 }}>
        <div className="breadcrumb__wrp d-flex align-items-center justify-content-center h-100">
          <div className="breadcrumb__item text-center">
            <h1
              className="title text-white mb-3"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)", // Reduced from 2.5rem-4rem
                fontWeight: "800",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                animation:
                  "fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
                opacity: 0,
                transform: "translateY(30px)",
                margin: "0 0 1rem 0", // Reduced bottom margin
              }}
            >
              {props.pageName}
            </h1>

            <nav aria-label="breadcrumb">
              <ul
                className="breadcrumb justify-content-center mb-0 p-0"
                style={{
                  backgroundColor: "transparent",
                  animation:
                    "fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards",
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    className="text-white text-decoration-none"
                    style={{
                      fontSize: "1rem", // Reduced from 1.1rem
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                      opacity: 0.9,
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "1")}
                    onMouseLeave={(e) => (e.target.style.opacity = "0.9")}
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item d-flex align-items-center">
                  <i
                    className="fa-light fa-angle-right mx-3 text-white"
                    style={{
                      fontSize: "0.9rem", // Reduced from 1rem
                      opacity: 0.7,
                    }}
                  ></i>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                  style={{
                    fontSize: "1rem", // Reduced from 1.1rem
                    fontWeight: "500",
                    opacity: 0.8,
                  }}
                >
                  {props.pageName}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Floating Elements for Premium Feel - Made smaller */}
      <div
        className="floating-element-1 position-absolute"
        style={{
          top: "15%",
          right: "10%",
          width: "80px", // Reduced from 100px
          height: "80px", // Reduced from 100px
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float1 6s ease-in-out infinite",
          zIndex: 1,
        }}
      ></div>

      <div
        className="floating-element-2 position-absolute"
        style={{
          bottom: "10%",
          left: "8%",
          width: "50px", // Reduced from 60px
          height: "50px", // Reduced from 60px
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float2 8s ease-in-out infinite",
          zIndex: 1,
        }}
      ></div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(15px, -15px) rotate(120deg);
          }
          66% {
            transform: translate(-10px, 10px) rotate(240deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-12px, -12px) rotate(180deg);
          }
        }

        .breadcrumb-area:hover {
          transform: scale(1.02);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .breadcrumb-area {
            height: 280px !important; /* Reduced from 300px */
          }

          .floating-element-1,
          .floating-element-2 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .breadcrumb-area {
            height: 220px !important; /* Reduced from 250px */
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .breadcrumb-area,
          .title,
          .breadcrumb,
          .floating-element-1,
          .floating-element-2 {
            animation: none !important;
            transition: none !important;
          }

          .title,
          .breadcrumb {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PageTitle;
