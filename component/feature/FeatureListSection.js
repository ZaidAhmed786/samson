import { NafiabContext } from "@/context/NafiabContext";
import Link from "next/link";
import React, { useContext } from "react";

const FeatureListSection = () => {
  const {handleVideoShow} = useContext(NafiabContext)
  return (
    <section className="ba-feature-list-vertical pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-4 pb-80 pb-lg-0">
            <div className="pr-135 ba-feature-list-vertical-space">
              <div className="ba-feature-list-vertical-left-wrap">
                <div className="ba-feature-list-vertical-left-img-1">
                  <img
                    src="assets/img/feature-list/feature-list-vertical-1.jpg"
                    alt=""
                  />
                </div>
                <div className="ba-feature-list-vertical-left-img-2">
                  <img
                    src="assets/img/feature-list/feature-list-vertical-2.png"
                    alt=""
                  />
                </div>
                <div className="ba-feature-list-play-btn has-pos">
                  <a
                    role="button" 
                    onClick={handleVideoShow}
                    className="video-popup"
                  >
                    <i className="fal fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-8">
            <div className="ba-feature-list-vertical-content pt-20">
              <div className="row">
                <div className="col-xxl-12">
                  <div
                    className="ba-section-title-wrapper wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <h3 className="ba-section-title pb-40 has-ba-feature-list-title">
                      Flex 4K Streaming TV box, free
                      <br /> with Nextflix Internet
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="ba-feature-list-vertical-list-wrapper pr-60 pb-30">
                    <div
                      className="ba-feature-list-vertical-item  wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <h4 className="title">
                        <i className="fal fa-home"></i>{" "}
                        <span>Control your home network</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum
                      </p>
                    </div>
                    <div
                      className="ba-feature-list-vertical-item  wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4 className="title">
                        <i className="fal fa-wifi"></i>{" "}
                        <span>Help strengthen your WiFi</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum
                      </p>
                    </div>
                    <div
                      className="ba-feature-list-vertical-item  wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <h4 className="title">
                        <i className="fal fa-tachometer"></i>{" "}
                        <span>24/7 help and support</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum
                      </p>
                    </div>
                    <div
                      className="ba-feature-list-vertical-item  wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4 className="title">
                        <i className="fal fa-signal-stream"></i>{" "}
                        <span>Pause WiFi and more</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="ba-submit-btn wow fadeInUp"
                data-wow-delay=".6s"
              >
                Discover App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection;
