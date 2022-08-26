import React from "react";
import axios from "axios";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  Alert,
  Button,
  Collapse,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import MainFeaturedPost from "../components/MainFeaturedPost";
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function CreateBlog() {
  const mainFeaturedPost = {
    title: "Add New Blog",
    description:
      "Create a new blog and share with the world. You can add a new blog or edit an existing blog.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "",
  };

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [body, setBody] = React.useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "category",
      description: "",
    },
    validationSchema,
    onSubmit: (values, action) => {
      axios.post("http://localhost:5000/api/blogs/new", values).then((res) => {
        setStatus("Blog created successfully");
        console.log(status);
        action.resetForm({
          values: { title: "", category: "category", description: "" },
        });
        setOpen(true);
      });
    },
  });
  return (
    <React.Fragment>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {status && (
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Block Created Succesfully!
              </Alert>
            </Collapse>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  error={
                    formik.touched.title && formik.errors.title ? true : false
                  }
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  name="category"
                  label="category"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                >
                  <MenuItem value="category">Select Category</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Politics">Politics</MenuItem>
                  <MenuItem value="Style">Style</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
                  <MenuItem value="Culture">Culture</MenuItem>
                  error=
                  {formik.touched.category && formik.errors.category
                    ? true
                    : false}
                  helperText={formik.touched.category && formik.errors.category}
                </Select>
              </Grid>
              <Grid item xs={12} sm={12}>
                {/* <TextField
                  multiline
                  rows={8}
                  fullWidth
                  label="Description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  error={
                    formik.touched.description && formik.errors.description
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }/> */}
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box>
                  <ReactQuill
                    style={{
                      height: "500px",
                      display: "inline-block",
                      width: "100%",
                    }}
                    placeholder="Enter Blog Description"
                    label="description"
                    name="description"
                    theme="snow"
                    value={formik.values.description}
                    onChange={(e) => (formik.values.description = e)}
                    error={
                      formik.touched.description && formik.errors.description
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default CreateBlog;
