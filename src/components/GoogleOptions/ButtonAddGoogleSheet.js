import React from "react";
import Button from "components/CustomButtons/Button";
import helpers from "constants/GoogleFunctions";

export default function ButtonAddGoogleSheet(Props) {
  const {
    disabled,
    color,
    title,
    fecha,
    cantidad,
    descripcion,
    hashCode,
    asistencia,
  } = Props;

  const newRow = {
    Fecha: fecha,
    Cantidad: cantidad,
    Descripcion: descripcion,
    HashCode: hashCode,
  };

  return (
    <div>
      <Button
        color={color}
        onClick={() => {
          helpers.addRow(newRow);
          //helpers.getRows(newRow);
        }}
        style={{ width: "250px" }}
        disabled={disabled && asistencia}
      >
        {title}
      </Button>
    </div>
  );
}
