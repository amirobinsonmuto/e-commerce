import React from "react";
import { useParams } from "react-router-dom";
import QuantityButton from "../../components/QuantityButton";
import AddToCartButton from "./AddToCartButton";
import { useEffect } from "react";
import useCounter from "../../hooks/useCounter";

const ItemDetailPage = ({ items, addToCart }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const { count, increment, decrement } = useCounter(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="container item-detail-wrapper"
      data-testid="item-detail-page"
    >
      <div className="Item-image">
        <img src={item.image} alt={`${item.name} image`} />
      </div>
      <div className="Item-info">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <QuantityButton
          quantity={count}
          increment={increment}
          decrement={decrement}
        />
        <br />
        <AddToCartButton
          itemId={item.id}
          quantity={count}
          addToCart={addToCart}
        />
      </div>
    </main>
  );
};

export default ItemDetailPage;
