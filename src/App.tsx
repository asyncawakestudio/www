import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import {
  About,
  Author,
  Contact,
  Home,
  Post,
  Privacy,
  Terms,
  Zettel,
} from "./screens";
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              <Route path="/blog/post" element={<Post />} />
              <Route path="/blog/post/:date" element={<Post />} />

              <Route path="/blog/author" element={<Author />} />
              <Route path="/blog/author/:name" element={<Author />} />
            </Route>

            <Route path="/service/zk/:hash?" element={<Zettel />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
