import Link from 'next/link'
import React, { useContext } from 'react'
import CartItemTable from './CartItemTable'
import { NafiabContext } from '@/context/NafiabContext'

const CartSection = () => {
    const {cartItems} = useContext(NafiabContext)
  return (
    <div className="container">
        <div className="cart-section">
            <div className="inner-cart-section">
                <div className="cart-area">
                    <div className="cart__body">
                        <CartItemTable/>
                        <div className="cart-left-actions d-flex justify-content-end">
                            {cartItems.length === 0? (
                              <Link className='ba-submit-btn' href='/pricing'>Buy a plan</Link>  
                            ):(
                                <form action="#" className="cart-coupon-form">
                                    <input type="text" name="cart-coupon-input" id="cart-coupon-input" placeholder="Enter Your Code"/>
                                    <button type="submit" className="ba-submit-btn apply-coupon">Apply Coupon</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartSection