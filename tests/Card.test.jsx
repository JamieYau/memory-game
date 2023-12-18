import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PlaceholderImg from "../src/assets/placeholder.png";
import Card from "../src/components/Card";

describe("Card", () => {
  it("renders card with image", () => {
    const { getByAltText } = render(
      <Card imageUrl={PlaceholderImg} name="One" onClick={() => {}} />
    );

    const imageElement = getByAltText("One");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", PlaceholderImg);
  });

  it("renders card with text", () => {
    const mockName = "One";
    const { getByText } = render(
      <Card imageUrl={PlaceholderImg} name={mockName} onClick={() => {}} />
    );

    const nameElement = getByText(mockName);

    expect(nameElement).toBeInTheDocument();
    screen.debug();
  });
});
