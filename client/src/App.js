import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MainFeaturedPost from "./components/MainFeaturedPost";
import FeaturedPost from "./components/FeaturedPost";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const sections = [
  { title: "Technology", url: "./pages/Blog" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
