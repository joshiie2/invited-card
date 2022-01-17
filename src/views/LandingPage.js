import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Banner from "components/Banner/Banner";
import HeaderLinks from "components/Header/HeaderLinks.js";

// Sections for this page
import styles from "assets/jss/material-kit-react/views/landingPage";
import Bienvenida from "./Bienvenida/Bienvenida";
import Ceremonia from "./Locaciones/Ceremonia";
import Celebracion from "./Locaciones/Celebracion";
import MesaRegalos from "./Regalos/MesaRegalos";
import Asistencia from "./Asistencia/Asistencia";
import Vestimenta from "./Locaciones/Vestimenta";

const image =
  "https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="VJ"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 500,
          color: "white",
        }}
        {...rest}
      />

      <Banner
        urlImage={image}
        title={<h1>Nuestra Boda</h1>}
        subtitle={<h1>Vianney & Jorge</h1>}
      />
      <div className={classNames(classes.main)}>
        <Bienvenida />
        <Ceremonia />
        <Celebracion />
        <Vestimenta />
        <MesaRegalos />
        <Asistencia />
      </div>
      <Footer />
    </div>
  );
}
