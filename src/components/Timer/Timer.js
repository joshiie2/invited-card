import React from "react";
import "assets/scss/timer.scss";

export default function Timer() {
  return (
    <div className="container">
      <div className="timer">
        <div className="days">
          <div className="numbers">0</div>
          <div className="string">Dias</div>
        </div>
        <div className="hours">
          <div className="numbers">0</div>
          <div className="string">Horas</div>
        </div>
        <div className="minutes">
          <div className="numbers">0</div>
          <div className="string">Minutos</div>
        </div>
        <div className="seconds">
          <div className="numbers">0</div>
          <div className="string">Segundos</div>
        </div>
      </div>
    </div>
  );
}
