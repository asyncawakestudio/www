import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router";

import Layout from "./components/Layout";
import { Home, Portfolio, Privacy, Terms, Zettel } from "./screens";
import theme from "./theme";

import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Retired pages (#/about, #/blog/...) fall back to Home. */}
              <Route path="*" element={<Home />} />
            </Route>

            <Route path="/service/zk/:hash?" element={<Zettel />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
