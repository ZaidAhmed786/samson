import React, { useState } from "react";
import Styles from "./cart.module.css";

const Cart = () => {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttons = [
    "Make it Extra Large",
    "Epic Stuffed",
    "Add Extra Cheese",
    "Add Extra Sauce cups",
  ];
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.wrapper}>
        <div style={{ width: "60%" }}>
          <h1>YOUR ORDER</h1>
          <div className={Styles.cartwrapper}>
            <img src="./papajhon/Original-Crust-Cheese.webp" alt="" />
            <div className={Styles.cartMiddleContent}>
              <h1>Large Original Crust Sausage Pizza</h1>
              <div className={Styles.linksWrapper}>
                <p>Remove </p>|<p> Edit </p>| <p>View Details</p>
              </div>
              <div className={Styles.extraThingsWrapper}>
                {buttons.map((button) => (
                  <div div key={button} >
                    <div className={Styles.extraThings}>
                      <p>+</p>
                      <p>{button}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <select name="numbers" id="numbers">
                {options.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <p style={{fontSize: '18px', fontWeight: '900'}}>$16.50</p>
          </div>
          <hr />
        </div>
        <div className={Styles.paymentDetails}>
          <button className={Styles.checkoutbtn}>checkout</button>
          <div>
            <div className={Styles.rowDiv}>
              {" "}
              <p>
                {" "}
                <b>Sub Total</b>
              </p>{" "}
              <p>
                <b>$51.99</b>
              </p>{" "}
            </div>
            <div className={Styles.rowDiv}>
              {" "}
              <p>Delivery Fee</p>{" "}
              <p>
                <b>$5.25</b>
              </p>{" "}
            </div>
            <div className={Styles.rowDiv}>
              {" "}
              <p>Estimated Tax</p>{" "}
              <p>
                <b>$3.80</b>
              </p>{" "}
            </div>
          </div>
          <hr />
          <div className={Styles.rowDiv}>
            <h2>ORDER TOTAL </h2> <h2>$61.04</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
