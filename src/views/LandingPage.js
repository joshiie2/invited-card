import React, { useEffect } from "react";
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
import Vestimenta from "./Vestimenta/Vestimenta";
import Fotos from "./Fotos/Fotos";

import Background from "assets/img/wedding/background.jpeg";
import moment from "moment";
import { useParams } from "react-router-dom";
import cryptoJs from "crypto-js";

const useStyles = makeStyles(styles);

let now = new Date();
const date = moment(now).format("YYYY-MM-DD");
let personas = "";
let descripcion = "";

export default function LandingPage(props) {
  const { user } = useParams();
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    //var bytes = cryptoJs.AES.decrypt(user);
    //var decryptedData = JSON.parse(bytes.toString("UTF-8"));
    console.log(bytes);
  }, []);

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
        urlImage={Background}
        title={<h1>Nuestra Boda</h1>}
        subtitle={
          <h2>
            Vianney <span style={{ color: "red" }}>&</span> Jorge
          </h2>
        }
      />
      <div className={classNames(classes.main)}>
        <Bienvenida />
        <Ceremonia />
        <Celebracion />
        <Vestimenta />
        <Fotos />
        <MesaRegalos />
        <Asistencia
          fecha={date}
          personas={personas}
          descripcion={descripcion}
        />
      </div>
      <Footer />
    </div>
  );
}
