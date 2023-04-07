import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home", () => {
  test("renders hero section with title, subtitle, and button", () => {
    render(<HomePage />);

    // check if the hero title is displayed
    const heroTitle = screen.getByText(/Discover the Healing Power/i);
    expect(heroTitle).toBeInTheDocument();

    // check if the hero subtitle is displayed
    const heroSubtitle = screen.getByText(/Shop our collection of pure/i);
    expect(heroSubtitle).toBeInTheDocument();

    // check if the "Shop Now" button is displayed and has a link to /shop
    const shopButton = screen.getByRole("link", { name: /Shop Now/i });
    expect(shopButton).toBeInTheDocument();
    expect(shopButton.getAttribute("href")).toBe("/shop");
  });
});
