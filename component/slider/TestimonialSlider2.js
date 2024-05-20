import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const TestimonialSlider2 = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize(); // Call it initially

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <Swiper 
    spaceBetween={40}
    slidesPerView={slidesPerView}
    className="ba-testimonial-active-2 swiper-container"
    >
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-2-box">
            <div className="ba-testimonial-2-author-wrapper mb-30">
                <div className="image">
                    <img src="assets/img/user/author-1.png" alt=""/>
                </div>
                <div className="content">
                    <h6 className="title">Alison Burgas</h6>
                    <span className="designation">Designer</span>
                </div>
            </div>
            <div className="ba-testimonial-2-content">
                <p>We are full service Digital Marketing Agency the foundational tools you
                    need for inbound go another day. With this module theres no need to
                    go another day. goms to you image</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-2-box">
            <div className="ba-testimonial-2-author-wrapper mb-30">
                <div className="image">
                    <img src="assets/img/user/author-2.png" alt=""/>
                </div>
                <div className="content">
                    <h6 className="title">Wesley Madhevere</h6>
                    <span className="designation">Developer</span>
                </div>
            </div>
            <div className="ba-testimonial-2-content">
                <p>We are full service Digital Marketing Agency the foundational tools you
                    need for inbound go another day. With this module theres no need to
                    go another day. goms to you image</p>
            </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default TestimonialSlider2