import React, { useState } from "react";
import styles from "./menu.module.css";
import Card from "@/components/papajhon_card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  customPicks,
  PapaPicks,
  handcraftedSpecialties,
  handcraftedMeatlessSpecialties,
  GlutenFreeCrustWithAncientGrains,
} from "@/data";
import CommonCard from "../common_card/CommonCard";
const Menu = () => {
  const [activeButton, setActiveButton] = useState("PIZZA");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttons = [
    "PIZZA",
    "CRISPY CUPPY RONI",
    "PAPA BOWLS3",
    "PAPADIAS",
    "PAPA BITES",
    "WINGS",
    "SIDES",
    "DESSERTS",
    "DRINKS",
    "EXTRAS",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <div className={styles.main_div}>
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
        <div className={styles.label}>
          <div>
            {/* <div style={{width: 'fit-content'}}> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M9.00003 0.5C5.28003 0.5 2.16003 3.5 2.16003 7.34C2.16003 11.06 7.56003 18.5 9.00003 18.5C10.08 18.5 15.84 11.06 15.84 7.34C15.84 3.5 12.72 0.5 9.00003 0.5V0.5ZM9.00003 10.7C7.08003 10.7 5.52003 9.14 5.52003 7.22C5.52003 5.3 7.08003 3.74 9.00003 3.74C10.92 3.74 12.48 5.3 12.48 7.22C12.48 9.14 10.92 10.7 9.00003 10.7Z"
                fill="black"
              />
            </svg>
            {/* </div> */}
            <h1>START YOUR ORDER</h1>
            <h2>Find your local store to see our full menu.</h2>
            <p>Plus, see local deals, toppings, and prices.</p>
          </div>
          <button>Find Your Store</button>
        </div>
        {/* ---------------------------------CREATE YOUR OWN PIZZA------------------------------------------------ */}
        <div className={styles.custom_pizza_section}>
          <div className={styles.content_wrapper}>
            <h1>CREATE YOUR OWN PIZZA</h1>
            <p>Get started with one of our signature crusts.</p>
          </div>
          <div className={styles.slider_section}>
            <div>
              <Carousel responsive={responsive}>
                {customPicks.map((data, index) => (
                  <div key={index} className={styles.card_wrapper}>
                    <Card
                      cardHeight="130px"
                      img={data.img}
                      title={data.title}
                      description={data.description}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        {/* --------------------------------------PAPA PICKS------------------------------------------- */}
        <div>
          <h1 className={styles.category_heading}>PAPA PICKS</h1>
          <div className={styles.PapaPicks}>
            {PapaPicks.map((data, index) => (
              <div key={index} className={styles.card_wrapper}>
                <Card
                  cardHeight="200px"
                  img={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className={styles.category_heading}>HANDCRAFTED SPECIALTIES</h1>
          <div className={styles.PapaPicks}>
            <CommonCard paragraphText="" />
            {/* <div className={styles.firstCard}>
              <span>$13.99</span>
              <h1>
                NY STYLE CRISPY CUPPY <br /> {`'`}RONI PIZZA
              </h1>
              <p>details</p>
              <div className={styles.button_wrapper}>
                <button>Add to order</button>
                <button>customize</button>
              </div>
               <div className={styles.paragrafh - box}></div> 
            </div> */}
            {handcraftedSpecialties.map((data, index) => (
              <div
                key={index}
                className={styles.card_wrapper}
                style={{ height: "532px" }}
              >
                <Card
                  cardHeight="200px"
                  img={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className={styles.category_heading}>
            HANDCRAFTED MEATLESS SPECIALTIES
          </h1>
          <div className={styles.PapaPicks}>
            {handcraftedMeatlessSpecialties.map((data, index) => (
              <div key={index} className={styles.card_wrapper}>
                <Card
                  cardHeight="200px"
                  img={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className={styles.category_heading}>
            GLUTEN-FREE CRUST WITH ANCIENT GRAINS
          </h1>
          <div className={styles.PapaPicks}>
            {GlutenFreeCrustWithAncientGrains.map((data, index) => (
              <div key={index} className={styles.card_wrapper}>
                <Card
                  cardHeight="200px"
                  img={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
