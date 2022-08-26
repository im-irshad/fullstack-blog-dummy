import React, { Fragment } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import "../header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { red } from "@mui/material/colors";

const linkClass = {
  color: "red",
  textDecoration: "none",
};

function Header({ sections, title }) {
  const location = useLocation();
  const path = location.pathname;
  const { authState } = useContext(AuthContext);
  console.log(authState);

  const handleClick = () => {
    if (authState.status) {
      localStorage.removeItem("token");
      window.location.reload();
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ marginRight: "1%" }}
          href={"/myblogs/" + authState.id}
          disabled={!authState.status}
        >
          My Blogs
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="/newblog"
          disabled={!authState.status}
          sx={{ marginRight: "1%" }}
        >
          Add New Blog
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="/updateprofile"
          disabled={!authState.status}
        >
          Update Profile
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
          href="/"
        >
          {}
        </Typography>

        <Button
          variant="outlined"
          size="small"
          href="/login"
          sx={{ marginRight: "1%" }}
        >
          {authState && authState.status ? authState.email : "Login"}
        </Button>
        <Button variant="outlined" size="small" onClick={handleClick}>
          {authState && authState.status ? "Logout" : "Signup"}
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {path !== "/signup" &&
          path !== "/login" &&
          sections.map((section) => (
            <NavLink
              to={section.url}
              key={section.title}
              variant="body2"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              {section.title}
            </NavLink>
          ))}
      </Toolbar>
    </Fragment>
  );
}

export default Header;
