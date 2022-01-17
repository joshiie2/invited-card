/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          type="button"
          onClick={() => {
            window.location.href = "#invitacion";
          }}
        >
          Invitación
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          type="button"
          onClick={() => {
            window.location.href = "#ceremonia";
          }}
        >
          Ceremonia
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          type="button"
          onClick={() => {
            window.location.href = "#recepcion";
          }}
        >
          Recepción
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          type="button"
          onClick={() => {
            window.location.href = "#vestimenta";
          }}
        >
          Vestimenta
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          type="button"
          onClick={() => {
            window.location.href = "#regalos";
          }}
        >
          Regalos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          type="button"
          onClick={() => {
            window.location.href = "#asistencia";
          }}
        >
          Asistencia
        </Button>
      </ListItem>
    </List>
  );
}
