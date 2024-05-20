import { faqItems } from "@/data/Data";
import React, { useState } from "react";
const AccordionSection = () => {
    const [activeItem, setActiveItem] = useState(0);

    const toggleAccordion = (itemIndex) => {
      if (activeItem === itemIndex) {
        setActiveItem(null);
      } else {
        setActiveItem(itemIndex);
      }
    };
  return (
    <div className="ba-faq-accordion">
      <div className="accordion" id="ba-faq-accordion">
        {faqItems.map((item, index) => (
          <div
            className={`accordion-item wow fadeInUp ${
              activeItem === index ? "active" : ""
            }`}
            data-wow-delay={`${0.4 + index * 0.1}s`}
            key={index}
          >
            <h2
              className="accordion-header"
              id={`ba-accordion-heading-${index}`}
            >
              <button
                className={`accordion-button ${
                  activeItem === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`ba-collapse-${index}`}
              className={`accordion-collapse collapse ${
                activeItem === index ? "show" : ""
              }`}
              aria-labelledby={`ba-accordion-heading-${index}`}
              data-bs-parent="#ba-faq-accordion"
            >
              <div className="accordion-body">
               {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;
