import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import logo from "../../images/logo.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Trade Journal
      </Typography>
      <img className={classes.image} src={logo} alt="trades" height="60" />
    </AppBar>
  );
};

export default Navbar;
