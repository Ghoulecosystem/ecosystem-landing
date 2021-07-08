import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Font } from "..";
import { logo } from "../../images";


const useStyles = makeStyles((theme) => ({
  titleSvg: {
    width: "50%",
    marginTop: 35,
    display: "flex",
    alignItems: "center",
    fill: "#FFFFFE",
    color: theme.palette.secondary.textColor,
    cursor: "pointer",
    transform: "translateY(0)",
    transition: "all .2s",
    // "&:hover": {
    //   transform: "translateX(10px)",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  title: {
    fontSize: Font.sm,
    color: "#FFFFFF",
    paddingRight: 14,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 10,
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




}));

export const BtnWithArrow = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.titleSvg} style={{ ...props.style }}>
      <Typography className={classes.title}>{props.title}</Typography>
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

        </div>

      </div>
    </div>
  );
};
