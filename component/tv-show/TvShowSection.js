import { NafiabContext } from "@/context/NafiabContext";
import React, { useContext } from "react";

const TvShowSection = () => {
  const {handleVideoShow} = useContext(NafiabContext)
  return (
    <section id="liveTV-section" className="pt-120 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading text-center mb-60">
              <h2 className="ba-section-title section-title">
                Tv Show Sports & Live
              </h2>
              <p className="liveTV__txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                exercitationem laboriosam omnis earum modi expedita amet?
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6 col-10">
            <div className="single-stream">
              <div className="single-stream__img-container">
                <img
                  src="assets/img/stream/stream-1.jpg"
                  alt="singer"
                  className="single-stream__img"
                />
                <a
                  className="video-popup stream-popup-btn"
                >
                  <i className="fas fa-play-circle" role="button" onClick={handleVideoShow}></i>
                </a>
              </div>

              <h5 className="single-stream__title">Live Concert California</h5>
              <a
                href="https://www.youtube.com/watch?v=93FKMoZZETw"
                className="single-stream__btn video-popup"
              >
                streaming <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-10">
            <div className="single-stream">
              <div className="single-stream__img-container">
                <img
                  src="assets/img/stream/stream-2.jpg"
                  alt="football-player"
                  className="single-stream__img"
                />
                <a
                  className="video-popup stream-popup-btn"
                >
                  <i className="fas fa-play-circle" role="button" onClick={handleVideoShow}></i>
                </a>
              </div>
              <h5 className="single-stream__title">Watch Premier League</h5>
              <a
                href="https://www.youtube.com/watch?v=93FKMoZZETw"
                className="single-stream__btn video-popup"
              >
                streaming <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-10">
            <div className="single-stream">
              <div className="single-stream__img-container">
                <img
                  src="assets/img/stream/stream-3.jpg"
                  alt="tiger"
                  className="single-stream__img"
                />
                <a
                  className="video-popup stream-popup-btn"
                >
                  <i className="fas fa-play-circle" role="button" onClick={handleVideoShow}></i>
                </a>
              </div>
              <h5 className="single-stream__title">Discovery Channel 2022</h5>
              <a
                href="https://www.youtube.com/watch?v=93FKMoZZETw"
                className="single-stream__btn video-popup"
              >
                streaming <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-10">
            <div className="single-stream">
              <div className="single-stream__img-container">
                <img
                  src="assets/img/stream/stream-4.jpg"
                  alt="movie-poster"
                  className="single-stream__img"
                />
                <a
                  className="video-popup stream-popup-btn"
                >
                  <i className="fas fa-play-circle" role="button" onClick={handleVideoShow}></i>
                </a>
              </div>
              <h5 className="single-stream__title">Elevated Action Movies</h5>
              <a
                href="https://www.youtube.com/watch?v=93FKMoZZETw"
                className="single-stream__btn video-popup"
              >
                streaming <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <a href="#" className="custom-btn">
          View More
        </a>
      </div>
    </section>
  );
};

export default TvShowSection;
