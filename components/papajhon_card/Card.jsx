import React, { use, useEffect } from "react";
import Styles from "./card.module.css";
import { useState } from "react";
import Link from "next/link";

const Card = (
  props,
  { cardHeight, AccessData, onFormDataChange }
) => {
  const [Access, setAccess] = useState({ AccessData });
  // console.log(props?.handleClick);
  const [formData, setFormData] = useState({
    size: "Small",
    crust: "Original Crust",
    flavor: "",
    quantity: 1,
  });

  const sizes = Array.from({ length: 50 }, (_, i) => i + 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = { ...formData, [name]: value };

    // If changing the size from Large to another size, clear the flavor
    if (name === "size" && value !== "Large") {
      updatedFormData.flavor = "";
    }

    setFormData(updatedFormData);
    props.onFormDataChange(updatedFormData);
  };
  const handleFlavorChange = (e) => {
    if (formData.size !== "Large") {
      e.preventDefault();
      alert("Flavor is only available for large size.");
    } else {
      const updatedFormData = { ...formData, flavor: e.target.value };
      setFormData(updatedFormData);
      props.onFormDataChange(updatedFormData);
    }
  };

  // useEffect(() => {
  //   // This will log formData whenever it changes
  //   console.log(formData);
  //   console.log("access", Access);
  // }, [formData]);
  return (
    <div className={Styles.main_div}>
      <div>
        <div className={Styles.image_div}>
          <img
            src={props.img ? props.img : "./papajhon/Original-Crust-Cheese.webp"}
            alt=""
            width={"100%"}
            height={cardHeight ? cardHeight : "130px"}
          />
        </div>
        <div>
          <div className={Styles.title_wrapper}>
            {" "}
            <h1>{props.title ? props.title : "Original Crust"}</h1>{" "}
            <p
              onClick={(e) => {
                // e.stopPropagation();
                props.handleClick();
              }}
            >
              details
            </p>
            {/* <Link href={`/product-detail/${handleClick}`}></Link> */}
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
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                    {/* Add more size options here */}
                  </select>
                </div>

                <div className={Styles.incrementer}>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={Styles.dropdown}>
                <select
                  id="crust"
                  name="crust"
                  value={formData.crust}
                  onChange={handleInputChange}
                >
                  <option value="original">Original Crust</option>
                  <option value=" Garlic Epic Stuffed Crust">
                    {" "}
                    Garlic Epic Stuffed Crust{" "}
                  </option>
                  <option value="Epic Stuffed Crust">
                    {" "}
                    Epic Stuffed Crust{" "}
                  </option>
                  <option value="XL New York Style Crust">
                    {" "}
                    XL New York Style Crust{" "}
                  </option>
                  <option value="Thin Crust"> Thin Crust </option>
                  <option value="Gluten-Free Crust"> Gluten-Free Crust </option>
                </select>
              </div>

              <div className={Styles.dropdown}>
                <select
                  id="flavor"
                  name="flavor"
                  value={formData.flavor}
                  onChange={handleFlavorChange}
                  disabled={formData.size !== "Large"}
                >
                  <option value="Add Crust Flavor">Add Crust Flavor</option>
                  <option value="Garlic Parmesan Cheese">
                    Garlic Parmesan Cheese
                  </option>
                  {/* Add more crust flavor options here */}
                </select>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={Styles.button_wrapper}>
        <button onClick={props.handleButtonClick}>Order Now</button>
          {" "}
          <button  onClick={(e) => {
                // e.stopPropagation();
                props.customizationClick();
              }}>customize</button>
      </div>
    </div>
  );
};

export default Card;
