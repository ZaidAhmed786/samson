import Link from 'next/link'
import React from 'react'

const FooterSection2 = () => {
  return (
    <footer className="ba-footer-area ba-footer-overlay footer-1 bg-default footer-section-2" data-background="assets/img/bg/footer.jpg">
      <div className="ba-footer-cta">
         <div className="container">
            <div className="ba-footer-cta-border-bottom  pt-90 pb-80">
               <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pb-30 pb-md-0">
                     <h5 className="ba-footer-cta-title white-text">Want to contact with us?</h5>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="text-md-end">
                        <Link href="contact" className="ba-submit-btn">Contact Us</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="ba-footer-main-wrapper">
         <div className="container">
            <div className="ba-footer-cta-border-bottom pt-100 pb-100">
               <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 mb-35 mb-xl-0">
                     <div className="ba-footer-widget">
                        <div className="ba-footer-logo pb-45">
                           <Link href="/"><img src="assets/img/logo/logo-white.png" alt=""/></Link>
                        </div>
                        <div className="ba-footer-content">
                           <p className="white-text">Feugiat a ligula rutrum luctus primis ultrice nteger congue magna at pretium purus a pretium ligula rutrum.</p>
                           <div className="ba-footer-contact-list pb-25">
                              <span className="call white-text">Call us at 1-877-632-6789 or</span>
                              <h6 className="title white-text">request An <Link href="contact">Appointment Online.</Link></h6>
                           </div>
                           <div className="ba-footer-social-list">
                              <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="#"><i className="fab fa-twitter"></i></Link>
                              <Link href="#"><i className="fab fa-instagram"></i></Link>
                              <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-35 mb-xl-0">
                     <div className="ba-footer-widget">
                        <h3 className="ba-footer-widget-title">Services</h3>
                        <ul>
                           <li><Link href="/">Main Home</Link></li>
                           <li><Link href="/about">About us</Link></li>
                           <li><Link href="/blog">Blog</Link></li>
                           <li><Link href="/contact">Contact Us</Link></li>
                           <li><Link href="/serviceDetails">Parking Lots</Link></li>
                           <li><Link href="/serviceDetails">Seal Coating</Link></li>
                           <li><Link href="/pricing">Pricing</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-35 mb-xl-0">
                     <div className="ba-footer-widget">
                        <h3 className="ba-footer-widget-title">Instagrame Follow</h3>
                        <div className="ba-footer-widget-instagram-wrapper pt-10">
                           <ul>
                              <li><Link href="#"><img src="assets/img/footer/instagram-1.jpg" alt=""/></Link></li>
                              <li><Link href="#"><img src="assets/img/footer/instagram-2.jpg" alt=""/></Link></li>
                              <li><Link href="#"><img src="assets/img/footer/instagram-3.jpg" alt=""/></Link></li>
                              <li><Link href="#"><img src="assets/img/footer/instagram-4.jpg" alt=""/></Link></li>
                              <li><Link href="#"><img src="assets/img/footer/instagram-5.jpg" alt=""/></Link></li>
                              <li><Link href="#"><img src="assets/img/footer/instagram-6.jpg" alt=""/></Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-35 mb-xl-0">
                     <div className="ba-footer-widget pr-50">
                        <h3 className="ba-footer-widget-title">Working Hours</h3>
                        <div className="ba-footer-widget-working-hours-list">
                           <ul>
                              <li>
                                 <span className="label">Monday</span>
                                 <span className="value">10:00 – 11:00</span>
                              </li>
                              <li>
                                 <span className="label">Tusday</span>
                                 <span className="value">11:00 – 11:40</span>
                              </li>
                              <li>
                                 <span className="label">Wedesday</span>
                                 <span className="value">8:00 – 9:40</span>
                              </li>
                              <li>
                                 <span className="label">Thursday</span>
                                 <span className="value">7:50 – 8:40</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="ba-footer-copyright-wrapper pt-30 pb-30">
         <div className="container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <p className="ba-footer-copyright-text white-text">Copyright 2022 Al Right Reserved</p>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="ba-footer-copyright-list">
                     <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/service">Service</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
  )
}

export default FooterSection2