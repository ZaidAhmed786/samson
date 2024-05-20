import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TestimonialSlider3 = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
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
    slidesPerView={slidesPerView}
    spaceBetween={30}
    autoplay={{delay:3000}}
    modules={[Autoplay]}
    className="ba-testimonial-active ba-testimonial-space-reverce swiper-container"
    >
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-boxed-single text-center">
            <div className="icon">
                <i className="fal fa-quote-left"></i>
            </div>
            <div className="content">
                <h4 className="title">Lahiru Kumara</h4>
                <span className="designation">Designer</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim{" "}
                </p>
                <div className="ba-rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-boxed-single text-center">
            <div className="icon">
                <i className="fal fa-quote-left"></i>
            </div>
            <div className="content">
                <h4 className="title">Max Brown</h4>
                <span className="designation">Developer</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim{" "}
                </p>
                <div className="ba-rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-boxed-single text-center">
            <div className="icon">
                <i className="fal fa-quote-left"></i>
            </div>
            <div className="content">
                <h4 className="title">John Doe</h4>
                <span className="designation">Designer</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim{" "}
                </p>
                <div className="ba-rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-boxed-single text-center">
            <div className="icon">
                <i className="fal fa-quote-left"></i>
            </div>
            <div className="content">
                <h4 className="title">Lahiru Kumara</h4>
                <span className="designation">Designer</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim{" "}
                </p>
                <div className="ba-rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div className="ba-testimonial-boxed-single text-center">
            <div className="icon">
                <i className="fal fa-quote-left"></i>
            </div>
            <div className="content">
                <h4 className="title">Anjit Kumar</h4>
                <span className="designation">Arcitect</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim{" "}
                </p>
                <div className="ba-rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                </div>
            </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default TestimonialSlider3