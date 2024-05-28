import React, { useEffect, useState } from "react";
import styles from "./checkout.module.css";
import SecondaryHeading from "../../components/heading/heading";
import Link from "next/link";
import CheckoutCart from "../../components/checkout-card/checkoutCart";

export default function Checkout() {
  const items = [
    {
      title: "Carryout Time",
      refrence: "As soon as possible",
    },
    {
      title: "Carryout Address",
      refrence: "125 18th Street, Jersey City, NJ 07310",
    },
  ];

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

  const [isHide, setIsHide] = useState(false);
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

            <CheckoutCart items={items} />

            {/* tip */}
            <div>
              <SecondaryHeading title="ADD A TIP" size="30px" />
              <div className={styles.tipRow}>
                {addTip.map((item, i) => {
                  return (
                    <div key={i.toString()} className={styles.tipCol}>
                      <h6>{item.title}</h6>
                      <p>${item.price}</p>
                    </div>
                  );
                })}

                <div className={styles.amountForm}>
                  <form>
                    <input type="text" placeholder="Enter a custom amount" />
                    <button>APPLY</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.checkout_col2}>
            <SecondaryHeading title="MY ORDER" size="28.8px" />

            <div className={styles.myOrderCard}>
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
                        title="Large Epic Stuffed Crust Epic Stuffed Crust Fresh Spinach & Tomato Alfredo Pizza"
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
            </div>

            {/* subTotal */}
            <div className={styles.subTotal}>
              <div className={styles.subTotalRow}>
                <SecondaryHeading title="Sub Total" size="16px" />
                <SecondaryHeading title="$26.99" size="16px" />
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
                <SecondaryHeading title="$28.78" size="30px" />
              </div>
            </div>

            <div className={styles.amountForm} style={{marginTop:"38px"}}>
              <form>
                <input type="text" placeholder="Enter a custom amount" style={{width:'81%'}} />
                <button>APPLY</button>
              </form>
            </div>

            <div className={styles.agrement}>
              <input type="checkbox" name="*" id="*" value="payment" />
              <label htmlFor="*">
                *I understand & agree my information will be used as described
                in the <Link href="#">Privacy Policy.</Link>
              </label>
            </div>
            <button className={styles.review_order__btn}>REVIEW ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
}
