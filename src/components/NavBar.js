import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = ({ cartCount }) => {
  return (
    <nav role="navigation">
      <Link to="/e-commerce">
        <img src={logo} className="logo" alt="Samy Essential Oils Logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/e-commerce">Home</Link>
        </li>
        <li>
          <Link to="/e-commerce/shop">Shop</Link>
        </li>
        <li className="fa-shopping-cart">
          <Link to="/e-commerce/cart">
            <FaShoppingCart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
