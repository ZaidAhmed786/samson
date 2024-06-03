import React, { useEffect, useState } from "react";
import Styles from "./customization.module.css";
import { CustomizePizza } from "@/data";
import { useRouter } from "next/router";

const Customization = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeButton, setActiveButton] = useState("Base");
  const [cartQuantity, setCartQuantity] = useState(3);
  const pricePerItem = 16.5;
  const router = useRouter();
  const buttons = ["Base", "Cheese", "Meat", "Veggies"];

  const handleOptionChange = (heading, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [heading]: option,
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

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const increaseQuantity = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  const prepareExtraIngredients = () => {
    const extraIngredients = [];
    for (const [key, value] of Object.entries(selectedOptions)) {
      if (typeof value === "object") {
        extraIngredients.push({
          type: key,
          option: value.option,
          detail: value.detail,
        });
      } else {
        extraIngredients.push({ type: key, option: value });
      }
    }
    return extraIngredients;
  };

  const postDataToApi = async (product) => {
    let address_id = localStorage.getItem("address");
    const { _id, title, price } = product;
    const requestData = {
      address: address_id,
      productId: _id,
      quantity: cartQuantity || 1,
      ingredients: [
        {
          size: selectedOptions.SIZE || null,
          crust: selectedOptions.CRUST || null,
          crustFlavor: selectedOptions["CRUST FLAVOR"] || null,
          sauce: selectedOptions.SAUCE || null,
          saucePortion: selectedOptions["SAUCE PORTION"]?.detail || null,
          bake: selectedOptions.BAKE || null,
          cut: selectedOptions.CUT || null,
        },
      ],
      extraIngredients: [prepareExtraIngredients()],
    };

    console.log("Sending request data to API:", requestData);

    try {
      const response = await fetch(
        "https://papa-johns.vercel.app/api/cart-items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API responded with an error:", errorData);
        throw new Error("Failed to add item to the cart");
      }

      const responseData = await response.json();
      console.log("Item added to the cart:", responseData);
      router.push('/menu');
    } catch (error) {
      console.error("Error adding item to the cart:", error);
    }
  };
  console.log("quantity >>>", cartQuantity);
  console.log("id>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", product._id);
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.horizentalDiv}>
        <div className={Styles.img_wrapper}>
          <img src={product.img} alt="" width={"100%"} height={"100%"} />
        </div>
        <div className={Styles.content_wrapper}>
          <div style={{ paddingLeft: "4%" }}>
            <h1>{product.title}</h1>
            <h2>$18.99 340 cal /slice, 8 slices</h2>
            <p>
              (1) Toping added |<span> view all</span>{" "}
            </p>
            <div className={Styles.menuwrapper}>
              {buttons.map((button) => (
                <div key={button} className={Styles.menu}>
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
          {CustomizePizza[activeButton]?.map((data, index) => (
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
          <button onClick={decreaseQuantity} disabled={cartQuantity === 0}>
            -
          </button>
          <span>{cartQuantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <button
            onClick={() =>
              postDataToApi({
                _id: product._id,
                title: product.title,
                price: product.title,
              })
            }
          >
            ADD TO ORDER - ${pricePerItem * cartQuantity}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customization;