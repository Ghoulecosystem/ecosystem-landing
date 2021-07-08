import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import { SocialIcon, Font } from "..";
import { logo } from "../../images";
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
    fontSize: Font.l,
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
    width: 430,
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
    width: "196px",
    height: "48px",
    borderRadius: 8,
    marginLeft: 16,
    textTransform: "capitalize",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "180px",
      fontSize: Font.size12,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
      width: "calc(100% - 25px)",
    },
  },
  downloadBtn: {
    width: 160,
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
        Privacy Focused Ecosystem{" "}
        <span className={classes.title2}>& Untraceable Stablecoin</span>
      </Typography>
      <Typography className={classes.description}>
        <span className={classes.mintFocus}>Mint $GHOSTDAI</span> using popular
        Stablecoins.
      </Typography>
      <div className={classes.btnarea}>
        <div className={classes.btnsWrapper}>
          <a
            href="https://app.uniswap.org/#/swap?use=V2&&exactAmount=36.99&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x3bb86d867a9f3addf994cdadb210fa82f0d4157a"
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
              Buy $GHOUL{" "}
            </Button>
          </a>

          <a href={darkpaper} className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.btnCommon} ${classes.downloadBtn}`}
            >
              Read Darkpaper
            </Button>
          </a>
        </div>
        <div className={classes.btnsWrapper}>
          <a href="#soon" className={classes.btnLink}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnCommon}
              style={{ width: 225 }}
            >
              Launch App{" "}
              <span style={{ fontSize: 10, marginLeft: 5 }}>coming soon</span>
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
