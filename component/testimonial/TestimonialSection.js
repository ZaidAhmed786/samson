import React from "react";
import TestimonialSlider from "../slider/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section id="testimonial-section" className="pt-115 pb-120 overflow-hidden" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="row justify-content-center pb-60">
          <div className="col-xl-6 col-lg-8 col-md-10" style={{ width: '71.5%' }}>
            <div className="text-center">
              <h3 className="ba-section-title">
                Get Your Services Now!
              </h3>
              <b style={{ fontSize: '15px' }}>We are the best place to find and compare local internet providers, and we have the most comprehensive dataset of internet plans, pricing, and availability.!</b>
              <b style={{ fontSize: '15px' }}>We also provide technical support, technician services and consultancy services regarding Internet and Cable TV.</b>
              <br />
              <b style={{ fontSize: '15px' }}>CALL Us Now!</b>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
