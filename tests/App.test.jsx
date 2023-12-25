import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import App from "../src/App";
import { fetchNBAGifs } from "../src/services/api";

vi.mock("../src/services/api");

describe("App", () => {
  beforeEach(() => {
    fetchNBAGifs.mockResolvedValue([
      { id: "1", name: "Card 1", imageUrl: "url1" },
      { id: "2", name: "Card 2", imageUrl: "url2" },
    ]);
  });

  afterEach(() => {
    fetchNBAGifs.mockRestore();
  });

  // renders StartScreen component when difficulty is null
  it("should render StartScreen component when difficulty is null", () => {
    const { getByText } = render(<App />);
    expect(getByText("Memory Game")).toBeInTheDocument();
  });
});
