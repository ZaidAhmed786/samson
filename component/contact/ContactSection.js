import React from "react";

const ContactSection = () => {
  return (
    <section id="contact-section" className="pt-60 position-relative">
      <div className="container">
        <div className="conatct-section-bg" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         
            <div className="col-lg-6">
              <div className="contact-section-form-container" >
                <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                <h2 className="ba-section-title">Free Online Quote Now!</h2>
                <p >Call Us on:  <a href="te:+1(888)-636-0385" style={{textDecoration: 'none'}}>+1 (888) 636-0385</a></p>
                <p>Write us at:  <a href="mailto:admin@zolara.live"  style={{textDecoration: 'none'}}>admin@zolara.live</a></p>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
