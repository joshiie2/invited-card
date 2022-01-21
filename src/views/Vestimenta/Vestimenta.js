import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Clothes from "assets/img/wedding/clothes.png";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as Constantes from "constants/Constantes";

const useStyles = makeStyles(styles);

export default function Vestimenta() {
  const classes = useStyles();
  return (
    <div id="vestimenta" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <InfoArea
              title={Constantes.TITULO_VESTIMENTA}
              image={Clothes}
              iconColor="info"
              vertical
            />
          </h2>
          <h5 className={classes.description}>
            <b>{Constantes.TEXTO_INFORMATIVO_VESTIMENTA}</b>
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
