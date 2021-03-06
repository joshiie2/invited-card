import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import * as Constantes from "constants/Constantes";
import "assets/scss/fotos.scss";
import FadeInSection from "components/FadeInSection/FadeInSection";

const useStyles = makeStyles(styles);

export default function Fotos() {
  const classes = useStyles();

  return (
    <div id="nosotros" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <InfoArea title={Constantes.TITULO_FOTOS} vertical />
          </h2>
        </GridItem>
      </GridContainer>

      <div className="container-image">
        <FadeInSection>
          <div className="card">
            <div className="image image1"></div>
            <div className="info">
              <br></br>
              <br></br>
              <h3 style={{ fontSize: "14px" }}>
                Hoy, mañana y siempre<br></br>
                caminaré contigo.<br></br>
                Mi vida comienza contigo.<br></br>
                Dos vidas, un mundo.<br></br>
              </h3>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="card">
            <div className="image image2"></div>
            <div className="info">
              <br></br>
              <br></br>
              <h3 style={{ fontSize: "14px" }}>
                Amor es solo una palabra<br></br>
                hasta que alguien llega para darle sentido.<br></br>
              </h3>
              <p></p>
              <p></p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="card">
            <div className="image image3"></div>
            <div className="info">
              <br></br>
              <br></br>
              <br></br>
              <h3 style={{ fontSize: "14px" }}>
                Con ustedes compartimos nuestro mejor momento<br></br>
              </h3>
            </div>
          </div>
        </FadeInSection>
      </div>
      <svg>
        <filter id="wavy1">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.2"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      <svg>
        <filter id="wavy2">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      <svg>
        <filter id="wavy3">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.1"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  );
}
