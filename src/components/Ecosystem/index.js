import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import './style.css';
import { Font } from "..";
import { Footer, FooterDivider, Seo } from "..";
import { logo, ghostdai, locked } from "../../images";

export const Ecosystem = () => (
  <>
    <Seo title="GHOUL Ecosystem" />
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
              Ecosystem
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item  md={12} sm={12} xs={12}>

        	<br />
        	<p>
            Stake your $GHOUL towards projects within the ecosystem to earn their governance and utility tokens.<br /><br/>
        	</p>

           <div className={classes.btnsWrapper}>
              <a target="_blank"  rel="noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x171ce6141e7a5980222bc6b757ee2f1f95b3264e" className={classes.btnLink}>
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
        <Grid item  md={12} sm={12} xs={12}>

	    
	            <div className="group">


	                    <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '20px' }}>
	                        <img className="" src={ghostdai} alt="gDAI Protocol" height={150} />
	                        <h2>gDAI</h2>
	                        <h4>Stablecoin backed with collateral of your crypto holdings</h4>
	                        <hr /><br />
	                        <ul>
	                            <li>
                                <a target="_blank"  rel="noreferrer" href="https://app.ghoul.finance" className={classes.btnLink}>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.btnCommon}
                                    style={{ width: 225 }}
                                  >
                                    Launch App{" "}
                                  </Button>
                                </a>
                              </li>

	                            <li>
                                <a target="_blank"  rel="noreferrer" href="https://docs.ghoul.finance" className={classes.btnLink}>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.btnCommon}
                                    style={{ width: 225 }}
                                  >
                                    Learn More{" "}
                                  </Button>
                                </a>
                              </li>
	                        </ul>
	                        
	                    </div>
	                    <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '20px' }}>
	                        <img className="" src={locked} alt="gDAI Protocol" height={150} />
	                        <h2>Locked</h2>
	                        <h4>-----</h4>
	                        <hr /><br />
	                        <ul>
	                            <li>Coming Soon...</li>
	                        </ul>
	                        
	                    </div>
                      <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '20px' }}>
                          <img className="" src={locked} alt="gDAI Protocol" height={150} />
                          <h2>Locked</h2>
                          <h4>-----</h4>
                          <hr /><br />
                          <ul>
                              <li>Coming Soon...</li>

                          </ul>
                          
                      </div>
                      <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '20px' }}>
                          <img className="" src={locked} alt="gDAI Protocol" height={150} />
                          <h2>Locked</h2>
                          <h4>-----</h4>
                          <hr /><br />
                          <ul>
                              <li>Coming Soon...</li>

                          </ul>
                          
                      </div>
	            </div>


        </Grid>
        </Grid>


      </div>
    </div>


    )
};