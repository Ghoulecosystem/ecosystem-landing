import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Footer } from "..";
import { Font } from "..";
import { logo, discordIcon } from "../../images";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 100,
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  },
  mainarea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
  },
  title: {
    fontSize: Font.l,
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      fontSize: Font.size28,
      textAlign: "center",
      lineHeight: 1.2,
    },
  },
  description: {
    color: theme.palette.secondary.textColor,
    marginTop: 8,
    width: 550,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
      width: 475,
      marginTop: 5,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: "100%",
    },
  },
  btn: {
    display: "flex",
    alignItems: "center",
    marginTop: 35,
    paddingBottom: 185,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 70,
    },
  },
  button: {
    height: 52,
    width: 140,
    backgroundColor: "#6851fe33",
    borderRadius: 8,
    border: "1px solid #6851fe",
    fontSize: Font.size16,
    textTransform: "capitalize",
    marginRight: 30,
    "&:hover": {
      backgroundColor: "#6851fe33",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: 14,
      height: 30,
      marginRight: 10,
      borderRadius: 5,
      padding: "20px 0",
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  icon: {
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginRight: 3,
    },
  },

}));

export const JoinCommunity = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainContainer}>
        <div className="container">
          <div className={classes.mainarea}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography className={classes.title}>
              Join our Community
            </Typography>
            <Typography className={classes.description}>
               We are open to contributions and collaborations of any creative ideas
                and concepts that aligns and expands the vision for the ecosystem. 
                We respect that it's your personal choice whether you remain anonymous or not.<br/><br/>
              Let's BUIDL and grow something awesome together!
            </Typography>
            <div className={classes.btn}>
              <Grid spacing={2} container>
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={6}
                  key={0}
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://twitter.com/Poltergeistlabs"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      <TwitterIcon style={{ marginRight: 10 }} />
                      Twitter
                    </Button>
                  </a>
                </Grid>


                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={6}
                  key={2}
                  style={{ textAlign: "center" }}
                >

                  <a
                    href="https://t.me/poltergeistlabs"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      <TelegramIcon style={{ marginRight: 10 }} />
                      Telegram
                    </Button>
                  </a>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={6}
                  key={3}
                  style={{ textAlign: "center" }}
                >

                  <a
                    href="https://www.reddit.com/r/PoltergeistDEX/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      <RedditIcon style={{ marginRight: 10 }} />
                      Reddit
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>         
            </div>
        </div>
        <Footer style={{ paddingTop: 50 }} />
      </div>
    </div>
  );
};
