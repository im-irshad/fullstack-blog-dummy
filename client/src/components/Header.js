import React, { Fragment } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
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
        <Button size="small">My Blogs</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          {title}
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
            <Link
              to={section.url}
              key={section.title}
              color="inherit"
              variant="body2"
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
      </Toolbar>
    </Fragment>
  );
}

export default Header;
