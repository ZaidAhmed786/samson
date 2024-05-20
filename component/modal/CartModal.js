import { NafiabContext } from '@/context/NafiabContext'
import React, { useContext, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import CartItemTable from '../cart/CartItemTable'
import { cartArray } from '@/data/Data'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CartModal = () => {
    const { showCartModal, handleCartClose } = useContext(NafiabContext);
    const router = useRouter(); // Get the router instance

    useEffect(() => {
      const handleCloseModal = () => {
        if (showCartModal) {
          handleCartClose();
        }
      };
  
      router.events.on('routeChangeStart', handleCloseModal);
  
      return () => {
        router.events.off('routeChangeStart', handleCloseModal);
      };
    }, [router, showCartModal, handleCartClose]);
    return (
        <>
            <Modal show={showCartModal} onHide={handleCartClose} centered size="xl" className="cart-area-modal" id="cart-area-modal">
            <Modal.Header className="cart__header">
                <h3 className="cart__title">Shopping cart</h3>
                <button className="cart-area-modal-close-btn" onClick={handleCartClose}>X</button>
            </Modal.Header>
            <Modal.Body className="cart__body">
                <CartItemTable/>

                {cartArray.length === 0 ? (
                  <div className="cart-left-actions d-flex justify-content-end">
                    <Link href="/shop" className="ba-submit-btn">Go to Shop</Link>
                  </div>
                ):(
                  <div className="cart-left-actions d-flex justify-content-end">
                    <Link href="/cart" className="ba-submit-btn">View Full cart</Link>
                  </div>
                )}
            </Modal.Body>
            </Modal>
        </>
    );
};

export default CartModal;
