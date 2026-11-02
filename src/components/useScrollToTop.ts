import { useEffect } from "react";

// useScrollToTop starts a standalone page at the top, rather than at the
// scroll position carried over from the one-page site.
export default function useScrollToTop() {
  useEffect(() => {
    document.scrollingElement?.scrollTo?.(0, 0);
  }, []);
}
