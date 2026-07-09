import { Box, Link, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography data-testid="contact-title" variant="h4">
        Contact
      </Typography>
      <br />
      <Typography data-testid="contact-content" variant="body1">
        The best way to reach Async Awake Studio is through GitHub — open an
        issue on a relevant repository, or get in touch via the profile below.
      </Typography>
      <br />
      <Link
        data-testid="contact-github"
        href="https://github.com/ayushmanchhabra"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/ayushmanchhabra
      </Link>
    </Box>
  );
}
