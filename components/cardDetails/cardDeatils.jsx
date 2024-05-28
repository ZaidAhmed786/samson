import React, { useEffect, useState } from "react";
import Styles from "./cardDetails.module.css";
import { NutritionTableData } from "@/data";
import Link from "next/link";

const CardDeatils = ({ product }) => {
  const [Access, setAccess] = useState(true);
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
  };

  const handleFlavorChange = (e) => {
    if (formData.size !== "Large") {
      e.preventDefault();
      alert("Flavor is only available for large size.");
    } else {
      const updatedFormData = { ...formData, flavor: e.target.value };
      setFormData(updatedFormData);
    }
  };

  const handleClick = () => {
    console.log("Card clicked");
  };
  // const productTitles = product.map(item => item.productId.title);
  useEffect(() => {
    console.log(formData);
    console.log("access", Access);
  }, [formData]);
  const postDataToApi = async (product) => {
    const { _id, title, price } = product;
    const requestData = {
      address: "6652d37ba444ae798756dad1", 
      productId: _id,
      quantity: formData.quantity,
      ingredients: [
        {
          size: formData.size || null,
          crust: formData.crust || null,
          crustFlavor: formData.flavor || null, 
          sauce: null, 
          type: null, 
          bake: null, 
          drinkSize: null, 
          pieces: null, 
        },
      ],
      extraIngredients: [], 
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
    } catch (error) {
      console.error("Error adding item to the cart:", error);
    }
  };
  console.log("formData>>", formData);
  if (!product) {
    return <div>No product data</div>;
  }
  console.log('walia>>>>>>', product)

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.horizentalDiv}>
        <div className={Styles.img_wrapper}>
          <img src={product.img? product.img : product.productId.img} alt="" width={"100%"} height={"100%"} />
        </div>
        <div className={Styles.content_wrapper}>
          {/* <p>{product}</p> */}
          <h1>{product.title ? product.title :  product.productId.title}</h1>
          <h2>$18.99 340 cal /slice, 8 slices</h2>
          <p>{product.description? product.description : product.productId.title}</p>
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
                <option value="Epic Stuffed Crust"> Epic Stuffed Crust </option>
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
          <div className={Styles.button_wrapper}>
            <button
              onClick={() => {
                postDataToApi(product);
              }}
            >
              Order Now
            </button>
            <Link href={"customization"}>
              {" "}
              <button>customize</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className={Styles.table_wrapper}>
        <h1>BETTER INGREDIENTS. BETTER PIZZA</h1>
        <h1>NUTRITIONAL INFORMATION </h1>
        <table className={Styles.table}>
          <thead>
            <tr>
              <th className={Styles.th}>Crust Type</th>
              <th className={Styles.th}>Serving Size</th>
              <th className={Styles.th}>Order Size</th>
              <th className={Styles.th}>Total Calories</th>
              <th className={Styles.th}>Calories from Fat</th>
              <th className={Styles.th}>Total Fat</th>
              <th className={Styles.th}>Saturated Fat</th>
              <th className={Styles.th}>Trans Fat</th>
              <th className={Styles.th}>Cholesterol</th>
              <th className={Styles.th}>Sodium</th>
              <th className={Styles.th}>Total Carbohydrate</th>
              <th className={Styles.th}>Dietary Fiber</th>
              <th className={Styles.th}>Sugars</th>
              <th className={Styles.th}>Protein</th>
            </tr>
          </thead>
          <tbody>
            {NutritionTableData.map((data, index) => (
              <tr key={index}>
                <td className={Styles.td}>{data.Row[0]}</td>
                <td className={Styles.td}>{data.Row[1]}</td>
                <td className={Styles.td}>{data.Row[2]}</td>
                <td className={Styles.td}>{data.Row[3]}</td>
                <td className={Styles.td}>{data.Row[4]}</td>
                <td className={Styles.td}>{data.Row[5]}</td>
                <td className={Styles.td}>{data.Row[6]}</td>
                <td className={Styles.td}>{data.Row[7]}</td>
                <td className={Styles.td}>{data.Row[8]}</td>
                <td className={Styles.td}>{data.Row[9]}</td>
                <td className={Styles.td}>{data.Row[10]}</td>
                <td className={Styles.td}>{data.Row[11]}</td>
                <td className={Styles.td}>{data.Row[12]}</td>
                <td className={Styles.td}>{data.Row[13]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>ALLERGEN INFORMATION</h1>
        <h2>Contains: Wheat and Milk</h2>
        <i>
          Papa Johns or its franchisees assume no responsibilities for our
          customers with food allergies. With most of our menu made fresh to
          order, we cannot guarantee that our products are completely free from
          common allergens because of the possibility of cross-contamination
          within the kitchen.
        </i>
        <p>
          Products that we know contain, or are manufactured, stored, or
          processed with, the top nine major food allergens can be found on our
          Allergen Guide. Continue to check this page each time you dine with us
          for the most up-to-date allergy information as our menu and
          ingredients may change.
        </p>
        <p>
          The allergen information provided is based on Papa Johns standard
          product formulations and is for U.S. locations only. Product
          formulations, recipe changes, ingredient substitutions, and/or
          suppliers may change. For any additional allergen questions please
          visit www.papajohnsofficial.com to fill out a feedback form.
        </p>
        <p>
          2,000 calories a day is used for general nutrition advice, but calorie
          needs vary.
        </p>
      </div> */}
    </div>
  );
};

export default CardDeatils;
