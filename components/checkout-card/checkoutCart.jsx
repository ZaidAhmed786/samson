import React, { useState } from 'react';
import style from "./checkoutCart.module.css"

const AccordionItem = ({ title, refrence }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
        <div onClick={toggleAccordion} className={style.border}>
            <div className={style.innerBorder}>
                <h2>{title}</h2>
                <div className={style.innerContext}>
                    <p>{refrence}</p>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>
            </div>    
            {isOpen && <div>{refrence}</div>}
        </div>
      
    </div>
  );
};

const CheckoutCart = ({ items }) => {
    
  return (
    <div className="accordion">
      {items?.map((item, index) => (
        <AccordionItem key={index} title={item.title} refrence={item.refrence} />
      ))}
    </div>
  );
};

export default CheckoutCart;