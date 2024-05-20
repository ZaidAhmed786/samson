import React from 'react'
import TestimonialSlider2 from '../slider/TestimonialSlider2'

const TestimonialSection2 = () => {
  return (
    <div className="testimonial-area pt-110 pb-120">
         <div className="container">
            <div className="row pb-65">
               <div className="col-xxl-12">
                  <div className="ba-section-title-wrapper text-center">
                     <h3 className="ba-section-title pb-12 wow fadeInUp" data-wow-delay=".1s">Words By Our Customers</h3>
                     <p className="ba-mb-0 wow fadeInUp" data-wow-delay=".2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod te incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim to saidul </p>
                  </div>
               </div>
            </div>
            <TestimonialSlider2/>
         </div>
        </div>
  )
}

export default TestimonialSection2