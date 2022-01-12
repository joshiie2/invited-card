import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components

import styles from "assets/jss/material-kit-react/components/invited";

const useStyles = makeStyles(styles);

export default function Invited() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Estas invitado!</h2>
      <h5 className={classes.description}></h5>
    </div>
  );
}
