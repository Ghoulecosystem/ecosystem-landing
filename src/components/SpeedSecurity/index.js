import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { Font } from "..";
import {
  veteransIconGreen,
  transactionIconGreen,
  privacyIconGreen,
  decentralizedIconGreen,
} from "../../images";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 150,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  container: {},
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: Font.l,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: Font.size28,
      textAlign: "center",
      lineHeight: 1.2,
    },
  },
  description: {
    color: "#94A1B2",
    fontSize: Font.m,
    width: 550,
    paddingTop: 10,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
      width: 550,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  cardarea: {
    paddingTop: 70,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  cardContainer: {
    border: "1px solid #2D2D2D",
    backgroundColor: "rgba(26, 26, 31, 0.7)",
    borderRadius: 15,
    backdropFilter: "blur(18px)",
    padding: 50,
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
  imgLogo: {
    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: 30,
    },
  },
  cardTitle: {
    color: "#fff",
    fontSize: Font.ml,
    paddingTop: 50,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      paddingTop: 10,
    },
  },
  cardDescription: {
    fontSize: Font.sm,
    color: "#94A1B2",
    paddingTop: 20,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
    },
  },
}));

const list = [
  {
    logo: privacyIconGreen,
    title: "Privacy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logo: decentralizedIconGreen,
    title: "Decentralized",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logo: transactionIconGreen,
    title: "Transaction",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

];

export const SpeedSecurity = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className="container">
          <Grid item sm={12} xs={12} className={classes.header}>
            <Typography className={classes.title}>
              Speed, Security, Scalability{" "}
            </Typography>
            <Typography className={classes.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Typography>
          </Grid>
          <Grid container spacing={2} className={classes.cardarea}>
            {list.map((data, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <div className={classes.cardContainer}>
                  <img src={data.logo} alt="Logo" className={classes.imgLogo} />
                  <Typography className={classes.cardTitle}>
                    {data.title}
                  </Typography>
                  <Typography className={classes.cardDescription}>
                    {data.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};
