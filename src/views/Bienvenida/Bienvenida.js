import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Timer from "components/Timer/Timer";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import * as Constantes from "constants/Constantes";

const useStyles = makeStyles(styles);

export default function Bienvenida() {
  const classes = useStyles();
  return (
    <div id="invitacion" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          {" "}
          <h2 className={`pulse ${classes.title2}`}>
            {Constantes.TITULO_BIENVENIDA}
          </h2>
          <h3
            className={classes.description}
            style={{ padding: 10, position: "relative" }}
          >
            Hay momentos en la vida que son especiales por sí solos, pero{" "}
            <br></br> sin lugar a dudas, el hecho de que Dios nos haya permitido
            <br></br> compartir junto a ustedes nuestro feliz comienzo, lo
            <br></br> convierte en un dia inolvidable. <br></br> <br></br>{" "}
            Gracias por hacer de este día algo especial.
          </h3>
          <Timer />
        </GridItem>
      </GridContainer>
    </div>
  );
}
