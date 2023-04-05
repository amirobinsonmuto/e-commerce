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
  const [subtotal, setSubtotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [shipping, setShipping] = useState(0.0);

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

  const removeItem = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, isInCart: false, quantity: 0 };
        }
        return item;
      });
    });
  };

  // get subtotal
  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      newTotal += item.price * item.quantity;
    }
    let limitedNum = newTotal;
    setSubtotal(limitedNum);
  }, [items]);

  // get shipping
  useEffect(() => {
    subtotal < 50 && subtotal > 0 ? setShipping(15.0) : setShipping(0);
  }, [subtotal]);

  // get tax
  useEffect(() => {
    setTaxes((subtotal + shipping) * 0.12);
  }, [subtotal, shipping]);

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
              <Cart
                items={items}
                handleQuantityChange={handleQuantityChange}
                removeItem={removeItem}
                subtotal={subtotal}
                taxes={taxes}
                shipping={shipping}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
