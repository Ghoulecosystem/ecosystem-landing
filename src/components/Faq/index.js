import React from "react";
import { Link } from "gatsby";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Footer, FooterDivider, Font, Seo } from "..";
import { FaqGeneral } from "./General";
import { FaqStaking } from "./Staking";
import { FaqVeteran } from "./Veteran";
import { FaqExchange } from "./Exchange";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 70,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 20,
    },
  },
  title: {
    fontSize: Font.l,
    lineHeight: 1.2,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
      width: "100%",
    },
  },
  btn: {
    paddingTop: 53,
    paddingBottom: 70,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 50,
    },
  },
  button: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 15,
    },
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("xs")]: {
      marginLeft: -9,
      fontSize: Font.size16,
    },
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
  section: {
    paddingRight: 70,
    paddingBottom: 70,
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
  },
}));

export const FaqContainer = (props) => {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <Grid item sm={12} xs={12} md={6} className={classes.section}>
      <Typography className={classes.subtitle}>{title}</Typography>
      <Typography className={classes.description}>{children}</Typography>
    </Grid>
  );
};

const FaqMenuButton = ({ title, base, location }) => {
  const classes = useStyles();
  if (location.pathname === base) {
    return (
      <Link className="routerlink" to={base}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          {title}
        </Button>
      </Link>
    );
  }
  return (
    <Link className="routerlink" to={base}>
      <Button
        color="inherit"
        className={classes.button}
        style={{ opacity: 0.5 }}
      >
        {title}
      </Button>
    </Link>
  );
};

const routes = [
  { path: "/faq", Component: FaqGeneral },
  { path: "/faq/staking", Component: FaqStaking },
  { path: "/faq/veterans", Component: FaqVeteran },
  { path: "/faq/exchange", Component: FaqExchange },
];

export const Faq = (props) => {
  const classes = useStyles();
  const { location } = props;
  const Item = routes.find((item) => item.path === location.pathname);

  return (
    <div className="container">
      <Seo title="Faq" />
      <div className={classes.container}>
        <Typography className={classes.title}>
          Frequently Asked Questions
        </Typography>
        <div className={classes.btn}>
          <FaqMenuButton title="General" base="/faq" location={location} />
          <FaqMenuButton
            title="Staking"
            base="/faq/staking"
            location={location}
          />
          <FaqMenuButton
            title="Veterans"
            base="/faq/veterans"
            location={location}
          />
          <FaqMenuButton
            title="Exchanges"
            base="/faq/exchange"
            location={location}
          />
        </div>
        {Item ? <Item.Component /> : <FaqGeneral />}
        <FooterDivider />
        <Footer />
      </div>
    </div>
  );
};
