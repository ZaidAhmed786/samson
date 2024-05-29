import React from 'react';
import styles from './CardPopup.module.css';

const CardPopup = ({ cardData, onClose }: any) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.cardChip}></div>
          <div className={styles.cardNumber}>{cardData.cardNumber}</div>
          <div className={styles.cardInfo}>
            <div className={styles.cardHolder}>
              <div className={styles.label}>Card Holder</div>
              <div>{cardData.cardHolder}</div>
            </div>
            <div className={styles.cardExpiration}>
              <div className={styles.label}>Expiration Date</div>
              <div>{cardData.expiryDate}</div>
            </div>
          </div>
        </div>
        <div className={styles.cardBack}></div>
      </div>
    </div>
  );
};

export default CardPopup;