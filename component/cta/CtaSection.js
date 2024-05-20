import Link from "next/link";
import React from "react";

const CtaSection = () => {
  return (
    <section
      className="cta-area pt-75 pb-85 bg-default home-2-cta-section"
    >
      <div className="container">
        <div className="p-rel">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div className="ba-cta-content-left">
                <h4 className="title wow fadeInUp" data-wow-delay=".2s">
                  First subscribe we discount
                  <br /> 30% off and free
                  <br /> installation
                </h4>
                <Link
                  href="/contact"
                  className="ba-submit-btn hover-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-4 d-none d-xl-block">
              <div className="ba-cta-content-right">
                <img src="assets/img/cta/cta-1.png" alt="cta image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
