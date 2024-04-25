import React from 'react';

const Contact = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-80 mt-4">
      <img
        src="/contact.jpg"
        alt="Your Image"
        className="img-fluid mb-4"
        style={{ maxWidth: '56vw' }}
      />
      <div className="text-center">
        <h3>SUPER SAVVY SALES GROUP: OLA, AROUNA & ALIEU</h3>
        <p>Samson Properties</p>
        <p className='text-back'>M: <span className='text-primary'>202-257-1200</span></p>
        <p className='text-back'>O:<span className='text-primary'>202-938-0228</span></p>
        <button className="btn bg-back text-light px-4">Contact Me</button>
      </div>
    </div>
  );
};

export default Contact;
