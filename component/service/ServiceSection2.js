import Link from "next/link";
import React from "react";

const ServiceSection2 = () => {
  return (
    <div className="service-area pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper text-center pb-55">
              <h3 className="ba-section-title pb-12">Services We Offer</h3>
              <p className="ba-mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt
                <br /> ut aliqua. Ut enim ad minim veniam quis nostrud exercit{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
            <div className="ba-service-box-2">
              <div className="ba-service-box-2-bg-img">
                <img src="assets/img/bg/service.png" alt="" />
              </div>
              <div className="ba-service-box-2-wrapper">
                <div className="icon">
                  <i className="fal fa-router"></i>
                </div>
                <div className="content">
                  <h5 className="ba-service-box-2-title">
                    <Link href="/serviceDetails">Broadband</Link>
                  </h5>
                  <p>
                    Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                    Aliqua tinciduntv porta ante pulvinar eget suspendisse
                  </p>
                  <Link href="/serviceDetails" className="ba-service-box-2-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
            <div className="ba-service-box-2">
              <div className="ba-service-box-2-bg-img">
                <img src="assets/img/bg/service.png" alt="" />
              </div>
              <div className="ba-service-box-2-wrapper">
                <div className="icon">
                  <i className="fal fa-house-signal"></i>
                </div>
                <div className="content">
                  <h5 className="ba-service-box-2-title">
                    <Link href="/serviceDetails">A Reliable Connection</Link>
                  </h5>
                  <p>
                    Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                    Aliqua tinciduntv porta ante pulvinar eget suspendisse
                  </p>
                  <Link href="/serviceDetails" className="ba-service-box-2-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
            <div className="ba-service-box-2">
              <div className="ba-service-box-2-bg-img">
                <img src="assets/img/bg/service.png" alt="" />
              </div>
              <div className="ba-service-box-2-wrapper">
                <div className="icon">
                  <i className="fal fa-tv"></i>
                </div>
                <div className="content">
                  <h5 className="ba-service-box-2-title">
                    <Link href="/serviceDetails">Protect Devices</Link>
                  </h5>
                  <p>
                    Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                    Aliqua tinciduntv porta ante pulvinar eget suspendisse
                  </p>
                  <Link href="/serviceDetails" className="ba-service-box-2-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
            <div className="ba-service-box-2">
              <div className="ba-service-box-2-bg-img">
                <img src="assets/img/bg/service.png" alt="" />
              </div>
              <div className="ba-service-box-2-wrapper">
                <div className="icon">
                  <i className="fal fa-wifi"></i>
                </div>
                <div className="content">
                  <h5 className="ba-service-box-2-title">
                    <Link href="/serviceDetails">Upgrade Speed</Link>
                  </h5>
                  <p>
                    Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                    Aliqua tinciduntv porta ante pulvinar eget suspendisse
                  </p>
                  <Link href="/serviceDetails" className="ba-service-box-2-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
            <div className="ba-service-box-2">
              <div className="ba-service-box-2-bg-img">
                <img src="assets/img/bg/service.png" alt="" />
              </div>
              <div className="ba-service-box-2-wrapper">
                <div className="icon">
                  <i className="fal fa-broadcast-tower"></i>
                </div>
                <div className="content">
                  <h5 className="ba-service-box-2-title">
                    <Link href="/serviceDetails">Brilliant Experience</Link>
                  </h5>
                  <p>
                    Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                    Aliqua tinciduntv porta ante pulvinar eget suspendisse
                  </p>
                  <Link href="/serviceDetails" className="ba-service-box-2-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
            <div className="ba-service-box-2">
              <div className="ba-service-box-2-bg-img">
                <img src="assets/img/bg/service.png" alt="" />
              </div>
              <div className="ba-service-box-2-wrapper">
                <div className="icon">
                  <i className="fal fa-tv-alt"></i>
                </div>
                <div className="content">
                  <h5 className="ba-service-box-2-title">
                    <Link href="/serviceDetails">Secure Internet</Link>
                  </h5>
                  <p>
                    Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                    Aliqua tinciduntv porta ante pulvinar eget suspendisse
                  </p>
                  <Link href="/serviceDetails" className="ba-service-box-2-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection2;
