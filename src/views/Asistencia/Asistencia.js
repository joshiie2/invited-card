import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as Constantes from "constants/Constantes";
import FadeInSection from "components/FadeInSection/FadeInSection";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(styles);

export default function Asistencia(Props) {
  const classes = useStyles();
  const { cantidad } = Props;
  return (
    <div id="asistencia" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <InfoArea title={Constantes.TITULO_ASISTENCIA} vertical />
          </h2>
          <h5 className={classes.description}>{Constantes.TEXTO_ASISTENCIA}</h5>
          <br></br>
          <FadeInSection>
            <h5 className={classes.description}>
              <b>
                {cantidad} {Constantes.PERSONAS}{" "}
                <Tooltip title={Constantes.ADVERTENCIA}>
                  <InfoIcon style={{ fontSize: "20px" }} />
                </Tooltip>
              </b>
            </h5>
          </FadeInSection>
          <br></br>
          <FadeInSection>
            <Button color="rose" style={{ width: "250px" }}>
              {Constantes.BTN_CONFIRMAR_ASISTENCIA}
            </Button>
          </FadeInSection>
          <br></br>
          <br></br>
          <br></br>
          <FadeInSection>
            <h5 className={classes.soon}>{Constantes.TE_ESPERAMOS}</h5>
          </FadeInSection>
        </GridItem>
      </GridContainer>
    </div>
  );
}
