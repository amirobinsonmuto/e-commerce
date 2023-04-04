import React from "react";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "../../components/AddToCartButton";

const Item = ({ item }) => {
  return (
    <div className="grid-item">
      <img src={item.image} alt={`${item.name} image}`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <QuantityButton />
      <AddToCartButton />
    </div>
  );
};

export default Item;
