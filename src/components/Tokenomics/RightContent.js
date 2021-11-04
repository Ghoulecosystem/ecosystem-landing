import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { logo4, ghostdai } from "../../images";
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
      marginTop: 20,
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

export const RightContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>

      <div>
        <div className={classes.list}>
          <Typography className={classes.listNumber}>
            
            <img alt="Logo" src={logo4} className={classes.tokenLogo}/>$GHOULX
          </Typography>
        </div>
        <Typography className={classes.listDescription}>
          The gDAI DAO Governance Token where holders can create and vote on proposals that manage the mechanics and evolutionary growth of the gDAI Protocol. 
          This protocol is a key component for the rest of the Ghoul Ecosystem.
          <br />
          <br />
          <ul>
            <li>Max Supply: 100,000,000 GHOULX</li>
            <li>Community Distribution: 90,000,000 GHOULX</li>
            <li>Team/Treasury Fund: 10,000,000 GHOULX</li>
            <li>Supply Distribution Period: 48 Months</li>
            <li>Estimated Date to Max Supply: November 2025</li>
            <li>
              BSC:
              <a
                style={{ color: "#56ff99", marginLeft:"5px" }}
                href="https://bscscan.com/token/0xcfc5cf2a73e97401c218b7ce1c594524bd8ba4bf"
              >0xcfc5cf2a73e97401c218b7ce1c594524bd8ba4bf
              </a>
            </li>
          </ul>
        </Typography>
      </div>

      <div>
        <div className={classes.list}>
          <Typography className={classes.listNumber}>
            <img alt="Logo" src={ghostdai} className={classes.tokenLogo}/>$gDAI</Typography>
        </div>
        <Typography className={classes.listDescription}>
          1 gDAI ≈ 1 USD - Stablecoin of the Ghoul Ecosystem, backed with collateral of your crypto holdings. 
          Simply create your personal vault(s) and deposit select tokens to borrow $gDAI with 0% interest, where you pay back on your own timeline. 
          <br />
          <br />
          <ul>
            <li>Max Supply: Variable based on demand and voting by GHOULX holders</li>
            <li>
              BSC:
              <a
                style={{ color: "#56ff99", marginLeft:"5px" }}
                href="https://bscscan.com/address/0xF92b9A2B34efe45a8280629a7DFa404aeE18849f">
                0xF92b9A2B34efe45a8280629a7DFa404aeE18849f
              </a>
            </li>
          </ul>
        </Typography>
      </div>
    </div>
  );
};
