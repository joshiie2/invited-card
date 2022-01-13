import React from "react";
// @material-ui/icons
// core components

import "assets/jss/material-kit-react/components/invited.css";

export default function Invited(Props) {
  const { timer } = Props;
  return (
    <div>
      <div>
        <h2>Estas invitado!</h2>
        <h3>Queremos que seas parte de este momento tan especial</h3>
      </div>
      {timer}
    </div>
  );
}
