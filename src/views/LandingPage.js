import React, { useEffect, useState } from "react";
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
import * as Constantes from "constants/Constantes";
import Background from "assets/img/wedding/background.jpeg";
import moment from "moment";
import CryptoJS from "crypto-js";

const useStyles = makeStyles(styles);

let now = new Date();
const date = moment(now).format("YYYY-MM-DD hh:mm:ss");

export default function LandingPage(Props) {
  const classes = useStyles();
  const [cantidad, setCantidad] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [hashCode, setHashCode] = useState(null);
  const [asistencia, setAsistencia] = useState(false);
  const { ...rest } = Props;
  const { hash } = Props;

  useEffect(() => {
    if (hash) {
      try {
        console.log(hash);

        const key = CryptoJS.enc.Utf8.parse(Constantes.SECRET_KEY);
        const iv1 = CryptoJS.enc.Utf8.parse(Constantes.SECRET_KEY);
        const bytes = CryptoJS.AES.decrypt(hash, key, {
          keySize: 16,
          iv: iv1,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        });

        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setCantidad(decryptedData.cantidad);
        setDescripcion(decryptedData.descripcion);
        setHashCode(hash);
      } catch (e) {
        console.log(e);
        setCantidad(null);
        setDescripcion(null);
        setAsistencia(false);
      }
    }
  });

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
          cantidad={cantidad}
          descripcion={descripcion}
          hashCode={hashCode}
          asistencia={asistencia}
        />
      </div>
      <Footer />
    </div>
  );
}
