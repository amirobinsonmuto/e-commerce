import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
  test("renders the hero section with correct content", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const heroTitle = screen.getByText(/Discover the Healing Power/i);
    const heroSubtitle = screen.getByText(
      /Shop our collection of pure, therapeutic-grade essential oils and blends./i
    );
    const shopButton = screen.getByRole("button", { name: /Shop Now/i });

    expect(heroTitle).toBeInTheDocument();
    expect(heroSubtitle).toBeInTheDocument();
    expect(shopButton).toBeInTheDocument();
  });
});
