import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button";
import FadeInSection from "components/FadeInSection/FadeInSection";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as Constantes from "constants/Constantes";

const useStyles = makeStyles(styles);

//FECHA - 2022-01-25
export default function Asistencia(Props) {
  const classes = useStyles();
  const [agree, setAgree] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const { data } = Props;

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const BTN_ASISTENCIA =
    data && !data.respuesta ? (
      <FadeInSection>
        <Button
          color="rose"
          onClick={() => {}}
          style={{ width: "250px" }}
          disabled={!agree}
        >
          {Constantes.BTN_CONFIRMAR_ASISTENCIA}
        </Button>
      </FadeInSection>
    ) : null;

  const CHECK =
    data && !data.respuesta ? (
      <input type="checkbox" id="agree" onChange={checkboxHandler} />
    ) : null;

  const CANTIDAD_PERSONAS =
    data && !data.respuesta ? (
      <FadeInSection>
        <h5 className={classes.description}>
          <b>
            {data?.cantidad} {Constantes.PERSONAS}
          </b>
        </h5>
      </FadeInSection>
    ) : null;

  return (
    <div id="asistencia" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <InfoArea title={Constantes.TITULO_ASISTENCIA} vertical />
          </h2>
          <h5 className={classes.description}>{Constantes.TEXTO_ASISTENCIA}</h5>
          <br></br>
          {CANTIDAD_PERSONAS}
          <br></br>
          <div>
            {CHECK}
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
          {BTN_ASISTENCIA}
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
