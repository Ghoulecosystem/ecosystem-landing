import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { Font, NewsCard } from "..";
import { updates } from "../../data";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    paddingTop: 100,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  container: {
    paddingTop: 62,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
    },
  },
  imgTextbtn: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 25,
    },
  },
  header: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  title: {
    fontSize: Font.l,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  subtitle: {
    fontSize: Font.m,
    color: theme.palette.secondary.textColor,
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 0,
    },
  },
  ghostDefiImg: {
    borderRadius: 15,
    width: "100%",
    height: "auto",
  },
  btn: {
    marginTop: 55,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  button: {
    backgroundColor: "rgba(174, 255, 0, 0.1)",
    border: "none",
    outline: "none",
    color: theme.palette.secondary.main,
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: Font.size16,
    borderRadius: 4,
    cursor: "pointer",
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      padding: "10px 20px",
      fontSize: 12,
    },
  },
  defiTitle: {
    fontSize: Font.size25,
    width: 330,
    marginTop: 21,
    color: "#FFF",
    [theme.breakpoints.down("xs")]: {
      width: 250,
      lineHeight: 1.2,
      marginTop: 12,
      fontSize: 20,
    },
  },
  defiDescription: {
    fontSize: Font.m,
    width: 350,
    color: theme.palette.secondary.textColor,
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      width: 250,
      marginTop: 10,
      fontSize: 13,
    },
  },
  time: {
    fontSize: Font.sm,
    color: "#72757E",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },

  learnMore: {
    textAlign: "center",
  },

  btnLearnMore: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 87,
    border: "1px solid #fff",
    fontSize: Font.size16,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 25,
      height: 55,
      width: 160,
    },
  },
}));

export const DiveDeeper = () => {
  const classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      <div className="container">
        <div className={classes.header}>
          <Typography className={classes.title}>Latest Updates</Typography>
          <Typography className={classes.subtitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Typography>
        </div>
        <Grid container spacing={2} className={classes.container}>
          {updates.map((data, index) => (
            <NewsCard key={index} index={index} data={data} />
          ))}
        </Grid>
      </div>
      {/* <div className={classes.learnMore}>
        <a href="/news">
          <Button
            variant="contained"
            color="primary"
            className={classes.btnLearnMore}
          >
            Learn more
          </Button>
        </a>
      </div> */}
    </div>
  );
};
