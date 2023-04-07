import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { data } from "./data";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import ItemDetailPage from "./pages/Shop/ItemDetailPage";
import CartPage from "./pages/Cart/CartPage";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState(data);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0.0);
  const [cartCount, setCartCount] = useState(0);

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
          const currentQuantity = item.quantity;
          return {
            ...item,
            isInCart: true,
            quantity: currentQuantity + newQuantity,
          };
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

  // set subtotal
  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      newTotal += item.price * item.quantity;
    }
    setSubtotal(newTotal);
  }, [items]);

  // set shipping when there is a change in subtotal
  useEffect(() => {
    subtotal < 50 && subtotal > 0 ? setShipping(15.0) : setShipping(0);
  }, [subtotal]);

  // set taxes when there is a change in subtotal and shipping
  const taxes = (subtotal + shipping) * 0.12;

  // set cart count when the number of items in the cart changes
  useEffect(() => {
    let cartItems = items.filter((item) => item.isInCart);
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  }, [items]);

  return (
    <>
      <Router>
        <NavBar cartCount={cartCount} />
        <Routes>
          <Route path="/e-commerce" element={<HomePage />} />
          <Route
            path="/e-commerce/shop"
            element={<ShopPage items={items} addToCart={addToCart} />}
          />
          <Route
            path="/e-commerce/shop/:id"
            element={<ItemDetailPage items={items} addToCart={addToCart} />}
          />
          <Route
            path="/e-commerce/cart"
            element={
              <CartPage
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
