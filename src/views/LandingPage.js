/* eslint-disable no-unused-vars */
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
import Vestimenta from "./Vestimenta/Vestimenta";
import Fotos from "./Fotos/Fotos";
import Background from "assets/img/wedding/background.jpeg";
import { getDoc, doc } from "firebase/firestore";
import db from "constants/FirebaseConfig";
import Asistencia from "./Asistencia/Asistencia";

const useStyles = makeStyles(styles);

export default function LandingPage(Props) {
  const classes = useStyles();
  const [data, setData] = useState();
  const { ...rest } = Props;
  const { id } = Props;

  const buscarPorId = async () => {
    const docSnap = await getDoc(
      doc(db, process.env.REACT_APP_FIREBASE_COLLECTION, id)
    );

    let str = {};
    if (docSnap.exists()) {
      str = {
        id: docSnap.id,
        ...docSnap.data(),
      };
    }

    return str;
  };

  useEffect(() => {
    if (id) {
      buscarPorId().then((response) => setData(response));
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
