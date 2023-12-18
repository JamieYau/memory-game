import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders Header", () => {
    render(<App/>);
    expect(screen.getByText("Memory Game")).toBeInTheDocument();
    screen.debug();
  });
});
