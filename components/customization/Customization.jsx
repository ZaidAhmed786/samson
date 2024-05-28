import React, { useEffect, useState } from "react";
import Styles from "./customization.module.css";
import { CustomizePizza } from "@/data";
const Customization = (product) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  // ---------------------------- three buttons inside options-----------------------------
  const handleOptionChange = (heading, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [heading]:
        option === "Original Pizza"
          ? { option, detail: prevState[heading]?.detail || "Normal" }
          : option,
    }));
  };

  const handleDetailChange = (heading, detail) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [heading]: {
        ...prevState[heading],
        detail,
      },
    }));
  };
  // ---------------------------- four buttons on on top -----------------------------
  const [activeButton, setActiveButton] = useState('Base');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttons = ["Base", "Cheese", "Meat", "Veggies"];
  // ---------------------------- incremental and decremental toggler -----------------------------
  const [quantity, setQuantity] = useState(3);
  const pricePerItem = 16.5;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  // ------------ updating data on slecting every option and adding in one variable and consoling that----------------
  useEffect(() => {
    const selectedValues = Object.keys(selectedOptions).map((key) => {
      const value = selectedOptions[key];
      return typeof value === "object" ? [value.option, value.detail] : value;
    });
    console.log(selectedValues);
  }, [selectedOptions]);

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.horizentalDiv}>
        <div className={Styles.img_wrapper}>
          <img
            src="./papajhon/Original-Crust-Cheese.webp"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={Styles.content_wrapper}>
          <div style={{ paddingLeft: "4%" }}>
            <h1>THE WORKS PIZZA</h1>
            <h2>$18.99 340 cal /slice, 8 slices</h2>
            <p>
              (1) Toping added |<span> view all</span>{" "}
            </p>
           <div className={Styles.menuwrapper}>
           {buttons.map((button) => (
              // 
              <div key={button}  className={Styles.menu}>
                <button
                  onClick={() => handleButtonClick(button)}
                 className={activeButton === button ? Styles.active : null}
                >
                  {button}
                </button>
              </div>
            ))}
           </div>
          </div>
          {CustomizePizza.map((data, index) => (
            <div className={Styles.size_container} key={index}>
              <p>{data.heading}</p>
              {data.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <div className={Styles.size_option}>
                    <input
                      type="radio"
                      id={`${data.heading}-${option}`}
                      name={data.heading}
                      checked={
                        typeof selectedOptions[data.heading] === "object"
                          ? selectedOptions[data.heading].option === option
                          : selectedOptions[data.heading] === option
                      }
                      onChange={() => handleOptionChange(data.heading, option)}
                    />
                    <label htmlFor={`${data.heading}-${option}`}>
                      {option}
                    </label>
                  </div>
                  {option === "Original Pizza" && data.heading === "SAUCE" && (
                    <div className={Styles.optionDeatilsBtn}>
                      <button
                        className={`${Styles.custom_button} ${
                          selectedOptions[data.heading]?.detail === "Light"
                            ? Styles.active
                            : ""
                        }`}
                        onClick={() =>
                          handleDetailChange(data.heading, "Light")
                        }
                      >
                        Light
                      </button>
                      <button
                        className={`${Styles.custom_button} ${
                          selectedOptions[data.heading]?.detail === "Normal"
                            ? Styles.active
                            : ""
                        }`}
                        onClick={() =>
                          handleDetailChange(data.heading, "Normal")
                        }
                      >
                        Normal
                      </button>
                      <button
                        className={`${Styles.custom_button} ${
                          selectedOptions[data.heading]?.detail === "Extra"
                            ? Styles.active
                            : ""
                        }`}
                        onClick={() =>
                          handleDetailChange(data.heading, "Extra")
                        }
                      >
                        Extra
                      </button>
                    </div>
                  )}
                  <hr />
                </div>
              ))}
            </div>
          ))}
          <p className={Styles.lastParagraph}>
            2,000 calories a day is used for general nutrition advice, but
            calorie needs vary. Additional nutrition information available upon
            request.
          </p>
        </div>
      </div>
      <div className={Styles.pizzaQuantity}>
        <div>
          <button onClick={decreaseQuantity} disabled={quantity === 0}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <button>ADD TO ORDER - ${pricePerItem * quantity}</button>
        </div>
      </div>
    </div>
  );
};

export default Customization;
