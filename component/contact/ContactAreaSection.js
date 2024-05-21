import React from "react";

const ContactAreaSection = () => {
  return (
    <div className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 mb-50 mb-lg-0">
            <div className="ba-contact-left-content">
              <div className="ba-section-title-wrapper-top pb-40">
                <div className="ba-section-title-wrapper pb-10">
                  <h5
                    className="ba-section-subtitle wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    {" "}
                    Contact Wlth Us
                  </h5>
                  <h3
                    className="ba-section-title wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    Get In Touch!
                  </h3>
                </div>
                <h1>
Beamen Tech LLC</h1>
              </div>
              <div className="ba-contact-left-content-list">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <h5 className="ba-contact-left-title">
                        <a
                          href="https://goo.gl/maps/zubhQ3QbiUD2WSdG8"
                          target="_blank"
                        >
                          Address
                        </a>
                      </h5>
                      <p className="ba-contact-left-value">

                        564 4th Ave, San Bruno, CA 94066

                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-mobile"></i>
                    </div>
                    <div className="content">
                      <h5 className="ba-contact-left-title">
                        <a href="tel:123-456-7890">Call Us Today</a>
                      </h5>
                      <a
                        href="tel:+1(888)-636-0385"
                        className="ba-contact-left-value"
                      >

                        +1 (888) 636-0385
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="content">
                      <h5 className="ba-contact-left-title">
                        <a href="mailto:kenray@nurcodes.com">Email Us</a>
                      </h5>
                      <a
                        href="mailto:sales@cabledeal.live"
                        className="ba-contact-left-value"
                      >
                        sales@cabledeal.live
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <form action="#">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="ba-blog-comment-input-wrap mb-30">
                    <input type="text" placeholder="Your Nome" />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="ba-blog-comment-input-wrap mb-30">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="ba-blog-comment-input-wrap mb-30">
                    <input type="number" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="ba-blog-comment-input-wrap mb-30">
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-xxl-12">
                  <div className="ba-blog-comment-input-wrap mb-30">
                    <textarea
                      name="comment_text"
                      id="comment_text"
                      placeholder="Your Comments*"
                    ></textarea>
                  </div>
                </div>
                <div className="col-xxl-12">
                  <button className="ba-submit-btn" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaSection;
