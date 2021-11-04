import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Font } from "..";
import { logo } from "../../images";

const useStyles = makeStyles((theme) => ({
  constainer: {
    paddingLeft: 30,
    paddingBottom: 150,
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
      <Typography className={classes.description}>
        Stake your $GHOUL towards projects within the ecosystem to earn their governance and utility tokens.
      </Typography>
      <div className={classes.btnarea}>
        <div className={classes.btnsWrapper}>

          <a href="/ecosystem" className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.btnCommon} ${classes.downloadBtn}`}
            >
              View Ecosystem
            </Button>
          </a>
        </div>

        <div className={classes.btnsWrapper}>

          <a href="/roadmap" className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.btnCommon} ${classes.downloadBtn}`}
            >
              View Roadmap
            </Button>
          </a>
        </div>
       
      </div>
      

      
    </div>
  );
};
