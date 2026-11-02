import { Box, Link, Typography } from "@mui/material";
import { Outlet } from "react-router";

const NAV_LINKS = [
  { label: "Home", href: "#/" },
  { label: "Portfolio", href: "#/portfolio" },
  { label: "Contact", href: "mailto:contact@asyncawake.studio" },
];

const barSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 2,
  maxWidth: 960,
  mx: "auto",
  px: 3,
};

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: "appBar",
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ ...barSx, py: 2 }}>
          <Link
            data-testid="layout-brand"
            href="#/"
            underline="none"
            sx={{ color: "text.primary", fontWeight: 700, fontSize: "1.15rem" }}
          >
            Async Awake Studio
          </Link>
          <Box component="nav" sx={{ display: "flex", gap: 3 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                data-testid={`layout-nav-${link.label.toLowerCase()}`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{ flex: 1, width: "100%", maxWidth: 960, mx: "auto", px: 3, py: 5 }}
      >
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          bgcolor: "background.paper",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ ...barSx, py: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {year} Async Awake Studio. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link data-testid="layout-footer-privacy" href="#/privacy">
              Privacy Policy
            </Link>
            <Link data-testid="layout-footer-terms" href="#/terms">
              Terms of Use
            </Link>
            <Link
              data-testid="layout-footer-github"
              href="https://github.com/asyncawakestudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
