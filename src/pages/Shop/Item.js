import React from "react";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="grid-item item">
      <Link to={`/shop/${item.id}`}>
        <img src={item.image} alt={`${item.name} image}`} />
        <h2>{item.name}</h2>
        <p>{`$${item.price}`}</p>
        <p>LEARN MORE</p>
      </Link>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <br />
      <AddToCartButton
        itemId={item.id}
        quantity={quantity + item.quantity}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Item;
