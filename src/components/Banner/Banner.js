import { makeStyles } from "@material-ui/core";
import Parallax from "components/Parallax/Parallax";
import React from "react";
import style from "assets/jss/material-kit-react/components/bannerStyle";
import "assets/css/bannerCss.css";

const useStyles = makeStyles(style);

export default function Banner(Props) {
  const classes = useStyles();
  const { urlImage, title, subtitle } = Props;

  return (
    <Parallax image={urlImage}>
      <div className={classes.container}>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <a href="#invitacion" id="flecha-link">
          <div id="flecha"></div>
        </a>
      </div>
    </Parallax>
  );
}
