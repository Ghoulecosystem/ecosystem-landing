import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import { Font } from "..";
import {
  ghostrewardVeteranlogoGreen,
  ghostrewardStakinglogoGreen,
} from "../../images";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
    },
  },
  stakingLogo: {
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
  },
  title: {
    fontSize: Font.ml,
    width: 155,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.m,
    },
  },
  description: {
    fontSize: Font.sm,
    color: theme.palette.secondary.textColor,
    width: 220,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      textAlign: "center",
      maxWidth: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 10,
      maxWidth: "100%",
    },
  },
  btnarrow: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 50,
    },
  },
}));

const list = [
  {
    logo: ghostrewardStakinglogoGreen,
    title: "Staking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    logo: ghostrewardVeteranlogoGreen,
    title: "Veteran",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export const RewardRightSide = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {list.map((data, index) => (
          <Grid item sm={6} xs={12} key={index}>
            <div className={classes.container}>
              <img
                src={data.logo}
                alt="Staking logo"
                className={classes.stakingLogo}
              />
              <Typography className={classes.title}>{data.title}</Typography>
              <Typography className={classes.description}>
                {data.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
