import React from "react";
import CounterUp from "../../elements/CounterUp";

function Funfact() {
  return (
    <>
      <section className="funfact-area pt-80 pb-80">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-xxl-3">
              <div className="funfact__item">
                <ul
                  className="wow fadeInDown"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <i className="fa-light fa-plus" /> Consultation Services
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Spatial Design
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Idea Generation
                  </li>
                </ul>
                <h2>
                  <span className="count">
                    <CounterUp end={12} />
                  </span>
                  +
                </h2>
                <h5 className="color-light wow splt-txt" data-splitting>
                  Satisfied Clients
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="funfact__item">
                <ul
                  className="wow fadeInDown"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <i className="fa-light fa-plus" /> Consultation
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Space Design
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Idea Development
                  </li>
                </ul>
                <h2>
                  <span className="count">
                    <CounterUp end={26} />
                  </span>
                  +
                </h2>
                <h5 className="color-light wow splt-txt" data-splitting>
                  Finished Projects
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="funfact__item">
                <ul
                  className="wow fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <i className="fa-light fa-plus" /> Design Refinement
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> 3D Rendering
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Project Coordination
                  </li>
                </ul>
                <h2>
                  <span className="count">
                    <CounterUp end={15} />
                  </span>
                  +
                </h2>
                <h5 className="color-light wow splt-txt" data-splitting>
                  Professional Team
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="funfact__item">
                <ul
                  className="wow fadeInDown"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <i className="fa-light fa-plus" /> Furniture Selection and
                    Acquisition
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Lighting Planning
                  </li>
                  <li>
                    <i className="fa-light fa-plus" /> Custom Design Features
                  </li>
                </ul>
                <h2>
                  <span className="count">
                    <CounterUp end={10} />
                  </span>
                  +
                </h2>
                <h5 className="color-light wow splt-txt" data-splitting>
                  Events Managed
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Funfact;
