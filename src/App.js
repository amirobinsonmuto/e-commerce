import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { data } from "./data";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState(data);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const addToCart = (itemId, newQuantity) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, isInCart: true, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop items={items} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart items={items} handleQuantityChange={handleQuantityChange} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
