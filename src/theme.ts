import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111111",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#111111",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9FAFB",
    },
    text: {
      primary: "#111111",
      secondary: "#6B7280",
    },
    divider: "#E5E7EB",
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "always",
      },
      styleOverrides: {
        root: {
          color: "#111111",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
