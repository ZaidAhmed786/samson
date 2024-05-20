import { useContext } from 'react';
import Link from 'next/link';
import { NafiabContext } from '@/context/NafiabContext';

const CartItemTable = () => {
    const {cartItems, removeItem, updateQuantity} = useContext(NafiabContext)
    return (
        <table className='cart-page-table'>
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                {cartItems.length === 0 ? (
                    <tr className='no-item-msg'>
                        <td className='no-item-msg-text'>No items in the cart</td>
                    </tr>
                ) : (
                    cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <div className="cart-product">
                                    <div className="cart-product__txt">
                                        <h6><Link href="/shopDetails">{item.name}</Link></h6>
                                        <h6>{item.speed} Mbps</h6>
                                        <button
                                            className="remove-item ba-submit-btn"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>
                            <div className="cart-product__quantity">
                                <div className="cart-product__quantity-btns">
                                    <button
                                        className="cart-product__minus"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        <i className="fal fa-minus"></i>
                                    </button>
                                    <button
                                        className="cart-product__plus"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <i className="fal fa-plus"></i>
                                    </button>
                                </div>
                                <input
                                    type="number"
                                    name="product-quantity-input"
                                    className="cart-product-quantity-input"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(event) => {
                                        const newQuantity = parseInt(event.target.value);
                                        updateQuantity(item.id, newQuantity);
                                    }}
                                />
                            </div>
                            </td>
                            <td>
                                <h6 className='table-total-price'>${item.price}</h6>
                            </td>
                            <td>
                                <h6 className='table-total-price'>${item.price * item.quantity}</h6>
                            </td>
                        </tr>
                    ))
                )}

            </tbody>
        </table>
    );
};

export default CartItemTable;
