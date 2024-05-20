import Link from 'next/link'
import React from 'react'

const AboutSection2 = () => {
  return (
    <div className="about-area-2 pt-120 pb-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-6 col-xl-6">
                  <div className="ba-about-right-wrapper pt-30 pb-50 pb-xl-0 mb-50">
                     <div className="ba-section-title-wrapper pb-25">
                        <h5 className="ba-section-subtitle wow fadeInUp" data-wow-delay=".1s">About Our Internet</h5>
                        <h3 className="ba-section-title wow fadeInUp" data-wow-delay=".2s">Fast High Speed Broadband <br/>Connection from Triangle</h3>
                     </div>
                     <div className="ba-about-right-content">
                        <div className="text wow fadeInUp" data-wow-delay=".3s">
                           <p> <a href="contact.html">Available at checkout.</a>Watch thousands of awesome TV shows,<br/> movies, and documentaries.</p>
                        </div>
                     </div>
                     <div className="ba-about-right-list pr-95">
                        <ul>
                           <li className="wow fadeInUp" data-wow-delay=".4s">
                              <div className="icon">
                                 <img src="assets/img/icons/icon-1.png" alt=""/>
                              </div>
                              <div className="content">
                                 <h4 className="title">Speed faster than a gig</h4>
                                 <p>Medixer Care will be administered through plan-based omizable incorporate partnership between family.</p>
                              </div>
                           </li>
                           <li className="wow fadeInUp" data-wow-delay=".5s">
                              <div className="icon">
                                 <img src="assets/img/icons/icon-2.png" alt=""/>
                              </div>
                              <div className="content">
                                 <h4 className="title">Protect your devices</h4>
                                 <p>Medixer Care will be administered through plan-based omizable incorporate partnership between family.</p>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="ba-about-right-actions wow fadeInUp" data-wow-delay=".6s">
                        <Link href="/faq" className="ba-submit-btn">How it Works</Link>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6">
                  <div className="text-xl-end">
                     <div className="ba-about-right-img-box-2 d-inline-block">
                        <img src="assets/img/about/about-3.png" alt=""/>
                        <div className="ba-about-right-count-box-2 has-pos">
                           <p className="title"><span className="count">20</span> years<br/> Experience</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
  )
}

export default AboutSection2