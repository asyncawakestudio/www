import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Privacy from "./Privacy";

describe("Privacy", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <Privacy />
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders title", () => {
    expect(screen.getByTestId("privacy-title").textContent).toBe(
      "Privacy Policy",
    );
  });

  afterEach(() => {
    unMount();
  });
});
