import { Box, Divider, Link, Typography } from "@mui/material";

const PRINCIPLES = [
  {
    letter: "S",
    label: "Secure",
    description: "Threat-modeled from the outset, not bolted on after launch.",
  },
  {
    letter: "P",
    label: "Performant",
    description: "Fast by default, measured against real-world conditions.",
  },
  {
    letter: "A",
    label: "Accessible",
    description: "Usable by everyone, in line with WCAG guidance.",
  },
  {
    letter: "R",
    label: "Responsive",
    description: "Consistent across devices, viewports and networks.",
  },
  {
    letter: "C",
    label: "Compliant",
    description:
      "Built to hold up against the standards your industry requires.",
  },
];

export default function Home() {
  return (
    <Box>
      <Typography
        data-testid="home-title"
        style={{ textAlign: "left" }}
        variant="h4"
      >
        Async Awake Studio
      </Typography>
      <br />
      <Typography
        data-testid="home-content"
        style={{ textAlign: "left" }}
        variant="subtitle1"
      >
        Async Awake Studio is an independent software engineering studio. We
        design and build SPARC applications: secure, performant, accessible,
        responsive and compliant, and we write publicly about the engineering
        and security practices behind that work.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" style={{ textAlign: "left" }}>
          What SPARC means to us
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
          {PRINCIPLES.map((principle) => (
            <Box
              key={principle.letter}
              sx={{ display: "flex", gap: 2, textAlign: "left" }}
            >
              <Typography
                sx={{ fontWeight: 700, color: "secondary.main", minWidth: 24 }}
              >
                {principle.letter}
              </Typography>
              <Typography variant="body2">
                <strong>{principle.label}</strong> — {principle.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          textAlign: "left",
        }}
      >
        <Link data-testid="home-posts" href="#/blog/post">
          Read the blog
        </Link>
        <Link data-testid="home-about" href="#/about">
          About the studio
        </Link>
        <Link data-testid="home-zk" href="#/service/zk">
          Zettelkasten (free tool)
        </Link>
      </Box>
    </Box>
  );
}
