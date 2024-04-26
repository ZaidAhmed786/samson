import React, { useState } from "react";
import styles from "./popup.module.css";

const Popup = (props:any) => {
  const [isOpen, setIsOpen] = useState(true);  
    const formattedNumber = `tel:${props.number}`;
    const number = props.number? props.number :'1-888-626-8081'
    const Width =  props.logoWidth? props.logoWidth :'130px'
    const text = props.text? props.text : 'Order' 
    const handleClick = () => {
      window.location.href = formattedNumber;  
    };
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleClick}> 
            <div className={styles.popup}>
            <div className={styles.popupHeader} style = {{background:props.color}}></div>
            <div className={styles.popupContent}>
                <img src={`${props?.url}`} alt="Logo" className={styles.logo} style={{width: Width}} />
                <h2 className={styles.heading}> {text} NOW!</h2>
                <p className={styles.phoneNumber} style = {{background:`${props.color}`}}>{number}</p>
            </div>
            <div className={styles.popupFooter} style = {{background:props.color}}> Order NOW!  {number}</div>
            </div>
        </div>
      )}
    </>
  );
};

export default Popup;