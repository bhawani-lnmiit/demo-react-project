import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost for a single item
  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1
                        })
                      )
                    }
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <p className="item-total">
                  Item Total: ₹
                  {calculateItemTotal(item.price, item.quantity)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL CART AMOUNT */}
          <h2 className="total-amount">
            Total Cart Amount: ₹{calculateTotalAmount()}
          </h2>

          {/* ACTION BUTTONS */}
          <div className="cart-actions">
            <button
              className="continue-btn"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
