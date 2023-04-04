import React from "react";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "../../components/AddToCartButton";
import { useState } from "react";

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    // change the alert negative number to making button inactive later
    quantity > 0 ? setQuantity(quantity - 1) : alert("no negative number");
  };

  return (
    <div className="grid-item">
      <img src={item.image} alt={`${item.name} image}`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <QuantityButton
        quantity={quantity}
        increment={increment}
        decrement={decrement}
      />
      <AddToCartButton />
    </div>
  );
};

export default Item;
