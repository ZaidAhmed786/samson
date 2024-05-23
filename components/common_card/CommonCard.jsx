import React from "react";
import styles from "./CommonCard.module.css";

const CommonCard = ({ paragraphText }) => {
  return (
    <div className={styles.firstCard}>
      <span>$13.99</span>
      <h1>
        NY STYLE CRISPY CUPPY <br /> {`'`}RONI PIZZA
      </h1>
      <p>details</p>
      <div className={styles.button_wrapper}>
        <button>Add to order</button>
        <button>customize</button>
      </div>
      {paragraphText && (
        <div className={styles.paragraphBox}>
          <p>{paragraphText}</p>
        </div>
      )}
    </div>
  );
};

export default CommonCard;
