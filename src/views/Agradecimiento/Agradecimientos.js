import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import Panda from "assets/img/agradecimiento/panda.png";

const useStyles = makeStyles(styles);

export default function Agradecimientos() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title2}>
            Muchas gracias por confirmar tu asistencia!
          </h2>
        </GridItem>
      </GridContainer>
      <center>
        <img src={Panda} />
      </center>
    </div>
  );
}
