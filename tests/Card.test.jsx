import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PlaceholderImg from "../src/assets/placeholder.png";
import Card from "../src/components/Card";
describe("Card", () => {
  it("renders card with text", () => {
    const mockName = "One";
    const { getByAltText, getByText } = render(
      <Card imageUrl={PlaceholderImg} name={mockName} onClick={() => {}} />
    );

    const imageElement = getByAltText("One");
    const nameElement = getByText(mockName);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", PlaceholderImg);
    expect(nameElement).toBeInTheDocument();
    screen.debug();
  });
});
