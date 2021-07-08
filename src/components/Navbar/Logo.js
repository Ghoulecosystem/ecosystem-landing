import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { logo } from "../../images";
import { Font } from "..";

const useStyles = makeStyles((theme) => ({
  logoArea: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    overflow: "visible",
    [theme.breakpoints.down("xs")]: {
      width: 20,
      height: 20,
    },
  },
  logoText: {
    marginLeft: 9,
    fontSize: Font.size25,
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size16,
      marginLeft: 5,
    },
  },
}));

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoArea}>
      <Avatar alt="Logo" src={logo} className={classes.logo} />
      <Typography className={classes.logoText}>Ghoul</Typography>
    </div>
  );
};
