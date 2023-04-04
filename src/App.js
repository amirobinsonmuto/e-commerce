import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { data } from "./data";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState(data);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop items={items} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
