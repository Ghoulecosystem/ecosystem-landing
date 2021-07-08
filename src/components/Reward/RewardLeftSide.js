import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import { Font } from "..";

const useStyles = makeStyles((theme) => ({
  body: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  title: {
    fontSize: Font.l,
    width: 453,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  description: {
    fontSize: Font.m,
    color: theme.palette.secondary.textColor,
    marginTop: 25,
    width: 402,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginBottom: -25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 10,
    },
  },
  btn: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  btnStart: {
    height: 45,
    width: 130,
    borderRadius: 8,
    marginTop: 50,
    border: "1px solid #fff",
    fontSize: Font.size16,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 50,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 40,
      marginBottom: 0,
    },
  },
}));

export const RewardLeftSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.title}>Rewards</Typography>
      <Typography className={classes.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Typography>{" "}
      <div className={classes.btn}>
        <a
          href="/"
          // rel="noreferrer"
          // target="_blank"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.btnStart}
          >
            Click here
          </Button>
        </a>
      </div>
    </div>
  );
};
