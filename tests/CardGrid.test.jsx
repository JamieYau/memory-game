import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import PlaceholderImg from "../src/assets/placeholder.png";
import CardGrid from "../src/components/CardGrid";

describe("CardGrid", () => {
  it("renders card grid", () => {
    const mockCards = [
      { id: 1, name: "One", imageUrl: PlaceholderImg },
      { id: 2, name: "Two", imageUrl: PlaceholderImg },
      { id: 3, name: "Three", imageUrl: PlaceholderImg },
    ];
    const { getByAltText } = render(<CardGrid cards={mockCards} />);

    const cardOne = getByAltText("One");
    const cardTwo = getByAltText("Two");
    const cardThree = getByAltText("Three");

    expect(cardOne).toBeInTheDocument();
    expect(cardTwo).toBeInTheDocument();
    expect(cardThree).toBeInTheDocument();
  });
});
