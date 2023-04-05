import React from "react";
import { useParams } from "react-router-dom";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

const ItemDetailPage = ({ items, addToCart }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <main className="container item-page-wrapper">
      <div class="Item-image">
        <img src={item.image} alt={`${item.name} image}`} />
      </div>
      <div class="Item-info">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <label>{`Quantity: ${item.quantity}`}</label>
      </div>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <br />
      <AddToCartButton
        itemId={item.id}
        quantity={quantity}
        addToCart={addToCart}
      />
    </main>
  );
};

export default ItemDetailPage;
