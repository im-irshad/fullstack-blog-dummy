import { CssBaseline, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ProfileUpdateModel from "../components/ProfileUpdateModel";

function UpdateProfile({ user }) {
  console.log(user);
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
          <ProfileUpdateModel props={{ name: "Update Name" }} />
        </Grid>
        <Grid
          item
          mt={2}
          xs={12}
          component={Paper}
          elevation={6}
          square
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          {user.email} <br />
          <ProfileUpdateModel props={{ name: "Update Email" }} />
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
          <ProfileUpdateModel props={{ name: "Update Password" }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default UpdateProfile;
