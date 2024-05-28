import React, { useEffect, useState } from "react";
import Styles from "./cart.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const [deleting, setDeleting] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButtons((prev) =>
      prev.includes(buttonName)
        ? prev.filter((name) => name !== buttonName)
        : [...prev, buttonName]
    );
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
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price,
      }));
      
      const address = addToCart[0].address;
      if (!address || !address._id) {
        throw new Error("No valid address found in addToCart");
      }
      
      const payload = {
        addressId: "6652d37ba444ae798756dad1",
        items: cartItems,
        totalAmount: totalOrderValue,
        deliveryFee: deliveryFee,
        tax: estimatedTax  
      };
  
      console.log("Payload:", payload);
  
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

  if (loading) {
    return <p>Loading...</p>;
  }

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
    router.push(`/product-detail/${id}`);
  };

  console.log("addtocart ashar>>>><<<<", addToCart);

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.wrapper}>
        <div style={{ width: "60%" }}>
          <h1>YOUR ORDER</h1>
          {/* ----------------------------------------------cart-items---------------------------------------------------------- */}
          {addToCart.map((cart) => (
            <div key={cart._id}>
              <div className={Styles.cartwrapper}>
                <img src={cart.productId.img} alt="" />
                <div className={Styles.cartMiddleContent}>
                  <h1>{cart.productId.title}</h1>
                  <div className={Styles.linksWrapper}>
                    <p onClick={() => handleRemoveItem(cart._id)}>
                      Remove{" "}
                      {deleting && (
                        <span className="loading-icon">Loading...</span>
                      )}
                    </p>
                    |<p>Edit</p>|
                    <p
                      onClick={() => {
                        handleCardClick(cart._id);
                      }}
                    >
                      View Details
                    </p>
                  </div>
                  <div className={Styles.extraThingsWrapper}>
                    {buttons.map((button) => (
                      <div
                        key={button}
                        onClick={() => handleButtonClick(button)}
                        className={`${Styles.buttonWrapper} ${
                          activeButtons.includes(button)
                            ? Styles.activeButton
                            : ""
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
                  <span className={Styles.valueDisplay}>
                    {cart.quantity}
                  </span>
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
          {/* ----------------------------------------------cart-items---------------------------------------------------------- */}
        </div>
        <div className={Styles.paymentDetails}>
          <Link href="/checkout"  >
           <p className={Styles.checkoutbtn} onClick={()=> postUpdatedCart()}>checkout</p> 
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
    </div>
  );
};

export default Cart;
