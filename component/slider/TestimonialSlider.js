import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
const TestimonialSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
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
        <div className="testimonial-slider-container">
            <Swiper
                slidesPerView={slidesPerView}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                modules={[Autoplay]}
                className="swiper mySwiper overflow-hidden"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">
                        <p className="single-testimonial__txt" style={{textAlign: 'center'}}>
                            We at Beamen Tech LLC offer lightning-fast internet speeds of up to 1Gbps with DSL, fiber-optic, or satellite. Affordable rates and tailored features available.
                        </p>
                        <div className="testimonial-writer d-flex" style={{justifyContent: 'center'}}>
                            
                            <img
                                src="assets/img/user/user-1.png"
                                alt="person"
                                className="testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                               <h6>Internet</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">

                        <p className="single-testimonial__txt" style={{textAlign: 'center'}}>
                        Find cable plans to match your preferences with Beamen Tech LLC. Immerse yourself in top-tier picture quality, customizable viewing options, and exceptional customer service
                        </p>

                        <div className="testimonial-writer d-flex" style={{justifyContent: 'center'}}>
                            <img
                                src="assets/img/user/user-2.png"
                                alt="person"
                                className=" testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">Cable</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">

                        <p className="single-testimonial__txt" style={{textAlign: 'center'}}>
                        With Beamen Tech LLC, socialize or attend business through our reliable and affordable landline plans from top USA providers with crystal-clear sound, multiple features.
                        </p>

                        <div className="testimonial-writer d-flex" style={{justifyContent: 'center'}}>
                            <img
                                src="assets/img/user/user-3.png"
                                alt="person"
                                className="testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">Landline</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">

                        <p className="single-testimonial__txt" style={{textAlign: 'center'}}>
                        Beamen Tech LLC offers reliable, high-speed satellite internet up to 1Gbps, accessible in urban and remote areas at affordable rates with tailored features.
                        </p>

                        <div className="testimonial-writer d-flex" style={{justifyContent: 'center'}}>
                            <img
                                src="assets/img/user/user-4.png"
                                alt="person"
                                className="testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">Ultra-Fast Fiber Internet</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">

                        <p className="single-testimonial__txt" style={{textAlign: 'center'}} >
                        Beamen Tech LLC offers 5G wireless internet with speeds up to multiple Gbps, ensuring fast, reliable, and low-latency online experiences for all users.
                        </p>

                        <div className="testimonial-writer d-flex" style={{justifyContent: 'center'}}>
                            <img
                                src="assets/img/user/user-5.png"
                                alt="person"
                                className="testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">Satellite Internet</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    )
}

export default TestimonialSlider