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
import HeaderLinks from "components/Header/HeaderLinks.js";

// Sections for this page
import styles from "assets/jss/material-kit-react/views/landingPage";
import Agradecimientos from "./Agradecimiento/Agradecimientos";

const useStyles = makeStyles(styles);

export default function Thanks(Props) {
  const classes = useStyles();
  const { ...rest } = Props;

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

      <div className={classNames(classes.main)}>
        <Agradecimientos />
      </div>
      <Footer />
    </div>
  );
}
