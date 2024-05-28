import React, { useEffect, useState } from "react";
import Styles from "./cart.module.css";
import { FaCheck } from "react-icons/fa";

const Cart = () => {
  const buttons = [
    "Make it Extra Large",
    "Epic Stuffed",
    "Add Extra Cheese",
    "Add Extra Sauce cups",
  ];
  const [addToCart, setAddToCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeButtons, setActiveButtons] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleButtonClick = (buttonName) => {
    setActiveButtons((prev) =>
      prev.includes(buttonName)
        ? prev.filter((name) => name !== buttonName)
        : [...prev, buttonName]
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://papa-johns.vercel.app/api/cart-items"
        );
        const data = await response.json();
        if (data.status === "success") {
          setAddToCart(data.data);
          // Initialize quantities state based on fetched data
          const initialQuantities = {};
          data.data.forEach((item) => {
            initialQuantities[item._id] = item.quantity;
          });
          setQuantities(initialQuantities);
        } else {
          setError("Failed to fetch products");
        }
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const subtotal = addToCart.reduce((total, item) => {
    return total + item.productId.price * quantities[item._id];
  }, 0);

  const deliveryFee = 5.25;
  const estimatedTax = 3.80;
  const totalOrderValue = subtotal + deliveryFee + estimatedTax;

  console.log('addtocart ashar>>>><<<<', addToCart);

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.wrapper}>
        <div style={{ width: "60%" }}>
          <h1>YOUR ORDER</h1>
          {addToCart.map((cart) => (
            <div key={cart._id}>
              <div className={Styles.cartwrapper}>
                <img src={cart.productId.img} alt="" />
                <div className={Styles.cartMiddleContent}>
                  <h1>{cart.productId.title}</h1>
                  <div className={Styles.linksWrapper}>
                    <p>Remove </p>|<p> Edit </p>| <p>View Details</p>
                  </div>
                  <div className={Styles.extraThingsWrapper}>
                    {buttons.map((button) => (
                      <div
                        key={button}
                        onClick={() => handleButtonClick(button)}
                        className={`${Styles.buttonWrapper} ${
                          activeButtons.includes(button) ? Styles.activeButton : ""
                        }`}
                      >
                        <div className={Styles.extraThings}>
                          {activeButtons.includes(button) ? (
                            <FaCheck className={Styles.checkIcon} />
                          ) : (
                            <p className={Styles.plusIcon}>+</p>
                          )}
                          <p>{button}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={Styles.counterContainer}>
                  <button
                    className={Styles.decrementButton}
                    onClick={() => handleDecrement(cart._id)}
                    disabled={quantities[cart._id] === 0}
                  >
                    -
                  </button>
                  <span className={Styles.valueDisplay}>{quantities[cart._id]}</span>
                  <button
                    className={Styles.incrementButton}
                    onClick={() => handleIncrement(cart._id)}
                    disabled={quantities[cart._id] === 50}
                  >
                    +
                  </button>
                </div>
                <p style={{ fontSize: "18px", fontWeight: "900" }}>
                  ${cart.productId.price.toFixed(2)}
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className={Styles.paymentDetails}>
          <button className={Styles.checkoutbtn}>checkout</button>
          <div>
            <div className={Styles.rowDiv}>
              <p>
                <b>Sub Total</b>
              </p>
              <p>
                <b>${subtotal.toFixed(2)}</b>
              </p>
            </div>
            <div className={Styles.rowDiv}>
              <p>Delivery Fee</p>
              <p>
                <b>${deliveryFee.toFixed(2)}</b>
              </p>
            </div>
            <div className={Styles.rowDiv}>
              <p>Estimated Tax</p>
              <p>
                <b>${estimatedTax.toFixed(2)}</b>
              </p>
            </div>
          </div>
          <hr />
          <div className={Styles.rowDiv}>
            <h2>ORDER TOTAL</h2>
            <h2>${totalOrderValue.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
