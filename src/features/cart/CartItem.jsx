import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>Price: ₹{item.price}</p>
      <label>
        Quantity: 
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </label>
      <button onClick={handleRemove}>Remove</button>
      <p>Total: ₹{item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
