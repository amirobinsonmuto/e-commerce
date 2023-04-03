import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li className="fa-shopping-cart">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
