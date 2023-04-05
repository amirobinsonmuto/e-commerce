import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              dui vel metus sagittis facilisis. Nam ultrices, sapien non blandit
              gravida, lorem enim blandit arcu, eget hendrerit urna arcu at
              mauris.
            </p>
          </div>
          <div className="footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>My Account</h4>
            <ul>
              <li>My Orders</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
