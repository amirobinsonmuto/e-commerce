import React from "react";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

const Item = ({ item, addToCart }) => {
  const quantity = 1;

  return (
    <div className="grid-item item" data-testid="item">
      <Link to={`/e-commerce/shop/${item.id}`}>
        <img src={item.image} alt={`${item.name} image`} />
        <h2>{item.name}</h2>
        <p>{`$${item.price}`}</p>
        <p>LEARN MORE</p>
      </Link>
      <AddToCartButton
        itemId={item.id}
        quantity={quantity}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Item;
