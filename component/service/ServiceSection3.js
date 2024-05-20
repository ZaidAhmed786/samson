import { NafiabContext } from "@/context/NafiabContext";
import React, { useContext } from "react";

const ServiceSection3 = () => {
  const {handleVideoShow} = useContext(NafiabContext)
  return (
    <div
      class="like-us-area pt-100 pb-100 has-like-us-2-primary-shape service-section-3"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-xl-6 mb-50 mb-xl-0">
            <div class="ba-like-us-2-image-left p-rel">
              <img src="assets/img/like-us/image-1.jpg" alt="image" />
              <div class="ba-feature-list-play-btn has-pos">
                <a
                  class="video-popup"
                >
                  <i class="fal fa-play-circle" role="button" onClick={handleVideoShow}></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-12">
            <div class="pl-50 ba-like-content-space">
              <div class="ba-like-us-content">
                <h2
                  class="ba-like-us-title white-text mb-15 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  We Deliver The Best To Networking Devices
                </h2>
                <p
                  class="soft-white-text mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do
                  <br /> eiusmod tempor incididunt ut labore et
                </p>
                <div class="ba-like-list-wrapper pr-185">
                  <ul>
                    <li
                      class="wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div class="icon soft-white-text pr-20">
                        <i class="fal fa-tv"></i>
                      </div>
                      <div class="content">
                        <h5 class="title white-text">Ultra HD Quality</h5>
                        <p class="soft-white-text">
                          Lorem ipsum dolor sit amet, consecte adipisicing elit,
                          sed do eiusmod tempor incid
                        </p>
                      </div>
                    </li>
                    <li
                      class="wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div class="icon soft-white-text pr-20">
                        <i class="fal fa-wifi"></i>
                      </div>
                      <div class="content">
                        <h5 class="title white-text">Online channels</h5>
                        <p class="soft-white-text">
                          Lorem ipsum dolor sit amet, consecte adipisicing elit,
                          sed do eiusmod tempor incid
                        </p>
                      </div>
                    </li>
                    <li
                      class="wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div class="icon soft-white-text pr-20">
                        <i class="fal fa-router"></i>
                      </div>
                      <div class="content">
                        <h5 class="title white-text">Fiber Internet</h5>
                        <p class="soft-white-text">
                          Lorem ipsum dolor sit amet, consecte adipisicing elit,
                          sed do eiusmod tempor incid
                        </p>
                      </div>
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

export default ServiceSection3;
