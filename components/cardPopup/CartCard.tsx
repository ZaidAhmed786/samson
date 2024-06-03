import React from "react";
import styles from "./CartCard.module.css";
interface Ingredient {
  bake: string;
  crust: string;
  crustFlavor: string;
  drinkSize: string | null;
  pieces: number;
  sauce: string;
  size: string;
  type: string | null;
  _id: string;
}
const CartCard = ({ items, selectedProductIndex }: any) => {
  console.log("items data >>", items);
  return (
    <div className={styles.cart}>
      {items.map((item: any, index: any) => (
        <div key={item._id} className={styles["cart-item-container"]}>
          <div
            className={styles["cart-item"]}
            style={{
              display: index === selectedProductIndex ? "flex" : "none",
            }}
          >
            <img
              src={item?.productId?.productId?.img}
              alt={item?.productId?.productId?.title}
              className={styles["cart-item-image"]}
            />
            <div className={styles["cart-item-details"]}>
              <h3 className={styles["cart-item-title"]}>
                {item.productId?.productId?.title}
              </h3>
              <p className={styles["cart-item-quantity"]}>
                Quantity: {item.quantity}
              </p>
              <p className={styles["cart-item-price"]}>Price: ${item.price}</p>
            </div>
            <div style={{ width: "fit-content", display: "flex" }}></div>
            <div className={styles.ingredientDiv}>
              {item?.productId?.ingredients.map(
                (ingredient: Ingredient, idx: number) => {
                  const ingredientEntries = Object.entries(ingredient);
                  return (
                    <ul key={idx}>
                      <p>
                        <b> Ingredients</b>
                      </p>
                      <li>
                        {ingredientEntries.slice(0, -1).map(
                          (
                            [key, value] // Exclude the last entry
                          ) => (
                            <li key={key}>
                              <b>{key}:</b> {value as string}
                            </li>
                          )
                        )}
                      </li>
                    </ul>
                  );
                }
              )}

              {item?.productId?.extraIngredients &&
                item?.productId?.extraIngredients.length > 0 && (
                  <ul>
                    <p>
                      <b>Extra Ingredients</b>
                    </p>
                    {item?.productId?.extraIngredients.map(
                      (ingredient: any, idx: any) => (
                        <li key={idx}>
                          <b>{ingredient.type}:</b> {ingredient.option}
                        </li>
                      )
                    )}
                  </ul>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
