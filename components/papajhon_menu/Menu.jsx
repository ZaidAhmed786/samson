import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Card from "@/components/papajhon_card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../redux/cart";
import TemCart from "../../pages/temCart";
import { menuDataMap } from "@/data";
import CommonCard from "../common_card/CommonCard";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeButton, setActiveButton] = useState("PIZZA");
  const [menuData, setMenuData] = useState(menuDataMap["PIZZA"]);
  const [formData, setFormData] = useState({});
  const [Access, setAccess] = useState(true);

  const categoryMap = {
    PIZZA: "Pizza",
    CRISPY_CUPPY_RONI: "Crispy Cuppy Roni",
    PAPA_BOWLS: "Papa Bowls",
    PAPADIAS: "Papadias",
    PAPA_BITES: "Papa Bites",
    WINGS: "Wings",
    SIDES: "Sides",
    DESSERTS: "Desserts",
    DRINKS: "Drinks",
    EXTRAS: "Extras",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://papa-johns.vercel.app/api/products"
        );
        const data = await response.json();
        if (data.status === "success") {
          setProducts(data.data);
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

  const postDataToApi = async (product) => {
    const { _id, title, price } = product;
    const requestData = {
      address: "6652d37ba444ae798756dad1", // Replace with actual address ObjectId
      productId: _id,
      quantity: 1, // Assuming a default quantity of 1
      ingredients: [
        {
          size: formData.size || null,
          crust: formData.crust || null,
          crustFlavor: formData.flavor || null, // Assuming 'flavor' maps to 'crustFlavor'
          sauce: null, // Add actual value if applicable
          type: null, // Add actual value if applicable
          bake: null, // Add actual value if applicable
          drinkSize: null, // Add actual value if applicable
          pieces: null, // Add actual value if applicable
        },
      ],
      extraIngredients: [], // Add any extra ingredients if applicable
    };
  
    console.log("Sending request data to API:", requestData);
  
    try {
      const response = await fetch("https://papa-johns.vercel.app/api/cart-items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // setMenuData(menuDataMap[button]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const buttons = Object.keys(categoryMap);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log("products>>", products);
  const filteredProducts = products.filter(
    (product) =>
      product.subCategoryId.categoryId.title === categoryMap[activeButton]
  );

  const handleFormDataChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };
  console.log('formData>>', formData);
  return (
    // <div className={styles.main_div}>
    //   <div className={styles.header}>
    //     <img src="./papajhon/papajhonlogo.svg" alt="papajhonlogo" />
    //   </div>
    //   <div className={styles.menu_wrapper}>
    //     <div className={styles.pizza_menu}>
    //       {buttons.map((button) => (
    //         <p
    //           key={button}
    //           onClick={() => handleButtonClick(button)}
    //           className={activeButton === button ? styles.active : null}
    //         >
    //           {button}
    //         </p>
    //       ))}
    //     </div>
    //     <div className={styles.label}>
    //       <div>
    //         {/* <div style={{width: 'fit-content'}}> */}
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="18"
    //           height="19"
    //           viewBox="0 0 18 19"
    //           fill="none"
    //         >
    //           <path
    //             d="M9.00003 0.5C5.28003 0.5 2.16003 3.5 2.16003 7.34C2.16003 11.06 7.56003 18.5 9.00003 18.5C10.08 18.5 15.84 11.06 15.84 7.34C15.84 3.5 12.72 0.5 9.00003 0.5V0.5ZM9.00003 10.7C7.08003 10.7 5.52003 9.14 5.52003 7.22C5.52003 5.3 7.08003 3.74 9.00003 3.74C10.92 3.74 12.48 5.3 12.48 7.22C12.48 9.14 10.92 10.7 9.00003 10.7Z"
    //             fill="black"
    //           />
    //         </svg>
    //         {/* </div> */}
    //         <h1>START YOUR ORDER</h1>
    //         <h2>Find your local store to see our full menu.</h2>
    //         <p>Plus, see local deals, toppings, and prices.</p>
    //       </div>
    //       <button>Find Your Store</button>
    //     </div>
    //     {/* ---------------------------------CREATE YOUR OWN PIZZA------------------------------------------------ */}
    //     <div className={styles.custom_pizza_section}>
    //       <div className={styles.content_wrapper}>
    //         <h1>CREATE YOUR OWN PIZZA</h1>
    //         <p>Get started with one of our signature crusts.</p>
    //       </div>
    //       <div className={styles.slider_section}>
    //         <div>
    //           <Carousel responsive={responsive}>
    //             {customPicks.map((data, index) => (
    //               <div key={index} className={styles.card_wrapper}>
    //                 <Card
    //                   cardHeight="130px"
    //                   img={data.img}
    //                   title={data.title}
    //                   description={data.description}
    //                 />
    //               </div>
    //             ))}
    //           </Carousel>
    //         </div>
    //       </div>
    //     </div>
    //     {/* --------------------------------------PAPA PICKS------------------------------------------- */}
    //     <div>
    //       <div className={styles.PapaPicks}>
    //         {PapaPicks.map((data, index) => (
    //           <div key={index} className={styles.card_wrapper}>
    //             <Card
    //               cardHeight="200px"
    //               img={data.img}
    //               title={data.title}
    //               description={data.description}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div>
    //       <h1 className={styles.category_heading}>HANDCRAFTED SPECIALTIES</h1>
    //       <div className={styles.PapaPicks}>
    //         <CommonCard paragraphText="" />
    //         {handcraftedSpecialties.map((data, index) => (
    //           <div
    //             key={index}
    //             className={styles.card_wrapper}
    //             style={{ height: "532px" }}
    //           >
    //             <Card
    //               cardHeight="200px"
    //               img={data.img}
    //               title={data.title}
    //               description={data.description}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div>
    //       <h1 className={styles.category_heading}>
    //         HANDCRAFTED MEATLESS SPECIALTIES
    //       </h1>
    //       <div className={styles.PapaPicks}>
    //         {handcraftedMeatlessSpecialties.map((data, index) => (
    //           <div key={index} className={styles.card_wrapper}>
    //             <Card
    //               cardHeight="200px"
    //               img={data.img}
    //               title={data.title}
    //               description={data.description}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div>
    //       <h1 className={styles.category_heading}>
    //         GLUTEN-FREE CRUST WITH ANCIENT GRAINS
    //       </h1>
    //       <div className={styles.PapaPicks}>
    //         {GlutenFreeCrustWithAncientGrains.map((data, index) => (
    //           <div key={index} className={styles.card_wrapper}>
    //             <Card
    //               cardHeight="200px"
    //               img={data.img}
    //               title={data.title}
    //               description={data.description}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className={styles.header}>
        <img src="./papajhon/papajhonlogo.svg" alt="papajhonlogo" />
      </div>
      <div className={styles.menu_wrapper}>
        <div className={styles.pizza_menu}>
          {buttons.map((button) => (
            <p
              key={button}
              onClick={() => handleButtonClick(button)}
              className={activeButton === button ? styles.active : null}
            >
              {button}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className={styles.category_heading}  onClick={() => postDataToApi()}>Pizza</h1>
        <div className={styles.PapaPicks}>
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className={styles.card_wrapper}>
                <Card
                  AccessData={Access}
                  cardHeight="130px"
                  img={product.img}
                  title={product.title}
                  description={product.description}
                  handleButtonClick={() => postDataToApi(product)}
                  onFormDataChange={handleFormDataChange}
                />
                {/* <p>{product.subCategoryId.categoryId.title}</p> */}
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
