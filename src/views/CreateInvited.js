/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "components/CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import CryptoJS from "crypto-js";
import moment from "moment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import db from "constants/FirebaseConfig";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

let now = new Date();
const date = moment(now).format("YYYY-MM-DD hh:mm:ss");

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    width: "20%",
    height: "50px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    width: "100%",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const HEADER_COLUMN = [
  "Id",
  "Familia/Amistad",
  "Cantidad",
  "Respuesta",
  "Opciones",
];

const MENSAJE =
  "%5fHola, Buen día!%5f 💌%0a%0a%5fEsperamos que se encuentren muy bien.%5f%0a%5fLes hacemos llegar la invitación a Nuestra Boda%5f🤵👰 %5fesperando que%5f%0a%5fpuedan asistir, estamos muy contentos de compartir este momento%5f%0acon ustedes.%0a%0a%5fEn este mensaje se adjunta el link de la invitación, donde pueden%5f%0a%5fencontrar todos los detalles del evento, favor de confirmar su%5f%0a%5fasistencia dentro de la misma y respetar la cantidad de invitados.%5f%0a%0a%5fMuchas gracias.%5f%0a%0a%5fAtt: Vianney y Jorge%5f❤️";

export default function CreateInvited() {
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [resultado, setResultado] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    obtenerDatos().then((response) => setData(response));
  }, []);

  const obtenerDatos = async () => {
    const q = query(collection(db, process.env.REACT_APP_FIREBASE_COLLECTION));

    let info = new Array();
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      info.push({ id: doc.id, ...doc.data() });
    });

    return info;
  };

  const limpiar = () => {
    setCantidad("");
    setDescripcion("");
    setResultado("");
  };

  const borrarInfo = async (id) => {
    await deleteDoc(doc(db, process.env.REACT_APP_FIREBASE_COLLECTION, id));
    obtenerDatos().then((response) => setData(response));
  };

  const guardarInfo = async () => {
    if (!descripcion || descripcion.trim() === "") {
      return;
    }

    if (!cantidad || cantidad.trim() === "") {
      return;
    }

    try {
      await addDoc(collection(db, process.env.REACT_APP_FIREBASE_COLLECTION), {
        cantidad: cantidad,
        descripcion: descripcion,
        fecha: date.toString(),
        respuesta: false,
      }).then((response) => {
        setResultado(response.id);
      });
      obtenerDatos().then((response) => setData(response));
      limpiar();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function onlyNumbers(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }

  const redireccionar = (id) => {
    const encode = encodeURIComponent(id);
    const url = URL + encode;
    let anchor = document.createElement("a");
    const HREF = `whatsapp://send?text=${MENSAJE} %0a ${url}`;
    anchor.href = HREF;
    anchor.target = "_blank";
    anchor.click();
    console.log(HREF);
  };

  const URL =
    process.env.REACT_APP_PROD_ENV == "SI"
      ? `${process.env.REACT_APP_IP_PROD}${resultado}`
      : `${process.env.REACT_APP_IP_LOCAL}${resultado}`;

  return (
    <div>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <TextField
          label="Cantidad"
          value={cantidad}
          onChange={(event) => {
            setCantidad(event.target.value);
          }}
          inputProps={{ maxLength: 10 }}
          onInput={(e) => {
            onlyNumbers(e);
          }}
        />
        <TextField
          style={{ marginLeft: "10px" }}
          label="Descripción"
          value={descripcion}
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            guardarInfo();
          }}
        >
          Crear Invitacion
        </Button>
        <br></br>
        <br></br>
        <TextField
          label="Codigo"
          multiline
          value={URL}
          disabled={true}
          fullWidth
        />
      </div>

      <br></br>
      <TableContainer style={{ padding: "15px" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {HEADER_COLUMN.map((index) => {
                return (
                  <StyledTableCell key={index} align="center">
                    {index}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {data ? (
            <TableBody>
              {data?.map((row) => (
                <StyledTableRow key={row?.id}>
                  <StyledTableCell component="th" scope="row">
                    {row?.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row?.descripcion}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row?.cantidad}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row?.respuesta ? "Si" : "No hay respuesta"}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    <IconButton
                      style={{ color: "#25d366" }}
                      aria-label="shared"
                      onClick={() => redireccionar(row?.id)}
                    >
                      <WhatsAppIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      aria-label="delete"
                      onClick={() => borrarInfo(row?.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </div>
  );
}
