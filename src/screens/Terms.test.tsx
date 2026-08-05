import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Terms from "./Terms";

describe("Terms", () => {
  let unMount: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <Router>
        <Terms />
      </Router>,
    );

    unMount = unmount;
  });

  it("renders renders title", () => {
    expect(screen.getByTestId("terms-title").textContent).toBe("Terms of Use");
  });

  afterEach(() => {
    unMount();
  });
});
