import React from "react";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "../../components/AddToCartButton";
import { useState } from "react";

const Item = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="grid-item">
      <img src={item.image} alt={`${item.name} image}`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton
        itemId={item.id}
        quantity={quantity}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Item;
