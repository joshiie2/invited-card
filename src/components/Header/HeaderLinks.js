/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Nosotros
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Productos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Testimonios
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Contacto
        </Button>
      </ListItem>
    </List>
  );
}
