import React, { useEffect, useState } from 'react';

const BackToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show the button when the user scrolls down 300 pixels
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : 'd-none'}`}>
      <button onClick={scrollToTop} className="back-to-top-button">
        <i className="fa fa-angle-up"></i>
      </button>
    </div>
  );
};

export default BackToTopIcon;
