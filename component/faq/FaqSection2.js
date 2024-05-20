import React from "react";
import AccordionSection from "../accordion/AccordionSection";

const FaqSection2 = () => {
  return (
    <div className="faq-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-7 mb-50 mb-lg-0">
            <div className="ba-faq-left-content">
              <div className="ba-section-title-wrapper-top pb-40">
                <div className="ba-section-title-wrapper pb-25">
                  <h5
                    className="ba-section-subtitle wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    FAQ ASKED
                  </h5>
                  <h3
                    className="ba-section-title wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    Want to Ask Something?
                  </h3>
                </div>
                <p className="ba-mb-0 wow fadeInUp" data-wow-delay=".3s">
                  Asi enim ad minim veniam, quis nostrud exerci Lorem ipsum
                  dolor sit amet,
                  <br /> consecteturadipisicing elit, sed do eiusmod tempor
                </p>
              </div>
              <AccordionSection/>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5">
            <div className="ba-faq-question-form">
              <h4 className="ba-faq-question-form-title mb-25">
                Make Your Question
              </h4>
              <form action="#">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="ba-faq-question-form-input-wrap mb-15">
                      <input type="text" placeholder="Name*" />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="ba-faq-question-form-input-wrap mb-15">
                      <input type="email" placeholder="Email*" />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="ba-faq-question-form-input-wrap mb-30">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Write Somethings"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <button type="submit" className="ba-submit-btn">
                      Send Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection2;
