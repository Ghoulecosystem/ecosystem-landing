import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { flyingIcon } from "../../images";
import { flyingIcon1 } from "../../images";
import { Lottie } from "..";
import ghoulfly from "./ghoul_fly.json";
import ghoulfly1 from "./ghoul_fly1.json";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 50,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },

}));

export const StackRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
                    <Lottie
                element={ghoulfly}
                defaultElement={
                  <img
                    className={classes.flyingIcon}
                    src={flyingIcon}
                    alt="Ghoul Staking"
                  />
                } 
              />      
                    <Lottie
                element={ghoulfly1}
                defaultElement={
                  <img
                    className={classes.flyingIcon1}
                    src={flyingIcon}
                    alt="Ghoul Staking"
                  />
                } 
              />
    </div>
  );
};
