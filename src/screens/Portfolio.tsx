import { Box, Link, Typography } from "@mui/material";

import useScrollToTop from "../components/useScrollToTop";

type Project = {
  name: string;
  category: Category;
  description: string;
  href: string;
};

// Categories render in this order; empty ones are hidden.
const CATEGORIES = ["Client projects", "Products", "Open source", "Tools"];
type Category = (typeof CATEGORIES)[number];

const PROJECTS: Project[] = [
  {
    name: "MailVet",
    category: "Products",
    description: "An API that identifies disposable email addresses.",
    href: "https://verify.asyncawake.studio",
  },
  {
    name: "Surface",
    category: "Open source",
    description:
      "Attack surface management: discover the subdomains, IPs, open ports and certificates a domain exposes.",
    href: "https://github.com/asyncawakestudio/surface",
  },
  {
    name: "Zettelkasten",
    category: "Tools",
    description:
      "A free note-taking tool that keeps your notes in the link, not on a server.",
    href: "#/service/zk",
  },
];

export default function Portfolio() {
  useScrollToTop();

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography data-testid="portfolio-title" variant="h4">
        Portfolio
      </Typography>
      {CATEGORIES.map((category) => {
        const projects = PROJECTS.filter((p) => p.category === category);
        if (projects.length === 0) return null;
        return (
          <Box key={category} sx={{ mt: 4 }}>
            <Typography variant="h6" component="h3">
              {category}
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              {projects.map((project) => {
                const external = project.href.startsWith("http");
                return (
                  <Box
                    key={project.name}
                    data-testid={`portfolio-${project.name.toLowerCase()}`}
                    sx={{
                      p: 2.5,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 1,
                      bgcolor: "background.paper",
                    }}
                  >
                    <Link
                      href={project.href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      sx={{ fontWeight: 700 }}
                    >
                      {project.name}
                    </Link>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "text.secondary" }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
