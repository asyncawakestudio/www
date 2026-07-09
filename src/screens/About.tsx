import { Box, Link, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography data-testid="about-title" variant="h4">
        About
      </Typography>
      <br />
      <Typography data-testid="about-content" variant="body1">
        Async Awake Studio is an independent software engineering studio founded
        by Ayushman Chhabra. We design and build web applications with a focus
        on security, performance, accessibility and compliance, and we publish
        our engineering and security research on the blog.
      </Typography>
      <br />
      <Typography variant="body1">
        Alongside client work, the studio maintains small, free, open tools such
        as the <Link href="#/service/zk">Zettelkasten</Link> note-taking
        service, built to the same SPARC standard we hold client work to.
      </Typography>
      <br />
      <Typography variant="body1">
        For engagements or questions, see the{" "}
        <Link href="#/contact">Contact</Link> page.
      </Typography>
    </Box>
  );
}
