import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
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
              <h2></h2>
              <p>
                Erase una ves un universo oscuro, un universo helado y
                matematico, No se sabe porque dos estrellas se miraron y se
                enamoraron tan grande y hermoso fue su amor que dejaron de hacer
                infalibles orbitas elípticas para dibujarse tiernos corazones
                entrelazados.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="card">
            <div className="image image2"></div>
            <div className="info">
              <h2></h2>
              <p>
                Se querían tanto pero la distancia era demaciado grande que no
                podían acariciarse ni besarse, podrían estar juntas pero eso
                estaba prohibido en un universo negro, helado y matemático. Aun
                así no se resignaron a vivir separadas alejadas por un
                silencioso y denso vacío.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="card">
            <div className="image image3"></div>
            <div className="info">
              <h2></h2>
              <p>
                Así que decidieron quebrantar la eterna ley del perfecto y
                ordenado universo con un cómplice guiño, salieron de sus orbitas
                convirtiéndose en dos estrellas fugaces dirigiéndose a un mismo
                destino desenfrenadas culminando en una explosión de amor.
              </p>
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
