import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Banner from "components/Banner/Banner";
import HeaderLinks from "components/Header/HeaderLinks.js";
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
      collection(db, process.env.REACT_APP_FIREBASE_COLLECTION),
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
        subtitle={<h2>Vianney & Jorge</h2>}
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
