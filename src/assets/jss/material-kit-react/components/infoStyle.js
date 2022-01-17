import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
} from "assets/jss/material-kit-react.js";

const text = {
  color: "#999",
  fontSize: "22px",
  lineHeight: "150%",
};

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  icon: {
    width: "36px",
    height: "36px",
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
  title: {
    ...title,
    fontSize: "25px",
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px",
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },

  //divs
  divLeft: {
    float: "left",
    paddingLeft: "20%",
  },
  divCenter: {
    height: "100px",
    paddingTop: "30px",
  },
  divRight: {
    float: "right",
    fontSize: "28px",
    paddingRight: "10%",
  },
  //descripciones
  descriptionLeft: {
    ...text,
    color: "#999",
    fontSize: "22px",
  },
  descriptionCenter: {
    ...text,
    verticalAlign: "center",
  },
  descriptionRight: {
    ...text,
    fontSize: "22px",
  },
};

export default infoStyle;
