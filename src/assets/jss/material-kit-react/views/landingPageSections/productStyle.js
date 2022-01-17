import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  title2: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontFamily: "'Great Vibes', cursive",
    fontSize: "12vh",
    color: "#999",
  },
  description: {
    color: "#999",
    fontSize: "22px",
    lineHeight: "150%",
  },
  soon: {
    fontFamily: "'Great Vibes', cursive",
    fontSize: "54px",
  },
};

export default productStyle;
