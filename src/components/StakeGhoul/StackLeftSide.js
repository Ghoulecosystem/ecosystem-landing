import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Font } from "..";
import { logo } from "../../images";

const useStyles = makeStyles((theme) => ({
  constainer: {
    paddingLeft: 118,
    paddingTop: 250,
    paddingBottom: 250,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingTop: 50,
      paddingBottom: 0,
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
      textAlign: "center",
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
  description: {
    color: theme.palette.secondary.textColor,
    width: 340,
    marginTop: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px auto 0",
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

}));

export const StackLeftSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.constainer} id="staking">
      <Typography className={classes.title}>Staking</Typography>
      <Typography className={classes.description}>
        Stake your GHOUL on Poltergeist Exchange for governance voting and earning rewards within the ecosystem.
      </Typography>
      <div className={classes.btnarea}>
        <div className={classes.btnsWrapper}>

          <a href="/staking" className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.btnCommon} ${classes.downloadBtn}`}
            >
              View Staking Tiers
            </Button>
          </a>
        </div>
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
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: 20, marginRight: 8 }}
              />
              Buy $GHOUL{" "}
            </Button>
          </a>

        </div>

       
      </div>
      

      
    </div>
  );
};
