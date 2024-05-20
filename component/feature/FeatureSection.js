import React from "react";

const FeatureSection = () => {
  return (
    <section className="feature-list-area feature-list-space-top">
      <div className="container">
        <div className="ba-feature-list-wrapper">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-20 mb-lg-0">
              <div
                className="ba-feature-list-box wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-home"></i>
                </div>
                <div className="content">
                  <h4 className="ba-feature-list-title">
                    <a href="service-details.html">Home Internet</a>
                  </h4>
                  <ul>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Bufferless Steaming</span>
                    </li>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Lag Free Gaming</span>
                    </li>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Real IP Included</span>
                    </li>
                    <li>
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>
                        Stable Connection With <br />
                        No Interruptions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-20 mb-lg-0">
              <div
                className="ba-feature-list-box active wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="fal fa-wifi"></i>
                </div>
                <div className="content">
                  <h4 className="ba-feature-list-title">
                    <a href="service-details.html">Corporate Internet</a>
                  </h4>
                  <ul>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Dedicated Network</span>
                    </li>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Business-friendly SLAs</span>
                    </li>
                    <li>
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>24×7 Support</span>
                    </li>
                    <li>
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>
                        Flexible & Scalable
                        <br /> Bandwidth
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-20 mb-lg-0">
              <div
                className="ba-feature-list-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <i className="fal fa-server"></i>
                </div>
                <div className="content">
                  <h4 className="ba-feature-list-title">
                    <a href="service-details.html">Data Connectivity</a>
                  </h4>
                  <ul>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Optimal Performance</span>
                    </li>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>World Class Reliability</span>
                    </li>
                    <li className="active">
                      <i className="fal fa-check-circle"></i>{" "}
                      <span>Optical Fiber Network</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
