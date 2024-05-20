import React from "react";
import TestimonialSlider3 from "../slider/TestimonialSlider3";

const TestimonialSection3 = () => {
  return (
    <div className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper text-center ba-has-wrapped-br">
              <h3 className="ba-section-title">
                We have assisted clients all
                <br /> throughout the world
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <TestimonialSlider3/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection3;
