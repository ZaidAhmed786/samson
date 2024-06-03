import React, { useEffect, useState } from "react";
import styles from "./checkout.module.css";
import SecondaryHeading from "../../components/heading/heading";
import Link from "next/link";
import CheckoutCart from "../../components/checkout-card/checkoutCart";
import { useRouter } from "next/router";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    nameOnCard: "",
    expiration: "",
    cvv: "",
    zipCode: "",
  });
  const [selectedValue, setSelectedValue] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();
  const addTip = [
    {
      title: "15%",
      price: "4.05",
    },
    {
      title: "20%",
      price: "4.05",
    },
    {
      title: "25%",
      price: "4.05",
    },
  ];

  const handleClick = (index) => {
    setSelectedValue(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log("userdata>>>", formData);

    // console.log('cart itme data in check out >>>>', cartId)
  }, [formData, cartItems]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("https://papa-johns.vercel.app/api/cart");
        const data = await response.json();
        if (data.status === "success") {
          setCartItems(data.data);
          console.log("cart item fetched data >>", cartItems);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);
  console.log("cartItems data >>", cartItems[cartItems.length - 1]?.totalAmount);
  const handleSubmit = async (e) => {
    const selectedTip = addTip[selectedValue]
      ? parseInt(addTip[selectedValue].title)
      : 15;
    const cartId = cartItems[cartItems.length - 1]?._id;
    console.log("cart_id", cartId);
    console.log(cartId);
    const orderData = {
      user: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
      },
      card: {
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiration,
        cvv: formData.cvv,
        zipCode: formData.zipCode,
      },
      cartItems: cartId, // Replace with your cart items object ID
      tipPercentage: selectedTip,
    };

    try {
      const response = await fetch("https://papa-johns.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (data.status !== "success") {
        throw new Error("Failed to submit order", data);
      } else {
        alert("Order submitted successfully!");
        console.log("posted data >>> ", orderData);
        router.push("/table");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert(
        "Failed to submit order please check all details is fully collected ?"
      );
    }
  };

  const [isHide, setIsHide] = useState(false);
  // console.log('checkout data >>', );
  return (
    <>
      <div className="container">
        <div className={styles.checkout_row}>
          <div className={styles.checkout_col}>
            <SecondaryHeading title="CHECKOUT" size="38px" />
            <p>
              All fields marked with an asterisk ( * ) are required. Already
              have an account?
              <Link href="#">Log In</Link>
            </p>

            <div className="">
              <SecondaryHeading title="CARRYOUT INFORMATION" size="28.8px" />
            </div>

            {/* <CheckoutCart items={items} /> */}

            {/* tip */}
            <div>
              <SecondaryHeading title="ADD A TIP" size="30px" />
              <div className={styles.tipRow}>
                {addTip.map((item, i) => {
                  return (
                    <div
                      key={i.toString()}
                      className={`${styles.tipCol} ${
                        selectedValue === i ? styles.active : ""
                      }`}
                      onClick={() => handleClick(i)}
                    >
                      <h6>{item.title}</h6>
                      <p>${item.price}</p>
                    </div>
                  );
                })}

                {/* <div className={styles.amountForm}>
                  <form>
                    <input type="text" placeholder="Enter a custom amount" />
                    <button>APPLY</button>
                  </form>
                </div> */}
              </div>
            </div>
            <form className={styles.formContainer}>
              <div>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ width: "550px", margin: "30px 0" }}>
                {" "}
                <SecondaryHeading title="PAYMENT METHOD" size="30px" />
              </div>

              <div>
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="nameOnCard">Name On Card *</label>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="expiration">MM/YY *</label>
                <input
                  type="text"
                  id="expiration"
                  name="expiration"
                  value={formData.expiration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV *</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="zipCode">Zip Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </div>

          <div className={styles.checkout_col2}>
            <SecondaryHeading title="MY ORDER" size="28.8px" />

            {/* <div className={styles.myOrderCard}>
              <div
                className={styles.myOrderItems}
                onClick={() => setIsHide(!isHide)}
              >
                <SecondaryHeading title="Order Summary" size="16px" />
                <p>Item</p>
              </div>

              {isHide && (
                <>
                  <div className="d-flex" style={{ marginTop: "27px" }}>
                    <div className={styles.summary_desc}>
                      <SecondaryHeading
                        title={"Large Epic Stuffed Crust Epic Stuffed Crust Fresh Spinach & Tomato Alfredo Pizza"}
                        size="14px"
                      />
                      <p>
                        Whole Toppings: Roma Tomatoes, Fresh Spinach Sauce:
                        Alfredo Sauce Instructions: Normal, Normal Cheese,
                        Normal Bake, Normal Cut
                      </p>
                    </div>
                    <SecondaryHeading title="$26.99" size="14px" />
                  </div>
                  <Link href="#">Edit Cart</Link>
                </>
              )}
            </div> */}

            {/* subTotal */}
            <div className={styles.subTotal}>
              <div className={styles.subTotalRow}>
                <SecondaryHeading title="Sub Total" size="16px" />
                <SecondaryHeading
                  title={cartItems[cartItems.length - 1].totalAmount}
                  size="16px"
                />
              </div>
              <div
                className={styles.subTotalRow}
                style={{
                  borderBottom: "1px solid #e6e6e6",
                  paddingBottom: "20px",
                }}
              >
                <SecondaryHeading title="Estimated Tax" size="16px" />
                <SecondaryHeading title="$1.79" size="16px" />
              </div>
              <div className={styles.subTotalRow}>
                <SecondaryHeading title="ORDER TOTAL" size="30px" />
                <SecondaryHeading
                  title={cartItems[cartItems.length - 1].totalAmount}
                  size="30px"
                />
              </div>
            </div>

            <div className={styles.agrement}>
              <input type="checkbox" name="*" id="*" value="payment" />
              <label htmlFor="*">
                *I understand & agree my information will be used as described
                in the <Link href="#">Privacy Policy.</Link>
              </label>
            </div>
            <button
              className={styles.review_order__btn}
              onClick={() => handleSubmit()}
            >
              REVIEW ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
