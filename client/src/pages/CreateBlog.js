import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  Category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function CreateBlog() {
  const formik = useFormik({
    initialValues: {
      title: "",
      Category: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container component="main" maxWidth="xs">
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
        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
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
            <Grid item>
              <TextField
                label="Category"
                name="Category"
                onChange={formik.handleChange}
                value={formik.values.Category}
                error={
                  formik.touched.Category && formik.errors.Category
                    ? true
                    : false
                }
                helperText={formik.touched.Category && formik.errors.Category}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
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
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default CreateBlog;
