import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import { SocialIcon, Font } from "..";
import { logo, gdailogo } from "../../images";
import { darkpaper } from "../../data";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: Font.l,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: 450,
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: Font.size28,
    },
  },
  title2: {
    fontSize: "30px",
    fontWeight: "normal",
    width: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  description: {
    fontSize: Font.m,
    width: 500,
    color: theme.palette.secondary.textColor,
    paddingTop: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
      width: 380,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: 30,
    },
  },
  btnarea: {
    marginTop: 50,

    marginLeft: -16,
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row",
      justifyContent: "center",
      marginTop: "35px",
      marginLeft: "-8px",
    },
  },
  btnLink: {
    [theme.breakpoints.down("sm")]: {
      "& button": {
        marginTop: "15px",
      },
    },
  },
  btnsWrapper: {
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      width: "100%",
    },
  },
  btnCommon: {
    width: "225px",
    height: "48px",
    borderRadius: 8,
    marginLeft: 16,
    textTransform: "capitalize",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "225px",
      fontSize: Font.size12,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
      width: "calc(100% - 25px)",
    },
  },
  downloadBtn: {
    width: 225,
    border: "1px solid #FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
  },
  mintFocus: {
    color: "#56ff99",
  },
  socialIconGroup: {
    marginTop: 40,
  },
}));

export const PrivacyLeftSide = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>
        GhostDAI (gDAI){" "}<br/>
        <span className={classes.title2}>The Ghoul Ecosystem's Stablecoin Protocol</span>
      </Typography>
      <Typography className={classes.description}>
        <span className={classes.mintFocus}>Borrow $gDAI at 0% interest</span>, backed with collateral of your crypto holdings.
      </Typography>
      <div className={classes.btnarea}>
        <div className={classes.btnsWrapper}>

          <a href="https://app.ghoul.finance" className={classes.btnLink}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnCommon}
              style={{ width: 225 }}
            >
              <img
                src={gdailogo}
                alt="gdai"
                style={{ width: 20, marginRight: 8 }}
              />
              LAUNCH APP{" "}
            </Button>
          </a>         

          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x171ce6141e7a5980222bc6b757ee2f1f95b3264e"
            target="_blank"  rel="noreferrer"
            className={classes.btnLink}
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnCommon}
              style={{ width: 225 }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: 20, marginRight: 8 }}
              />
              BUY $GHOUL{" "}
            </Button>
          </a>


        </div>
        <div className={classes.btnsWrapper}>
          <a href="https://docs.ghoul.finance" className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.btnCommon} ${classes.downloadBtn}`}
            >
              LEARN MORE
            </Button>
          </a>
        </div>
      </div>
      <div className={classes.socialIconGroup}>
        <SocialIcon />
      </div>
    </div>
  );
};
