import Link from "next/link";
import React from "react";

const AboutSection3 = () => {
  return (
    <section className="about-area pt-120 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-4">
            <div className="pr-30 ba-about-banner-space-right">
              <div className="ba-about-left-wrapper p-rel">
                <div className="item-1">
                  <img src="assets/img/about/about-1.jpg" alt="" />
                </div>
                <div className="item-2 text-end pb-30 pb-lg-0">
                  <img src="assets/img/about/about-2.jpg" alt="" />
                </div>
                <div className="ba-about-experience-box has-pos-tr">
                  <h4 className="ba-about-experience-title">
                    <span>25+</span> Years Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-8">
            <div className="ba-about-right-wrapper pt-30 pb-50 pb-xl-0">
              <div className="ba-section-title-wrapper pb-25">
                <h5
                  className="ba-section-subtitle wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  About Our Internet
                </h5>
                <h3 className="ba-section-title wow fadeInUp" data-wow-delay=".2s">
                  Fast High Speed Broadband <br />
                  Connection from Triangle
                </h3>
              </div>
              <div className="ba-about-right-content">
                <div className="text wow fadeInUp" data-wow-delay=".3s">
                  <p>
                    {" "}
                    <a href="contact.html">Available at checkout.</a>Watch
                    thousands of awesome TV shows,
                    <br /> movies, and documentaries.
                  </p>
                </div>
              </div>
              <div className="ba-about-right-list pr-95">
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon">
                      <img src="assets/img/icons/icon-1.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Speed faster than a gig</h4>
                      <p>
                        Medixer Care will be administered through plan-based
                        omizable incorporate partnership between family.
                      </p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img src="assets/img/icons/icon-2.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Protect your devices</h4>
                      <p>
                        Medixer Care will be administered through plan-based
                        omizable incorporate partnership between family.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="ba-about-right-actions wow fadeInUp"
                data-wow-delay=".6s"
              >
                <Link href="/about" className="ba-submit-btn">
                  How it Works
                </Link>
                <div className="ba-about-right-call-num">
                  <div className="icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Call anytime</h4>
                    <a href="tel:1-322-344-888" className="number">
                      1-322-344-888
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
