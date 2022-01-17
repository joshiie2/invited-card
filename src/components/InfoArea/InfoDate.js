import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/infoStyle.js";
import Barra from "assets/img/wedding/barra.png";
import FadeInSection from "components/FadeInSection/FadeInSection";

const useStyles = makeStyles(styles);

export default function InfoDate(props) {
  const classes = useStyles();
  const { day, month, hour } = props;

  return (
    <div className={classes.infoArea}>
      <div
        style={{ marginTop: "-20px", maxWidth: "400px", visibility: "visible" }}
      >
        <div className={classes.divLeft}>
          <br></br>
          <br></br>
          <FadeInSection>
            <span className={classes.descriptionLeft}>
              {day} {month}
            </span>
          </FadeInSection>
        </div>
        <img src={Barra} className={classes.divCenter} />
        <div className={classes.divRight}>
          <br></br>
          <br></br>
          <FadeInSection>
            <span className={classes.descriptionCenter}>{hour}</span>
            <span className={classes.descriptionRight}> P.M.</span>
          </FadeInSection>
          <p></p>
        </div>
      </div>
    </div>
  );
}

InfoDate.defaultProps = {
  iconColor: "gray",
};

InfoDate.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
  hour: PropTypes.string,
};
