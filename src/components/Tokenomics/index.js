import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";
import { Font } from "..";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 125,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  },
  title: {
    fontSize: Font.l,
    marginBottom: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      fontSize: Font.size28,
      lineHeight: 1.2,
      marginBottom: 40,
    },
  },
  distributedImg: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      display: "block",
      margin: "0 auto",
    },
  },
}));

export const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>

      <div className="container" id="tokenomics">
      <Typography className={classes.title}>Tokenomics</Typography>
        <Grid container>
          <Grid item md={6} xs={12}>
            <LeftContent />
          </Grid>
          <Grid item md={6} xs={12}>
            <RightContent />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
