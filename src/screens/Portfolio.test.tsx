import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Portfolio from "./Portfolio";

describe("Portfolio", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <Portfolio />
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders title", () => {
    expect(screen.getByTestId("portfolio-title").textContent).toBe("Portfolio");
  });

  it("renders projects", () => {
    expect(screen.getByTestId("portfolio-mailvet").textContent).toContain(
      "MailVet",
    );
    expect(screen.getByTestId("portfolio-surface").textContent).toContain(
      "Surface",
    );
    expect(screen.getByTestId("portfolio-zettelkasten").textContent).toContain(
      "Zettelkasten",
    );
  });

  it("hides categories with no projects", () => {
    expect(screen.queryByText("Client projects")).toBeNull();
  });

  afterEach(() => {
    unMount();
  });
});
