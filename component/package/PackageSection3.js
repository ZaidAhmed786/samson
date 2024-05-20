import Link from "next/link";
import React from "react";

const PackageSection3 = () => {
  return (
    <section
      className="choose-internet bg-default pt-95 pb-100 home-2-package-section"
    >
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper ba-has-wrapped-br">
              <h3 className="ba-section-title">
                Choose Your Internet
                <br /> Pack By Speed
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-8 col-lg-10">
            <div className="choose-internet-box-wrapper pr-65">
              <div className="row pb-40">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-20 mb-md-0">
                  <div
                    className="ba-choose-internet-single wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <Link href="/contact" className="ba-choose-internet-item">
                      <i className="fal fa-broadcast-tower"></i>
                      <span className="ba-count">400</span>
                      <span className="ba-label">Mbps</span>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-20 mb-md-0">
                  <div
                    className="ba-choose-internet-single wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <Link href="/contact" className="ba-choose-internet-item">
                      <i className="fal fa-broadcast-tower"></i>
                      <span className="ba-count">500</span>
                      <span className="ba-label">Mbps</span>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-20 mb-md-0">
                  <div
                    className="ba-choose-internet-single wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Link href="/contact" className="ba-choose-internet-item">
                      <i className="fal fa-broadcast-tower"></i>
                      <span className="ba-count">600</span>
                      <span className="ba-label">Mbps</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/faq" className="ba-submit-btn">
                What speed do I need?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection3;
