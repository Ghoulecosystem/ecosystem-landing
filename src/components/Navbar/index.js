import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

import { Logo } from "./Logo";
import { darkpaper } from "../../data";
import { Hamburger } from "./Hamburger";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    margin: "auto",
    maxWidth: 1110,
    minHeight: 80,
    color: "#fff",
    backgroundColor: "#16161A",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      minHeight: 70,
      padding: "0 10px",
    },
  },
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    a: {
      marginRight: 10,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menubarLink: {
    marginRight: 20,
  },
}));

export const Navbar = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navContainer}>
        <Link className="routerlink" to="/">
          <Logo />
        </Link>
        <div className={classes.menubar}>
          <Link className={`${classes.menubarLink} routerlink`} to="/#">
            Home
          </Link>          
          <Link className={`${classes.menubarLink} routerlink`} to="/#tokenomics">
            Tokenomics
          </Link>
          <Link className={`${classes.menubarLink} routerlink`} to="/ecosystem">
            Ecosystem
          </Link>          
          <Link className={`${classes.menubarLink} routerlink`} to="/roadmap">
            Roadmap
          </Link>
          <Link className={`${classes.menubarLink} routerlink`} to="https://PoltergeistLabs.redbubble.com">
            Shop
          </Link>          

        </div>
        <Hamburger {...props} />
      </div>
    </>
  );
};
