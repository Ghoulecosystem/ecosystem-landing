import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { floatingIcon } from "../../images";
import { Lottie } from "..";
import floating from "./floating_anim.json";
import { Content } from "./Content";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 125,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
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
        <Grid container>
          <Grid item md={6} xs={12}>

              <Lottie
                element={floating}
                defaultElement={
                  <img
                    className={classes.floatingIcon}
                    src={floatingIcon}
                    alt="Ghoul Tokenomics"
                  />
                } 
              />
          </Grid>
          <Grid item md={6} xs={12}>
            <Content />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
