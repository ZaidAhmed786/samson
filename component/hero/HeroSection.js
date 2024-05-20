import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero-area home-2-hero-section hero-space-reverce hero-height d-flex align-items-center bg-default has-hero-overlay"
    >
      <div className="container">
        <div className="hero-content hero-content-space-top">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div className="ba-section-title-wrapper">
                <h5 className="ba-hero-subtitle wow fadeInUp" data-wow-delay=".2s">
                  Unbeatable Internet
                </h5>
                <h4 className="ba-hero-title wow fadeInUp" data-wow-delay=".4s">
                  NextBit Unlimited Possibilities
                </h4>
              </div>
              <div className="ba-avibility-form  wow fadeInUp">
                <form action="#" method="post">
                  <div
                    className="input-wrap mb-25 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="ba-form-control control-1 pb-30 pb-md-0">
                      <label htmlFor="street">Street Address</label>
                      <input
                        type="text"
                        id="street"
                        placeholder="Mirpur-12 Bus Stand, Dhaka"
                      />
                    </div>
                    <div className="ba-form-control control-2">
                      <label htmlFor="zip-code">Zip Code</label>
                      <input type="text" id="zip-code" placeholder="121210" />
                    </div>
                  </div>
                  <div
                    className="ba-form-control-submit  wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <button type="submit" className="ba-submit-btn">
                      Cheak Availibilty
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
