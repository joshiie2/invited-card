import React, { useState } from "react";
import Button from "components/CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import CryptoJS from "crypto-js";
import { collection, addDoc } from "firebase/firestore";
import db from "constants/FirebaseConfig";
import moment from "moment";

let now = new Date();
const date = moment(now).format("YYYY-MM-DD hh:mm:ss");

export default function CreateInvited() {
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [resultado, setResultado] = useState("");

  const guardarInfo = async () => {
    const hash = await generarHash();
    try {
      await addDoc(collection(db, process.env.REACT_APP_FIREBASE_COLLECTION), {
        cantidad: cantidad,
        descripcion: descripcion,
        fecha: date.toString(),
        hashCode: hash,
        respuesta: false,
      });
      setResultado(hash);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const generarHash = async () => {
    const str = {
      descripcion: descripcion,
      cantidad: cantidad,
    };

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
    </div>
  );
}
