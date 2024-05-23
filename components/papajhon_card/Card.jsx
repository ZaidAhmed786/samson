import React, { use } from "react";
import Styles from "./card.module.css";
import { useState } from "react";

const Card = (props) => {
  const [Access, setAccess] = useState(true);
  return (
    <div className={Styles.main_div}>
      <div>
        <div className={Styles.image_div}>
          <img
            src={
              props.img ? props.img : "./papajhon/Original-Crust-Cheese.webp"
            }
            alt=""
            width={"100%"}
            height={props.cardHeight ? props.cardHeight : '130px'}
          />
        </div>
        <div>
          <div className={Styles.title_wrapper}>
            {" "}
            <h1>{props.title ? props.title : "Original Crust"}</h1>{" "}
            <p>details</p>
          </div>
          <p>
            {Access ? (
              <p style={{ paddingLeft: "14px" }}>
                $18.99 340 cal /slice, 8 slices
              </p>
            ) : props.description ? (
              props.description
            ) : (
              "Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed"
            )}
          </p>
          {Access ? (
            <div className={Styles.container}>
              <div className={Styles.first_row}>
                <div className={Styles.dropdown}>
                  <select id="size" name="size">
                    <option value="large">Large</option>
                    {/* Add more size options here */}
                  </select>
                </div>

                <div className={Styles.incrementer}>
                <select id="size" name="size" >
                    <option value="1">1</option>
                    {/* Add more size options here */}
                  </select>
                </div>
              </div>

              <div className={Styles.dropdown}>
                <select id="crust" name="crust">
                  <option value="original">Original Crust</option>
                  {/* Add more crust options here */}
                </select>
              </div>

              <div className={Styles.dropdown}>
                <select id="flavor" name="flavor">
                  <option value="" disabled selected>
                    Add Crust Flavor
                  </option>
                  {/* Add more crust flavor options here */}
                </select>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={Styles.button_wrapper}>
        <button>Order Now</button>
        <button>customize</button>
      </div>
    </div>
  );
};

export default Card;
