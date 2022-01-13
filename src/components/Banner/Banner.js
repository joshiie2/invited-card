import { makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax";
import React from "react";
import style from "assets/jss/material-kit-react/components/bannerStyle";
import "assets/jss/material-kit-react/components/bannerCss.css";

const useStyles = makeStyles(style);

export default function Banner(Props) {
  const classes = useStyles();
  const { urlImage, title, subtitle, timer } = Props;

  return (
    <Parallax image={urlImage}>
      <div className={classes.container}>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <GridContainer>
          <GridItem>
            <div className={classes.timer}>{timer}</div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
}
