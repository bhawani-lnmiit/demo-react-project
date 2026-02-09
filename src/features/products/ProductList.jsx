import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const productsData = [
  { id: 1, name: "Aloe Vera", price: 250 },
  { id: 2, name: "Snake Plant", price: 300 },
  { id: 3, name: "Peace Lily", price: 400 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [products] = useState(productsData);

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list">
      <h1>Plant Shop Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
