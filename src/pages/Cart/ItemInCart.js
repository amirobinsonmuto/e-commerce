import React from "react";
import QuantityButton from "../../components/QuantityButton";
import { useState } from "react";

const ItemInCart = ({ item, handleQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className="cart-item">
      <img src={item.image} alt={`${item.name} image}`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <p>Quantity:{item.quantity}</p>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
};

export default ItemInCart;
