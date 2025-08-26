import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  navigation: {
    clickable: true,
    prevEl: ".project__arry-prev",
    nextEl: ".project__arry-next",
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 4 },
  },
};

function Projects() {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabImage = (tabId, imageSrc) => {
    return (
      <img
        id={tabId}
        className={`tab-img ${activeTab === tabId ? "active" : ""}`}
        src={imageSrc}
        alt="image"
      />
    );
  };

  return (
    <>
      <section className="project-area pt-10">
        <div className="container">
          <div className="section-header__flex mb-50">
            <div>
              <h6>OUR SERVICES</h6>
              <h2 className="wow splt-txt" data-splitting>
                Build. Scale. Innovate. <br /> With the Right Tech Partner
              </h2>
            </div>
          </div>
        </div>
        <div className="project__wrp">
          <div className="swiper project__slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {/* Cloud Migration */}
              <SwiperSlide
                className="swiper-slide"
                data-tab="tab-1"
                onMouseEnter={() => handleTabClick("tab-1")}
              >
                <Link
                  href="/services/cloud-migration"
                  className="project__item"
                >
                  <div className="content">
                    <span>01</span>
                    <h4>
                      Cloud Migration <br /> & Modernization
                    </h4>
                    <p>
                      Assess, plan, and migrate to AWS/Azure/GCP with
                      containerization, IaC, and cost-optimized landing zones—
                      minimal downtime, maximum reliability.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* AI Solutions */}
              <SwiperSlide
                className="swiper-slide"
                data-tab="tab-2"
                onMouseEnter={() => handleTabClick("tab-2")}
              >
                <Link href="/services/ai-solutions" className="project__item">
                  <div className="content">
                    <span>02</span>
                    <h4>
                      AI Solutions <br /> & Automation
                    </h4>
                    <p>
                      LLM apps, copilots, and workflow automation securely wired
                      to your data. From prototypes to production with
                      guardrails.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* IT Solutions */}
              <SwiperSlide
                className="swiper-slide"
                data-tab="tab-3"
                onMouseEnter={() => handleTabClick("tab-3")}
              >
                <Link href="/services/it-solutions" className="project__item">
                  <div className="content">
                    <span>03</span>
                    <h4>
                      Managed IT <br /> & Support
                    </h4>
                    <p>
                      End-to-end IT services: networking, security, monitoring,
                      and 24×7 support to keep your business compliant and
                      online.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* Data Analytics */}
              <SwiperSlide
                className="swiper-slide"
                data-tab="tab-4"
                onMouseEnter={() => handleTabClick("tab-4")}
              >
                <Link href="/services/data-analytics" className="project__item">
                  <div className="content">
                    <span>04</span>
                    <h4>
                      Data Analytics <br /> & Platforms
                    </h4>
                    <p>
                      Modern data stacks, warehouses, and dashboards with
                      reliable pipelines and governance—turn raw data into
                      trusted insights.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* Product Engineering */}
              <SwiperSlide
                className="swiper-slide"
                data-tab="tab-5"
                onMouseEnter={() => handleTabClick("tab-5")}
              >
                <Link
                  href="/services/product-engineering"
                  className="project__item"
                >
                  <div className="content">
                    <span>05</span>
                    <h4>
                      Product <br /> Engineering
                    </h4>
                    <p>
                      Design and build scalable web/mobile products with robust
                      architectures, CI/CD, and UX that delights—ship faster
                      with quality.
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="project__slider-arrys">
            <button className="project__arry-prev">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button className="project__arry-next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>

          <div className="project__image">
            {renderTabImage("tab-1", "assets/images/project/1.jpg")}
            {renderTabImage("tab-2", "assets/images/project/2.jpg")}
            {renderTabImage("tab-3", "assets/images/project/3.jpg")}
            {renderTabImage("tab-4", "assets/images/project/4.jpg")}
            {renderTabImage("tab-5", "assets/images/project/5.jpg")}
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
