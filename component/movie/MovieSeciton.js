import { NafiabContext } from "@/context/NafiabContext";
import Link from "next/link";
import React, { useContext } from "react";

const MovieSeciton = () => {
  const {handleVideoShow} = useContext(NafiabContext)
  return (
    <section
      className="movie-area bg-default pb-120 pt-110 home-movie-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 pb-50 pb-lg-0">
            <div className="ba-movie-content movie-section__content pr-185">
              <h4
                className="ba-movie-title wow fadeInUp movie-content__title"
                data-wow-delay=".1s"
              >
                Enjoy Sports Movies,
                <br /> TV Shows & More
              </h4>
              <p
                className="wow fadeInUp movie-content__txt"
                data-wow-delay=".2s"
              >
                Nisi utm aliquip sed tempor duis aute lorem ipsum dolor sitye
                ametautys adipisicing elit sed dolor eiusmod{" "}
              </p>
              <div
                className="ba-movie-price-service-duration-wrap pb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="ba-movie-price movie-content__price">
                  30$/ <span>1 Month</span>
                </h5>
                <div className="ba-movie-service-duration movie-content__duration">
                  <i className="fal fa-router"></i>
                  <span>1month WIFi Free</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="ba-submit-btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                Cheak Availibilty
              </Link>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 pb-60">
            <div className="position-relative h-100">
              <div className="ba-feature-list-play-btn has-pos movie-section__play-btn">
                <a
                  className="video-popup"
                >
                  <i className="fas fa-play" role="button" onClick={handleVideoShow}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSeciton;
