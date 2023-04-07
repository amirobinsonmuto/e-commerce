import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-col-content">
            <h3>About Us</h3>
            <p>
              Discover the healing power of essential oils with our pure,
              therapeutic-grade blends. Shop now for affordable, sustainable
              products that promote physical, emotional, and spiritual
              wellbeing. Take control of your health today.
            </p>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-content">
            <h3>Customer Service</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-content">
            <h3>My Account</h3>
            <ul>
              <li>My Orders</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-content">
            <h3>Follow Us</h3>
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
