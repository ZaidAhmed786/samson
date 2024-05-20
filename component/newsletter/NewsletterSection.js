import React from "react";

const NewsletterSection = () => {
  return (
    <section id="nws-section" className="pt-60 pb-60 bg-default">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-xxl-5 col-lg-7 col-md-10 col-sm-12">
            <div className="nwsletter-content d-flex align-items-center">
              <img
                src="assets/img/icons/nwsletter.png"
                alt="mail-icon"
                className="nwsletter-icon"
              />
              <div className="nwsletter-txt">
                <h3>Subscribe for Newsletter</h3>
                <span className="nwsletter-subtitle">
                  Grow Your Business with Our Agency
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-md-10 col-sm-12">
            <form action="#" className="nwsletter-form">
              <input
                type="email"
                name="nwsletter-email"
                id="nwsletter-email"
                className="nwsletter-email"
                placeholder="Enter Your Email"
              />
              <button type="submit" className="nwsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
