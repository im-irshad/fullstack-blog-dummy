import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
import CreateBlog from "./pages/CreateBlog";

const sections = [
  { title: "Technology", url: "./Tech" },
  { title: "Design", url: "./Design" },
  { title: "Culture", url: "./Culture" },
  { title: "Business", url: "./Business" },
  { title: "Politics", url: "./Politics" },
  { title: "Opinion", url: "./Opinion" },
  { title: "Science", url: "./Science" },
  { title: "Health", url: "./Health" },
  { title: "Style", url: "./Style" },
  { title: "Travel", url: "./Travel" },
];

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <BrowserRouter>
          <Header title="Blog" sections={sections} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Culture" element={<Culture />} />
            <Route path="/Tech" element={<Technolog />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Politics" element={<Politics />} />
            <Route path="/Opinion" element={<Opinion />} />
            <Route path="/Science" element={<Science />} />
            <Route path="/Health" element={<Health />} />
            <Route path="/Style" element={<Style />} />
            <Route path="/Travel" element={<Travel />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newblog" element={<CreateBlog />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
