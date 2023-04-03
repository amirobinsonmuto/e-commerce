import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
