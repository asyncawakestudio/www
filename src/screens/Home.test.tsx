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
    expect(screen.getByTestId("home-title").textContent).toBe(
      "Async Awake Studio",
    );
  });

  it("renders renders subtitle", () => {
    expect(screen.getByTestId("home-content").textContent).toContain("SPARC");
  });

  it("renders renders posts link", () => {
    expect(screen.getByTestId("home-posts").textContent).toBe("Read the blog");
  });

  it("renders renders about link", () => {
    expect(screen.getByTestId("home-about").textContent).toBe(
      "About the studio",
    );
  });

  afterEach(() => {
    unMount();
  });
});
