import React, { useState } from "react";
import styles from "./AddToCardPopUp.module.css";
import { IoClose } from "react-icons/io5";

const AddToCardPopUp = () => {
  const [showModal, setShowModal] = useState(true);
  const [quantities, setQuantities] = useState([0, 0, 0, 0]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const increment = (index) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  const decrement = (index) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      if (newQuantities[index] > 0) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };
  const modalData = [
    {
      img: "./papajhon/Pizza_Sauce.webp",
      title: "Orignal Pizza Sauce",
      price: "$0.94",
    },
    {
      img: "./papajhon/Ranch-sauce.webp",
      title: "Raunch Sause",
      price: "$0.94",
    },
    {
      img: "./papajhon/Spicy_Garlic.webp",
      title: "Spicy Garlic Source",
      price: "$0.94",
    },
    {
      img: "./papajhon/Special_Garlic.webp",
      title: "Garlic Sauce Dipping Cup ",
      price: "$0.94",
    },
  ];

  return (
    <div>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCentered}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h5 className={styles.modalTitle}>ADD CAUSE CUPS</h5>
                <button
                  type="button"
                  className={styles.close}
                  onClick={toggleModal}
                >
                  <IoClose />
                </button>
              </div>
              <div className={styles.modalBody}>
                {modalData.map((item, index) => (
                  <div key={index} className={styles.row}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.image}
                    />
                    <div className={styles.textContainer}>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                    </div>
                    <div className={styles.counter}>
                      <button onClick={() => decrement(index)}>-</button>
                      <span>{quantities[index]}</span>
                      <button onClick={() => increment(index)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.btnPrimary} onClick={toggleModal}>
                  No,Thankyou
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCardPopUp;
