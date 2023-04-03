import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div class="logo">
        <a href="#">Logo</a>
      </div>
      <ul class="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li class="fa-shopping-cart">
          <a href="#">
            <FaShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
