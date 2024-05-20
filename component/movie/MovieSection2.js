import Link from 'next/link'
import React from 'react'

const MovieSection2 = () => {
  return (
    <section className="movie-area bg-default pricing-movie-section pb-100 pt-100">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 pb-50 pb-lg-0">
                    <div className="ba-movie-content pr-185">
                    <h4 className="ba-movie-title wow fadeInUp" data-wow-delay=".1s">Enjoy Sports Movies,<br/> TV Shows & More</h4>
                    <p className="wow fadeInUp"  data-wow-delay=".2s">Nisi utm aliquip sed tempor duis aute lorem ipsum dolor sitye ametautys adipisicing elit sed dolor eiusmod </p>
                    <div className="ba-movie-price-service-duration-wrap pb-45 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="ba-movie-price">30$/ <span>1 Month</span></h5>
                        <div className="ba-movie-service-duration">
                                <i className="fal fa-router"></i>
                                <span>1month WIFi Free</span>
                        </div>
                    </div>
                    <Link href="/contact" className="ba-submit-btn wow fadeInUp"  data-wow-delay=".4s">Cheak Availibilty</Link>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="ba-movie-right-img text-lg-end">
                    <img src="assets/img/movie/movie-1.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MovieSection2