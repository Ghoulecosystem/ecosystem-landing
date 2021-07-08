import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import './style.css';
import { Font } from "..";
import { Footer, FooterDivider, Seo } from "..";
import { logo } from "../../images";

export const Staking = () => (
  <>
    <Seo title="GHOUL Staking" />
    <StakingTiers />
    <FooterDivider />
    <Footer />
  </>
);


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 26,
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 26,
    },
  },
  title: {
    fontSize: Font.l,
    fontWeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  title2: {
    fontSize: Font.l,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
   btnarea: {
    marginTop: 50,
    display: "flex",
    flexFlow: "column",
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
    textTransform: "capitalize",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "180px",
      fontSize: Font.size12,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
      width: "calc(100% - 15px)",
    },
  },
  mintFocus: {
    color: "#56ff99",
  },

}));


export default function StakingTiers() {
	const classes = useStyles();
    return (



<div className={classes.mainContainer}>
      <div className="container">
        <Grid container style={{ alignItems: "center" }}>
          <Grid item md={4} sm={12} xs={12}>
            <Typography className={classes.title}>
              Staking
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item  md={5} sm={12} xs={12}>

        	<br />
        	<p>
            Stake your GHOUL on Poltergeist Exchange for ecosystem governance, profit sharing and other upcoming benefits.<br /><br/>
        	</p>

           <div className={classes.btnsWrapper}>
              <a target="_blank"  rel="noreferrer" href="https://app.uniswap.org/#/swap?use=V2&&exactAmount=36.99&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x3bb86d867a9f3addf994cdadb210fa82f0d4157a" className={classes.btnLink}>
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
            </div><br/><br/>

        </Grid>
        <Grid item  md={7} sm={12} xs={12}>

	    
	            <div className="group">


	                    <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '30px' }}>
	                        <img className="goul-icon-a" src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
	                        <h2>Diamond</h2>
	                        <h3><sup>Under </sup>50,000 GHOUL</h3>
	                        <hr /><br />
	                        <ul>
	                            <li>Poltergeist Profit Sharing</li>
	                            <li>Surprise Airdrops</li>
	                            <li>Governance Voting</li>
	                        </ul>
	                        
	                    </div>
	                    <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '30px' }}>
	                        <img className="goul-icon-b" src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
	                        <h2>Platinum</h2>
	                        <h3><sup>Over </sup>50,000 GHOUL</h3>
	                        <hr /><br />
	                        <ul>
	                            <li>Poltergeist Profit Sharing</li>
	                            <li>Higher Staking APR</li>
                              <li>Exclusive Airdrops</li>
	                            <li>Governance Voting</li>
	                            <li>Early access to PRIFI Dapps</li>
	                        </ul>
	                        
	                    </div>
	            </div>


        </Grid>
        </Grid>
      </div>
    </div>


    )
};