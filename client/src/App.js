import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Culture from "./pages/Culture";
import Technolog from "./pages/Tech";
import Business from "./pages/Business";
import Design from "./pages/Design";
import Politics from "./pages/Politics";
import Opinion from "./pages/Opinion";
import Science from "./pages/Science";
import Health from "./pages/Health";
import Style from "./pages/Style";
import Travel from "./pages/Travel";

const sections = [
  { title: "Technology", url: "./pages/Tech" },
  { title: "Design", url: "./pages/Design" },
  { title: "Culture", url: "./pages/Culture" },
  { title: "Business", url: "./pages/Business" },
  { title: "Politics", url: "./pages/Politics" },
  { title: "Opinion", url: "./pages/Opinion" },
  { title: "Science", url: "./pages/Science" },
  { title: "Health", url: "./pages/Health" },
  { title: "Style", url: "./pages/Style" },
  { title: "Travel", url: "./pages/Travel" },
];

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Culture" element={<Culture />} />
            <Route path="/pages/Tech" element={<Technolog />} />
            <Route path="/pages/Business" element={<Business />} />
            <Route path="/pages/Design" element={<Design />} />
            <Route path="/pages/Politics" element={<Politics />} />
            <Route path="/pages/Opinion" element={<Opinion />} />
            <Route path="/pages/Science" element={<Science />} />
            <Route path="/pages/Health" element={<Health />} />
            <Route path="/pages/Style" element={<Style />} />
            <Route path="/pages/Travel" element={<Travel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
