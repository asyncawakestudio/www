import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Home from "./Home";

describe("Home", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <Home />
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders title", () => {
    expect(screen.getByTestId("home-title").textContent).toContain(
      "Async Awake Studio creates secure, performant, accessible, responsive and compliant (SPARC) applications.",
    );
  });

  it("links to the contact email", () => {
    expect(
      screen.getByRole("link", { name: "contact@asyncawake.studio" }),
    ).toHaveAttribute("href", "mailto:contact@asyncawake.studio");
  });

  afterEach(() => {
    unMount();
  });
});
