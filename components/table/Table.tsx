import React, { useState } from "react";
import styles from "./Table.module.css";
import CardPopup from "../cardPopup/CardPopup";
import CartCard from "../cardPopup/CartCard";

interface Order {
  _id: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  cartItems: {
    address: {
      streetAddress: string;
      aptSteFloor: string;
      aptSteFloorNumber: string;
      country: string;
      zipCode: string;
    };
    items: {
      _id: string;
      productId: {
        title: string;
      };
      quantity: number;
      price: number;
    }[];
    totalAmount: number;
  };
  card: {
    cardNumber: string;
  };
  status: string;
  createdAt: string;
}

interface Props {
  orders: {
    data: Order[];
  };
}

const TableComponent: React.FC<Props> = ({ orders }) => {
  const [orderList, setOrderList] = useState<Order[]>(orders.data);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showCardPopup, setShowCardPopup] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Order["card"] | null>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  console.log(selectedOrder);
  const deleteOrder = async (orderId: string) => {
    try {
      const res = await fetch(
        `https://papa-johns.vercel.app/api/orders/${orderId}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        setOrderList(orderList.filter((order) => order._id !== orderId));
      } else {
        console.error("Failed to delete order");
      }
    } catch (error) {
      console.error("An error occurred while deleting the order", error);
    }
  };

  const showOrderDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  const showCardDetails = (cardData: Order["card"]) => {
    setSelectedCard(cardData);
    setShowCardPopup(true);
  };

  const closeCardPopup = () => {
    setShowCardPopup(false);
  };

  const handlePrevProduct = () => {
    setSelectedProductIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextProduct = () => {
    setSelectedProductIndex((prevIndex) =>
      Math.min(
        prevIndex + 1,
        (selectedOrder && selectedOrder.cartItems.items.length - 1) || 0
      )
    );
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Address</th>
            <th>Card</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderList?.map((order) => {
            const { _id, user, cartItems, card, status, createdAt } = order;
            const customerName = `${user?.firstName} ${user?.lastName}`;
            const address = `${cartItems?.address?.streetAddress}, ${cartItems?.address?.aptSteFloor} ${cartItems?.address?.aptSteFloorNumber}, ${cartItems?.address?.country}`;
            const totalQuantity = cartItems?.items?.reduce(
              (total, item) => total + item?.quantity,
              0
            );
            const totalPrice = cartItems?.totalAmount;

            return (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{customerName}</td>
                <td>{totalQuantity}</td>
                <td>${totalPrice}</td>
                <td>{status}</td>
                <td>{new Date(createdAt).toLocaleDateString()}</td>
                <td>{address}</td>
                <td>
                  <button
                    className={styles.detailsButton}
                    onClick={() => showOrderDetails(order)}
                  >
                    Details
                  </button>
                  <button
                    className={styles.detailsButton}
                    onClick={() => showCardDetails(card)}
                  >
                    Card Details
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteOrder(_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selectedOrder && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
            <h2>Order Details</h2>
            <p>
              <strong>Customer:</strong>{" "}
              {`${selectedOrder.user.firstName} ${selectedOrder.user.lastName}`}
            </p>
            <p>
              <strong>Email:</strong> {selectedOrder.user.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedOrder.user.phone}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${selectedOrder.cartItems.address.streetAddress}, ${selectedOrder.cartItems.address.aptSteFloor} ${selectedOrder.cartItems.address.aptSteFloorNumber}, ${selectedOrder.cartItems.address.country} - ${selectedOrder.cartItems.address.zipCode}`}
            </p>
            <h3>Products:</h3>

            <CartCard
              items={selectedOrder.cartItems.items}
              selectedProductIndex={selectedProductIndex}
            />

            {selectedOrder.cartItems.items.length > 1 && (
              <div>
                <button
                  onClick={handlePrevProduct}
                  disabled={selectedProductIndex === 0}
                >
                  Prev
                </button>
                <button
                  onClick={handleNextProduct}
                  disabled={selectedProductIndex === selectedOrder.cartItems.items.length - 1}
                >
                  Next
                </button>

              </div>
            )}
            <p>
              <strong>Total Quantity:</strong>{" "}
              {selectedOrder.cartItems.items.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </p>
            <p>
              <strong>Total Price:</strong> $
              {selectedOrder.cartItems.totalAmount}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <p>
              <strong>Order Date:</strong>{" "}
              {new Date(selectedOrder.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}

      {showCardPopup && selectedCard && (
        <CardPopup cardData={selectedCard} onClose={closeCardPopup} />
      )}
    </div>
  );
};

export default TableComponent;