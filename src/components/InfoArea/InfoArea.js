import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/infoStyle.js";
import FadeInSection from "components/FadeInSection/FadeInSection";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <FadeInSection>
        {props.icon ? (
          <div className={iconWrapper}>
            <props.icon className={iconClasses} />
          </div>
        ) : null}
        {props.image ? (
          <div className={iconWrapper}>
            <img src={props.image} className={iconClasses} />
          </div>
        ) : null}
      </FadeInSection>
      <div className={classes.descriptionWrapper}>
        <FadeInSection>
          <h4 className={classes.title}>{title}</h4>
        </FadeInSection>
        <p className={classes.description}>
          {description ? description : null}
        </p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  vertical: PropTypes.bool,
  image: PropTypes.string,
};
