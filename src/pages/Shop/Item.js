import React from "react";

const Item = ({ item }) => {
  return (
    <div className="grid-item">
      <img src={item.image} alt={`${item.name} image}`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Item;
