import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: "#C4C4C4",
    marginBottom: 80,
    opacity: 0.1,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 50,
    },
  },
}));

export const FooterDivider = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <Divider className={classes.divider} />
    </div>
  );
};
