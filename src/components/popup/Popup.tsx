import React, { useState } from "react";
import styles from "./popup.module.css";
import {formatPhoneNumber} from '../../utils/utils'
const Popup = (props:any) => {
  const [isOpen, setIsOpen] = useState(true);
  
    const formattedNumber = formatPhoneNumber(props.number); 
    const number = props.number
    const Width =  props.logoWidth? props.logoWidth :'130px'
    const text = props.text? props.text : 'Call for Free Quote'
    const handleClick = () => {
      window.location.href = `tel:${props.tel}`;  
    };
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleClick}> 
            <div className={styles.popup}>
            <div className={styles.popupHeader} style = {{background:props.color}}></div>
            <div className={styles.popupContent}>
                <img src={`${props?.url}`} alt="Logo" className={styles.logo} style={{width: Width}} />
                <h2 className={styles.heading}> {text} <br/> Now</h2>
                <p className={styles.phoneNumber} style = {{background:`${props.color}`}}>+{number}</p>
            </div>
            <div className={styles.popupFooter} style = {{background:props.color}}>Call Now  {number}</div>
            </div>
        </div>
      )}
    </>
  );
};

export default Popup;