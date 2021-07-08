import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Font } from "..";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 76,
    paddingBottom: 94,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  ghostDefiImg: {
    borderRadius: 15,
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "215px",
    objectFit: "cover",
  },
  defiTitle: {
    fontSize: Font.size25,
    marginTop: 21,
    fontWeight: "bold",
    lineHeight: 1.2,
    width: 330,
    color: "#FFF",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      width: 195,
      paddingTop: 10,
      marginTop: 0,
    },
  },
  defiDescription: {
    fontSize: Font.m,
    color: theme.palette.secondary.textColor,
    marginTop: 15,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      fontSize: 14,
    },
  },
  time: {
    fontSize: Font.sm,
    color: "#72757E",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 10,
    },
  },
  category: {
    padding: "15px 20px",
    borderRadius: 4,
    marginTop: 15,
    textAlign: "center",
    maxWidth: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      padding: "7px 13px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
}));

export const NewsCard = (props) => {
  const classes = useStyles();
  const { index, data } = props;
  return (
    <Grid item md={4} sm={6} xs={12} key={index}>
      <a
        style={{ display: "block" }}
        href={data.link}
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={data.image}
          alt={data.title}
          className={classes.ghostDefiImg}
        />
      </a>
      {/* <Typography
        className={classes.category}
        style={{ backgroundColor: "rgba(174, 255, 0, 0.1)", color: "#AEFF00" }}
      >
        {data.type}
      </Typography> */}
      <Typography className={classes.defiTitle}>
        <a
          href={data.link}
          // rel="noreferrer"
          // target="_blank"
          className={classes.defiTitle}
        >
          {data.title}
        </a>
      </Typography>
      <Typography className={classes.defiDescription}>
        {data.content}
      </Typography>
      <Typography className={classes.time}>{data.date}</Typography>
    </Grid>
  );
};
