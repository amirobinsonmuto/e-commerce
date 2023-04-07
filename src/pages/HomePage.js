import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main data-testid="home-page">
      <section className="hero">
        <div className="hero-container">
          <h1>
            Discover the Healing Power
            <br />
            of Essential Oils
          </h1>
          <p>
            Shop our collection of pure, therapeutic-grade essential oils and
            blends.
          </p>
          <Link to="/shop">
            <button className="button">Shop Now</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
