import React from "react";
import { useParams } from "react-router-dom";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "./AddToCartButton";
import { useState, useEffect } from "react";

const ItemDetailPage = ({ items, addToCart }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container item-detail-wrapper">
      <div className="Item-image">
        <img src={item.image} alt={`${item.name} image}`} />
      </div>
      <div className="Item-info">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        <br />
        <AddToCartButton
          itemId={item.id}
          quantity={quantity + item.quantity}
          addToCart={addToCart}
        />
      </div>
    </main>
  );
};

export default ItemDetailPage;
