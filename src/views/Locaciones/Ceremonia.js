import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Anillos from "assets/img/wedding/anillos2.png";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import InfoDate from "components/InfoArea/InfoDate";
import * as Constantes from "constants/Constantes";
import FadeInSection from "components/FadeInSection/FadeInSection";

const useStyles = makeStyles(styles);

export default function Ceremonia() {
  const classes = useStyles();
  return (
    <div id="ceremonia" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <InfoArea
              title={Constantes.TITLO_CEREMONIA}
              image={Anillos}
              iconColor="info"
              vertical
            />
          </h2>
          <h5 className={classes.description}>
            <b>{Constantes.LUGAR_CEREMONIA}</b>
          </h5>
          <h5 className={classes.description}>
            {Constantes.TEXTO_INFORMATIVO_CEREMONIA}
          </h5>
          <InfoDate
            day={Constantes.DIA_EVENTO}
            month={Constantes.MES_EVENTO}
            year={Constantes.ANIO_EVENTO}
            hour={Constantes.HORA_CEREMONIA}
          />
          <h5 className={classes.description}>
            {Constantes.NUEVA} {Constantes.COLONIA}, {Constantes.ESTADO}
          </h5>
          <FadeInSection>
            <Button
              color="rose"
              onClick={() => {
                window.open(Constantes.URL_UBICACIÓN_CEREMONIA);
              }}
            >
              {Constantes.BTN_VER_UBICACION}
            </Button>
          </FadeInSection>
        </GridItem>
      </GridContainer>
    </div>
  );
}
