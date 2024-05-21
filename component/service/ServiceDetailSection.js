import React from "react";
import AccordionSection from "../accordion/AccordionSection";
import Link from "next/link";

const ServiceDetailSection = () => {
  return (
    <div className="service-details-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="ba-service-details-left-content pb-30 pb-lg-0 pr-30">
              <div className="ba-service-details-image pb-25">
                <img src="assets/img/service/service.jpg" alt="" />
              </div>
              <div className="ba-service-details-content">
                <h3 className="ba-service-details-title mb-20">
                  Broadband Connection Needs To Everyone Life
                </h3>
                <p className="mb-20">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna ali Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irures dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat null pariatur. Excepteur sint occaecat
                  cupidatat nonm proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumLorem ipsum dolor.
                </p>
                <p className="mb-30">
                  sit amet, consectetur adipisicielit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Duis fvUt enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi{" "}
                </p>
                <div className="row pb-30">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-30 mb-sm-0">
                    <img src="assets/img/service/service-2.jpg" alt="" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <img src="assets/img/service/service-3.jpg" alt="" />
                  </div>
                </div>
                <h5 className="mb-20">
                  Broadband & Phone Packages To Suit Your Business
                </h5>
                <p className="mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna ali Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irures dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat null pariatur. Excepteur sint occaecat
                  cupidatat nonm proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumLorem ipsum dolor.
                </p>
                <AccordionSection/>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="ba-service-widget mb-30">
              <div className="ba-service-widget-form-search">
                <form action="#">
                  <input type="search" placeholder="Search" />
                  <button type="submit">
                    <i className="fal fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="ba-service-widget mb-30">
              <div className="ba-service-widget-category-list">
                <ul>
                  <li>
                    <Link href="/service">
                      <span>Satelite TV</span>{" "}
                      <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <span>Fast Internet</span>{" "}
                      <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <span>Broadband</span>{" "}
                      <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <span>All for Mobile</span>{" "}
                      <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <span>Satelite TV</span>{" "}
                      <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <span>TV & Streaming</span>{" "}
                      <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ba-service-widget mb-30">
              <div className="ba-service-widget-info-box">
                <h5 className="ba-service-widget-info-box-title mb-20">
                  Need Need Help?
                </h5>
                <p className="mb-25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="ba-service-widget-info-social-links">
                  <ul>
                    <li>
                      <Link href="tel:(555)123-4567">
                        <i className="fal fa-phone-alt"></i>{" "}
                        <span>(555) 123-4567</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:support@sertom.com">
                        <i className="fal fa-envelope"></i>{" "}
                        <span>support@sertom.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSection;
