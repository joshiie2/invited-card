import React, { useState, useEffect } from "react";
import "assets/jss/material-kit-react/components/timer.scss";

export default function Timer() {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const countDate = new Date("Feb 25, 2022 16:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //how the fuck does work time?
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const countdown = () => {
    const textDay = Math.floor(gap / DAY);
    const textHour = Math.floor((gap % DAY) / HOUR);
    const textMinute = Math.floor((gap % HOUR) / MINUTE);
    const textSecond = Math.floor((gap % MINUTE) / SECOND);

    setDay(textDay);
    setHour(textHour);
    setMinute(textMinute);
    setSecond(textSecond);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      countdown();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="container">
      <div className="timer">
        <div className="days">
          <div className="numbers">{day}</div>
          <div className="string">Dias</div>
        </div>
        <div className="hours">
          <div className="numbers">{hour}</div>
          <div className="string">Horas</div>
        </div>
        <div className="minutes">
          <div className="numbers">{minute}</div>
          <div className="string">Minutos</div>
        </div>
        <div className="seconds">
          <div className="numbers">{second}</div>
          <div className="string">Segundos</div>
        </div>
      </div>
    </div>
  );
}
