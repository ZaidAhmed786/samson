import React, { useEffect, useState } from "react";
import Styles from "./cart.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import CardPopup from "../add_to_card_popup/AddToCardPopUp";

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
  const [activeButtons, setActiveButtons] = useState({});
  const [quantities, setQuantities] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [popupQuantities, setPopupQuantities] = useState([0, 0, 0, 0]);

  const handleButtonClick = (cartId, buttonName) => {
    setActiveButtons((prev) => {
      const newActiveButtons = { ...prev };
      if (!newActiveButtons[cartId]) {
        newActiveButtons[cartId] = [];
      }
      if (newActiveButtons[cartId].includes(buttonName)) {
        newActiveButtons[cartId] = newActiveButtons[cartId].filter(
          (name) => name !== buttonName
        );
      } else {
        newActiveButtons[cartId].push(buttonName);
      }
      return newActiveButtons;
    });
  };

  const router = useRouter();
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
  const postUpdatedCart = async () => {
    try {
      const cartItems = addToCart.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.productId.price,
      }));

      const address = addToCart[0].address;
      if (!address || !address._id) {
        throw new Error("No valid address found in addToCart");
      }
      let address_id = localStorage.getItem("address");
      const payload = {
        addressId: address_id,
        items: cartItems,
        totalAmount: totalOrderValue,
        deliveryFee: deliveryFee,
        tax: estimatedTax,
      };

      console.log("Payload>>>>>", payload);
      console.log("cart items pages address >>>>>", address_id);

      const response = await fetch("https://papa-johns.vercel.app/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.status !== "success") {
        throw new Error("Failed to update cart");
      } else {
        alert("Cart updated successfully!");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      alert("Failed to update cart");
    }
  };

  const handleRemoveItem = async (id) => {
    setDeleting(true);
    try {
      const response = await fetch(
        `https://papa-johns.vercel.app/api/cart-items/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to remove item");
      }
      // Remove the item from the state
      setAddToCart((prevItems) => prevItems.filter((item) => item._id !== id));
      // Update quantities state
      setQuantities((prevQuantities) => {
        const newQuantities = { ...prevQuantities };
        delete newQuantities[id];
        return newQuantities;
      });
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setDeleting(false); // Set deleting to false when the delete request finishes
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  const handleIncrement = (id) => {
    setAddToCart((prevAddToCart) => {
      return prevAddToCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const handleDecrement = (id) => {
    setAddToCart((prevAddToCart) => {
      return prevAddToCart.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
    });
  };

  const subtotal = addToCart.reduce((total, item) => {
    return total + item.productId.price * item.quantity;
  }, 0);

  const deliveryFee = 5.25;
  const estimatedTax = 3.8;
  const totalOrderValue = subtotal + deliveryFee + estimatedTax;
  const handleCardClick = (id) => {
    setLoading(true)
    router.push(`/product-detail/${id}`);
   
  };
  // -------------------------------------pop up logic start------------------------------------------------



  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.wrapper}>
        <div style={{ width: "60%" }}>
          <h1>YOUR ORDER</h1>
          {/* ----------------------------------------------cart-items---------------------------------------------------------- */}
          {addToCart.map((cartItem) => (
            <div key={cartItem._id}>
              <div className={Styles.cartwrapper}>
                <img src={cartItem.productId.img} alt="" />
                <div className={Styles.cartMiddleContent}>
                  <h1>{cartItem.productId.title}</h1>
                  <div className={Styles.linksWrapper}>
                    <p onClick={() => handleRemoveItem(cartItem._id)}>
                      Remove{" "}
                      {deleting && (
                        <span className="loading-icon">Loading...</span>
                      )}
                    </p>
                    {/* |<p>Edit</p>| */}
                    |
                    <p onClick={() => handleCardClick(cartItem._id)}>
                      View Details
                    </p>
                  </div>
                  <div className={Styles.extraThingsWrapper}>
                    {buttons.map((button) => (
                      <div
                        key={button}
                        onClick={() => handleButtonClick(cartItem._id, button)}
                        className={`${Styles.buttonWrapper} ${
                          activeButtons[cartItem._id]?.includes(button)
                            ? Styles.activeButton
                            : ""
                        }`}
                      >
                        <div className={Styles.extraThings}>
                          {activeButtons[cartItem._id]?.includes(button) ? (
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
                    onClick={() => handleDecrement(cartItem._id)}
                    disabled={quantities[cartItem._id] === 0}
                  >
                    -
                  </button>
                  <span className={Styles.valueDisplay}>
                    {cartItem.quantity}
                  </span>
                  <button
                    className={Styles.incrementButton}
                    onClick={() => handleIncrement(cartItem._id)}
                    disabled={quantities[cartItem._id] === 50}
                  >
                    +
                  </button>
                </div>
                <p style={{ fontSize: "18px", fontWeight: "900" }}>
                  ${cartItem.productId.price.toFixed(2)}
                </p>
              </div>
              <hr />
            </div>
          ))}

          {/* ----------------------------------------------cart-items---------------------------------------------------------- */}
        </div>
        <div className={Styles.paymentDetails}>
          <Link href="/checkout">
            <p className={Styles.checkoutbtn} onClick={() => postUpdatedCart()}>
              checkout
            </p>
          </Link>
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
      <div>
          78 
      </div>
      {loading ? (
        <div style={Customstyles.loadingGif}>
          <img
            style={Customstyles.loadingGifImg}
            src="./papajhon/loading-7528_256.gif"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
      ) : null}
    </div>
  );
};
const Customstyles = {
  loadingGif: {
    position: "fixed",
    top: "0",
    left: '0',
    right: '0',
    bottom: '0',
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
  loadingGifImg: {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    width: "10vw",
    height: "10vw",
  },
};
export default Cart;
