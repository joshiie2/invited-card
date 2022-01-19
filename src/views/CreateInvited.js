import React, { useState } from "react";
import Button from "components/CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import * as Constantes from "constants/Constantes";
import CryptoJS from "crypto-js";

export default function CreateInvited() {
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [resultado, setResultado] = useState("");

  function generarHash() {
    const str = {
      descripcion: descripcion,
      cantidad: cantidad,
    };

    const key = CryptoJS.enc.Utf8.parse(Constantes.SECRET_KEY);
    const iv1 = CryptoJS.enc.Utf8.parse(Constantes.SECRET_KEY);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(str), key, {
      keySize: 16,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    setResultado(encrypted + "");
  }

  function onlyNumbers(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }

  return (
    <div>
      <TextField
        style={{ marginLeft: "10px", marginTop: "10px" }}
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
        style={{ marginLeft: "10px", marginTop: "10px" }}
        label="Descripción"
        value={descripcion}
        onChange={(event) => {
          setDescripcion(event.target.value);
        }}
      />
      <Button
        style={{ marginLeft: "10px", marginTop: "10px" }}
        onClick={() => {
          generarHash();
        }}
      >
        Crear Invitacion
      </Button>
      <br></br>
      <br></br>
      <TextField
        style={{ marginLeft: "10px", marginTop: "10px" }}
        label="Codigo"
        multiline
        value={`http://localhost:3000/?hash=${resultado}`}
        disabled={true}
        fullWidth
      />
    </div>
  );
}
