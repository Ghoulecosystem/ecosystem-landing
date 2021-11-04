import React from "react";
import { Link } from "gatsby";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Font, SocialIcon } from "..";
import { logo } from "../../images";
import { darkpaper } from "../../data";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    margin: "auto",
    maxWidth: 1110,
    minHeight: 90,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      minHeight: 80,
      padding: "0 10px",
    },
  },
  logoAreaContainer: {
    width: 200,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  logoArea: {
    display: "inline-flex",
    alignItems: "center",
  },
  logo: {
    width: 35,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      margin: "0 auto",
    },
  },
  logoText: {
    marginLeft: 17,
    fontSize: Font.size25,
  },
  description: {
    fontSize: Font.size16,
    color: "rgba(255, 255, 255, 0.6)",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("s")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  title: {
    width: 160,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  navbarText: {
    color: "rgba(255, 255, 255, 0.6)",
    paddingTop: 10,
  },
}));

export const Footer = (props) => {
  const classes = useStyles();
  return (
    <div style={{ ...props.style }}>
      <div className={classes.navContainer}>
        <Grid container align="center" justify="center" direction="row">
          <Grid item md={4} sm={12} xs={12}>
            <div className={classes.logoAreaContainer}>
              <div className={classes.logoArea}>
                <img alt="Logo" src={logo} className={classes.logo} />&nbsp;&nbsp;<h3>Ghoul</h3>
              </div>
              <Typography className={classes.description}>
                &copy; Poltergeist Labs
              </Typography>
              <div className={classes.social}>
                <SocialIcon compact={true} />
              </div>
            </div>
            <br />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className={classes.logoAreaContainer} style={{ marginTop: '30px' }}>
              <Typography className={classes.title}>Getting Started</Typography>
              <div className={classes.nav}>
                <Link to="/#tokenomics" className={classes.navbarText}>
                  <Typography>Tokenomics</Typography>
                </Link>                 
                <Link to="/ecosystem" className={classes.navbarText}>
                  <Typography>Ecosystem</Typography>
                </Link>                
                <Link to="/roadmap" className={classes.navbarText}>
                  <Typography>Roadmap</Typography>
                </Link>
                <Link to="https://docs.ghoul.finance" className={classes.navbarText}>
                  <Typography>gDAI Documentation</Typography>
                </Link> 
                <Link to="https://gateway.btfs.io/btfs/QmbxSZCGygHzYgDyaUAYpBKxZAHnz3JgBka5HUcyhk6JXc" className={classes.navbarText}>
                  <Typography>Original Darkpaper</Typography>
                </Link>
                <Link to="https://PoltergeistLabs.redbubble.com" className={classes.navbarText}>
                  <Typography>Shop</Typography>
                </Link>                
              </div>
              <br />
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className={classes.logoAreaContainer} style={{ marginTop: '30px' }}>
              <Typography className={classes.title}>Resources</Typography>
              <div className={classes.nav}>
                <Link to="https://poltergeistlabs.medium.com/how-to-bridge-ghoul-tokens-from-eth-to-bsc-66bd6e11ba59" className={classes.navbarText}>
                  <Typography>Ghoul ETH to BSC Bridge</Typography>
                </Link>
                <Link to="https://pancakeswap.finance/swap?outputCurrency=0x171ce6141e7a5980222bc6b757ee2f1f95b3264e" className={classes.navbarText}>
                  <Typography>Ghoul on Pancakeswap</Typography>
                </Link>
                <Link to="https://bscscan.com/token/0x171ce6141e7a5980222bc6b757ee2f1f95b3264e" className={classes.navbarText}>
                  <Typography>Ghoul BSC Contract</Typography>
                </Link> 
                <Link to="https://etherscan.io/token/0x3bb86d867a9f3addf994cdadb210fa82f0d4157a" className={classes.navbarText}>
                  <Typography>Ghoul ETH Contract</Typography>
                </Link>                

                <Link to="https://coingecko.com/en/coins/ghoul-token" className={classes.navbarText}>
                  <Typography>Ghoul on Coingecko</Typography>
                </Link>                
              </div>
              <br />
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
    </div>
  );
};
