import Link from "next/link";
import React from "react";

const ServiceSection4 = () => {
  return (
    <div className="service-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper text-center pb-55">
              <h3 className="ba-section-title pb-12">Explore Our Best Services</h3>
              <p className="ba-mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod te incididunt ut labore <br />
                et dolore magna aliqua. Ut enim ad minim to saidul
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xxl-0">
            <div className="ba-service-box-3 text-center">
              <div className="icon">
                <i className="fal fa-cctv"></i>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/serviceDetails">Home Security</Link>
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <Link href="/serviceDetails" className="ba-service-box-3-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xxl-0">
            <div className="ba-service-box-3 text-center">
              <div className="icon">
                <i className="fal fa-tv-alt"></i>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/serviceDetails">Smart TV</Link>
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <Link href="/serviceDetails" className="ba-service-box-3-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xxl-0">
            <div className="ba-service-box-3 text-center">
              <div className="icon">
                <i className="fal fa-mobile"></i>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/serviceDetails">Mobile Connection</Link>
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <Link href="/serviceDetails" className="ba-service-box-3-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xxl-0">
            <div className="ba-service-box-3 text-center">
              <div className="icon">
                <i className="fal fa-wifi"></i>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/serviceDetails">WIFI Internet</Link>
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <Link href="/serviceDetails" className="ba-service-box-3-link">
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

export default ServiceSection4;
