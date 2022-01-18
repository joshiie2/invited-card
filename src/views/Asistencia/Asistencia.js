import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as Constantes from "constants/Constantes";
import FadeInSection from "components/FadeInSection/FadeInSection";

const useStyles = makeStyles(styles);

//FECHA - 2022-01-25
export default function Asistencia(Props) {
  const classes = useStyles();
  const [agree, setAgree] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const { fecha, personas, descripcion } = Props;

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

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
                {personas} {Constantes.PERSONAS}
              </b>
            </h5>
          </FadeInSection>
          <br></br>
          <div>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree"> {Constantes.ADVERTENCIA}</label>
            <br></br>
            {readMore ? (
              <>
                <label htmlFor="agree">
                  {Constantes.ADVERTENCIA_CONTINUED}
                </label>
                <br></br>
                <label htmlFor="agree"> {Constantes.ADVERTENCIA_END}</label>
              </>
            ) : null}{" "}
            <label>
              <a
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {readMore ? "Menos" : "Mas"}
              </a>
            </label>
          </div>
          <br></br>
          <FadeInSection>
            <Button
              color="rose"
              onClick={() => {
                window.open(
                  `${Constantes.GOOGLE_FORM}usp=pp_url&entry.1073793534=${fecha}&entry.1919041025=${descripcion}&entry.1631805710=${personas}&entry.996980084=${Constantes.RESPUESTA_SI}`
                );
              }}
              style={{ width: "250px" }}
              disabled={!agree}
            >
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
