import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);

  // Total cart amount calculation
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h2>Total Cart Amount: ₹{totalAmount}</h2>

          <div className="cart-buttons">
            <button className="checkout-button">Checkout</button>
            <button className="continue-button" onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
