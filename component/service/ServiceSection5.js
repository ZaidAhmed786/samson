import Link from "next/link";
import React from "react";

const ServiceSection5 = () => {
  return (
    <div className="service-area pt-120 pb-40">
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper ba-has-wrapped-br text-center">
              <h3 className="ba-section-title">
                We Are Internet Service
                <br /> Provider Company
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-75">
            <div
              className="ba-service-box ba-service-box-has-padding wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="icon">
                <i className="fal fa-house-signal"></i>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/serviceDetails">A Reliable Connection</Link>
                </h4>
                <p>
                  Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                  Aliqua tinciduntv porta ante pulvinar eget suspendisse
                </p>
                <Link href="/serviceDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-75">
            <div
              className="ba-service-box ba-service-box-has-padding wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="icon">
                <i className="fal fa-router"></i>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/serviceDetails">Broadband</Link>
                </h4>
                <p>
                  Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                  Aliqua tinciduntv porta ante pulvinar eget suspendisse
                </p>
                <Link href="/serviceDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-75">
            <div
              className="ba-service-box ba-service-box-has-padding wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="icon">
                <i className="fal fa-tv"></i>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/serviceDetails">Protect Devices</Link>
                </h4>
                <p>
                  Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                  Aliqua tinciduntv porta ante pulvinar eget suspendisse
                </p>
                <Link href="/serviceDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-75">
            <div
              className="ba-service-box ba-service-box-has-padding wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="icon">
                <i className="fal fa-wifi"></i>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/serviceDetails">Upgrade Speed</Link>
                </h4>
                <p>
                  Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                  Aliqua tinciduntv porta ante pulvinar eget suspendisse
                </p>
                <Link href="/serviceDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-75">
            <div
              className="ba-service-box ba-service-box-has-padding wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="icon">
                <i className="fal fa-broadcast-tower"></i>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/serviceDetails">Brilliant Experience</Link>
                </h4>
                <p>
                  Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                  Aliqua tinciduntv porta ante pulvinar eget suspendisse
                </p>
                <Link href="/serviceDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-75">
            <div
              className="ba-service-box ba-service-box-has-padding wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="icon">
                <i className="fal fa-tv-alt"></i>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/serviceDetails">Secure Internet</Link>
                </h4>
                <p>
                  Morbi ullamcorper ipsum ipsum, dictu mi hendrerit sit amet.
                  Aliqua tinciduntv porta ante pulvinar eget suspendisse
                </p>
                <Link href="/serviceDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection5;
