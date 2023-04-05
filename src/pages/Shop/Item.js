import React from "react";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

const Item = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="grid-item">
      <img src={item.image} alt={`${item.name} image}`} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <br />
      <AddToCartButton
        itemId={item.id}
        quantity={quantity}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Item;
