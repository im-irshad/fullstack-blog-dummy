import {
  Alert,
  Box,
  Button,
  Collapse,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function MyBlogsModel({ props }) {
  const savedValues = {
    title: props.title,
    description: props.description,
    category: "",
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState("");
  const [openNote, setOpenNote] = React.useState(true);
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
    category: "",
  });
  const handleOpen = () => {
    setOpen(true);
    setFormValues(savedValues);
  };
  const formik = useFormik({
    initialValues: formValues || {
      title: "",
      description: "",
      category: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (formValues, action) => {
      console.log("form values .....", formValues);
      axios
        .put(`http://localhost:5000/api/blogs/update/${props.id}`, formValues)
        .then((res) => {
          setStatus("Blog updated successfully");
          action.resetForm({
            values: { title: "", category: "category", description: "" },
          });
          setOpenNote(true);
        });
    },
  });

  const handleSubmit = () => {
    console.log(formValues);
    axios
      .put(`http://localhost:5000/api/blogs/update/${props.id}`, formik.values)
      .then((res) => {
        setStatus("Blog updated successfully");
        setOpenNote(true);
      });
  };
  return (
    <div>
      <Button onClick={handleOpen}>View/Edit Blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="sm" sx={style}>
          <CssBaseline />

          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Edit Blog
            </Typography>
            {status && (
              <Collapse in={openNote}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenNote(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Blog Updated successfully!
                </Alert>
              </Collapse>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                marginTop: 2,
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
                    helperText=
                    {formik.touched.category && formik.errors.category}
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
                    }
                  /> */}
                  <ReactQuill
                    style={{
                      height: "50vh",
                      display: "inline-block",
                      width: "100%",
                      overflow: "scroll",
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
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </div>
  );
}

export default MyBlogsModel;
