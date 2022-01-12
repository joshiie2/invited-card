const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1200px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.1)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
  overlayer: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
};

export default parallaxStyle;
