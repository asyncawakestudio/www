import { Box, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ textAlign: "left", py: { xs: 6, md: 10 } }}>
      <Typography data-testid="home-title">
        Async Awake Studio creates secure, performant, accessible, responsive
        and compliant (SPARC) applications. Reach out at{" "}
        <Link href="mailto:contact@asyncawake.studio">
          contact@asyncawake.studio
        </Link>
      </Typography>
    </Box>
  );
}
