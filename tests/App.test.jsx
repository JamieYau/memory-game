import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
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

  it("renders Header", () => {
    render(<App />);
    expect(screen.getByText("Memory Game")).toBeInTheDocument();
  });
  it("renders Footer", () => {
    render(<App />);
    expect(screen.getByText("Powered by")).toBeInTheDocument();
  });
});
