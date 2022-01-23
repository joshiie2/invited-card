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
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import db from "constants/FirebaseConfig";

let now = new Date();
const date = moment(now).format("YYYY-MM-DD hh:mm:ss");

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const HEADER_COLUMN = [
  "Familia/Amistad",
  "Cantidad",
  "Respuesta",
  "HasCode",
  "Compartir",
];

export default function CreateInvited() {
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [resultado, setResultado] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    obtenerDatos().then((response) => setData(response));
  }, []);

  const obtenerDatos = async () => {
    const q = query(
      collection(db, process.env.REACT_APP_FIREBASE_COLLECTION),
      where("respuesta", "==", true)
    );

    let info = new Array();
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      info.push(doc.data());
    });

    return info;
  };

  const obtenerDatoPorId = async (hash) => {
    const q = query(
      collection(db, process.env.REACT_APP_FIREBASE_COLLECTION),
      where("hashCode", "==", hash)
    );

    let info;
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      info = doc.data();
    });

    if (info) {
      return true;
    } else {
      return false;
    }
  };

  const guardarInfo = async () => {
    if (!descripcion || descripcion.trim() === "") {
      return;
    }

    if (!cantidad || cantidad.trim() === "") {
      return;
    }

    const str = {
      descripcion: descripcion,
      cantidad: cantidad,
    };

    const hash = await generarHash(str);

    obtenerDatoPorId(hash).then(async (response) => {
      if (!response) {
        try {
          await addDoc(
            collection(db, process.env.REACT_APP_FIREBASE_COLLECTION),
            {
              cantidad: cantidad,
              descripcion: descripcion,
              fecha: date.toString(),
              hashCode: hash,
              respuesta: false,
            }
          );
          setResultado(hash);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    });
  };

  const generarHash = async (str) => {
    const key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY);
    const iv1 = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(str), key, {
      keySize: 16,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted + "";
  };

  function onlyNumbers(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }

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
          value={
            process.env.REACT_APP_PROD_ENV == "SI"
              ? `${process.env.REACT_APP_IP_PROD}${resultado}`
              : `${process.env.REACT_APP_IP_LOCAL}${resultado}`
          }
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
                <StyledTableRow key={row?.hashCode}>
                  <StyledTableCell component="th" scope="row">
                    {row?.descripcion}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.cantidad}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.respuesta ? "Si" : "No"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.hashCode}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <a
                      href="https://api.whatsapp.com/send?phone=6442460683"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Compartir
                    </a>
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
