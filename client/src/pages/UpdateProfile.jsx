import { CssBaseline, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Model1 from "../components/Model1";

function UpdateProfile() {
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          component={Paper}
          elevation={6}
          square
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
        >
          <Model1 props={{ name: "change Name " }} />
        </Grid>
        <Grid
          item
          mt={2}
          xs={12}
          component={Paper}
          elevation={6}
          square
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Model1 props={{ name: "change Email" }} />
        </Grid>

        <Grid
          item
          mt={2}
          xs={12}
          component={Paper}
          elevation={6}
          square
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Model1 props={{ name: "change Password" }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default UpdateProfile;
