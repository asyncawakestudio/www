import { Box, Link, Typography } from "@mui/material";

export default function Privacy() {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography data-testid="privacy-title" variant="h4">
        Privacy Policy
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
        Last updated 2026-07-09
      </Typography>
      <br />

      <Typography variant="h6">Data we collect</Typography>
      <Typography variant="body1">
        Async Awake Studio does not require an account to use this site, and
        this site does not set cookies or use third-party analytics or
        advertising trackers.
      </Typography>
      <br />

      <Typography variant="h6">The Zettelkasten tool</Typography>
      <Typography variant="body1">
        Content you write in the <Link href="#/service/zk">Zettelkasten</Link>{" "}
        tool is encoded directly into the page URL and kept in your browser. It
        is never transmitted to or stored on our servers — anyone you share a
        link with can read what that link encodes, so treat links as you would
        any other shared document.
      </Typography>
      <br />

      <Typography variant="h6">Hosting</Typography>
      <Typography variant="body1">
        This site is hosted on GitHub Pages. GitHub may collect standard web
        server logs (such as IP address and browser type) in the course of
        serving the site; that collection is governed by{" "}
        <Link
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub's own privacy statement
        </Link>
        .
      </Typography>
      <br />

      <Typography variant="h6">Changes</Typography>
      <Typography variant="body1">
        If this policy changes, the update will be reflected on this page. For
        questions, see <Link href="#/contact">Contact</Link>.
      </Typography>
    </Box>
  );
}
