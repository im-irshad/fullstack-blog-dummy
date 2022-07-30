import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";
import post1 from "../blog-post.1.md";

function Main(props) {
  let [content, setContent] = React.useState({ md: "" });

  React.useEffect(() => {
    fetch(post1)
      .then((res) => res.text())
      .then((md) => {
        setContent({ md });
      });
  }, []);

  console.log(props);
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Markdown className="markdown" children={content.md}></Markdown>
    </Grid>
  );
}

export default Main;
