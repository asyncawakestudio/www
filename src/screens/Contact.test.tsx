import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Contact from "./Contact";

describe("Contact", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <Contact />
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders title", () => {
    expect(screen.getByTestId("contact-title").textContent).toBe("Contact");
  });

  it("renders renders github link", () => {
    expect(screen.getByTestId("contact-github").textContent).toBe(
      "github.com/ayushmanchhabra",
    );
  });

  afterEach(() => {
    unMount();
  });
});
