/* eslint-disable no-unused-vars */
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
import Background from "assets/img/wedding/background.jpeg";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "constants/FirebaseConfig";

const useStyles = makeStyles(styles);

export default function LandingPage(Props) {
  const classes = useStyles();
  const [data, setData] = useState();
  const { ...rest } = Props;
  const { hash } = Props;

  const obtenerDatos = async () => {
    const q = query(
      collection(db, "lista-invitados"),
      where("hashCode", "==", hash)
    );

    let info;
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      info = doc;
    });

    return info;
  };

  useEffect(() => {
    if (hash) {
      obtenerDatos().then((response) => setData(response));
    }
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
        <Asistencia data={data} />
      </div>
      <Footer />
    </div>
  );
}
