import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { Font } from "..";
import { StackLeftSide } from "./StackLeftSide";
import { StackRightSide } from "./StackRightSide";
import { stakeGhoulBg } from "../../images";

const useStyles = makeStyles((theme) => ({
  body: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  mainarea: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${stakeGhoulBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  maincontainer: {
    paddingTop: 50,
    paddingBottom: 0,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },

  title: {
    fontSize: Font.l,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
      width: "100%",
      lineHeight: 1.2,
    },
  },

}));

export const StakeGhoul = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.mainarea}>
        <div className="container">
        <Typography className={classes.title}>Ghoul Staking</Typography>
          <Grid container className={classes.maincontainer}>
            <Grid item md={6} sm={12} xs={12}>
              <StackLeftSide />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <StackRightSide />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
