import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import About from "./About";

describe("About", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <About />
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders title", () => {
    expect(screen.getByTestId("about-title").textContent).toBe("About");
  });

  it("renders renders content", () => {
    expect(screen.getByTestId("about-content").textContent).toContain(
      "Async Awake Studio",
    );
  });

  afterEach(() => {
    unMount();
  });
});
