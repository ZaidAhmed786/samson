import AccordionSection from "../accordion/AccordionSection";

const FaqSection = () => {
  return (
    <div id="index-1-faq-section" className="faq-area pt-115 pb-120" style={{paddingTop: '300px'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="ba-faq-left-content">
          <div className="ba-section-title-wrapper-top pb-40">
            <div className="ba-section-title-wrapper pb-25">
              <h5 className="ba-section-subtitle wow fadeInUp" data-wow-delay=".1s">
                FAQ ASKED
              </h5>
              <h3 className="ba-section-title wow fadeInUp" data-wow-delay=".2s">
                Want to Ask Something from Us?
              </h3>
            </div>
            <p className="ba-mb-0 wow fadeInUp" data-wow-delay=".3s">
              Asi enim ad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet,
              <br /> consecteturadipisicing elit, sed do eiusmod tempor
            </p>
          </div>
          <AccordionSection/>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default FaqSection;
