import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { logo2} from "../../images";
import { Font } from "..";

const useStyles = makeStyles(theme => ({
  body: {
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      textAlign: "center",
    },
  },

  list: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  listNumber: {
    padding: "12px 8px",
    borderRadius: 4,
    color: "#56ff99",
    width:"100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "7px 13px",
    },
  },
  listTitle: {
    fontSize: Font.m,
    width: 245,
    marginLeft: 25,
    marginTop: -5,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      lineHeight: 1.2,
    },
  },
  listDescription: {
    marginTop: 20,
    color: theme.palette.secondary.textColor,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 0,
    },
  },
  tokenLogo: {
    height: 50,
    width: 50,
    display: "inline",
    borderRadius: 25,
    marginRight: 10,
    marginBottom: -20,
    border: "2px solid",

    },

}));

export const LeftContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>

      <div>
        <div className={classes.list}>
          <Typography className={classes.listNumber}>
            
            <img alt="Logo" src={logo2} className={classes.tokenLogo}/>$GHOUL
          </Typography>
        </div>
        <Typography className={classes.listDescription}>
          The Super DAO Governance and Utility Token for voting on the general direction the wider Ghoul Ecosystem. 
          $Ghoul stakers can earn the DAO Governance tokens of existing and new products.
          Rewards and benefits increase as roadmap is developed further.
          <br />
          <br />
          <ul>
            <li>Initial Supply: 100,000000 GHOUL</li>
            <li>Burned Supply: 42,991,369 GHOUL</li>
            <li>Locked Team Fund: 15,000,000 GHOUL (Til April 2022)</li>
            <li>Final Supply: 57,008,631 GHOUL</li>
            <li>Circulating Supply: 42,008,631 GHOUL</li>
            <li>
              ETH:
              <a
                style={{ color: "#56ff99", marginLeft:"5px" }}
                href="https://etherscan.io/token/0x3bb86d867a9f3addf994cdadb210fa82f0d4157a"
              >0x3bb86d867a9f3addf994cdadb210fa82f0d4157a
              </a>
            </li>
            <li>
              BSC:
              <a
                style={{ color: "#56ff99", marginLeft:"5px" }}
                href="https://bscscan.com/token/0x171ce6141e7a5980222bc6b757ee2f1f95b3264e"
              >0x171ce6141e7a5980222bc6b757ee2f1f95b3264e
              </a>
            </li>
          </ul>
        </Typography>
      </div>


    </div>
  );
};
