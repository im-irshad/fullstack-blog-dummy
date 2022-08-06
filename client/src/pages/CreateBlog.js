import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function CreateBlog() {
  const [status, setStatus] = React.useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "category",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      axios.post("http://localhost:5000/api/blogs/new", values).then((res) => {
        setStatus("Blog created successfully");
        console.log(status);
        //values = formik.initialValues;
        // console.log(values);
      });
    },
  });
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Blog
        </Typography>
        {status && (
          <Alert variant="filled" severity="success">
            {status}
          </Alert>
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
              <TextField
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
                }
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CreateBlog;
