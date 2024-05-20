import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const BrandSection = () => {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setSlidesPerView(5);
            } else if (window.innerWidth >= 992) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 420) {
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
    <div className="brand-area">
        <div className="container">
        <div className="ba-brand-active-wrapper has-space-top-reverce">
            <Swiper 
            slidesPerView={slidesPerView}
            spaceBetween={30}
            className="ba-brand-active swiper-container"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="ba-brand-single">
                        <img src="assets/img/brand/brand-1.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ba-brand-single">
                        <img src="assets/img/brand/brand-2.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ba-brand-single">
                        <img src="assets/img/brand/brand-3.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ba-brand-single">
                        <img src="assets/img/brand/brand-4.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ba-brand-single">
                        <img src="assets/img/brand/brand-1.png" alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    </div>
  )
}

export default BrandSection