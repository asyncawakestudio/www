import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Layout from "./Layout";

describe("Layout", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>content</div>} />
          </Route>
        </Routes>
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders brand link", () => {
    expect(screen.getByTestId("layout-brand").textContent).toBe(
      "Async Awake Studio",
    );
  });

  it("renders renders nav links", () => {
    expect(screen.getByTestId("layout-nav-home").textContent).toBe("Home");
    expect(screen.getByTestId("layout-nav-blog").textContent).toBe("Blog");
    expect(screen.getByTestId("layout-nav-about").textContent).toBe("About");
    expect(screen.getByTestId("layout-nav-contact").textContent).toBe(
      "Contact",
    );
  });

  it("renders renders footer links", () => {
    expect(screen.getByTestId("layout-footer-privacy").textContent).toBe(
      "Privacy Policy",
    );
    expect(screen.getByTestId("layout-footer-terms").textContent).toBe(
      "Terms of Use",
    );
    expect(screen.getByTestId("layout-footer-github").textContent).toBe(
      "GitHub",
    );
  });

  it("renders renders outlet content", () => {
    expect(screen.getByText("content")).toBeTruthy();
  });

  afterEach(() => {
    unMount();
  });
});
