import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Font } from "..";
import { background, gdailogo } from "../../images";
import { PrivacyLeftSide } from "./PrivacyLeftSide";


const useStyles = makeStyles(theme => ({
  mainarea: {
    position: "relative",
  },
  mainareaBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    opacity: 0.4,
    pointerEvents: "none",
  },
  privacycontainer: {
    paddingTop: 100,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: 25,
    },
  },
  exchange: {
    height: 73,
    marginRight: 20,
    marginTop: 117,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
  },
  exchangeText: {
    color: "#72757E",
    fontSize: Font.sm,
  },
  exchangeName: {
    display: "flex",
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  exchangeLogo: {
    fontSize: Font.size25,
    color: "#72757E",
    marginRight: 25,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  floatingIcon: {
    width: "100%",
    maxWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
}));

export const PrivacyFocused = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainarea}>
        <div className={classes.mainareaBg} />
        <div className="container" id="soon">
          <Grid container className={classes.privacycontainer}>
            <Grid item lg={8} md={6} sm={12} xs={12}>
              <PrivacyLeftSide />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <img src=""/>
              <img
                src={gdailogo}
                alt="gdai logo"
                style={{ width: 300 }}
              />

            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
