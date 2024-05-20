import React from 'react'

const ServiceSection = () => {
  return (
    <div className="like-us-area p-rel pt-100 pb-110 about-service-section">
        <div className="ba-like-us-section-img-50">
            <img src="assets/img/about/like-us.jpg" alt="about image"/>
        </div>
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                    <div className="pl-50 ba-like-content-space">
                    <div className="ba-like-us-content">
                        <h2 className="ba-like-us-title white-text mb-15 wow fadeInUp" data-wow-delay=".1s">We Deliver The Best To
                            Networking Devices</h2>
                        <p className="soft-white-text mb-40 wow fadeInUp" data-wow-delay=".2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do<br/> eiusmod tempor incididunt ut labore et</p>
                        <div className="ba-like-list-wrapper pr-185">
                            <ul>
                                <li className="wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon soft-white-text pr-20">
                                    <i className="fal fa-tv"></i>
                                </div>
                                <div className="content">
                                    <h5 className="title white-text">Ultra HD Quality</h5>
                                    <p className="soft-white-text">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incid</p>
                                </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".4s">
                                <div className="icon soft-white-text pr-20">
                                    <i className="fal fa-wifi"></i>
                                </div>
                                <div className="content">
                                    <h5 className="title white-text">Online channels</h5>
                                    <p className="soft-white-text">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incid</p>
                                </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon soft-white-text pr-20">
                                    <i className="fal fa-router"></i>
                                </div>
                                <div className="content">
                                    <h5 className="title white-text">Fiber Internet</h5>
                                    <p className="soft-white-text">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incid</p>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection