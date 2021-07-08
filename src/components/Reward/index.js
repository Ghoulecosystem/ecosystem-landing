import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Footer, JoinCommunity } from "..";
import { RewardLeftSide } from "./RewardLeftSide";
import { RewardRightSide } from "./RewardRightSide";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    [theme.breakpoints.up("md")]: {
      minHeight: 783,
    },
  },
  container: {
    paddingTop: 300,
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
    },
  },
  ghostrewardbgVector: {
    position: "absolute",
    top: 150,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Reward = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 25, position: "relative" }}>
      <div className={classes.maincontainer}>
        <div className={classes.container}>
          <div className="container">
            <Grid container>
              <Grid item md={6} sm={12} xs={12}>
                <RewardLeftSide />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <RewardRightSide />
              </Grid>
            </Grid>
          </div>
        </div>
        <JoinCommunity />
        <Footer style={{ paddingTop: 50 }} />
      </div>
    </div>
  );
};
