import React from "react";

const TestimonialCarousel = () => {
  return (
    <div className="row quote-container testimonial" style={{marginTop: '120px', marginBottom: '50px'}}>
      <div className="col-8 col-md-6 offset-md-3">
        <div className="d-flex justify-content-center mb-4">
          <img src="/user.avif" height={90} className="rounded-circle" />
        </div>
        <div
          className="carousel slide w-100"
          data-interval="7000"
          id="testimonials-simple-carousel-662ac64a3ae98"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item text-center active">
              <div
                id="recommendation-1-662ac64a3ae98"
                className="description-container d-flex flex-column justify-content-center"
              >
                <p className="description font-size-large">
                  Ola Craig has been instrumental in selling 2 properties and
                  helping our family purchase our dream home. I would definitely
                  recommend hiring her for your real estate needs.
                </p>
                <p>
                  <i>
                    <b> &emsp; -Gerome Quigley, Client</b>
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="margin-top-large">
            <ol className="carousel-indicators">
              <li
                data-target="#testimonials-simple-carousel-662ac64a3ae98"
                data-slide-to="0"
                className="active"
              ></li>
            </ol>
          </div>
        </div>
        <div className="d-flex justify-content-center  mt-4">

        <button className="btn bg-back text-light px-4 ">READ MORE</button>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCarousel;
