import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";

export default function GridContainer(props) {
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={" " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
