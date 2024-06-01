import React from 'react';
import styles from './CartCard.module.css';

const CartCard = ({ items, selectedProductIndex }: any) => {
  return (
    <div className={styles.cart}>
      {items.map((item: any, index: any) => (
        <div key={item._id} className={styles['cart-item-container']}>
          <div className={styles['cart-item']} style={{ display: index === selectedProductIndex ? 'flex' : 'none' }}>
            <img src={item?.productId?.productId?.img} alt={item?.productId?.productId?.title} className={styles['cart-item-image']} />
            <div className={styles['cart-item-details']}>
              <h3 className={styles['cart-item-title']}>{item.productId?.productId?.title}</h3>
              <p className={styles['cart-item-quantity']}>Quantity: {item.quantity}</p>
              <p className={styles['cart-item-price']}>Price: ${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;