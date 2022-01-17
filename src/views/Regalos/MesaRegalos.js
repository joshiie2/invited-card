import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Regalo from "assets/img/wedding/regalo2.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as Constantes from "constants/Constantes";
import FadeInSection from "components/FadeInSection/FadeInSection";

const useStyles = makeStyles(styles);

export default function MesaRegalos() {
  const classes = useStyles();
  return (
    <div id="regalos" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <InfoArea
              title={Constantes.TITULO_REGALOS}
              image={Regalo}
              iconColor="info"
              vertical
            />
          </h2>
          <h5 className={classes.description}>
            {Constantes.TEXTO_INFORMATIVO_REGALOS}
          </h5>
          <br></br>
          <FadeInSection>
            <Button color="rose" style={{ width: "250px" }}>
              {Constantes.BTN_DATOS_BANCARIOS}
            </Button>
          </FadeInSection>
          <br></br>
          <FadeInSection>
            <Button color="rose" style={{ width: "250px" }}>
              {Constantes.BTN_MESA} {Constantes.ID_MESA_REGALO}
            </Button>
          </FadeInSection>
        </GridItem>
      </GridContainer>
    </div>
  );
}
